
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TeamMember = (name, description, image, background) => {
    return (
        <motion.div
        onClick={() => window.open("https://www.linkedin.com/in/pablo-hansen/", "_blank")}
        whileHover={{ rotateX: -10, rotateY:15 }}
        className={` cursor-pointer max-w-96 w-1/3 opacity-80 hover:shadow-[#437942] bg-[#437942] hover:shadow-2xl rounded-2xl `} >
            <div className="flex justify-center">
                <p className="my-auto pt-10 font-bold pb-5 text-black text-6xl text-center">
                    Pablo Hansen
                </p>
            </div>

            <div className="flex justify-center">
                <Image
                    className="rounded-full w-80 h-80"
                    src="/pablo.jpeg"
                    alt="profile photo"
                    width={200}
                    height={200}
                />
            </div>

            <p className="text-center pb-10 text-3xl pt-12 ">
                Engineering Lead @ Stealth Health
            </p>


        </motion.div >

    )
}
export default TeamMember