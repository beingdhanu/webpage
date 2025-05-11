
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Facebook, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg text-gray-700">
              I'm always open to discussing new projects, opportunities, or collaborations. 
              Feel free to reach out to me through any of these platforms.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-portfolio-primary">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://www.linkedin.com/in/dhanu-gurung-29ab7a282/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-portfolio-light rounded-lg hover:bg-portfolio-accent hover:bg-opacity-20 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-[#0077B5]" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/beingdhanu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-portfolio-light rounded-lg hover:bg-portfolio-accent hover:bg-opacity-20 transition-colors"
                >
                  <Github className="h-6 w-6 text-[#333]" />
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/aungxan.l.gurunqe/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-portfolio-light rounded-lg hover:bg-portfolio-accent hover:bg-opacity-20 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-[#1877F2]" />
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/beingdhanu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-portfolio-light rounded-lg hover:bg-portfolio-accent hover:bg-opacity-20 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-[#E4405F]" />
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-portfolio-primary mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        className="w-full border-gray-300 focus:border-portfolio-accent focus:ring-portfolio-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full border-gray-300 focus:border-portfolio-accent focus:ring-portfolio-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      className="w-full border-gray-300 focus:border-portfolio-accent focus:ring-portfolio-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      className="w-full border-gray-300 focus:border-portfolio-accent focus:ring-portfolio-accent"
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
