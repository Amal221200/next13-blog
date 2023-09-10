import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { capitalizeWord, getCategories } from "../../utils";
import { categoryListBg } from "../../utils/data";

const CategoryList = async () => {
  const categories: CategoryType[] = await getCategories()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          categories.map((category: CategoryType, index: number) => (
            <Link key={index} href={`/blog?category=${category.title}`} style={{ background: categoryListBg[category.title] }} className={`${styles.category}`}>
              {
                category.img && <Image src={category.img} alt="" width={32} height={32} className={styles.image} />
              }
              {capitalizeWord(category.title)}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default CategoryList