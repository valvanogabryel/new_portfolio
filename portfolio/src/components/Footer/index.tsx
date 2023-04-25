import UseAnimations from "react-useanimations";
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import codepen from 'react-useanimations/lib/codepen';
import twitter from 'react-useanimations/lib/twitter';

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-b from-background_color to-background_color_darker h-60 text-center mt-80">
      <div>
        <ul className="flex justify-center gap-4 mb-8">
          <li className="cursor-pointer duration-300 hover:scale-110">
            <UseAnimations
              animation={linkedin}
              size={40}
              strokeColor="rgb(156, 163, 175)"
            />
          </li>
          <li className="cursor-pointer duration-300 hover:scale-110">
            <UseAnimations
              animation={github}
              size={40}
              strokeColor="rgb(156, 163, 175)"
            />
          </li>
          <li className="cursor-pointer duration-300 hover:scale-110">
            <UseAnimations
              animation={codepen}
              size={40}
              strokeColor="rgb(156, 163, 175)"
            />
          </li>
          <li className="cursor-pointer duration-300 hover:scale-110">
            <UseAnimations
              animation={twitter}
              size={40}
              strokeColor="rgb(156, 163, 175)"
            />
          </li>
        </ul>
      </div>
      <div className="text-sm text-gray-300">
        projetado e construído por <a href="https://github.com/valvanogabryel/new_portfolio/tree/main/portfolio" target="_blank" className="after:h-[1px] after:w-0 after:inline-block duration-300 hover:text-light_gray">Gabryel Valvano.</a>
      </div>
    </footer>
  );
}

export default Footer;