import { FC } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/banner+BG.jpeg";

interface HelpSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText?: string;
  contactNumber?: string;
  buttonLink?: string;
}

const HelpSection: FC<HelpSectionProps> = ({ 
 
  title, 
  description, 
  buttonText, 
  contactNumber, 
  buttonLink = "/home" 
}) => {
  return (
    <div
    
      className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat lg:mt-5 
    
      dark:top-[-20px]
    
      "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0   dark:bg-black dark:opacity-40 bg-black opacity-45"></div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="text-white dark:text-gray-100 max-w-lg dark:p-0  lg:p-6">
          <h1 className="lg:text-4xl text-3xl font-extrabold">{title}</h1>
          <p className="mt-4 text-lg">{description}</p>
          <div className="mt-6 flex lg:flex-row flex-col lg:items-center justify-between">
            {buttonText && (
              <Link to={buttonLink}>
                <Button className="bg-green-600 dark:bg-green-700 px-10">
                  {buttonText}
                </Button>
              </Link>
            )}
            {contactNumber && (
              <p className="text-xl">
                Call Us: <span className="text-black-600 dark:text-red-400">{contactNumber}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
