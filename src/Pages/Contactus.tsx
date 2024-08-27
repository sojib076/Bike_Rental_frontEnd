const Contactus = () => {
    return (
        <div>
            <div className="py-10 mx-auto p-8 
            bg-white
            dark:bg-gray-800 
            
            dark:text-white
            text-black
            rounded-lg shadow-lg font-[Oswald]">
                <h1 className="lg:text-[40px] text-xl text-center lg:leading-[48px] font-semibold uppercase 
                lg:mt-5 dark:mt-0 lg:mb-10 mb-5 text-black dark:text-gray-100 lg:text-center
                ">
                    Contact Us
                </h1>
                <form className="space-y-6 lg:px-20">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium
                        dark:text-white
                        text-black
                        
                        ">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium
                        
                        dark:text-white
                        text-black
                        

                        ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium
                      dark:text-white
                        text-black
                        ">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none 
                             transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contactus;
