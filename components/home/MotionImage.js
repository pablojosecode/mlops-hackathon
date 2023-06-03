import { motion } from "framer-motion"
import Image from "next/image";


const MotionImage = ({ setVoiceValue,  select, value, setValue, index, src }) => {



    return (
        <div className="mx-auto">
            {index == value
                ?
                <div className="h-1/2 w-1/2">
                    <motion.button
                        
                        onClick={() => {
                            select(index)
                            setValue(index)
                            console.log((index.toString())+ " THASIST")
                            setVoiceValue((index).toString() )
                        }
                        }
                        className="box cursor-pointer border-emerald-200  border-4"
                        style={{
                            width: 175,
                            height: 175
                        }}
                    >

                        <div class="relative">

                            <Image

                                alt="Vercel Icon"
                                className=" h-full w-full "
                                src={`characters/${src}`}
                                width={120}
                                height={120}
                            />
                            <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:fill-green-300  fill-white w-1/2 h-1/2	" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                                <path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                            </svg>

                        </div>

                    </motion.button>
                </div>
                :
                <div className="h-1/2 w-1/2">
                    <motion.button
                        onClick={() => {
                            console.log("HELLO");
                            select(index);
                            setValue(index);
                            console.log((index.toString())+ " THASIST")
                            setVoiceValue((index).toString() )
                        }}
                        className="box cursor-pointer border-2 border-fuchsia-400"
                        whileHover={{ scale: .9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        style={{
                            width: 175,
                            height: 175
                        }}
                    >

                        <Image

                            alt="Vercel Icon"
                            className="h-full w-full"
                            src={src}
                            width={120}
                            height={120}
                        />



                    </motion.button>
                </div>
            }

        </div >
    )
}


export default MotionImage;