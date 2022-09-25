import { useSelector } from "react-redux";
import { getActive } from "./gallerySelectors";

export const Gallery = () => {
  const active = useSelector(getActive);

  return "gallery placeholder";
};
