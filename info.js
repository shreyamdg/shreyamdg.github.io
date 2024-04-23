import picture from '@/assets/portrait-og.jpg'
import pictureWhite from '@/assets/potrait-white.png'
import pictureBlack from '@/assets/potrait-black.png'

let info = {
  name: 'Shreyam Dutta Gupta',
  logo_name: 'S.D.G',
  flat_picture: picture,
  white_picture: pictureWhite,
  black_picture: pictureBlack,
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description: `I bring extensive experience as a Full Stack Developer, driven by a fervor for architecting resilient, scalable solutions. 
  Proficient in API development, I excel in crafting and sustaining highly scalable, available, and mission-critical services. 
  My expertise extends to creating intuitive UI components and web interfaces, enriching user interactions. 
  With a comprehensive grasp of software development stages—from ideation and architecture to swift prototyping—I offer a holistic approach to projects. 
  Currently, I am actively pursuing opportunities in full-stack development, ready to contribute immediately and open to relocation, 
  eager to apply my skills in shaping innovative and efficient software solutions.`,
  links: {
    linkedin: 'https://www.linkedin.com/in/shreyamdg/',
    github: 'https://github.com/shreyamdg',
    resume: ''
  },
  education: [
    {
      name: 'University of Cincinnati',
      place: 'USA',
      date: 'Aug, 2016 - Dec, 2017',
      degree: 'Masters in Computer Engineering',
      gpa: '3.3/4.0',
      description: [
        "I earned a Master's in Computer Engineering from the University of Cincinnati, focusing on large scale software development and computer architecture"
      ],
      skills: [
        'Software Engineering',
        'Algorithms',
        'Computer Architecture',
        'Large Scale Software Development',
        'Advanced Microsystem Design',
        'OS',
        'Databases',
        'Innovation and Design Thinking'
      ]
    },
    {
      name: 'PES Institute of Technology',
      place: 'India',
      date: 'Sept, 2010 - Aug, 2014',
      degree: 'Bachelors in Computer Engineering',
      gpa: '7.7/10.0',
      description: [
        'Graduated from PES Institute of Technology, Bangalore with a bachelors degree in Computer Engineering, focusing on Data structures, Algorithms, Objected Oriented Design & Databases.'
      ],
      skills: [
        'AI',
        'Software Engineering',
        'Algorithms',
        'Network Security',
        'Embedded Systems',
        'Java',
        'C++'
      ]
    }
  ],
  experience: [
    {
      name: 'SAP Concur',
      place: 'Salt Lake City, UT',
      date: 'Mar, 2022 - Present',
      position: 'Senior Developer',
      description: [
        'Optimized Payments Microservice using Java, SpringBoot, TypeScript, and Nest.js, improving processing speed by 30% and reducing errors by 20%. Integrated advanced monitoring with Kibana, PagerDuty, and New Relic.',
        'Spearheaded frontend development for Payment Admin UI with React, Redux, and TypeScript, achieving 25% increase in user engagement metrics. Enhanced performance via GraphQL schema optimization and resolvers.',
        'Engineered reusable web components for payment interfaces, standardizing React ecosystem. Managed AWS CI/CD pipelines with GitHub Actions, Kubernetes, and Docker, reducing deployment time by 40%.',
        'Designed PCI-compliant CVV capture process for secure Payment Selection UI, ensuring compliance and enhancing user interaction security. Collaborated with architects and UX teams for seamless integration.',
        'Utilized GPT-3.5 Turbo and function calling in proof of concept, enhancing system accuracy and governance for payment team. Identified conflicting administrative rules, leading to 20% improvement in accuracy.'
      ],
      skills: [
        'Java',
        'SpringBoot',
        'Typescript',
        'Nest.js',
        'React',
        'Redux',
        'GraphQL',
        'Storybook',
        'MySQL',
        'AWS',
        'Kubernetes',
        'Docker',
        'Kibana'
      ]
    },
    {
      name: 'Deloitte LLP',
      place: 'Harrisburg, PA',
      date: 'Jan, 2019 - Mar, 2022',
      position: 'Solution Specialist',
      description: [
        `Led full-stack development and digital transformation by modernizing large-scale applications, replacing legacy systems with
        open-source libraries. Created lightweight and responsive applications, significantly enhancing performance and user experience,
        resulting in a 50% improvement in performance and a 30% increase in client satisfaction.`,
        `Developed REST APIs using Spring MVC & crafted custom Vue.js components with Bootstrap Vue to optimize user 
        engagement metrics, while enhancing application security through both fine-grained & coarse-grained access.`,
        `Streamlined analytical reporting with SAP Crystal Reports, enabling pixel-perfect reporting and seamless integration with web
        applications for enhanced business intelligence and decision support.`,
        `Led the Biometric AI initiative, developing proof of concepts and prototypes, and collaborated with leadership and RFP teams to
        define project requirements, budget, and objectives.`,
        `Employed VADER, a lexicon and rule-based sentiment analysis tool tailored for discerning sentiments expressed within social
        media contexts, enhancing the accuracy and relevance of sentiment analysis results leveraging Python, NLTK, Flask, and Vue JS`
      ],
      skills: [
        'Java',
        'Spring MVC',
        'Hibernate',
        'Oracle SQL',
        'JavaScript',
        'Vue.js',
        'Bootstrap',
        'Python'
      ]
    },
    {
      name: 'EASi LLC, now Actalent',
      place: 'Peoria, IL',
      date: 'Dec, 2017 - Jan, 2019',
      position: 'Associate Engineer',
      description: [
        `Designed and developed efficient algorithms for internal software development tools using agile best practices for engines and
        transmissions team at Caterpillar in Innovation and Technology Development Division using Java, Python, Eclipse Modelling
        Framework, Autosar Builder.`,
        `Coding and Maintenance of in-house embedded tools like Systems Architect, Network designer and AUTOSAR Builder plugin tools using Core Java, 
        Python(basics), Eclipse Modeling Framework, Ant, Maven, Git, Unit & Manual Testing.`,
        `Designed and Developed AUTOSAR complaint Autosar Builder Java Pluglets for automotive embedded ECU development by cleaning calibration data 
        and structuring it into AR-XML, created C code stubs using XML files and custom made template printers, wrote custom batch scripts, 
        source control using Git and Dependency Management using Apache Ivy.`,
        `Developing new features, adding functionalities, introducing validation checks of an in-house tool System Architect, 
        which manages calibration data and generates C code to be used in the embedded application.`
      ],
      skills: ['Java', 'Eclipse Modelling Framework', 'Python', 'Autosar Builder', 'MySQL', 'GIT']
    },
    {
      name: 'Accenture',
      place: 'Pune, India',
      date: 'May, 2014 - July, 2016',
      position: 'Software Engineering Analyst',
      description: [
        `Application support for banking client using SAP Business Warehouse, BI, Finance and HR. Created and maintained BW Process
        chains and drill through for RCA.`
      ],
      skills: ['SAP BW', 'BI', 'Finance', 'HR', 'Reporting']
    }
  ],
  skills: [
    {
      title: 'languages',
      info: ['Java', 'Javascript', 'TypeScript', 'Python', 'C++', 'SQL', 'VBScript'],
      icon: 'fa fa-code'
    },
    {
      title: 'backend frameworks',
      info: ['Spring', 'Hibernate', 'Nest.js', 'Flask'],
      icon: 'fa fa-cubes'
    },
    {
      title: 'web technologies',
      info: ['Vue', 'React', 'Redux', 'Node', 'HTML', 'CSS', 'Bootstrap', 'GraphQL', 'Storybook,'],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'infrastructure & ci/cd',
      info: [
        'AWS',
        'Kubernetes',
        'Docker',
        'Gh-Actions',
        'Jenkins',
        'B/G',
        'Kibana',
        'New Relic',
        'PagerDuty'
      ],
      icon: 'fa fa-server'
    },
    {
      title: 'databases',
      info: ['MySQL', 'OracleSQL', 'Neo4j'],
      icon: 'fa fa-database'
    },
    {
      title: 'operating systems & tools',
      info: [
        'MacOS',
        'Ubuntu',
        'Windows',
        'Android',
        'Agile',
        'Scrum',
        'JIRA',
        'Heroku',
        'Firebase',
        'AWS S3'
      ],
      icon: 'fas fa-tools'
    }
  ]
}

export default info
