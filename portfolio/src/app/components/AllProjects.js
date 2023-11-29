import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, GlobeAmericasIcon, CircleStackIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import Project from './project';

const projects = [
  {
    name: 'Haus',
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
    liveLink: 'https://house-me.onrender.com/'
  },
  {
    name: 'Haus',
    description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    features: [
      {
        name: 'Push to deploy.',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
      },
      {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
      },
    ],
    githubLink: 'url goes here',
    liveLink: 'url goes here'
  },
  {
    name: 'Haus',
    description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    features: [
      {
        name: 'Push to deploy.',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
      },
      {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
      },
    ],
    githubLink: 'url goes here',
    liveLink: 'url goes here'
  },
  {
    name: 'Haus',
    description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    features: [
      {
        name: 'Push to deploy.',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
      },
      {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
      },
    ],
    githubLink: 'url goes here',
    liveLink: 'url goes here'
  },
  {
    name: 'Haus',
    description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    features: [
      {
        name: 'Push to deploy.',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
      },
      {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
      },
    ],
    githubLink: 'url goes here',
    liveLink: 'url goes here'
  },
  ]


export default function AllProjects() {
  return (
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
  )
}
