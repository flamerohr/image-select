import { useSelector } from "react-redux";
import classnames from "classnames";
import { getActive } from "./gallerySelectors";

import s from './gallery.module.scss';

export const Gallery = ({ className, ...props }) => {
  const active = useSelector(getActive);

  return <div {...props} className={classnames(className, s.container)}>
    Active: {active}
  </div>;
};

export default Gallery;
