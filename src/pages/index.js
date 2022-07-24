
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesSection from "../components/our-services"
import FeaturesSection from "../components/features"

const IndexPage = () => (
  <Layout>
    <Seo title="Merakinoya" />


    {/* HERO - Above Default */}
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-96 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold font-circular tracking-tight text-gray-900 sm:text-6xl">
              We're Merakinoya
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              A Creative people with a good thinking & have aesthetic, simplicity sense to design your project!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://source.unsplash.com/3V8xo5Gbusk/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://source.unsplash.com/cpLsWmMEa1Q/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://source.unsplash.com/X8H8vPcelPk/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://source.unsplash.com/q--99IzY8Lw/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://source.unsplash.com/tYVkjjMYFBo/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://source.unsplash.com/o4UhdLv5jbQ/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://source.unsplash.com/9VzoRKfBsMM/720x720"
                          alt="Featured"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6282219259952" target="_blank" rel="noreferrer" 
                className="inline-block text-center bg-green-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-green-700"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ServicesSection />
    <FeaturesSection />


    <section id="contact-us" className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl text-center md:text-left font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block font-circular text-gray-700">Ready to build your product?</span>
          <span className="block font-circular npmtext-black">Start talk with us</span>
        </h2>
        <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a href="https://wa.me/6282219259952" target="_blank" rel="noreferrer" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Let's Talk
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-indigo-50"
            >
              See Projects
            </a>
          </div>


          {/* Button with Icon
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Publish
          </button>
          */}
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
