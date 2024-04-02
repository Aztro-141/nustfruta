import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-0 z-50 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container text-sm xs:text-base flex h-12 max-w-screen-2xl gap-2 items-center justify-center">
        <GitHubLogoIcon className="h-5 w-5 xs:h-6 xs:w-6" />
        <p className="text-muted-foreground">Created and Powered by <Link href="https://github.com/TahaShah141" target="_blank"><span className="text-primary font-bold underline">Taha Shah.</span></Link></p>
      </div>
    </footer>
  )
}

