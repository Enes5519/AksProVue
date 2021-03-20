<template>
  <div class="carousel">
    <div
      class="carousel-cell"
      v-for="(image, index) in sliderImages"
      :key="index"
      :style="{ left: getLeft(index) }"
      @mouseover="removeInterval"
      @mouseout="createInterval"
    >
      <img :src="image" alt="Aks &amp; Pro" />
    </div>
    <div class="navigation-back" @click="navigateBack">&lt;</div>
    <div class="navigation-next" @click="navigateNext">&gt;</div>
  </div>
</template>

<script>
import image1 from '@/assets/images/slider/1.jpg';
import image2 from '@/assets/images/slider/2.jpeg';
import image3 from '@/assets/images/slider/3.png';

export default {
  name: 'Home',
  data() {
    return {
      current: 0,
      sliderImages: [image1, image2, image3],
    };
  },
  mounted() {
    this.lengthOfSlide = this.$el.offsetWidth;
    this.createInterval();
  },
  methods: {
    calculateLeft(index) {
      return Math.abs(this.lengthOfSlide * (this.current - index));
    },
    getLeft(index) {
      return index < this.current
        ? `-${this.calculateLeft(index)}px`
        : index > this.current
        ? `${this.calculateLeft(index)}px`
        : 0;
    },
    navigateBack() {
      const childCount = this.sliderImages.length;
      if (--this.current < 0) {
        this.current = childCount - 1;
      }
    },
    navigateNext() {
      const childCount = this.sliderImages.length;
      if (++this.current >= childCount) {
        this.current = 0;
      }
    },
    removeInterval() {
      clearInterval(this.interval);
    },
    createInterval() {
      this.interval = setInterval(this.navigateNext, 1000 * 5);
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 150px);
  margin-right: auto;
  margin-left: auto;

  & > &-cell {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    transition: left 600ms;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > .navigation-back,
  & > .navigation-next {
    position: absolute;
    z-index: 2;
    top: 45%;
    font-size: 2rem;
    padding: 0.3125rem 0.625rem;
    color: #fff;
    background-color: rgb(183, 28, 28);
    opacity: 0.5;
    transition: opacity 500ms;
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 1;
    }
  }

  & > .navigation-back {
    left: 20px;
  }

  & > .navigation-next {
    right: 20px;
  }
}
</style>
