"use client";

import { motion } from "framer-motion";
import { SmilePlus, User } from "lucide-react";

const PRESS = { type: "spring", stiffness: 700, damping: 20 } as const;

type ActionBarProps = {
  onGenerate: () => void;
};

/**
 * The three chunky candy buttons. "person" and "tone" are deliberately inert —
 * they are present and styled, but nothing is wired up behind them yet.
 */
export function ActionBar({ onGenerate }: ActionBarProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      <motion.button
        type="button"
        onClick={onGenerate}
        whileTap={{ scale: 0.96, y: 5 }}
        transition={PRESS}
        className="relative overflow-hidden rounded-[30px] border-[3px] border-[#2f7a0c] bg-gradient-to-b from-[#a8ea4d] via-[#77cf22] to-[#4d9f10] py-4 text-3xl font-bold tracking-wide text-white shadow-[0_9px_0_#2f7a0c,0_16px_26px_rgba(41,8,74,0.4)] [text-shadow:0_2px_0_rgba(37,96,10,0.9)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-1.5 h-1/3 rounded-full bg-white/35 blur-[3px]"
        />
        <span className="relative">Generate</span>
      </motion.button>

      <div className="grid grid-cols-2 gap-3">
        <SecondaryButton icon={<User className="size-7" strokeWidth={2.5} />}>
          person
        </SecondaryButton>
        <SecondaryButton
          icon={<SmilePlus className="size-7" strokeWidth={2.5} />}
        >
          tone
        </SecondaryButton>
      </div>
    </div>
  );
}

function SecondaryButton({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96, y: 4 }}
      transition={PRESS}
      className="relative flex flex-col items-center justify-center gap-1 overflow-hidden rounded-[26px] border-[3px] border-[#a7afc6] bg-gradient-to-b from-[#ffffff] via-[#f1f3f9] to-[#dbe0ee] py-3 text-[#5b6480] shadow-[0_7px_0_#a7afc6,0_12px_20px_rgba(41,8,74,0.3)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 top-1 h-1/3 rounded-full bg-white/70 blur-[3px]"
      />
      <span className="relative">{icon}</span>
      <span className="relative text-base font-semibold lowercase">
        {children}
      </span>
    </motion.button>
  );
}
