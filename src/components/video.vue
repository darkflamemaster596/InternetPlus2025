<script setup lang="ts">
import {ref,onMounted,onUnmounted, nextTick} from 'vue'
import { ElCarousel } from 'element-plus';
// 接收父组件传递的 activePage
let props = defineProps(['activePage']);
class Item {
    cover:string;
    tag: string; 
    describe: string; 

    constructor(cover:string,tag: string, describe: string) {
        this.cover=cover;
        this.tag = tag; 
        this.describe = describe; 
    }
}
let videos = ref<Item[]>([]);
videos.value.push(new Item('','【技艺传承】','汴彩技艺2——合褶造型'))
videos.value.push(new Item('','【非遗体验】','“张”灯结彩传古韵，灯火璀璨耀百年'))
videos.value.push(new Item('','【非遗体验】','一盏灯笼，点燃千年汴梁梦'))
videos.value.push(new Item('','【技艺传承】','汴彩技艺4——整理装饰'))
videos.value.push(new Item('','【工匠精神】','开封汴京灯笼张，百年传承，只为一盏灯'))
//读取/assets/cover中的所有图片
const importAllImages = async () => {
    const images = import.meta.glob('@/assets/video/*.{png,jpg,jpeg,gif,svg}',{as:'url'});
    let count = 0;
    for (let cover in images) {
        images[cover]().then((res)=>{
            videos.value[count].cover=res;
            count++;
        })
    }
};
importAllImages();
// 定义轮播图高度
let imgHeight = ref<string>('');
let item = ref<HTMLElement[] | null>(null);

// 调整轮播图高度
const imgLoad = () => {
    nextTick(() => {
        setTimeout(()=>{
            console.log('重新加载轮播图高度')
            if (videos.value.length) {
                if(item.value){
                    let maxHeight = item.value[0].offsetHeight;
                    for(let i in item.value){
                        maxHeight=Math.max(item.value[i].offsetHeight,maxHeight);
                    }
                    console.log(maxHeight);
                    imgHeight.value=maxHeight+'px';
                }
            }
        },200);
    });
};

// 监听窗口大小变化
onMounted(() => {
    imgLoad();
    window.addEventListener('resize', imgLoad);
});
onUnmounted(() => {
    window.removeEventListener('resize', imgLoad); // 移除监听器
});
</script>
<template>
    <div class="container">
        <div class="title">
            <span>教育视频</span>
            <span>Education Video</span>
        </div>
        <div class="content">
            <el-carousel 
            :interval="4000" 
            type="card" 
            :height="imgHeight" 
            class="carousel" 
            :autoplay="false" 
            arrow="always" 
            indicator-position="outside"
            ref="carousel"
            >
                <el-carousel-item v-for="(video,index) in videos" style="height: auto;" :key="index" >
                    <div class="item" ref="item">
                        <div class="img" ><img :src="video.cover" alt=""></div>
                        <div class="tag">{{ video.tag }}</div>
                        <br>
                        <div class="describe">{{ video.describe }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<style scoped>
@import url("https://fontsapi.zeoseven.com/491/main/result.css");
    .container{
        width: 100%;
        height: auto;
    }
    .title{
        width: 30%;
        padding-right: 70%;
    }
    .title > span{
        display: block;
        text-align: center;
        font-family: "平方赖江湖飞扬体";
        font-size: var(--font-size-large);
    }
    .content{
        width: clamp(40%,70%,80%);
        margin: 0 auto;
        margin-bottom: 20px;
        height: auto;
        min-height: 400px;
    }
    .itemBox{
        width: 100%;
        height: auto;
    }
    .item{
        width: 60%;
        background-color: var(--base-grey);
        margin: 0 auto;
    }
    .img{
        height: auto;
    }
    .item  img{
        width: 100%;
        object-fit: cover;
    }
    .tag{
        font-size: var(--font-size-large);
        text-align: center;
    }
    .describe{
        height: 50px;
        display: block;
        width: 100%;
        font-size: var(--font-size-nromal);
        text-align: center;
        
    }
</style>