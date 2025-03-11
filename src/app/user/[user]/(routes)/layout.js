import "@/app/globals.css";
import LogoutButton from "@/components/LogOutButton";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "FieldMaven",
  description: "Created by SSLH",
};

export default async function RoutesLayout({ children, params }) {
  const { user } = await params;
  console.log("user", user);

  let userName;

  try {
    const uri = process.env.URL;
    const response = await fetch(`${uri}/api/nameByUuid?uuid=${user}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    userName = await response.json();
    console.log("User Name:", userName);
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
  }

  return (
    <>
      <main className="flex flex-col bg-white-900">
        {/* Sidebar is persistent and overlays content */}
        <Sidebar user={user} userName={userName} />
        <div>{children}</div>
      </main>
    </>
  );
}
