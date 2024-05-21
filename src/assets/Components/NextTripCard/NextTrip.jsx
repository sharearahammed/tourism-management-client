import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const NextTrip = () => {
  return (
    <section className="mt-20 text-gray-700 body-font">
        <div className="dark:text-white p-6">
        <h1 data-aos="zoom-in-down"
      data-aos-duration="2000" className="text-2xl lg:text-4xl font-extrabold text-center">Find Inspiration For <br /> Your Next Trip</h1>
        <p data-aos="zoom-in-down"
      data-aos-duration="2000" className="mt-3 text-center">Seeking inspiration for your next adventure? Look no further! Dive into a world of wanderlust <br /> with our curated collection of travel guides, destination highlights, and insider tips. Whether <br /> you're craving a tropical getaway, a cultural immersion, or an adrenaline-fueled escapade, <br /> we've got you covered. Let us ignite your wanderlust and inspire your next unforgettable journey</p>
        </div>
      <div className="dark:text-white container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {/* One */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/LrFNXjk/advanture.webp" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                Adventure
              </h2>
              <p className="mt-3 leading-relaxed">120 tours</p>
            </div>
          </div>

          {/* two */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/86x41NQ/beach.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                Beach
              </h2>
              <p className="mt-3 leading-relaxed">80 tours</p>
            </div>
          </div>

          {/* three */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/JvgRyYn/citytravel.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                City Tour
              </h2>
              <p className="mt-3 leading-relaxed">40 tours</p>
            </div>
          </div>

          {/* four */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/P1zkRGL/tree.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                Wildlife
              </h2>
              <p className="mt-3 leading-relaxed">59 tours</p>
            </div>
          </div>

          {/* five */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/FWXgCM6/honey-Moon.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                Honeymoon
              </h2>
              <p className="mt-3 leading-relaxed">30 tours</p>
            </div>
          </div>

          {/* six */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/qRJLCXt/world-Travel.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                World Travel
              </h2>
              <p className="mt-3 leading-relaxed">50 tours</p>
            </div>
          </div>

          {/* seven */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/VLFYRC1/culture-travel.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
                Culture Travel
              </h2>
              <p className="mt-3 leading-relaxed">60 tours</p>
            </div>
          </div>

          {/* eight */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/f0kmkbh/wanderlust.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
              Wanderlust Travel
              </h2>
              <p className="mt-3 leading-relaxed">30 tours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextTrip;
