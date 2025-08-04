"use client";

import Introduccion from "@/app/(routes)/index/introduccion";
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
