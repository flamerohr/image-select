import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {},
});

export const withStore = (Component) => {
  const StoreProvider = () => {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
  return StoreProvider;
};

export default withStore;
