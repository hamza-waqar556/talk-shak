"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categories = [
  {
    value: "learning",
    label: "Learning",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "fun",
    label: "Fun",
  },
  {
    value: "meme",
    label: "meme",
  },
]

export default function ChannelCategory() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="text-sm mb-4 lg:mb-5 w-full font-normal justify-between capitalize bg-second-bg-color p-2 h-auto border-border-color rounded-lg outline-none active:outline-none focus:border-primary-color focus:shadow-none focus:!outline-none focus-visible:outline-none hover:bg-second-bg-color hover:text-white"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select Channel category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="capitalize bg-second-bg-color border border-border-color text-white">
        <Command className="capitalize bg-second-bg-color w-full text-white">
          <CommandInput placeholder="Search category..." className="text-white placeholder:text-white" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup className="text-white">
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
