import { BoardProvider } from "../context/BoardContext/BoardContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen p-6 lg:p-16 bg-slate-950 text-white">
        <div className=" md:max-w-screen-xl mx-auto">
          <BoardProvider>{children}</BoardProvider>
        </div>
      </body>
    </html>
  );
}
