<template>
    <div class="slideshow">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide.src" :width="imgWidth" :height="imgHeight">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name: 'carrousel',
    data() {
        return {
            imgWidth: 1000,
            imgHeight: 300,
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                grabCursor: true,
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                scrollbar: '.swiper-scrollbar',
                mousewheelControl: true,
                observeParents: true,
                autoplayDisableOnInteraction: false,
                // if you need use plugins in the swiper, you can config in here like this
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true
                // swiper callbacks
                // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                // onTransitionStart(swiper) {
                //     console.log(swiper)
                // }
                // more Swiper configs and callbacks...
                // ...
            },
            swiperSlides: [
                { id: '1', src: 'http://orc2mim1t.bkt.clouddn.com/slideshow1.png' },
                { id: '2', src: 'http://orc2mim1t.bkt.clouddn.com/slideshow2.png' },
                { id: '3', src: 'http://orc2mim1t.bkt.clouddn.com/slideshow3.png' }
            ]
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(1, 1000, false)
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style lang="stylus">
.slideshow
  margin: 0 auto
  width: 1000px
  height: 300px
  overflow: hidden
  .slideList
    width: 2400px
    height: 100%
    .slide
      display: inline-block
</style>
