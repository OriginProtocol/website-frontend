export default class ContributorService {
  async fetchContributor(repositories) {
    const contributorLists = await Promise.all(
      repositories.slice(0, 19).map(async (repository) => {
        const endpoint = `${process.env.NEXT_PUBLIC_GITHUB}/repos/OriginProtocol/${repository}/contributors?per_page=100`;
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${repository} contributors`, err);
        }
        const json = await response.json();
        return json;
      })
    );

    return contributorLists;
  }
}

export const contributorService = new ContributorService();
