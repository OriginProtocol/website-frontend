export default class TotalSupplyService {
  async fetchTotalSupply() {
    const coins = ['ogn', 'ogv']
    const response = await Promise.all(
      coins.map(async (coin) => {
        const endpoint = `${process.env.NEXT_PUBLIC_STATS_ENDPOINT_LOCAL}/total-${coin}`
        return fetch(endpoint, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          referrerPolicy: 'no-referrer',
      }).then((r) => r.json())
    })
    )
    return response
  }
}

export const totalSupplyService = new TotalSupplyService()
