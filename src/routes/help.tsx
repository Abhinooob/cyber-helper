import { createFileRoute } from "@tanstack/react-router";
import { Phone, ExternalLink } from "lucide-react";
import { CONTACTS, PREVENTION_TIPS, NCRP_TRACK_URL } from "@/lib/safetrace-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Cyber Crime Helplines & Prevention Tips | SafeTrace" },
      {
        name: "description",
        content:
          "Emergency cyber crime contacts in India — 1930, 112, 1098 — plus prevention tips and how to track an existing complaint.",
      },
      { property: "og:title", content: "Cyber Crime Helplines & Prevention Tips" },
      {
        property: "og:description",
        content: "Who to call, what never to share, and how to track your complaint status.",
      },
    ],
  }),
  component: Help,
});

function Help() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <p className="label-eyebrow">Emergency contacts</p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">Who to contact, right now</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {CONTACTS.map((c) => (
          <div key={c.name} className={`panel p-6 ${c.urgent ? "border-alert/40" : ""}`}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">{c.name}</h2>
              <span
                className={`font-mono text-lg font-semibold ${c.urgent ? "text-alert" : "text-primary"}`}
              >
                {c.value}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
            <Button
              asChild
              variant={c.urgent ? "alert" : "subtle"}
              size="sm"
              className="mt-4"
            >
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {c.href.startsWith("http") ? (
                  <>
                    Open <ExternalLink />
                  </>
                ) : (
                  <>
                    <Phone /> Call {c.value}
                  </>
                )}
              </a>
            </Button>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-semibold md:text-3xl">Already filed a complaint?</h2>
      <div className="panel mt-4 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm text-muted-foreground">
          Use your acknowledgement / reference number on the portal's <em>Track your Complaint</em>{" "}
          page. Keep the number saved — you cannot check status without it.
        </p>
        <Button asChild variant="hero">
          <a href={NCRP_TRACK_URL} target="_blank" rel="noopener noreferrer">
            Track complaint <ExternalLink />
          </a>
        </Button>
      </div>

      <h2 className="mt-14 text-2xl font-semibold md:text-3xl">Prevention tips</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {PREVENTION_TIPS.map((tip) => (
          <div key={tip.title} className="panel p-5">
            <h3 className="text-base font-semibold">{tip.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tip.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
