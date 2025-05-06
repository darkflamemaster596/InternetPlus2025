<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue'
const input = ref('');
const pics = ref<string[]>([]);
//读取/assets/cover中的所有图片
const importAllImages = () => {
    const images = import.meta.glob('@/assets/cover/*.{png,jpg,jpeg,gif,svg}');
    for (let image in images) {
        pics.value.push('.'+image);
    }
};
// 调用函数加载图片
importAllImages();
</script>
<template>
    <!-- 包括一个搜索框以及一个轮播图 -->
    <div class="header">
        <div class="inputBox">
            <el-input
            v-model="input"
            style="width: 40%;height: 50px"
            :suffix-icon="Search"
            placeholder=""
            class="input"
            >
                <template #append ><el-button class="search">搜索</el-button></template>  
            </el-input>
        </div>
        <div class="carouselBox">
            <div class="carousel">
            <el-carousel height="auto" motion-blur>
              <el-carousel-item style="height: auto;" v-for="(pic,index) in pics" :key="index">
                <img :src="pic">
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
    .carousel img{
        width: 100vw;
        height: auto;
        object-fit: cover;
    }
    .header{
        width: 100vw;
    }

</style>