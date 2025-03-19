import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <div className="font-bold mr-auto">Nakin A</div>
          <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
          </nav>
          <Button asChild size="sm" className="ml-auto">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm Nakin</h1>
                  <p className="text-xl text-muted-foreground">
                    A dedicated Computer Science graduate specializing in Machine Learning and Software Development.
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Link
                    href="https://github.com/nakinG23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="www.linkedin.com/in/nakinn-ahluwalia-a9877350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://x.com/naking23?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Button variant="outline" asChild size="sm" className="ml-2">
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/cover.jpeg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="aspect-square rounded-full object-cover border-4 border-border bg-muted"
                  priority
                />
                <div className="flex items-center gap-2 text-muted-foreground mt-4">
                  <MapPin className="h-5 w-5" />
                  <span>New York, USA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a master's student in Computer Science at SUNY Buffalo with over five years of industry experience
                at the intersection of software engineering, cloud infrastructure, and machine learning. From designing
                fault-tolerant AWS architectures to exploring and building Machine Learning models. Passionate about
                automation, observability, and AI-driven optimization, I'm always looking for ways to make systems not
                just reliable, but simpler.
              </p>
              <blockquote className="mt-4 text-lg italic text-gray-600">
                "Simplicity is prerequisite for reliability." – Edsger W. Dijkstra
              </blockquote>
              <div className="w-full max-w-full py-4">
                <Tabs defaultValue="skills" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="interests">Interests</TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      {[
                        "Python",
                        "TypeScript",
                        "Next.js",
                        "Node.js",
                        "C++",
                        "Swift",
                        "AWS",
                        "Stakeholder Management",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center justify-center rounded-lg border border-border bg-card p-4 text-center"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="education" className="mt-6">
                    <div className="grid gap-4">
                      <div className="rounded-lg border border-border bg-card p-4">
                        <h3 className="font-semibold">Master of Science in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">SUNY Buffalo, NY, USA 2024-2026</p>
                      </div>
                      <div className="rounded-lg border border-border bg-card p-4">
                        <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">VIT, Vellore, India 2014-2018</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="interests" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {["Machine Learning", "IOS App Dev", "Automation", "Strength Training", "Reading", "Running"].map(
                        (interest) => (
                          <div
                            key={interest}
                            className="flex items-center justify-center rounded-lg border border-border bg-card p-4 text-center"
                          >
                            {interest}
                          </div>
                        ),
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Here are some of my recent projects. Check out my GitHub for more.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Habits, IOS App (Private temporarily)",
                  description: "A minimalistic iOS app designed to track and visualize habits with an intuitive UI.",
                  image: "/IOS.jpeg?height=300&width=400",
                  link: "https://github.com/nakinG23/habits-v0",
                },
                {
                  title: "Autonomous Robot on Farm",
                  description: "einforcement learning-based autonomous robot for optimized farm operations based on rewards, positive and negative.",
                  image: "/RL.jpeg?height=300&width=400",
                  link: "https://github.com/nakinG23/ML-Projects/tree/main/Reinforcement-Learning/autonomous-robot-on-farm",
                },
                {
                  title: "GOT Character Death Prediction",
                  description: "A deep learning model that predicts the likelihood of a Game of Thrones character dying based on in-universe data.",
                  image: "/NN.jpeg?height=300&width=400",
                  link: "https://github.com/nakinG23/ML-Projects/tree/main/Neural-Networks/character-predictions",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="aspect-video object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex justify-end">
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.link} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Experience</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                My professional journey and work experience.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-8">
              {[
                {
                  title: "Senior Site Reliability Engineer (DevOps)",
                  company: "Cvent",
                  period: "Sept 2020 - June 2024",
                  description:
                    "I led the modernization of Windows microservices from monolith to ECS with zero downtime, designed AWS cloud architecture using CDK and TypeScript, and spearheaded migrations for acquired technologies. I also optimized efficiency and costs with serverless solutions and automated AMI builds using Chef Solo.",
                },
                {
                  title: "CloudOps Engineer",
                  company: "Cvent",
                  period: "Aug 2018 - Dec 2019",
                  description: "I automated incident management by developing a Slack Chat Bot to automate incident response and drastically bring down MTTD & MTTR. Managed cloud deployments and incident troubleshooting in large-scale distributed systems. Designed automation scripts for infrastructure provisioning, cutting manual effort by 60%, and implemented AWS tagging to enhance cost visibility and forecasting using Tableau.”",
                },
                {
                  title: "Business Intelligence Intern",
                  company: "Goals101",
                  period: "June 2017",
                  description: "Assisted in analyzing and visualizing large-scale financial data to derive insights for business decision-making. Developed interactive dashboards and reports to track key metrics, enhancing data-driven strategies.",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border"
                >
                  <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">{job.company}</span> • {job.period}
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:nakinahluwalia@gmail.com" className="text-muted-foreground hover:text-foreground">
                      nakinahluwalia@gmail.com
                    </a>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">
                      +1 (234) 567-890
                    </a>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">New York, USA</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nakinG23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nakinn-ahluwalia-a9877350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://x.com/naking23?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-card p-6">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Nakin Ahluwalia. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

