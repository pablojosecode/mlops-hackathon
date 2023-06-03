import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { useSignInModal } from "./layout/sign-in-modal";

import { Component, SetStateAction } from "react";
import { Dispatch } from "react";
import { Props } from "focus-trap-react";
import { ComponentClass } from "react";

export default function Header(
  { photo,
    SignInModal,
    setShowSignInModal,
    setShowFaqModal
  }:
    {
      photo?: string | undefined,
      SignInModal: React.FC<Props>;
      setShowSignInModal: Dispatch<SetStateAction<boolean>>;
      setShowFaqModal: Dispatch<SetStateAction<boolean>>;
    }
) {


  return (
    <header className="relative flex justify-between dark:text-white items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">

      <SignInModal />
      <Link href="/" className="flex space-x-2">
        {/* <Image
          alt="header text"
          src="/logo.png"
          className="h-12 w-12"
          width={50}
          height={50}
        /> */}
        <h1 className="align-center sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          AI ANSWERS
        </h1>
      </Link>
      {/* <motion.button
          className="mr-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full text-3xl  bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white dark:border-white hover:text-black"
          onClick={() => setShowFaqModal(true)}
          {...FADE_IN_ANIMATION_SETTINGS}
        >
          Showcase
        </motion.button> */}


      <div>

        <div className="flex gap-x-10">
          <motion.button
            className="rounded-full text-black dark:text-white text-4xl border border-black bg-white dark:bg-black p-1.5 px-4  text-white transition-all hover:bg-white dark:border-white hover:text-black"
            onClick={() => setShowFaqModal(true)}
            {...FADE_IN_ANIMATION_SETTINGS}
          >
            FAQ
          </motion.button>


          <motion.button
            className="text-black dark:text-white rounded-full text-4xl border border-black bg-white dark:bg-black p-1.5 px-4  text-white transition-all hover:bg-white dark:border-white hover:text-black"
            onClick={() => setShowSignInModal(true)}
            {...FADE_IN_ANIMATION_SETTINGS}
          >
            Login
          </motion.button>
        </div>
      </div>
    </header>
  );
}
