import SkillBadge from "./SkillBadge";

const frontendSkills = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React', 'Redux'];
const backendSkills = ['Python', 'Node.js', 'Express.js', 'Sequelize', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'SQLite3'];
const otherSkills = ['AWS', 'BigQuery', 'Tableau', 'Heroku', 'Render', 'Postman', 'Jira', 'REST APIs', 'Agile'];
const businessSkills = ['Google Workspace', 'Excel', 'Salesforce', 'Workday', 'Oracle'];

export default function Skills() {
  return (
    <div id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 mb-4">
          Skills
        </h2>

        { /* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900 mb-4">
            Frontend
          </h3>
          <div className="mb-4">
            {frontendSkills.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < frontendSkills.length - 1 ? 'mr-2' : ''
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
            Backend
          </h3>
          <div className="mb-4">
            {backendSkills.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < backendSkills.length - 1 ? 'mr-2' : ''
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
            Other
          </h3>
          <div className="mb-4">
            {otherSkills.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < otherSkills.length - 1 ? 'mr-2' : ''
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
            Business
          </h3>
          <div className="mb-4">
            {businessSkills.map((technology, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                  index < businessSkills.length - 1 ? 'mr-2' : ''
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
