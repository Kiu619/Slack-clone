import MainContent from '@/components/main-content'
import { ColorPrefrencesProvider } from '@/providers/color-prefrences'
import { ThemeProvider } from '@/providers/theme-provider'
import { WebSocketProvider } from '@/providers/web-socket'
import { QueryProvider } from '@/providers/query-prodiver'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <WebSocketProvider>
        <ColorPrefrencesProvider>
          <MainContent>
            <QueryProvider>{children}</QueryProvider>
          </MainContent>
        </ColorPrefrencesProvider>
      </WebSocketProvider>
    </ThemeProvider>
  )
}
