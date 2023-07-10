import { useState } from "react";
import { ScaleLoader } from "react-spinners";

const ProjectGif = ({ gif, alt }: { gif: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleGifLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center">
          <ScaleLoader color="#fff" height={100} width={100} />
        </div>
      )}
      <img
        src={gif}
        alt={alt}
        aria-hidden="true"
        onLoad={handleGifLoading}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </>
  );
};

export default ProjectGif;
