import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Stats {
  activeStudents: number;
  coursesCompleted: number;
  expertAdvisors: number;
  partnerSchools: number;
}

const stats: Stats = {
  activeStudents: 10300,
  coursesCompleted: 7896,
  expertAdvisors: 400,
  partnerSchools: 200
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-bold">Top-Up</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-b from-muted/50 to-muted">
        <div className="container flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your Learning Path
          </h1>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Explore courses tailored to your goals and advance your career with expert-led content
          </p>
          <div className="relative mt-8 w-full max-w-2xl">
            <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="What do you want to learn?"
              className="h-12 w-full pl-12 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {stats.activeStudents.toLocaleString()}
                </CardTitle>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {stats.coursesCompleted.toLocaleString()}
                </CardTitle>
                <p className="text-sm text-muted-foreground">Courses Completed</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {stats.expertAdvisors.toLocaleString()}
                </CardTitle>
                <p className="text-sm text-muted-foreground">Expert Advisors</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {stats.partnerSchools.toLocaleString()}
                </CardTitle>
                <p className="text-sm text-muted-foreground">Partner Schools</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Top-Up</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Top-Up is your gateway to professional growth and personal development. We believe in making
            quality education accessible to everyone, everywhere.
          </p>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Our platform connects learners with expert instructors and industry-leading content, helping you
            master new skills at your own pace.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;