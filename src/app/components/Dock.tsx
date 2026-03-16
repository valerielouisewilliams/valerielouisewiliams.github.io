import {
  User,
  Briefcase,
  Code,
  BookOpen,
  Github,
  Linkedin,
  Folder,
  Building2,
} from "lucide-react";

interface DockProps {
  onOpenWindow: (window: string) => void;
}

export function Dock({ onOpenWindow }: DockProps) {
  const apps = [
    { id: "bio", icon: User, label: "About Me" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: Building2, label: "Experience" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "blog", icon: BookOpen, label: "Blog", external: "https://medium.com/@valerielouisewilliams" },
    { id: "github", icon: Github, label: "GitHub", external: "https://github.com/valerielouisewilliams" },
    { id: "linkedin", icon: Linkedin, label: "LinkedIn", external: "https://linkedin.com/in/valerielouisewilliams" },
    { id: "files", icon: Folder, label: "Files" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-2xl px-3 py-2 shadow-2xl flex items-end gap-2">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => {
              if (app.external) {
                window.open(app.external, "_blank");
              } else {
                onOpenWindow(app.id);
              }
            }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-3 hover:scale-110 active:scale-95 relative group"
          >
            <app.icon className="w-7 h-7" />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {app.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}