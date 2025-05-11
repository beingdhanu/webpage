
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-portfolio-light to-white">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 order-2 md:order-1 animate-fade-in">
          <h1 className="font-bold text-portfolio-primary">
            <span className="block">Hi, I'm</span>
            <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
              Dhanu Gurung
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-portfolio-secondary font-medium">
            BIT Final-Year Student | Aspiring Data Analyst
          </h2>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Motivated and detail-oriented with a strong passion for data analysis and emerging technologies. 
            Adept at problem-solving and eager to apply analytical and visualization skills in real-world projects.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
            
            <a href="#contact">
              <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-accent shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500&q=80" 
              alt="Dhanu Gurung"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-portfolio-primary animate-bounce"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
