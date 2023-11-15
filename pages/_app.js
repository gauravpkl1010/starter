import "../styles/globals.css";
import Layout from "../components/Layout";
import ParticleContainer from "../components/ParticlesContainer";
import { Animation } from "../components/Animation";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "../components/cursor";
import SnowEffect from "../components/snow";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <SnowEffect />
          <Cursor />
          <ParticleContainer />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
