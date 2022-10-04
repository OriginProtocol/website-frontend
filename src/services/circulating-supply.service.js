export default class CirculatingSupplyService {
  async fetchCirculatingSupply() {
    const coins = ['ogn', 'ogv']
    const response = await Promise.all(
      coins.map(async (coin) => {
        const endpoint = `/api/circulating-${coin}`
        return fetch(endpoint).then((r) => r.json())
    })
    )
    return response
  }
}

export const circulatingSupplyService = new CirculatingSupplyService()
