import { Gallery } from "../features/gallery/Gallery";
import withStore from "../features/store";

const App = () => {
  return <Gallery />;
};

export default withStore(App);
