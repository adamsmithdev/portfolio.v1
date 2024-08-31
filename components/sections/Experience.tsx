import { TbSeparator } from 'react-icons/tb';
import { BsArrowDownRight } from 'react-icons/bs';

// components
import Section from '@/components/Section';

const experience = [
    {
        title: 'Senior Frontend Engineer',
        company: 'OnSolve',
        link: 'https://www.onsolve.com',
        startDate: 'July 2022',
        endDate: 'Present',
        description:
            "My current project. Here at Onsolve my team of 5 developers is responsible for developing the company's most high priority applications for both internal and customer facing use. Applications are built in ReactJS with custom Sass styling, while the backend is supported by .NET Core. I am involved in the entire software development lifecycle from gathering requirements and building technical design documents to developing and testing newly developed features in different micro-service based applications.",
        technologies: [
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            '.NET',
            'PostgreSQL',
        ],
    },
    {
        title: 'Fullstack Engineer',
        company: 'Lexis Nexis',
        link: 'https://www.lexisnexis.com',
        startDate: 'July 2021',
        endDate: 'June 2022',
        description:
            'At Lexis Nexis I was responsible for building multiple internal application including a .NET Core API, as well as building unit tests, integration testing, and performance refactoring in both the API and front-end through ReactJS.',
        technologies: [
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            '.NET',
            'PostgreSQL',
        ],
    },
    {
        title: 'Backend Engineer',
        company: 'Southern Company',
        link: 'https://www.southerncompany.com',
        startDate: 'January 2021',
        endDate: 'June 2021',
        description:
            'At Southern Company I was responsible for developing scalable, modern RESTful APIs through .NET Core 3.1 to allow multiple legacy applications being used by different parts of the company to pass and validate business data to a secure location for reporting use.',
        technologies: ['.NET', 'SQL'],
    },
    {
        title: 'Fullstack Engineer',
        company: 'Intercontinental Exchange',
        link: 'https://www.ice.com',
        startDate: 'April 2019',
        endDate: 'December 2020',
        description:
            'My transition into JS frameworks. I was responsible for maintaining and supporting existing SharePoint On-Premises applications, as well as building additional features on top of the platform through custom farm solutions via C#.NET Farm Solutions and JavaScript/jQuery. Adam was responsible for the design of custom deployments and pipeline tools, as well as playing a key role in implementing a company-wide tool for storing data via .NET Core 3.1 and ReactJS.',
        technologies: [
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            '.NET',
            'SQL',
        ],
    },
    {
        title: 'Fullstack Engineer',
        company: 'Teradata',
        link: 'https://www.teradata.com',
        startDate: 'May 2016',
        endDate: 'March 2019',
        description:
            'The main purpose of this project was to re-build an existing internal Teradata tool called the Asset Repository (AR) in a SharePoint Hybrid environment in SharePoint On-Premises 2016 and SharePoint Online. The work here included gathering of requirements, design of a scalable solution interacting with both SQL and Teradata Databases, migration from both a SharePoint 2010 On-Premises environment and the existing custom application. Also included future development of needed business processes and continuous functional improvement after completion.',
        technologies: ['JavaScript', '.NET', 'SQL'],
    },
    {
        title: 'Fullstack Engineer',
        company: 'ETV Software',
        link: 'https://etvsoftware.com',
        startDate: 'June 2015',
        endDate: 'April 2016',
        description:
            'My first project. I was brought me on to assist in their growing workload of building full-stack .NET business facing web applications. I worked on various apps including billing systems, healthcare, portals, dashboards, customizable widgets, and report generation outputting both Excel and PDF reports. I met with clients face-to-face, gathered requirements and provided solutions for complicated business processes and solutions. 4-5 months of my time here was spent re-building an older PHP application in using the Microsoft stack, and then enhancing this application after iterative requirement gathering sessions and analysis of the desired functionality.',
        technologies: ['JavaScript', 'jQuery', '.NET', 'SQL'],
    },
];

export default function Experience() {
    return (
        <Section title="Experience">
            <ul className="max-w-2xl">
                {experience.map(
                    (
                        {
                            title,
                            company,
                            link,
                            startDate,
                            endDate,
                            description,
                            technologies,
                        },
                        index
                    ) => (
                        <li
                            key={index}
                            className="group flex flex-col justify-center mb-8 p-4 transition-transform duration-300 transform rounded-lg hover:rounded-2xl hover:bg-secondary/50 border-t border-t-white/0 hover:border-t hover:border-t-white/10 hover:transition-colors ease-in-out"
                        >
                            <a href={link} target="_blank">
                                <h2 className="h2 text-white/80 transition-colors duration-300 ease-in-out group-hover:text-accent">
                                    {title} &bull; {company}
                                </h2>
                                <BsArrowDownRight
                                    size={30}
                                    className="mt-2 transition-all duration-300 group-hover:-rotate-90"
                                />
                                <p className="text-white/50">
                                    {startDate} - {endDate}
                                </p>
                                <p className="text-white/80">{description}</p>
                                <ul className="flex flex-wrap gap-4 mt-4">
                                    {technologies.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="px-2 py-1 text-sm bg-accent/80 text-black/90 rounded-xl"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </a>
                        </li>
                    )
                )}
            </ul>
        </Section>
    );
}
