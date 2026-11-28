import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24"
    >
      <h1
        id="hero-heading"
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Track every job application in one place
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Stop losing track of where you applied. See every application, every stage
        and every follow-up on one board.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button render={<Link href="/jobs" />} nativeButton={false} size="lg">
          Get started
        </Button>
        <Button
          render={<Link href="/about" />}
          nativeButton={false}
          size="lg"
          variant="outline"
        >
          Learn more
        </Button>
      </div>
    </section>
  );
}