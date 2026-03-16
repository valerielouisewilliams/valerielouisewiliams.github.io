import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export function BlogWindow() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Better UIs with React and TypeScript",
      date: "March 10, 2026",
      excerpt:
        "Exploring advanced patterns for creating type-safe, reusable components that scale...",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Art of Minimalist Design",
      date: "March 2, 2026",
      excerpt:
        "How embracing simplicity can lead to more powerful and effective user experiences...",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Modern CSS Techniques I Use Every Day",
      date: "February 24, 2026",
      excerpt:
        "From container queries to cascade layers, here are the CSS features that changed my workflow...",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "My Journey into Web Development",
      date: "February 15, 2026",
      excerpt:
        "Reflecting on five years of building for the web and the lessons learned along the way...",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <BookOpen className="w-10 h-10 text-purple-600" />
        <div>
          <h1 className="text-4xl font-bold text-gray-900">My Blog</h1>
          <p className="text-gray-600">Thoughts on design, code, and creativity</p>
        </div>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {post.title}
              </h3>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://medium.com/@valerielouisewilliams"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-shadow font-medium"
        >
          <span>Visit Full Blog</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}