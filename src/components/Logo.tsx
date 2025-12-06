import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Elegant Steel East Africa Logo"
      width={200}
      height={200}
      priority
    />
  );
}
