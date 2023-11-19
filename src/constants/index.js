import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    angular,
    postgresql,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mechanic,
    mcdonald,
    food,
    developer,
    carrent,
    jobit,
    tripguide,
    threejs,
    robots,
    portfolio,
    ecommerce,
    sb,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Ethical Hacker",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Unreal Engine",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Angular",
      icon: angular,
    },
  ];
  
  const experiences = [
    {
      title: "AUTOMOTIVE TECHNICIAN",
      company_name: "EURO AUTO GARAGE SALES & SERVICE",
      icon: mechanic,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Julai 2023",
      points: [
        "Ensure every time repairing and doing service maintenance in good condition.",
        "Fulfil customer requirement.",
        "Diagnosed operating difficulties on range of cars and other vehicles.",
        "Conducted road tests to identify issues based on customer reports.",
      ],
    },
    {
      title: "IT Intern",
      company_name: "TMS LITE SDN BHD",
      icon: developer,
      iconBg: "#383E56",
      date: "September 2020 - December 2020",
      points: [
        "Replaced malfunctioning parts, testing components to solve complex hardware issues.",
        "Troubleshot hardware and software to keep operational.",
        "Partnered with technical team members to deliver products offering array of features and functionality.",
        "Developed prototypes using latest software and hardware constructs and platforms.",
        "Monitored system for equipment failure or errors in performance.",
        "Continuously checked the system for problems, quickly identifying and addressing equipment and performance issues.",
      ],
    },
    {
      title: "PART TIME CREW",
      company_name: "CARNIVAL BANGKIT BERSAMA,MCDONALD",
      icon: mcdonald,
      iconBg: "#E6DEDD",
      date: "August 2017",
      points: [
        "Implemented corporate marketing plans and initiated creative strategies to develop business.",
        "Maintained up-to-date knowledge about products and promotions.",
        "Assist in basketball booth and gift redemption.",
      ],
    },
    {
      title: "PART TIME FOOD SERVICE",
      company_name: "GOURMET CARNIVAL",
      icon: food,
      iconBg: "#383E56",
      date: "10 August 2017 - 12 August 2017",
      points: [
        " 	Replenished ingredients to maintain stock levels for food preparation demands for otak-otak and stinky tofu.",
        " 	Prepared required food portions to fulfil high-volume orders.",
        " 	Supported team goals by following instructions during shifts.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Book Shop",
      description:
        "Web-based platform that allows users to search, book, and manage ecommerce from various providers, providing a convenient and efficient solution for needs.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap4",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Cheongz/ecommerce-frontend",
    },
    {
      name: "Robots ",
      description:
        "Web application that enables users to search for choose robots.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap4",
          color: "pink-text-gradient",
        },
      ],
      image: robots,
      source_code_link: "https://github.com/Cheongz/robofriends",
    },
    {
      name: "Smart Brain",
      description:
        "Web application that enables to users to detect pictures face using AI technologies API.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap4",
          color: "pink-text-gradient",
        },
      ],
      image: sb,
      source_code_link: "https://github.com/Cheongz/smart-brains-frontend",
    },
    {
      name: "Portfolio",
      description:
        "Web application that created resume to easy apply job on online",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap4",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Cheongz/simplefolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };