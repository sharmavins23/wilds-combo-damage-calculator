import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/header";
import { Disclaimer } from "@/components/disclaimer/disclaimer";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <Disclaimer />
        </ThemeProvider>
    );
}

export default App;
