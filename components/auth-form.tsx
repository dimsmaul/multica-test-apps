"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface AuthFormProps {
  mode: "signin" | "signup"
  onSubmit?: (data: AuthFormData) => void
}

export interface AuthFormData {
  email: string
  password: string
  confirmPassword?: string
}

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    ...(mode === "signup" && { confirmPassword: "" }),
  })
  const [error, setError] = useState<string>("")

  const mutation = useMutation({
    mutationFn: async (data: AuthFormData) => {
      const endpoint = mode === "signin" ? "/api/auth/signin" : "/api/auth/signup"
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Request failed")
      }

      return response.json()
    },
    onSuccess: (data) => {
      if (onSubmit) onSubmit(formData)
      setError("")
    },
    onError: (err) => {
      setError(err instanceof Error ? err.message : "An error occurred")
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.email || !formData.password) {
      setError("Email and password are required")
      return
    }

    if (mode === "signup") {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        return
      }
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters")
        return
      }
    }

    mutation.mutate(formData)
  }

  const isLoading = mutation.isPending

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      {mode === "signup" && (
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword || ""}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </div>
      )}

      {error && (
        <div className="p-3 bg-destructive/10 text-destructive rounded-md text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading
          ? mode === "signin"
            ? "Signing in..."
            : "Creating account..."
          : mode === "signin"
            ? "Sign in"
            : "Create account"}
      </Button>
    </form>
  )
}
