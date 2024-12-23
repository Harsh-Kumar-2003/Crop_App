import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function UserDashboard() {
  // Get the current session
  const session = await getServerSession(authOptions);

  // If no active session, redirect to home page
  if (!session) {
    redirect("/");
  }

  // If session is active, display user information
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600">Session On</h1>
      <p className="mt-4 text-lg">
        The user email is:{" "}
        <span className="font-medium">{session.user.email}</span>
      </p>
      <div>{session.user?.email}</div>
    </div>
  );
}
