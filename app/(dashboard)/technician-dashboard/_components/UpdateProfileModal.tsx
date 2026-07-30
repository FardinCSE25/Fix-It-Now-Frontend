"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { updateProfileAction } from "../_actions/updateProfileAction";

type Props = {
    bio: string;
    experience: string;
};

export default function UpdateProfileModal({
    bio: initialBio,
    experience: initialExperience,
}: Props) {
    const router = useRouter()
    const [open, setOpen] = useState(false);

    const [bio, setBio] = useState(initialBio);
    const [experience, setExperience] = useState(initialExperience);

    const [isPending, startTransition] =
        useTransition();

    const handleSubmit = () => {
        if (!experience.trim()) {
            toast.error("Experience is required.");
            return;
        }

        startTransition(async () => {
            const result = await updateProfileAction({
                bio,
                experience,
            });

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            toast.success(result.message);
            setOpen(false);

            router.refresh();
        });
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(value) => {
                setOpen(value);

                if (value) {
                    setBio(initialBio);
                    setExperience(initialExperience);
                }
            }}
        >
            <DialogTrigger
                render={
                    <Button className="w-full">
                        Update Profile
                    </Button>
                }
            />

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        Update Profile
                    </DialogTitle>

                    <DialogDescription>
                        Update your technician information.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <Label>
                            Experience
                        </Label>

                        <Input
                            value={experience}
                            placeholder="e.g. 5 years"
                            onChange={(e) =>
                                setExperience(
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Bio</Label>

                        <Textarea
                            rows={6}
                            value={bio}
                            placeholder="Write something about yourself..."
                            onChange={(e) =>
                                setBio(
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() =>
                            setOpen(false)
                        }
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={handleSubmit}
                        disabled={isPending}
                    >
                        {isPending
                            ? "Updating..."
                            : "Update Profile"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}