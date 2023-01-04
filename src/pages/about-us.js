import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const features = [
    { name: 'Item 1', description: 'Designed by Good Goods, Inc.' },
    { name: 'Item 1', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Item 1', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Item 1', description: 'Hand sanded and finished with natural oil' },
    { name: 'Item 1', description: 'Wood card tray and 3 refill packs' },
    { name: 'Item 1', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const AboutUs = () => (
    <Layout>
        <Seo title="About Us" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-6 sm:py-24 lg:py-8 lg:max-w-none">

                <Link to="/" className="inline-flex items-center justify-center pb-4 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:underline">
                    ← Back to home
                </Link>

                <h2 className="text-3xl font-extrabold  tracking-tight text-gray-900 sm:text-4xl">
                    About Us
                </h2>
                <p className="mt-4 text-gray-500">
                    We are Merakinoya Agency. We've concern value when developing Digital Product
                    • Web Apps Design
                    • Graphic Design
                    • Product Photography
                    • Apparel Custom
                </p>

            </div>
        </div>

        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4 grid items-start grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:grid-cols-2">

                <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{feature.name}</dt>
                            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
            </div>
        </div>

    </Layout>
)

export default AboutUs


