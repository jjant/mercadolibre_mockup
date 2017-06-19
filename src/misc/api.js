const defaultImage = ""; // TODO: Change later

const api = {
  baseUrl: 'https://api.mercadolibre.com',

  async queryItems(query) {
    const url = `${this.baseUrl}/sites/MLA/search?q=${query}`;

    const response = await fetch(url).then(res => res.json());
    const items = response.results.map(product => ({
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
    }));

    return {
      items,
    };
  },

  async queryItem(itemId) {
    const productUrl = `${this.baseUrl}/items/${itemId}`;
    const productDescriptionUrl = `${productUrl}/description`;

    const product = await fetch(productUrl).then(res => res.json())
    const productDescription = await fetch(productDescriptionUrl).then(res => res.json());

    return {
      item: {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price,
        },
        picture: (product.pictures[0] && product.pictures[0].url) || defaultImage,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description: productDescription.text,
      }
    };
  }
};

//TODO: remove
window.api = api;

export default api;
