<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue'

const route = useRoute();
const articleId = ref(route.params.id);
const pdfPath = ref("");
function importArticel() {
    import(`@/assets/documents/${articleId.value}.pdf`).then((pdf) => {
        pdfPath.value = pdf.default
    }).catch((e) => {
        console.log(e);
    });
}
importArticel();
watch(() => route.params.id, (newArticleId) => {
    articleId.value = newArticleId;
    importArticel();
});
</script>

<template>
    <div class="article-detail">
        <h3>{{ $route.params.id }}</h3>
        <div>
            <embed :src="pdfPath" type="application/pdf" width="100%" height="900px">
        </div>
    </div>
</template>

<style scoped>
.article-detail {
    width: 100%;
}
</style>
