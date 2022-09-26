import { useSelector } from "react-redux";
import classnames from "classnames";
import Loading from "components/Loading";
import { useImagesQuery } from "features/apiSliceMock";
import { getActive } from "./gallerySelectors";

import s from "./gallery.module.scss";
import { useMemo } from "react";

export const Gallery = ({ className, ...props }) => {
  const { data: images, isLoading } = useImagesQuery();
  const active = useSelector(getActive);

  const activeImage = useMemo(() => null, [images, active]);

  return (
    <div {...props} className={classnames(className, s.container)}>
      {isLoading && <Loading />}

      {activeImage && <img src={activeImage.url} alt={activeImage.filename} />}
    </div>
  );
};

export default Gallery;
