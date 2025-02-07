import { freeCodeCampDark } from "@codesandbox/sandpack-themes";
import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";

const SandBox=({code})=> {
  return (
    <div className="px-4 bg-gray-800 pb-7">
      <Sandpack
        theme={freeCodeCampDark}
        template="react-ts"
        sandboxId="2p6stv"
        files={{
            '/App.tsx': {
              code,
            }
          }}
          customSetup= {{
            dependencies: {
              "lucide-react": "latest",
              "recharts": "2.9.0",
              "react-router-dom": "latest",
              "framer-motion": "latest",
              "react-icons": "latest",
              "axios": "latest",
              "@heroicons/react": "latest",
              "@radix-ui/react-accordion": "^1.2.0",
              "@radix-ui/react-alert-dialog": "^1.1.1",
              "@radix-ui/react-aspect-ratio": "^1.1.0",
              "@radix-ui/react-avatar": "^1.1.0",
              "@radix-ui/react-checkbox": "^1.1.1",
              "@radix-ui/react-collapsible": "^1.1.0",
              "@radix-ui/react-dialog": "^1.1.1",
              "@radix-ui/react-dropdown-menu": "^2.1.1",
              "@radix-ui/react-hover-card": "^1.1.1",
              "@radix-ui/react-label": "^2.1.0",
              "@radix-ui/react-menubar": "^1.1.1",
              "@radix-ui/react-navigation-menu": "^1.2.0",
              "@radix-ui/react-popover": "^1.1.1",
              "@radix-ui/react-progress": "^1.1.0",
              "@radix-ui/react-radio-group": "^1.2.0",
              "@radix-ui/react-select": "^2.1.1",
              "@radix-ui/react-separator": "^1.1.0",
              "@radix-ui/react-slider": "^1.2.0",
              "@radix-ui/react-slot": "^1.1.0",
              "@radix-ui/react-switch": "^1.1.0",
              "@radix-ui/react-tabs": "^1.1.0",
              "@radix-ui/react-toast": "^1.2.1",
              "@radix-ui/react-toggle": "^1.1.0",
              "@radix-ui/react-toggle-group": "^1.1.0",
              "@radix-ui/react-tooltip": "^1.1.2",
              "class-variance-authority": "^0.7.0",
              "clsx": "^2.1.1",
              "date-fns": "^3.6.0",
              "embla-carousel-react": "^8.1.8",
              "react-day-picker": "^8.10.1",
              "tailwind-merge": "^2.4.0",
              "tailwindcss-animate": "^1.0.7",
              "vaul": "^0.9.1"
            }
        }
        }
   
        options={{
          showNavigator: true,
          layout: "preview",
          showTabs: true,
          editorHeight: "600px",
          showLineNumbers: true,
          showInlineErrors: true,
          showRefreshButton: true,
          showConsoleButton: true,
          externalResources: ["https://unpkg.com/@tailwindcss/browser@4"]
        }}
        
      />
    </div>
  );
}

export default React.memo(SandBox);