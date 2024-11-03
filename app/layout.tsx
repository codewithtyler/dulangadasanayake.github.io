import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'

const poppins = Poppins({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Portfolio Template",
    description: "A customizable portfolio template",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    )
} 