<template>
    <div class="broadcast">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <p>{{slide.content}}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
        return {
            name: 'carrousel',
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                direction: 'vertical',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
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
                { id: '1', content: '公告：2017新卓越火热报名中' },
                { id: '2', content: '公告：恭喜100名同学软师资格考试通过' },
                { id: '3', content: '公告：恭喜新卓越获陕西优秀培训机构' }
            ]
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(1, 1000, false)
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style lang="stylus">
p
  font-size: 16px
  color: red
</style>
