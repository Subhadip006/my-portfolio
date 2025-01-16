import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Code, Lightbulb, Rocket, Trophy, Users } from 'lucide-react'

export function BentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">My Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="sm:row-span-2 sm:col-span-2">
            <CardHeader>
              <CardTitle>Full-Stack Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Full-Stack Development"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="mt-4">
                Expertise in building end-to-end web applications, from responsive frontends to scalable backends.
              </p>
            </CardContent>
          </Card>

          {/* Smaller cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                React & Next.js
              </CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Advanced</div>
              <p className="text-xs text-muted-foreground">
                Building modern, performant UIs
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                UI/UX Design
              </CardTitle>
              <Lightbulb className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Creative</div>
              <p className="text-xs text-muted-foreground">
                Crafting intuitive user experiences
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Backend Development
              </CardTitle>
              <Rocket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Proficient</div>
              <p className="text-xs text-muted-foreground">
                Node.js, Express, and databases
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Project Management
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Experienced</div>
              <p className="text-xs text-muted-foreground">
                Leading teams to success
              </p>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Achievements
              </CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Hackathon Winner</Badge>
                <Badge variant="secondary">Open Source Contributor</Badge>
                <Badge variant="secondary">Tech Speaker</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

