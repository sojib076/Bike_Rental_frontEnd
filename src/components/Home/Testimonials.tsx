import {  QuoteIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Testimonials = () => {

    const testimonyjson = [
        {
            name: "John Doe",
            job: "Software Engineer",
            testimony: "This company is the best. I am so happy with the result!",
        },
        {
            name: "Sojib Das",
            job: "Software Engineer",
            testimony: "Best Company to hire bikes for short and long term. I am so happy with the result!",
        },
        {
            name: "John Doe",
            job: "Software Engineer",
            testimony: "This company is the best. I am so happy with the result!",
        },
        {
            name: "Sojib Das",
            job: "Software Engineer",
            testimony: "Best Company to hire bikes for short and long term. I am so happy with the result!",
        }
    ];

    return (
        <div className="lg:pb-20 lg:p-20 font-[Oswald]   bg-gradient-to-tr
            

      dark:from-slate-950 dark:to-slate-900  ">
            <h1 className="lg:text-[40px] text-center text-2xl lg:text-left
                 leading-[48px] font-semibold uppercase    text-primary dark:text-white ">
                Testimonials
            </h1>

            <Carousel
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                className="lg:w-full mx-auto" autoScrollInterval={1000}>
                <CarouselContent className="-ml-1 lg:py-10">
                    {testimonyjson.map((test, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <div className="absolute inset-0 
                                        bg-gradient-to-br
                                         from-black
                                          to-gray-600 
                                          opacity-90" />
                                        <div className="relative z-10 p-8">
                                            <QuoteIcon className="w-12 h-12 mb-4 text-white opacity-50" />
                                            <blockquote className="mb-4 text-xl font-medium leading-relaxed text-white">
                                                    {test.testimony}
                                            </blockquote>
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="w-12 h-12 rounded-full" src="https://i.ibb.co.com/616X09w/sojibdas-website-desinger.png" alt="Sojib Das" />
                                                    
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-lg font-semibold text-white">{
                                                        test.name
                                                        }</p>
                                                    <p className="text-sm text-indigo-200">{
                                                        test.job
                                                        }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Testimonials;
