import Link from "next/link"
import styles from "@/styles/Home.module.css"
import type { Article } from "../types/article"
import { getArticles } from "../lib/newt"

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <main className={styles.main}>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article._id}>
              <Link href={`articles/${article.slug}`}>{article.title}</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()
  return {
    props: {
      articles,
    },
  }
}
