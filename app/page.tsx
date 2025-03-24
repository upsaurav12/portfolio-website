'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string;
  details: string[];
  techStack?: string[];
}

const TimelineItem = ({ title, company, date, description, details, techStack }: ExperienceProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex group">
      {/* Timeline Line */}
      <div className="absolute left-[140px] top-0 bottom-0 w-px bg-border group-last:bg-transparent"></div>
      
      {/* Date on the left */}
      <div className="w-[140px] pt-6 pr-8 text-right text-sm text-muted-foreground font-medium">
        {date}
      </div>
      
      {/* Timeline Dot */}
      <div className="absolute left-[138px] top-7 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
      
      {/* Content */}
      <div className="flex-1 pl-8 pb-8">
        <Card className="p-6 transition-all duration-200 hover:shadow-lg">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
            <p className="mt-3 text-muted-foreground">{description}</p>
            
            {isExpanded && (
              <div className="mt-4 space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {details.map((detail, index) => (
                    <li key={index} className="pl-2">{detail}</li>
                  ))}
                </ul>
                {techStack && (
                  <div>
                    <p className="font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, index) => (
                        <Button key={index} variant="secondary" size="sm">
                          {tech}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="mt-4"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default function Home() {
  const experiences = [
    {
      title: "Open Source Contributor",
      company: "Inspektor Gadget",
      date: "2023",
      description: "Contributed to the Inspektor Gadget project, focusing on improving test coverage and functionality.",
      details: [
        "Wrote comprehensive unit tests for various functions",
        "Successfully merged 5+ pull requests",
        "Raised 10+ pull requests with improvements",
        "Collaborated with the core team on feature implementations"
      ],
      techStack: ["Golang", "Git"]
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      date: "2022",
      description: "Active contributor to multiple organizations and projects during the program.",
      details: [
        "Successfully merged 10+ pull requests across various projects",
        "Implemented new features and UI improvements",
        "Collaborated with multiple project maintainers",
        "Fixed critical bugs and improved user experience"
      ],
      techStack: ["React.js", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Open Source Contributor",
      company: "CircuitVerse",
      date: "2022",
      description: "Contributed to the CircuitVerse organization's digital logic simulator project.",
      details: [
        "Successfully merged 7+ pull requests",
        "Implemented new circuit components",
        "Enhanced user interface and experience",
        "Fixed bugs and improved platform stability"
      ],
      techStack: ["Vue.js", "JavaScript", "Bootstrap", "Ruby on Rails", "HTML", "CSS"]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Profile */}
        <div className="lg:w-1/3 p-8 flex flex-col items-center justify-start sticky top-0 h-screen">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">John Doe</h1>
          <p className="text-xl text-muted-foreground mb-6">Full Stack Developer</p>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Button variant="default" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:john@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-2/3 p-8 lg:p-12">
          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Open Source Experience</h2>
            <div className="pl-4">
              {experiences.map((experience, index) => (
                <TimelineItem key={index} {...experience} />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <Card className="p-6">
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary">React</Button>
                <Button variant="secondary">Next.js</Button>
                <Button variant="secondary">TypeScript</Button>
                <Button variant="secondary">Node.js</Button>
                <Button variant="secondary">Python</Button>
                <Button variant="secondary">PostgreSQL</Button>
                <Button variant="secondary">AWS</Button>
                <Button variant="secondary">Docker</Button>
                <Button variant="secondary">Git</Button>
                <Button variant="secondary">REST APIs</Button>
                <Button variant="secondary">GraphQL</Button>
                <Button variant="secondary">Tailwind CSS</Button>
              </div>
            </Card>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm">Next.js</Button>
                  <Button variant="secondary" size="sm">Stripe</Button>
                  <Button variant="secondary" size="sm">PostgreSQL</Button>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  A real-time collaborative task management application using React and WebSocket.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm">React</Button>
                  <Button variant="secondary" size="sm">WebSocket</Button>
                  <Button variant="secondary" size="sm">Node.js</Button>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}