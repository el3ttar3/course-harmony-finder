import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Plus, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React concepts and patterns",
    duration: "6 weeks",
    level: "Advanced"
  },
  {
    id: "3",
    title: "Data Structures & Algorithms",
    description: "Essential computer science concepts",
    duration: "12 weeks",
    level: "Intermediate"
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals",
    description: "Learn design principles and tools",
    duration: "10 weeks",
    level: "Beginner"
  },
  {
    id: "5",
    title: "Machine Learning Basics",
    description: "Introduction to ML concepts and Python",
    duration: "8 weeks",
    level: "Intermediate"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const { toast } = useToast();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCourse = (courseId: string) => {
    if (!selectedCourses.includes(courseId)) {
      setSelectedCourses([...selectedCourses, courseId]);
      toast({
        title: "Course added",
        description: "The course has been added to your selection.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Course Explorer</h1>
          <p className="text-muted-foreground">
            Search and select courses to add to your learning path
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="course-card">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className="text-xl">{course.title}</span>
                  <BookOpen className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration: {course.duration}</span>
                  <span className="text-muted-foreground">Level: {course.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={selectedCourses.includes(course.id) ? "secondary" : "default"}
                  onClick={() => handleAddCourse(course.id)}
                  disabled={selectedCourses.includes(course.id)}
                >
                  {selectedCourses.includes(course.id) ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Added to Path
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Path
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;