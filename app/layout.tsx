/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/01/2024 - 13:11:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/01/2024
    * - Author          : belgacem
    * - Modification    : 
**/
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}