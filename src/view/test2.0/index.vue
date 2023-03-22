<template>
 <div id="app">
 <div class="marquee-wrap" style="width: 100px;"><vue-marquee :content="content" class="two" :showtwo="false"></vue-marquee></div>
 <!-- <div class="marquee-wrap" style="width: 100px;"><vue-marquee content="22222" class="two" :showtwo="false"></vue-marquee></div>
 <div class="marquee-wrap" style="width: 100px;"><vue-marquee content="1" class="two" :showtwo="false"></vue-marquee></div> -->
 <router-view></router-view>
 </div>
</template>
<script>
import VueMarquee from 'vue-marquee-ho';
import Css from 'vue-marquee-ho/dist/vue-marquee.min.css'
export default {
 name: 'app',
 components:{
  "vue-marquee": VueMarquee
 },
 data() {
    return {
        content:"连雨不知春去,连雨不知春去2",
    }
 },
}
</script>