import classnames from "classnames";
import { useCallback, useMemo } from "react";
import Icon from "components/Icon";
import { setActive } from "features/gallery/gallerySlice";
import { store } from "features/store";

import s from "./navbar.module.scss";

export const Navbar = ({ images, activeImage, className, ...props }) => {
  const disabled = useMemo(() => !Array.isArray(images), [images]);
  const currentIndex = useMemo(() => {
    if (disabled) {
      return;
    }
    return images.findIndex(({ id }) => id === activeImage.id);
  }, [images, activeImage, disabled]);

  const goToNext = useCallback(() => {
    const maxIndex = images.length - 1;

    const newIndex = (maxIndex + currentIndex - 1) % maxIndex;

    const image = images[newIndex];

    store.dispatch(setActive(image.id));
  }, [images, currentIndex]);

  const goToPrev = useCallback(() => {
    const maxIndex = images.length - 1;

    const newIndex = (maxIndex + currentIndex + 1) % maxIndex;

    const image = images[newIndex];

    store.dispatch(setActive(image.id));
  }, [images, currentIndex]);

  return (
    <div {...props} className={classnames(className, s.navcontainer)}>
      <button
        type="button"
        disabled={disabled}
        className={s.button}
        onClick={goToPrev}
      >
        <Icon name="arrow-left" />
      </button>
      <div>{activeImage?.filename}</div>
      <button
        type="button"
        disabled={disabled}
        className={s.button}
        onClick={goToNext}
      >
        <Icon name="arrow-right" />
      </button>
    </div>
  );
};

export default Navbar;
