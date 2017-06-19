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
      location: product.address.city_name,
    }));

    return {
      items,
    };
  },

  async queryItem(itemId) {
    const productUrl = `${this.baseUrl}/items/${itemId}`;
    const descriptionUrl = `${productUrl}/description`;

    const product = await fetch(productUrl).then(res => res.json())
    const description = await fetch(descriptionUrl).then(res => res.json());
    const categories = await this._queryCategories(product.category_id);

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
        description: {
          html: description.text,
          plain_text: description.plain_text,
        },
        categories,
      }
    };
  },

  async _queryCategories(categoryId) {
    const categoriesUrl = `${this.baseUrl}/categories/${categoryId}`;

    const category = await fetch(categoriesUrl).then(res => res.json());
    const categories = category.path_from_root;

    return categories;
  }
};

//TODO: remove
window.api = api;

export default api;
