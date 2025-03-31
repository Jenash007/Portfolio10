import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import SectionAnimation from "./section-animation"

export default function Projects() {
  const projects = [
    {
      title: "A Random Quote Generator",
      description: "A simple project to get started with APIs.",
      image: `${process.env.PUBLIC_URL}/placeholder.jpg`,
      tags: ["React", "JavaScript", "CSS", "HTML", "API"],
      demoLink: "https://codepen.io/Jenash/pen/emYKgda",
      githubLink: "#",
    },
    {
      title: "A Javascript Calculator",
      description: "An excellent way to understand the basics of JavaScript.",
      image: `${process.env.PUBLIC_URL}/placeholder.jpg`,
      tags: ["React", "JavaScript", "CSS", "HTML"],
      demoLink: "https://codepen.io/Jenash/pen/yyLEZoP",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: `${process.env.PUBLIC_URL}/placeholder.jpg`,
      tags: ["React", "JavaScript", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "25 + 5 Clock",
      description: "A simple clock with a timer for productivity.",
      image: `${process.env.PUBLIC_URL}/placeholder.jpg`,
      tags: ["React", "Javascript", "Webpack", "CSS"],
      demoLink: "https://codepen.io/Jenash/pen/gbOjajo",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-accent">
      <div className="container mx-auto">
        <SectionAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        </SectionAnimation>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SectionAnimation key={index} delay={index * 150}>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

