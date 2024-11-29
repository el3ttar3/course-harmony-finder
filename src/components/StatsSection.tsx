import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface Stats {
  activeStudents: number;
  coursesCompleted: number;
  expertAdvisors: number;
  partnerSchools: number;
}

export const StatsSection = ({ stats }: { stats: Stats }) => {
  return (
    <section className="py-16 bg-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?blur=8')" }}>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">
                {stats.activeStudents.toLocaleString()}
              </CardTitle>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </CardHeader>
          </Card>
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">
                {stats.coursesCompleted.toLocaleString()}
              </CardTitle>
              <p className="text-sm text-muted-foreground">Courses Completed</p>
            </CardHeader>
          </Card>
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">
                {stats.expertAdvisors.toLocaleString()}
              </CardTitle>
              <p className="text-sm text-muted-foreground">Expert Advisors</p>
            </CardHeader>
          </Card>
          <Card className="bg-white/80 backdrop-blur">
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
  );
};