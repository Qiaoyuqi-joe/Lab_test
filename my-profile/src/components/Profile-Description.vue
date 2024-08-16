<template>
  <div class="projects">
    <LayoutMain>
      <template v-slot>
        <div class="header">
          <div class="text-content">
            <h1>Personal Summary</h1>
            <p>
              <strong style="font-size: 20px;">●Personal description:</strong> 
              I try to exert my organizational and leadership potential, and I hope to pay tribute to the team and contribute my strength. 
              For the responsible for each task, I am strict, careful attitude to ensure its smooth completion. I maintain a positive attitude 
              towards research and study, and I believe that enthusiasm and continuous efforts are the key to achieving my goals.
            </p>
            <p>
              <strong style="font-size: 20px;">●Future Vision:</strong> 
              Based on the knowledge I have accumulated in computer and communication learning, I hope to continue my study in the field 
              of computer vision and machine learning, and at the same time, I am logarithmic Cutting-edge technology fields such as word 
              twin and copyright blockchain are interested and eager to have the opportunity to understand and explore their academic 
              and application prospects.
            </p>
          </div>
        </div>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from './LayoutMain.vue';

export default {
  name: 'UserDescription',
  components: {
    LayoutMain
  }
}
</script>

