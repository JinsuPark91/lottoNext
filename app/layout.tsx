import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Lotto Captain Oh"
  },
  description: 'Lotto system for Captain Oh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}
