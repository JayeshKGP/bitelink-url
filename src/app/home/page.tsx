"use client"

import * as React from "react"
import Link from "next/link"
import { Loader2, Zap, BarChart3, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HomePage() {
  const [longUrl, setLongUrl] = React.useState("")
  const [customAlias, setCustomAlias] = React.useState("")
  const [shortUrl, setShortUrl] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement actual API call to shorten URL
    await new Promise(resolve => setTimeout(resolve, 1500))
    const alias = customAlias || Math.random().toString(36).substr(2, 6)
    setShortUrl(`https://bitelink.com/${alias}`)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <ChainIcon className="h-6 w-6 mr-2 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300">
              BiteLink
            </span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Button asChild variant="ghost">
              <Link href="#features">Features</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="#pricing">Pricing</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/auth">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Ad Placement 1: Top Banner */}
        <div className="bg-blue-100 p-2 text-center text-sm">
          <p>Ad Space: Top Banner - Highly visible, site-wide placement</p>
        </div>

        <section className="flex-1 flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify Your Links, Amplify Your Reach
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                  Transform long URLs into concise, powerful links. Track, analyze, and optimize your digital presence with BiteLink.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form onSubmit={handleShorten} className="space-y-4">
                  <div>
                    <Label htmlFor="longUrl">Long URL</Label>
                    <Input
                      id="longUrl"
                      className="mt-1"
                      placeholder="Paste your long URL here"
                      type="url"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customAlias">Custom Alias (Optional)</Label>
                    <div className="flex mt-1">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-100 text-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400">
                        btlk.me/
                      </span>
                      <Input
                        id="customAlias"
                        className="rounded-l-none"
                        placeholder="your-custom-alias"
                        type="text"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Shorten"}
                  </Button>
                </form>
              </div>
              {shortUrl && (
                <div className="flex items-center space-x-2 w-full max-w-md">
                  <Input value={shortUrl} readOnly className="flex-1" />
                  <Button onClick={() => navigator.clipboard.writeText(shortUrl)}>
                    Copy
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ad Placement 2: Between Sections */}
        <div className="bg-green-100 p-4 text-center">
          <p>Ad Space: Between Sections - Contextual placement for relevant ads</p>
        </div>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Custom Aliases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create memorable short links with your own custom aliases for easy sharing and branding.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Basic Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track clicks and get insights into your link performance to optimize your reach.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <QrCode className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>QR Code Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Generate QR codes for your shortened links to bridge online and offline marketing.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ad Placement 3: Sidebar (for larger screens) */}
        <div className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 bg-yellow-100 p-4">
          <p>Ad Space: Sidebar - Persistent visibility on larger screens</p>
        </div>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Free Plan</h2>
            <div className="max-w-sm mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Always Free</CardTitle>
                  <CardDescription>For everyone</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$0</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited links</li>
                    <li>Basic analytics</li>
                    <li>Custom aliases</li>
                    <li>QR code generation</li>
                    <li>30-day link history</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/auth">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 dark:bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white dark:text-slate-900">
                Ready to Simplify Your Links?
              </h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl dark:text-slate-700">
                Join thousands of users who trust BiteLink for their link management needs. It&apos;s free!
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/auth">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <ChainIcon className="h-6 w-6 text-slate-800 dark:text-slate-200" />
              <p className="text-center text-sm leading-loose text-slate-600 dark:text-slate-400 md:text-left">
                © 2023 BiteLink. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Ad Placement 4: Footer Banner */}
      <div className="bg-red-100 p-2 text-center text-sm">
        <p>Ad Space: Footer Banner - Last chance to engage users</p>
      </div>
    </div>
  )
}

function ChainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}