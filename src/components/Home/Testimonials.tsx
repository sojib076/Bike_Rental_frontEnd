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
        <div className="lg:pb-20 lg:px-20 font-[Oswald]  dark:bg-black py-20  ">
           <h1 className="lg:text-[40px] text-center text-2xl lg:text-left
                 leading-[48px] font-semibold uppercase lg:mt-5 dark:mt-0  text-primary dark:text-white ">
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
                            <div className="p-6 bg-gray-800 h-60 py-10 dark:bg-gray-700
                            
                            rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                                <div className="text-center">
                                    <img
                                        src="https://i.ibb.co.com/616X09w/sojibdas-website-desinger.png"
                                        className="w-10 h-10 object-cover rounded-full mx-auto mb-4 border-2 border-blue-500"
                                        alt="Testimonial Avatar"
                                    />
                                    <h3 className="text-xl font-semibold text-white dark:text-gray-100">
                                        {test.name}
                                    </h3>
                                    <p className="text-sm text-gray-300 dark:text-gray-400">
                                        {test.job}
                                    </p>
                                </div>
                                <p className="mt-4 text-gray-200 dark:text-gray-300 italic text-center">
                                    {test.testimony}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Testimonials;
