// Import the necessary modules and styles
import './globals.css'  // Global styles
import { Inter } from 'next/font/google'  // Google font

// Define the Inter font with the 'latin' subset
const inter = Inter({ subsets: ['latin'] })

// Define the metadata for the application
export const metadata = {
  title: 'Next.JS & Flask TweetTok App',  // Title of the application
  description: 'Next.JS & Flask TweetTok App by Auroraa Innovation Labs & Aldo Ruiz Luna',  // Description of the application
}

// Define the RootLayout component
export default function RootLayout({
  children,  // Children to be rendered inside the layout
}: {
  children: React.ReactNode  // Type definition for the children prop
}) {
  // Return the JSX to be rendered
  return (
    <html lang="en">
      {/* Use the Inter font for the body */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
