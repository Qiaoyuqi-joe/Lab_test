<template>
    <div class="layout">
      <div class="mobile-menu" @click="toggleMenu">
        <!-- 菜单图标 -->
        <span class="menu-icon">&#9776;</span>
      </div>
      <nav class="sidebar" :class="{ active: showMenu }">
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
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LayoutMain',
    data() {
      return {
        showMenu: false, // 移动菜单的显示状态
        isMobile: window.innerWidth <= 768, // 是否为移动端视图
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu; // 切换菜单显示状态
      },
      handleResize() {
        this.isMobile = window.innerWidth <= 768; // 根据窗口大小更新视图模式
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize); // 添加窗口大小变化监听
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize); // 移除监听器
    }
  };
  </script>
  
  <style scoped>
 @import '../assets/style.css';
  </style>
  