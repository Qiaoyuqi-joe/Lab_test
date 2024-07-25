<template>
    <div class="projects">
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
       
       <h1>Education Experience</h1>
       <p style="font-size:25px;"><strong>GPA:86.11(15%)</strong></p>
       <p style="font-size:20px;"><strong>Major</strong>: Principles of Communication (95), Advanced Transformation (91), Machine Learning (88), Electronic
 Systems (93), Programming (93)</p>
       </div>
        </div>
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserEducation'
  }
  </script>
  