"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <img
        src="https://png.pngtree.com/background/20230616/original/pngtree-row-of-classic-cars-in-line-on-grass-at-a-show-picture-image_3620101.jpg"
        alt="Car collection"
        className="absolute inset-0 h-full w-full object-cover filter brightness-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Card Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-8">
        <Card className="bg-transparent text-white shadow-xl rounded-2xl border border-gray-300/30">
          <CardHeader>
            <CardTitle className="text-5xl font-extrabold text-gradient  py-2">
              Manage & Choose Your Cars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200">
              Your ultimate virtual garage—easily manage, organize, and explore your car collection.
            </p>
            {/* Get Started Button */}
            <Button
              onClick={() => router.push("/auth/signin")}
              variant={"link"}
              className="w-1/2 sm:w-1/3 lg:w-1/4 mx-auto text-white text-lg py-3 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
