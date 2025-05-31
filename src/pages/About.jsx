import React from 'react'
import AboutHero from '../components/AboutUs/AboutUsHero'
import WhoWeAre from '../components/AboutUs/WhoWeAre'
import MissionVision from '../components/AboutUs/MissionVision'
import TeamShowcase from '../components/AboutUs/TeamShowcase'
import CompanyTeamPhoto from '../components/AboutUs/EnterCompany'

function About() {
  return (
    <>
    <AboutHero />
    <WhoWeAre/>
    <MissionVision/>
    <TeamShowcase />
    <CompanyTeamPhoto/>
    </>
  )
}

export default About