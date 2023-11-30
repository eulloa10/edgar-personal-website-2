export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-black-900 py-24 sm:py-32">
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Software engineer.</h1>
          <p className="mt-6 text-lg leading-8 text-white">
            I enjoy the journey from idea to code, and from code to a practical, efficient product.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            I read TLDR daily and like to stay on top of the latest technologies and trends.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            I was previously a revenue accountant. My days were spent figuring out how to replace Excel with Python, and working through the dreaded month/quarter/year-end close.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            My professional focus spans Fintech, Real Estate, Entertainment, Healthcare, and E-commerce.
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            My personal hobbies include: learning new investment strategies, following wallstbets memes, watching and playing basketball (Go Lakers!), MLB (Go Dodgers!), and attending live music events.
          </p>
          <a
            href="https://drive.google.com/file/d/1Pj-m5KW7XvfD_HblYKcJqUffrXHw2VCJ/view?usp=drive_link" target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-white px-10 py-2 text-sm font-medium text-black ring-1 ring-inset ring-gray-500/10 mt-10">
              View Resume
            </a>
        </div>
      </div>
    </div>
  )
}
