import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">/// 404</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold text-foreground sm:text-7xl">
        Lost the thread.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        This page doesn&apos;t exist — or it moved somewhere better.
      </p>
      <Button href="/" size="lg" className="mt-8">Back home</Button>
    </main>
  );
}
