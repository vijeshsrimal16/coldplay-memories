import "./Home.css";
import { motion } from "framer-motion";

const images = Array.from({ length: 29 }, (_, i) =>
  `/memories/Memory (${i + 1}).jpeg`
);

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO */}
      <section className="hero-title">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Coldplay Memories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Moments that still glow.
        </motion.p>
      </section>

      {/* MEMORY 1 */}
      <Memory image={images[0]} text="The night everything changed." />

      <Memory image={images[1]} text="Lights that felt unreal." reverse />

      {/* COLLAGE 1 */}
      <Collage images={images.slice(2, 5)} />

      <Memory image={images[5]} text="Singing without knowing the lyrics." />

      <Memory image={images[6]} text="Some moments stay forever." reverse />

      {/* CINEMATIC */}
      <Wide image={images[7]} />

      {/* COLLAGE 2 */}
      <Collage images={images.slice(8, 12)} />

      <Memory image={images[12]} text="Everything slowed down." />

      <Memory image={images[13]} text="Just lights and feelings." reverse />

      {/* COLLAGE 3 */}
      <Collage images={images.slice(14, 18)} />

      {/* FINAL */}
      <FinalMemory image={images[28]} />

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Memory({ image, text, reverse }) {
  return (
    <section className={`memory ${reverse ? "reverse" : ""}`}>
      <motion.img
        src={image}
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.p>
    </section>
  );
}

function Collage({ images }) {
  return (
    <section className="collage">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true }}
        />
      ))}
    </section>
  );
}

function Wide({ image }) {
  return (
    <section className="wide">
      <motion.img
        src={image}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />
    </section>
  );
}

function FinalMemory({ image }) {
  return (
    <section className="final">
      <motion.img
        src={image}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        Some nights never really end.
      </motion.h2>
    </section>
  );
}
