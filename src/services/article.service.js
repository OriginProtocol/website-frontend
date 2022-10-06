export default class ArticleService {
  async fetchArticle(
    page,
    category
  ) {
    const endpoint = `${process.env.NEXT_PUBLIC_CMS}/blog/website`
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(`Failed to fetch articles`, err)
    }
    return await response.json()
  }
}

export const articleService = new ArticleService()
