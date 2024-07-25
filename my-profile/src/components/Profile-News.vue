<template>
    <div class="news">
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
            
            <h1>News</h1>
            <img src="@/assets/new.gif" alt="New GIF" class="gif-image" />
            </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserNews'
  }
  </script>
  