<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less">

/* 渐变设置 */
.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.7s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
	position: absolute;
}

body, html, #app {
  width: 100%;
	height: 100%;
  padding: 0;
  margin: 0;
}

.color_fff {
  color: #fff;
}

.text_center {
  text-align: center;
}
.text_30 {
  font-size: 230px;
}
.text_20 {
  font-size: 170px;
}
.nowrap {
  white-space: nowrap;
}
</style>
