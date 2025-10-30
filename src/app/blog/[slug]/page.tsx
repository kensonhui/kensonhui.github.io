import { getPostBySlug, posts } from "../posts";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ marginBottom: "0.75rem" }}>
        <Link href="/blog">← Back</Link>
      </div>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
        {post.title}
      </h1>
      <div style={{ color: "#666", marginBottom: "1rem" }}>{post.date}</div>
      <article>
        {post.content
          .trim()
          .split(/\r?\n\s*\r?\n/)
          .map((para, idx) => (
            <p key={idx} style={{ marginBottom: "1rem" }}>
              {para.trim()}
            </p>
          ))}
      </article>
    </main>
  );
}
