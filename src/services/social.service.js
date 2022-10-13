export default class SocialService {
  async fetchSocial() {
    const endpoint = `/social-stats`;
    return fetch(endpoint).then((r) => r.json());
  }
}

export const socialService = new SocialService();
