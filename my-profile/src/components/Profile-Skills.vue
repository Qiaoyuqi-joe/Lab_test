<template>
    <div class="skills">
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
        <div class="text-content">
          <h1>Professional skills</h1>
          <WordCloud />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import WordCloud from './WordCloud.vue';
  
  export default {
    name: 'UserSkills',
    components: { WordCloud }
  };
  </script>
  
  <style>
  /* 与之前一样的CSS样式 */
  </style>
  