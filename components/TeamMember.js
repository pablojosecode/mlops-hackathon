
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TeamMember = (name, description, image, background) => {
    return (
        <div className={` cursor-pointer max-w-96 w-1/3 bg-[#95F9E3]`} >
            <div className="flex justify-center">
                <p className="my-auto pt-10 text-black text-6xl text-center">
                    Derrick
                </p>
            </div>

            <div className="flex justify-center">
                <Image
                    className="rounded-full w-44 h-44"
                    src={`/${image}`}
                    alt="profile photo"
                    width={20}
                    height={20}
                />
            </div>

            <p className="text-center pb-10 text-3xl pt-20 ">
                CTO at Pathrise
            </p>


        </div >

    )
}
export default TeamMember