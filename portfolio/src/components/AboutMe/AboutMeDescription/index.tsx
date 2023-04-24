import Typing from 'react-typing-effect';
import aboutMeTexts from '../texts.json';

interface AboutMeDescriptionProps {
  selected: string;

}

const AboutMeDescription = ({ selected }: AboutMeDescriptionProps) => {
  return (
    <>
      {
        selected === 'resume' &&
        <Typing
          text={aboutMeTexts.resume}
          speed={50}
          typingDelay={0}
          eraseSpeed={20}
          className=""
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
          className=""
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
          className=""
        />
      }

    </>

  );
}

export default AboutMeDescription;