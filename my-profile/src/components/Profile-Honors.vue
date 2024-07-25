<template>
  <div class="honors">
    <nav class="sidebar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/education">Education</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/honors">Honors</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li> 
        <li><router-link to="/description">Description</router-link></li>
        <li><router-link to="/news">News</router-link></li>
      </ul>
    </nav>
    <div class="content">
      <div class="header">
        <div class="text-content">
          <h1>Honors</h1>
          <ProfileHonorsChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHonorsChart from './ProfileHonorsChart.vue';

export default {
  name: 'UserHonors',
  components: {
    ProfileHonorsChart
  }
};
</script>
