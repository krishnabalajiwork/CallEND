'use client'

import { neobrutalism } from "@clerk/themes"
import { SignIn } from "@clerk/nextjs"
import Image from "next/image"


 // Marks this file as a Client Component

export default function LandingPage() {
    return (
        <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
        {/* Section with branding, heading, subheading, and illustration */}
        <section className="flex flex-col items-center">
            {/* App Logo */}
            <Image
            src='/assets/logo.svg'
            width={300}
            height={300}
            alt="Logo"
            />

             {/* Main Heading */}
            <h1 className="text-2xl font-black lg:text-3xl">
            Ending calls, starting plans            </h1>

            {/* Subheading */}
            <p className="font-extralight">
            The easiest way to schedule and sync meetings, designed for busy professionals
            </p>

             <Image
            src='/assets/planning.svg'
            width={300}
            height={300}
            alt="Logo"
            />


        </section>


        <div className="mt-3">
            <SignIn
            routing="hash" // Keeps sign-in UI on the same page using hash-based routing
            appearance={{
                baseTheme: neobrutalism, // Applies the neobrutalism theme style to the sign-in UI
            }}
            />
        </div>


    </main>

    )
}
