import { MapPin, Calendar, Heart, GraduationCap, Briefcase, Github, Linkedin, Mail } from "lucide-react";

export function BioWindow() {
  return (
    <div className="p-8">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
          VW
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Valerie Williams</h1>
          <p className="text-xl text-gray-600 mb-4">Software Engineer at Experian</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Nashville, TN</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Vanderbilt School of Engineering '26</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Computer Science</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Incoming SWE @ Experian</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/valerielouisewilliams"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-xs text-gray-500">valerielouisewilliams</div>
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/valerielouisewilliams"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-xs text-gray-500">valerielouisewilliams</div>
            </div>
          </a>
          
          <a
            href="mailto:valerielouisew@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-xs text-gray-500">valerielouisew@gmail.com</div>
            </div>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi I'm Val :) I'm a full stack engineer who's loved computers since elementary school. 
            My dad built me a computer when I was in kindergarten, and I just never stopped being curious!!!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What I Do</h2>
          <p className="text-gray-700 leading-relaxed">
            Full stack dev who loves building pretty UIs and solid backends. I also dabble 
            in cybersecurity, low-level code, and game design — basically anything I can get 
            my hands on.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Frontend", "Backend", "Cyber Security", "AI", "Design", "Game Development", "Modding Games", "Health + Wellness", "Yoga", "Books", "Writing", "Fashion"].map(
              (interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm border border-gray-200"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}