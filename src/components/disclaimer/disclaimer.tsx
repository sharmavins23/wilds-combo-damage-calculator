import {
    Card,
    CardContent,
    CardDescription,
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
                    <Accordion type="single" collapsible className="w-full">
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
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                What assumptions did you make when calculating?
                            </AccordionTrigger>
                            <AccordionContent>
                                If you want to check out the code, feel free -
                                Link is in the header. However, any time I make
                                an assumption about how a thing works, I'll add
                                it in a tooltip.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Can you also implement an armor set builder?
                            </AccordionTrigger>
                            <AccordionContent>
                                God no. Go look at{" "}
                                <a
                                    href="https://mhwilds.wiki-db.com/sim/"
                                    target="_blank"
                                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                                >
                                    this simulator
                                </a>{" "}
                                instead.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}
