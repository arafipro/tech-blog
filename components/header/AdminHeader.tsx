import SigninButton from "./SigninButton";

export default function AdminHeader() {
  return (
    <header className="flex p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <h1 className="text-3xl font-bold text-center">Arafipro Tech Blog Dashboard</h1>
      <SigninButton />
    </header>
  );
}
