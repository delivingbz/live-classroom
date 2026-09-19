"use client";
import Link from "next/link";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm md:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-600">
            Login to continue.
          </p>
        </div>

        <form className="mt-8 space-y-5">
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
              placeholder="Enter your password"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

            <div className="text-center">
                <Link
                     href="/forgot-password"
                     className="text-sm font-medium  text-gray-600 transition hover:text-black"
                >
                    Forgot password?
                </Link>
            </div>


                <button
                     type="submit"
                     className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                         Login
                </button>


        </form>

        <div className="mt-6 border-t pt-6 text-center">
            <p className="text-sm text-gray-600">
                     Don&apos;t have an account?
            </p>

            <Link
                href="/register"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg border px-5 py-3 font-medium transition hover:bg-gray-50"
            >
                Create Account
            </Link>
        </div>

      </section>
    </main>
  );
}