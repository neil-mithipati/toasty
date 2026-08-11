"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ActionBar } from "@/components/ActionBar";
import { ToastCard } from "@/components/ToastCard";
import { getRandomToast } from "@/lib/toasts";

const SLIDE = { type: "spring", stiffness: 340, damping: 26, mass: 0.9 } as const;

export default function Home() {
  const [toast, setToast] = useState<string | null>(null);

  function handleGenerate() {
    setToast((current) => getRandomToast(current ?? undefined));
  }

  return (
    <main className="mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.75rem,env(safe-area-inset-bottom))]">
      <h1 className="candy-title shrink-0 pb-4 text-center text-[3.25rem] leading-none font-bold">
        toasty
      </h1>

      <div className="flex min-h-0 flex-1 flex-col">
        <AnimatePresence initial={false}>
          {toast !== null && (
            <motion.div
              key="card-slot"
              className="flex min-h-0 flex-1 items-center justify-center pb-5"
            >
              <ToastCard toast={toast} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout transition={SLIDE} className="shrink-0">
          <ActionBar onGenerate={handleGenerate} />
        </motion.div>
      </div>
    </main>
  );
}
