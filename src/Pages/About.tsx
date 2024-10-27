import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import ContactSection from "@/components/Home/ContactSection";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const aboutItems = [
    {
      title: "Vision",
      content: "To be the leading provider of innovative technology solutions that drive growth and success in the digital age.",
    },
    {
      title: "Mission",
      content: " Empower individuals and businesses with innovative technology solutions that drive growth and success in the digital age.",
    },
    {
      title: "Motto",
      content: "Innovate, Empower, Succeed.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20 dark:bg-black dark:mt-16">
      {/* Mission Statement */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our mission is to empower individuals and businesses with innovative technology solutions that drive growth and success in the digital age.
        </p>

        <div className="w-full px-4 lg:px-0 py-10 lg:mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={`${150 * index}`}
            >
              <h2 className="text-2xl font-bold mb-3 text-green-600 dark:text-green-400">{item.title}</h2>
              <p className="text-center text-gray-700 dark:text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>

      </section>
      <div data-aos="fade-up" className="lg:p-20 mt-10 px-5">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 ">
          <div className="lg:w-1/2 text-left space-y-6 lg:mt-0 mt-10">
            <h1 className="text-xl md:text-4xl font-bold">
              <span className="text-green-500">Okay Bikes</span> Best in the Business
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Okay Bikes is a leading motorcycle rental company in the world. We provide the best quality bikes for rent at affordable prices. Our wide range of well-maintained bikes includes sports bikes, cruisers, touring bikes, and more. With a dedicated team of professionals, we ensure excellent customer service and flexible rental options tailored to your needs. Renting a bike from Okay Bikes is easy and hassle-free. Choose your bike, book online, and pick it up from our location. We also offer delivery services. Enjoy the freedom of the open road with Okay Bikes!
            </p>
            <div className="flex justify-between text-center text-gray-800 dark:text-gray-200">
              <div>
                <div className="text-sm md:text-2xl font-bold">10 years</div>
                <div className="text-sm">Experience</div>
              </div>
              <div>
                <div className="text-sm md:text-2xl font-bold">2k</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-sm md:text-2xl font-bold">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-md">
            <img
              src="https://media.istockphoto.com/id/1457093031/photo/motorcycle-parked-on-the-road.webp?s=1024x1024&w=is&k=20&c=LUscKlk2nmjANf9bLuFYXbCQM0leqgFQ3E9-dW-esiw="
              alt="about"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>



      <Separator className="my-8" />

 
      <section className="mb-12" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} data-aos="zoom-in" data-aos-delay={`${150 * index}`}>
              <CardHeader>
                <img
                  src='https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE='
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.position}</p>
                <p className="mt-2">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
          
        </div>
      </section>

      <Separator className="my-8" />

      {/* History & Milestones */}
      <section className="mb-16  bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg relative">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-green-500 z-20">Our Journey</h2>

        <div className="relative">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} mb-12`}
              data-aos="fade-up"
              data-aos-delay={`${200 * index}`}
            >
              <div className="lg:w-5/12 p-6 text-center lg:text-left bg-white dark:bg-gray-800 rounded-lg shadow-md relative z-10">
                <h3 className="text-2xl font-bold text-green-500">{milestone.year}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{milestone.event}</p>
              </div>
              <div className="lg:w-2/12 flex justify-center items-center relative z-20">


              </div>

            </div>
          ))}
        </div>

        <div className="absolute top-20 left-1/2 transform 
  lg:block hidden
   -translate-x-1/2 h-[90%] w-1 bg-gray-300 dark:bg-gray-600 z-10
    
   "></div>
      </section>




      <Separator className="my-8" />

      {/* Contact Information */}
      <section data-aos="fade-up" data-aos-delay="300">
        <ContactSection />

      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Jane Doe",
    position: "CEO & Founder",
    photo: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE=",
    bio: "Jane has over 15 years of experience in the tech industry and is passionate about creating innovative solutions.",
  },
  {
    name: "John Smith",
    position: "CTO",
    photo: "/placeholder.svg?height=200&width=200",
    bio: "John is a seasoned software engineer with a knack for solving complex technical challenges.",
  },
  {
    name: "Emily Brown",
    position: "Head of Design",
    photo: "/placeholder.svg?height=200&width=200",
    bio: "Emily brings creativity and user-centric design principles to every project she touches.",
  },
];

const milestones = [
  { year: 2010, event: "Company founded in a small garage" },
  { year: 2013, event: "Launched our first product and secured seed funding" },
  { year: 2016, event: "Expanded to international markets" },
  { year: 2019, event: "Reached 1 million active users" },
  { year: 2023, event: "Opened new headquarters and doubled our team size" },
];
