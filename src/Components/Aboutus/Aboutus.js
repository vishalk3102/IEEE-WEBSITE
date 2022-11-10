import React from "react";
import sliderimg2 from "../../Assets/sliderimg2.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative lg:inset-y-0 lg:right-0 lg:w-1/2 px-10 pb-5 hidden lg:block float-right">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src={sliderimg2}
              alt=""
            />
          </div>
          <div className="relatives z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl">IEEE-GEU</span>
                  <span className="block text-sky-600 xl:inline">
                    Student Chapter
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  World's largest technical professional organization, The
                  Institute of Electrical and Electronics Engineers (IEEE) now
                  at Graphic Era University. <a href="#aboutus">Know More</a>
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="www.google.com"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Find Events
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="www.google.com"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-100 px-8 py-3 text-base font-medium text-sky-700 hover:bg-sky-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Join IEEE
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
