export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 w-full h-full rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 w-full h-full rounded-full border-4 border-t-primary animate-spin"></div>
      </div>
    </div>
  );
}