// import { defineComponent } from "vue";

// export default defineComponent({
//   name: "HayVideo",
//   setup() {},
//   render() {
//     return <div>test</div>;
//   },
// });

import type { Ref } from "vue";
import { nextTick, defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import "video.js/dist/video-js.css";
import type { VideoJsPlayer } from "video.js";
import videojs from "video.js";
import "videojs-contrib-hls";

export default defineComponent({
  name: "HayVideo",
  props: {
    // 'http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/48c8a9475285890781000441992/playlist.m3u8' // 测试讲义
    // 'https://www.2021lllllll.com/vid888/202011/26/5fbf177306f73a1d14777b65/3f92db/index.m3u8' // 测试片子
    src: { type: String, default: null },
    autoplay: { type: Boolean, default: true },
  },
  setup(props, { emit }) {
    const videoPlayer: Ref<VideoJsPlayer | null> = ref(null);

    const initVideo = () => {
      disposeVideo();
      nextTick(() => {
        videoPlayer.value = videojs("videoPop", {
          autoplay: true,
          preload: "auto",
        }, function onPlayerReady() {
          props.autoplay && this.play();
          this.on("error", function(e) {
            emit("error", e);
          });
        });
      });
    };
    const disposeVideo = () => {
      videoPlayer.value && videoPlayer.value.dispose();
    };

    watch(() => props.src, (val) => {
      videoPlayer.value && videoPlayer.value.src(val);
    });
    onMounted(() => {
      initVideo();
    });
    onBeforeUnmount(() => {
      disposeVideo();
    });
  },
  render() {
    return <div class="hay-video">
      <video
        id="videoPop"
        muted
        style="width: 100%; height: 100%; object-fit: cover;"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        preload="auto"
        data-setup="{}">
        <source src={this.src} type="application/x-mpegURL" class="src" />
      </video>
    </div>;
  },
});
