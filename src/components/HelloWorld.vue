<template>
    <div class="container">
        <div class="demo">      
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions"
                          customEventName="customstatechangedeventname">
            </video-player>
        </div>
 </div>
</template>
<script>

    export default {
        data() {
            return {
                playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始播放。
                    autoplay: true, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: true, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     sourceOrder: true,
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                    techOrder: ['flash', 'html5'],//设置顺序，
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    flash:{hls:{withCredentials:false}},//可以使用rtmp视频
                    html5:{hls:{withCredentials:false}},//可以使用m3u8视频
                    sources: [
                      {
                        type: 'rtmp/flv',
                        src: "rtmp://58.200.131.2:1935/livetv/hunantv"
                      },
                      {
                        type: "video/mp4",
					              src: "https://ksv-video-publish.cdn.bcebos.com/af0bcb5a78da6604ad0eb758beb1a54245e92a95.mp4?auth_key=1575286570-0-0-6d9f7adf8ebd75432ae94f5d6dcd8587" //你的m3u8地址（必填
                      }
                    ],
                    //你的封面地址
                    poster: '', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }
            }
        }
    }
</script>
<style scoped>
  .container{
    /* display: flex; */
    
  }
  .demo{
   
   width: 100%;
    text-align: center;
    border: 1px solid transparent; 
    background: black; 
     
  }
</style>

        
    