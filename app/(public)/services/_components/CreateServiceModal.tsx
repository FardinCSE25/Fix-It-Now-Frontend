"use client";

import { Loader2, Plus } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createServiceAction } from "../_actions/createServiceAction";
import { Category } from "../_types/service";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: Category[];
};

export default function CreateServiceModal({
  open,
  onOpenChange,
  categories,
}: Props) {
  
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState<string>("");
  const [state, action, pending] = useActionState(createServiceAction, null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);
      onOpenChange(false);
      return;
    }

    toast.error(state.message);
  }, [state, onOpenChange]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedCategoryTitle("");
    }
    onOpenChange(isOpen);
  };

  const selectedCategoryId =
    categories.find((cat) => cat.title === selectedCategoryTitle)?.id ?? "";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create New Service</DialogTitle>
          <DialogDescription>
            Add a new service that customers can book.
          </DialogDescription>
        </DialogHeader>

        <form action={action} className="space-y-5">
          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <input type="hidden" name="categoryId" value={selectedCategoryId} />

            <Select
              value={selectedCategoryTitle}
              onValueChange={(val) => setSelectedCategoryTitle(val ?? "")}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>

              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.title}>
                    {category.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Service Title</label>
            <Input name="title" required placeholder="Split AC Installation" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              name="description"
              rows={5}
              required
              placeholder="Describe your service..."
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Price (৳)</label>
            <Input
              name="price"
              type="number"
              min={1}
              required
              placeholder="3200"
            />
          </div>

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Service
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}