import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LevelInput({
    disabled,
    maximum,
    name,
}: {
    disabled: boolean;
    maximum: number;
    name: string;
}) {
    return (
        <div>
            <Label htmlFor={`${name}-input`}>{name}</Label>
            <Input
                id={`${name}-input`}
                type="number"
                disabled={disabled}
                placeholder="--"
                min={0}
                max={maximum}
                defaultValue={0}
            />
        </div>
    );
}
