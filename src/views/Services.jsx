// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
// import { title, subtitle, icon } from "../data/service";

// ... (your other imports)
import shippingIcon from "../assets/free-shiping-icon.svg";
import paymentIcon from "../assets/quick-payment-icon.svg";
import supportIcon from "../assets/support-icon.svg";

const services1 = [
  {
    title: "Free Shipping",
    subtitle: "No charge for your delivery",
    icon: shippingIcon,
  },
  {
    title: "Quick Payment",
    subtitle: "100% secure",
    icon: paymentIcon,
  },
  {
    title: "24/7 Support",
    subtitle: "Don't hesitate to contact us",
    icon: supportIcon,
  },
];


const Services = () => {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto flex flex-wrap justify-center">
        {services1.map((service, index) => (
          <Card key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ service }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-80 w-80 shrink-0 overflow-hidden rounded-xl bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] p-8 m-4"
    >
      <div className="relative z-10 text-black">
        <span className="mb-3 block w-fit rounded-full bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] px-3 py-0.5 text-sm font-bold text-black">
        <img
              src={service.icon}
              className="max-h-[50px] max-w-[50px] bg-black opacity-75"
              alt=""
            />
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {service.title}
        </motion.span>
      </div>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="white"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="white"
      />
    </motion.svg>
  );
};

export default Services;