
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TeamMember3 = (name, description, image, background) => {
    return (
        <motion.div
            whileHover={{ rotateX: -20, rotateY: -2 }}
            onClick={()=> window.open("https://www.linkedin.com/in/derrick-mar/", "_blank")}

            className={`opacity-80 rounded-2xl  cursor-pointer max-w-96 w-1/3 hover:shadow-[#437942] bg-[#95F9E3]`} >
            <div className="flex justify-center">
                <p className="my-auto pt-10 font-bold pb-5 text-black text-6xl text-center">
                    Derrick Mar
                </p>
            </div>

            <div className="flex justify-center">
                <Image
                    className="rounded-full w-80 h-80"
                    src="/derrick.png"
                    alt="profile photo"
                    width={200}
                    height={200}
                />
            </div>

            <p className="text-center pb-10 text-3xl pt-12 ">
                CPO at <span onClick={() => window.open("https://www.pathrise.com", "_blank")} className="hover:underline hover:text-blue-400">Pathrise</span>
            </p>


        </motion.div >

    )
}
export default TeamMember3;