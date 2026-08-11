"use client";

import { AnimatePresence, motion } from "framer-motion";

const CARD_IN = { type: "spring", stiffness: 400, damping: 20 } as const;
const TEXT_SWAP = { duration: 0.16, ease: "easeOut" } as const;

type ToastCardProps = {
  toast: string;
};

/**
 * Cartoon flashcard. The card itself stays mounted once it appears — only the
 * text inside swaps on each new toast.
 */
export function ToastCard({ toast }: ToastCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={CARD_IN}
      className="flex max-h-[min(26rem,100%)] w-full items-center justify-center overflow-y-auto rounded-[36px] border-[7px] border-[#ffd84d] bg-white px-6 py-8 shadow-[0_8px_16px_rgba(20,8,35,0.45),0_24px_48px_rgba(20,8,35,0.3)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={toast}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={TEXT_SWAP}
          className="text-center text-3xl leading-snug font-semibold text-balance text-[#4c1d95]"
        >
          {toast}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
