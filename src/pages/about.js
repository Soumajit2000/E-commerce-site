import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Team from "../components/About/Team"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="ABOUT"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock
      heading="A message from CEO"
      source="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    />
    <Infoblock heading="About Our vision" />
    <Team />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "service.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
