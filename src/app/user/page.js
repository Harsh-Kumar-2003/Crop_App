import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function UserHome() {
  // Fetch the session using getServerSession
  const session = await getServerSession(authOptions);

  // If no session, redirect to login
  if (!session || !session.user?.email) {
    redirect("/auth/login");
  }

  // Redirect to dynamic URL based on user's email
  const userEmail = session.user.email;
  redirect(`/user/${encodeURIComponent(userEmail)}`);

  return null; // This component will never render due to redirection
}
