import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <h1 className="text-4xl font-bold">HireTrack</h1>
      <p className="text-muted-foreground">Track your job applications in one place.</p>
      <Button>Get started</Button>
    </div>
  );
}