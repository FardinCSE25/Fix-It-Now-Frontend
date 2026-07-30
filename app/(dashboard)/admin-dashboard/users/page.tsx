import { Ban, ShieldCheck } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { getAllUsers } from "../_actions/getAllUsers";
import BanUserModal from "../_components/BanUserModal";
import { User } from "../_types/user";

export default async function UsersPage() {
    const response = await getAllUsers();

    const users: User[] = response?.data || [];

    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="mx-auto max-w-350 space-y-6 p-2">
                <div>
                    <h1 className="text-3xl font-bold">
                        Users Management
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View all registered users and manage their account status.
                    </p>
                </div>

                <Card className="rounded-2xl">
                    <CardHeader>
                        <CardTitle>
                            All Users ({users.length})
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>User</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Joined</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {users.map((user: User) => {
                                    const initials =
                                        user.name
                                            ?.split(" ")
                                            .map((word: string) => word[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase() || "U";

                                    return (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarFallback>
                                                            {initials}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <span className="font-medium">
                                                        {user.name}
                                                    </span>
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                {user.email}
                                            </TableCell>

                                            <TableCell>
                                                <Badge className="text-white" variant="secondary">
                                                    {user.role}
                                                </Badge>
                                            </TableCell>

                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        user.status === "Active"
                                                            ? "default"
                                                            : "destructive"
                                                    }
                                                >
                                                    {user.status}
                                                </Badge>
                                            </TableCell>

                                            <TableCell>
                                                {new Date(
                                                    user.createdAt
                                                ).toLocaleDateString()}
                                            </TableCell>

                                            <TableCell className="text-right">
                                                {user.role === "Admin" ? (
                                                    <Badge
                                                        className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                                    >
                                                        <ShieldCheck className="mr-1 h-3.5 w-3.5" />
                                                        Protected
                                                    </Badge>
                                                ) : (
                                                    <BanUserModal
                                                        userId={user.id}
                                                        currentStatus={user.status}
                                                    />
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>

                        {users.length === 0 && (
                            <div className="py-16 text-center text-muted-foreground">
                                <Ban className="mx-auto mb-3 size-10 opacity-50" />

                                <p>No users found.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}