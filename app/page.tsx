"use client";

import Introduccion from "@/components/introduccion";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Introduccion/>
      </div>
    </main>
  );
}
