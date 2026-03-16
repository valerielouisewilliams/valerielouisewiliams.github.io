import { Folder, FileText, Image, Code } from "lucide-react";

export function FilesWindow() {
  const files = [
    { id: 1, name: "Projects", type: "folder", icon: Folder, items: 8 },
    { id: 2, name: "Resume.pdf", type: "document", icon: FileText, size: "2.4 MB" },
    { id: 3, name: "Portfolio Images", type: "folder", icon: Folder, items: 24 },
    { id: 4, name: "website-mockup.png", type: "image", icon: Image, size: "5.1 MB" },
    { id: 5, name: "source-code", type: "folder", icon: Folder, items: 15 },
    { id: 6, name: "main.tsx", type: "code", icon: Code, size: "12 KB" },
    { id: 7, name: "Design Assets", type: "folder", icon: Folder, items: 32 },
    { id: 8, name: "presentation.pdf", type: "document", icon: FileText, size: "8.7 MB" },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "folder":
        return "text-blue-500";
      case "document":
        return "text-red-500";
      case "image":
        return "text-purple-500";
      case "code":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "folder":
        return "bg-blue-50";
      case "document":
        return "bg-red-50";
      case "image":
        return "bg-purple-50";
      case "code":
        return "bg-green-50";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <Folder className="w-4 h-4" />
          <span>Documents</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">My Files</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {files.map((file) => {
          const Icon = file.icon;
          return (
            <button
              key={file.id}
              className="group flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              <div
                className={`w-16 h-16 rounded-xl ${getBgColor(
                  file.type
                )} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
              >
                <Icon className={`w-8 h-8 ${getIconColor(file.type)}`} />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 break-words w-full">
                {file.name}
              </div>
              <div className="text-xs text-gray-500">
                {file.type === "folder" ? `${file.items} items` : file.size}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
