import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseProps {
  id: number;
  title: string;
  description: string;
  instructor: string;
  price: number;
  image: string;
}

export const CourseCard = ({ title, description, instructor, price, image }: CourseProps) => {
  return (
    <Card className="course-card overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">By {instructor}</span>
          <span className="font-bold">${price}</span>
        </div>
      </CardContent>
    </Card>
  );
};