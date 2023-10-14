import TextTrans from "@/components/TextTrans";
import MainLayout from "@/layouts/MainLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <MainLayout>
      <TextTrans>
        <motion.div className="text-3xl font-extrabold">about</motion.div>
      </TextTrans>
    </MainLayout>
  );
};

export default About;
