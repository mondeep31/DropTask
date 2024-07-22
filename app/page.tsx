"use client";
import DashBoard from "@/components/DashBoard";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dnd Todo List</h1>
        <Button>
          <a href="">
            <GitHubLogoIcon />
          </a>
        </Button>
      </div>
      {/* dashboard */}
      <DashBoard />
      <div className="my-3 min-w-fit flex flex-col items-end">
        <h3 className="hidden lg:flex font-bold mb-2">Shortcuts</h3>
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium ">
          <span className="mr-3">- New Task</span>
          <kbd className="pointer-events-none select-none  rounded border px-1 leading-none text-white text-xl bg-slate-950 border-slate-950">
            ⌘
          </kbd>
          <kbd className="pointer-events-none select-none  rounded border px-1.5 text-white bg-slate-950 border-slate-950">
            K
          </kbd>
        </div>
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium mt-1">
          <span className="mr-3">- Close Task Form</span>
          <kbd className="pointer-events-none select-none  rounded border px-1.5 text-white bg-slate-950 border-slate-950">
            Esc
          </kbd>
        </div>
      </div>
    </main>
  );
}
