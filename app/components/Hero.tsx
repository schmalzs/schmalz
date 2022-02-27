export default function Hero() {
  return (
    <>
      <section className="bg-gray h-[50vh] flex flex-col justify-evenly">
        <div className="flex flex-col justify-center space-y-2 md:space-y-5">
          <h1 className="text-white font-bold text-center text-3xl md:text-5xl">
            Hi, I’m{' '}
            <strong className="text-yellow whitespace-nowrap">
              Scott Schmalz
            </strong>
            .
          </h1>
          <h1 className="text-pink font-bold text-center text-xl md:text-3xl whitespace-nowrap">
            Full Stack Software Engineer
          </h1>
          <h1 className="text-white font-bold text-center text-xl md:text-3xl">
            Specializing in{' '}
            <span className="whitespace-nowrap">
              <strong className="text-react">React</strong> and{' '}
              <strong className="text-node">Node.js</strong>.
            </span>
          </h1>
        </div>
        <div className="flex justify-center space-x-12">
          <img src="/react.svg" alt="React Logo" style={{ height: '50px' }} />
          <img src="/nodejs.svg" alt="NodeJS Logo" style={{ height: '50px' }} />
        </div>
        <div className="flex justify-center items-center">
          <a
            className="bg-yellow text-gray px-12 font-bold py-2 rounded cursor-pointer hover:-translate-y-2 duration-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1r7UCRwielQYZkGWq1dKxBqMrt3JTT6uF/view?usp=sharing"
          >
            Résumé
          </a>
        </div>
      </section>
      <svg
        className="bg-gray"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="fill-white"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </>
  );
}
