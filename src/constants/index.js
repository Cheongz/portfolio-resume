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
    pentest,
    unrealengine,
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
      name: "unreal engine",
      icon: unrealengine,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Penetration Tester",
      icon: pentest,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };