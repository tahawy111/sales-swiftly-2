import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  // console.log(session);

  return (
    <div className="">
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
