import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import MotionImage from "./MotionImage";


import { motion } from "framer-motion";

const DemoModal = ({
  selected,
  setSelected,
  showDemoModal,
  setShowDemoModal,
  setVoiceValue
}: {
  setVoiceValue: Dispatch<SetStateAction<string>>;
  selected: number,
  setSelected: Dispatch<SetStateAction<number>>
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const imageNames = ["smooth", "artist", "singer", "wizard", "goofy"]
  const [value, setValue] = useState(selected);



  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      {/* <main className="sandbox">
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        
      </main> */}
      <div className="w-full oveflow-y-auto  h-3/4 border-0 overflow-hidden md:max-w-5xl sm:max-w-5xl md:rounded-2xl md:border md:border-gray-800 md:shadow-xl">

        <section className="oveflow-y-auto border-4 border-black dark:text-black ">

          <div className="oveflow-y-auto relative flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">


            <a href="https://Logo.dev">
              <Image
                src="/logo.png"
                alt="Logo"
                className="h-32 w-32 rounded-full"
                width={50}
                height={50}
              />

            </a>

            <h3 className="font-display text-4xl sm:text-6xl dark:text-black font-bold">Pick a voice </h3>
            {/* <p className="text-sm text-gray-500">
              Take a few minutes to download your data.
            </p> */}
            <div className="absolute top-0 right-10">
              <p className="font-serif">
                Selected
              </p>
              <Image
                alt="Vercel Icon"
                className=""
                src={"/" + imageNames[value] + ".png"}
                width={80}
                height={80}
              />
            </div>
          </div>
          <div ref={ref} className="overflow-y-auto mx-auto border-4 border-black grid sm:grid-cols-3  grid-cols-2 gap-y-0 sm:gap-y-3 overflow-y-auto text-white h-full bg-black">
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={0} src="/smooth.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={1} src="/artist.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={2} src="/singer.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={3} src="/wizard.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
            <MotionImage setVoiceValue={setVoiceValue} setValue={setValue} select={setSelected} value={value} index={4} src="/goofy.png" />
          </div>
          {/* <div ref={ref} className="border-4 border-black flex overscroll-x-contain overflow-y-auto text-white h-[30rem] bg-black">
            <MotionImage select={setTempSelected} selected={tempSelected} index={0} src="/smooth.png" />
            <MotionImage select={setTempSelected} selected={tempSelected} index={1} src="/artist.png" />
            <MotionImage select={setTempSelected} selected={tempSelected} index={2} src="/singer.png" />
            <MotionImage select={setTempSelected} selected={tempSelected} index={3} src="/wizard.png" />
            <MotionImage select={setTempSelected} selected={tempSelected} index={4} src="/goofy.png" />
          </div> */}
        </section>
      </div>
    </Modal>
  );
};

export function useDemoModal({
  selected,
  setSelected,
  setVoiceValue
}:
  {
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
    setVoiceValue: Dispatch<SetStateAction<string>>;
  }
) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        selected={selected}
        setSelected={setSelected}
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
        setVoiceValue={setVoiceValue}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
