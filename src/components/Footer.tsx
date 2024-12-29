
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-green-500/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Gamkers
            </span>
          </div>
          <p className="text-gray-400 text-sm text-center">
            Empowering the next generation of cybersecurity professionals
          </p>
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Gamkers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}