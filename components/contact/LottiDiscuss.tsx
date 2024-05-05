"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Player } from "@lordicon/react";
import { useSubmitContext } from "@/components/contact/SubmitContext";
import ICON from "@/public/lordicon/discussion.json";

const LottiDiscuss = () => {
   const playerRef = useRef<Player>(null);
   const animations = ["in-reveal", "hover-conversation", "hover-conversation-alt"];
   const [state, setState] = useState(animations[0]) as any;
   const { isSubmit } = useSubmitContext();
   const [looping, setLooping] = useState(false);

   useEffect(() => {
      playerRef.current?.playFromBeginning();
   }, [state]);

   useEffect(() => {
      let timeout: any;
      if (state === animations[0] || state === animations[2]) {
         timeout = setTimeout(() => {
            setState(animations[1]);
         }, 8000);
      }
      if (state === animations[1]) {
         setLooping(true);
      }
      // eslint-disable-next-line
   }, [state]);

   useEffect(() => {
      let interval: any;
      if (looping && state === animations[1]) {
         interval = setInterval(() => {
            playerRef.current?.playFromBeginning();
         }, 8000);
      }
      return () => clearInterval(interval);
      // eslint-disable-next-line
   }, [looping, state]);


   useEffect(() => {
      if (isSubmit) {
         setState(animations[2]);
      }
      // eslint-disable-next-line
   }, [isSubmit]);

   return (
      <div className="hidden lg:block translate-y-9">
            {ICON && (
               <Player
                  ref={playerRef}
                  icon={ICON}
                  size={300}
                  state={state}
               />
            )}
      </div>
   );
}

export default LottiDiscuss;