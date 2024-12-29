import React from 'react';
import { Shield, Search, Terminal } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Why Choose Our Tools
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="w-12 h-12 text-cyan-400" />}
            title="Comprehensive Recon"
            description="Complete suite of reconnaissance tools for thorough web application testing"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-cyan-400" />}
            title="Security Focused"
            description="Professional-grade tools designed for penetration testing and security analysis"
          />
          <FeatureCard
            icon={<Terminal className="w-12 h-12 text-cyan-400" />}
            title="Advanced Testing"
            description="Powerful testing capabilities with support for multiple attack vectors"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}