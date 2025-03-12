import decoBeige3 from "@/assets/decos/beige3.svg";
import decoBlue3 from "@/assets/decos/blue3.svg";
import decoPurple3 from "@/assets/decos/purple3.svg";
import decoRed3 from "@/assets/decos/red3.svg";
import { LevelInput } from "@/components/form/level-input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function Form() {
    let gridLayout =
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pt-4";
    return (
        <div className="flex flex-col w-full px-4 gap-2">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <img
                                src={decoRed3}
                                alt="Decoration Icon"
                                className="h-6 w-6"
                            />
                            <span className="text-gray-500">WEAPON</span>{" "}
                            <b>Attack</b>
                            skills
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Skills that modify your weapon's damage (raw) directly.
                    </CardDescription>
                    <CardContent>
                        <div className={gridLayout}>
                            <LevelInput
                                disabled={true}
                                maximum={1}
                                name="Airborne"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Artillery"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={5}
                                name="Attack Boost"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Offensive Guard"
                            />
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <img
                                src={decoPurple3}
                                alt="Decoration Icon"
                                className="h-6 w-6"
                            />
                            <span className="text-gray-500">WEAPON</span>{" "}
                            <b>Critical</b> skills
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Skills that modify your weapon's damage on critical
                        hits.
                    </CardDescription>
                    <CardContent>
                        <div className={gridLayout}>
                            <LevelInput
                                disabled={true}
                                maximum={5}
                                name="Critical Boost"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Critical Draw"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={5}
                                name="Critical Eye"
                            />
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <img
                                src={decoBeige3}
                                alt="Decoration Icon"
                                className="h-6 w-6"
                            />
                            <span className="text-gray-500">WEAPON</span>{" "}
                            <b>Elemental</b> skills
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Skills that modify your weapon's elemental/status
                        output.
                    </CardDescription>
                    <CardContent>
                        <div className={gridLayout}>
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Charge Master"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Critical Element"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={5}
                                name="Critical Status"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Elemental Attack"
                            />
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <img
                                src={decoBlue3}
                                alt="Decoration Icon"
                                className="h-6 w-6"
                            />
                            <span className="text-gray-500">WEAPON</span>{" "}
                            <b>Sharpness</b> skills
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Skills that assist with sharpening your melee weapon.
                    </CardDescription>
                    <CardContent>
                        <div className={gridLayout}>
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Handicraft"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={1}
                                name="Master's Touch"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Protective Polish"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Razor Sharp"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={2}
                                name="Speed Sharpening"
                            />
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <img
                                src={decoBlue3}
                                alt="Decoration Icon"
                                className="h-6 w-6"
                            />
                            <span className="text-gray-500">WEAPON</span>{" "}
                            <b>Ranged</b> skills
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Skills that assist with output on ranged weapons.
                    </CardDescription>
                    <CardContent>
                        <div className={gridLayout}>
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Ballistics"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Normal Shots"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Opening Shot"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Piercing Shots"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Rapid Fire Up"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={2}
                                name="Special Ammo Boost"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Spread/Power Shots"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Tetrad Shot"
                            />
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <img
                                src={decoBlue3}
                                alt="Decoration Icon"
                                className="h-6 w-6"
                            />
                            <span className="text-gray-500">WEAPON</span>{" "}
                            <b>Utility</b> skills
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Skills that offer you additional utility against the
                        monster.
                    </CardDescription>
                    <CardContent>
                        <div className={gridLayout}>
                            <LevelInput
                                disabled={true}
                                maximum={1}
                                name="Charge Up"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Guard"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={3}
                                name="Guard Up"
                            />
                            <LevelInput
                                disabled={true}
                                maximum={2}
                                name="Load Shells"
                            />
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}
