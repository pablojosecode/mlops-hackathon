
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { AnimatePresence, motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { useEffect } from 'react';
import Wave from "@/components/wave";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Buy({ emailValue, youtubeValue, voiceValue }) {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  React.useEffect(() => {
    const email = document.querySelector(".emailValue")
    email.value = emailValue;
  }, [emailValue]);

  React.useEffect(() => {
    const you = document.querySelector(".youtubeValue")
    you.value = youtubeValue;
  }, [youtubeValue]);

  React.useEffect(() => {
    const vid = document.querySelector(".voiceValue")
    vid.value = voiceValue;
  }, [voiceValue]);

  async function postData(url = "/api/checkout_sessions", data = { "HI": "HO" }) {
    console.log("POST")
    // Default options are marked with *
    await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      // headers: {
      //   "Content-Type": "application/json",
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      redirect: "follow", // manual, *follow, error
      // // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => {
      window.open(response.url, "_self")
    }
    )

  }



  return (
    <form className='w-full l flex justify-center' action="/api/checkout_sessions" method="POST" JO="WORD">
      {/* <motion.button
    //   whileHover={{ scale: 1.1 }}
    //   type="submit" role="link"
    //   whileTap={{ scale: 0.9 }}

    //   className="w-32 h-32 hover:bg-gradient-to-l active:from-red-500 active:bg-gradient-to-l active:rounded-2xl active:to-blue-600 bg-gradient-to-r from-red-200 to-blue-700 align-right rounded-full"
    // >

    // </motion.button> */}
      {/* <Wave /> */}
      {/* <label htmlFor="first">First Name</label>*/}
      <input required value={emailValue} className='emailValue' hidden type="email" id="email" name="email" />
      <input value={youtubeValue} className='youtubeValue' hidden type="text" id="youtube" name="youtube" />
      <input required value={voiceValue} className='voiceValue' hidden type="text" id="voice" name="voice" />

      <button
        className="w-full  hover:rounded-md max-w-xs content-center py-5 text-black text-3xl font-['Inter'] shadow-2xl bg-gradient-to-r from-[#2EAA8E] to-[#2EAA8F]"
      >
        <motion.button
          className='h-full text-white w-full'

          whileHover={{
            scale: .99,
            transition: { duration: .3 },
          }}
          whileTap={{ scale: 0.9 }}
        // variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <p className='text-black '>
            Generate
          </p>



        </motion.button>

      </button>


    </form>
  );
}