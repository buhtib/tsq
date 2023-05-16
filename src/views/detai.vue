<script setup lang="ts">
import useImageUrl from '@/utils/image'
import { useRoute } from 'vue-router'
const route = useRoute()
const type: any = route.query.type

const data: Array<string> = Array(1000).fill(null).map((item, index) => useImageUrl(type, String(index + 1))).filter(item => item.indexOf('undefined') === -1)

</script>

<template>
  <div>
    <img :src="item" alt="" srcset="" v-for="item in data">
  </div>
</template>

<style lang="less" scoped>
img {
	width: 100%;
	object-fit: cover;
}
</style>