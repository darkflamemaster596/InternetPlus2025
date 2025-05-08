<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
const pics = ref<string[]>([]);
//读取/assets/cover中的所有图片
const importAllImages = () => {
    const images = import.meta.glob('@/assets/work/*.{png,jpg,jpeg,gif,svg}');
    for (let image in images) {
        pics.value.push('.'+image);
    }
};
// 调用函数加载图片
importAllImages();
</script>
<template>
    <div class="container">
        <div class="outerBox">
            <div class="innerBox">
                <!-- 使用 el-image 并启用懒加载 -->
                <el-image
                    v-for="(pic, index) in pics"
                    :key="index"
                    :src="pic"
                    class="img"
                    lazy
                    fit="cover"
                    :preview-src-list="pics" 
                    style="width: 20%;object-fit: cover;height: auto;"
                ></el-image>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .outerBox{
        background-color: var(--base-red);
        padding: clamp(20px, 2vw, 40px);
        border-radius: 5px;
    }
    .container{
        width: 90%;
        height: auto;
        margin: 20px auto;
        
    }
    .innerBox{
        border-radius: 10px;
        border-color: var(--base-gold);
        border-style: solid;
        border-width: 5px;
        display: flex;
        flex-wrap: wrap;
        padding: 1%;
    }
</style>