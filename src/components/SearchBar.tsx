import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = "Search tools...", className = "" }: SearchBarProps) {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const toolsSection = document.getElementById('tools');
      toolsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`bg-black/50 border border-green-500/30 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 text-sm placeholder-gray-500 ${className}`}
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500/50" />
    </div>
  );
}