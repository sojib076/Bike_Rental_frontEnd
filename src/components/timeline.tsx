import { CheckCircle } from 'lucide-react'

const timelineEvents = [
  {
    date: '2018',
    title: 'Okay Bike Founded',
    description: 'Emma Rodriguez and Michael Chen launch Okay Bike with a vision to simplify the rental process.',
  },
  {
    date: '2019',
    title: 'First 1,000 Users',
    description: 'Okay Bike reaches its first milestone of 1,000 active users on the platform.',
  },
  {
    date: '2020',
    title: 'Virtual Tours Introduced',
    description: 'In response to global changes, Okay Bike introduces virtual property tours, revolutionizing remote renting.',
  },
  {
    date: '2021',
    title: 'Series A Funding',
    description: 'Okay Bike secures $10 million in Series A funding to expand operations and enhance the platform.',
  },
  {
    date: '2022',
    title: 'AI-Powered Matching',
    description: 'Launch of AI-powered matching system to connect tenants with their ideal properties more efficiently.',
  },
  {
    date: '2023',
    title: 'Expansion to 50 Cities',
    description: 'Okay Bike expands its services to 50 major cities across the country, becoming a national leader in rental solutions.',
  },
]

export default function Timeline() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Okay Bike Story
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From a small startup to a national leader in rental solutions, explore the key milestones that have shaped Okay Bike.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {timelineEvents.map((event) => (
              <div key={event.date} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <CheckCircle className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {event.date}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto font-semibold">{event.title}</p>
                  <p className="mt-2">{event.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

