import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import Footer from "../Footer";
import Header2 from "../Header2";
import { Dispatch } from "react";
import { SetStateAction } from "react";


export default function Layout({
  meta,
  Modal,
  children,
}: {
  Modal: any
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />

     
      <div className="relative flex  flex-col items-center justify-center h-full w-full bg-[#2E88AB] ">
        {/* <Image
          width={"500"}
          height={"100"}
          alt="background image"
          src="/backgroundart1.png"
          className="absolute right-0"
        />
        <motion.div
          className="w-full max-w-[100rem] xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}>

          <Header2 />
          <main className="flex w-full flex-col items-center justify-center py-16">
            {children}
          </main>
          <Footer />

        </motion.div> */}
      </div >





    </>
  );
}
