import UseAnimations from "react-useanimations";
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import codepen from 'react-useanimations/lib/codepen';
import twitter from 'react-useanimations/lib/twitter';
import { JackInTheBox } from "react-awesome-reveal";
import goToPage from "../../utils/goToPage";
import DelayShow from "../../utils/delayShow";
import cn from "classnames";

const SocialMediasSide = () => {
  const show = DelayShow();

  return (
    <JackInTheBox
      className={cn('w-[4%] after:inline-block after:h-[90px] after:w-[1px] after:bg-light_gray after:animate-grow_up after:mt-2 invisible', {
        '!visible': show
      })}
      triggerOnce
      delay={3000}
      duration={300}
      cascade
    >
      <ul className="hidden md:flex md:flex-col md:items-center md:gap-2 md:w-[4%] md:fixed md:bottom-0 md:pl-4 lg:scale-110 xl:pl-10 2xl:scale-105">
        <li className="cursor-pointer duration-300 w-[1.7rem]">
          <a
            href="https://www.linkedin.com/in/gabryel-valvano-94338a204/"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault(); goToPage(event.currentTarget.href);
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
              event.preventDefault(); goToPage(event.currentTarget.href);
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
              event.preventDefault(); goToPage(event.currentTarget.href);
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
              event.preventDefault(); goToPage(event.currentTarget.href);
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
    </JackInTheBox>
  );
}

export default SocialMediasSide;