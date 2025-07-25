import React from 'react'
import HeroSection from "../components/HeroSection"

import SkillsSection from '@/components/SkillsSection'
import FullStackCard from '@/components/FullStackCard'
import SkillsCard from '@/components/SkillsCard'



function Home() {
  return (
    <>
      <HeroSection />
      <FullStackCard />
      {/* <SkillsSection /> */}
      <SkillsCard />
    </>
  )
}

export default Home