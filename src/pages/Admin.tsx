import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, BookOpen, TrendingUp, AlertCircle } from "lucide-react";

const Admin = () => {
  const [newCourse, setNewCourse] = useState({ title: "", description: "", price: "" });
  
  const statsData = [
    { name: "Jan", students: 400 },
    { name: "Feb", students: 300 },
    { name: "Mar", students: 600 },
    { name: "Apr", students: 800 },
    { name: "May", students: 700 },
  ];

  const courses = [
    { id: 1, title: "React Fundamentals", enrolled: 150, revenue: "$1,500" },
    { id: 2, title: "Advanced JavaScript", enrolled: 120, revenue: "$1,200" },
    { id: 3, title: "Web Design Basics", enrolled: 200, revenue: "$2,000" },
  ];

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Course added successfully!");
    setNewCourse({ title: "", description: "", price: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Reports</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        {/* Enrollment Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Student Enrollment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Course Management */}
        <Card>
          <CardHeader>
            <CardTitle>Course Management</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddCourse} className="space-y-4 mb-6">
              <Input
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              />
              <Input
                placeholder="Description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              />
              <Input
                placeholder="Price"
                type="number"
                value={newCourse.price}
                onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
              />
              <Button type="submit">Add Course</Button>
            </form>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Enrolled Students</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.enrolled}</TableCell>
                    <TableCell>{course.revenue}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.info(`Editing ${course.title}`)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;