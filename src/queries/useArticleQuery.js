import { useQuery } from "react-query";

import { QUERY_KEYS } from "constants/queryKeys";

import { articleService } from "../services/article.service";

const useArticleQuery = (page, category, options) => {
  return useQuery(
    QUERY_KEYS.Article(page, category),
    () => articleService.fetchArticle(page, category),
    {
      keepPreviousData: true,
      ...options,
    }
  );
};

export default useArticleQuery;
