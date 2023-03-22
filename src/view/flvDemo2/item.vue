<template>
  <div class="flv_time">
    <!-- <div class="flv_title">{{title}}</div> -->
    <video ref="my-video" style="width:100%;height:100%" :id="'dplayer'+this.num" controls autoplay muted></video>
  </div>
</template>

<script>
import flvjs from "flv.js";
export default {
  props: ["videoUrl", "num", "title"],
  data() {
    return {
      flvPlayer: null,
      lastDecodedFrame:0,
    //   title:'flv',
    //   videoUrl:'http://192.168.10.120:30810/iot/monitor1.flv',
    //   num:1
    };
  },
  watch: {

  },
  mounted() {
    this.startPlay();
  },
  beforeDestroy() {
    this.destoryVideo();
  },
  methods: {
    startPlay() {
      //   console.log(this.videoUrl, "路径");
      if (flvjs.isSupported()) {
        // ->注意：这里的定时器，在中断视频时，要清理哦
        const videoElement = document.getElementById("dplayer" + this.num);
        this.flvPlayer = flvjs.createPlayer(
          {
            type: "flv", //指定视频类型
            isLive: true, // 开启直播
            hasAudio: false, // 关闭声音
            url: this.videoUrl // 指定流链接
          },
          {
            autoCleanupSourceBuffer: true, //对SourceBuffer进行自动清理缓存
            autoCleanupMaxBackwardDuration: 120, //    当向后缓冲区持续时间超过此值（以秒为单位）时，请对SourceBuffer进行自动清理
            autoCleanupMinBackwardDuration: 60, //指示进行自动清除时为反向缓冲区保留的持续时间（以秒为单位）。
            enableStashBuffer: false, //关闭IO隐藏缓冲区
            reuseRedirectedURL: true, //重用301/302重定向url，用于随后的请求，如查找、重新连接等。
            stashInitialSize: 128
          }
        );
        this.flvPlayer.attachMediaElement(videoElement);
        // 非空判断是否执行流
        if (this.videoUrl !== "" && this.videoUrl !== null) {
          this.flvPlayer.load();
          this.flvPlayer.play();
        }
        // 视频流延迟
         setInterval(() => {
          if (!this.flvPlayer) return;
          if (this.flvPlayer.buffered.length) {
            let end = this.flvPlayer.buffered.end(0); //获取当前buffered值
            let diff = end - this.flvPlayer.currentTime; //获取buffered与currentTime的差值
            if (diff >= 4) {
              console.log("处理延迟");
              //如果差值大于等于4 手动跳帧 这里可根据自身需求来定
              this.flvPlayer.currentTime = this.flvPlayer.buffered.end(0) - 1.5; //手动跳帧
            }
          }
        }, 2000); //2000毫秒执行一次
        // 断流重连
        this.flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {
          // alert("网络波动,正在尝试连接中...");
          console.log("网络波动,正在尝试连接中...", this.flvPlayer, "视频状态");
          if (this.flvPlayer) {
            this.reloadVideo(this.flvPlayer);
          }
          // 断流销毁掉视频  方案2
          if (errType == "NetworkError") {
            console.log('销毁掉视频');
            this.destoryVideo();
          }
          // errType是 NetworkError时，对应errDetail有：Exception、HttpStatusCodeInvalid、ConnectingTimeout、EarlyEof、UnrecoverableEarlyEof
          // errType是 MediaError时，对应errDetail是MediaMSEError   或MEDIA_SOURCE_ENDED
        });
       // 画面卡死
      this.flvPlayer.on("statistics_info", function (res) {
       if (this.lastDecodedFrame == 0) {
         this.lastDecodedFrame = res.decodedFrames;
         return;
       }
       if (this.lastDecodedFrame != res.decodedFrames) {
         this.lastDecodedFrame = res.decodedFrames;
       } else {
           this.lastDecodedFrame = 0;
           if (this.flvPlayer) {
            this.reloadVideo(this.flvPlayer);
          }
       }
     });
      } else {
        console.log("flvjs不支持");
      }
    },

    // 执行销毁 后在创建
    reloadVideo(flvPlayer) {
      this.destoryVideo(flvPlayer);
      this.startPlay();
    },
    destoryVideo(flvPlayer) {
      this.flvPlayer.pause();
      this.flvPlayer.unload();
      this.flvPlayer.detachMediaElement();
      this.flvPlayer.destroy();
      this.flvPlayer = null;
    }
  }
};
</script>
<style>
.flv_time{
    width: 400px;
    height: 400px;
}
</style>

