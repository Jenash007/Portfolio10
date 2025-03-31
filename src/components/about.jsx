import { Card, CardContent } from "./ui/card"
import SectionAnimation from "./section-animation"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-accent">
      <div className="container mx-auto">
        <SectionAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        </SectionAnimation>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SectionAnimation delay={200}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={`${process.env.PUBLIC_URL}/placeholder.jpg`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SectionAnimation>
          <SectionAnimation delay={400}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="mb-4">
                  I'm a passionate frontend developer with 5 years of experience creating modern web applications. I
                  specialize in React.js and building responsive user interfaces.
                </p>
                <p className="mb-4">
                  My background in design helps me create beautiful, intuitive experiences that users love. I'm
                  constantly learning new technologies and techniques to stay at the cutting edge of web development.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the
                  kitchen.
                </p>
              </CardContent>
            </Card>
          </SectionAnimation>
        </div>
      </div>
    </section>
  )
}

