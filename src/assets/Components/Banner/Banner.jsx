// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mt-20 h-[700px] rounded-lg'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg mySwiper"
      >
        <SwiperSlide className='hero min-h-screen rounded-sm bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/3hx7cGF/T4.jpg")',
     }}><div className='w-[900px]'>
     <h1 className='animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white text-center font-bold'>Welcome to Romazing - Where Romance <br /> Meets Amazing Adventures</h1>
     <p className='mb-3 text-white text-[12px] lg:text-[18px] p-9 lg:p-0'>Indulge in breathtaking vistas, immerse yourself in vibrant cultures, and create timeless memories with Romazing. Explore our curated collection of dream destinations and let us ignite your passion for travel. Start your journey today!</p>
     <button className='btn border-[#BC986B] text-white bg-[#BC986B]'>VIEW ALL SPOTS</button>
         </div></SwiperSlide>


        <SwiperSlide className='hero min-h-screen rounded-sm bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/8xhtVnH/T3.jpg")' }}><div className='w-[900px]'>
        <h1 className='animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white text-center font-bold'>Welcome to Romazing - Where Romance <br /> Meets Amazing Adventures</h1>
        <p className='mb-3 text-white text-[12px] lg:text-[18px] p-9 lg:p-0'>Indulge in breathtaking vistas, immerse yourself in vibrant cultures, and create timeless memories with Romazing. Explore our curated collection of dream destinations and let us ignite your passion for travel. Start your journey today!</p>
        <button className='btn text-white border-[#BC986B] bg-[#BC986B]'>VIEW ALL SPOTS</button>
            </div></SwiperSlide>


        <SwiperSlide className='hero min-h-screen rounded-sm bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/Rbm6CNm/T2.jpg")' }}><div className='w-[900px]'>
        <h1 className='animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white text-center font-bold'>Welcome to Romazing - Where Romance <br /> Meets Amazing Adventures</h1>
        <p className='mb-3 text-white text-[12px] lg:text-[18px] p-9 lg:p-0'>Indulge in breathtaking vistas, immerse yourself in vibrant cultures, and create timeless memories with Romazing. Explore our curated collection of dream destinations and let us ignite your passion for travel. Start your journey today!</p>
        <button className='btn border-[#BC986B] text-white bg-[#BC986B]'>VIEW ALL SPOTS</button>
            </div></SwiperSlide>

        <SwiperSlide className='hero min-h-screen rounded-sm bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/ZJP9HtG/T1.jpg")' }}><div className='w-[900px]'>
        <h1 className='animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white text-center font-bold'>Welcome to Romazing - Where Romance <br /> Meets Amazing Adventures</h1>
        <p className='mb-3 text-white text-[12px] lg:text-[18px] p-9 lg:p-0'>Indulge in breathtaking vistas, immerse yourself in vibrant cultures, and create timeless memories with Romazing. Explore our curated collection of dream destinations and let us ignite your passion for travel. Start your journey today!</p>
        <button className='btn border-[#BC986B] text-white bg-[#BC986B]'>VIEW ALL SPOTS</button>
            </div></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;