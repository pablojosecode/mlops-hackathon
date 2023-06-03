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
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="dark:bg-[#7E8287] w-full overflow-hidden shadow-xl md:max-w-3xl md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b dark:border-black border-gray-200 dark:bg-[#7E8287] bg-white  px-4 py-6 pt-8 text-center md:px-16">
          <a href="">
            
          </a>
          {
            register ?
              <>
                <h3 className="font-display text-[#080708] text-6xl sm:text-6xl font-bold">Register</h3>
                {/* <p className="text-md sm:text-sm text-gray-500">
                  Register for your account!
                </p> */}
                <p className="pt-4 text-md sm:text- text-[#080708]">
                  Already have an account? - <span onClick={() => setRegister(false)} className="sm:text-md text-[#CAF9EE] hover:underline text-3xl font-bold cursor-pointer"> Sign in </span>
                </p>
              </> :
              <>
                <h3 className="font-['Inter'] font-display text-6xl sm:text-6xl text-[#080708] font-bold">Sign In</h3>
                {/* <p className="text-md sm:text-sm text-gray-500">
                  Sign in to your account!
                </p> */}
                <p className="pt-4 text-md sm:text- text-[#080708]">
                  Not signed in?  <span onClick={() => setRegister(true)} className="sm:text-md text-[#CAF9EE] hover:underline text-3xl font-bold cursor-pointer"> Register </span>
                </p>
              </>
          }

        </div>

        <div className="dark:bg-[#7E8287] flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-5">

          <Sign register={register} />
          {/* <LoadingDots color="#808080" /> */}
        </div>
      </div>
    </Modal>
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