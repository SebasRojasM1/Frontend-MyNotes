import Image from "next/image";
import photo from "@/assets/img/user.png"
import Link from "next/link";

export default function Header() {
    return (
      <section className="flex bg-[#13273F] py-4 justify-evenly items-center">
        <Image src={photo} alt="User photo" width={90} height={90}/>

        <Link href="/" className="bg-[#4098ae] py-4 px-6 rounded-xl text-xl text-white font-bold hover:bg-[#2a6675] transition ease-in-out delay-30" >My Notes</Link>
      </section>
    );
  }
  