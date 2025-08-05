import { motion } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';
import { navbarSlide } from '../animations/variants';

const ChatPage = () => {
  return (
    <motion.div
      className="pt-16"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={navbarSlide}
      transition={{ duration: 0.3 }}
    >
      <ChatInterface />
    </motion.div>
  );
};

export default ChatPage;