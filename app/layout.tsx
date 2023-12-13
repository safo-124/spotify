import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'


const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <SideBar>
              {children}
            </SideBar>
          </UserProvider>
        </SupabaseProvider> 
      </body>
    </html>
  )
}
