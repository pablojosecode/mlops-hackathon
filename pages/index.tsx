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
import TeamMember from "@/components/TeamMember"
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


  const people = [
    {
      "name": "Derrick",
      "description": "CTO of Pathrise",
      "image": "derrick.png"
    },
    {
      "name": "Pablo",
      "description": "SWE manager at stealth startups",
      "image": "pablo.png"
    },
    {
      "name": "Mumza",
      "description": "SWE at Amazon- Alexa",
      "image": "hamza.jpeg"
    },
    {
      "name": "Keval",
      "description": "Nvidia Engineer",
      "image": "keval.jpeg"
    },


  ]
  const index = [
    {
      "name": "Derrick",
      "description": "CTO of Pathrise",
      "image": "derrick.png"
    },
    {
      "name": "Pablo",
      "description": "SWE manager at stealth startups",
      "image": "pablo.png"
    },
    {
      "name": "Mumza",
      "description": "SWE at Amazon- Alexa",
      "image": "hamza.jpeg"
    },
    {
      "name": "Keval",
      "description": "Nvidia Engineer",
      "image": "keval.jpeg"
    },


  ]


  // useEffect(() => {
  //   // Your code here
  //   check();

  // }, []);


  return (
    <GoogleOAuthProvider clientId="45408313407-q6jsic6d271qhjh76t6rfpg8c3nljj9n.apps.googleusercontent.com">

      <div className="w-screen dark:bg-[#080708] pb-10 ">
        <div className="flex  max-w-[100rem] mx-auto flex-col items-center justify-center py-2 ">
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
            <div className="flex justify-center pt-5 ">
              <motion.div className="flex h-[23rem] w-3/4 max-w-7xl bg-blue-100 rounded-[40rem]">

                <p className="pt-20  w-full text-center  text-8xl mt-10">Log in now.</p>
              </motion.div>
            </div>



          </motion.div>
        </div >
        <div className="flex  w-full max-w-[120rem] mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <AnimatePresence>
              <motion.p
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0 }}

                className="pt-10 cursor-default text-[#EEFBF8] font-['Inter'] text-8xl text-center">
                Team
              </motion.p>
            </AnimatePresence>
            <div className="gap-x-10 gap-y-4 w-full flex flex-wrap justify-center">
              {/* {people.map((index, i) =>
                  <TeamMember  name={index['name']} description={index['description']} image={index['description']} />
                )
                } */}
              {/* <TeamMember  name={index[0]['name']} description={index[0]['description']} image={index[0]['description']} /> */}


              <TeamMember name="Derrick" description="Cofounder + CTO of Pathrise" image="derrick.png" />
              <TeamMember name="Derrick" description="Cofounder + CTO of Pathrise" image="derrick.png" />

              <TeamMember name="Derrick" description="Cofounder + CTO of Pathrise" image="derrick.png" />

            </div>

            <Footer />

          </div>
          <div className="flex justify-center pt-10 h-screen bg-black">

          </div>


      </div>
    </GoogleOAuthProvider>
  );
};

export default Home;
