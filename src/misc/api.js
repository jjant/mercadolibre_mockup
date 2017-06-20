const defaultImage = ""; // TODO: Change later

const api = {
  baseUrl: 'https://mercadolibre-mockup-api.herokuapp.com',

  async queryItems(query) {
    const url = `${this.baseUrl}/items?q=${query}`;
    const response = await fetch(url).then(res => res.json());
    return response;
  },

  async queryItem(itemId) {
    const productUrl = `${this.baseUrl}/item/${itemId}`;
    const product = await fetch(productUrl).then(res => res.json())
    return product;
  },
};

//TODO: remove
window.api = api;

export default api;
