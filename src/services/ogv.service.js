export default class OgvService {
  async fetchOgv() {
    const endpoint = `${process.env.NEXT_PUBLIC_STATS_ENDPOINT_LOCAL}/total-ogv`
    const response = await fetch(endpoint, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch total OGV supply`, err)
    }
    return response.json()
  }
}

export const ogvService = new OgvService()
