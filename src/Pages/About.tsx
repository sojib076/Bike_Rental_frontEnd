import TeamMembers from '@/components/Teammebers';
import Timeline from '@/components/timeline';
import { Link } from 'lucide-react';


const About = () => {
  return (
    <div>
         <div className="
       bg-gradient-to-tr
      dark:from-slate-950 dark:to-slate-900

    from-sky-600 to-gray-400

         text-white ">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900/80">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <img
                  className="h-11"
                  src="/placeholder.svg?height=44&width=120"
                  alt="Okay Bike Logo"
                  width={120}
                  height={44}
                />
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  About Okay Bike
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  At Okay Bike, we're revolutionizing the way people find and manage rental properties. Our mission is to make the rental process simple, transparent, and stress-free for both tenants and landlords.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/listings"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    View Listings
                  </a>
                  <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                    Contact Us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
     

    </div>
    </div>   
    <TeamMembers />
    <Timeline />
    </div>
  );
}

export default About;