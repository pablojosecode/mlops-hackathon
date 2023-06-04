import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { useSignInModal } from "./layout/sign-in-modal";
import SignOut from "./layout/signout";

export default function Header2({ photo }: { photo?: string | undefined }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <header className="flex justify-between dark:text-white items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">

      <SignInModal />
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/logo.png"
          className="h-12 w-12"
          width={25}
          height={25}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          Stephen AI
        </h1>
      </Link>

      <motion.button
        className="rounded-full font-['Inter'] text-3xl border border-black bg-black p-1.5 px-4  text-white transition-all hover:bg-white dark:border-white hover:text-black"
        onClick={() => SignOut()}
        {...FADE_IN_ANIMATION_SETTINGS}
      >
        Log out
      </motion.button>
    </header>
  );
}
