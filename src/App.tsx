import { Disclaimer } from "@/components/disclaimer/disclaimer";
import { Form } from "@/components/form/form";
import { Header } from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col gap-4 px-40">
                <Header />
                <Disclaimer />
                <Separator />
                <Form />
            </div>
        </ThemeProvider>
    );
}

export default App;
