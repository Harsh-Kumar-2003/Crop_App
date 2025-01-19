import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User"; // Import the User model

export default async function UserHome() {
  // Fetch the session using getServerSession
  const session = await getServerSession(authOptions);

  // If no session, redirect to login
  if (!session || !session.user?.email) {
    redirect("/user/login");
    return null; // To ensure the code stops execution if no session
  }

  // Fetch user by email to retrieve the UUID
  const user = await User.findOne({ email: session.user.email });

  // If user is not found, redirect to login (just in case)
  if (!user) {
    redirect("/user/login");
    return null; // To ensure the code stops execution if user is not found
  }

  // Redirect to the user's dynamic URL based on their UUID
  redirect(`/user/${user.uuid}/profile`);

  return null; // This component will never render due to redirection
}
