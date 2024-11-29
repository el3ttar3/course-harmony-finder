import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { CourseCard } from "@/components/CourseCard";
import { StatsSection } from "@/components/StatsSection";

const stats = {
  activeStudents: 10300,
  coursesCompleted: 7896,
  expertAdvisors: 400,
  partnerSchools: 200
};

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  price: number;
  image: string;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript",
    instructor: "John Doe",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "React Mastery",
    description: "Master React.js and build modern web applications",
    instructor: "Jane Smith",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Complete Python programming course from basics to advanced",
    instructor: "Mike Johnson",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(mockCourses);

  const handleSearch = () => {
    const results = mockCourses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(results);
    if (results.length === 0) {
      toast({
        title: "No results found",
        description: "Try different search terms",
        variant: "destructive"
      });
    }
  };

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
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?blur=8')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your Learning Path
          </h1>
          <p className="mt-4 max-w-[700px] text-white/80 md:text-xl">
            Explore courses tailored to your goals and advance your career with expert-led content
          </p>
          <div className="relative mt-8 w-full max-w-2xl">
            <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="What do you want to learn?"
              className="h-12 w-full pl-12 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* About Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504893524553-b855bce32c67?blur=8')" }}>
        <div className="container relative z-10">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">About Top-Up</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-center">
              Top-Up is your gateway to professional growth and personal development. We believe in making
              quality education accessible to everyone, everywhere.
            </p>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-center">
              Our platform connects learners with expert instructors and industry-leading content, helping you
              master new skills at your own pace.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;