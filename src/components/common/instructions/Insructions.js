import Button_w140_w383_Link from "../Button w140-OR-w383 Link";
import Line from "../Line/Line";
import Movies from "../Movies";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./style.module.css";

export default function Instructions() {
  return (
    <>
      <Movies />
      <Title
        title="
    The standard Lorem Ipsum passage, used since the 1500
    
    "
      />
      <Line />
      <div className={styles.text}>
        <Text Text=" The standard Lorem Ipsum passage, used since the 1500 Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque. Mauris nisi volutpat amet et. Id pretium urna tempor, augue lectus sit faucibus. Consequat ultricies lectus et est, semper vitae, varius lobortis " />
      </div>
      <Button_w140_w383_Link text="next" href="SetCameraFace" />
    </>
  );
}
