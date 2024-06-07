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
    name: 'Lucky Parking (Contributor)',
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
    name: 'Harmonious Voices (Group Project)',
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
    liveLink: 'https://harmonious-voices.onrender.com/',
    image: '/harmonious.png'
  },
  {
    name: 'State of the Market',
    tag: 'sotm',
    stack: ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    description:
    'An economic health analysis app that monitors 11 key economic indicators. Performing insightful current versus prior period analyses, the app delivers monthly Excel reports directly to the user\'s inbox, enabling them to make informed investment decisions.',
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
      <h2 id="projects" className="text-center bg-white text-2xl font-semibold leading-8 text-gray-900 pt-12">Projects</h2>
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
