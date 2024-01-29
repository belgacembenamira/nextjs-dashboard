/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/01/2024 - 13:06:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/01/2024
    * - Author          : belgacem
    * - Modification    : 
**/
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}