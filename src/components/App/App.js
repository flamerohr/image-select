import { Gallery } from "features/gallery";
import withStore from "features/store";

import s from './app.module.scss';

const App = () => {
  return <Gallery className={s.gallery} />;
};

export default withStore(App);
