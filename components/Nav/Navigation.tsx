import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {navLinks.map((i) => (
      <MenuItem i={i.name} key={i.id} link={i.href} />
    ))}
  </motion.ul>
);

interface ItemProps {
  name: string;
  to: string;
  id: number;
  href: string;
  /* icon: JSX.Element */
}

const navLinks: ItemProps[] = [
  {
    name: "Home",
    to: "hero",
    id: 1,
    /*  icon: <IoHome className="mr-3 " />, */
    href: "/home",
  },
  {
    name: "About",
    to: "about",
    id: 2,
    /* icon: <BsPatchExclamationFill className="mr-3" />, */
    href: "/about",
  },
  {
    name: "Projects",
    to: "projects",
    id: 3,
    /* icon: <BsHandbagFill className="mr-3" />, */
    href: "/projects",
  },
  {
    name: "Contact",
    to: "contact",
    id: 4,
    /* icon: <FaEnvelope className="mr-3" />, */
    href: "/contact",
  },
];
