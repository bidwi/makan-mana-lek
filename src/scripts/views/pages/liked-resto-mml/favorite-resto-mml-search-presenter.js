class FavoriteRestoMmlSearchPresenter {
  constructor({ favoriteRestoMmls, tengok }) {
    this._favoriteRestoMmls = favoriteRestoMmls;
    this._tengok = tengok;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._tengok.runWhenUserIsSearching((latestQuery) => {
      this._searchRestoMmls(latestQuery);
    });
  }

  async _searchRestoMmls(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestoMmls;
    if (this.latestQuery.length > 0) {
      foundRestoMmls = await this._favoriteRestoMmls.searchRestoMmls(
        this.latestQuery
      );
    } else {
      foundRestoMmls = await this._favoriteRestoMmls.getAllRestoMml();
    }

    this._showFoundRestoMmls(foundRestoMmls);
  }

  _showFoundRestoMmls(restaurants) {
    this._tengok.showFavoriteRestoMmls(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoMmlSearchPresenter;
