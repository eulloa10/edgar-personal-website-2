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
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">I'm Ed,
a software engineer.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I build full stack web applications with the latest technologies.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            In my previous career, I was a revenue accountant. I spent my days crunching numbers in Excel and automating repetitve tasks with Python.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            My professional interests include, but are not limited to: Fintech, Entertainment, EdTech, Healthcare, and E-commerce
          </p>
        </div>
        <img src=""/>
      </div>
    </div>
  )
}
