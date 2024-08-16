<template>
  <div class="projects">
    <LayoutMain>
      <template v-slot>
        <div class="header">
          <div class="text-content">
            <h1>Education Experience</h1>
            <p style="font-size:25px;"><strong>GPA: 86.11 (15%)</strong></p>
            <p style="font-size:20px;">
              <strong>Major</strong>: Principles of Communication (95), Advanced Transformation (91), Machine Learning (88), 
              Electronic Systems (93), Programming (93)
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
  name: 'UserEducation',
  components: {
    LayoutMain
  }
}
</script>
