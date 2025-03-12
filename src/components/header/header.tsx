import { ModeToggle } from "@/components/header/mode-toggle";
import decoIcon from "@/assets/decos/red4.svg";

export function Header() {
    return (
        <header className="flex h-16 justify-between">
            {/* Left portion */}
            <div className="flex items-center gap-2 px-4">
                <img src={decoIcon} alt="Decoration Icon" className="h-6 w-6" />
                <b>
                    <span className="text-gray-500">(MH)</span> Wilds Combo
                    Damage Calculator
                </b>
            </div>

            {/* Right portion */}
            <div className="flex items-center px-4">
                <ModeToggle />
            </div>
        </header>
    );
}
