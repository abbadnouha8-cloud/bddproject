"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Mock login delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock error (remove or replace with success later)
    setError("Invalid email or password. Please try again.");

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#FFFFFF" }}>
      {/* WHITE background */}
      <Card className="w-full max-w-md shadow-xl" style={{ backgroundColor: "#FCFCED", borderColor: "#07214B" }}>
        {/* Ivory card, Prussian Blue border */}
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold" style={{ color: "#07214B" }}>
            Welcome back
          </CardTitle>
          <CardDescription style={{ color: "#050F10" }}>
            Enter your email or username and password to log in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="identifier" style={{ color: "#07214B", fontWeight: "600" }}>
                Email or Username
              </Label>
              <Input
                id="identifier"
                type="text"
                placeholder="john@example.com or john_doe"
                required
                disabled={isLoading}
                className="border-gray-300 focus:border-[#07214B] focus:ring-[#07214B]"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" style={{ color: "#07214B", fontWeight: "600" }}>
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                disabled={isLoading}
                className="border-gray-300 focus:border-[#07214B] focus:ring-[#07214B]"
                style={{ backgroundColor: "white" }}
              />
            </div>

            {error && (
              <Alert variant="destructive" className="border-red-600">
                <AlertDescription style={{ color: "#050F10" }}>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full text-lg font-medium transition-all"
              disabled={isLoading}
              style={{
                backgroundColor: "#07214B",
                color: "#FCFCED",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#050F10")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07214B")}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm" style={{ color: "#050F10" }}>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium underline transition-colors"
              style={{ color: "#07214B" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#050F10")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#07214B")}
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}