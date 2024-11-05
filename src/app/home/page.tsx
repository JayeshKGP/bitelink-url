"use client"

import * as React from "react"
import Link from "next/link"
import { Loader2, Share2, QrCode, ChevronRight } from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HomePage() {
  const [longUrl, setLongUrl] = React.useState("")
  const [customAlias, setCustomAlias] = React.useState("")
  const [shortUrl, setShortUrl] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    const generatedAlias = customAlias || Math.random().toString(36).substr(2, 6)
    setShortUrl(`https://bitelink.com/${generatedAlias}`)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-slate-200 dark:border-slate-800">
        <Link className="flex items-center justify-center" href="/">
          <ChainIcon className="h-6 w-6 mr-2 text-slate-800 dark:text-slate-200" />
          <span className="text-lg font-bold text-slate-800 dark:text-slate-200">BiteLink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link 
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            href="/login"
          >
            Log In
          </Link>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-900 dark:text-slate-50">
                  Simplify Your Links with BiteLink
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                  Transform long URLs into concise, memorable links in seconds. Boost your online presence with our powerful URL shortener.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleShorten} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="url">Long URL</Label>
                    <Input
                      id="url"
                      placeholder="https://example.com/very/long/url"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alias">Custom Alias (optional)</Label>
                    <Input
                      id="alias"
                      placeholder="my-custom-link"
                      value={customAlias}
                      onChange={(e) => setCustomAlias(e.target.value)}
                    />
                  </div>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Shortening...
                      </>
                    ) : (
                      "Shorten URL"
                    )}
                  </Button>
                </form>
              </div>
              {shortUrl && (
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Your Shortened URL</CardTitle>
                    <CardDescription>Copy and share your new link</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Input value={shortUrl} readOnly />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigator.clipboard.writeText(shortUrl)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <QrCode className="mr-2 h-4 w-4" />
                          QR Code
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>QR Code for Your Shortened URL</DialogTitle>
                          <DialogDescription>Scan this code to access your shortened link</DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-center">
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`}
                            alt="QR Code"
                            width={200}
                            height={200}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Facebook</DropdownMenuItem>
                        <DropdownMenuItem>Twitter</DropdownMenuItem>
                        <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-slate-900 dark:text-slate-50">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Custom Aliases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 dark:text-slate-400">
                    Create memorable links with your own custom aliases.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 dark:text-slate-400">
                    Track clicks and gather insights about your audience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>QR Codes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 dark:text-slate-400">
                    Generate QR codes for easy sharing in print and digital media.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full items-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2024 BiteLink. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              href="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              href="/privacy"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
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