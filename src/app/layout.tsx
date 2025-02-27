"use client";

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { HeaderMenu } from "../components/ui/DoubleHeader";
import "./globals.css"; // Import global styles

const theme = createTheme({
  colors: {
    darkPrimary: [
      "#1a1a1a", // Almost black
      "#262626", // Dark gray
      "#333333", // Deep gray
      "#404040", // Charcoal gray
      "#4d4d4d", // Muted gray
      "#595959", // Neutral dark gray
      "#666666", // Soft dark gray
      "#737373", // Balanced dark gray
      "#808080", // Classic gray
      "#8c8c8c", // Lightest shade in the dark theme
    ],
  },
  primaryColor: "darkPrimary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <HeaderMenu />

          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
