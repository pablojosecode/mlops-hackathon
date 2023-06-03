import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS, FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { useRef } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from "react";
import check from "@/components/Checks/check"
import { useSignInModal } from "@/components/layout/sign-in-modal";
import { usePricingModal } from "@/components/layout/pricingModal";
import { useFaqModal } from "@/components/layout/faqModal";

const Home: NextPage = () => {
  const player = useRef();

  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { PricingModal, setShowPricingModal } = usePricingModal();
  const { FaqModal, setShowFaqModal } = useFaqModal();



  // useEffect(() => {
  //   // Your code here
  //   check();

  // }, []);
  const teamMember = () => {
    return (
      <motion.div className="max-w-96 w-3/4 bg-black ">
        <p className="pt-10 text-white text-center">
          Derrick
        </p>
        <p>
        </p>
      </motion.div >

    )
  }


  return (
    <GoogleOAuthProvider clientId="45408313407-q6jsic6d271qhjh76t6rfpg8c3nljj9n.apps.googleusercontent.com">

      <div className="w-screen dark:bg-black pb-10 ">
        <div className="flex  max-w-[100rem] mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <motion.div
            className="max-w-full xl:px-0"
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
            {/* <Buy /> */}


            <Head>
              <title className="font-['Atma']"></title>
            </Head>
            <PricingModal />
            <FaqModal />

            <Header setShowFaqModal={setShowFaqModal} SignInModal={SignInModal} setShowSignInModal={setShowSignInModal} />

            <div className=" flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-10">

              {/* <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="border dark:text-slate-200 rounded-2xl py-1 px-4 text-slate-500 text-md mb-5 hover:scale-105 transition duration-300 ease-in-out"
              >
                Used by over <span className="font-semibold">1,000</span> beautiful
                users
              </a> */}

              <motion.div
                className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display  font-bold tracking-[-0.02em]  drop-shadow-sm md:text-8xl md:leading-[5rem]"

                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                <motion.h1
                  whileHover={{ scale: 1.01 }}
                  className="cursor-default mx-auto w-full font-['Inter'] max-w-6xl font-display text-7xl font-bold tracking-normal text-slate-900 dark:text-slate-100 sm:text-9xl">
                  Learn MLOps with <span className="underline">proficient AI</span>

                </motion.h1>
              </motion.div>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                <p className="font-bold mx-auto mt-12 max-w-7xl text-3xl sm:text-5xl text-slate-700 dark:text-slate-200 leading-7">
                  This is the place to learn!
                </p>
              </motion.div>


            </div>
            <motion.div className="h-[23rem] w-3/4 max-w-7xl bg-blue-400 rounded-[20rem]">
              <p className="text-center mt-10">Let's talk</p>
            </motion.div>
            <div>
              <p className="font-['Inter'] text-center">
                Team
              </p>
              <div className="flex flex-wrap justify-center">
                {teamMember()}



              </div>

            </div>
            <div className="flex justify-center pt-10 h-screen bg-black">

            </div>



            <Footer />
          </motion.div>
        </div >
      </div>
    </GoogleOAuthProvider>
  );
};

export default Home;
