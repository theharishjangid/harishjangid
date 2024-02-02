import { IoSchoolOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

import draupLogo from "../Assets/experience/draup.png";
import zinnovLogo from "../Assets/experience/zinnov.png";
import spyryLogo from "../Assets/experience/spyry.png";
import pesLogo from "../Assets/experience/pes.png";
import sjpucLogo from "../Assets/experience/sjpuc.png";

const ExperienceData = [
  {
    name: "Draup",
    website: "https://draup.com/",
    about:
      "Draup is an enterprise decision-making platform for global CXO leaders in sales and talent domains.",
    date: "Jul, 2020 - Present",
    logo: draupLogo,
    icon: MdWorkOutline,
    role: "Software Development Engineer II",
    experiences: [
      {
        role: "Software Development Engineer II",
        duration: "Sep, 2022 - Present",
        desc: "As SDE 2, led efficiency gains through automated API frameworks, revenue-generating API management systems, performance enhancements, and mentorship initiatives.",
        points: [
          "Engineered an API framework automating Django REST API creation based on specified configurations, leading to a remarkable 30% efficiency improvement for developers.",
          "Introduced a Celery task queuing mechanism with multiple priority-based queues in Redis, improving fault tolerance for high-priority tasks.",
          "Implemented an API management system, monitoring client API access and a rate throttling mechanism, creating a new revenue stream through data access products.",
          "Improved accessibility for API clients by integrating Swagger for automatic API documentation generation.",
          "Enhanced the overall performance of the platform's Neo4j graph database by optimizing the cypher queries, achieving a 3x performance gain.",
          "Provided mentorship to interns and juniors, fostering a collaborative and learning-oriented environment.",
        ],
        skills: [
          "Python (Programming Language)",
          "Django",
          "Django REST Framework",
          "REST APIs",
          "Postgres",
          "Elasticsearch",
          "Redis",
          "Neo4j",
          "Celery",
          "AWS",
          "Jenkins",
          "SSO",
          "SAML",
          "OAuth",
          "Swagger",
          "Backend Web Development",
        ],
      },
      {
        role: "Software Development Engineer I",
        duration: "Jul, 2021 - Aug, 2022",
        desc: "As SDE 1, spearheaded initiatives such as implementing Single Sign-On (SSO) functionality with SAML, optimizing Postgres queries, and integrating OAuth 2.0 authentication, fostering enhanced user experiences and system efficiency.",
        points: [
          "Successfully implemented Single Sign-On (SSO) functionality using SAML, leading to a substantial increase in client acquisitions.",
          "Reduced write operation loads caused by heavy queries through query optimization methods, resulting in a 20% reduction in RDS server costs.",
          "Enhanced full-text search capabilities utilizing Elasticsearch, providing users with more efficient and accurate search results.",
          "Successfully integrated multiple data pipelines using Jenkins, ensuring real-time synchronization of systems with the latest data.",
          "Integrated OAuth 2.0 authentication, ensuring a faster, secure, and reliable login process for an improved user experience.",
          "Optimized slow-performing Postgres queries, enhancing platform snappiness and contributing to overall user satisfaction.",
        ],
        skills: [
          "AWS",
          "Amazon EC2",
          "Amazon RDS",
          "Postgres",
          "Elasticsearch",
          "Jenkins",
          "Single Sign-On (SSO)",
          "OAuth",
          "Security Assertion Markup Language (SAML)",
        ],
      },
      {
        role: "Associate Software Developer",
        duration: "Jul, 2020 - Jun, 2021",
        desc: " Worked as a Backend Developer playing a key role in implementing and optimizing RESTful APIs, contributing to the development of predictive features and successfully integrating third-party applications for enhanced system functionality.",
        points: [
          "Developed and delivered multiple backend REST APIs, ensuring the timely release of features to meet business requirements.",
          "Achieved significant speed enhancements in the application through API optimizations, leading to improved user experience and overall performance.",
          "Contributed to the integration of multiple third-party applications, resulting in a substantial productivity boost for the entire system.",
          "Utilized Neo4j, a graph database, to implement a Reskill feature, connecting job roles and predicting future roles, contributing to the platform's predictive capabilities.",
          "Successfully implemented the backend of the Talent Intelligence feature, analyzing talent demand at a country level, significantly contributing to increased business revenue.",
        ],
        skills: [
          "Python (Programming Language)",
          "Django",
          "Django REST Framework",
          "REST APIs",
          "Postgres",
          "Neo4j",
          "Backend Web Development",
        ],
      },
    ],
  },
  {
    name: "Zinnov",
    website: "https://zinnov.com/",
    about:
      "Zinnov is a global consulting firm enabling digital innovation and building future-ready engineering for enterprises",
    date: "Jan, 2020 - Jun, 2020",
    logo: zinnovLogo,
    icon: MdWorkOutline,
    role: "Software Developer Intern",
    experiences: [
      {
        desc: "Worked as a back-end software developer intern with hands-on experience in building restful APIs for web application.",
        points: [
          "Successfully synced user and account details from our platform to the custom support portal Freshdesk, reducing support response times by 15% and providing the Customer Success team with enhanced user insights.",
          "Worked on minor bug fixes and system improvements, resulting in a 20% reduction in reported bugs and an improved user experience.",
          "Developed proficiency in problem-solving, bug fixes, and system improvements, positively impacting overall system functionality.",
          "Learned Python, Django, Django-Rest Framework, and improved knowledge of Postgres within my 5-month tenure.",
          "Implemented a School Library Management System using Django-Rest Framework demonstrating career progression from a learning project to impactful contributions in system improvements.",
        ],
        skills: [
          "Python (Programming Language)",
          "Django",
          "Django REST Framework",
          "Postgres",
          "Backend Web Development"
        ],
      },
    ],
  },
  {
    name: "Spyry Technologies",
    website: "http://www.spyrytech.com/",
    about:
      "Spyry Technologies is a leading Information Security Company that specializes in Comprehensive IT Security Solutions, Products and Cyber Security Training.",
    date: "Jun, 2017 - Jul, 2017",
    logo: spyryLogo,
    icon: MdWorkOutline,
    role: "Student Intern",
    experiences: [
      {
        desc: "As a student intern at Spyry Technologies, I had the incredible opportunity to immerse myself in the fascinating world of cybersecurity. My primary focus was on mastering Vulnerability Assessment and Penetration Testing, gaining hands-on experience that allowed me to contribute meaningfully to the team's objectives.",
        points: [
          "Vulnerability Assessment: I acquired a robust understanding of identifying and analyzing vulnerabilities within systems, networks and applications to ensure the security posture of digital assets.",
          "Penetration Testing: Engaging in simulated cyber-attacks, I honed my skills in evaluating the resilience of systems against potential threats. This hands-on experience provided valuable insights into crafting effective defense strategies.",
        ],
        skills: [
          "Cyber Security",
          "Vulnerability Assessment",
          "Penetration Testing",
        ],
      },
    ],
  },
];


const EducationData = [
  {
    education: true,
    name: "PES University",
    website: "https://pes.edu/",
    about: "People's Education Society University (PESU), located in Bangalore, India is one of the country's leading teaching and research universities.",
    date: "2016 - 2020",
    logo: pesLogo,
    icon: IoSchoolOutline,
    role: "Bachelor of Technology",
    experiences: [
      {
        role: "Major - Electrical and Electronics Engineering (EEE)",
        desc: "My journey in Electrical and Electronics Engineering at PES University was both enlightening and challenging. Engaging courses equipped me with the theoretical knowledge and practical skills needed to tackle complex problems in the field.",
        skills: [
          "Introduction to Computing using Python",
          "Problem Solving with C",
          "Digital Electronics",
          "Control Systems",
          "Micro-controllers",
          "Signals and Systems",
          "Digital Signal Processing",
          "Digital Image Processing",
        ],
      },
      {
        role: "Minor - Computer Science (CS)",
        desc: "Fueling my passion for the digital realm, I pursued minors in Computer Science allowing me to explore diverse aspects of computer science, from algorithms and data structures to software engineering.",
        skills: [
          "Database Management Systems",
          "Operating Systems",
          "Data Structures",
          "Design and Analysis of Algorithms",
        ],
      },
    ],
  },
  {
    education: true,
    name: "St. Joseph's Pre-University College",
    website: "https://www.sjpuc.in/",
    about: "St. Joseph's Pre-University College (SJPUC) is an educational institution located in Bangalore, India. It executes the objectives of the Jesuit philosophy of education.",
    date: "2014 - 2016",
    logo: sjpucLogo,
    icon: IoSchoolOutline,
    role: "12th Grade",
    experiences: [
      {
        desc: "Navigating through a robust curriculum, I had the opportunity to explore a diverse range of subjects, from science and mathematics to literature and sanskrit. The challenging coursework not only honed my analytical and critical thinking skills but also ignited a passion for lifelong learning.",
        skills: [
          "Physics",
          "Chemistry",
          "Mathematics",
          "Electronics",
          "Sanskrit",
          "English",
        ]
      },
    ],
  },
];

export { ExperienceData, EducationData };
