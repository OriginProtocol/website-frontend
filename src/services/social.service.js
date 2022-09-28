export default class SocialService {
  async fetchSocial() {
    const endpoint = `${process.env.NEXT_PUBLIC_STATS_ENDPOINT_LOCAL}/social-stats`
    const response = await fetch(endpoint, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          referrerPolicy: 'no-referrer',
    }).then((r) => r.json())
    return response
  }
}

export const socialService = new SocialService()
