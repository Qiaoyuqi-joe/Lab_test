<template>
  <div class="skills">
    <LayoutMain>
      <template v-slot>
        <div class="text-content">
          <h1>Professional skills</h1>
          <WordCloud />
        </div>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from './LayoutMain.vue';
import WordCloud from './WordCloud.vue';

export default {
  name: 'UserSkills',
  components: { 
    LayoutMain,
    WordCloud 
  }
};
</script>
