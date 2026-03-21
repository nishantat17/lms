"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandDialog, CommandInput } from "@/components/ui/command";

export function Searchbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Search anything...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search" />
        </Command>
      </CommandDialog>
    </div>
  );
}
