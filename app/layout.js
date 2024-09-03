

import {JetBrains_Mono} from "next/font/google"
import "./globals.css";
import { Inter } from 'next/font/google';

//Components

import Header from "@/components/Header";
//Page Trainsition
import PageTransition from "@/components/PageTransition"
//Stair Transition
import StairTransition from "@/Components/StairTransition"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"] , 
  Weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-jetbrainsMono',
});

export const metadata = {
  title: "Ibn Adam ",
  description: "Generated by Engineer Shahan Nafees",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>
         {children}
        </PageTransition>
        
        </body>
    </html>
  );
}
