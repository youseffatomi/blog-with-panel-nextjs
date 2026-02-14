"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1>یه مشکلی پیش اومد 😐</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>تلاش دوباره</button>
      </div>
    </div>
  );
}
