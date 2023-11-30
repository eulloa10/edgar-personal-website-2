import { CloudArrowUpIcon, ServerIcon, GlobeAmericasIcon, CircleStackIcon, MapIcon, ArrowPathRoundedSquareIcon, ChatBubbleLeftEllipsisIcon, UsersIcon, CursorArrowRaysIcon, PresentationChartLineIcon, CloudArrowDownIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import Project from './Project';

const projects = [
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
          'Utilizes AWS S3 for image uploads, enabling scalability of image support and ensuring quick image retrieval',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Google Maps Support',
        description: 'Integrated Google Maps API dynamically presents home locations based on user-submitted geo coordinates',
        icon: GlobeAmericasIcon,
      },
      {
        name: 'Flask/PostgreSQL Backend',
        description: `Flask and SQLAlchemy handle user authentication, database operations,
        and server-side routing`,
        icon: ServerIcon,
      },
    ],
    githubLink: 'https://github.com/eulloa10/haus',
    liveLink: 'https://house-me.onrender.com/',
    image: '/haus.png'
  },
  {
    name: 'Lucky Parking (Contributor)',
    tag: 'lucky',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'React', 'MongoDB'],
    description:
    'Visualization of parking data to assist in understanding of the effects of parking policies on a neighborhood by neighborhood basis in the City of Los Angeles',
    features: [
      {
        name: 'MongoDB Client',
        description:
          'Created connection to MongoDB database, ensuring smooth data storage and retrieval for a dataset of 17 million parking citation records from the city of Los Angeles',
        icon: CircleStackIcon,
      },
      {
        name: 'MapBox API Integration',
        description: 'Merged custom data for 99 neighborhood councils with the Mapbox API data, resulting in more comprehensive and relevant search results',
        icon: MapIcon,
      },
      {
        name: 'Cross-functional Teamwork',
        description: 'Collaborated with Product, Engineering, Data Science, and UX, to ensure software solutions aligned with the Hack for LA\'s civic tech objectives',
        icon: ArrowPathRoundedSquareIcon,
      },
    ],
    githubLink: 'https://github.com/hackforla/lucky-parking',
    liveLink: 'https://www.luckyparking.org/',
    image: '/luckyparking.png'
  },
  {
    name: 'Harmonious Voices (Group Project)',
    tag: 'harmonious',
    stack: ['JavaScript', 'Python', 'React', 'Redux', 'Flask', 'HTML5', 'CSS3', 'SQLAlchemy', 'SQLite3', 'PostgreSQL'],
    description:
    'A messaging web app where users can form and join interest-based online communities',
    features: [
      {
        name: 'WebSockets Integration',
        description:
          'Enabled a dynamic real-time instant messaging experience for users by integrating WebSockets',
        icon: UsersIcon,
      },
      {
        name: 'Streamlined Messaging Experience',
        description: 'Leveraged React component reusability for streamlined, maintainable direct and channel messaging features',
        icon: ChatBubbleLeftEllipsisIcon,
      },
      {
        name: 'User-Centered Design',
        description: 'Enhanced user experience through optimized message editing and deletion with React state and event handlers, offering intuitive actions through hover interactions',
        icon: CursorArrowRaysIcon,
      },
    ],
    githubLink: 'https://github.com/eulloa10/harmonious-voices',
    liveLink: 'https://harmonious-voices.herokuapp.com/',
    image: '/harmonious.png'
  },
  {
    name: 'State of the Market',
    tag: 'sotm',
    stack: ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    description:
    'An economic health analysis app that monitors 11 key economic indicators. Performing insightful current versus prior period analyses, the app seamlessly delivers monthly Excel reports directly to the user\'s inbox, empowering them to make informed investment decisions.',
    features: [
      {
        name: 'FRED API Integration',
        description:
          'Uses the latest data from the St. Louis Federal Reserve to conduct economic analysis',
        icon: PresentationChartLineIcon,
      },
      {
        name: 'AWS Integration',
        description: 'Leverages S3 buckets to store user reports and ensure timely access',
        icon: CloudArrowDownIcon,
      },
      {
        name: 'Brevo SMTP',
        description: 'Ensures reliable and secure delivery of monthly Excel reports with minimal downtime and robust performance',
        icon: EnvelopeIcon,
      },
    ],
    githubLink: 'https://github.com/eulloa10/state-of-the-market',
    liveLink: null,
    image: '/sotm.png'
  },
  ]


export default function AllProjects() {
  return (
    <>
      <h2 id="projects" className="text-center bg-white text-2xl font-semibold leading-8 text-gray-900">Projects</h2>
      <div>
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
