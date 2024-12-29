
import { Terminal } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="bg-black/90 text-white py-4 fixed w-full top-0 z-50 border-b border-green-500/20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-8 h-8 text-green-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Gamkers Recon
          </span>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar className="w-64" />
        </div>
      </div>
    </header>
  );
}