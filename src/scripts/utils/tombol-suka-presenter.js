import {
  createTombolSuka,
  createTombolSudahSuka,
} from '../views/templates/generate-template';

const TombolSukaPresenter = {
  async init({ tombolSukaContainer, favoriteRestoMmls, restaurant }) {
    this._tombolSukaContainer = tombolSukaContainer;
    this._restaurant = restaurant;
    this._favoriteRestoMmls = favoriteRestoMmls;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoMmlExist(id)) {
      this._renderSudahSuka();
    } else {
      this._renderSuka();
    }
  },

  async _isRestoMmlExist(id) {
    const restaurant = await this._favoriteRestoMmls.getRestoMml(id);
    return !!restaurant;
  },

  _renderSuka() {
    this._tombolSukaContainer.innerHTML = createTombolSuka();

    const sukaButton = document.querySelector('#sukaButton');
    sukaButton.addEventListener('click', async () => {
      await this._favoriteRestoMmls.putRestoMml(this._restaurant);
      this._renderButton();
    });
  },

  _renderSudahSuka() {
    this._tombolSukaContainer.innerHTML = createTombolSudahSuka();

    const sukaButton = document.querySelector('#sukaButton');
    sukaButton.addEventListener('click', async () => {
      await this._favoriteRestoMmls.deleteRestoMml(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default TombolSukaPresenter;
