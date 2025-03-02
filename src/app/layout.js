import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "FieldMaven",
  description: "Created by SSLH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
