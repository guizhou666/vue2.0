<template>
  <div class="">
    <video class="video" id="video" controls autoplay muted></video>
    <button @click="next">切换下一张</button>
  </div>
</template>

<script>
import FlvExtend from "flv-extend";
export default {
  components: {},
  data() {
    return {
      url: "http://192.168.10.89:30810/iot/monitor1.flv",
      player: null,
      show:false
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    this.show = true;
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const videoElement = document.getElementById("video");
      // 配置需要的功能
      console.log(videoElement)
      const flv = new FlvExtend({
        element: videoElement, // *必传
        frameTracking: true, // 开启追帧设置
        updateOnStart: true, // 点击播放后更新视频
        updateOnFocus: true, // 获得焦点后更新视频
        reconnect: true, // 开启断流重连
        reconnectInterval: 0, // 断流重连间隔
      });
      // 调用 init 方法初始化视频
      // init 方法的参数与 flvjs.createPlayer 相同，并返回 flvjs.player 实例
      const player = flv.init(
        {
          type: "flv",
          url: this.url,
          isLive: true,
        },
        {
          enableStashBuffer: false, // 如果您需要实时（最小延迟）来进行实时流播放，则设置为false
          autoCleanupSourceBuffer: true, // 对SourceBuffer进行自动清理
          stashInitialSize: 128, // 减少首帧显示等待时长,
          reuseRedirectedURL:true,
          fixAudioTimestampGap:false,
        }
      );
      // 直接调用play即可播放
      player.play();
      this.player = player;
    },
    next() {
      console.log("xxxxxxxxx");
      this.url = "http://192.168.10.89:30810/iot/monitor1.flv";
      console.log("销毁断流方法");
      this.player?.pause();
      this.player?.unload();
      this.player?.detachMediaElement();
      this.player?.destroy();
      this.player = null;
      this.show = false;
      this.show = true;
      this.$nextTick(()=> {
        this.init();
      })
    },
  },
};
</script>
<style scoped>
.video {
  width: 800px;
  height: 600px;
  object-fit: fill;
}

.video::-webkit-media-controls-play-button {
  display: none;
}
.video::-webkit-media-controls-current-time-display {
  display: none;
}
.video::-webkit-media-controls-timeline {
  display: none;
}
</style>
