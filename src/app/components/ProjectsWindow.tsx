import { ExternalLink } from "lucide-react";

export function ProjectsWindow() {
  const projects = [
    {
      id: 1,
      title: "The Punch",
      description: "A social media platform inspired by 'The Slap' from Victorious meant to be a lowkey, casual way to catch up with friends. Currently the way my friends and acquaintances keep up with each other, in beta testing now!",
      tags: ["Swift", "SwiftUI", "Node.JS + Express", "MySQL", "AWS"],
      github: "https://github.com/valerielouisewilliams/the-punch",
    },
    {
      id: 2,
      title: "Rampage",
      description: "A map driven social media app to find restaurants, venues, cafes, etc with specific accessibility features (ramps, elevators, etc). Winner of Best Rookie Hack and Best Hack For Good at VandyHacks hackathon.",
      tags: ["Swift", "SwiftUI", "MapKit", "Firebase"],
      github: "https://github.com/valerielouisewilliams/Rampage",
    },
    {
      id: 3,
      title: "Mocha Garden",
      description: "A flower-themed cafe simulation game",
      tags: ["Swift", "GameKit"],
      github: "https://github.com/valerielouisewilliams/mochagardengame",
    },
    {
      id: 4,
      title: "Meow++",
      description: "A toy programming language with cat-themed syntax",
      tags: ["Python"],
      github: "https://github.com/valerielouisewilliams/meow_plus_plus",
    },
    {
      id: 5,
      title: "GTFO",
      description: "An alarm clock app where in order to turn off the alarm you must get up and scan a specific QR code from your bathroom or kitchen or wherever else you desire",
      tags: ["Swift", "SwiftUI"],
      github: "https://github.com/valerielouisewilliams/GTFO",
    },
    {
      id: 6,
      title: "birth-ctrl: Reproductive Health Tracker",
      description: "A Progressive Web App for reproductive health tracking with iOS-style design and interface, built for privacy and ease of use. I use it every day personally!",
      tags: ["TypeScript", "React", "Tailwind CSS", "PWA"],
      github: "https://github.com/valerielouisewilliams/birth-control-tracker",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Featured Projects</h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-pink-200 to-pink-300">
                {/* Pastel pink solid color background */}
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center py-8">
          <a
            href="https://github.com/valerielouisewilliams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl hover:shadow-xl transition-shadow font-medium"
          >
            <ExternalLink className="w-5 h-5" />
            <span>More projects on my GitHub!</span>
          </a>
        </div>
      </div>
    </div>
  );
}