import Image from "next/image";
import photo from "@/assets/img/user.png"

export default function Header() {
    return (
      <section className="flex bg-[#13273F] py-4 justify-evenly items-center">
        <Image src={photo} alt="User photo" width={90} height={90}/>

        <h1 className="bg-[#4098ae] py-4 px-6 rounded-xl text-xl text-white font-bold" >My Notes</h1>
      </section>
    );
  }
  