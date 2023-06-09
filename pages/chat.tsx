
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AnimatePresence, motion } from "framer-motion";

import Head from "next/head";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Header from "@/components/Header";
import { useFaqModal } from "@/components/layout/faqModal";
import { useSignInModal } from "@/components/layout/sign-in-modal";
import { usePricingModal } from "@/components/layout/pricingModal";
import Chats from "@/components/Chats"
import { authOptions } from './api/auth/[...nextauth]';
import { useEffect } from "react";
import check2 from "@/components/Checks/check2";

import { useState } from "react";
import LoadingDots from "@/components/LoadingDots";
const chat = () => {

    useEffect(() => {
        // Your code here
        check2();

    }, []);

    const [response, setResponse] = useState("")
    const [references, setReferences] = useState(true)
    const [citations, setCitations] = useState(
        []
    )

    const [waiting, setWaiting] = useState(false)
    const [thumbsUp, setThumbsUp] = useState(false)
    const [thumbsDown, setThumbsDown] = useState(false)
    const { FaqModal, setShowFaqModal } = useFaqModal();
    const { SignInModal, setShowSignInModal } = useSignInModal();
    const { PricingModal, setShowPricingModal } = usePricingModal();
    const questions = ["What is MLOps?", "What are the main components of a successful MLOps strategy?", "How does MLOps differ from DevOps?", "Can you explain the role of CI/CD in MLOps?"]

    const substitute = {
        "MLOps": "What is MLOps used for?",
        "Flying": "What is the best dragon to fly?",
        "Language Models": "What are language models useful for?",
        "Deployment": "What is a good path to deplying machine learning language models?"
    }

    const ask = async () => {
        setThumbsUp(false);

        setThumbsDown(false);

        setWaiting(true);

        setReferences(true);

        const question = ((document.querySelector(".question") as HTMLInputElement).value)
        const data = { "params": { "question": question }, "project": "9ce1c605b3d4-4c88-bc4c-77ef69dc4645" }
        const response = await fetch("https://api-bcbe5a.stack.tryrelevance.com/latest/studios/1cc75ca1-b9f0-4a41-a105-502c5bafec61/trigger_limited", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(response =>
            response.json())
        console.log
        console.log(Object.keys(response["output"]))
        // console.log(response)
        // console.log(response[0])


        const context = response["output"]["answer"]["context"]
        setCitations(context)



        console.log(response["output"]["answer"]["context"])
        // console.log(response["0"])

        console.log(response['output']['answer']);
        setResponse(response["output"]["answer"]["answer"])
        setWaiting(false)

    }


    return (
        <GoogleOAuthProvider clientId="45408313407-q6jsic6d271qhjh76t6rfpg8c3nljj9n.apps.googleusercontent.com">
            <div className="relative w-screen bg-[#080708] min-h-screen pb-10 ">
                <div className=" flex w-3/4 max-w-[100rem] mx-auto flex-col items-center justify-center py-2 ">

                    <motion.div
                        className="w-full xl:px-0"
                        initial="hidden"
                        whileInView="show"
                        animate="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}>
                        {/* <Buy /> */}

                        <Head>
                            <link rel="shortcut icon" href="/favicon.ico" />
                            <title className="font-['Inter']">Stephen</title>
                        </Head>

                        <Header2 />
                    </motion.div>
                </div>
                <div className="flex w-4/5 max-w-[150rem] mx-auto flex-col items-center justify-center py-2">
                    <motion.div>
                        <div className="w-full pt-20 grid grid-cols-3">
                            <div className="col-span-2 pt-10 ">
                                <div className="flex justify-center relative">
                                    <input className="font-['Inter'] w-4/5 rounded-md px-4 text-4xl text-left col-span-2 question" type="text" placeholder="Ask questions here..." />
                                    {/* <svg className="absolute top-2 right-" xmlns="http://www.w3.org/2000/svg" fill="black" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                    </svg> */}
                                    <motion.button
                                        onClick={() => ask()}
                                        whileHover={{ scale: .98 }}
                                        className="bg-white px-5 rounded-md text-3xl">
                                        Ask!
                                    </motion.button>
                                </div>
                                <div className="pt-10 flex justify-center ">
                                    <div className=" py-10  align-bottom items-end rounded-md  w-4/5 bg-[#CAF9EE] opacity-80">
                                        <div className="h-[20rem] flex justify-center">
                                            <div className=" overflow-auto">
                                                <p className="align-bottom  h-full px-10 text-left">
                                                    {waiting ? <LoadingDots color="black" /> : response}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-center h-10 w-full ">
                                            <div className="flex w-4/5 gap-x-10">
                                                <div className={`${thumbsUp && " flex justify-center h-16 w-16 rounded-full bg-blue-200"}`}>
                                                    <Image
                                                        onClick={() => setThumbsUp(!thumbsUp)}
                                                        className={` m-2  hover:h-12 hover:w-12 cursor-pointer h-10 my-auto w-10`} src="/up.png" height={200} width={200} alt="Thumbs up!" />
                                                </div>
                                                <div className={`${thumbsDown && "flex justify-center rounded-full h-16 w-16 bg-blue-200"}`}>

                                                    <Image
                                                        onClick={() => setThumbsDown(!thumbsDown)}
                                                        className={`cursor-pointer h-10 w-10 hover:h-12 hover:w-12 cursor-pointer h-10 my-auto w-10`} src="/down.png" height={20} width={20} alt="Thumbs Down!" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="pt-10 flex justify-center">
                                    <motion.button
                                        onClick={() => setReferences(!references)}
                                        className="text-center p-5 bg-green-200">
                                        References
                                    </motion.button>
                                </div>
                                {
                                    references &&
                                    <div className="cursor-default flex justify-center flex-wrap w-full ">

                                        {Object.keys(citations).map((citation: any) =>
                                            <motion.div
                                                whileHover={{ rotateX: 20 }}
                                                className="w-64 rounded-2xl bg-slate-200 m-10 p-4 font-['Inter']  ">
                                                {citations[citation]}
                                            </motion.div>)}
                                    </div>
                                }
                            </div>
                            <div className="font-['Inter'] text-center text-white pt-10">
                                <p className="text-5xl cursor-default w-full  pb-4 ">
                                    Popular Questions
                                </p>
                                <div className=" flex justify-center flex-wrap w-full">
                                    {questions.map(question =>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => {
                                                const questionInput = (document.querySelector(".question") as HTMLInputElement);
                                                // set the question's value to the question that was clicked
                                                questionInput.value = question;
                                            }}
                                            className="active:text-blue-300 cursor-pointer m-3 text-4xl border-2 rounded-xl border-blue-200 text-blue-200">
                                            {question}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            {/* <div className="h-[s25rem] w-4/5 max-w-3xl bg-blue-800">


                                {/* <Chats /> 

                    </div>  */}
                        </div>

                        <div className="pt-10 flex justify-center">
                            <div className="grid grid-cols-5 gap-x-10 w-1/2 bg-slate-200 ">
                                <Image src="/pfp.png" height={100} width={100} alt="pfp" />
                                <div className="col-span-4">
                                    <p className="font-bold text-left">
                                        Stephen:
                                    </p>
                                    <p className="text-left pt-2 ">
                                        I am an AI agent that exists purely to serve you! Ask me anything about the fantastic <span>MLOPS community</span> or the content they talk about.
                                        I know everything about everything when it comes to what they've discussed
                                    </p>
                                    <p className="pt-8 font-thin    text-2xl">
                                        Disclaimer: I am an AI Langauge Model- I may generate false or misleading text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div >
        </GoogleOAuthProvider >

    )
}

export default chat;