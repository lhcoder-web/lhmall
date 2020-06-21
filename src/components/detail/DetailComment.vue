<template>
    <div class="detail-comment">
        <div class="comment-header">
          <div class="left-text">用户评价</div>
          <div class="right-text">更多</div>
        </div>
        <div class="comment-wrapper" v-for="(item,index) in comment" :key="index">
          <div class="comment-user">
            <img :src="item.user.avatar" alt="">
            <span>{{ item.user.uname }}</span>
          </div>
          <div class="comment-content">
            <p class="comment-text">{{ item.content }}</p>
            <div>{{ item.style }}</div>
          </div>
        </div> 
    </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.detail-comment {
   padding: 15px 10px;
   width: 100%;
   box-sizing: border-box;
   border-bottom: 1px solid #ccc;
 }
 .comment-header {
   border-bottom: 1px solid #ccc;
   width: 100%;
   height: 40px;
   line-height: 30px;
   display: flex;
   justify-content: space-between;
 }
 .comment-wrapper {
   margin-top: 20px;
 }
 .comment-user {
   height: 30px;
   line-height: 30px;
 }
.comment-user>img {
  width: 30px;
  margin-right: 30px;
  vertical-align:middle;
}
.comment-user>span {
  display: inline-block;
  height: 30px;
}
.comment-text {
  line-height: 20px;
}
</style>
