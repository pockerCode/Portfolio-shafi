import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine,BotMessageSquare } from "lucide-react";

export const DATA = {
  name: "Shafi ",
  initials: "M",
  url: "https://advent0shafio.vercel.app/",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Banaswadi,+Bengaluru,+Karnataka/@13.0106957,77.6384052,15z/data=!3m1!4b1!4m6!3m5!1s0x3bae172a8816c8a7:0x12898ffb28776f32!8m2!3d13.0103761!4d77.6481944!16s%2Fm%2F0h_903m?entry=ttu",
  description:
    "Web Developer at PixelBird Digital. Passionate about building innovative solutions and helping others. Very active on Linkdien",
  summary:
    "I am a Python developer, self-taught and passionate about coding and problem-solving. I prioritize writing clean and efficient code, constantly seeking oppor- tunities to learn and remain updated with the latest technologies.",
  avatarUrl: "/me.JPG",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Bash Script",
    "Django RestFramwork",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "/chat-bot-ai", icon: BotMessageSquare, label: "ChatBot" },
  ],
  contact: {
    email: "shafimsm19@gmail.com",
    tel: "+91 9605112527",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/advent0shafi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-shafi-advent",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shafi_msm",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "shafimsm19@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PixelBird",
      href: "https://atomic.finance",
      badges: [],
      location: "OnSite",
      title: "Full Stack Engineer",
      logoUrl: "/pixelbird.jpg",
      start: "Nov 2023",
      end: "Present",
      description:
        "Developed and optimized modern websites using Next.js and Django REST Framework. Created a robust, responsive design with TypeScript and Tailwind CSS. Dockerized microservices for seamless deployment and set up a production Kubernetes cluster. Architected a high-performance data pipeline using Next.js and Django REST Framework to enhance website functionality and scalability.",
    },
  ],
  education: [
    {
      school: "Brototype",
      href: "https://www.brototype.com/",
      degree: "Full Stack Developer Course",
      logoUrl: "/brototype_logo.jpeg",
      start: "2023",
      end: "2023",
    },
    {
      school: "University of Calicut",
      href: "https://uoc.ac.in/",
      degree: "Bachelor's Degree of Physics",
      logoUrl: "/calicut-university.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    // {
    //   title: "Chembosky",
    //   href: "https://chembosky.com/",
    //   dates: "Dec 2023 - Jan 2024",
    //   active: true,
    //   description:
    //     "Worked on the development of Chembosky, utilizing Next.js for a modern, fast-loading frontend and Tailwind CSS for a responsive design. Implemented Strapi as the CMS with PostgreSQL as the database to manage content efficiently. Deployed the site on Digital Ocean, using PM2 and Nginx for optimal performance and reliability.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Strapi",
    //     "TailwindCSS",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chembosky.com/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "chembosky.png",
    //   video: "",
    // },
    // {
    //   title: "Solace",
    //   href: "https://solaceglobal.org/",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Worked on the development of SOLACE, utilizing Next.js for a modern, fast-loading frontend and Tailwind CSS for a responsive design. Implemented Strapi as the CMS with PostgreSQL as the database to manage content efficiently. Deployed the site on Digital Ocean, using PM2 and Nginx for optimal performance and reliability.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Strapi",
    //     "TailwindCSS",
    //     "Framer Motion",
    //     "GSAP",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://solaceglobal.org/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "solace.png",
    //   video: "",
    // },
    {
      title: "ChatFy",
      href: "https://next-js-grok-l-lama.vercel.app",
      dates: "July 27th 2024",
      active: true,
      description:
        "This project demonstrates the integration of Meta's Llama 3.1, a state-of-the-art language model, with a Next.js application using the Vercel AI SDK and Groq as the model provider.",
      technologies: [
        "NextJs",
        "TailwindCSS",
        "Framer Motion",
        "Grok",
        "Llama 3.1",
        'Magic Ui',

      ],
            links: [
        {
           type: "Website",
           href: "https://next-js-grok-l-lama.vercel.app",
           icon: <Icons.globe className="size-3" />,
       },
       ],
      image: "chatfy.png",
      video: "",
    },
    {
      title: "ZenithCare",
      href: "https://github.com/advent0shafi/Zenithcare-React-Frontend",
      dates: "April 2023 - September 2023",
      active: false,
      description:
        "Developed a booking website for therapists using Django REST Framework and React.js. Integrated Tailwind CSS for styling, Redux for state management, and deployed with AWS, Nginx, and Gunicorn.",
      technologies: [
        "ReactJs",
        "TailwindCSS",
        "Framer Motion",
        "Redux",
        "Django RestFramework",
        "JWT",
        "Django Channels",
        "Django Celery",
        "PostgresSQL",

        "AWS",
        "Ngnix",
        "Gunicorn"
      ],
      links: [
        {
          type: "Source Frontend",
          href: "https://github.com/advent0shafi/Zenithcare-React-Frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Backend",
          href: "https://github.com/advent0shafi/Zenithcare-Django-Server-Side",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "django-react.png",
      video: "",
    },
    {
      title: "E Commerce",
      href: "https://github.com/advent0shafi/Treknexus",
      dates: "April 2023 - March 2023",
      active: true,
      description:
        "TrekNexus is an E-commerce website built using Python Django for the server-side magic, with PostgreSQL ensuring robust and secure data storage. This platform brings you a seamless shopping experience combined with advanced features to enhance your online shopping journey.",
        technologies: [
          "HTML",
          "Bootsrap CSS",
          "AJax",
          "Django",
          "PostgresSQL",
          "AWS",
          "Ngnix",
          "Gunicorn"
        ],
      links: [
        {
          type: "Source",
          href: "https://github.com/advent0shafi/Treknexus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "treknesus.png",
      video:
        "",
    },
    {
      title: "Lenis Framer Gallery",
      href: "https://github.com/advent0shafi/Lenis_Framer_Gallery",
      dates: "April 2023 - September 2023",
      active: false,
      description:
        "Built a dynamic gallery using Next.js with Lenis Scroll for smooth scrolling effects and Tailwind CSS for styling. The project featured an engaging, visually appealing gallery experience with seamless navigation and modern design elements.",
      technologies: [
        "Next Js",
        "TailwindCSS",
        "lenis Scroll",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/advent0shafi/Lenis_Framer_Gallery",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "React Mastery",
      dates: "February 2023 - April 2023",
      location: "Calicut, Kerala",
      description:
        "Explored the React ecosystem by building various interactive web applications, learning about component-based architecture, state management with Redux, and integrating with backend services. Created several projects to solidify understanding of hooks, context, and routing.",
      image:
        "/react.jpg",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/advent0shafi/Netflix_Clone",
        },
      ],
    },
   
   
    {
      title: "Next.js Expertise",
      dates: "May 2023 - July 2023",
      location: "Calicut, Kerala",
      description:
        "Dived into Next.js for server-side rendering and static site generation. Built modern, SEO-optimized websites, implemented advanced features such as incremental static regeneration, and integrated with various CMS platforms. Leveraged Tailwind CSS for styling and optimized performance through best practices and code splitting.",
      image:
        "/nextJs.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
 

   


    {
      title: "Django Proficiency",
      dates: "August 2023 - October 2023",
      location: "Calicut, Kerala",
      description: "Focused on mastering Django, including building RESTful APIs with Django REST Framework, implementing authentication with JWT, and managing real-time features with Django Channels. Developed a series of backend projects to understand database management, middleware, and asynchronous task handling with Django Celery.",
      image:
        "/drf.png",
      
      links: [
  
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/advent0shafi/Zenithcare-Django-Server-Side",
        },
      ],
    },
  
   

  ],
} as const;
