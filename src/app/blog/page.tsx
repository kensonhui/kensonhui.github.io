import Link from "next/link";
import { posts } from "./posts";

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: 800,
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <div style={{ marginBottom: "0.75rem" }}>
        <Link href="/">← Back</Link>
      </div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Blog</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {sorted.map((post) => (
          <li key={post.slug} style={{ marginBottom: "0.75rem" }}>
            <Link href={`/blog/${post.slug}`}>
              {post.title} <span style={{ color: "#666" }}>— {post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
