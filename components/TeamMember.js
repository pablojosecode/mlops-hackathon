
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TeamMember = (name, description, image, background) => {
    return (
        <motion.div className={`max-w-96 w-3/4 bg-${background}`} >

            <p className="pt-10 text-white text-center">
                {name}
            </p>
            <Image
                className="rounded-md"
                src={image}
                alt="profile photo"
                width={20}
                height={20}
            />

            <motion.p>
                {description}
            </motion.p>

        </motion.div >

    )
}
export default TeamMember