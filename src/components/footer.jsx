import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold"><a href="#">Jeswin</a></h3>
            <p className="text-muted-foreground">Software Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Jeswin.Media All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

