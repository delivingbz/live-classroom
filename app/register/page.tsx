"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setError("");

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    setError("Please fill in all fields.");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log("Server response:", data);
  } catch (error) {
    console.error("Registration error:", error);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm md:p-8">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-gray-600">
            Join Live Classroom and start learning.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {error && (
                     <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                         {error}
                     </p>
            )}

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium"
            >
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="John"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="text-sm font-medium"
            >
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Doe"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              placeholder="Confirm your password"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

            <button
                 type="submit"
                 disabled={loading}
                 className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
                 {loading ? "Creating Account..." : "Create Account"}
            </button>
        </form>

        <div className="mt-6 border-t pt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg border px-5 py-3 font-medium transition hover:bg-gray-50"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}