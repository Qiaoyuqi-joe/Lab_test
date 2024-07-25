<template>
    <div ref="chart2" style="width: 1200px; height: 200px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  import 'echarts-wordcloud';
  
  export default {
    data() {
      return {
        worddata: [
          { name: "Java", value: 2300, color: "#FFFFFF" },
          { name: "Python", value: 2000, color: "#FFFFFF" },
          { name: "HTML", value: 1500, color: "#FFFFFF" },
          { name: "CSS", value: 1500, color: "#FFFFFF" },
          { name: "JavaScript", value: 1800, color: "#FFFFFF" },
          { name: "C", value: 2000, color: "#FFFFFF" },
          { name: "C++", value: 2000, color: "#FFFFFF" },
          { name: "MATLAB", value: 1600, color: "#FFFFFF" },
          { name: "Feishu", value: 1200, color: "#FFFFFF" },
          { name: "xmind", value: 1100, color: "#FFFFFF" },
          { name: "ppt", value: 1300, color: "#FFFFFF" },
          { name: "excel", value: 1200, color: "#FFFFFF" },
          { name: "badminton", value: 800, color: "#FFFFFF" },
          { name: "violin", value: 900, color: "#FFFFFF" },
          { name: "IELTS", value: 1300, color: "#FFFFFF" },
          { name: "CET-4", value: 1200, color: "#FFFFFF" },
          { name: "CET-6", value: 1200, color: "#FFFFFF" }
        ]
      };
    },
    mounted() {
      this.initCharts();
    },
    methods: {
      initCharts() {
        let myChart2 = echarts.init(this.$refs.chart2);
        myChart2.setOption({
          title: {
            text: 'Professional Skills Word Cloud',
            x: 'center',
            textStyle: {
              color: '#FFFFFF'
            }
          },
          backgroundColor: '#FFFFFF',
          series: [{
            type: 'wordCloud',
            gridSize: 10,
            sizeRange: [14, 60],
            rotationRange: [0, 0],
            textStyle: {
              normal: {
                color: function (params) {
                  return params.data.color;
                }
              }
            },
            left: '10%',
            top: '10%',
            right: '10%',
            bottom: '10%',
            width: '80%',
            height: '80%',
            data: this.worddata
          }]
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式可以根据需要调整 */
  </style>
  