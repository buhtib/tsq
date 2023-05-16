<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="bg">
    <img src="@/assets/bg.png" />
    <div class="text_center nowrap">
      <div class="color_fff text_30">Hi</div>
      <div class="color_fff text_20">I'm 汤少清</div>
      <button @click="router.push('AboutView')">点击进入</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg {
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
    object-fit: cover;
	}
}
.text_center {
	position: fixed;
	left: 50%;
	top: 40%;
	transform: translate(-50%, -50%);
  z-index: 1;
}

button {
	padding: 25px 100px;
	margin-top: 60px;
	line-height: 1;
	background-color: transparent;
	outline: none;
	border: 1px solid #1677ff;
	font-size: 14px;
	color: #1677ff;
	border-radius: 4px;
	font-size: 50px;
	cursor: pointer;

	&:active {
		background-color: fade(#fff, 20%);
	}
}
</style>