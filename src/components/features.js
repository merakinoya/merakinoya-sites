import React from "react"

import EpicProperty from "../images/epic_property.jpeg"
import BillManagement from "../images/bill_management.jpeg"
import FoodiePedia from "../images/the_foodiepedia.jpeg"

const callouts = [
    {
      id : 1,
      name: 'Web & Apps Design',
      description: 'Epic Property Web',
      imageSrc: [EpicProperty],
      imageAlt: 'EpicProperty',
      href: 'https://www.instagram.com/p/CQ5vq7Gjrt9/',
    },
    {
      id : 2,
      name: 'Web Apps Design',
      description: 'The Foodiepedia Brand & Web Redesign',
      imageSrc: [FoodiePedia],
      imageAlt: 'Foodiepedia',
      href: 'https://www.instagram.com/p/CQ5vTkmj1oZ/',
    },
    {
      id : 3,
      name: 'Apps Design',
      description: 'Billing Management for boarding house owner',
      imageSrc: [BillManagement],
      imageAlt: 'Billing-Management',
      href: 'https://www.instagram.com/p/CQ8QIlwrPoG/',
    },
  ]
  
  export default function FeaturesSection() {
    return (
      <section id="projects" className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-3xl font-circular  font-extrabold text-gray-900">Projects</h2>


  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div  key={callout.id} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href} target="_blank" rel="noreferrer">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }