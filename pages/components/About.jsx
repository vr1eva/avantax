import Image from "next/image"
import about from "../assets/about.jpg"

export default function About() {
  return (
    <div>
      <Image width={1440} height={372} src={about} />
    </div>
  )
}