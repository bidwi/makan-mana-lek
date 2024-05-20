import API_ENDPOINT from '../globals/api-endpoint';

import notyf from '../globals/toast-config';

class TheRestaurantSource {
  static async mainPage() {
    try {
      const response = await fetch(API_ENDPOINT.MAIN_PAGE);
      const responseJson = await response.json();
      return responseJson.restaurants || [];
    } catch (error) {
      notyf.open({
        type: 'error',
        message: '<b>Gagal mendapatkan restoran,&nbsp;coba lagi.</b>',
      });
      throw new Error('Gagal mengambil gambar restoran');
    }
  }

  static async image(pictureId) {
    try {
      const response = await fetch(`${API_ENDPOINT.IMAGE}${pictureId}`);
      const imageData = await response.blob();
      return URL.createObjectURL(imageData);
    } catch (error) {
      notyf.open({
        type: 'error',
        message: '<b>Gagal mendapatkan gambar restoran,&nbsp;coba lagi.</b>',
      });
      throw new Error('Gagal mengambil gambar restoran');
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (error) {
      notyf.open({
        type: 'error',
        message: '<b>Gagal mendapatkan detail restoran,&nbsp;coba lagi.</b>',
      });
      throw new Error('Tidak mampu mendapatkan detail restoran, coba lagi');
    }
  }
}

export default TheRestaurantSource;
