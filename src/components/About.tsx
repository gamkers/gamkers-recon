import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const contentRef = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center bg-black/30">
      <div ref={contentRef} className="container mx-auto max-w-4xl px-4 py-20 scroll-animation">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            About Us
          </span>
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            At Gamkers, our mission is to empower the next generation of cybersecurity professionals by providing the knowledge, tools, and resources they need to succeed in a rapidly evolving digital world. We are passionate about making cybersecurity education accessible and impactful for everyone, from beginners to experienced professionals.
          </p>
          <p>
            Founded by cybersecurity experts, Gamkers creates a supportive community where individuals can learn, grow, and collaborate. Our goal is to guide users through the complexities of ethical hacking, penetration testing, and cyber defense, helping them build the skills needed to navigate and secure the digital landscape.
          </p>
          <p>
            Join us in shaping the future of cybersecurity and creating a safer online world.
          </p>
        </div>
      </div>
    </section>
  );
}