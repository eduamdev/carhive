"use client"

import {
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { cn, constructUrlWithParams } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FiltersIcon } from "@/components/icons/filters"
import { ResponsiveModal } from "@/components/responsive-modal"

import { FiltersContent } from "./filters-content"
import {
  applyFiltersToParams,
  countActiveFilters,
  initializeFiltersFromParams,
} from "./lib/filters"
import { SelectedFilters } from "./types"

interface FiltersButtonProps {
  initialMinPrice: number
  initialMaxPrice: number
  trigger?: React.ReactNode
}

export function FiltersButton({
  initialMinPrice,
  initialMaxPrice,
  trigger,
}: FiltersButtonProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const initialFilters = useMemo(
    () =>
      initializeFiltersFromParams(
        searchParams,
        initialMinPrice,
        initialMaxPrice
      ),
    [searchParams, initialMinPrice, initialMaxPrice]
  )

  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(initialFilters)

  const totalSelectedFilters = useMemo(
    () => countActiveFilters(searchParams, initialMinPrice, initialMaxPrice),
    [searchParams, initialMinPrice, initialMaxPrice]
  )

  const handleFiltersReset = useCallback(() => {
    setSelectedFilters({
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      bodyStyles: [],
      powertrain: undefined,
      seats: undefined,
      transmissions: [],
    })
  }, [initialMinPrice, initialMaxPrice])

  const handleFiltersApply = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString())
    applyFiltersToParams(
      newParams,
      selectedFilters,
      initialMinPrice,
      initialMaxPrice
    )
    router.push(constructUrlWithParams("/cars", newParams))
    setIsModalOpen(false)
  }, [searchParams, selectedFilters, initialMinPrice, initialMaxPrice, router])

  const triggerWithBadge = useMemo(() => {
    const badge = totalSelectedFilters > 0 && (
      <Badge variant="counter" className="absolute -right-2 -top-2">
        {totalSelectedFilters}
      </Badge>
    )

    if (isValidElement(trigger)) {
      return cloneElement(
        trigger as ReactElement<{
          className?: string
          children?: React.ReactNode
        }>,
        {
          className: `${trigger.props.className || ""} relative`, // Ensure it's positioned correctly for the badge
          children: (
            <>
              {trigger.props.children}
              {badge}
            </>
          ),
        }
      )
    }

    return (
      <Button
        variant="outline"
        className={cn(
          "relative flex h-[46px] items-center justify-center gap-x-2.5 rounded-[10px] px-4 text-[13px] transition-shadow",
          totalSelectedFilters > 0 && "ring-2 ring-black "
        )}
      >
        <FiltersIcon className="size-5" />
        <span>Filters</span>
        {badge}
      </Button>
    )
  }, [trigger, totalSelectedFilters])

  return (
    <ResponsiveModal
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      title="Filters"
      description="Refine your search by adjusting the filters below to find your perfect match."
      trigger={triggerWithBadge}
      footer={
        <div className="flex w-full items-center justify-between gap-x-2 px-6">
          <ResetFiltersButton onReset={handleFiltersReset} />
          <ApplyFiltersButton onApply={handleFiltersApply} />
        </div>
      }
    >
      <FiltersContent
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        initialMinPrice={initialMinPrice}
        initialMaxPrice={initialMaxPrice}
      />
    </ResponsiveModal>
  )
}

export function ApplyFiltersButton({ onApply }: { onApply: () => void }) {
  return (
    <Button size="lg" className="text-[16px]" onClick={onApply}>
      Show cars
    </Button>
  )
}

export function ResetFiltersButton({ onReset }: { onReset: () => void }) {
  return (
    <Button
      variant="ghost"
      className="-ml-2.5 px-2.5 text-[16px]"
      onClick={onReset}
    >
      Clear all
    </Button>
  )
}
