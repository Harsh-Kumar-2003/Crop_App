import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ProfileForm from "@/components/forms/ProfileForm";
import ProfileCard from "@/components/Card/ProfileCard";
import bg from "@/public/images/user2.jpg";

export default async function Profile({ params }) {
  //const { user } = params;

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const url = process.env.URL;
  // console.log(url);
  // console.log(`${url}/api/uuidByEmail?email=${email}`);

  const uuidResponse = await fetch(`${url}/api/uuidByEmail?email=${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // contentType: "application/json",
  });
  //console.log(uuidResponse);
  if (!uuidResponse.ok) {
    console.log("here");
    throw new Error(
      `Error: ${uuidResponse.status} - ${uuidResponse.statusText}`
    );
  }
  const data = await uuidResponse.json();
  //const uuid = data.uuid;
  console.log(data);
  const uuid = data.uuid;
  const profileData = await fetch(`${url}/api/profileByUuid?uuid=${uuid}`);
  if (!profileData.ok) {
    throw new Error(`Error: ${profileData.status} - ${profileData.statusText}`);
  }

  const profile = await profileData.json();
  console.log(profile);
  return (
      <div
        className="relative bottom-8"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {Object.keys(profile).length === 0 ? (
          <ProfileForm uuid={uuid} />
        ) : (
          <ProfileCard profile={profile} />
        )}
        </div>
  );
}
