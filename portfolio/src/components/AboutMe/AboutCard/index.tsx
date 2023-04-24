import Slider from 'react-slick';
import InvisibleArrows from '../../InvisibleArrows';
import useSoftSkills from '../../../hooks/useSoftSkills';
import useTraining from '../../../hooks/useTraining';

interface AboutCardProps {
  type: string;
}

const AboutCard = ({ type }: AboutCardProps) => {
  const softSkills = useSoftSkills();

  const cardInfo = type === 'Soft Skills' ? useSoftSkills() : useTraining();

  console.log(cardInfo);

  console.log(type);

  const settings = {
    infinite: true,
    dots: true,
    centerMode: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <InvisibleArrows />,
    nextArrow: <InvisibleArrows />,
  }

  return (
    <div className='bg-dark_gray items-center text-center my-10 w-11/12 m-auto shadow-2xl rounded-md min-h-[30rem] teste'>
      <header className='bg-gray-900 bg-opacity-30 py-4 mb-4'>
        <h3 className='text-3xl font-secondary-simple font-bold'>{type}</h3>
      </header>
      <Slider
        {...settings}
      >
        {
          cardInfo.map(info => (
            <div key={info.id}>

              <div className='flex flex-col items-center gap-4'>
                <div className='text-4xl'>
                  {info.icon}
                </div>
                <h4 className='text-2xl text-gray-400 pb-4 mb-10 border-b-[1px] w-full border-opacity-[5%] border-b-gray-200'>{info.title}</h4>
              </div>
              <div className='text-md text-center w-4/5 m-auto'>
                {info.text}
              </div>

            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default AboutCard;