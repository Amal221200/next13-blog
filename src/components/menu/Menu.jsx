import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import { capitalize as capitalizeWord } from "../../../lib";
import { backgroundColors } from "../../../lib/data";
import MenuPost from "../menuPost/MenuPost";

const Menu = () => {
  return (
    <div className={styles.container}>
      <>
        {/* Most Popular */}
        <h6 className={styles.subtitle}>{"What's hot"}</h6>
        <h3 className={styles.title}>Most Popular</h3>
        {
          ['travel', 'culture', 'coding', 'fashion'].map((elem) => (
            <MenuPost key={elem} category={elem} />
          ))
        }
      </>
      <>
        {/* Categories */}
        <h6 className={styles.subtitle}>Discover by topic</h6>
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.categories}>
          {
            Object.keys(backgroundColors).map((category, index) => (
              <Link key={index} href={`/blog?category=${category}`} style={{ background: backgroundColors[category] }} className={`${styles.category}`}>
                {capitalizeWord(category)}
              </Link>
            ))
          }
        </div>
      </>
      <>
        {/* Editors Pick */}
        <h6 className={styles.subtitle}>Chosen by the editors</h6>
        <h3 className={styles.title}>Editors Pick</h3>
        <div className={styles.items}>
          {
            ['travel', 'culture', 'food', 'fashion'].map((elem) => (
              <MenuPost key={elem} withImage category={elem} />
            ))
          }
        </div>
      </>
    </div>
  )
}
export default Menu