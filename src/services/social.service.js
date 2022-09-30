export default class SocialService {
  async fetchSocial() {
    const endpoint = `/api/social-stats`
    return fetch(endpoint).then((r) => r.json())
  }
}

export const socialService = new SocialService()
