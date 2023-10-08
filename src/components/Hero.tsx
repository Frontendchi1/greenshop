import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(0); // Track the current page index
  const totalPages = 3; // Total number of pages in the carousel
  const sliderRef = useRef(null);

  // Function to advance to the next page
  const goToNextPage = () => {
    const nextPage = (currentPage + 1) % totalPages;
    setCurrentPage(nextPage);
    sliderRef.current.slickGoTo(nextPage);
  };

  // Automatically advance to the next page every 4 seconds
  useEffect(() => {
    const timer = setInterval(goToNextPage, 4000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [currentPage]);

  // Settings for the Slick Carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentPage,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentPage(newIndex);
    },
  };

  return (
    <div className='px-40'>
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1 */}
        <div>
          <div className='flex bg-[#F5F5F5] mt-3'>
            <div className='flex-[2] pl-10 pb-5'>
              <h3 className='font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]'>
                WELCOME TO GREENSHOP
              </h3>
              <h1 className='font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl'>
                <span className='text-[#46A358]'>PLANET</span> LET'S MAKE A BETTER
              </h1>
              <p className='text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px]'>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <div className='dash-buttons'>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`dash-button ${
                      index === currentPage ? 'active' : ''
                    }`}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  >
                    -
                  </button>
                ))}
              </div>
            </div>
            <div className='flex-[1] relative flex justify-center items-center max-md:hidden'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d'
                alt=''
              />
              <img
                className='absolute bottom-0 left-0'
                src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca'
                alt=''
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className='flex bg-[#F5F5F5] mt-3'>
            <div className='flex-[2] pl-10 pb-5'>
              <h3 className='font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]'>
                WELCOME TO GREENSHOP
              </h3>
              <h1 className='font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl'>
                LET'S LIVE IN A BETTER{' '}
                <span className='text-[#46A358]'>PLANET</span>
              </h1>
              <p className='text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px]'>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <div className='dash-buttons'>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`dash-button ${
                      index === currentPage ? 'active' : ''
                    }`}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  >
                    -
                  </button>
                ))}
              </div>
            </div>
            <div className='flex-[1] relative flex justify-center items-center max-md:hidden'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d'
                alt=''
              />
              <img
                className='absolute bottom-0 left-0'
                src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca'
                alt=''
              />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className='flex bg-[#F5F5F5] mt-3'>
            <div className='flex-[2] pl-10 pb-5'>
              <h3 className='font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]'>
                WELCOME TO GREENSHOP
              </h3>
              <h1 className='font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl'>
                LET'S OBSERVE A BETTER{' '}
                <span className='text-[#46A358]'>PLANET</span>
              </h1>
              <p className='text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px]'>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <div className='dash-buttons  items-center justify-center'>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`dash-button ${
                      index === currentPage ? 'active' : ''
                    }`}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  >
                    -
                  </button>
                ))}
              </div>
            </div>
            <div className='flex-[1] relative flex justify-center items-center max-md:hidden'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662'
                alt=''
              />
              <img
                className='absolute bottom-0 left-0'
                src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca'
                alt=''
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
