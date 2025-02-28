import Image from "next/image";

export default function Project({ project }) {
  return (
    <div id={project.tag} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-20 lg:mx-0 lg:ml-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((technology, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-lg leading-7 text-gray-700">
                {project.description}
              </p>
              <dl className="mt-8 max-w-xl space-y-6 text-base leading-6 text-gray-700 lg:max-w-none">
                {project.features.map((feature) => (
                  <div key={feature.name} className="relative pl-8">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-0 top-0 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex gap-4 mt-8">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                  >
                    Live Website
                  </a>
                )}
              </div>
            </div>
          </div>
          <div>
            {project.image && (
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name} website`}
                className="w-full rounded-xl shadow-lg ring-1 ring-gray-200"
                width={2432}
                height={1442}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
