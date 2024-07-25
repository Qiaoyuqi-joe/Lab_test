import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Profile-Home.vue';
import Education from './components/Profile-Education.vue';
import Projects from './components/Profile-Projects.vue';
import Honors from './components/Profile-Honors.vue';
import Works from './components/Profile-Works.vue';
import News from './components/Profile-News.vue';
import Description from './components/Profile-Description.vue';
import Skills from './components/Profile-Skills.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/education', component: Education },
    { path: '/projects', component: Projects },
    { path: '/honors', component: Honors },
    { path: '/works', component: Works },
    { path: '/news', component: News },
    { path: '/description', component: Description },
    { path: '/skills', component: Skills }
  ]
});
