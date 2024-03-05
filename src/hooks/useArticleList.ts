import { ref, type Ref } from "vue";
import file_names from '@/mock/file_names.json'
interface Ipage {
    pageNumber: number,
    pageSize: number
}
/**
 * @param page 
 * @returns 
 */
function useArticleList() {
    const articleList: Ref<string[]> = ref([]);
    const updateArticleList = async function (page: Ipage) {
        const list = await getList(page);
        articleList.value = list;
    }
    return {
        articleList,
        updateArticleList,
    }

}

async function getList(page: Ipage) {
    const { pageNumber, pageSize } = page
    const files = await file_names.files;
    const start = pageNumber * pageSize;
    const result = files.slice(start, start + pageSize);
    return result;
}
export default useArticleList;