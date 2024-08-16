<template>
  <div class="projects">
    <LayoutMain>
      <template v-slot>
        <div class="header">
          <!-- 项目经历 -->
          <div class="text-content">
            <h1>Project experience</h1>
            <h2>● YunZhi Intangible Cultural Heritage Core Group</h2>
            <p>To build a platform based on AIGC model, supplemented by blockchain technology, aiming to protect the intellectual property rights of intangible cultural heritage.</p>
            <p>The project has been included in the national innovation and entrepreneurship project, and the "12510" Party building plan of Beijing University of Posts and Telecommunications in 2024.</p>
            <p>Long-term cooperation with the government of Guizhou Province, a highlight of the cultural revitalization of Changshun County.</p>
            <!-- yzfy轮播图 -->
            <ProfileCarouse1 :slides="carouselSlides" />
            <h2>● Intelligent Automatic Tracking Trolley</h2>
            <p>Cooperate with a team of 10 people to develop a robot car that can automatically track and recognize objects.</p>
            <p>Responsible for the design of the front-end and back-end web pages and the development of the hardware Arduino board.</p>
            <h2>● Smart supermarket automatic shopping program Development head</h2>
            <p>Led a team of 5 people to develop an online smart supermarket system using C language.</p>
            <p>Realize shopping, shopping cart, bill management, balance query, and other functions to improve the shopping experience.</p>
            <h2>● Digital Learning Community</h2>
            <p>Committed to exploring the various development possibilities of the "learning community" in Beijing in the era of digital intelligence, and put forward specific plans and suggestions for the development of the teaching community in Xueyuan Road area to promote the digital transformation of the community.</p>
            <p> Responsible for the preparation of "Positioning and Research Design of China's Learning Community in the Era of Digital Intelligence."</p>
          </div>
        </div>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from './LayoutMain.vue';
import ProfileCarouse1 from './ProfileCarouse1.vue';

export default {
  name: 'UserProjects',
  components: { 
    LayoutMain,
    ProfileCarouse1 
  },
  data() {
    return {
      carouselSlides: [
        { src: require('@/assets/yzfy1.png'), title: '云织非遗--数字作品创益馆', href: '#' },
        { src: require('@/assets/yzfy2.png'), title: '图片生成大模型', href: '#' },
        { src: require('@/assets/yzfy3.png'), title: '文字生成大模型', href: '#' },
        { src: require('@/assets/yzfy4.png'), title: '区块链技术融合', href: '#' },
        { src: require('@/assets/yzfy5.png'), title: '团队与项目共成长', href: '#' }
      ]
    };
  }
}
</script>
