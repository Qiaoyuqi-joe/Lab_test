<template>
  <div class="profile">
    <LayoutMain>
      <template v-slot>
        
          <div class="header">
            <img src="@/assets/photo.jpg" alt="Home Photo" class="profile-photo" />
            <div class="text-content">
              <h1 class="kai-ti">乔煜琪</h1>
              <h1>Yuqi Qiao</h1>
              <p><strong>International College--Telecommunications Engineering and Management</strong></p>
              <p><strong>University of Posts and Telecommunications</strong></p>
              <p><strong>Political profile:</strong> Member of the Communist Party of China (CPC)</p>
              <p><strong>E-Mail:</strong> m18135477131@163.com</p>
              <p><strong>TEL:</strong> 181-3547-7131</p>
            </div>
          </div>
          <hr class="divider" />
          <div class="text-content">
            <h1>Education experience</h1>
            <p><strong>GPA:86.11(15%)</strong></p>
            <p><strong>Major</strong>: Principles of Communication (95), Advanced Transformation (91), Machine Learning (88), Electronic Systems (93), Programming (93)</p>
          </div>
          <hr class="divider" />
          <div class="text-content">
            <h1>Project experience</h1>
            <h2>●YunZhi Intangible Cultural Heritage Core Group</h2>
            <ProfileCarouse1 :slides="carouselSlides" />
            <p>To build a platform based on AIGC model, supplemented by blockchain technology, aiming to protect the intellectual property rights of intangible cultural heritage.</p>
            <p>The project has been included in the national innovation and entrepreneurship project, and the "12510" Party building plan of Beijing University of Posts and Telecommunications in 2024</p>
            <p>Long-term cooperation with the government of Guizhou Province, a highlight of the cultural revitalization of Changshun County</p>
            <h2>●Intelligent Automatic Tracking Trolley</h2>
            <p>Cooperate with a team of 10 people to develop a robot car that can automatically track and recognize object recognition</p>
            <p>Responsible for the design of the front-and rear-end web pages and the development of the hardware Arduino board.</p>
            <h2>●Smart supermarket automatic shopping program Development head</h2>
            <p>Led a team of 5 people to develop an online smart supermarket system using C language.</p>
            <p>Realize the shopping, shopping cart, bill management, balance query and other functions, improve the shopping experience.</p>
            <h2>●Digital Learning Community</h2>
            <p>Committed to exploring the various development possibilities of the "learning community" in Beijing in the era of digital intelligence, and put forward specific plans and suggestions for the development of the teaching community in Xueyuan Road area to promote the digital transformation of the community.</p>
            <p>Responsible for the preparation of "positioning and research design of China's learning community in the Era of Digital intelligence"</p>
          </div>
          <hr class="divider" />
          <div class="text-content">
            <h1>Honors</h1>
            <ProfileHonorsChart />
          </div>
          <hr class="divider" />
          <div class="text-content">
            <h1>Work Experiences</h1>
            <h2>●Director of the Student Union Office of the International College Student Union</h2>
            <p>1. Led the first and second Student Congress of the International College of Beijing University of Posts and Telecommunications.</p>
            <p>2. Organize and participate in the university fellowship activities to enhance the exchanges and cooperation between colleges and universities.</p>
          </div>
          <hr class="divider" />
          <div class="text-content">
            <h1>Professional skills</h1>
            <WordCloud />
          </div>
          <hr class="divider" />
         
<div class="text-content">
  <h1>Personal summary</h1>
  <div class="personal-summary">
    <div class="left-column">
      <h2>●Personal description:</h2>
      <p>I try to exert my organizational and leadership potential, and I hope to pay tribute to the team and contribute my strength. For the responsible for each task, I am strict Careful attitude to ensure its smooth completion. I maintain a positive attitude towards research and study, and I believe that enthusiasm and continuous efforts are the key to achieving my goals.</p>
    </div>
    <div class="center-column">
      <h2>●Future Vision:</h2>
      <p>Based on the knowledge I have accumulated in computer and communication learning, I hope to continue my study in the field of computer vision and machine learning, and at the same time, I am logarithmic Cutting-edge technology fields such as word twin and copyright blockchain are interested and eager to have the opportunity to understand and explore their academic and application prospects.</p>
    </div>
    <div class="right-column">
      <h2>●Hobbies:</h2>
      <p>I enjoy spending my free time engaging in a variety of hobbies. Reading allows me to explore new worlds, ideas, and perspectives, helping me expand my knowledge and imagination. Swimming is not only a great way to stay fit, but it also provides a sense of relaxation and peace as I glide through the water. Playing basketball is another passion of mine.</p>
    </div>
  </div>
</div>
<hr class="divider" />


        
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from './LayoutMain.vue';
import ProfileCarouse1 from './ProfileCarouse1.vue';
import ProfileHonorsChart from './ProfileHonorsChart.vue';
import WordCloud from './WordCloud.vue';

export default {
  name: 'ProfileHome',
  components: {
    LayoutMain,
    ProfileCarouse1,
    ProfileHonorsChart,
    WordCloud,
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
};
</script>
