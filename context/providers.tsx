"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react"; // Add this import

export default function Providers({ children }: { children: ReactNode }) { // Specify the type of children prop
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
    );
}