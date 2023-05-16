<script setup lang="ts">
import { useRouter } from 'vue-router'
import useImageUrl from '@/utils/image'
import { ref } from 'vue'
const router = useRouter()

const data = [
	{ title: '变色龙剧本杀小程序+后台管理系统', sub: '移动端设计+后台系统设计' },
	{ title: '掌中宝广告设计小程序+后台管理系统', sub: '移动端设计+后台系统设计' },
	{ title: '教学管理系统（教师端+学生端）', sub: 'web网站设计' },
	{ title: '超趣味小程序（抖音版）', sub: '移动端设计' },
	{ title: '医才无忧招聘网站', sub: 'web网站设计' },
	{ title: '凯迪瑞问卷APP+后台管理系统', sub: '移动端设计+后台系统设计' },
	{ title: '淋汾市段氏正骨微创医院网站', sub: 'web网站设计' }
].map((item, index) => {
	return {
		...item,
		img: useImageUrl('Portfolio', String(index + 1))
	}
})

const hoverIndex = ref(-1)
</script>

<template>
  <div>
    <header>汤少清</header>
    <section class="top">
      <div class="Portfolio">Portfolio</div>
      <div class="Portfolio_in">作品集</div>
    </section>

    <section class="list">
      <div class="item_out" v-for="(item, index) in data">
        <div class="item">
          <div class="img_out" @mouseenter="hoverIndex=index" @mouseleave="hoverIndex=-1">
            <img :src="item.img" class="img" />
            <div v-if="hoverIndex === index" class="hover">
              <div class="hover_btn" @click="router.push({
                path: 'detai',
                query: {
                  type: index + 1
                }
              })">立即体验</div>
            </div>
          </div>
          <div class="item_bottom">
            <div class="title">{{ item.title }}</div>
            <div class="sub">{{ item.sub }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
header {
	box-sizing: border-box;
	width: 100%;
	padding: 20px 0;
	font-size: 30px;
	padding-left: 50px;
	background: #000000;
	color: #f8f8f8;
	font-weight: bold;
}

.top {
	position: relative;
	.Portfolio {
		text-align: center;
		font-size: 100px;
		margin-top: 50px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: fade(#000000, 20%);

		&_in {
			position: absolute;
			left: 50%;
			top: 55%;
			transform: translate(-50%, -50%);
			text-align: center;
			font-weight: 600;
			color: #000000;
			font-size: 44px;
		}
	}
}

.list {
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 38px;
	padding: 0 90px;

	.item_out {
		box-sizing: border-box;
		width: 25%;
		padding-right: 40px;
		margin-bottom: 52px;

		&:nth-child(n*3) {
			padding-right: 0;
		}
		.item {
			width: 100%;
			height: 500px;
			background: #ffffff;
			box-shadow: 0px 2px 9px 0px rgba(117, 117, 117, 0.5);
			border-radius: 12px;

			.img_out {
				position: relative;
				height: 420px;

				.img {
					width: 100%;
					height: 100%;
				}

				.hover {
					position: absolute;
					width: 100%;
					height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
					left: 0;
					top: 0;
					background: rgba(0, 0, 0, 0.5);
          cursor: pointer;

          &_btn {
            padding: 6px 10px;
            font-size: 14px;
            background: #1677FF;
            border-radius: 5px;
            color: #fff;
          }
				}
			}

			.title {
				font-size: 20px;
				color: #000000;
			}

			.sub {
				font-size: 16px;
				color: #7e7e7e;
				margin-top: 4px;
			}

			&_bottom {
				padding: 14px;
			}
		}
	}
}
</style>