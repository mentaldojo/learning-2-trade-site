"use client";
import { Image } from "@imagekit/next";

const imagePath = "/gold foil.jpg"; // User's actual image path
const urlEndpoint = "https://ik.imagekit.io/nzvztd5sh"; // User's ImageKit URL endpoint

export default function ImageKitDemo() {
  return (
    <div>
      <h2>ImageKit Example</h2>
      <Image
        urlEndpoint={urlEndpoint}
        src={imagePath}
        width={500}
        height={500}
        alt="Gold Foil"
      />
    </div>
  );
} 