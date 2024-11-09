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

export default function PrivacyPolicyPage() {
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
            <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include:</p>
            <ul>
              <li>Personal information (e.g., name, email address)</li>
              <li>Usage data (e.g., URLs shortened, click statistics)</li>
              <li>Device and browser information</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect the rights and safety of BiteLink and our users</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement reasonable measures to help protect your information from unauthorized access, use, or disclosure. However, no data transmission over the Internet is 100% secure.</p>

            <h2>5. Your Rights and Choices</h2>
            <p>You may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Contact us to exercise these rights.</p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at admin@bitelink.in.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}