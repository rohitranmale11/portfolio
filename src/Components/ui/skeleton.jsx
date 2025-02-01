import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted flex justify-center items-center", className)} {...props} >
     <div className="text-black text-4xl font-bold"  >
    Loading
    </div></div>);
}

export { Skeleton }
