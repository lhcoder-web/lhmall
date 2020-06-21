<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'scroll',
    props: {
      //是否需要实时监听滚动事件
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
        return {
          scroll: null,
          //记录当前滚动的数值
          offsetY: 0
        };
    },
    mounted() {
      //创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: true,
        pullUpLoad: {
          threshold: 50
        }
      })
      //滚动事件
      this.scroll.on('scroll',(position => {
        this.offsetY = position.y;
        this.$emit('bscroll',position)
      }))
      //上拉事件
      this.scroll.on('pullingUp',(() => {
        this.$emit('pullingUp');
        setTimeout(() => {
          this.scroll.finishPullUp();
        },500)
      }))
    },
    methods: {
      //跳转
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time);
        this.refresh();
      },
      //刷新
      refresh() {
        this.scroll.refresh();
      }
    }
};
</script>

<style scoped>

</style>
