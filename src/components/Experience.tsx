
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const projects = [
    {
      title: "DNS The Online Clothing Store",
      description: "Developed a fully functional online store using HTML, CSS, JavaScript, and MySQL. Implemented basic UI/UX principles for better usability.",
      achievements: [
        "Created responsive e-commerce website",
        "Implemented shopping cart functionality",
        "Designed user authentication system",
        "Connected MySQL database for product management"
      ],
      skills: ["HTML", "CSS", "JavaScript", "MySQL", "UI/UX"]
    },
    {
      title: "Car Rental System",
      description: "Designed a car booking system with features like vehicle availability, booking management, and user authentication.",
      achievements: [
        "Developed booking management interface",
        "Implemented real-time availability checker",
        "Created admin dashboard for fleet management",
        "Designed secure payment processing system"
      ],
      skills: ["Web Development", "Database Design", "Authentication", "Payment Processing"]
    },
    {
      title: "IoT Based Smart Home Automation System",
      description: "Built a prototype using Arduino and sensors to automate lighting and temperature. Integrated with mobile app control.",
      achievements: [
        "Designed sensor network for home environments",
        "Programmed Arduino controllers for automation",
        "Created mobile app interface for remote control",
        "Implemented energy usage analytics dashboard"
      ],
      skills: ["IoT", "Arduino", "Mobile App Development", "Sensor Integration"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-portfolio-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Project Experience</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover h-full flex flex-col animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <CardTitle className="text-portfolio-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-medium text-portfolio-secondary mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-portfolio-primary bg-opacity-10 text-portfolio-primary border-portfolio-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
