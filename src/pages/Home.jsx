import "./Home.css";
import { motion } from "framer-motion";
import MusicPlayer from "../components/MusicPlayer";
import MusicRow from "../components/MusicRow";

const images = Array.from({ length: 29 }, (_, i) =>
  `/memories/Memory (${i + 1}).jpeg`
);

const songs = [
  {
    title: "Coldplay - A Sky Full Of Stars",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811492/A_Sky_Full_Of_Stars_xtgzv4.mp3",
  },
  {
    title: "Coldplay - The Scientist",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811526/The_Scientist_x5lsqy.mp3",
  },
  {
    title: "Coldplay - Viva La Vida",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811527/Viva_La_Vida_qc7vvq.mp3",
  },
  {
    title: "Coldplay - Yellow",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811530/Yellow_ac19rj.mp3",
  },
  {
    title: "Coldplay - Hymn For The Weekend",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811495/Hymn_For_The_Weekend_shluj0.mp3",
  },
  {
    title: "Coldplay - Paradise",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811518/Paradise_y8wgna.mp3",
  },
  {
    title: "Coldplay - feelslikeimfallinginlove",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811509/feelslikeimfallinginlove_uaatqw.mp3",
  },
  {
    title: "Coldplay - Clocks",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811532/Clocks_cmbuea.mp3",
  },
  {
    title: "Coldplay - Adventure Of A Lifetime",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811488/Adventure_Of_A_Lifetime_dornvm.mp3",
  },
  {
    title: "Coldplay - My Universe",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811514/My_Universe_nsacsq.mp3",
  },
  {
    title: "Coldplay - ALL MY LOVE",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811484/ALL_MY_LOVE_mncuyu.mp3",
  },
  {
    title: "Coldplay - Something Just Like This",
    file: "https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811518/Something_Just_Like_This_ubiylc.mp3",
  },
];



// make copies
const collageOne = images.slice(2, 5);
const collageTwo = images.slice(14, 18);

// swap
const temp = collageOne[0];
collageOne[0] = collageTwo[collageTwo.length - 1];
collageTwo[collageTwo.length - 1] = temp;
collageTwo.pop();



export default function Home() {
  return (
    <>
    <div className="coldplay-bg" />
    <div className="home-wrapper">

 <section className="hero-title">

  {/* LEFT CONTENT */}
  <div className="hero-content">
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

    {/* 🎵 PLAYER BELOW TEXT */}
    <motion.div
      className="hero-content hero-music"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
    {/*}  <MusicPlayer
        title="Coldplay — Fix You"
        src={songs[0].file}
      /> */}
    </motion.div>
  </div>

  {/* RIGHT IMAGE */}
  <motion.img
    className="hero-image"
    src="/memories/Memory (12).jpeg"
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 0.4 }}
  />

</section>

<section className="fixyou-row">

  {/* LEFT COLUMN — VIDEO */}
  <div className="fixyou-col media-col">
    <video
      className="fixyou-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/Coldplay.mp4" type="video/mp4" />
    </video>
  </div>

  {/* RIGHT COLUMN — MESSAGE + PLAYER */}
  <div className="fixyou-col text-col">
    
    <h3 className="fixyou-message">

When everything feels too heavy
and the world doesn’t make sense anymore,<br />
I’ll stay — And I’ll try to fix you.<br />
    </h3>

    {/* 🎵 player exactly under message */}
   {/*} <div className="fixyou-message">
      <MusicPlayer
        title="Coldplay - Fix You"
        src="public/music/Coldplay - Fix You (Official Video) - Coldplay"
      /> 
    </div> */}

  </div>

</section>



<MusicPlayer
  title="Coldplay - Fix You"
  src="https://res.cloudinary.com/dc2dkpzd1/video/upload/v1768811535/Fix_You_jxvvbo.mp3"
/>





{ /* <MusicPlayer
  title="Coldplay — A Sky Full Of Stars"
  src="public/music/Coldplay - A Sky Full Of Stars (Official Video).mp3"
/> */}

      <DualMemory
        leftImage={images[10]}
        rightImage={images[12]}
        leftText="The night everything changed."
        rightText="Two hearts, one moment."
      />

  

      <Collage images={images.slice(9, 12)} />

        

     {/* <Wide image={images[13]} /> *}
  
      {/* MEMORY 1 */}
    {/* <Memory image={images[0]} text="The night everything changed." />

      <Memory image={images[1]} text="Lights that felt unreal." reverse /> */}

      {/* COLLAGE 1 */}

      <Wide image={images[19]} />

      <DualMemory
        leftImage={images[22]}
        rightImage={images[26]}
        leftText="Lights that felt unreal."
        rightText="The crowd was loud, but you felt close."
      />

      <section className="songs-center">

  <div className="songs-card">

    <h2>
      You can listen to all the Coldplay songs right here
    </h2>

    <div className="songs-grid">

      {/* LEFT COLUMN */}
      <div className="songs-col">
        {songs.slice(0, 6).map((song, i) => (
          <MusicPlayer
            key={i}
            title={song.title}
            src={song.file}
          />
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="songs-col">
        {songs.slice(6, 12).map((song, i) => (
          <MusicPlayer
            key={i}
            title={song.title}
            src={song.file}
          />
        ))}
      </div>

    </div>

  </div>

</section>

      
      

      <Collage images={collageOne} />


      

      <DualMemory
        leftImage={images[5]}
        rightImage={images[6]}
        leftText="Singing without knowing the lyrics."
        rightText="Some moments stay forever."
      />

    {/*  <Memory image={images[5]} text="Singing without knowing the lyrics." />

      <Memory image={images[6]} text="Some moments stay forever." reverse /> */}

      {/* CINEMATIC */}
      <Wide image={images[0]} />

      {/* COLLAGE 2 */}
      

     {/* <Memory image={images[12]} text="Everything slowed down." />

      <Memory image={images[13]} text="Just lights and feelings." reverse /> */}

      {/* COLLAGE 3 */}
      <Collage images={collageTwo} />

      {/* FINAL */}
      <FinalMemory image={images[28]} />

      

    </div>
    </>
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

function DualMemory({ leftImage, rightImage, leftText, rightText }) {
  return (
    <section className="dual-memory">

      <motion.div
        className="dual-card"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={leftImage} alt="" />
        <p>{leftText}</p>
      </motion.div>

      <motion.div
        className="dual-card"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={rightImage} alt="" />
        <p>{rightText}</p>
      </motion.div>

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
