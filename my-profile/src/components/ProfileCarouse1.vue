<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" :alt="slides[nowIndex].title" />
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src" :alt="slides[nowIndex].title" />
        </transition>
      </a>
    </div>
    <h3>{{ slides[nowIndex].title }}</h3>

    <ul class="slide-page">
      <li @click="goto(preIndex)">&lt;</li>
      <li v-for="(item, index) in slides" :key="index" @click="goto(index)">
        <a href="#" :class="{ on: index == nowIndex }">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    inv: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  computed: {
    preIndex() {
      return this.nowIndex === 0 ? this.slides.length - 1 : this.nowIndex - 1;
    },
    nextIndex() {
      return this.nowIndex === this.slides.length - 1 ? 0 : this.nowIndex + 1;
    }
  },
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.runInv();
  },
  beforeDestroy() {
    clearInterval(this.invId);
  }
};
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all 1s;
}
.slide-trans-enter {
  transform: translateX(1200px);
}
.slide-trans-old-leave-active {
  transition: all 1s;
  transform: translateX(-1200px);
}

.slide-show {
 
  padding-top:56.25%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.slide-show h3 {
  width: 100%;
  position: absolute;
  color: #fff;
  background-color: #000;
  opacity: 0.7;
  bottom: 0;
  padding: 10px 0;
  text-indent: 20px;
  font-weight: 500;
}
.slide-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.slide-img img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
}
.slide-page {
  right: 15px;
  bottom: 10px;
  position: absolute;
  display: flex;
  align-items: center;
}
.slide-page .on {
  text-decoration: underline;
}
.slide-page li {
  list-style: none;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  height: 32px;
  display: flex;
  align-items: center;
}
.slide-page li a {
  color: #fff;
  text-decoration: none;
}
.slide-page li:hover,
.slide-page a:hover {
  color: #1fdd88;
}
@media (max-width: 768px) {
  .slide-show {
    padding-top: 60%; /* Adjust aspect ratio for mobile if necessary */
  }

  .slide-img img {
    object-fit: contain; /* Ensure the image is fully visible */
  }

}
</style>