"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Squares from "@/components/Squares";
import SpotlightCard from "@/components/SpotlightCard";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import LaserFlow from "@/components/LaserFlow";
import Silk from "@/components/Silk";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tilt } from "@/components/ui/tilt";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { InView } from "@/components/ui/in-view";
import AnimatedContent from "@/components/AnimatedContent";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedRole, setSelectedRole] = useState("students");

  useEffect(() => {
    setMounted(true);
  }, []);

  const screenshots = ["/bg1-dark.png", "/bg2-dark.png", "/bg3-dark.png", "/bg4-dark.png"];

  const mobileScreenshots = ["/mobile1-dark.jpg", "/mobile2-dark.jpg", "/mobile3-dark.jpg", "/mobile4-dark.jpg"];

  const roleImages: Record<string, string> = {
    students: "/students-dark.png",
    organizations: "/organizations-dark.png",
    advisers: "/advisers-dark.png",
    approvers: "/approvers-dark.png",
    admins: "/admins-dark.png",
  };

  return (
    <div className="relative">
      <main className="container mx-auto px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
          {/* Squares Background */}
          {mounted && resolvedTheme === "dark" && (
            <InView
              viewOptions={{ once: true, margin: '0px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
              }}
            >
              <div className="hidden lg:block absolute top-0 left-0 w-full h-[600px] md:h-full md:inset-0 -z-10">
                <Squares
                  speed={0.2}
                  squareSize={40}
                  direction="down"
                  borderColor="#13338f"
                  hoverFillColor="#222222"
                />
              </div>
            </InView>
          )}

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.95}
            threshold={0.2}
            delay={0.2}
          >
            <div className="relative flex flex-col gap-12 items-center max-w-7xl mx-auto py-10 lg:pt-25 lg:pb-15">
              {/* Top - Text Content */}
              <div className="px-4 sm:px-8 md:px-16 lg:px-60 relative z-20 space-y-8 text-center w-full">

              {/* Black fade background */}
              {mounted && resolvedTheme === "dark" && (
                <div className="hidden sm:block absolute -inset-4 sm:-inset-6 lg:inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-transparent rounded-3xl blur-2xl"></div>
              )}
              
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                <span className="text-primary">BU-Ugnayan: </span>A Virtual Space for Bicol University Student Organizations
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Streamline event proposals, accreditation, and collaboration in one digital workspace.
                Say goodbye to paper trails and hello to seamless connection.
                </p>
              </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
              href="#signup"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
              Get Started
              </a>
              <a
              href="#features"
              className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
              Explore Features
              </a>
            </div>
            </div>



            {/* LaserFlow overlay positioned on top - only on dark mode desktop */}
            <div className="hidden dark:lg:block absolute top-25 xl:top-19 bottom-0 -left-5 right-40 pointer-events-none z-10 rounded-lg overflow-hidden">
              <LaserFlow
                color="#3b82f6"
                fogIntensity={0.3}
                wispDensity={0.9}
                verticalBeamOffset={0.10}
              />
            </div>

          {/* Bottom - Image Carousel */}
            <div className="z-20 relative w-full max-w-4xl">
            <Carousel className="w-full">
              <CarouselContent>
                {screenshots.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={1876 / 902} className="rounded-lg overflow-hidden border bg-muted shadow-2xl">
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
          </div>
          </AnimatedContent>
        </section>

        {/* Problem vs Solution Section */}
        <section id="about" className="py-10 lg:py-25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl  font-bold tracking-tight mb-4">
                  A Better Way to <span className="text-primary">Manage</span>
                </h2>
                <p className="text-lg text-muted-foreground lg:px-50">
                  See how BU-Ugnayan transforms organizational management
                  Leave the frustrations of manual processes behind.
                </p>
              </div>
            </InView>

            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* The Problem */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 99, 71, 0.2)">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">The Problem</h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Lost paperwork, delayed signatures, and scattered communication channels.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm">Physical proposals get stuck waiting for signatures.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm">Vital files get lost in personal drives and disjointed folders.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm">Important announcements get lost in the noise.</span>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
                </InView>

              {/* The Solution */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                >
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(59, 130, 246, 0.2)">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">The Solution</h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A centralized platform where proposals move digitally, files are archived automatically, and every member stays in the loop.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">Automate routing for faster event approvals.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">Centralize and preserve records automatically.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">Stay synced with instant notifications.</span>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
                </InView>
              </div>
            </InView>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-10 lg:py-25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl  font-bold tracking-tight mb-4">
                  Everything You Need in <span className="text-primary">One Platform</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Powerful features designed to simplify every aspect of organization management
                </p>
              </div>
            </InView>

            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <InfiniteSlider speedOnHover={20} gap={24}>
              {/* Event Management */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Event Management</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Streamlined Approvals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Draft, submit, and monitor proposals digitally. Watch your event move through the approval pathway with real-time status updates.
                  </p>
                </CardContent>
              </Card>

              {/* Digital Workspace */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Digital Workspace</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Centralized Collaboration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    A dedicated hub for your officers. Manage shared drives, track financial workbooks, and store meeting minutes in one secure space.
                  </p>
                </CardContent>
              </Card>

              {/* Accreditation Helper */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Accreditation Helper</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Compliance Made Easy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Stay accredited without the stress. Monitor your real-time requirement checklist and automatically archive your accomplishment reports.
                  </p>
                </CardContent>
              </Card>

              {/* Smart Task Tracking */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Smart Task Tracking</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Project Management Built-In
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Break down events into tasks and subtasks, assign coordinators, and track budget utilization and completion status in real-time.
                  </p>
                </CardContent>
              </Card>

              {/* Support System */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Support System</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Integrated Help Desk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Submit support tickets for technical problems or account inquiries directly within the platform and track their resolution status.
                  </p>
                </CardContent>
              </Card>

              {/* Centralized Announcements */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Centralized Announcements</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Targeted Communication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Receive urgent university memos and organization updates filtered specifically for your role, ensuring you only see what matters.
                  </p>
                </CardContent>
              </Card>

              {/* Digital Recruitment */}
              <Card className="border-border bg-card/80 w-[320px] flex-shrink-0 transition-all duration-300 hover:border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Digital Recruitment</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-primary">
                    Seamless Onboarding
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Launch open application drives for new members or officers, review digital application forms, and approve rosters without paper.
                  </p>
                </CardContent>
              </Card>
            </InfiniteSlider>
            </InView>
          </div>
        </section>

        {/* Mobile Accessibility Section */}
        <section id="mobile" className="py-10 lg:py-25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Your Organization in <span className="text-primary">Your Pocket</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Stay connected wherever you are. BU-Ugnayan is fully responsive and optimized for mobile devices, ensuring you never miss an update.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Mobile Features Highlight</h3>
                  
                  <div className="space-y-5">
                    {/* Real-time Notifications */}
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Notifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Instantly see when a proposal is signed or returned for revision.
                        </p>
                      </div>
                    </div>

                    {/* Quick Approvals */}
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Quick Approvals</h4>
                        <p className="text-sm text-muted-foreground">
                          Advisers and Admins can review and approve documents directly from their phones.
                        </p>
                      </div>
                    </div>

                    {/* Event Updates */}
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Event Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Students can view upcoming events and announcements on the fly.
                        </p>
                      </div>
                    </div>

                    {/* Task Tracking */}
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Task Tracking</h4>
                        <p className="text-sm text-muted-foreground">
                          Officers can manage tasks and check progress while on campus grounds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </InView>

              {/* Right: Mobile Phone Mockup */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[280px]">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {mobileScreenshots.map((screenshot, index) => (
                        <CarouselItem key={index}>
                          <div className="relative w-full h-[580px] rounded-3xl overflow-hidden border border-border bg-muted shadow-2xl">
                            <Image
                              src={screenshot}
                              alt={`Mobile Screenshot ${index + 1}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 280px"
                              className="object-cover"
                              priority={index === 0}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-2 mt-4">
                      <CarouselPrevious className="static translate-y-0 h-8 w-8" />
                      <CarouselNext className="static translate-y-0 h-8 w-8" />
                    </div>
                  </Carousel>
                </div>
                </div>
                </InView>
              </div>
            </InView>
          </div>
        </section>

        {/* Built for Every Role Section */}
        <section id="roles" className="py-10 lg:py-25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Built for <span className="text-primary">Every Role</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Whether you're a student leader, a faculty adviser, or an administrator, BU-Ugnayan is designed to make your specific role easier.
                </p>
              </div>
            </InView>

            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Accordion */}
                <div>
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full"
                  defaultValue="students"
                  onValueChange={(value) => setSelectedRole(value || "students")}
                >
                  {/* Students */}
                  <AccordionItem value="students">
                    <AccordionTrigger>Students</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Access a unified hub for digital membership applications, event discovery, and real-time organizational updates.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Organizations */}
                  <AccordionItem value="organizations">
                    <AccordionTrigger>Organizations</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Centralize operations with tools for event proposals, task tracking, financial monitoring, and automated archiving.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Advisers */}
                  <AccordionItem value="advisers">
                    <AccordionTrigger>Advisers</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Streamline oversight with digital proposal reviews, real-time activity monitoring, and meeting management.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Administrative Approvers */}
                  <AccordionItem value="approvers">
                    <AccordionTrigger>Administrative Approvers</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Accelerate workflows by digitally signing proposals and accessing university-wide compliance data.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* System Administrators */}
                  <AccordionItem value="admins">
                    <AccordionTrigger>System Administrators</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Maintain full control through centralized user management, global configuration settings, and detailed security logs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                </div>

                {/* Right: Image Holder */}
                <div className="lg:sticky lg:top-8">
                <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border bg-muted shadow-2xl">
                  <Image
                    src={roleImages[selectedRole] || roleImages.students}
                    alt={`${selectedRole} view`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-opacity duration-300"
                  />
                </AspectRatio>
                </div>
              </div>
            </InView>
          </div>
        </section>

        {/* Meet the Developers Section */}
        <section id="team" className="py-10 lg:py-20">
          <div className=" ">
            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Meet the <span className="text-primary">Developers</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  The passionate team behind BU-Ugnayan
                </p>
              </div>
            </InView>

            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-items-center">

              {/* Developer 1 */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <Tilt rotationFactor={15} isRevese className="h-full">
                  <div
                    style={{
                      borderRadius: '12px',
                    }}
                    className='flex w-full h-full max-w-[270px] flex-col overflow-hidden border border-border bg-white dark:border-border dark:bg-border/50'
                  >
                    <img
                      src='/Gñilo, Jela Mae N..jpg'
                      alt='Gñilo, Jela Mae N.'
                      className='aspect-square w-full object-cover flex-shrink-0'
                    />
                    <div className='p-5  text-center space-y-1 flex-grow flex flex-col justify-center'>
                      <h1 className=' text-sm font-semibold leading-snug text-zinc-950 dark:text-zinc-50'>
                        Jela Mae Gñilo
                      </h1>
                      <p className=' text-sm text-primary font-medium'>Front-end Developer</p>
                    </div>
                  </div>
                </Tilt>
                </InView>

              {/* Developer 2 */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
                  }}
                >
                  <Tilt rotationFactor={15} isRevese className="h-full">
                  <div
                    style={{
                      borderRadius: '12px',
                    }}
                    className='flex w-full h-full max-w-[270px] flex-col overflow-hidden border border-border bg-white dark:border-border dark:bg-border/50'
                  >
                    <img
                      src='/Lleva, Manuel Andrei L..jpg'
                      alt='Lleva, Manuel Andrei L.'
                      className='aspect-square w-full object-cover flex-shrink-0'
                    />
                    <div className='p-5 text-center space-y-1 flex-grow flex flex-col justify-center'>
                      <h1 className=' text-sm font-semibold leading-snug text-zinc-950 dark:text-zinc-50'>
                        Manuel Andrei Lleva
                      </h1>
                      <p className=' text-sm text-primary font-medium'>Front-end Developer</p>
                    </div>
                  </div>
                </Tilt>
                </InView>

              {/* Developer 3 */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                >
                  <Tilt rotationFactor={15} isRevese className="h-full">
                  <div
                    style={{
                      borderRadius: '12px',
                    }}
                    className='flex w-full h-full max-w-[270px] flex-col overflow-hidden border border-border bg-white dark:border-border dark:bg-border/50'
                  >
                    <img
                      src='/Matamorosa, Janine Ishe M..jpg'
                      alt='Matamorosa, Janine Ishe M.'
                      className='aspect-square w-full object-cover flex-shrink-0'
                    />
                    <div className='p-5 text-center space-y-1 flex-grow flex flex-col justify-center'>
                      <h1 className=' text-sm font-semibold leading-snug text-zinc-950 dark:text-zinc-50'>
                        Janine Ishe Matamorosa
                      </h1>
                      <p className=' text-sm text-primary font-medium'>Back-end Developer</p>
                    </div>
                  </div>
                </Tilt>
                </InView>

              {/* Developer 4 */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
                  }}
                >
                  <Tilt rotationFactor={15} isRevese className="h-full">
                  <div
                    style={{
                      borderRadius: '12px',
                    }}
                    className='flex w-full h-full max-w-[270px] flex-col overflow-hidden border border-border bg-white dark:border-border dark:bg-border/50'
                  >
                    <img
                      src='/Obligacion, Rouen R..jpg'
                      alt='Obligacion, Rouen R.'
                      className='aspect-square w-full object-cover flex-shrink-0'
                    />
                    <div className='p-5 text-center space-y-1 flex-grow flex flex-col justify-center'>
                      <h1 className=' text-sm font-semibold leading-snug text-zinc-950 dark:text-zinc-50'>
                        Rouen R. Obligacion
                      </h1>
                      <p className=' text-sm text-primary font-medium'>Lead Developer</p>
                    </div>
                  </div>
                </Tilt>
                </InView>

              {/* Developer 5 */}
                <InView
                  viewOptions={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
                  }}
                >
                  <Tilt rotationFactor={15} isRevese className="h-full">
                  <div
                    style={{
                      borderRadius: '12px',
                    }}
                    className='flex w-full h-full max-w-[270px] flex-col overflow-hidden border border-border bg-white dark:border-border dark:bg-border/50'
                  >
                    <img
                      src='https://i.redd.it/3mxdd5sdeise1.jpeg'
                      alt='Palomillo, Vinz Russel Q.'
                      className='aspect-square w-full object-cover flex-shrink-0'
                    />
                    <div className='p-5 text-center space-y-1 flex-grow flex flex-col justify-center'>
                      <h1 className=' text-sm font-semibold leading-snug text-zinc-950 dark:text-zinc-50'>
                        Vinz Russel Palomillo
                      </h1>
                      <p className=' text-sm text-primary font-medium'>Database Manager</p>
                    </div>
                  </div>
                </Tilt>
                </InView>
              </div>
            </InView>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="">
            <InView
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
              }}
            >
              <Card className="relative overflow-hidden  shadow-2xl min-h-[400px]">
              {/* Silk Background */}
              {mounted && ( 
                <div className="absolute inset-0 z-0 opacity-40 w-full h-full pointer-events-none">
                  <Silk
                    speed={5}
                    scale={1}
                    color="#11328d"
                    noiseIntensity={1.5}
                    rotation={0}
                  />
                </div>
              )}
              
              <CardContent className="relative z-10 p-12 text-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Help Us Improve
                  </h2>
                  <p className="text-lg md:text-xl font-semibold text-primary">
                    Shape the Future of BU-Ugnayan
                  </p>
                  <p className="text-base  max-w-2xl mx-auto leading-relaxed">
                    We are committed to building the best possible experience for the Bicol University community. 
                    After testing the system features—from proposal tracking to digital archiving—please take a moment 
                    to share your feedback. Your insights are critical for our final improvements.
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="https://forms.gle/MWa9rRsQbhqCDr5w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Evaluate the System
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">
                    Submit Your Feedback
                  </p>
                </div>
              </CardContent>
            </Card>
            </InView>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">BU-Ugnayan</h2>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  A Virtual Space for Bicol University Student Organizations
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://bu-ugnayan.org/login" 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Student Login
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://bu-ugnayan.org/faculty/login" 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Faculty Login
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://bu-ugnayan.org/login" 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Admin Login
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://bu-ugnayan.org/privacy-policy" 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-primary-foreground/20 pt-8">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
