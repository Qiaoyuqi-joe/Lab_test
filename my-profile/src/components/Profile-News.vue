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
      <div id="pie-chart" style="width: 600px; height: 400px;"></div> <!-- 饼图容器 -->
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'UserNews',
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
    }
  }
}
</script>

<style>
.news {
  display: flex;
}

.sidebar {
  width: 200px;
}

.content {
  flex: 1;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gif-image {
  width: 100px;
  height: auto;
}

#pie-chart {
  margin-top: 20px;
}
</style>
