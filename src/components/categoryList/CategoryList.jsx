import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { capitalize as capitalizeWord } from "../../utils";
import { categoryList } from "../../utils/data";



const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          categoryList.map((category, index) => (
            <Link key={index} href={`/blog?category=${category.name}`} style={{background: category.bg}} className={`${styles.category} ${styles[category.name]}`}>
              <Image src={category.img} alt="" width={32} height={32} className={styles.image} />
              {capitalizeWord(category.name)}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default CategoryList