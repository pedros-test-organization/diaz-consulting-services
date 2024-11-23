import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
]

import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="bg-background shadow-bottom relative z-10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-muted py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              Logo
            </a>
          </div>
          <div className="ml-4 space-x-4 flex items-center">
            <div className="hidden ml-4 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-medium hover:text-primary">
                  {link.name}
                </a>
              ))}
            </div>
            <ModeToggle />
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="mt-6 flow-root">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-muted"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}