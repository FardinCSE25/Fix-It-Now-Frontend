"use client";

import { useRouter } from "next/navigation";
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
import { updateAvailabilityAction } from "../_actions/updateAvailabilityAction";


type Props = {
    workingDays: string[];
    startTime: string;
    endTime: string;
};

export default function UpdateAvailabilityModal({
    workingDays: initialWorkingDays,
    startTime: initialStartTime,
    endTime: initialEndTime,
}: Props) {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    const [workingDays, setWorkingDays] = useState(
        initialWorkingDays.join(", ")
    );

    const [startTime, setStartTime] = useState(initialStartTime);

    const [endTime, setEndTime] = useState(initialEndTime);

    const [isPending, startTransition] = useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            const result = await updateAvailabilityAction({
                workingDays: workingDays
                    .split(",")
                    .map((day) => day.trim())
                    .filter(Boolean),

                startTime,
                endTime,
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
                    setWorkingDays(initialWorkingDays.join(", "));
                    setStartTime(initialStartTime);
                    setEndTime(initialEndTime);
                }
            }}
        >
            <DialogTrigger
                render={
                    <Button variant="outline" className="w-full">
                        Update Availability
                    </Button>
                }
            />

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Update Availability</DialogTitle>

                    <DialogDescription>
                        Update your working schedule.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <Label>Working Days (Comma Separated)</Label>

                        <Input
                            value={workingDays}
                            placeholder="Saturday, Sunday, Monday"
                            onChange={(e) =>
                                setWorkingDays(e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Start Time</Label>

                        <Input
                            value={startTime}
                            placeholder="09:00 AM"
                            onChange={(e) =>
                                setStartTime(e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>End Time</Label>

                        <Input
                            value={endTime}
                            placeholder="05:00 PM"
                            onChange={(e) =>
                                setEndTime(e.target.value)
                            }
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        disabled={isPending}
                        onClick={handleSubmit}
                    >
                        {isPending
                            ? "Updating..."
                            : "Update Availability"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}