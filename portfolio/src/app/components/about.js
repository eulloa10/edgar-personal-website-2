import Image from 'next/image';

export default function About() {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden bg-black min-h-screen flex flex-col justify-center py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 pt-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Software Engineer<br />
            Data Engineer<br />
            Data Analyst<br />
          </h1>
          <p className="mt-8 text-lg leading-8 text-white">
            I'm Ed. My expertise spans full-stack web development, data engineering, and data analysis.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            My background in accounting and finance across real estate, media & entertainment, and e-commerce provides a strong foundation for understanding business needs and translating them into technical solutions.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            I'm actively seeking new opportunities. Contact me via email or LinkedIn, and let's discuss how I can add value to your organization.
          </p>
          <div className="flex items-center mt-10">
            <a
              href="https://drive.google.com/file/d/10u4LZqLVkNwgmT8EGJku3tGmt3tXAijq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-inset ring-gray-500/10 mr-4 h-12"
            >
              Résumé
            </a>
            <a
              href="https://github.com/eulloa10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white mr-4 h-12"
            >
              <Image src="/github-mark-white.png" alt="GitHub Icon" width={24} height={24} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/edgarulloa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white h-12"
            >
              <Image src="/linkedin.png" alt="LinkedIn Icon" width={24} height={24} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
