import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
          </div>
          <div className="grid items-center gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0 flex justify-center">
              <div className="w-[280px] md:w-[320px] lg:w-[360px] relative aspect-auto rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={HeroImg}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Shailesh Khandate"
                />
              </div>
            </div>

            <div className="relative space-y-6 text-xl leading-relaxed text-gray-300">
              <p className="text-white">
                Hello! I'm Shailesh Khandate, a passionate software developer driven by the goal of building innovative, user-friendly web and mobile applications. I specialize in crafting robust solutions using technologies like Java, Kotlin, Python, React.js, and Spring Boot.{" "}
              </p>
              <p className="text-white">
                My mission is to make software development smarter, faster, and more accessible—whether that’s through streamlining Android app performance, building AI-driven tools. Recently, I’ve been diving deeper into data science to broaden my ability to solve real-world problems with intelligent, data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
