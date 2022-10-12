import { Store } from "pullstate";

const StatStore = new Store({
  apy: {},
  ogv: 0,
  price: {
    ogn: 0,
    ogv: 0,
  },
  circulatingSupply: {
    ogn: 0,
    ogv: 0,
  },
  totalSupply: {
    ogn: 0,
    ogv: 0,
  },
});

export default StatStore;
