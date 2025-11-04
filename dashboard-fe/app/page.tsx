import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login"); // otomatis pindah ke login
}
