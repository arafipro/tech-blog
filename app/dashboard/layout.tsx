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
      <div className="px-4 mt-4">{children}</div>
    </AuthProvider>
  );
}
