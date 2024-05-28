import "react-slidedown/lib/slidedown.css";
import "../styles/index.sass";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Xora",
    description: "Xora",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>XORA - SaaS Landing Page Kit</title>
                <meta
                    name="description"
                    content="XORA is a comprehensive design kit for startups, offering design files along with production-ready code in React (Next.js), HTML, CSS, and Vanilla JS."
                />
                <meta
                    property="og:url"
                    content="https://ui8-xora.vercel.app/"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="XORA - SaaS Landing Page Kit"
                />
                <meta
                    property="og:description"
                    content="XORA is a comprehensive design kit for startups, offering design files along with production-ready code in React (Next.js), HTML, CSS, and Vanilla JS."
                />
                <meta
                    property="og:image"
                    content="https://ui8-xora-ca7b53925e5b.herokuapp.com/facebook.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://ui8-xora.vercel.app/"
                />
                <meta
                    name="twitter:title"
                    content="XORA - SaaS Landing Page Kit"
                />
                <meta
                    name="twitter:description"
                    content="XORA is a comprehensive design kit for startups, offering design files along with production-ready code in React (Next.js), HTML, CSS, and Vanilla JS."
                />
                <meta
                    name="twitter:image"
                    content="https://ui8-xora-ca7b53925e5b.herokuapp.com/twitter.png"
                ></meta>
            </head>
            <body className={cn(inter.variable, poppins.variable)}>
                {children}
            </body>
        </html>
    );
}
