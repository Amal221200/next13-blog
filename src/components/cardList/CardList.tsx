import styles from "./cardList.module.css";
import { getPosts } from "@/utils";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import React from "react";
import { POST_PER_PAGE } from "@/utils/constants";

const CardList: React.FC<CardListProps> = async ({ page, category }) => {
  const { posts, count } = await getPosts(page, category)
  const hasPrev = (POST_PER_PAGE * (page - 1)) > 0
  const hasNext = (POST_PER_PAGE * page) < count

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination hasNext={hasNext} hasPrev={hasPrev} page={page} />
    </div>
  )
}
export default CardList