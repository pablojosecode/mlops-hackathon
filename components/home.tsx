import Card from "@/components/Cards/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import { useReducer } from "react";
import { useState } from "react";
import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { atma } from "@/components/home/fonts";
import { useEffect } from "react";
import check2 from "@/components/Checks/check2"
import Buy from "@/components/Checks/Buy";
import useWindowSize from "@/lib/hooks/use-window-size";

import { useDemoModal } from "@/components/home/demo-modal";
import Card2 from "@/components/Cards/card2";
import Google from './shared/icons/google';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [generate, setGenerate] = useState(false);

  const [selected, setSelected] = useState(0);

  const [videoValue, setVideoValue] = useState("0");
  const [voiceValue, setVoiceValue] = useState("DEFAULT Voice VALUE");



  // const [loggedIn, setLoggedIn] = useState<boolean>(check2());


  const { DemoModal, setShowDemoModal } = useDemoModal({ selected, setSelected, setVoiceValue });


  const { isMobile, isDesktop } = useWindowSize();


  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };
  const [newDescription, setNewDescription] = useState("DESCRIPTION");

  const x = useMotionValue(200)
  const y = useMotionValue(200)


  const rotateX = useTransform(y, [0, 1000], [10, -10])
  const rotateY = useTransform(x, [0, 1000], [-10, 10])

  function handleMouse(event: any) {
    x.set(event.pageX)
    y.set(event.pageY)
  }

  // const [load, setLoad] = useState(check2());


  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   console.log("UPDATE ")
  //   // console.log(load);
  //   check2();
  // });


  return (
    <>
      {/* // <Layout Modal={DemoModal}> */}

      <DemoModal />

      < motion.div
        className="w-full xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }
        }
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >

        {/* <Blutton /> */}
        < motion.h1
          className="pt-10 bg-black bg-clip-text text-center font-display text-7xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-8xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <p className={"text-white text-9xl " + atma.className}>
            {/* <Balancer> */}
            AI VOCALS
            {/* </Balancer> */}
          </p>
        </motion.h1 >
        <motion.p
          className="mt-6 text-center dark:text-white text-gray-800 md:text-3xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Get yours in just 2 steps.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {/* <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Deploy to Vercel</p>
          </a> */}
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/pablojosecodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>Github</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-8 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">
              AI
            </p>
          </a>
        </motion.div>
      </motion.div >



      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      < div className="my-5 grid dark:text-white w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0" >

        {isDesktop && <> <div className="w-full flex justify-center">

          <Card
            setSelected={setSelected}
            selected={selected}
            setShowDemoModal={setShowDemoModal}
            rotateX={rotateX}
            rotateY={rotateY}
            handleMouse={handleMouse}
            submitted={submitted}
            setActive={setGenerate} setDescription={setNewDescription}
            large={true}
          />

        </div>

          <div className="w-full flex justify-center">
            <Card2
              setYoutubeValue={setVideoValue}
              rotateX={rotateX}
              rotateY={rotateY}
              handleMouse={handleMouse}
              submitted={submitted}
              setActive={setGenerate} setDescription={setNewDescription}
              large={true}
            />
          </div>
        </>
        }
        {isMobile && <div className="grid grid-cols-2">
          <div className="w-full flex justify-center">

            <Card
              setSelected={setSelected}
              selected={selected}
              setShowDemoModal={setShowDemoModal}
              rotateX={rotateX}
              rotateY={rotateY}
              handleMouse={handleMouse}
              submitted={submitted}
              setActive={setGenerate} setDescription={setNewDescription}
              large={true}
            />

          </div>

          <div className="w-full flex justify-center">
            <Card2
              setYoutubeValue={setVideoValue}
              rotateX={rotateX}
              rotateY={rotateY}
              handleMouse={handleMouse}
              submitted={submitted}
              setActive={setGenerate} setDescription={setNewDescription}
              large={true}
            />
          </div>
        </div>
        }

        {/* {features.map(({ title, description, demo, large }) => (
          <ResponseCard
            key={title}
            title={title}
            description={description}
            demo={
              title === "Step 1: Get Your Youtube Data" ? (
                <ComponentGrid />
              ) : (
                <div className="flex w-full justify-center items-center">

                  {demo}
                </div>
              )
            }
            large={large}
          />
        ))} */}

      </div >

      {/* <button
          onClick={() => {
            console.log(videoValue);
            console.log(voiceValue);
          }

          } 
          className="w-96 h-96 bg-white">
        ELETE
          </button> */}
      <div className="flex text-black justify-center ">
        <input onChange={event => setEmail(event.target.value)}
          placeholder="email@email.com" className="w-3/4 max-w-sm" type="email" />
      </div>
      <Buy emailValue={email} youtubeValue={videoValue} voiceValue={voiceValue} />

    </>
  );


}
