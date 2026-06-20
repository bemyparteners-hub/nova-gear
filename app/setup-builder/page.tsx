import type { Metadata } from "next";
import { SetupBuilder } from "@/components/setup-builder";
export const metadata: Metadata = { title: "Setup Builder", description: "Configure automatiquement un setup gaming complet selon ton budget, style et usage." };
export default function Page() { return <section className="container-nova pt-32 pb-20"><div className="mb-10 max-w-3xl"><p className="eyebrow">Setup Builder</p><h1 className="mt-5 text-5xl font-black">Un setup recommandé automatiquement.</h1><p className="muted mt-4 text-lg leading-8">Budget, style, besoins : esport, streamer, RGB, minimaliste ou ultra premium.</p></div><SetupBuilder /></section>; }
