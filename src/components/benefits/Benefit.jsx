
import { motion } from "framer-motion";

import Button from "../Button";

const chialdVariant = {
  hidden: { opacity: 0.5, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description }) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={chialdVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <Button to="contacts">Saperne di più</Button>
    </motion.div>
  );
};

export default Benefit;
