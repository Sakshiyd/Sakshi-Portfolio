import { useRef } from "react";
import "./portfolio.scss";
// import "../../../public/weather.png"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "WeatherWave",
    img: "/weather.png",
    desc: "Developed a weather application using HTML, Tailwind CSS and JavaScript, leveraging the OpenWeatherMap API to provide real-time weather data. Designed and implemented a user-friendlyinterface for displaying weather forecasts, current conditions, and location-based updates.Utilized modern JavaScript techniques such as asynchronous programming (Promises,async/await) to handle API requests efficiently.",
    src:"https://weather-app-by-sakshi.netlify.app/"
  
  },


  {
    id: 2,
    title: "Discord Clone",
    img: "/discord.png",
    desc: "Developed the front-end of a Discord clone, real-time chat application, to demonstrate proficiency in modern web development technologies and user interface design.Implemented user-friendly features, such as User Interface: Designed an intuitive and user-friendly interface, ensuring ease of navigation and an engaging user experience and Responsive Design: Ensured the application is fully responsive, providing a consistent experience across desktops, tablets, and mobile devices.",
    src:"https://discord-clone-by-sakshi.netlify.app/"
  }
  // {
  //   id: 3,
  //   title: "Vanilla JS App",
  //   img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.src} target="_blank"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;