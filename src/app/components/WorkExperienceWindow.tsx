import { Building2, Calendar, MapPin } from "lucide-react";

export function WorkExperienceWindow() {
  const experiences = [
    {
      id: 1,
      company: "Experian",
      role: "Software Engineer",
      period: "Fall 2026 - Present",
      location: "Santa Monica, CA",
      description: [
        "Starting position after graduation",
        "Full stack engineering role",
      ],
      current: true,
    },
    {
      id: 2,
      company: "Experian",
      role: "Software Engineer Intern",
      period: "May 2025 - Aug 2025",
      location: "Remote",
      description: [
        "Developed reusable SwiftUI mobile UI components for the Atlas platform used by multiple internal iOS teams.",
        "Built modular layouts following MVVM architecture and Apple Human Interface Guidelines to ensure design consistency across applications.",
        "Implemented and maintained test views and preview states in the development app to accelerate component validation and QA workflows.",
      ],
      current: false,
    },
    {
      id: 3,
      company: "Phoenix International",
      role: "Junior Software Engineer",
      period: "May 2021 - Aug 2023",
      location: "Largo, MD",
      description: [
        "Rebuilt the company's payroll processing system as an internal tool integrating Salesforce APIs, improving payroll accuracy and reducing manual processing time by 50%.",
        "Developed three internal operations tools supporting government contract workflows and cross-department coordination.",
        "Built an enterprise action-item tracking system used by five departments, improving task accountability and reducing missed deadlines by 35%.",
        "Created a campus visitation tracking system used by HR to monitor facility access and maintain compliance records.",
        "Maintained and optimized relational SQL databases, improving query performance and ensuring data integrity across multiple internal applications.",
      ],
      current: false,
    },
    {
      id: 4,
      company: "Take-Pause",
      role: "Software Engineer Intern",
      period: "Apr 2020 - May 2021",
      location: "Remote",
      description: [
        "Developed three immersive VR meditation environments using Unity, increasing user session duration by 20% in internal testing.",
        "Collaborated with designers to implement interactive environments optimized for user engagement and VR performance.",
      ],
      current: false,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h1>
      
      <div className="mb-8 p-6 bg-white/50 rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Education</h2>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
            V
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Vanderbilt University</h3>
            <p className="text-gray-700">School of Engineering</p>
            <p className="text-gray-600">B.S. Computer Science, Class of 2026</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                </div>
              </div>
              {exp.current && (
                <span className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full font-medium">
                  Upcoming
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{exp.location}</span>
              </div>
            </div>
            
            <ul className="space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-2">
                  <span className="text-pink-500 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}