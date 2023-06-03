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
            <div className="font-serif bg-slate-800 max-h-full w-full overflow-hidden shadow-xl md:max-w-2xl md:rounded-2xl  md:border-gray-200">
                <div className="flex flex-col items-center justify-center space-y-3  border-black border-gray-200 bg-slate-800 bg-white  px-4 py-6 pt-8 text-center md:px-16">


                    <h3 className="font-display text-white text-6xl sm:text-6xl font-bold">What is MLOPS?</h3>


                    <p className="pt-4 text-lg sm:text-md text-slate-300">
                        Good question! Why don't you ask the chatbot? :)
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