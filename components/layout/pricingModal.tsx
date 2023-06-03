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



const PricingModal = ({
  showPricingModal,
  setShowPricingModal,
}: {
  showPricingModal: boolean;
  setShowPricingModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);
  const [register, setRegister] = useState(false);



  return (
    <Modal showModal={showPricingModal} setShowModal={setShowPricingModal}>
      <div className="font-serif dark:bg-slate-800 max-h-full w-full overflow-hidden shadow-xl md:max-w-2xl md:rounded-2xl md:border md:border-gray-200">
        <div className="font-sans flex flex-col items-center justify-center space-y-3 border-b dark:border-black border-gray-200 dark:bg-slate-800 bg-white  px-4 py-6 pt-8 text-center md:px-16">

          <Image
            src="/logo.png"
            alt="Logo"
            className="w-1/2 max-w-xs rounded-full"
            width={100}
            height={100}
          />
          <h3 className="font-display text-white text-6xl sm:text-6xl font-bold">Pricing</h3>
          {/* <p className="text-md sm:text-sm text-gray-500">
                  Register for your account!
                </p> */}
          <div>



          </div>
          <p className="pt-4 text-lg sm:text-3xl text-slate-300">
            To cover server costs- which hopefully come down- I'm currently charging $3 per generation* and limiting the length of generations to 6 minutes.
          </p>
          <p className="pt-4 text-lg sm:text-md text-slate-300">
            * If that amount is too high for your current life circumstances, please reach out to me and I'll do my best to get you a cheaper price.
          </p>



        </div>

        <div  hidden className="h-0 dark:bg-slate-800 flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-5">

      
                        
                        <input type='text ' className="h-0">

                        </input>
                        

        </div>
      </div>
    </Modal >
  );
};

export function usePricingModal() {
  const [showPricingModal, setShowPricingModal] = useState(false);

  const PricingModalCallback = useCallback(() => {
    return (
      <PricingModal
        showPricingModal={showPricingModal}
        setShowPricingModal={setShowPricingModal}
      />
    );
  }, [showPricingModal, setShowPricingModal]);

  return useMemo(
    () => ({ setShowPricingModal, PricingModal: PricingModalCallback }),
    [setShowPricingModal, PricingModalCallback],
  );
}