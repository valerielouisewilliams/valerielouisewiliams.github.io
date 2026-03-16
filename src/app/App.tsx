import { useState } from "react";
import { MenuBar } from "./components/MenuBar";
import { Window } from "./components/Window";
import { Dock } from "./components/Dock";
import { BioWindow } from "./components/BioWindow";
import { ProjectsWindow } from "./components/ProjectsWindow";
import { SkillsWindow } from "./components/SkillsWindow";
import { BlogWindow } from "./components/BlogWindow";
import { WorkExperienceWindow } from "./components/WorkExperienceWindow";
import { FilesWindow } from "./components/FilesWindow";

export default function App() {
  const [openWindows, setOpenWindows] = useState<string[]>(["bio"]);

  const handleOpenWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
  };

  const handleCloseWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId));
  };

  const windowConfigs: Record<
    string,
    { title: string; component: JSX.Element; position: { x: number; y: number }; width?: number; height?: number }
  > = {
    bio: {
      title: "About Me",
      component: <BioWindow />,
      position: { x: 100, y: 80 },
      width: 700,
      height: 600,
    },
    projects: {
      title: "Projects",
      component: <ProjectsWindow />,
      position: { x: 200, y: 120 },
      width: 900,
      height: 650,
    },
    experience: {
      title: "Work Experience",
      component: <WorkExperienceWindow />,
      position: { x: 250, y: 90 },
      width: 800,
      height: 650,
    },
    skills: {
      title: "Skills",
      component: <SkillsWindow />,
      position: { x: 300, y: 100 },
      width: 650,
      height: 700,
    },
    blog: {
      title: "Blog",
      component: <BlogWindow />,
      position: { x: 150, y: 150 },
      width: 750,
      height: 650,
    },
    files: {
      title: "Files",
      component: <FilesWindow />,
      position: { x: 180, y: 110 },
      width: 700,
      height: 550,
    },
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1687618083947-691b6c4adb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwd2FsbHBhcGVyfGVufDF8fHx8MTc3MzU3MTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Area */}
      <div className="relative h-[calc(100%-28px)]">
        {openWindows.map((windowId) => {
          const config = windowConfigs[windowId];
          if (!config) return null;

          return (
            <Window
              key={windowId}
              title={config.title}
              defaultPosition={config.position}
              onClose={() => handleCloseWindow(windowId)}
              width={config.width}
              height={config.height}
            >
              {config.component}
            </Window>
          );
        })}
      </div>

      {/* Dock */}
      <Dock onOpenWindow={handleOpenWindow} />
    </div>
  );
}