export default class CirculatingSupplyService {
  async fetchCirculatingSupply() {
    const coins = ["ogn", "ogv"];
    const response = await Promise.all(
      coins.map(async (coin) => {
        // Legacy API
        const endpoint = `/circulating-${coin}`;
        return fetch(endpoint).then((r) => r.json());
      })
    );
    return response;
  }
}

export const circulatingSupplyService = new CirculatingSupplyService();
