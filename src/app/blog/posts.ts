export type BlogPost = {
  date: string;
  title: string;
  content: string;
  slug: string;
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const rawPosts: Array<Omit<BlogPost, "slug">> = [
  {
    date: "2025-10-30",
    title: "On Energy",
    content: `
    The most important resource you have is enthusiasm. 
    It's what makes you help others feel a sparkle. 
    
    My friend Eden came back from SF today to Toronto, and he dragged me alongside his girlfriend to eat food with his Dad.
    One thing that really stood out to me was how uch energy he displayed to his dad. He gave so much energy and enthusaism despite his girlfriend and I sitting there awkwardly in silence.
    It made me reflect on how little energy in comparison I show to my own family. It's these small moments of joy that really make your parents happy.

    I also think about how I feel when other people being so energic upon seeing me. It's a shoot of dopamine that says I'm important to them.
    It's also so crutial in terms of teamwork to being able to start off with energy. Even if you have all the respect in the world, you cannot get people amped up about something without you yourself feeling that same energy.
    In a sense, leadership is not only about steering the ship, but being the first to blow into the sails until the winds take over.
    `,
  },
];

export const posts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
