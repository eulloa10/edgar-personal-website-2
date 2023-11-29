import SkillBadge from "./SkillBadge";

const frontendSkills = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React', 'Redux']
const backendSkills = ['Python', 'Node.js', 'Express.js', 'Sequelize', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'SQLite3']
const otherSkills = ['AWS', 'BigQuery', 'Tableau', 'Heroku', 'Render', 'Postman', 'Jira', 'REST APIs', 'Agile']
const businessSkills = ['Google Workspace', 'Excel', 'Salesforce', 'Workday', 'Oracle']

export default function Skills() {
  return (
    <div id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
          Skills
        </h2>
        <div className="mb-8 w-full sm:w-1/2">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900">
            Frontend
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-4 sm:max-w-xl sm:gap-6 lg:mx-0 lg:max-w-none">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="h-16"> {/* Adjust the height as needed */}
                <SkillBadge skillName={skill} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8 w-full sm:w-1/2">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900">
            Backend
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-4 sm:max-w-xl sm:gap-6 lg:mx-0 lg:max-w-none">
            {backendSkills.map((skill, index) => (
              <div key={index} className="h-16"> {/* Adjust the height as needed */}
                <SkillBadge skillName={skill} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8 w-full sm:w-1/2">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900">
            Other
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-4 sm:max-w-xl sm:gap-6 lg:mx-0 lg:max-w-none">
            {otherSkills.map((skill, index) => (
              <div key={index} className="h-16"> {/* Adjust the height as needed */}
                <SkillBadge skillName={skill} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8 w-full sm:w-1/2">
          <h3 className="text-left text-xl font-semibold leading-8 text-gray-900">
            Business
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-4 sm:max-w-xl sm:gap-6 lg:mx-0 lg:max-w-none">
            {businessSkills.map((skill, index) => (
              <div key={index} className="h-16"> {/* Adjust the height as needed */}
                <SkillBadge skillName={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
