// import HelpSection from "@/components/Home/HelpSection";


// const About = () => {
//     return (
//         <div>
//             <HelpSection
//                 backgroundImage="https://autobike.templaza.net/wp-content/uploads/2023/05/paul-kansonkho-1920.jpg"
//                 title="FREE SERVICE FOR PREMIUM MEMBERS"
//                 description="If someone’s not there to take your call, you can wait and the automated voice will prompt you to leave a message. We will get back to you as soon as possible."
//                 buttonText="Contact Us"
//                 buttonLink="/"
//                 contactNumber="(+012) 33 5566 8888"
//             />
//         </div>
//     );
// };

// export default About;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Phone } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Mission Statement */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our mission is to empower individuals and businesses with innovative technology solutions that drive growth and success in the digital age.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={member.photo} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
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
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {index !== milestones.length - 1 && <div className="w-0.5 h-full bg-muted-foreground" />}
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
      <section>
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <p>123 Tech Street, Innovation City, 12345</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" />
            <p>info@techcompany.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Jane Doe",
    position: "CEO & Founder",
    photo: "/placeholder.svg?height=200&width=200",
    bio: "Jane has over 15 years of experience in the tech industry and is passionate about creating innovative solutions."
  },
  {
    name: "John Smith",
    position: "CTO",
    photo: "/placeholder.svg?height=200&width=200",
    bio: "John is a seasoned software engineer with a knack for solving complex technical challenges."
  },
  {
    name: "Emily Brown",
    position: "Head of Design",
    photo: "/placeholder.svg?height=200&width=200",
    bio: "Emily brings creativity and user-centric design principles to every project she touches."
  }
]

const milestones = [
  { year: 2010, event: "Company founded in a small garage" },
  { year: 2013, event: "Launched our first product and secured seed funding" },
  { year: 2016, event: "Expanded to international markets" },
  { year: 2019, event: "Reached 1 million active users" },
  { year: 2023, event: "Opened new headquarters and doubled our team size" }
]