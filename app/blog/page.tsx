// app/blog/page.tsx

import { CalendarDays } from "lucide-react";

type BlogType = {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
};

const blogs: BlogType[] = [
  {
    id: 1,
    category: "Industry",
    title: "The Future of EVs in Nepal",
    description:
      "How electric vehicles are reshaping transportation in the Himalayas.",
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    category: "Tips",
    title: "5 Tips for Battery Longevity",
    description:
      "Maximize your electric motorcycle's battery life with these expert tips.",
    date: "Mar 8, 2026",
  },
  {
    id: 3,
    category: "News",
    title: "Nepal's Growing Charging Network",
    description:
      "New charging stations are making long-distance EV travel possible.",
    date: "Feb 28, 2026",
  },
  {
    id: 4,
    category: "Tips",
    title: "EV Riding: What You Need to Know",
    description: "Mastering the slopes of Nepal on an electric motorcycle.",
    date: "Jan 15, 2024",
  },
  {
    id: 5,
    category: "Company",
    title: "Gantabya 2025: Year in Review",
    description:
      "A look back at our biggest milestones and what's coming next.",
    date: "Mar 8, 2026",
  },
  {
    id: 6,
    category: "News",
    title: "How Much CO₂ Are We Saving?",
    description:
      "The environmental impact of 5,000+ Gantabya bikes on Nepal's roads.",
    date: "Jan 5, 2026",
  },
];

export default function Blog() {
  return (
    <section className="bg-black min-h-screen text-white py-24 px-5 md:px-14">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          Blog &{" "}
          <span className="bg-linear-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            News
          </span>
        </h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="
              border border-gray-800
              rounded-xl
              p-4
              bg-[#050505]
              flex flex-col justify-between
              transition-all duration-300
            "
          >
            {/* Top */}
            <div>
              {/* Category */}
              <span className="inline-block border border-green-500/20 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full mb-4">
                {blog.category}
              </span>

              {/* Title */}
              <h2 className="text-xl leading-snug font-semibold text-white mb-3">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6">
                {blog.description}
              </p>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-5">
              
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
                <CalendarDays size={16} />
                <span>{blog.date}</span>
              </div>

              {/* Read More */}
              <button className="text-green-500 text-sm font-semibold whitespace-nowrap hover:text-green-400">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}