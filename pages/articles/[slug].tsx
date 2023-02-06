import { getArticles, getArticleBySlug } from "../../lib/newt"
import styles from "@/styles/Home.module.css"
import type { Article } from "../../types/article"

export default function Article({ article }: { article: Article }) {
  return (
    <main className={styles.main}>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  )
}

export const getStaticPaths = async () => {
  const articles = await getArticles()
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  return {
    props: {
      article,
    },
  }
}
