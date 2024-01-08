import AdminHeader from "@/components/header/AdminHeader";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminHeader />
      {children}
    </AuthProvider>
  );
}
