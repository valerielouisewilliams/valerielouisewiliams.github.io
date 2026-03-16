export function SkillsWindow() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Objective-C", "C", "Python", "Swift"],
    },
    {
      title: "iOS Development",
      skills: ["Swift", "SwiftUI", "GameKit"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MySQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS: EC2", "AWS: S3", "AWS: RDS", "AWS: CloudFront", "Docker", "Git"],
    },
    {
      title: "Design",
      skills: ["Figma"],
    },
    {
      title: "Security & Reverse Engineering",
      skills: ["GDB", "Wireshark", "Nmap", "Pwntools"],
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills & Expertise</h1>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium border border-pink-200 hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}