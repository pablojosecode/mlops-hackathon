import Image from "next/image";

const Card3 = () => {
    return (

        <div className="flex bg-gradient-to-r  from-indigo-500 to-emerald-400 rounded-3xl justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <div className="flex flex-col space-y-10 mt-4 mb-16">
                <div className="flex pt-10  sm:space-x-2 sm:flex-row flex-col">
                    <div>
                        <Image
                            alt="Vercel Icon"
                            className="mx-auto rounded-full"
                            src="/logo.png"
                            width={120}
                            height={120}
                        />

                        <h2 className="mb-1 font-medium font-['Inter'] text-5xl py-10 ">Original Audio</h2>

                        <audio className="w-96 h-20 " controls>
                            <source src="/original.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>

                    </div>
                    <img>

                    </img>
                    <div className="sm:mt-0 mt-8">
                        <Image
                            alt="Vercel Icon"
                            className="mx-auto rounded-full"
                            src="/artist.png"
                            width={120}
                            height={120}
                        />
                        <h2 className="mb-1 font-medium font-['Inter'] text-5xl py-10 ">Output</h2>
                        <audio className="w-96 h-20 " controls>
                            <source src="/sample.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3;