
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-portfolio-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Education & Organizations</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="section-subtitle">Education</h3>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-portfolio-primary">Bachelor in Information Technology (BIT)</CardTitle>
                <CardDescription className="flex justify-between">
                  <span>Gandaki University</span>
                  <span>09/2021 - Present</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Currently pursuing a Bachelor's degree in Information Technology with a focus on data analysis and web development.
                  Key courses include database management, data analysis, and web application development.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium text-portfolio-secondary mb-2">Relevant Coursework</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded shadow-sm">Database Systems</div>
                    <div className="bg-white p-2 rounded shadow-sm">Data Structures</div>
                    <div className="bg-white p-2 rounded shadow-sm">Web Development</div>
                    <div className="bg-white p-2 rounded shadow-sm">Data Analysis</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="section-subtitle">Organizations</h3>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-portfolio-primary">Code For Change Pokhara</CardTitle>
                <CardDescription className="flex justify-between">
                  <span>College Representative</span>
                  <span>01/2024 - 12/2024</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  As a college representative for Code For Change, I help organize coding workshops, hackathons, and community 
                  service projects that leverage technology to address local challenges.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium text-portfolio-secondary mb-2">Key Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Organizing coding workshops and tech events</li>
                    <li>Recruiting student volunteers for community projects</li>
                    <li>Collaborating with local businesses for sponsorships</li>
                    <li>Representing the university at regional tech competitions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
