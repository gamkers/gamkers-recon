
import { ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ToolProps {
  name: string;
  description: string;
  usage: string;
  icon: LucideIcon;
}

export default function Tool({ name, description, usage, icon: Icon }: ToolProps) {
  return (
    <div className="bg-black/50 rounded-lg p-6 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-green-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-green-400">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="bg-black/50 rounded p-4 border border-green-500/10">
        <div className="flex items-center gap-2 mb-2">
          <ExternalLink className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-400">Usage</span>
        </div>
        <code className="text-sm text-gray-300 font-mono break-all">{usage}</code>
      </div>
    </div>
  );
}