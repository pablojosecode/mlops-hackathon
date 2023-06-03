import Modal2 from "../shared/modal2";
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
import Home from "@/components/home"


const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);
  const [register, setRegister] = useState(false);



  return (
    <Modal2 showModal={showSignInModal} setShowModal={setShowSignInModal}>
      {/* <Home /> */}
      <div className=" relative  dark:bg-[#2F88AB] max-h-fusll w-full overflow-hidden shadow-xl md:max-w-7xl md:rounded-2xl md:border md:border-gray-200">
        <Image
          className="absolute right-0"
          src="/iconic2.png"
          alt="cute guitar monster"
          width="250"
          height="250"
        />
        <Home />

        {/* <div className="dark:bg-slate-800 flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-5"> */}

        <Sign visible={showSignInModal} setRegister={setRegister} register={register} />
        {/* <LoadingDots color="#808080" /> */}
        {/* </div> */}
      </div>
    </Modal2>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}