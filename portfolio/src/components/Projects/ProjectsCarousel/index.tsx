import Slider from "react-slick";



const ProjectsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true
  }

  return (
    <Slider {...settings}>
      <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
        placeholder
      </div>

      <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
        placeholder2
      </div>

      <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
        placeholder3
      </div>

      <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
        placeholder4
      </div>

      <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray p-10 text-center'>
        placeholder5
      </div>
    </Slider>
  );
}

export default ProjectsCarousel;