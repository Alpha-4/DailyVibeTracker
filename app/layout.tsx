import {ClerkProvider} from '@clerk/nextjs'
import './globals.css'
import '@radix-ui/themes/styles.css';
import {Inter as font_style} from 'next/font/google'
import {Theme} from '@radix-ui/themes';

const font = font_style({
  subsets: ['latin']
})

export const metadata = {
  title: 'DailyMoodTracker',
  description: 'A mood analyzer for your daily life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Theme>
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  )
}
