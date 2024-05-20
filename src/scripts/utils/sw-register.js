import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker tidak didukung di browsermu');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker telah terdaftar');
  } catch (error) {
    console.log('Gagal daftar service worker', error);
  }
};

export default swRegister;
