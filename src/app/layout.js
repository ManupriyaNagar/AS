import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Active Sine',
  description: 'Electrical Quality Services',
  icons: {
    icon: "/ACTIVESINE.jpg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {Array.from({ length: 100 }, (_, i) => (
          <meta
            key={i}
            name={`active-sine-${i + 1}`}
            content="active sine works on electronic devices and quality power apfc"
          />
        ))}
      </head>
      <body>
        <Header /> {/* If this is fixed/absolute, it might overlap content */}
        <main className=""> {/* Add top padding if needed */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
