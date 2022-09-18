export default class RepositoryService {
  async fetchRepository() {
    const endpoint = `${process.env.NEXT_PUBLIC_GITHUB}/orgs/OriginProtocol/repos?per_page=100`
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories`, err)
    }
    return await response.json()
  }
}

export const repositoryService = new RepositoryService()
