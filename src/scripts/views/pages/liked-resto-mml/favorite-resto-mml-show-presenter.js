class FavoriteRestoMmlShowPresenter {
  constructor({ tengok, favoriteRestoMmls }) {
    this._tengok = tengok;
    this._favoriteRestoMmls = favoriteRestoMmls;
    this._showFavoriteRestoMmls();
  }

  async _showFavoriteRestoMmls() {
    const restaurants = await this._favoriteRestoMmls.getAllRestoMml();
    this._displayRestoMmls(restaurants);
  }

  _displayRestoMmls(restaurants) {
    this._tengok.showFavoriteRestoMmls(restaurants);
  }
}

export default FavoriteRestoMmlShowPresenter;
