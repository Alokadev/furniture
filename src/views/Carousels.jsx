import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../components/FadeIn";

const Carousels = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
    
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] opacity-60 from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Carousels;

const cards = [
  {
    url: "https://i.pinimg.com/564x/b6/f0/2a/b6f02a28feaa259a66e7db2175136cae.jpg",
    title: "Elite",
    id: 1,
  },
  {
    url: "https://i.pinimg.com/564x/48/d6/e5/48d6e5917059368585b431d722c90440.jpg",
    title: "Lux",
    id: 2,
  },
  {
    url: "https://i.pinimg.com/564x/b9/47/fa/b947faa679e19417538cec225b9e1221.jpg",
    title: "Prime",
    id: 3,
  },
  {
    url: "https://i.pinimg.com/564x/98/e9/bc/98e9bcd51182e0be98084e679980a8a0.jpg",
    title: "Opulux",
    id: 4,
  },
  {
    url: "https://i.pinimg.com/564x/42/dc/75/42dc75824a92f44e1e61d60d309ee931.jpg",
    title: "Zenith",
    id: 5,
  },
  {
    url: "https://i.pinimg.com/564x/ef/2e/fd/ef2efdd8a182353c29caab26a8c07d8b.jpg",
    title: "Presti",
    id: 6,
  },
  {
    url: "https://i.pinimg.com/564x/a5/34/10/a534100a2b472074b7277efd31f5b955.jpg",
    title: "Vogue",
    id: 7,
  },
];
