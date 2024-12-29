
import { BookOpen, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Courses() {
  const contentRef = useScrollAnimation();
  

  return (
    <section className="min-h-screen flex items-center bg-black/20 py-20 px-4">
      <div ref={contentRef} className="container mx-auto scroll-animation">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              BootCamp Courses
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Get Two Comprehensive Courses in One Bootcamp
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/50 rounded-2xl p-8 border border-green-500/20">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">
              Master Python and Ethical Hacking
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Learn by Building Real Tools!</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
            <div>
              <div className="text-sm text-gray-400 mb-1">Prelaunch Price</div>
              <div className="text-3xl font-bold text-green-400">₹499</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Original Price</div>
              <div className="text-2xl font-bold text-gray-500 line-through">₹1,000</div>
            </div>
          </div>

          <a
            href="https://course.gamkers.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-auto text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}