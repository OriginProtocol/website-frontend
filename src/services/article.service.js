export default class ArticleService {
  async fetchArticle(
    page,
    category
  ) {
    const endpoint = `${process.env.NEXT_PUBLIC_CMS}/articles?pagination[pageSize]=9&pagination[page]=${page}${category ? `&populate[0]=category&filters[$and][0][category][name][$eq]=${category}` : ''}`
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(`Failed to fetch articles`, err)
    }
    return await response.json()
  }
}

export const articleService = new ArticleService()
