import type {
  PersonalInfo,
  AboutMe,
  Role,
  Education,
  Certification,
  SkillCategory,
  Language,
  Experience,
} from './types';

export const personalInfo: PersonalInfo = {
  fullName: 'Ali Yildiz',
  title: 'Data Engineer',
  email: 'ali.yildiz@xebia.com',
  phone: '+31 6 21 94 99 84',
  linkedin: 'linkedin.com/in/yildizalicom',
  github: 'github.com/yildizali',
};

export const aboutMe: AboutMe = {
  summary:
    'Ali is a solution-oriented data enthusiast. To process data, one must consider the entire end-to-end flow and know the objectives. Creating a data flow without knowing its source or goal is like sailing a ship in the ocean without a compass. Whether you let the waves carry you from side to side or take the helm and change your direction against the waves, is it time to take the helm?',
  biography:
    'Ali holds an MSc in Data Mining and his thesis was titled "Social analysis by cities using K-means and SVM". He started as a Big Data Engineer with PySpark and FMC components on data science based products. Before his move to Xebia Data, Ali worked as a Cloud Data Architect at a leading FMCG company. This made him proficient in understanding business needs and building end-to-end data pipelines with cloud native environments.',
};

export const roles: Role[] = [
  {
    title: 'Big Data Engineer / Cloud Data Architect',
    description: 'Building cloud-native solutions for Big Data & Machine Learning Pipelines.',
  },
  {
    title: 'Expert Big Data Engineer',
    description:
      'Building streaming, batch, or online end-to-end machine learning pipelines. Building data pipelines for databases.',
  },
  {
    title: 'Senior Software Specialist',
    description: 'Data Warehouse developer of the core banking system.',
  },
];

export const education: Education[] = [
  {
    startYear: 2013,
    endYear: 2016,
    degree: 'MSc',
    field: 'Computer Engineering (Data Mining)',
    institution: 'Suleyman Demirel University',
  },
  {
    startYear: 2009,
    endYear: 2010,
    degree: 'BSc',
    field: 'Informatics Engineering',
    institution: 'University Of Coimbra',
  },
  {
    startYear: 2005,
    endYear: 2011,
    degree: 'BSc',
    field: 'Computer Engineering',
    institution: 'Sakarya University',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Databricks Certified DE Professional',
    date: '12/2024',
  },
  {
    name: 'Databricks Certified DE Associate',
    date: '12/2023',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Spark', 'PySpark', 'Scala', 'SQL'],
  },
  {
    category: 'Data Stack',
    skills: ['DBT Core/Cloud', 'Airflow', 'Dagster'],
  },
  {
    category: 'Cloud',
    skills: ['GCP', 'AWS', 'Azure'],
  },
  {
    category: 'Tech',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD'],
  },
];

export const languages: Language[] = [
  { language: 'Turkish', proficiency: 'Native' },
  { language: 'English', proficiency: 'Fluent' },
  { language: 'Dutch', proficiency: 'Beginner' },
];

export const experiences: Experience[] = [
  {
    title: 'Senior Data Engineer',
    company: 'Irish Rail - Iarnród Éireann',
    startDate: '2024 December',
    endDate: '2025 February',
    description:
      'Spearheaded an IoT data integration project for Irish Railways leveraging Apache NiFi, Grafana, and TimescaleDB to enhance real-time monitoring and operational efficiency.',
    bullets: [
      'Designed and implemented a scalable data ingestion pipeline using Apache NiFi.',
      'Developed dynamic dashboards with Grafana for real-time insights.',
      'Optimized time-series data management with TimescaleDB.',
      'Collaborated with cross-functional teams to align IoT solutions with business objectives.',
      'Ensured high data accuracy and system reliability through rigorous testing and validation.',
      'Built PoC and first MVP of the Life Connect Project.',
    ],
    techStack: ['Apache NiFi', 'Grafana', 'TimescaleDB', 'IoT', 'Data Integration'],
  },
  {
    title: 'Data Engineer',
    company: 'ING',
    startDate: '2024 January',
    endDate: '2024 November',
    description:
      'Worked with the QA& team as a part of the Whole Sale Banking (WSB/A) Tribe to build sustainability reports using DataBricks (PySpark) (DIAM) which is running on Azure as a self managed K8s Cluster.',
    bullets: [
      'Building data pipelines on Kedro and Pure PySpark with Airflow, applying the best practices.',
      'Validating the results with published Reports.',
      'Optimizing PySpark models.',
      'Data pipeline migration from Kedro to pure PySpark.',
      'PoC works on existing frameworks.',
      "Implementing and improving the team's way of working.",
    ],
    techStack: ['Azure', 'AKS', 'PySpark', 'Kedro', 'Python', 'Airflow'],
  },
  {
    title: 'Data Engineer',
    company: 'FedEx',
    startDate: '2023 April',
    endDate: '2023 December',
    description:
      'Worked with the Online Shipping Data Team to build a data warehouse and optimize the existing PySpark application.',
    bullets: [
      'Implemented best practices for DBT Core.',
      'Building data warehouse pipelines on DBT Core, applying the best practices.',
      'Optimizing PySpark models.',
      'Validating the data warehouse model.',
      "Implementing and improving the team's way of working.",
    ],
    techStack: ['DBT Core', 'PySpark', 'K8s', 'GCP', 'BigQuery', 'GitHub'],
  },
  {
    title: 'Data Engineer',
    company: 'Trustmark',
    startDate: '2023 March',
    endDate: '2023 May',
    description:
      'Worked with the team of Xebia Consultants and the Trustmark team to build a Data Platform and Dashboards from scratch.',
    bullets: [
      'Implemented best practices by DBT Core.',
      'Building Data Platform from scratch using DBT Cloud and DBT Core.',
      'Building CI/CD pipelines using GitHub Actions and DBT Cloud.',
      'Reporting and Dashboarding on Preset.io.',
      'Data Transformations and Dori built using GCP BigQuery.',
    ],
    techStack: ['GCP', 'BigQuery', 'DBT Cloud', 'Preset.io', 'GitHub'],
  },
  {
    title: 'Data Engineer',
    company: 'International Flavors & Fragrances Inc.',
    startDate: '2022 November',
    endDate: '2023 February',
    description:
      'Building MLOps platform for Data Scientists and Data Engineers. Worked with a team of Xebia Consultants and the IFF team.',
    bullets: [
      'Implementation of MLOps Platform.',
      "Data Scientist's workbench on AWS Sagemaker.",
      'Terraform as IAC, GitLab as SCM, Jenkins as CI/CD.',
    ],
    techStack: ['AWS', 'Sagemaker', 'MLOps', 'Terraform', 'Jenkins'],
  },
  {
    title: 'Big Data Engineer / Cloud Data Architect',
    company: 'Coca Cola İçecek',
    startDate: '2021 August',
    endDate: '2022 November',
    description:
      'Building native cloud solutions for Big Data & Machine Learning pipelines. Built architectural designs and developed solutions with data scientists and solution architects.',
    bullets: [
      'Designing end-to-end data pipeline for Machine Learning & Artificial Intelligence.',
      'Performance and SQL tuning of existing data lake implementations and ML pipelines.',
      'PoC works with third party firms.',
    ],
    techStack: [
      'CloudSQL',
      'BigQuery',
      'Vertex AI',
      'DataProc',
      'Airflow',
      'Cloud Storage',
      'Cloud Functions',
      'Firestore',
      'Cloud Scheduler',
    ],
  },
  {
    title: 'Expert Big Data Engineer',
    company: 'GarantiBBVA Technology',
    startDate: '2015 November',
    endDate: '2021 August',
    description:
      'Building streaming, batch, or online end-to-end machine learning pipelines. Working as a scrumbridge with data scientists, data engineers, and product owners. Research and development on big data tools. Building data as a service framework on RedHat OpenShift cloud platform with Spring Boot.',
    bullets: [
      'Designing end-to-end data pipelines for Machine Learning & Artificial Intelligence with Data Scientists.',
      'Worked with the Data Engineering team to create big data solutions.',
      'Worked with Solution Architects to create Data As A Service Framework.',
      'Worked with third party regulators to check legal data.',
      'Worked on Cloudera CDH clusters and Existing Dash implementations.',
    ],
    techStack: [
      'Spark',
      'Scala',
      'Python',
      'Oracle Exadata',
      'SQL Server',
      'Apache Kafka',
      'Hive',
      'HBase',
      'MongoDB',
      'Apache NiFi',
      'Spring Boot',
    ],
  },
  {
    title: 'Senior Software Specialist',
    company: 'IBTech Technology',
    startDate: '2012 September',
    endDate: '2015 October',
    description:
      'Data Warehouse developer of the core banking system. Built an end-to-end insurance data warehouse project CignaFinans.',
    bullets: [
      'Insurance core development, design, implementation, deployment, testing, and maintenance, including requirements analysis.',
      'Conceptual, logical, and physical data modeling utilizing relational, dimensional, star, and snowflake schemas.',
      'ETL development and jobs design, implementation, unit testing, and production deployment.',
      'Micro strategy modeling, implementing business intelligence reports and designing dashboards.',
    ],
    techStack: ['SAP DS', 'MicroStrategy', 'ODI', 'OBI', 'Oracle Exadata'],
  },
  {
    title: 'Software Developer',
    company: 'BIS Çözüm',
    startDate: '2012 April',
    endDate: '2012 September',
    description:
      'Developed and maintained Infact Next banking-factoring products used by more than 30 international companies.',
    bullets: [
      'Development, unit testing, and deployment of new features.',
      'Design and development of factoring, credit, and customer performance reports.',
      'Performance tuning on the existing framework.',
    ],
    techStack: ['C#', 'ASP.NET', 'SQL Server', 'T-SQL'],
  },
];
