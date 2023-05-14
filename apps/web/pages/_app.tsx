import "ui/styles";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
