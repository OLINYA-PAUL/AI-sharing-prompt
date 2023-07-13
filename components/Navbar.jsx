"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [providers, setproviders] = useState(null);
  const [toggleMenu, setIsToggleMenu] = useState(false);
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(() => {
    // Immediate invoke functional express (IIFE)
    (async () => {
      const response = await getProviders();
      setproviders(response);
    })();
  }, []);
  return (
    <nav className="flex flex-row justify-between items-center w-full mt-5">
      <div>
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt="Promot Logo"
            className="object-contain"
          />
          <p className="text_prompt">Prompt AI</p>
        </Link>
      </div>
      <div>
        {/* DESKTOP NAVBAR */}
        <div className="sm:flex hidden">
          {sessionData?.user ? (
            <div className="sm:flex items-center justify-center hidden gap-3 md:gap-5">
              <div>
                <Link href="/create-prompt">
                  <button className="dark_btn">Create Post</button>
                </Link>
              </div>
              <div>
                <button onClick={signOut} type="button" className="btn_outline">
                  Sign out
                </button>
              </div>
              <div>
                <Link href="/Profile">
                  <Image
                    src={sessionData?.user?.image}
                    width={30}
                    height={30}
                    alt="Profile_image"
                    className="object-contain cursor-pointer rounded-full"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.id}
                    onClick={() => signIn(provider.id)}
                    className="btn_outline max-sm:hidden"
                  >
                    Sign In
                  </button>
                ))}
            </div>
          )}
        </div>
        {/* MOBILE NAVBAR */}
        <div className="sm:flex md:hidden relative">
          {sessionData?.user ? (
            <div className="">
              <Image
                src={sessionData?.user?.image}
                height={30}
                width={30}
                alt="Profile_image"
                className="object-contain cursor-pointer relative rounded-full"
                onClick={() => setIsToggleMenu((prev) => !prev)}
              />
              {toggleMenu && (
                <div className="bg-white font-inter mt-3 global_shadow absolute top-full right-0 min-w-[210px] flex flex-col gap-2 p-3">
                  <Link href="/Profile" onClick={() => setIsToggleMenu(false)}>
                    <button className="border-none outline-none bg-transparent  text-[20px]">
                      My Profile
                    </button>
                  </Link>
                  <Link
                    href="/create-prompt"
                    onClick={() => setIsToggleMenu(false)}
                  >
                    <button className="border-none outline-none bg-transparent  text-[20px]">
                      Create Prompt
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setIsToggleMenu(false);
                      signOut();
                    }}
                    className="bg-black p-1 pl-5 hover:border-[2px] cursor-pointer hover:bg-transparent hover:border-black hover:text-black rounded-full pr-5 outline-none text-white text-[20px]"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => signIn(provider.id)}
                    className="dark_btn"
                  >
                    Sign In
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
