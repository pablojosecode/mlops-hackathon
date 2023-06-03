import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import Sign from "./Sign";
import * as AWS from 'aws-sdk/global'
import { GoogleLogin } from "@react-oauth/google";



const FaqModal = ({
    showFaqModal,
    setShowFaqModal,
}: {
    showFaqModal: boolean;
    setShowFaqModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const [signInClicked, setSignInClicked] = useState(false);
    const [register, setRegister] = useState(false);




    return (
        <Modal showModal={showFaqModal} setShowModal={setShowFaqModal}>
            <div className="font-serif dark:bg-slate-800 max-h-full w-full overflow-hidden shadow-xl md:max-w-2xl md:rounded-2xl md:border md:border-gray-200">
                <div className="flex flex-col items-center justify-center space-y-3 border-b dark:border-black border-gray-200 dark:bg-slate-800 bg-white  px-4 py-6 pt-8 text-center md:px-16">

                    <Image
                        src="/logo.png"
                        alt="Logo"
                        className="w-1/2 max-w-xs rounded-full"
                        width={100}
                        height={100}
                    />
                    <h3 className="font-display text-white text-6xl sm:text-6xl font-bold">How does it work?</h3>
                    {/* <p className="text-md sm:text-sm text-gray-500">
                  Register for your account!
                </p> */}
                    <div>



                    </div>
                    <ul className="font-sans pl-10 list-decimal pt-4 text-left text-3xl text-slate-300">
                        <li>
                            Click the "create a cover" button
                        </li>
                        <li>
                            Pick a voice to cover the song

                        </li>
                        <li>
                            Paste the youtube link to a song you want covered
                        </li>
                        <li>
                            Enter your email
                        </li>
                        <li>
                            Pay $3*
                        </li>
                        <li>
                            Get your AI cover emailed to you
                        </li>
                    </ul>
                    <p className="pt-4 text-lg sm:text-md text-slate-300">
                        *If the price is too high for your current life circumstances, please reach out to me and I'll do my best to get you a cheaper price.
                    </p>



                </div>

                <div hidden className="h-0 dark:bg-slate-800 flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-5">



                    <input type='text ' className="h-0">

                    </input>


                </div>
            </div>
        </Modal >
    );
};

export function useFaqModal() {
    const [showFaqModal, setShowFaqModal] = useState(false);

    const FaqModalCallback = useCallback(() => {
        return (
            <FaqModal
                showFaqModal={showFaqModal}
                setShowFaqModal={setShowFaqModal}
            />
        );
    }, [showFaqModal, setShowFaqModal]);

    return useMemo(
        () => ({ setShowFaqModal, FaqModal: FaqModalCallback }),
        [setShowFaqModal, FaqModalCallback],
    );
}