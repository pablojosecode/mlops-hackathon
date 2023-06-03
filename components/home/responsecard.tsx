import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import * as React from 'react';


export default function ResponseCard({
    title,
    description,
    demo,
    large,
}: {
    title: string;
    description: string;
    demo: ReactNode;
    large?: boolean;
}) {
    const exportRef = React.useRef<HTMLInputElement>(null)



    const SubmitButton = () => {
        return (
            < button className="bg-green-200  py-3" >
                Submit
            </button >);
    };
    return (
        <div
            ref={exportRef}
            className="w-3/5 relative col-span-1  overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
            <div className="pt-5 mx-auto max-w-md text-center">
                {/* <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
                    <Balancer>{title}</Balancer>
                </h2>
                <div className="prose-sm md:text-4xl text-2xl -mt-2 leading-normal text-gray-500 md:prose">
                    <Balancer>
                        <ReactMarkdown
                            components={{
                                a: ({ node, ...props }) => (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        {...props}
                                        className="font-large text-gray-800 underline transition-colors"
                                    />
                                ),
                                code: ({ node, ...props }) => (
                                    <code
                                        {...props}
                                        // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                                        inline="true"
                                        className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-large text-gray-800"
                                    />
                                ),
                            }}
                        >

                            {description}


                        </ReactMarkdown>
                    </Balancer>
                    {description == "Data submitted! Now click button to get your report" && < SubmitButton />}

                </div> */}
                {description}
                <div
                    className="inline-block w-[13rem] h-[13rem] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>
            {/* <button className="bg-red-200 h-96 w-96 " onClick={() => exportAsImage(exportRef.current, "test")}>
                Capture Image
            </button> */}
        </div>

    );
}
