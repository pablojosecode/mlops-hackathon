
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TeamMember2 = (name, description, image, background) => {
    return (
        <motion.div
            whileHover={{ rotateX: 10, rotateY:10 }}
            onClick={()=> window.open("https://www.linkedin.com/in/hamzaowais/", "_blank")}
            className={`hover:shadow-2xl  shadow-white opacity-80 rounded-2xl cursor-pointer max-w-96 w-1/3 hover:shadow-[#437942] hover:shadow-[#437942] bg-[#437942]`} >
            <div className="flex justify-center">
                <p className="my-auto pt-10 text-black pb-5 font-bold text-6xl text-center">
                    Hamza Owais
                </p>
            </div>

            <div className="flex justify-center">
                <Image
                    className="rounded-full w-80 h-80"
                    src="/hamza.jpeg"
                    alt="profile photo"
                    width={200}
                    height={200}
                />
            </div>

            <p className="text-center pb-10 text-3xl pt-12 ">
                AWS Alexa Engineer
            </p>


        </motion.div >

    )
}
export default TeamMember2;