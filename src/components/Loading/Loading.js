// TODO: using png instead of svg because svg wasn't displaying
import circlePng from "./circle.png";
import s from "./loading.module.scss";

export const Loading = () => {
  return <img src={circlePng} className={s.spinning} alt="" />;
};

export default Loading;
