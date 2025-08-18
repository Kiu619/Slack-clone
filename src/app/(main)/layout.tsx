import MainContent from '@/components/main-content'
import { ColorPrefrencesProvider } from '@/providers/color-prefrences'
import { ThemeProvider } from '@/providers/theme-provider'

export default function MainLayout({
  children,
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
      <ColorPrefrencesProvider>
        <MainContent>{children}</MainContent>
      </ColorPrefrencesProvider>
    </ThemeProvider>
  )
}
