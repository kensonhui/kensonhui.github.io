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
    date: "2025-11-02",
    title: "On Following Through",
    content: `
    Today, I followed through and got my beauty sleep in. It's a small thing, but waking up feeling decently great is so underrated.

    I got a good run in, I went to Markville mall, and grinded a ton.

    Although I had existential dread about our startup. I was thinking about the feasibility of the idea, and whether we can have a competitive advantage. We found agreement and settled on a potential solution. So there's been restored hope, let's see how it goes.

    Most important takeaway, is showing up for yourself.
    `,
  },
  {
    date: "2025-11-01",
    title: "Falling Out of Systems",
    content: `
    Recently, I've been not doing the best. My room is a mess, I haven't exercised in the past two days, I've been anxious over making marketing posts.

    It's a bit tricky, I've put all my bets on this startup, and I'm starting to feel the pain. This Halloween, I could be dressed up as a monkey and dance the night away.

    Instead, I'm here in my messy room, staring down our competitors, wondering if we can replicate the same level of success they've had, except they're 1 year into the game before us.

    I've also felt sad as I haven't felt as connected with my fmaily members. I feel a sense of lonliness that haunts me. I can't keep living like this, and one thing that I can do that would significantly bring everything back in my life together would be fixing my sleep schedule.

    So from here on out, I will always be in bed by 2am, pushing it one minute back every day until we hit 1am.

    Let's focus on this one thing for now, and I'll be back with more updates soon.
    `,
  },
  {
    date: "2025-10-31",
    title: "On Scary Things",
    content: `
    Pursuing the thing that's scaring you is the fastest way to grow.

    I used to be scared of speaking to my peers, going to Socratica events, because I always felt "not good enough." In a sense, I began making excuses to not pursue the things that I really wanted because of my fear.

    We like to believe that we are rational, but the truth is we operate more on a bounded rationality basis. The boundary that forms around us is invisible, but made up of our unconscious biases, fears, and comfort with familarity.

    In order to succeed, we need to do things most people aren't willing to do. That's our competitive advantage as a young adult, is the being able to put in more work and scary things that other people just wouldn't do.

    That's why the goal of all the scary things I try to do on a daily basis is to remove those barriers, so I can achieve a mindset that will allow me to do what others aren't willing to do. This is the winning mindset. Today, this scary thing was posting on LinkedIn and asking my friends to like and comment for visibility. I need to do this to increase traffic to my site, which will increase the authority of Pierview, and lead it to ranking higher via Pagerank. 

    It's a step in the right direction. I'm proud of the trust and self-belief I have in myself, thinking even if this post makes me look stupid, I know it's the necessary step we need to take to grow.

    I remember in my early university years the unsufferable feeling of taking these grueling scary steps. Looking back on it, the reason I'm the person I am today was the culmulation of all these small scary steps. The leap would be impossible, but by compartmentalizing the vision of the mindset that would allow me to do anything I need to do, into small discret scary steps, it brings forth it into reality.
    `,
  },
  {
    date: "2025-10-30",
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
    date: "2025-10-29",
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
