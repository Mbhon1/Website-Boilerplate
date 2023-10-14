import { motion, useInView, useIsPresent, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const variants1 = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const variants2 = {
  hidden: { left: 0 },
  visible: { left: "100%" },
};

type TransProps = {
  children: React.ReactNode;
  width: "fit-content" | "100%";
};

const PageTrans = ({ children, width = "fit-content" }: TransProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", width }}>
      <motion.div
        variants={variants1}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={variants2}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
          zIndex: 20,
          background: "red",
        }}
      />
    </div>
  );
};

export default PageTrans;
