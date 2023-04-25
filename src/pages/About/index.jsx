import classNames from "classnames/bind";

import styles from "./About.module.scss";

const cx = classNames.bind(styles);

function About() {
  return <h1 className={cx("text-color")}>About</h1>;
}

export default About;
