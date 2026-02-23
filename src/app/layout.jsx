import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";


const roboto = Roboto({
  weight: ["200","400","500","700", "800"],
  variables: ["--font-roboto"],
});

export const metadata = {
  title: {
    default: "Care.IO",
    template: "%s | Care.IO"
  },
  description: "clean your car easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
