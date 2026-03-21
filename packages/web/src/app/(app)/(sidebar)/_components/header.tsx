import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Searchbar } from "./searchbar";

export default function Header() {
  return (
    <header className="p-2 sm:p-4 flex items-center">
      <SidebarTrigger size="icon-lg" />
      <Separator orientation="vertical" className="mx-2" />
      <div className="mx-2">
        <h3 className="font-semibold text-xl">Header Title</h3>
      </div>
      <div className="ml-auto">
        <Searchbar />
      </div>
    </header>
  );
}
