import { Code2, Database, BarChart3, GitBranch, Wrench, Workflow } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: Code2, category: "Frontend" },
    { name: "CSS3", icon: Code2, category: "Frontend" },
    { name: "JavaScript", icon: Code2, category: "Frontend" },
    { name: "React", icon: Code2, category: "Frontend" },
    { name: "Bootstrap", icon: Code2, category: "Frontend" },
    { name: "Node.js", icon: Code2, category: "Backend" },
    { name: "PHP", icon: Code2, category: "Backend" },
    { name: "Python", icon: Code2, category: "Backend" },
    { name: "SQL", icon: Database, category: "Database" },
    { name: "Power BI", icon: BarChart3, category: "Data Analysis" },
    { name: "Git", icon: GitBranch, category: "Tools" },
    { name: "n8n", icon: Workflow, category: "Automation" },
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card border border-border rounded-lg p-6 text-center card-hover animate-fade-in hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
              
              {/* Neon glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none neon-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
