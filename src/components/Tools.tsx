
import Tool from './Tool';
import { tools } from '../data/tools';
import { useSearch } from '../context/SearchContext';

export default function Tools() {
  const { searchQuery } = useSearch();

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="tools" className="py-20 px-4 bg-black/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map((tool) => (
            <Tool key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}