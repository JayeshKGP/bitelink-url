"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4">
      <Link
        href="/"
        className="absolute left-4 top-4 flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 md:left-8 md:top-8"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      
      <div className="w-full max-w-3xl">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using BiteLink, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.</p>

            <h2>2. Description of Service</h2>
            <p>BiteLink provides URL shortening and related services. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>

            <h2>3. User Conduct</h2>
            <p>You agree not to use BiteLink to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware or engage in phishing</li>
              <li>Spam or send unsolicited messages</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>The BiteLink service and its original content, features, and functionality are owned by BiteLink and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

            <h2>5. Termination</h2>
            <p>We may terminate or suspend your access to BiteLink immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2>6. Limitation of Liability</h2>
            <p>In no event shall BiteLink, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at admin@bitelink.in.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}