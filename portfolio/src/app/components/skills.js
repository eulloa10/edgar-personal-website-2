import SkillBadge from "./SkillBadge";

const languages = ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'];
const technologies = ['Django', 'Flask', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Jest', 'Cypress', 'PostgreSQL'];
const libraries = ['React', 'Redux','Sequelize', 'SQLAlchemy', 'Ant Design'];
const tools = ['Docker', 'AWS S3', 'Postman', 'Jira', 'Git', 'BigQuery', 'Tableau', 'Render', 'Agile', 'Excel', 'Salesforce', 'Workday', 'Oracle'];

export default function Skills() {
  return (
    <div id="skills" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 mb-4">
          Skills
        </h2>

        { /* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900 mb-4">
            Languages
          </h3>
          <div className="mb-4">
            {languages.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < languages.length - 1 ? 'mr-2' : ''
                } mb-2`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        { /* Backend Skills */}
        <div className="mb-8">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900 mb-4">
            Technologies
          </h3>
          <div className="mb-4">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < technologies.length - 1 ? 'mr-2' : ''
                } mb-2`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        { /* Other Skills */}
        <div className="mb-8">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900 mb-4">
            Libraries
          </h3>
          <div className="mb-4">
            {libraries.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < libraries.length - 1 ? 'mr-2' : ''
                } mb-2`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        { /* Business Skills */}
        <div className="mb-8">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900 mb-4">
            Tools
          </h3>
          <div className="mb-4">
            {tools.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < tools.length - 1 ? 'mr-2' : ''
                } mb-2`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
