const NextTrip = () => {
  return (
    <section className="mt-20 text-gray-700 body-font">
        <div className="p-6">
        <h1 className="text-4xl font-extrabold text-center">Find Inspiration For <br /> Your Next Trip</h1>
        <p className="mt-3 text-center">Seeking inspiration for your next adventure? Look no further! Dive into a world of wanderlust <br /> with our curated collection of travel guides, destination highlights, and insider tips. Whether <br /> you're craving a tropical getaway, a cultural immersion, or an adrenaline-fueled escapade, <br /> we've got you covered. Let us ignite your wanderlust and inspire your next unforgettable journey</p>
        </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {/* One */}
          <div className=" p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/LrFNXjk/advanture.webp" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Adventure
              </h2>
              <p className="mt-3 leading-relaxed">120 tours</p>
            </div>
          </div>

          {/* two */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/86x41NQ/beach.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Beach
              </h2>
              <p className="mt-3 leading-relaxed">80 tours</p>
            </div>
          </div>

          {/* three */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/JvgRyYn/citytravel.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                City Tour
              </h2>
              <p className="mt-3 leading-relaxed">40 tours</p>
            </div>
          </div>

          {/* four */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/P1zkRGL/tree.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Wildlife
              </h2>
              <p className="mt-3 leading-relaxed">59 tours</p>
            </div>
          </div>

          {/* five */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/FWXgCM6/honey-Moon.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Honeymoon
              </h2>
              <p className="mt-3 leading-relaxed">30 tours</p>
            </div>
          </div>

          {/* six */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/qRJLCXt/world-Travel.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                World Travel
              </h2>
              <p className="mt-3 leading-relaxed">50 tours</p>
            </div>
          </div>

          {/* seven */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/VLFYRC1/culture-travel.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Culture Travel
              </h2>
              <p className="mt-3 leading-relaxed">60 tours</p>
            </div>
          </div>

          {/* eight */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="h-[380px] border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <img src="https://i.ibb.co/f0kmkbh/wanderlust.jpg" alt="" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
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
