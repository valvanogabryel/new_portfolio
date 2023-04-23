// Assiduidade
import { FaCalendarCheck } from 'react-icons/fa';

// Autodidatismo
import { BiCodeCurly } from 'react-icons/bi';

// criatividade
import { AiOutlineBulb } from 'react-icons/ai';

// facil aprendizagem
import { IoBookSharp } from 'react-icons/io5';

// resolução de problemas
import { MdOutlineReportProblem } from 'react-icons/md';

import Slider from 'react-slick';

const AboutCard = () => {
  const settings = {
    infinite: false,
    dots: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  }

  return (
    <div className='bg-dark_gray items-center text-center my-10 w-11/12 m-auto'>
      <header className='bg-gray-900 bg-opacity-30 py-4 mb-10'>
        <h3 className='text-3xl font-secondary-simple font-bold'>Soft Skills</h3>
      </header>
      <Slider
        {...settings}
      >
        <ul>
          {/* Aqui */}
        </ul>
      </Slider>
    </div>
  );
}

export default AboutCard;