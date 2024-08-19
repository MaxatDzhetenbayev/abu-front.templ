import { VisitChecker } from "@/features/";
import { getNavbarPages } from "@/shared/api/pages";
import { Separator } from "@/shared/ui";
import { BreadCrumbs, Header } from "@/widgets";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
const getPages = async (locale: string) => {
  const pages = await getNavbarPages(locale);
  return pages;
};

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string[]; locale: string };
}) {
  const pages = await getPages(params.locale);
  return (
    <section>
      <Header />
      <VisitChecker />
      <main className="max-w-[1200px] min-h-[100svh] overflow-y-auto mx-auto px-5 xl:px-0   mb-10 mt-5 md:mt-20 ">
        <BreadCrumbs locale={params.locale} slug={params.slug} pages={pages} />
        <div className="shadow-lg rounded-3xl flex lg:p-10 p-3  flex-col gap-10">
          {children}
        </div>
      </main>
      <footer className="w-full   bg-red-950">
        <div className=" max-w-[1200px] mx-auto p-10 ">
          <div className=" flex justify-between items-center mb-10">
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-2xl mb-4 text-white">Навигация</h2>
              {pages
                .filter((page) => page.navigation_type === "content")
                .map((page) => (
                  <Link
                    className="text-xl text-white"
                    key={page.id}
                    href={`/${params.locale}${page.slug}`}
                  >
                    {page.title}
                  </Link>
                ))}
            </div>
            <div className="flex flex-col gap-4  text-white">
              <h2 className="text-2xl">Наши контакты</h2>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4">
                  <Phone />
                  <a href="tel:+7 /7172/ 21-71-06">+7 (7222) 42-32-24</a>
                </div>
                <div className="flex gap-4">
                  <Mail />
                  <a href="email:prof_adilet@mail.ru">semey@abu.edu.kz</a>
                </div>
                <div className="flex gap-4">
                  <MapPin />
                  <span>Область Абай, г. Семей, ул. Мәңгілік Ел, 11</span>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <span className="text-white block mt-4">
            ©{new Date().getFullYear()} Все права защищены.
          </span>
        </div>
      </footer>
    </section>
  );
}
