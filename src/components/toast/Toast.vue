<template>
	<div class="toast">
    <div class="toast-text">{{ text }}</div>
	</div>
</template>
<script>
export default {
  props: {
    text: String
  }
}
</script>
<style scoped>
  .toast {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .toast-text {
    position: absolute;
    left: 20%;
    top: 45%;
    width: 200px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgba(0,0,0,.7);
    color: #fff;
  }
</style>