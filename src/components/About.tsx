
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Link as LinkIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-700">
              Motivated and detail-oriented final-year BIT student with a strong passion for data analysis and emerging technologies. 
              Adept at problem-solving and eager to apply analytical and visualization skills in real-world projects. 
              Also familiar with UI/UX principles and web development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-portfolio-primary bg-opacity-10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href="mailto:dhanugurung99@gmail.com" 
                      className="text-portfolio-primary hover:underline"
                    >
                      dhanugurung99@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-portfolio-primary bg-opacity-10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a 
                      href="tel:+9779861641222" 
                      className="text-portfolio-primary hover:underline"
                    >
                      +977 9861641222
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-portfolio-primary bg-opacity-10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-portfolio-dark">Pokhara, Nepal</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-portfolio-primary bg-opacity-10 p-2 rounded-full">
                    <LinkIcon className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <a 
                      href="https://dhanugurung99.com.np/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-primary hover:underline"
                    >
                      dhanugurung99.com.np
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=550&q=80" 
                alt="Dhanu working on computer"
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-portfolio-primary bg-opacity-20 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-xs text-center">
                  <h3 className="text-xl font-semibold text-portfolio-primary mb-2">Why Work With Me?</h3>
                  <p className="text-gray-700">
                    I combine analytical thinking with technical skills to build solutions that meet real-world needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
