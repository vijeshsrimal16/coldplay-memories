import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Coldplay Memories</h1>
          <p>Moments that still glow.</p>
        </motion.div>
      </section>

      {/* MEMORY — SINGLE MOMENT */}
      <section className="memory">
        <motion.img
          src="/memories/Memory (1).jpeg"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The night everything felt unreal.
        </motion.p>
      </section>

      {/* COLLAGE SECTION */}
      <section className="collage">
        <motion.img
          src="/memories/Memory (2).jpeg"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.img
          src="/memories/Memory (3).jpeg"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.img
          src="/memories/Memory (4).jpeg"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </section>

      {/* MEMORY — DIFFERENT ANIMATION */}
      <section className="memory reverse">
        <motion.img
          src="/memories/Memory (5).jpeg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          When the lights came on, time stopped.
        </motion.p>
      </section>

      {/* MINI COLLAGE */}
      <section className="collage small">
        <motion.img
          src="/memories/Memory (6).jpeg"
          initial={{ rotate: -6, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.img
          src="/memories/Memory (7).jpeg"
          initial={{ rotate: 6, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </section>

      {/* FINAL MEMORY */}
      <section className="memory final">
        <motion.img
          src="/memories/Memory (8).jpeg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          And somehow… we knew this would stay forever.
        </motion.p>
      </section>

    </div>
  );
}
