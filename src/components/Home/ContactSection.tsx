
import { MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const ContactSection = () => {
    const contactData = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Our Address",
            details: ["1234 Street Name, City Name", "Bangladesh"]
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Contact",
            details: ["Mobile: +123456789", "Mail: okaybike@gmail.com"]
        },

    ];
    return (

        <div  data-aos="fade-up" className="lg:mt-20 lg:px-20 py-20 px-5 font-serif  ">
            <div className="lg:mb-4">
                <div className="lg:mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                    <h2 className=" lg:mb-4 font-bold  text-gray-900 text-3xl sm:text-5xl dark:text-white ">
                        Get in Touch
                    </h2>
                    <p className="mx-auto lg:mt-4 max-w-3xl text-xl text-gray-600 lg:block hidden dark:text-white">
                       Best way to reach us is by email. We will get back to you as soon as possible.
                    </p>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="grid md:grid-cols-2 ">
                    <div className="h-full pr-6">
                        <p className="lg:mt-3 lg:mb-12 my-4 text-lg text-gray-600 dark:text-white ">
                        
                            We are here to help you with any questions you have. Just drop us a message and we will get back to you as soon as possible.
                        </p>
                        <ul className="mb-6 md:mb-0 dark:text-white">
                            {contactData.map((item, index) => (
                                <li key={index} className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-200 text-gray-900">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        {item.details.map((detail, detailIndex) => (
                                            <p key={detailIndex} className="text-gray-600 dark:text-white">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div  className='lg:mt-4'   id="form">
                        <h2 className=" mb-3 text-2xl font-bold text-gray-900">Ready to Get Started?</h2>
                        <form id="contactForm">
                           
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="name" className="pb-1 text-xl uppercase tracking-wider"></label>
                                        <input
                                            type="text"
                                            id="name"
                                            autoComplete="given-name"
                                            placeholder="Your name"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
                                            name="name"
                                        />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="email" className="pb-1 text-xl uppercase"></label>
                                        <input
                                            type="email"
                                            id="email"
                                            autoComplete="email"
                                            placeholder="Your email address"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
                                            name="email"
                                        />
                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <textarea
                                        id="textarea"
                                        name="textarea"
                                        placeholder="Write your message..."
                                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
                                    ></textarea>
                                </div>
                          
                            <div className="text-center">
                                <Button variant='outline'  className="hover:scale-90 text-black w-full bg-lime-300"> Send Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactSection;