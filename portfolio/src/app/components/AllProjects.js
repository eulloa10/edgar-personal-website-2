import { CloudArrowUpIcon, ServerIcon, GlobeAmericasIcon, CircleStackIcon, MapIcon, ArrowPathRoundedSquareIcon, ChatBubbleLeftEllipsisIcon, UsersIcon, CursorArrowRaysIcon, PresentationChartLineIcon, CloudArrowDownIcon, EnvelopeIcon, Cog6ToothIcon } from '@heroicons/react/20/solid'
import Project from './Project';

const projects = [
  {
    name: 'Automated Economic Indicator Dashboard',
    tag: 'financial-indicators-pipeline',
    stack: ['Python', 'AWS', 'Airflow', 'Terraform', 'PostgreSQL', 'Glue', 'Looker Studio'],
    description:
    'Automated data pipeline to track economic indicators over time. Data is ingested from the FRED API, stored in an S3-based data lake, transformed using AWS Glue, and stored in an RDS database. An interactive Looker Studio dashboard visualizes key economic indicators for data-driven decisions.',
    features: [
      {
        name: 'AWS Data Pipeline',
        description:
          'Data ingestion (Glue), transformation (Glue), and storage (S3, RDS) on AWS.',
        icon: PresentationChartLineIcon,
      },
      {
        name: 'Infrastructure as Code (Terraform)',
        description: 'Automated provisioning and management of AWS resources (S3, Glue, RDS, EC2) using Terraform.',
        icon: CloudArrowDownIcon,
      },
      {
        name: 'Workflow Orchestration (Airflow)',
        description: 'Automated data pipeline management and regular updates using Apache Airflow on EC2.',
        icon: Cog6ToothIcon,
      },
    ],
    githubLink: 'https://github.com/eulloa10/financial-data-pipeline',
    liveLink: null,
    image: '/fred_fdp_screenshot.png'
  },
  {
    name: 'Apache Superset (Open Source Contributor)',
    tag: 'superset',
    stack: ['TypeScript', 'React', 'Jest', 'Cypress', 'Python', 'Flask', 'Celery'],
    description:
    'Apache Superset is an open source Data Visualization and Data Exploration Platform',
    features: [
      {
        name: 'Screenshot Generation',
        description:
          'Developed RESTful API endpoints for generating screenshots, allowing users to share different dashboard states',
        icon: CircleStackIcon,
      },
      {
        name: 'Accessibility',
        description: 'Improved accessibility for users with disabilities by implementing proper HTML semantics for clickable elements',
        icon: MapIcon,
      },
      {
        name: 'User and Developer Experience',
        description: 'Collaborated with the Project Management Committee to improve project quality and developer experience',
        icon: ArrowPathRoundedSquareIcon,
      },
    ],
    githubLink: 'https://github.com/apache/superset',
    liveLink: 'https://superset.apache.org/',
    image: '/superset.png'
  },
  {
    name: 'Lucky Parking (Open Source Contributor)',
    tag: 'lucky',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'React', 'MongoDB'],
    description:
    'Visualization of parking data to assist in understanding of the effects of parking policies on a neighborhood by neighborhood basis in the City of Los Angeles',
    features: [
      {
        name: 'MongoDB Client',
        description:
          'Implemented a MongoDB client to enable efficient storage and retrieval of 17 million parking citation records from LADOT',
        icon: CircleStackIcon,
      },
      {
        name: 'MapBox API Integration',
        description: 'Merged custom data for 99 neighborhood councils with existing Mapbox API data to create more comprehensive search results',
        icon: MapIcon,
      },
      {
        name: 'Cross-functional Teamwork',
        description: 'Partnered with Product, Data Science, and UX to ensure software solutions aligned with the organization\'s civic tech objectives',
        icon: ArrowPathRoundedSquareIcon,
      },
    ],
    githubLink: 'https://github.com/hackforla/lucky-parking',
    liveLink: 'https://www.luckyparking.org/',
    image: '/luckyparking.png'
  },
  {
    name: 'Haus',
    tag: 'haus',
    stack: ['JavaScript', 'Python', 'React', 'Redux', 'Flask', 'HTML5', 'CSS3', 'SQLAlchemy', 'SQLite3', 'PostgreSQL'],
    description:
    'A real estate marketplace web app where users can browse home listings, schedule tours, and make offers',
    features: [
      {
        name: 'Cloud Storage',
        description:
          'Optimized listing image uploads with AWS S3, resulting in a scalable storage and retrieval process for thousands of home images',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Google Maps Support',
        description: 'Integrated Google Maps API to dynamically display home locations using user-submitted geo-coordinates',
        icon: GlobeAmericasIcon,
      },
      {
        name: 'Flask/PostgreSQL Backend',
        description: 'Implemented a Flask backend with SQLAlchemy, ensuring efficient user authentication, seamless database operations, and rapid server-side routing',
        icon: ServerIcon,
      },
    ],
    githubLink: 'https://github.com/eulloa10/haus',
    liveLink: 'https://house-me.onrender.com/',
    image: '/haus.png'
  },
  {
    name: 'Harmonious Voices (Team Project)',
    tag: 'harmonious',
    stack: ['JavaScript', 'Python', 'React', 'Redux', 'Flask', 'HTML5', 'CSS3', 'SQLAlchemy', 'SQLite3', 'PostgreSQL'],
    description:
    'A messaging web app where users can form and join interest-based online communities',
    features: [
      {
        name: 'WebSockets Integration',
        description:
          'Incorporated WebSockets to offer users an instant messaging experience',
        icon: UsersIcon,
      },
      {
        name: 'Streamlined Messaging Experience',
        description: 'Reduced messaging feature development time by 50% with a versatile component for direct and channel messaging',
        icon: ChatBubbleLeftEllipsisIcon,
      },
      {
        name: 'User-Centered Design',
        description: 'Leveraged React state and event handlers to enable hover actions for modifying and deleting user messages',
        icon: CursorArrowRaysIcon,
      },
    ],
    githubLink: 'https://github.com/eulloa10/harmonious-voices',
    liveLink: null,
    image: '/harmonious.png'
  },
]


export default function AllProjects() {
  return (
    <>
      <h2 id="projects" className="text-center bg-white text-3xl font-semibold leading-8 text-gray-900 pt-12">Projects</h2>
      <div id="projects-section">
        {
          projects.map((project, index) => {
            return(
              <div key={index}>
                <Project project={project}/>
              </div>
            )
          })
        }
      </div>
    </>

  )
}
