"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { updateUserStatusAction } from "../_actions/updateUserStatusAction";


type Props = {
    userId: string;
    currentStatus: "Active" | "Banned";
};

export default function BanUserModal({
    userId,
    currentStatus,
}: Props) {

    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const nextStatus =
        currentStatus === "Active" ? "Banned" : "Active";


    const buttonText =
        currentStatus === "Active"
            ? "Ban"
            : "Unban";

    const title =
        currentStatus === "Active"
            ? "Ban this user?"
            : "Unban this user?";

    const description =
        currentStatus === "Active"
            ? "The user will no longer be able to access the system."
            : "The user will regain access to the system.";

    const handleAction = () => {
        startTransition(async () => {
            const result = await updateUserStatusAction(
                userId,
                nextStatus
            );

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
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger
                render={
                    <Button
                        size="sm"
                        variant={currentStatus === "Active" ? "destructive" : "default"}
                    >
                        {buttonText}
                    </Button>
                }
            />

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {title}
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        variant={
                            currentStatus === "Active"
                                ? "destructive"
                                : "default"
                        }
                        onClick={handleAction}
                        disabled={isPending}
                    >
                        {isPending ? "Updating..." : buttonText}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}