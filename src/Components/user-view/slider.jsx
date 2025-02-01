import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
    {
      name: "Software Development",
      body: "Custom Web & Mobile App Development",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Cloud & DevOps Services",
      body: "Cloud Migration & Management & DevOps Consulting",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "AI & Data Science",
      body: "AI-driven Business Intelligence",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Digital Marketing & Branding",
      body: "SEO & Content Marketing & Social Media Management",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "UI/UX Design",
      body: "User Interface & Experience Design Prototyping & Wireframing",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Full-Stack Web Development",
      body: "Frontend (React, Vue, Angular) & Backend (Node.js, Python, PHP) &Database Management",
      img: "https://avatar.vercel.sh/jane",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-28 w-60 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[550px] w-full flex-row items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover vertical className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
