import {
    CalendarDays,
    Clock,
    Mail,
    ShieldCheck,
    User,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getMe } from "@/services/getMe";
import UpdateAvailabilityModal from "../_components/UpdateAvailabilityModal";
import EditProfileModal from "../_components/UpdateProfileModal";

export default async function MyProfilePage() {
    const user = await getMe();

    const profile = user?.data;

    const initials =
        profile?.name
            ?.split(" ")
            .map((item: string) => item[0])
            .join("")
            .slice(0, 2)
            .toUpperCase() || "U";

    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-350 mx-auto space-y-6 p-2">
                <div>
                    <h1 className="text-3xl font-bold">
                        My Profile
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View your personal information and account details.
                    </p>
                </div>

                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="flex flex-col items-center gap-5 px-8 py-0 md:flex-row">
                        <Avatar className="size-24">
                            <AvatarFallback className="text-2xl font-bold">
                                {initials}
                            </AvatarFallback>
                        </Avatar>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">
                                {profile?.name}
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                <Badge>{profile?.role}</Badge>

                                <Badge
                                    variant={
                                        profile?.status === "Active"
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {profile?.status}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Basic Information */}
                    <Card className="rounded-2xl">
                        <CardHeader>
                            <CardTitle>
                                Basic Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="flex items-center gap-3">
                                <User className="size-5 text-primary" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Full Name
                                    </p>

                                    <p className="font-medium">
                                        {profile?.name}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="size-5 text-primary" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Email
                                    </p>

                                    <p className="font-medium">
                                        {profile?.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <ShieldCheck className="size-5 text-primary" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Account Status
                                    </p>

                                    <p className="font-medium">
                                        {profile?.status}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <EditProfileModal
                                    bio={profile?.technicianProfile?.bio ?? ""}
                                    experience={profile?.technicianProfile?.experience ?? ""}
                                />

                                <UpdateAvailabilityModal
                                    workingDays={profile?.availability?.workingDays ?? []}
                                    startTime={profile?.availability?.startTime ?? ""}
                                    endTime={profile?.availability?.endTime ?? ""}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technician Information */}
                    {profile?.role === "Technician" && (
                        <Card className="rounded-2xl">
                            <CardHeader>
                                <CardTitle>
                                    Technician Information
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-5">
                                <div>
                                    <p className="mb-1 text-sm text-muted-foreground">
                                        Experience
                                    </p>

                                    <p className="font-medium">
                                        {profile?.technicianProfile
                                            ?.experience}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-1 text-sm text-muted-foreground">
                                        Bio
                                    </p>

                                    <p className="leading-7 text-muted-foreground">
                                        {profile?.technicianProfile
                                            ?.bio || "No bio available."}
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CalendarDays className="mt-1 size-5 text-primary" />

                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Working Days
                                        </p>

                                        <p className="font-medium">
                                            {profile?.availability?.workingDays.join(
                                                ", "
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="mt-1 size-5 text-primary" />

                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Working Hours
                                        </p>

                                        <p className="font-medium">
                                            {profile?.availability?.startTime} -
                                            {" "}
                                            {profile?.availability?.endTime}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
}