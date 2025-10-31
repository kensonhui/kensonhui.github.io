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
    date: "2025-10-31",
    title: "On Sacrifice",
    content: `
    You can have everything you want, just not all at once.

    Ever since starting this journey building my startup. I knew I had to make sacrifices. I had to sacrifice stability. My full-time return offer at Nokia would've been so comfortable, and cushy. I would've been able to move out, be on track for my financial goals, and have a clear pathway to building my ML skills.

    I've had to sacrifice time with my friends. Instead of hanging out with them, carving pumpkins, going clubbing, taking salsa classes, I've spent all my time at home working.

    Today I told my mom that I couldn't go with her and our family to Hong Kong. It was a family trip we had been planning for a while. I hadn't thought I'd be working on a startup at this time. 

    It's brutal to say no to important events of the people I cherish most, yet, I haven't felt a strong sense of regret. At the end of the day I wanted to try this flavour of life. It's a huge contrast of how I've lived my life in the past. I've always prioritized work-life balance, having a strong social life, but at some point you wonder what it's like on the other side.

    That's really why I'm here, the reason I try out new things all the time, is to experience all the colours of life. 
    
    As painful as it is to sacrifice all these valuable components of my life, I wouldn't want it any other way. If I wasn't all in, I'd lose the chance to say I really put everything into building something for myself. I know losing that would be one of the biggest regrets of my life.
    
    `,
  },
  {
    date: "2025-10-30",
    title: "On Energy",
    content: `
    The most important resource you have is enthusiasm. 
    It's what makes you help others feel a sparkle. 
    
    My friend Eden came back from SF today to Toronto, and he dragged me back to his house to eat food with his family.
    One thing that really stood out to me was how uch energy he displayed to his dad. He gave so much energy and enthusaism despite his girlfriend and I sitting there awkwardly in silence.
    It made me reflect on how little energy in comparison I show to my own family. It's these small moments of joy that really make your parents happy.

    I also think about how I feel when other people being so energic upon seeing me. It's a shoot of dopamine that says I'm important to them.
    It's also so crucial in terms of teamwork to being able to start off with energy. Even if you have all the respect in the world, you can't get people amped up about a shared goal without feeling that energy yourself.
    
    Leadership is not only about steering the ship, but being the first to row, till the momentum inspires the rest of the team to start pushing towards your goal together.
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
