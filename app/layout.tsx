import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from '@/app/components/ClientOnly'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peanut Front End',
  description: 'Technical Assignment Task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white  min-h-screen flex flex-col w-full max-w-[1500px] mx-auto`}>
        <ClientOnly>
          <ToastContainer />
        </ClientOnly>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
