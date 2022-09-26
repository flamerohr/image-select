import classnames from "classnames";
import { useCallback, useMemo } from "react";
import Icon from "components/Icon";
import { setActive } from "features/gallery/gallerySlice";
import s from "./navbar.module.scss";
import { store } from "features/store";

export const Navbar = ({ images, activeImage, className, ...props }) => {
  const currentIndex = useMemo(
    () => images.findIndex(({ id }) => id === activeImage.id),
    [images, activeImage]
  );

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
      <button type="button" className={s.button} onClick={goToPrev}>
        <Icon name="arrow-left" />
      </button>
      <div>{activeImage?.filename}</div>
      <button type="button" className={s.button} onClick={goToNext}>
        <Icon name="arrow-right" />
      </button>
    </div>
  );
};

export default Navbar;
