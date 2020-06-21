import BackTop from 'components/home/BackTop.vue';
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      //是否展示回到顶部
      isTopBackShow: false,
    }
  },
  methods: {
     //回到顶部
    backTop(scroll) {
      this.$refs[scroll].scrollTo(0,0)
    },
    showBackTop(position) {
      //大于800返回顶部按钮出现
      this.isTopBackShow = Math.abs(position.y) > 800;
    }
  }
}