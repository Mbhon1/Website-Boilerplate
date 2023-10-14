import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
