import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine,BotMessageSquare } from "lucide-react";

export const DATA = {
  name: "Shafi ",
  initials: "M",
  url: "https://mohammedshafi.vercel.app/",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Banaswadi,+Bengaluru,+Karnataka/@13.0106957,77.6384052,15z/data=!3m1!4b1!4m6!3m5!1s0x3bae172a8816c8a7:0x12898ffb28776f32!8m2!3d13.0103761!4d77.6481944!16s%2Fm%2F0h_903m?entry=ttu",
  description:
    "Digital craftsman & code architect at PixelBird Digital. Transforming ideas into elegant solutions while empowering the next generation of tech innovators.",
  summary:
    "Full-stack developer with expertise in Python and modern web technologies. I craft elegant, high-performance solutions through clean code architecture and innovative problem-solving. Committed to continuous learning and staying at the forefront of emerging tech trends to deliver exceptional digital experiences.",
  avatarUrl: "/me.JPG",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "React Native",
    "Node.js",
    "Python",
    'Git',
    'Ngnix',
    'Gunicorn',
    "EC2",
    "Postgres",
    'SQL',
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
      href: "https://pixelbird.digital/",
      badges: [],
      location: "OnSite",
      title: "Full Stack Engineer",
      logoUrl: "/pixelbird.jpg",
      start: "Nov 2023",
      end: "Present",
      description:
        "Led development of bulk messaging systems with API integrations for WhatsApp and Instagram. Designed scalable architecture for high-volume messaging needs. Built chatbot solutions with FastAPI backend for hotel bookings and customer support, increasing client bookings from 10% to 55% via social media. Optimized performance with efficient algorithms, resulting in 70% growth in bookings and customer service efficiency. Currently developing Meta-integrated business solutions for WhatsApp and Instagram to streamline communication and marketing.",
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
    //editify.mp4
    {
      title: "Editify",
      href: "https://editify-gemini.vercel.app/",
      dates: "July 24th 2025",
      active: true,
      description:
        "Editify is an AI-powered image editor that leverages Google's Gemini 2.0 Flash Exp Image Generation technology. Built with Next.js and TailwindCSS, this tool allows users to transform images through natural language prompts, offering creative editing capabilities without requiring design expertise.",
      technologies: [
        "NextJs",
        "TailwindCSS",
        "Framer Motion",
        "Gemini 2.0 Flash Exp Image Generation",
       ],
            links: [
        {
           type: "Website",
           href: "https://editify-gemini.vercel.app/",
           icon: <Icons.globe className="size-3" />,
       },
       {
        type: "Source",
        href: "https://github.com/advent0shafi/gemini-image-editor",
        icon: <Icons.github className="size-3" />,
       },
       ],
      image: "",
      video: "editify.mp4",
    },
    {
      title: "ChatiFy",
      href: "https://chatify-ai.vercel.app/",
      dates: "March 27th 2024",
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
           href: "https://chatify-ai.vercel.app/",
           icon: <Icons.globe className="size-3" />,
       },
       ],
      image: "",
      video: "chatify.mp4",
    },
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
      title: "Face Age and Gender Recognition Using OpenCV",
      href: "https://github.com/advent0shafi/face-age-gender-recognition",
      dates: "Sept 12th 2024",
      active: true,
      description:
        "This project demonstrates real-time face detection along with age and gender prediction using OpenCV and pre-trained deep learning models. The webcam feed detects faces, draws bounding boxes around them, and annotates each face with the predicted age group and gender.",
      technologies: [
    "Python",
    "OpenCV",
    "Haar Cascade Classifier",
    "Deep Learning (DNN module of OpenCV)",
    "Pre-trained Caffe Models"
  ],
  links: [
    {
      type: "Source Frontend",
      icon: <Icons.github className="h-4 w-4" />,
      href: "https://github.com/advent0shafi/face-age-gender-recognition",
    },
  ],
      image: "faceapp.png",
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
      title: "TrekNexus E Commerce Application",
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
          href: "https://github.com/advent0shafi/next-framer-ui",
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
