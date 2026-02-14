import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div className="max-w-125">
        <Image
          src="/assets/images/404.png"
          className="w-full"
          alt="404"
          width={400}
          height={200}
        />
        <p className="text-full pt-10 font-bold">
          اوپس فکر کنم راه رو اشتباه اومدی💀
        </p>
      </div>
    </div>
  );
}
