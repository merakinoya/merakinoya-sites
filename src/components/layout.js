/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BsDribbble, BsInstagram } from "react-icons/bs";

import Navbar from "./navbar";
import '../css/tailwind-style.css';
import '../css/animista.css';
import '../css/golden-ratio.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />

      <main className="">
        {children}
      </main>
      

      <footer className="py-6 px-8 bg-gray-50 mt-0 mb-12">

        <div className="flex justify-center gap-4 py-7">
          <a href="https://www.instagram.com/merakinoya/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-2xl hover:text-red-500"><BsInstagram /></a>
          <a href="https://dribbble.com/ilhamarl" target="_blank" rel="noreferrer" aria-label="Dribbble"  className="text-2xl hover:text-red-500"><BsDribbble /></a>
        </div>


        <div className="container mx-auto text-center md:container md:mx-auto py-4">
          © {new Date().getFullYear()} <a href="https://www.instagram.com/merakinoya" className="text-green-600 underline" target="_blank" rel="noreferrer">Merakinoya</a> All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout