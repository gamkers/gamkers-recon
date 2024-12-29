import React from 'react';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Community() {
  const contentRef = useScrollAnimation();

  const socialLinks = [
    {
      name: 'Discord',
      url: 'https://discord.gg/RVuwaJjp2C',
      icon: MessageCircle,
      color: 'hover:text-indigo-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gamkers/',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@gamkeryt',
      icon: Youtube,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div ref={contentRef} className="container mx-auto text-center scroll-animation">
        <h2 className="text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Join Our Community
          </span>
        </h2>
        <div className="flex justify-center items-center gap-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 transition-colors ${link.color}`}
            >
              <link.icon className="w-8 h-8" />
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}