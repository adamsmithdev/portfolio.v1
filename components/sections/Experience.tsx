import { BsArrowUpRight } from 'react-icons/bs';

// components
import Section from '@/components/Section';

const experience = [
  {
    title: 'Frontend Engineer',
    company: 'Crisis24',
    link: 'https://www.crisis24.com',
    startDate: 'July 2022',
    endDate: 'Present',
    description:
      'Core contributor for high-impact features across Crisis24’s Mass Notification and Risk Intelligence platforms. Architected scalable, testable React + TypeScript solutions in close collaboration with UX, Product, and backend teams. Championed SCSS Modules, modern state management, and frontend testing practices. Spearheaded integrations with .NET APIs and played a key role in replatforming legacy OnSolve systems into the Crisis24 ecosystem.',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'SCSS Modules',
      '.NET',
      'Kubernetes',
      'Postman',
    ],
  },
  {
    title: 'Fullstack Engineer',
    company: 'Lexis Nexis',
    link: 'https://www.lexisnexis.com',
    startDate: 'July 2021',
    endDate: 'June 2022',
    description:
      'Built Microsoft Teams apps and internal dashboards using React and Redux. Developed reusable components, supported full-stack feature development, and improved application performance and reliability through testing and refactoring. Worked cross-functionally to deliver .NET Core APIs for legacy system integrations.',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
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
      'Engineered RESTful APIs with .NET Core to modernize internal business workflows. Built data ingestion pipelines, enhanced SQL database interactions, and collaborated across teams to translate stakeholder needs into reliable backend services.',
    technologies: ['.NET', 'C#', 'SQL'],
  },
  {
    title: 'Fullstack Engineer',
    company: 'Intercontinental Exchange',
    link: 'https://www.ice.com',
    startDate: 'April 2019',
    endDate: 'December 2020',
    description:
      'Contributed to internal tools and document management workflows using React and .NET Core. Led automation efforts with PowerShell and C# for SharePoint deployments. Delivered dynamic UIs and custom permissions interfaces with React and Kendo UI.',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      '.NET Core',
      'Kendo UI',
      'SQL',
      'SharePoint',
    ],
  },
  {
    title: 'Fullstack Engineer',
    company: 'Teradata',
    link: 'https://www.teradata.com',
    startDate: 'May 2016',
    endDate: 'March 2019',
    description:
      'Built scalable SharePoint solutions and internal tooling using JavaScript, jQuery, and .NET. Developed approval workflows with Nintex and InfoPath, modernized site templates, and led internal training initiatives to increase team adoption of frontend tools.',
    technologies: [
      'JavaScript',
      'jQuery',
      '.NET',
      'C#',
      'SQL',
      'SharePoint',
      'InfoPath',
      'Nintex',
    ],
  },
  {
    title: 'Fullstack Engineer',
    company: 'ETV Software',
    link: 'https://etvsoftware.com',
    startDate: 'June 2015',
    endDate: 'April 2016',
    description:
      'Delivered full-stack business applications for clients in healthcare, finance, and logistics. Migrated legacy apps to modern .NET-based systems and enhanced them through client-driven iterations. Built custom dashboards, reporting tools, and SQL-driven data solutions.',
    technologies: ['JavaScript', 'jQuery', '.NET', 'SQL', 'VB.NET', 'C#'],
  },
];

export default function Experience() {
  return (
    <Section title="Experience">
      <ul className="space-y-8 max-w-4xl mx-auto">
        {experience.map((job, index) => (
          <li
            key={index}
            className="group border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-colors bg-background/60 hover:bg-background/80 shadow-md hover:shadow-lg"
          >
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {job.title} @{' '}
                  <span className="underline underline-offset-4">
                    {job.company}
                  </span>
                </h2>
                <BsArrowUpRight
                  size={20}
                  className="text-accent opacity-70 group-hover:rotate-45 transition-transform duration-300"
                />
              </div>

              <p className="text-sm text-white/50">
                {job.startDate} &mdash; {job.endDate}
              </p>

              <p className="text-white leading-relaxed text-sm">
                {job.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-4">
                {job.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-xs font-medium bg-accent/80 text-black px-2 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
