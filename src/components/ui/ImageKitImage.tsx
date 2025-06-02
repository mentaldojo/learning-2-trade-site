import { Image } from "@imagekit/next";

interface ImageKitImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const urlEndpoint = "https://ik.imagekit.io/nzvztd5sh"; // User's ImageKit URL endpoint

export default function ImageKitImage({ src, alt, width, height }: ImageKitImageProps) {
  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
} 