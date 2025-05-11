
import React, { useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color, delay }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.setProperty('--percent', `${percentage}%`);
                barRef.current.classList.add('skill-bar-fill');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          ref={barRef}
          className="h-2 rounded-full"
          style={{ 
            width: '0%', 
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { skill: "Data Analysis (Excel, Python, Pandas)", percentage: 85, color: "#4299E1" },
    { skill: "SQL", percentage: 80, color: "#4299E1" },
    { skill: "Basic UI/UX Design (Figma)", percentage: 75, color: "#4299E1" },
    { skill: "HTML, CSS, JavaScript", percentage: 70, color: "#4299E1" }
  ];

  const languages = [
    { skill: "Nepali", percentage: 100, color: "#805AD5" },
    { skill: "English", percentage: 60, color: "#805AD5" }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="section-subtitle">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="mb-10">
              <h3 className="section-subtitle">Languages</h3>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <SkillBar
                    key={index}
                    skill={lang.skill}
                    percentage={lang.percentage}
                    color={lang.color}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="section-subtitle">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Data Visualization", "UI/UX Design"].map((interest, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 bg-portfolio-light rounded-full text-portfolio-primary border border-portfolio-accent"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
