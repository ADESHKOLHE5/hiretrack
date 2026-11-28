import { Briefcase, LayoutDashboard, Search } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Briefcase,
    title: "All applications together",
    description: "Save every job you apply to with company, role, date and notes.",
  },
  {
    icon: LayoutDashboard,
    title: "Kanban board",
    description: "Move applications from Applied to Interview to Offer in one drag.",
  },
  {
    icon: Search,
    title: "Search and filter",
    description: "Find any application instantly by company, status or date.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-semibold">Everything you need</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 size-6" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}