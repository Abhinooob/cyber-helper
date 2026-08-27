import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PhoneCall,
  ShieldCheck,
  ClipboardList,
  FileText,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NCRP_URL, PREVENTION_TIPS } from "@/lib/safetrace-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafeTrace — Report Cyber Fraud in India, Step by Step" },
      {
        name: "description",
        content:
          "Assess your case, organise evidence and get a ready-to-paste complaint description, then file it on India's official cyber crime portal. Call 1930 if money was just lost.",
      },
      { property: "og:title", content: "SafeTrace — Cyber Fraud Reporting Assistant" },
      {
        property: "og:description",
        content:
          "Prepare your cyber fraud complaint in minutes and continue to the official National Cyber Crime Reporting Portal.",
      },
    ],
  }),
  component: Home,
});

const FLOW = [
  { label: "Incident assessment", detail: "Pick what happened and the correct reporting route." },
  { label: "Evidence locker", detail: "Tick off what you have; see your readiness score." },
  { label: "Incident summary", detail: "Get a 200+ character description ready to paste." },
  { label: "Official NCRP", detail: "Continue to cybercrime.gov.in and submit." },
  { label: "Track complaint", detail: "Save your reference number and follow the case." },
];

function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20">
        <p className="label-eyebrow">Cyber fraud reporting assistant · India</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold md:text-6xl">
          You were defrauded online. <span className="text-gradient">Here is exactly</span> what to
          do next.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          SafeTrace walks you through the official reporting process, organises your evidence and
          writes your incident description — then hands you off to India's official National Cyber
          Crime Reporting Portal to submit the complaint.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/report">
              Start guided report <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="subtle" size="xl">
            <Link to="/guide">See the 11 official steps</Link>
          </Button>
        </div>

        <div className="panel mt-10 flex flex-col gap-4 border-alert/40 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-alert/15 text-alert">
              <PhoneCall className="size-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">Money just left your account?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Call the 24×7 Cyber Crime Helpline <strong>1930</strong> immediately — before
                filling any form. Fast reporting is what makes a freeze possible.
              </p>
            </div>
          </div>
          <Button asChild variant="alert" size="lg">
            <a href="tel:1930">Call 1930 now</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold md:text-3xl">How SafeTrace fits in</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          SafeTrace never files your complaint and never asks for your ID or OTP. It prepares
          everything so the official form takes minutes instead of hours.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {FLOW.map((step, i) => (
            <li key={step.label} className="panel p-5">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-base font-semibold">{step.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Fraud category selection",
              body: "Answer a few plain questions and SafeTrace picks the right route — Financial Fraud or Other Cyber Crime.",
              to: "/report" as const,
              cta: "Assess my case",
            },
            {
              icon: FileText,
              title: "Evidence checklist",
              body: "Transaction ID, screenshots, ID proof, message logs — see what you have and what is still missing.",
              to: "/report" as const,
              cta: "Open evidence locker",
            },
            {
              icon: ShieldCheck,
              title: "Helplines & prevention",
              body: "1930, 112, and the habits that stop the next scam before it starts.",
              to: "/help" as const,
              cta: "View helplines",
            },
          ].map((card) => (
            <div key={card.title} className="panel flex flex-col p-6">
              <card.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{card.body}</p>
              <Button asChild variant="ghost" className="mt-4 self-start px-0 text-primary">
                <Link to={card.to}>
                  {card.cta} <ArrowRight />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 pb-20">
        <h2 className="text-2xl font-semibold md:text-3xl">Prevention that actually works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PREVENTION_TIPS.map((tip) => (
            <div key={tip.title} className="panel p-5">
              <h3 className="text-base font-semibold">{tip.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tip.body}</p>
            </div>
          ))}
        </div>

        <div className="panel mt-10 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Already have everything ready? Go straight to the official portal.
          </p>
          <Button asChild variant="subtle">
            <a href={NCRP_URL} target="_blank" rel="noopener noreferrer">
              cybercrime.gov.in <ExternalLink />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
