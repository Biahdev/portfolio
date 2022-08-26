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
import HeaderPortfolio from './components/HeaderSection.vue';
import StudySection from './components/study/StudySection.vue';
import ExperienceSection from './components/experience/ExperienceSection.vue';
import FooterSection from './components/footer/FooterSection.vue';
import AboutMeSection from './components/aboutMe/AboutMeSection.vue';

export default {
  name: "App",
  components: { ProjectSection, HeaderPortfolio, StudySection, ExperienceSection, FooterSection, AboutMeSection }
}
</script>


