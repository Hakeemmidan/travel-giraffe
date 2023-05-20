/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'AI powered',
    description:
      "By using the info that you fill below, our system will make guesses on what flights you might like",
    icon: <span role="img" aria-label="robot">🤖</span>,
  },
  {
    name: 'Free',
    description: 'Our newsletter is free to use',
    icon: <span role="img" aria-label="flying-money">💸</span>,
  },
  {
    name: 'Daily, weekly, monthly?',
    description: "We don't want to overwhelm or annoy you with emails, so you can pick your preference for when you want the newsletter",
    icon: <span role="img" aria-label="clock">⏱️</span>,
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden h-full bg-white pt-24 pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="text-white lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Flights tailored for your taste</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Make AI do the work. Every week, we look for flights that might you like 🛫 💛
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-1 text-xl" aria-hidden="true">
                        {feature.icon}
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
