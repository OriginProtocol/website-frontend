export default class RepositoryService {
  async fetchRepository() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GITHUB}/orgs/OriginProtocol/repos?per_page=100`);
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories`, err);
    }
    return await response.json();
  }
}

export const repositoryService = new RepositoryService();
