import { VisitBarChart } from "@/widgets";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminPage({ params }: { params: { locale: string } }) {
  return (
    <section className="p-10 flex  justify-center items-center">
      <VisitBarChart />
    </section>
  );
}
