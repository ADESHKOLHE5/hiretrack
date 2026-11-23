import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">HireTrack</h1>
      <Button>Get started</Button>
      <Button variant="destructive">Destructive</Button>
    </main>
  );
}