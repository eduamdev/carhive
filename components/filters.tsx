import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Filters() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icons.filters className="mr-2 h-[14px] w-[14px]" />
          Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--filters-content-height)] overflow-y-auto border-b border-t">
          <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
            <section>
              <h3 className="pb-6 text-xl font-semibold">Price range</h3>
              <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  minStepsBetweenThumbs={1}
                />

                <div className="flex w-full items-center justify-between gap-6">
                  <div className="relative h-14 w-full">
                    <Label
                      htmlFor="i-minimum"
                      className="absolute left-3 top-2.5 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-xs font-normal leading-none text-neutral-500"
                    >
                      Minimum
                    </Label>
                    <div className="absolute bottom-3 left-3 leading-none">
                      $
                    </div>
                    <Input
                      id="i-minimum"
                      className="absolute inset-0 h-full rounded-lg border bg-transparent pl-7 pr-4 pt-4 leading-none"
                    />
                  </div>
                  <div className="h-px shrink-0 basis-4 bg-neutral-400"></div>
                  <div className="relative h-14 w-full">
                    <Label
                      htmlFor="i-maximum"
                      className="absolute left-3 top-2.5 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-xs font-normal leading-none text-neutral-500"
                    >
                      Maximum
                    </Label>
                    <div className="absolute bottom-3 left-3 leading-none">
                      $
                    </div>
                    <Input
                      id="i-maximum"
                      className="absolute inset-0 h-full rounded-lg border bg-transparent pl-7 pr-4 pt-4 leading-none"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
            <section>
              <h3 className="pb-6 text-xl font-semibold">Car type</h3>
              <div className="grid grid-cols-4 items-center gap-4">
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.suv className="h-8 w-8" />
                      <span className="text-base font-medium">SUV</span>
                    </div>
                  </AspectRatio>
                </Button>
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.minivan className="h-8 w-8" />
                      <span className="text-base font-medium">Minivan</span>
                    </div>
                  </AspectRatio>
                </Button>
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.pickUp className="h-8 w-8" />
                      <span className="text-base font-medium">Pick-up</span>
                    </div>
                  </AspectRatio>
                </Button>
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.sportCar className="h-8 w-8" />
                      <span className="text-base font-medium">Sport</span>
                    </div>
                  </AspectRatio>
                </Button>
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.offRoad className="h-8 w-8" />
                      <span className="text-base font-medium">Off-road</span>
                    </div>
                  </AspectRatio>
                </Button>
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.sedan className="h-8 w-8" />
                      <span className="text-base font-medium">Sedan</span>
                    </div>
                  </AspectRatio>
                </Button>
              </div>
            </section>
          </div>
          <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-black/10 after:content-['']">
            <section>
              <h3 className="pb-6 text-lg font-semibold">Capacity</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="pb-5 pt-1">Seats</h4>
                  <div className="flex flex-row items-center gap-3">
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      Any
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      1
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      3
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      4
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      5
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      6
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      7
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      8+
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="pb-5 pt-1">Bags</h4>
                  <div className="flex flex-row items-center gap-3">
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      Any
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      1
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      3
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      4
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      5
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      6
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      7
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[30px] px-5 py-2.5"
                    >
                      8+
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="px-6 py-8">
            <section>
              <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
              <div className="grid grid-cols-2 items-center gap-4">
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={8 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.automaticTransmission className="h-7 w-7" />
                      <span className="text-base font-medium">Automatic</span>
                    </div>
                  </AspectRatio>
                </Button>
                <Button variant="outline" className="m-0 h-full rounded-xl p-0">
                  <AspectRatio ratio={8 / 3}>
                    <div className="flex min-h-full w-full flex-col items-start justify-between p-4">
                      <Icons.manualTransmission className="h-7 w-7" />
                      <span className="text-base font-medium">Manual</span>
                    </div>
                  </AspectRatio>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <DialogFooter className="flex min-h-[var(--filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <Button variant="ghost" className="-ml-2 px-2 text-base underline">
              Clear all
            </Button>
            <Button size="lg">Show cars</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
