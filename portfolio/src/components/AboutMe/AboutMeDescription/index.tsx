import {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  animateScroll,
} from 'react-scroll';
import Typing from 'react-typing-effect';

import aboutMeTexts from '../texts.json';

interface AboutMeDescriptionProps {
  selected: string;

}

const AboutMeDescription = ({ selected }: AboutMeDescriptionProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [prevScrollTop, setPrevScrollTop] = useState<number>(0);

  useEffect(() => {
    if (divRef.current) {
      setIntervalId(
        setInterval(() => {
          animateScroll.scrollToBottom({
            containerId: 'div-scroll',
            duration: 500
          });
        }, 800)
      );
    }
  }, []);

  function handleScroll() {
    if (divRef.current) {
      const element = divRef.current;
      if (element.scrollTop < prevScrollTop) {
        clearInterval(intervalId);
        setIntervalId(undefined);
      } else {
        setTimeout(() => {
          setIntervalId(
            setInterval(() => {
              animateScroll.scrollToBottom({
                containerId: 'div-scroll',
                duration: 500,
              });
            }, 800)
          );
        }, 3000);
      }

      setPrevScrollTop(element.scrollTop);
    }
  }

  return (
    <div
      className='lg:w-[30vw] mb-10 max-h-40 lg:pr-4 overflow-y-scroll shadow-inner'
      id='div-scroll'
      ref={divRef}
      onScroll={handleScroll}
    >
      {
        selected === '' &&
        <Typing
          text={['Escolha uma das opções...', 'Me conheça melhor!']}
          speed={50}
          typingDelay={0}
          eraseSpeed={20}
          eraseDelay={5000}
          className='text-opacity-50'
        />
      }
      {
        selected === 'resume' &&
        <Typing
          text={aboutMeTexts.resume}
          speed={50}
          typingDelay={0}
          eraseSpeed={20}
          eraseDelay={999999}
        />
      }
      {
        selected === 'paragraph' &&
        <Typing
          text={aboutMeTexts.paragraph}
          speed={50}
          typingDelay={0}
          eraseSpeed={20}
          eraseDelay={999999}
        />
      }
      {
        selected === 'biography' &&
        <Typing
          text={aboutMeTexts.biography}
          speed={50}
          typingDelay={0}
          eraseSpeed={20}
          eraseDelay={999999}
        />
      }

    </div>

  );
}

export default AboutMeDescription;