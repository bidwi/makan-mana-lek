import MainPage from '../views/pages/main-page';
import Faq from '../views/pages/faq';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': MainPage,
  '/main-page': MainPage,
  '/faq': Faq,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
