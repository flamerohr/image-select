import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import Faces from "../Faces";

import s from "./image.module.scss";

export const Image = ({ filename, url, id, className, ...props }) => {
  const [imageDimensions, setImageDimensions] = useState({});
  const imageRef = useRef();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height, width } = entry.target.getBoundingClientRect();

        setImageDimensions({ height, width });
      }
    });
    let mounted = true;

    // TODO: harden this timeout later
    setTimeout(() => {
      if (mounted) {
        observer.observe(imageRef.current);
      }
    }, 50);

    return () => {
      observer.disconnect();
      mounted = false;
    };
  }, []);

  if (!filename || !url) {
    return "No image found";
  }

  return (
    <>
      <img
        ref={imageRef}
        className={s.image}
        {...props}
        src={url}
        alt={filename}
      />
      <div
        className={classnames(s.container, className)}
        style={imageDimensions}
      >
        <Faces imageId={id} />
      </div>
    </>
  );
};

export default Image;
