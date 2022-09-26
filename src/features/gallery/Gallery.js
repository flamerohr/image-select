import { useSelector } from "react-redux";
import classnames from "classnames";
import Loading from "components/Loading";
import { useImagesQuery } from "features/apiSliceMock";
import { getActive } from "./gallerySelectors";

import s from "./gallery.module.scss";
import { useMemo } from "react";
import { Image } from "./components/Image";
import Navbar from "./components/Navbar";

export const Gallery = ({ className, ...props }) => {
  const { data: images, isLoading } = useImagesQuery();
  const active = useSelector(getActive);

  const activeImage = useMemo(() => {
    if (!active) {
      return images[0];
    }

    const image = images.find(({ id }) => id === active);

    return image;
  }, [images, active]);

  return (
    <div {...props} className={classnames(className, s.container)}>
      {isLoading && <Loading />}

      {<Image {...activeImage} className={s.image} />}

      {<Navbar images={images} activeImage={activeImage} className={s.navbar} />}
    </div>
  );
};

export default Gallery;
