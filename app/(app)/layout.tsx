import { SiteFooter } from "@/components/site-footer"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  )
}
