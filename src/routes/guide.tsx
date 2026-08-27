import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFICIAL_STEPS, NCRP_URL } from "@/lib/safetrace-data";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "The 11 Steps to File a Cyber Crime Complaint | Cyber Helper from SafeTrace" },
      {
        name: "description",
        content:
          "A plain-language walkthrough of reporting cyber fraud on India's National Cyber Crime Reporting Portal: routes, OTP login, categories, evidence limits and tracking.",
      },
      { property: "og:title", content: "The 11 Steps to File a Cyber Crime Complaint" },
      {
        property: "og:description",
        content:
          "From calling 1930 to saving your complaint reference number — the official NCRP process explained.",
      },
    ],
  }),
  component: Guide,
});

function Guide() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <p className="label-eyebrow">Official process</p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        Filing on <span className="text-gradient">cybercrime.gov.in</span>, step by step
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is the process on India's National Cyber Crime Reporting Portal. Cyber Helper from SafeTrace prepares
        steps 5 to 9 for you so the form goes quickly.
      </p>

      <ol className="mt-10 space-y-4">
        {OFFICIAL_STEPS.map((step) => (
          <li
            key={step.n}
            className={`panel flex gap-4 p-6 ${step.n === 1 ? "border-alert/40" : ""}`}
          >
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-lg font-mono text-sm font-semibold ${
                step.n === 1
                  ? "bg-alert/15 text-alert"
                  : "bg-primary/15 text-primary"
              }`}
            >
              {step.n}
            </span>
            <div>
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="panel mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Let Cyber Helper from SafeTrace prepare your category, description and evidence list first.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero">
            <Link to="/report">
              Start guided report <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="subtle">
            <a href={NCRP_URL} target="_blank" rel="noopener noreferrer">
              Open portal <ExternalLink />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
