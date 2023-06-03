import { ReactNode, useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";


export default function Card2({
  setYoutubeValue,
  submitted,
  large,
  setActive,
  setDescription,
  rotateX,
  rotateY,
  handleMouse
}: {
  setYoutubeValue: Dispatch<SetStateAction<string>>;
  submitted: boolean;
  large?: boolean;
  setActive: any;
  setDescription: any;
  rotateX: any;
  rotateY: any;
  handleMouse: any;
}) {


  const setIt = () => {
    const id = getId();
    const v = 'https://www.youtube.com/embed/' + id;
    console.log("HI")
    console.log(process.env.YOUTUBE_API);
    setSet(true);
    setLink(v);
    setYoutubeValue(id.toString());
    console.log(id.toString() + " shsshshsSET");

    // const d = fetch("https://www.googleapis.com/youtube/v3/videos?id="
    //   + id
    //   + "&part=contentDetails&key="
    //   + process.env.YOUTUBE_API).then(response =>
    //     console.log(response)
    //   )




  }

  const [set, setSet] = useState(false);

  const [link, setLink] = useState("");

  const getId = () => {
    // const youtubeLink = document.querySelector(".ans").value;
    const input = document.querySelector('.ans') as HTMLInputElement | null;

    const youtubeLink = input?.value;
    if (youtubeLink) {
      if (youtubeLink.startsWith('https://y')) {
        return (youtubeLink.substring(28, 39));
      }
      else if (youtubeLink.startsWith('https://w')) {
        return (youtubeLink.substring(32, 43));
      }
      else {
        console.log("OTHER")
      }
    }
    return ""
  }



  return (
    <motion.div
      className={`  w-full  shadow-2xl relative col-span-1 h-[20rem] overflow-hidden rounded-xl border dark:bg-[#42A4CB]   border-gray-200 shadow-md ${large ? "md:col-span-2" : ""}`}
      style={{
        borderRadius: 30,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      onMouseMove={handleMouse}
    >





      <div className=" pt-5 mx-auto h-2/5 max-w-md text-center">
        <h2 className="font-serif text-bold   shadow-2xl  from-black to-stone-500 bg-clip-text font-display dark:text-white dark:font-bold text-xl font-bold text-transparent md:text-5xl md:font-normal">
          <Balancer>Paste a Youtube Link</Balancer>
        </h2>

        <div className="grid grid-cols-1 h-60 items-center justify-center">
          <div className="flex">

            <input placeholder="https://youtube.com/watch?v=youtubeid" className="text-black w-full ans" type="text" id="first" name="first"
              pattern="youtube.com/watch?v=[A-Za-z0-9]*|https://youtube.com/watch?v=[A-Za-z0-9]*|https://wwww.youtube.com/watch?v=[A-Za-z0-9]*"
              title="Input should look something like https://www.youtube.com/watch?v=aIqAHYuFdSw"
            />
            <button onClick={() => {
              setIt()
            }} className="rounded-md bg-blue-600 p-3 " type="submit">Locate</button>
          </div>
          <div className="flex justify-center">
            {set ? <iframe className="h-52 w-96 pt-5 "
              id="ytplayer"
              src={link}
            ></iframe> : <></>}
          </div>

        </div>



      </div>
    </motion.div>

  );
}
