"use client";

import { Star } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { createReviewAction } from "../_actions/createReviewAction";


type Props = {
  bookingId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ReviewModal({
  bookingId,
  open,
  onOpenChange,
}: Props) {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [isPending, startTransition] =
    useTransition();

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    if (!comment.trim()) {
      toast.error("Comment is required.");
      return;
    }

    startTransition(async () => {
      const result =
        await createReviewAction({
          bookingId,
          rating,
          comment,
        });

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      onOpenChange(false);
      router.refresh()
      setRating(0);
      setComment("");
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Give Review
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">

          {/* Stars */}

          <div>
            <p className="mb-3 text-sm font-medium">
              Rating
            </p>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() =>
                    setRating(star)
                  }
                >
                  <Star
                    className={`size-8 transition ${star <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}

          <div>
            <p className="mb-2 text-sm font-medium">
              Comment
            </p>

            <Textarea
              rows={5}
              value={comment}
              placeholder="Share your experience..."
              onChange={(e) =>
                setComment(e.target.value)
              }
            />
          </div>

        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isPending}
          >
            Submit Review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}