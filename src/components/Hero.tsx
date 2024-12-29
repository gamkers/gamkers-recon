
import { Shield, Terminal, MessageCircle, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-emerald-500/10 to-transparent -rotate-12 animate-pulse" />
      </div>

      <div className="container mx-auto relative pt-16">
        <div className="absolute top-0 left-10 text-green-500/20 animate-float">
          <Terminal className="w-16 h-16" />
        </div>
        <div className="absolute bottom-0 right-10 text-emerald-500/20 animate-float-delayed">
          <Shield className="w-16 h-16" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <span className="text-green-400 text-sm font-medium">Professional Web Penetration Testing Tools</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Advanced Recon Suite
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Professional-grade reconnaissance toolkit for comprehensive web application security testing and vulnerability assessment.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://discord.gg/RVuwaJjp2C"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                Join Discord
                <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="https://www.instagram.com/gamkers/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-green-500 text-green-500 px-8 py-3 rounded-lg transition-all hover:bg-green-500/10 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Follow Us
                <Instagram className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}