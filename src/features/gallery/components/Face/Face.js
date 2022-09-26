import classnames from "classnames";
import { useMemo } from "react";

import s from "./face.module.scss";

export const Face = ({
  active,
  className,
  xmin,
  xmax,
  ymin,
  ymax,
  ...props
}) => {
  const styles = useMemo(
    () => ({
      top: `${Math.round(ymin * 10000) / 100}%`,
      bottom: `${Math.round(ymax * 10000) / 100}%`,
      left: `${Math.round(xmin * 10000) / 100}%`,
      right: `${Math.round(xmax * 10000) / 100}%`,
    }),
    [xmin, xmax, ymin, ymax]
  );

  return (
    <div {...props} className={classnames(s.face, className)} style={styles} />
  );
};

export default Face;
