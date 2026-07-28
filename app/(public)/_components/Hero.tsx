import { ArrowRight, CheckCircle, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-secondary/10" />

      <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center px-4 py-16">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm shadow-sm">
              <CheckCircle className="h-4 w-4 text-primary" />
              Trusted Home Service Platform
            </div>


            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Find Trusted
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Technicians
              </span>
              {" "}for Your Home
            </h1>


            <p className="max-w-xl text-lg text-muted-foreground">
              FixItNow connects you with skilled professionals for repairs,
              maintenance, and home services. Book reliable technicians
              anytime, anywhere.
            </p>


            <div className="flex flex-col gap-3 sm:flex-row">

              <Link href="/services">
                <Button
                  size="lg"
                  className="w-full bg-linear-to-r from-primary to-secondary text-white shadow-lg transition hover:scale-105 sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>


              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Become a Technician
                </Button>
              </Link>

            </div>


            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  Verified Experts
                </span>
              </div>


              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  Quality Service
                </span>
              </div>

            </div>

          </div>


          {/* Right Content */}
          <div className="relative">

            <div className="rounded-3xl border bg-card p-6 shadow-2xl">

              <div className="space-y-5">

                <div className="rounded-2xl bg-primary/10 p-5">
                  <p className="text-sm text-muted-foreground">
                    Popular Service
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Home Repair & Maintenance
                  </h3>
                </div>


                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-xl border p-4">
                    <p className="text-2xl font-bold text-primary">
                      500+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Technicians
                    </p>
                  </div>


                  <div className="rounded-xl border p-4">
                    <p className="text-2xl font-bold text-primary">
                      1000+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Jobs Completed
                    </p>
                  </div>

                </div>


                <div className="rounded-xl border p-4">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        Plumbing Service
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Available Today
                      </p>
                    </div>

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                      Online
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;