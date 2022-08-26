<template>

  <HeaderPortfolio />
  
  <AboutMeSection />

  <ProjectSection />

  <ExperienceSection />

  <StudySection />

  <FooterSection />
</template>


<script>
import ProjectSection from './components/project/ProjectSection.vue';
import HeaderPortfolio from './components/header/SectionHeader.vue';
import StudySection from './components/study/StudySection.vue';
import ExperienceSection from './components/experience/SectionExperience.vue';
import FooterSection from './components/footer/SectionFooter.vue';
import AboutMeSection from './components/aboutMe/SectionAboutMe.vue';

export default {
  name: "App",
  components: { ProjectSection, HeaderPortfolio, StudySection, ExperienceSection, FooterSection, AboutMeSection }
}
</script>


