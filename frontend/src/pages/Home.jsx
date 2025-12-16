import React from 'react'
import HeroSection from "../components/HeroSection"

import SkillsSection from '@/components/SkillsSection'
import FullStackCard from '@/components/FullStackCard'
import SkillsCard from '@/components/SkillsCard'
import EducationCard from '@/components/EducationCard'
import ExperienceCard from '@/components/ExperienceCard'



function Home() {
  return (
    <>
      <HeroSection />
      <FullStackCard />
      {/* <SkillsSection /> */}
      <SkillsCard />
      <EducationCard />
      <ExperienceCard />
    </>
  )
}

export default Home