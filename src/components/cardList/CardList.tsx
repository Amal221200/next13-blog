import styles from "./cardList.module.css";
import { getPosts } from "@/utils";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import React from "react";
import { POST_PER_PAGE } from "@/utils/data";

const CardList: React.FC<CardList> = async ({ page }) => {
  const { posts, count } = await getPosts(page)
  const hasPrev = (POST_PER_PAGE * (page - 1)) > 0
  const hasNext = (POST_PER_PAGE * (page - 1)) < count

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}
export default CardList