'use client';
import { ChangeLocale } from "@/features";
import { BurgerMenu } from "@/widgets";
import { Navbar } from "@/widgets/Header/Navbar";
import Link from "next/link";
import { useParams } from "next/navigation";


const topHeaderMenuList = [
  { title: "Обучающимся", link: "main" },
  { title: "Международный отдел", link: "main" },
  { title: "Выпусникам", link: "main" },
  { title: "AIS", link: "main" },
  { title: "Abai IT", link: "main" },
]


export const Header = () => {

  const params = useParams();

  return (
    <header className="relative  flex flex-col  w-full ">
      <section className="bg-[#640000] min-h-10 flex gap-40 justify-end  pr-3 ">
        <section className="flex gap-10 text-white items-center">
          {topHeaderMenuList.map((item, index) => (
            <Link href={`/${params.locale}/${item.link}`} key={index}>
              {item.title}
            </Link>
          ))}
        </section>
        <section className="flex items-center">
          <ChangeLocale />
          <BurgerMenu />
        </section>
      </section>
      <Navbar />
    </header>
  );
};
