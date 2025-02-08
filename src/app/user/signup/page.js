//user/signup
import SignUpForm from "@/components/forms/SignUpForm";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import crop from "@/public/images/crop.jpg";
import signUp from "@/public/images/signUp.jpg";
import leaf1 from "@/public/images/leaf1.png";
import Image from "next/image";
import bg from "@/public/images/bg_signup.jpg";
import logo from "@/public/images/fieldmaven.jpg";
export default function SignUp() {
  return (
    <div className=" h-screen">
      <section
        className=" bg-stone-500 "
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16  lg:col-span-5 lg:h-full xl:col-span-6">
            <Image alt="image" src={logo} width={80} height={80}></Image>

            {/* <img
              alt=""
              src="/signup_image.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            /> */}
          </aside>

          <main
            className="bg-stone-800 bg-opacity-15 rounded-2xl flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#4a4a4a",
              letterSpacing: "0.5px",
              textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="max-w-xl lg:max-w-3xl">
              {/* <img className="h-16 w-16" alt="logo" src="logo" /> */}
              {/* <h1 className="mt-6 text-2xl font-bold text-yellow-300 sm:text-3xl md:text-4xl ">
                Welcome to FieldMaven
              </h1>

              <p
                className="mt-4 text-yellow-400 text-lg font-serif italic"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  letterSpacing: "0.5px",
                  textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                "Welcome to FieldMaven – Your Trusted Companion for Smarter
                Farming. Log in to unlock insights, optimize yields, and lead
                the way to sustainable success."
              </p> */}

              <SignUpForm />
              {/* <LoginWithGoogle /> */}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
