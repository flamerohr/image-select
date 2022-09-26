import { useMemo } from "react";
import classnames from "classnames";
import arrow from "./arrow.svg";

import s from "./icon.module.scss";

export const Icon = ({ name, className, ...props }) => {
  const [url, iconClass] = useMemo(() => {
    switch (name) {
      case "arrow-left":
        return [arrow];
      case "arrow-right":
        return [arrow, s.hFlipped];
      default:
        console.error(`Unable to find icon: '${name}'`);
        return [null];
    }
  }, [name]);

  return (
    url && (
      <img
        {...props}
        className={classnames(iconClass, className)}
        src={url}
        alt=""
      />
    )
  );
};

export default Icon;
