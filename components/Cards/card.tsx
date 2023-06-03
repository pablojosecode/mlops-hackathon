import { ReactNode, useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import SubmitButton from "../home/SubmitButton";
import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import ComponentGrid from "../home/component-grid";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import Image from "next/image";

export default function Card({
  selected,
  setSelected,
  submitted,
  large,
  setActive,
  setDescription,
  rotateX,
  rotateY,
  handleMouse,
  setShowDemoModal
}: {
  selected: any;
  setSelected: Dispatch<SetStateAction<number>>;
  submitted: boolean;
  large?: boolean;
  setActive: any;
  setDescription: any;
  rotateX: any;
  rotateY: any;
  handleMouse: any;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>
}) {





  const imageNames = ["smooth", "artist", "singer", "wizard", "goofy"]


  return (
    <motion.div
      className={` w-full shadow-2xl hover:!text-8xl  relative col-span-1 h-[20rem] overflow-hidden rounded-xl border  border-gray-200 bg-gradient-to-br from-black via-grey-800 to-[#AA2E88] dark:bg-black dark:via-grey-800shadow-md ${large ? "md:col-span-2" : ""}`}
      style={{
        borderRadius: 30,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      whileHover={{ scale: .95 }}
      onMouseMove={handleMouse}
      whileTap={{
        scale: 1.02
      }}
      onClick={() => { setShowDemoModal(true) }}

    >

      <div

        onClick={() => setShowDemoModal(true)}
        className="cursor-pointer w-full h-full bg-[#42A4CB] hover:bg-[#7cc0db]">



        {/* <Image
        alt="Vercel Icon"
        className="h-95 w-96"
        src={"/" + imageNames[selected] + ".png"}
        width={300}
        height={300}
      /> */}
        <div
          className="pt-5 mx-auto h-2/5  text-center">
          <h2 className="font-serif text-bold   shadow-2xl  from-black to-[#AA2E88] bg-clip-text font-display dark:text-white dark:font-bold text-xl font-bold text-transparent md:text-5xl md:font-normal">
            <Balancer>Select a Voice</Balancer>
          </h2>

          <div className="w-full  items-center justify-center">


            <Image
              alt="Vercel Icon"
              className="pt-5 rounded-lg h-72 w-72 mx-auto"
              src={"/" + imageNames[selected] + ".png"}
              width={300}
              height={300}
            />
          </div>
        </div>


      </div>

    </motion.div >

  );
}
