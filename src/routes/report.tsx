import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Copy, ExternalLink, PhoneCall, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  CATEGORIES,
  EVIDENCE_ITEMS,
  NCRP_FINANCIAL_URL,
  NCRP_URL,
} from "@/lib/safetrace-data";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Guided Cyber Fraud Report Builder | SafeTrace" },
      {
        name: "description",
        content:
          "Select your fraud category, check your evidence readiness and generate a portal-ready incident description before filing on cybercrime.gov.in.",
      },
      { property: "og:title", content: "Guided Cyber Fraud Report Builder" },
      {
        property: "og:description",
        content:
          "Four quick steps to a complaint-ready summary for India's National Cyber Crime Reporting Portal.",
      },
    ],
  }),
  component: ReportWizard;
});

const STEPS = ["Category", "Incident", "Evidence", "Summary"];

function ReportWizard() {
  const [step, setStep] = useState(0);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [when, setWhen] = useState("");
  const [what, setWhat] = useState("");
  const [how, setHow] = useState("");
  const [who, setWho] = useState("");
  const [amount, setAmount] = useState("");
  const [utr, setUtr] = useState("");
  const [bank, setBank] = useState("");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const category = CATEGORIES.find((c) => c.id === categoryId) ?? null;
  const isFinancial = category?.route === "financial";

  const items = useMemo(
    () => EVIDENCE_ITEMS.filter((i) => !i.financialOnly || isFinancial),
    [isFinancial],
  );
  const readiness = items.filter((i) => checked[i.id]).length;

  const summary = useMemo(() => {
    if (!category) return "";
    const lines = [
      `Nature of complaint: ${category.label} (${isFinancial ? "Online Financial Fraud" : "Other Cyber Crime"}).`,
      when ? `When it happened: ${when}.` : "",
      what ? `What happened: ${what}` : "",
      how ? `How it happened: ${how}` : "",
      who ? `Who/what was involved: ${who}` : "",
      isFinancial && (amount || utr || bank)
        ? `Transaction details: ${[
            bank && `bank/wallet/merchant: ${bank}`,
            amount && `fraud amount: INR ${amount}`,
            utr && `transaction ID/UTR: ${utr}`,
          ]
            .filter(Boolean)
            .join("; ")}.`
        : "",
      `Evidence available: ${items
        .filter((i) => checked[i.id])
        .map((i) => i.label.toLowerCase())
        .join(", ") || "being collected"}.`,
      "I request that the matter be investigated and appropriate action be taken.",
    ];
    return lines.filter(Boolean).join(" ");
  }, [category, isFinancial, when, what, how, who, amount, utr, bank, items, checked]);

  const canNext = step === 0 ? !!category : step === 1 ? what.trim().length > 0 : true;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Toaster />
      <p className="label-eyebrow">Guided report builder</p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s prepare your complaint</h1>
      <p className="mt-3 text-muted-foreground">
        Nothing here is submitted anywhere. SafeTrace only organises your case so the official form
        is quick. Never enter OTPs, passwords or upload ID documents on this site.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {STEPS.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => i <= step && setStep(i)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide uppercase transition-colors ${
              i === step
                ? "border-primary bg-primary/15 text-primary"
                : i < step
                  ? "border-signal/50 text-signal"
                  : "border-border text-muted-foreground"
            }`}
          >
            {i + 1}. {s}
          </button>
        ))}
      </div>

      <div className="panel mt-6 p-6 md:p-8">
        {step === 0 && (
          <div>
            <h2 className="text-xl font-semibold">What best describes what happened?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              This decides your reporting route on the official portal.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {CATEGORIES.map((c) => {
                const active = c.id === categoryId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategoryId(c.id)}
                    className={`rounded-xl border p-4 text-left transition-colors ${
                      active
                        ? "border-primary bg-primary/10"
                        : "border-border bg-surface/60 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold">{c.label}</span>
                      {active && <Check className="size-4 text-primary" />}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                    <span
                      className={`mt-3 inline-block rounded-md px-2 py-0.5 font-mono text-[0.65rem] tracking-wider uppercase ${
                        c.route === "financial"
                          ? "bg-alert/15 text-alert"
                          : "bg-signal/15 text-signal"
                      }`}
                    >
                      {c.route === "financial" ? "Financial fraud" : "Other cyber crime"}
                    </span>
                  </button>
                );
              })}
            </div>

            {isFinancial && (
              <div className="mt-6 flex flex-col gap-3 rounded-xl border border-alert/40 bg-alert/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm">
                  <strong>Money was lost.</strong> Call 1930 immediately — before filling this out.
                </p>
                <Button asChild variant="alert" size="sm">
                  <a href="tel:1930">
                    <PhoneCall /> Call 1930
                  </a>
                </Button>
              </div>
            )}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Tell us what happened</h2>
            <p className="text-sm text-muted-foreground">
              The portal needs at least 200 characters. Answer in your own words — SafeTrace turns
              this into a structured description.
            </p>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="when">When did it happen?</Label>
                <Input
                  id="when"
                  className="mt-2"
                  placeholder="e.g. 24 August 2026, around 7:30 pm"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="what">What happened?</Label>
                <Textarea
                  id="what"
                  className="mt-2 min-h-28"
                  placeholder="Describe the incident in plain words."
                  value={what}
                  onChange={(e) => setWhat(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="how">How did it happen?</Label>
                <Textarea
                  id="how"
                  className="mt-2 min-h-24"
                  placeholder="e.g. I clicked a link in an SMS and entered my card details."
                  value={how}
                  onChange={(e) => setHow(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="who">Who or what was involved?</Label>
                <Input
                  id="who"
                  className="mt-2"
                  placeholder="Phone numbers, UPI IDs, websites, profile links"
                  value={who}
                  onChange={(e) => setWho(e.target.value)}
                />
              </div>
              {isFinancial && (
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <Label htmlFor="bank">Bank / wallet / merchant</Label>
                    <Input
                      id="bank"
                      className="mt-2"
                      value={bank}
                      onChange={(e) => setBank(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount">Fraud amount (₹)</Label>
                    <Input
                      id="amount"
                      className="mt-2"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="utr">Transaction ID / UTR</Label>
                    <Input
                      id="utr"
                      className="mt-2"
                      placeholder="12 digits"
                      value={utr}
                      onChange={(e) => setUtr(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold">Evidence locker</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tick what you already have on your device. Upload files only on the official portal.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Progress value={(readiness / items.length) * 100} className="h-2" />
              <span className="font-mono text-sm whitespace-nowrap text-primary">
                {readiness}/{items.length}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {items.map((item) => {
                const on = !!checked[item.id];
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setChecked((p) => ({ ...p, [item.id]: !on }))}
                      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                        on ? "border-signal/60 bg-signal/10" : "border-border bg-surface/60"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border ${
                          on ? "border-signal bg-signal text-signal-foreground" : "border-border"
                        }`}
                      >
                        {on && <Check className="size-3.5" />}
                      </span>
                      <span>
                        <span className="block font-medium">{item.label}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {item.hint}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold">Your complaint pack</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Fact label="Reporting route">
                {isFinancial ? "FINANCIAL FRAUD" : "OTHER CYBER CRIME"}
              </Fact>
              <Fact label="Category">{category?.label ?? "—"}</Fact>
              <Fact label="Evidence readiness">
                {readiness}/{items.length}
              </Fact>
              <Fact label="Description length">{summary.length} characters</Fact>
            </div>

            {summary.length < 200 && (
              <p className="mt-4 rounded-lg border border-alert/40 bg-alert/10 p-3 text-sm">
                The portal requires at least 200 characters. Go back to step 2 and add more detail.
              </p>
            )}

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="summary">Structured incident description</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(summary);
                    toast.success("Description copied — paste it into the portal.");
                  }}
                >
                  <Copy /> Copy
                </Button>
              </div>
              <Textarea id="summary" readOnly value={summary} className="mt-2 min-h-44 font-mono text-sm" />
            </div>

            <div className="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-6 text-center">
              <Button asChild variant="hero" size="xl">
                <a
                  href={isFinancial ? NCRP_FINANCIAL_URL : NCRP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rocket /> Continue to official reporting
                </a>
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">
                You&apos;ll be redirected to India&apos;s official National Cyber Crime Reporting
                Portal to submit your complaint. After submitting, save the complaint reference
                number — you need it to track the case.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            <ArrowLeft /> Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button variant="hero" disabled={!canNext} onClick={() => setStep((s) => s + 1)}>
              Continue <ArrowRight />
            </Button>
          ) : (
            <Button asChild variant="subtle">
              <a href={NCRP_URL} target="_blank" rel="noopener noreferrer">
                Portal home <ExternalLink />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface/60 p-4">
      <span className="label-eyebrow">{label}</span>
      <p className="mt-1 font-semibold">{children}</p>
    </div>
  );
}
