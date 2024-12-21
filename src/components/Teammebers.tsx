

const people = [
  {
    name: 'Emma Rodriguez',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Emma has over 15 years of experience in real estate and technology. She founded RentEase to revolutionize the rental market.',
  },
  {
    name: 'Michael Chen',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'With a background in software engineering, Michael leads our tech team in developing innovative solutions for property management.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Customer Experience',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Sarah ensures that both landlords and tenants have a smooth, enjoyable experience using the RentEase platform.',
  },
  {
    name: 'David Okafor',
    role: 'Lead Product Designer',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'David combines his passion for UX/UI design with his understanding of real estate to create intuitive, user-friendly interfaces.',
  },
]

export default function TeamMembers() {
  return (
    <div className="
        bg-slate-900
    py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Meet the passionate individuals behind RentEase who are dedicated to simplifying the rental experience for everyone.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name} className="group">
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                src={person.imageUrl}
                alt=""
                width={300}
                height={200}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
              <p className="text-base leading-7 text-indigo-400">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-400">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

