<script setup lang="ts">
import { ref,onMounted,onUnmounted,nextTick } from 'vue';
import { Search } from '@element-plus/icons-vue'
const input = ref('');
const pics = ref<string[]>([]);
const item = ref<HTMLElement[] | null>(null);
const imgHeight = ref('');
//读取/assets/cover中的所有图片
const importAllImages = () => {
    const images = import.meta.glob('@/assets/cover/*.{png,jpg,jpeg,gif,svg}',{as:'url'});
    for (let image in images) {
        images[image]().then((res)=>{
            console.log(res)
            pics.value.push(res)
        })
    }
};
// 调用函数加载图片
importAllImages();
// 调整轮播图高度
const imgLoad = () => {
    nextTick(() => {
        setTimeout(()=>{
            console.log('重新加载轮播图高度')
            if (pics.value.length) {
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
    <!-- 包括一个搜索框以及一个轮播图 -->
    <div class="header">
        <div class="inputBox">
            <el-input
            v-model="input"
            style="width: 55%;height: clamp(30px, 2vw, 50px)"
            :suffix-icon="Search"
            placeholder=""
            class="input"
            >
                <template #append ><el-button class="search"><span style="font-size: clamp(14px, 2vw, 20px);line-height: 100%;">搜索</span></el-button></template>  
            </el-input>
        </div>
        <div class="carouselBox">
            <div class="carousel">
            <el-carousel 
            :height="imgHeight" 
            :autoplay="true">
              <el-carousel-item style="height: auto;" v-for="(pic,index) in pics" :key="index">
                <img :src="pic" style="width: 100%;object-fit: cover;height: auto;" ref="item">
              </el-carousel-item>
            </el-carousel>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .input{
        border-style: solid;
        border-width: 2px;
        border-radius: 5px;
        border-color:var(--base-red);
        margin: 0 auto;
    }
    .inputBox{
        display: flex;
        justify-content: center;
        margin-top:20px
    }
    .carouselBox{
        margin-top: 20px;
        text-align: center; /* 父容器水平居中 */
    }
    .carousel{
        height: auto;
        max-height: auto;
    }
    .carouse img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .header{
        width: 100%;
    }

</style>