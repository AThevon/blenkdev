import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ToggleDarkMode() {
    const [isDark, setIsDark] = useState(false);
    return (
        <Button
            onClick={() => setIsDark(!isDark)}>
            {isDark ? "Light" : "Dark"}
        </Button>
    );
}