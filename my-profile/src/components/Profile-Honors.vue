<template>
  <div class="honors">
    <LayoutMain>
      <template v-slot>
        <div class="header">
          <div class="text-content">
            <h1>Honors</h1>
            <ProfileHonorsChart />
          </div>
        </div>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from './LayoutMain.vue';
import ProfileHonorsChart from './ProfileHonorsChart.vue';

export default {
  name: 'UserHonors',
  components: {
    LayoutMain,
    ProfileHonorsChart
  }
};
</script>
