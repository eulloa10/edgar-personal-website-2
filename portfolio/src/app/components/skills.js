import SkillBadge from "./SkillBadge";

const data_languages = ['Python', 'SQL'];
const data_pipelines_etl = ['Pandas', 'Openpyxl', 'Airflow', 'AWS Glue'];
const data_databases = ['PostgreSQL', 'SQLAlchemy'];
const data_cloud_devops = ['AWS (S3, RDS, EC2, Glue)', 'Docker', 'Terraform'];

const languages = ['Python', 'JavaScript', 'HTML', 'CSS'];
const backend = ['Django', 'Flask', 'RESTful APIs'];
const frontend = ['React', 'Next.js'];
const testing_qa = ['Postman', 'pytest'];

export default function Skills() {
  return (
    <div id="skills" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 mb-12">
          Skills
        </h2>

        {/* Data Engineering & Analysis */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Data Engineering & Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {data_languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Data Pipelines/ETL</h4>
              <div className="flex flex-wrap gap-2">
                {data_pipelines_etl.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {data_databases.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Cloud/DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {data_cloud_devops.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {backend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Testing/QA</h4>
              <div className="flex flex-wrap gap-2">
                {testing_qa.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
