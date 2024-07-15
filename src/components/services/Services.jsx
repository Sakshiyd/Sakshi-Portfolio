import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textcontainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titlecontainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>C++</h2>
          <p>
            C++ is an object-oriented programming language which gives a clear
            structure to programs and allows code to be reused, lowering
            development costs. C++ is portable and can be used to develop
            applications that can be adapted to multiple platforms.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>JavaScript</h2>
          <p>
            JavaScript is a scripting or programming language that allows you to
            implement complex features on web pages — every time a web page does
            more than just sit there and display static information for you to
            look at — displaying timely content updates, interactive maps,
            animated 2D/3D graphics, scrolling video jukeboxes
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Java</h2>
          <p>
            Java is a multi-platform, object-oriented, and network-centric
            language that can be used as a platform in itself. It is a fast,
            secure, reliable programming language for coding everything from
            mobile apps and enterprise software to big data applications and
            server-side technologies.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Spring Boot</h2>
          <p>
            Spring Boot is an open-source, microservice-based Java web framework
            offered by Spring, particularly useful for software engineers
            developing web apps and microservices.Java Spring Framework (Spring
            Framework) is a popular, open source, enterprise-level framework.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
