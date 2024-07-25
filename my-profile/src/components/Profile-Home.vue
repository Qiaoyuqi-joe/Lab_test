<template>
  <div class="Home">
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
        <img src="@/assets/photo.jpg" alt="Home Photo" class="profile-photo" />
        <div class="text-content">
          <h1 style="font-family:'STXinwei';font-size:50px;color: #0B3880;">乔煜琪</h1>
          <h1>Yuqi Qiao</h1>
          <p style="font-size: 20px;"><strong>International College--Telecommunications Engineering and Management</strong></p>
          <p style="font-size: 20px;"><strong>University of Posts and Telecommunications</strong></p>
          <p><strong style="font-size: 20px;">Political profile:</strong> Member of the Communist Party of China (CPC)</p>
          <p ><strong style="font-size: 20px;">E-Mail:</strong> m18135477131@163.com</p>
          <p ><strong style="font-size: 20px;">TEL:</strong> 181-3547-7131</p>
          
        </div>
      </div> 
      <!--教育经历-->
      <hr class="divider" />
      <div class="text-content">
       
      <h1>Education experience</h1>
      <p style="font-size:25px;"><strong>GPA:86.11(15%)</strong></p>
      <p style="font-size:20px;"><strong>Major</strong>: Principles of Communication (95), Advanced Transformation (91), Machine Learning (88), Electronic
Systems (93), Programming (93)</p>
      </div>
      <hr class="divider" />
       <!--项目经历-->
      <div class="text-content">
      <h1>Project experience</h1>
      <h2>●YunZhi Intangible Cultural Heritage Core Group</h2>
      <ProfileCarouse1 :slides="carouselSlides" />
      <p>To build a platform based on AIGC model, supplemented by blockchain
technology, aiming to protect the intellectual property rights of intangible
cultural heritage.</p>
      <p>The project has been included in the national innovation and entrepreneurship
project, and the "12510" Party building plan of Beijing University of Posts and
Telecommunications in 2024</p>
      <p>Long-term cooperation with the government of Guizhou Province, a highlight of
        the cultural revitalization of Changshun County</p>
        <h2>●Intelligent Automatic Tracking Trolley</h2>
      <p>Cooperate with a team of 10 people to develop a robot car that can
        automatically track and recognize object recognition</p>
      <p>Responsible for the design of the front-and rear-end web pages and the
        development of the hardware Arduin o board.</p>
      
        <h2>●Smart supermarket automatic shopping programDevelopment head</h2>
      <p>Led a team of 5 people to develop an online smart supermarket system using C
        language.</p>
      <p>Realize the shopping, shopping cart, bill management, balance query and other
        functions, improve the shopping experience.</p>
        <h2>●Digital Learning Community</h2>
      <p>Committed to exploring the various development possibilities of the "learning community" in Beijing
in the era of digital intelligence, and put forward specific plans and suggestions for the
development of the teaching community in Xueyuan Road area to promote the digital transformation of
the community.</p>
      <p> Responsible for the preparation of "positioning and research design of China's learning community in
        the Era of Digital intelligence"</p>
      
      </div>
      <!--所获荣誉-->
      <hr class="divider" />
      <div class="text-content">
       <h1>Honors</h1>
       <ProfileHonorsChart />
      </div>
      <!--工作技能-->
      <hr class="divider" />
      <div class="text-content">
       <h1>Work Experiences</h1>
      <h2>●Director of the Student Union Office of the International College Student Union</h2>
      <p>1. Led the first and second Student Congress of the International College of Beijing University of Posts
        and Telecommunications.</p>
      <p>2. Organize and participate in the university fellowship activities to enhance the exchanges and
        cooperation between colleges and universities.</p>
      </div>
      <!--专业技能-->
      <hr class="divider" />
      <div class="text-content">
      
      <h1>Professional skills</h1>
      <WordCloud />

      </div>
      <!--个人简述-->
      <hr class="divider" />
      <div class="text-content">
       
      <h1>Personal summary</h1>
      <h2>●Personal description:</h2>
        <p>I try to exert my organizational and leadership potential, and I hope to pay tribute to the
team and contribute my strength. For the responsible for each task, I am strict
Careful attitude to ensure its smooth completion. I maintain a positive attitude towards research and study, and I believe that enthusiasm and continuous efforts are the key to achieving my goals.</p> 
        <h2>●Future Vision:</h2>
        <p> Based on the knowledge I have accumulated in computer and communication learning, I hope to
continue my study in the field of computer vision and machine learning, and at the same time, I am logarithmic
Cutting-edge technology fields such as word twin and copyright blockchain are interested and eager to have
the opportunity to understand and explore their academic and application prospects.</p>
        
      </div>
      <hr class="divider" />
     
    </div>
  </div>
</template>


<script>
  import ProfileCarouse1 from './ProfileCarouse1.vue';
  import ProfileHonorsChart from './ProfileHonorsChart.vue';
  import WordCloud from './WordCloud.vue';
  export default {
    name: 'UserHome',
    components: { ProfileCarouse1 ,ProfileHonorsChart,WordCloud},
    data() {
      return {
        carouselSlides: [
          { src: require('@/assets/yzfy1.png'), title: '云织非遗--数字作品创益馆', href: '#' },
          { src: require('@/assets/yzfy2.png'), title: '图片生成大模型', href: '#' },
          { src: require('@/assets/yzfy3.png'), title: '文字生成大模型', href: '#' },
          { src: require('@/assets/yzfy4.png'), title: '区块链技术融合', href: '#' },
          { src: require('@/assets/yzfy5.png'), title: '团队与项目共成长', href: '#' }
        ],
        
      };
    }
  };
  </script>