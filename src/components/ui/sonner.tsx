"use client"

import {
  CircleCheck,
  Info,
  LoaderCircle,
  OctagonX,
  TriangleAlert,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

/**
 * Standalone Toaster designed to exactly match the portfolio design.
 * Removes all default plugin colors (green/red) and replaces them with the
 * project's brand color (--first-color) and geometric styles.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const update = () =>
      setResolvedTheme(
        document.body.classList.contains("dark-theme") ? "dark" : "light"
      )

    update()

    const observer = new MutationObserver(update)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      toastOptions={{
        style: {
          fontFamily: "var(--body-font)",
          borderRadius: "0", // Exact square matching portfolio
        },
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--container-color)] group-[.toaster]:text-[var(--title-color)] group-[.toaster]:border-[var(--black-color)] group-[.toaster]:border-4 group-[.toaster]:shadow-2xl",
          description:   "group-[.toast]:text-[var(--text-color)] group-[.toast]:font-medium",
          actionButton:  "group-[.toast]:bg-[var(--first-color)] group-[.toast]:text-[var(--white-color)]",
          cancelButton:  "group-[.toast]:bg-[var(--black-color-light)] group-[.toast]:text-[var(--white-color)]",
          // Style successful toast specifically to avoid standard green
          success:       "!border-[var(--first-color)] !text-[var(--title-color)]",
          error:         "!border-[hsl(0, 84%, 60%)]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
