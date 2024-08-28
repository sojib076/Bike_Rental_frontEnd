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

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Mission Statement */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our mission is to empower individuals and businesses with innovative technology solutions that drive growth and success in the digital age.
        </p>
      </section>
      <div  data-aos="fade-up" className=" lg:p-20 mt-10 px-5">
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center">
                    <div className="lg:w-[50%] text-left">
                        <h1 className="text-xl md:text-4xl font-bold lg:mt-0 mt-10">
                       <span className="text-green-500"> Okay Bikes </span> Best in the Business
                        </h1>
                        <p className="py-6">
                            
                            Okay Bikes is a leading motorcycle rental company in the world. We provide the best quality bikes for rent at affordable prices. We have a wide range of bikes to choose from. Our bikes are well maintained and serviced regularly. We have a team of experienced professionals who are dedicated to providing the best service to our customers. We are committed to providing the best quality bikes and excellent customer service. We have a large fleet of bikes to choose from, including sports bikes, cruisers, touring bikes, and more. We offer flexible rental options to suit your needs. Whether you need a bike for a day, a week, or a month, we have you covered. Renting a bike from Okay Bikes is easy and hassle-free. Just choose the bike you want, book it online, and pick it up from our location. We also offer delivery services to your location. Rent a bike from Okay Bikes and enjoy the freedom of the open road.

                        </p>
                        <div className="flex justify-between text-center">
                            <div>
                                <div className="text-sm md:text-2xl font-bold">10 years</div>
                                <div className="text-sm ">Experience</div>
                            </div>
                            <div>
                                <div className="text-sm md:text-2xl font-bold">2k</div>
                                <div className="text-sm">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-sm md:text-2xl font-bold">100%</div>
                                <div className=" text-sm">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-[90%] ">
                        <img
                            src='
                            
                            https://media.istockphoto.com/id/1457093031/photo/motorcycle-parked-on-the-road.webp?s=1024x1024&w=is&k=20&c=LUscKlk2nmjANf9bLuFYXbCQM0leqgFQ3E9-dW-esiw=
                            ' 
                            alt="about"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </div>


      <Separator className="my-8" />

      {/* Team Section */}
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
      <section className="mb-12" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex" data-aos="fade-right" data-aos-delay={`${200 * index}`}>
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {index !== milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-muted-foreground" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{milestone.year}</h3>
                <p className="text-muted-foreground">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
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
