<script setup lang="ts">
import { ArticleList } from '@/components/ArticleList';
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="wrapper">
        <nav>
            <ArticleList />
        </nav>
        <div class="article">
            <RouterView />
        </div>
        
    </div>
</template>

<style scoped>
.wrapper{
    display:flex;
    justify-content: space-between;
}
.article{
    display:flex;
    flex-grow: 1;
}
</style>
