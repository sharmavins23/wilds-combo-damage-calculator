import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Disclaimer() {
    return (
        <div className="flex w-full px-4">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>What is this?</CardTitle>
                    <CardDescription>
                        This page hosts a damage calculator for Monster Hunter:
                        Wilds. You can input skill levels, weapon types, and
                        monster hitzone values, as well as the combos you'd like
                        to compute on. All of that data gets fed into a damage
                        calculator, and out pops the results! From there, you
                        can 'save' builds to easily compare their outputs in a
                        table format at the bottom.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Why is 'x' not working?
                            </AccordionTrigger>
                            <AccordionContent>
                                Likely, it's not implemented yet. This project
                                will probably be a WIP effort for a LONG time,
                                as there's a lot of data on the back-end and a
                                lot of weird interactions that need to be
                                accounted for. Also, UI takes eons to make. In
                                the meanwhile, feel free to bother me or submit
                                a PR!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}
