import UseAnimations from "react-useanimations";
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import codepen from 'react-useanimations/lib/codepen';
import twitter from 'react-useanimations/lib/twitter';
import { Fade } from "react-awesome-reveal";
import goToPage from "../../utils/goToPage";

const SocialMediasSide = () => {
  return (
    <Fade
      className="w-[4%] after:inline-block after:h-40 after:w-[1px] after:bg-light_gray after:animate-grow_up after:mt-2"
      triggerOnce
      delay={3000}
      duration={300}
    >
      <ul className="hidden lg:flex lg:flex-col lg:items-center lg:gap-2 lg:w-[4%] lg:fixed lg:bottom-0 lg:pl-4 ">
        <li className="cursor-pointer duration-300 w-[1.7rem] hover:text-primary">
          <a
            href="https://www.linkedin.com/in/gabryel-valvano-94338a204/"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault(); goToPage(event.currentTarget.href)
            }}
          >
            <UseAnimations
              animation={linkedin}
              size={30}
              strokeColor="rgb(156, 163, 175)"
            />
          </a>
        </li>
        <li className="cursor-pointer duration-300 w-[1.7rem]">
          <a
            href="https://github.com/valvanogabryel"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault(); goToPage(event.currentTarget.href)
            }}
            target="_blank"
          >
            <UseAnimations
              animation={github}
              size={30}
              strokeColor="rgb(156, 163, 175)"
            />
          </a>
        </li>
        <li className="cursor-pointer duration-300 w-[1.7rem]">
          <a
            href="https://codepen.io/valvanogabryel"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault(); goToPage(event.currentTarget.href)
            }}
            target="_blank"
          >
            <UseAnimations
              animation={codepen}
              size={30}
              strokeColor="rgb(156, 163, 175)"
            />
          </a>
        </li>
        <li className="cursor-pointer duration-300 w-[1.7rem]">
          <a
            href="https://twitter.com/gabryeldev"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault(); goToPage(event.currentTarget.href)
            }}
            target="_blank"
          >
            <UseAnimations
              animation={twitter}
              size={30}
              strokeColor="rgb(156, 163, 175)"
            />
          </a>
        </li>
      </ul>
    </Fade>
  );
}

export default SocialMediasSide;