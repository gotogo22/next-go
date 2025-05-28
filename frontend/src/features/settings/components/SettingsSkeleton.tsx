import { Skeleton } from "@/components/ui/skeleton";

export const SettingsSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-1">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="grid gap-1">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="grid gap-1">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="grid gap-1">
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}; 