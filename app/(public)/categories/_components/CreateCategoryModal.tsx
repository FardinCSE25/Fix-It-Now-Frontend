"use client";

import { Loader2, Plus } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCategoryAction } from "../_actions/createCategoryAction";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateCategoryModal({
  open,
  onOpenChange,
}: Props) {
  const [state, action, pending] = useActionState(
    createCategoryAction,
    null
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);

      onOpenChange(false);

      return;
    }

    toast.error(state.message);
  }, [state, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Category</DialogTitle>

          <DialogDescription>
            Add a new service category for customers.
          </DialogDescription>
        </DialogHeader>

        <form action={action} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Category Title
            </label>

            <Input
              name="title"
              placeholder="Electrical"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Description
            </label>

            <Textarea
              name="description"
              placeholder="Write category description..."
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={pending}
            className="w-full"
          >
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Category
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}