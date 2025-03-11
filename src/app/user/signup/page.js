import SignUpForm from "@/components/forms/SignUpForm";
import login from "@/public/images/login.jpg";
import Image from "next/image";

export default function SignUp() {
  return (
    <div>
      <nav
        className="bg-cover bg-center bg-no-repeat md:bg-cover"
        style={{
          backgroundImage: `url(${login.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <aside className="pl-3 pt-2 relative block h-16  lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            src="/fieldmaven1.png"
            alt="A description of the image"
            width={70}
            height={70}
            className="rounded-2xl "
          ></Image>
        </aside>
        <div className="flex">
          <main
            className=""
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#4a4a4a",
              letterSpacing: "0.5px",
              textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="max-w-xl lg:max-w-3xl">
              <SignUpForm />
            </div>
          </main>
        </div>
      </nav>
    </div>
  );
}
