import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import SignIn from '@/components/sign-in'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <SignIn />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}