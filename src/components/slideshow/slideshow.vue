<template>
    <div class="slideshow">
        <ul class="slideList" ref="slide">
            <li class="slide" v-for="slide in slideList">
                <img :width="imgWidth" :height="imgHeight" :src="slide">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        timeout: {
            type: Number,
            default() {
                return 800;
            }
        },
        interval: {
            type: Number,
            default() {
                return 1000;
            }
        }
    },
    data() {
        return {
            imgWidth: 800,
            imgHeight: 300,
            slideList: [
                'http://orc2mim1t.bkt.clouddn.com/slideshow1.png',
                'http://orc2mim1t.bkt.clouddn.com/slideshow2.png',
                'http://orc2mim1t.bkt.clouddn.com/slideshow3.png',
                'http://orc2mim1t.bkt.clouddn.com/slideshow1.png'
            ]
        }
    },
    created() {
        while (true) {
            setTimeout(function() {
                let left = 0;
                let timer = setInterval(function() {
                    left += 10;
                    if (left >= 800) {
                        this.$refs.slide.style.left = 800 + 'px';
                        clearInterval(timer);
                    } else {
                        this.$refs.slide.style.left = left + 'px';
                    }
                }, this.interval);
            }, this.timeout);
        }
    }
}
</script>
<style lang="stylus">
.slideshow
  margin: 0 auto
  width: 800px
  height: 300px
  overflow: hidden
  .slideList
    width: 2400px
    height: 100%
    .slide
      display: inline-block
</style>
