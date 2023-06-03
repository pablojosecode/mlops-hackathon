import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

import { motion } from "framer-motion";

// export default function Layout({
//   meta,
//   children,ind
// }: {
//   meta?: {
//     title?: string;
//     description?: string;
//     image?: string;
//   };
//   children: ReactNode;
// }) 

export default function ComponentGrid({
  setShowDemoModal
}: {
  setShowDemoModal: Dispatch<SetStateAction<boolean>>
}) {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <div className="pl-10">
      <div className=" w-full  rounded-xl bg-slate-300 mx-auto ">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: .2 },

          }}
        >
          <button
            onClick={() => setShowDemoModal(true)}
            className="shadow-2xl active:bg-gray-200 rounded-xl flex hover:bg-slate-400  hover:text-black  w-full items-center justify-center py-5 border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
          >
            <p className="font-serif max-w-2xl text-2xl  dark:text-gray-900 dark:hover:text-gray-900 text-gray-900">Click Here to Change</p>
          </button>
        </motion.div>
      </div>
    </div>
  );
}