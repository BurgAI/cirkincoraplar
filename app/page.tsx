import { redirect } from "next/navigation";
import { defaultLocale } from "@/data/i18n";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
