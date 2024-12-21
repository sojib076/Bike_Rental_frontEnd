import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-16 
      dark:bg-gray-800
      bg-gradient-to-br from-sky-600 to-gray-600

      
      dark:from-slate-900 dark:to-slate-950


    bg-primary ">
      <div className="container mx-auto px-4 text-center
      
      ">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
        <p className="text-xl mb-8">Book your bike now and explore the city like never before!</p>
        <Button size="lg" variant="secondary" className="
          hover:scale-105
          transition-transform
        dark:gradient-to-br from-sky-300 to-gray-400
        bg-white text-primary
          dark:text-gray-800
        hover:bg-gray-100">
          Book Your Ride
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

