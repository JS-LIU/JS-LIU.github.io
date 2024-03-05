import { defineComponent } from 'vue';
import useArticleList from "@/hooks/useArticleList";
import { RouterLink } from 'vue-router'

export const ArticleList = defineComponent((props) => {
    const { articleList, updateArticleList } = useArticleList();
    updateArticleList({
        pageNumber: 0,
        pageSize: 100
    });
    return () => {
        return articleList.value.map((article) => {
            let filename = article.replace(/\.pdf$/, '')
            let path = `/article/${filename}`;
            return <div style={{display:"flex",flexDirection:"column"}}>
                <RouterLink key={article} to={path}>{article}</RouterLink>
            </div>
        })
    }
});