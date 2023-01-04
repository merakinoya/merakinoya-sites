import React from 'react';

import { CameraIcon, DeviceMobileIcon, PhotographIcon, ScissorsIcon } from '@heroicons/react/outline'

const services = [
  {
    name: 'UI / UX Design',
    description:
      'Designing a Experience user when they are using our products like a Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App',
    icon: DeviceMobileIcon,
  },
  {
    name: 'Graphic Design',
    description:
      'Design based on your objective needs like Designing a Book, Brand Design Kit, Posters, Brochure, etc',
    icon: PhotographIcon,
  },
  {
    name: 'Product Photography',
    description:
      'Look and feel based on your product is visuals to make engaging enhance your business impression',
    icon: CameraIcon,
  },
  {
    name: 'Merchandise Custom Design',
    description:
      'Not only digital product, we can implementing into physical products like T-shirts, Totebag, Other merchandise, etc',
    icon: ScissorsIcon,
  },
]

export default function ServicesSection() {
  return (

    <section id="our-services" className="py-12 md:py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold  tracking-tight text-gray-900 sm:text-4xl">
            Our Service
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our experience in digital projects can realize the product you need
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-200 text-green-600">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

  )
}