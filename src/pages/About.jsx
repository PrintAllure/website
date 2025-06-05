import React from 'react'
import AboutHero from '../components/AboutUs/AboutUsHero'
import WhoWeAre from '../components/AboutUs/WhoWeAre'
import MissionVision from '../components/AboutUs/MissionVision'
import TeamShowcase from '../components/AboutUs/TeamShowcase'
import CompanyTeamPhoto from '../components/AboutUs/EnterCompany'
import OperationalTimeline from '../components/AboutUs/Timeline'

function About() {
  return (
    <>
    <AboutHero />
    <WhoWeAre/>
    <MissionVision/>
    <OperationalTimeline />
    <CompanyTeamPhoto/>
    </>
  )
}

export default About