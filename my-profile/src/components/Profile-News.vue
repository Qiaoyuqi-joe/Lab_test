<template>
  <div class="news">
    <LayoutMain>
      <template v-slot>
        <div class="header centered-content">
          <div class="text-content">
            <h1>News</h1>
            <img src="@/assets/new.gif" alt="New GIF" class="gif-image" />
          </div>
        </div>
        <!-- 修改饼图容器的宽高比为 3:2 -->
        <div id="pie-chart" class="chart-container"></div> <!-- 饼图容器 -->
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import LayoutMain from './LayoutMain.vue';

export default {
  name: 'UserNews',
  components: {
    LayoutMain
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('pie-chart');
      var myChart = echarts.init(chartDom);

      var option = {
        color: ['#18F6F8', '#288CFC', '#FFD91A'],
        legend: {
          top: '10px',
          icon: 'circle',
          itemWidth: 10,
          itemHeight: 10
        },
        tooltip: {
          confine: true,
          trigger: 'item',
          formatter: '{b} : {c}'
        },
        series: [
          {
            avoidLabelOverlap: false,
            type: 'pie',
            roseType: 'area',
            center: ['50%', '50%'],
            radius: ['20%', '60%'],
            label: {
              formatter: '{b}\n-------------\n{d}%\t{c}',
              fontSize: 16
            },
            labelLine: {
              length: 50,
              length2: 20
            },
            data: [
              { name: '大一', value: 2100 },
              { name: '大二', value: 2502 },
              { name: '大三', value: 3156 }
            ]
          }
        ]
      };

      myChart.setOption(option);

      // Adjust chart size when window is resized
      window.addEventListener('resize', function() {
        myChart.resize();
      });
    }
  }
}
</script>

<style>

.gif-image {
  width: 100px;
  height: auto;
  margin-top: 10px; /* 增加一些顶部间距 */
  max-width: 100%; /* 确保图像不会超出容器宽度 */
}

.chart-container {
  width: 100%; /* 容器宽度为100% */
  height: 0;
  padding-bottom: 66.67%; /* 3:2 的比例，100% / 1.5 = 66.67% */
  position: relative;
}

#pie-chart {
  position: absolute;
  top: 0;
  
  width: 100%;
  height: 100%;
}

</style>
