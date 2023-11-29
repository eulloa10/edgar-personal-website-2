import Image from "next/image";

export default function Project({ project }) {
  return (
    <div id={project.tag} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.name}</p>
              {
                project.stack.map((technology, index) => {
                  return (<span key={index} class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{technology}</span>)
                })
              }

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {project.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {project.features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex gap-4 mt-4">
                <a href={project.githubLink} className="inline-flex items-center rounded-md bg-black px-2 py-1 text-sm font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  GitHub
                </a>
                {project.liveLink && <a href={project.liveLink} className="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-green-500 bg-green-500">
                  Live Website
                </a>}
              </div>
            </div>
          </div>
          <Image
            src={project.image}
            alt="Screenshot of Haus website"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
