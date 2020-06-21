<template>
    <div class="swiper">
      <div class="swiper-item" v-for="(item,index) in imgList" :key="index">
        <img :src="item" v-show="index === currentIndex" alt="">
        <div class="circle" :class="{active:index === currentIndex}" 
        @click="circleClick(index)" :style="{left:`${140+index*20}px`}"></div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      imgList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
        timeId: null,
      }
    },
    computed: {
      //图片数量
      imgListLength() {
        return this.imgList.length;
      }
    },
    methods :{
      circleClick(index) {
        this.currentIndex = index;
      },
      run() {
          this.timeId = setInterval(() => {
          this.currentIndex ++;
          if (this.currentIndex > this.imgListLength - 1) {
            this.currentIndex = 0;
          }
        },3000)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.run();
      })
    },
    destroyed() {
      clearInterval(this.timeId)
    }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  /* top: 44px; */
}
.swiper-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.swiper-item img {
  width: 100%;
  /* height: 100%; */
}
.circle {
  position: absolute;
  bottom: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 9;
}
.active {
  background-color: #f00;
}
</style>
