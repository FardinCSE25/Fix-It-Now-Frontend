import { SidebarProvider } from "@/components/ui/sidebar";
import { getMe } from "@/services/getMe";
import DashboardSidebar from "./_components/DashboardSidebar";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
    
  const user = await getMe();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50/50 dark:bg-background">
        <DashboardSidebar user={user} />
        
        <div className="flex flex-1 flex-col min-w-0">
          {/* Header Bar */}
          <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <h1 className="text-xl font-semibold capitalize">
              {user?.data?.role} Dashboard
            </h1>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;