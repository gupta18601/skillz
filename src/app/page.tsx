import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Blog App</h2>
      <p className="text-muted-foreground mb-6">
        This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        cumque alias unde quibusdam sapiente officia, atque praesentium libero
        magni, voluptatibus doloremque ab laudantium repudiandae at, soluta
        distinctio omnis vero culpa.
      </p>
      <Button>Get Started</Button>
    </div>
  );
}
