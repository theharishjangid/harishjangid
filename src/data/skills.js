import PythonLogo from "../Assets/skills/python.png";
import JavascriptLogo from "../Assets/skills/javascript.png";
import CLogo from "../Assets/skills/c.png";
import HTMLLogo from "../Assets/skills/html.png";
import CSSLogo from "../Assets/skills/css.png";
import ReactLogo from "../Assets/skills/react.png";
import DjangoLogo from "../Assets/skills/django.png";
import DjangoRESTLogo from "../Assets/skills/django_rest.png";
import PostgresLogo from "../Assets/skills/postgres.png";
import RedisLogo from "../Assets/skills/redis.png";
import Neo4jLogo from "../Assets/skills/neo4j.png";
import MongodbLogo from "../Assets/skills/mongodb.png";
import MysqlLogo from "../Assets/skills/mysql.png";
import ESLogo from "../Assets/skills/elastic.png";
import DatadogLogo from "../Assets/skills/datadog.png";
import GitLogo from "../Assets/skills/git.png";
import GithubLogo from "../Assets/skills/github.png";
import AWSLogo from "../Assets/skills/aws.png";

const SkillCategories = [
  "All",
  "Programming Languages",
  "Frameworks",
  "Data Stores",
  "Others",
];

const SkillsData = [
  {
    name: "Python",
    logo: PythonLogo,
    category: "Programming Languages",
    about: "Python is a popular general-purpose programming language. It is used in machine learning, web development, desktop applications, and many other fields.",
    percentage: 90,
  },
  {
    name: "Javascript",
    logo: JavascriptLogo,
    category: "Programming Languages",
    about: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    percentage: 65,
  },
  {
    name: "C",
    logo: CLogo,
    category: "Programming Languages",
    about: "C is a general-purpose computer programming language. By design, C's features cleanly reflect the capabilities of the targeted CPUs.",
    percentage: 90,
  },
  {
    name: "HTML",
    logo: HTMLLogo,
    category: "Programming Languages",
    about: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    percentage: 85,
  },
  {
    name: "CSS",
    logo: CSSLogo,
    category: "Programming Languages",
    about: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    percentage: 70,
  },
  {
    name: "Django",
    logo: DjangoLogo,
    category: "Frameworks",
    about: "Django is a high-level Python Web application server that encourages rapid development and clean, pragmatic design.",
    percentage: 90,
  },
  {
    name: "Django REST",
    logo: DjangoRESTLogo,
    category: "Frameworks",
    about: "Django REST framework is a powerful and flexible toolkit for building Web APIs.",
    percentage: 95,
  },
  {
    name: "React JS",
    logo: ReactLogo,
    category: "Frameworks",
    about: "React JS is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    percentage: 70,
  },
  {
    name: "Postgres",
    logo: PostgresLogo,
    category: "Data Stores",
    about: "PostgreSQL is an object-relational database management system.",
    percentage: 90,
  },
  {
    name: "Redis",
    logo: RedisLogo,
    category: "Data Stores",
    about: "Redis is an open-source in-memory data structure project implementing a distributed, in-memory key-value database with optional durability.",
    percentage: 80,
  },
  {
    name: "Neo4j",
    logo: Neo4jLogo,
    category: "Data Stores",
    about: "Neo4j is a highly scalable, open source, native graph database purpose-built to leverage not only data but also its relationships.",
    percentage: 70,
  },
  {
    name: "MongoDB",
    logo: MongodbLogo,
    category: "Data Stores",
    about: "MongoDB is the next-generation NoSQL database that helps businesses transform their industries by harnessing the power of data.",
    percentage: 80,
  },
  {
    name: "MySQL",
    logo: MysqlLogo,
    category: "Data Stores",
    about: "MySQL is an open source database that supports scalable web-based and embedded database applications.",
    percentage: 90,
  },
  {
    name: "Elasticsearch",
    logo: ESLogo,
    category: "Data Stores",
    about: "Elasticsearch is a search server based on Lucene that provides a distributed, multitenant-capable full-text search engine.",
    percentage: 70,
  },
  {
    name: "Git",
    logo: GitLogo,
    category: "Others",
    about: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    percentage: 90,
  },
  {
    name: "Github",
    logo: GithubLogo,
    category: "Others",
    about: "GitHub is a web-based Git repository hosting service offering distributed revision control and source code management functionality of Git.",
    percentage: 95,
  },
  {
    name: "Datadog",
    logo: DatadogLogo,
    category: "Others",
    about: "Datadog is a monitoring service that helps software developers and web operators understand and turn their IT data into actionable insight.",
    percentage: 80,
  },
  {
    name: "AWS",
    logo: AWSLogo,
    category: "Others",
    about: "Amazon Web Services (AWS) is broadly adopted cloud that includes infrastructure as a service (IaaS) and platform as a service (PaaS) offerings.",
    percentage: 65,
  },
];

export { SkillsData, SkillCategories };
