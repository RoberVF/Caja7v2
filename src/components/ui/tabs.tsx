"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({ className, value, onValueChange, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("", className)}
      {...props}
      data-state={value}
    />
  )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inline-flex items-center justify-center rounded-md bg-muted p-1", className)}
      {...props}
    />
  )
)
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const parent = React.useContext(TabsContextInternal)
  if (!parent) return null

  const { currentValue, setCurrentValue } = parent
  const isActive = currentValue === value

  return (
    <button
      ref={ref}
      onClick={() => setCurrentValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      data-state={isActive ? "active" : "inactive"}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const parent = React.useContext(TabsContextInternal)
  if (!parent) return null

  const { currentValue } = parent
  if (currentValue !== value) return null

  return (
    <div
      ref={ref}
      className={cn("mt-2", className)}
      {...props}
      data-state="active"
    />
  )
})
TabsContent.displayName = "TabsContent"

interface TabsContextType {
  currentValue: string
  setCurrentValue: (value: string) => void
}
const TabsContextInternal = React.createContext<TabsContextType | null>(null)

const TabsWrapper: React.FC<TabsProps> = ({ children, value, onValueChange, className }) => {
  return (
    <TabsContextInternal.Provider value={{ currentValue: value, setCurrentValue: onValueChange }}>
      <Tabs className={className} value={value} onValueChange={onValueChange}>
        {children}
      </Tabs>
    </TabsContextInternal.Provider>
  )
}

export { TabsWrapper as Tabs, TabsList, TabsTrigger, TabsContent }
