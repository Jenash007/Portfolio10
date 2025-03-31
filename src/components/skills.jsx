import { Code, Figma, FileJson, Globe, Palette, Server } from "lucide-react"
import SectionAnimation from "./section-animation"

export default function Skills() {
  const skills = [
    {
      icon: <Code className="h-10 w-10 mb-4" />,
      title: "Frontend Development",
      description: "React.js, JavaScript, HTML, CSS",
    },
    {
      icon: <Palette className="h-10 w-10 mb-4" />,
      title: "UI/UX Design",
      description: "Tailwind CSS, Responsive Design, Accessibility",
    },
    {
      icon: <Server className="h-10 w-10 mb-4" />,
      title: "Backend Integration",
      description: "RESTful APIs, Node.js",
    },
    {
      icon: <FileJson className="h-10 w-10 mb-4" />,
      title: "State Management",
      description: "Redux, Context API, React Query",
    },
    {
      icon: <Globe className="h-10 w-10 mb-4" />,
      title: "Web Performance",
      description: "Optimization, Lazy Loading, Code Splitting",
    },
    {
      icon: <Figma className="h-10 w-10 mb-4" />,
      title: "Design Tools",
      description: "Figma, Canva",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        </SectionAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SectionAnimation key={index} delay={index * 100}>
              <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

