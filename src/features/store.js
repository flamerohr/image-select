import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Provider } from "react-redux";
import galleryReducer from "./gallery/gallerySlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    gallery: galleryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// optional, could remove
setupListeners(store.dispatch);

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
