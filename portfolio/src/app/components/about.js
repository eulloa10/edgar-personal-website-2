import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Software Engineer*</h1>
          <p className="mt-6 text-lg leading-8 text-white">
            I'm a software engineer focused on full-stack web development and data engineering.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            I enjoy using technology to solve difficult problems.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            When I’m not working on projects, I'm browsing through the daily TLDR newsletters (Web Dev, AI, Crypto), playing fantasy basketball, watching Lakers and Dodgers games, and going to concerts.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            * I also have a background in revenue accounting, where I’ve automated financial processes and reporting. I've worked across several industries, including tech, real estate, media, entertainment, and e-commerce.
          </p>
          <div className="flex items-center">
            <a
              href="https://drive.google.com/file/d/10u4LZqLVkNwgmT8EGJku3tGmt3tXAijq/view?usp=sharing" target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-inset ring-gray-500/10 mt-10 mr-2 h-12">
                Résumé
            </a>
            <a
              href="https://github.com/eulloa10" target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-black px-2 py-2 text-sm font-medium text-black mt-10 mr-2 h-12">
                <Image src="/github-mark-white.png" alt="GitHub Icon" width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/edgarulloa/" target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-black px-2 py-2 text-sm font-medium text-black mt-10 mr-2 h-12">
                <Image src="/linkedin.png" alt="LinkedIn Icon" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
