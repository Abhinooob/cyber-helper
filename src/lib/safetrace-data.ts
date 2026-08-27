export type Route = "financial" | "other";

export type Category = {
  id: string;
  label: string;
  description: string;
  route: Route;
  examples: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "upi-bank",
    label: "UPI / Bank / Card fraud",
    description: "Money debited via UPI, net banking, debit or credit card.",
    route: "financial",
    examples: ["Unauthorised UPI debit", "Card skimming", "OTP shared under pressure"],
  },
  {
    id: "investment",
    label: "Investment / trading scam",
    description: "Fake trading apps, stock tips groups, guaranteed-return schemes.",
    route: "financial",
    examples: ["Fake trading dashboard", "Telegram profit group", "Withdrawal blocked"],
  },
  {
    id: "job-task",
    label: "Job / task-based scam",
    description: "Work-from-home, like-and-earn, prepaid task fraud.",
    route: "financial",
    examples: ["Task commission scam", "Fake recruiter fee"],
  },
  {
    id: "crypto",
    label: "Cryptocurrency fraud",
    description: "Crypto wallet drains, fake exchanges, rug pulls.",
    route: "financial",
    examples: ["Wallet drained", "Fake exchange withdrawal fee"],
  },
  {
    id: "digital-arrest",
    label: "Impersonation / \u201cdigital arrest\u201d",
    description: "Callers posing as police, CBI, courier or bank officials demanding money.",
    route: "financial",
    examples: ["Fake police video call", "Parcel/customs threat call"],
  },
  {
    id: "social-media",
    label: "Social media crime",
    description: "Account takeover, fake profiles, harassment, blackmail.",
    route: "other",
    examples: ["Instagram account hacked", "Sextortion threat", "Impersonation profile"],
  },
  {
    id: "hacking",
    label: "Hacking / unauthorised access",
    description: "Email, device or system compromised without a money transfer.",
    route: "other",
    examples: ["Email compromised", "Unknown device login"],
  },
  {
    id: "phishing",
    label: "Phishing / smishing (no money lost)",
    description: "Fraud links, spoofed messages and emails where no transaction happened.",
    route: "other",
    examples: ["Fake bank SMS link", "KYC-update phishing page"],
  },
  {
    id: "ransomware",
    label: "Ransomware / malware",
    description: "Files locked or encrypted, ransom demanded.",
    route: "other",
    examples: ["Files encrypted", "Ransom note on screen"],
  },
];

export const NCRP_URL = "https://cybercrime.gov.in";
export const NCRP_FINANCIAL_URL = "https://cybercrime.gov.in/Webform/Accept.aspx";
export const NCRP_TRACK_URL = "https://cybercrime.gov.in/Webform/Crime_ReportComplaint.aspx";

export type ChecklistItem = { id: string; label: string; hint: string; financialOnly?: boolean };

export const EVIDENCE_ITEMS: ChecklistItem[] = [
  {
    id: "id-proof",
    label: "National ID soft copy ready",
    hint: "Aadhaar, PAN, Passport, Driving licence or Voter ID \u2014 JPEG/JPG/PNG, max 5 MB. Keep it on your device; do not upload it here.",
  },
  {
    id: "utr",
    label: "12-digit Transaction ID / UTR",
    hint: "Found in your bank or UPI app transaction details.",
    financialOnly: true,
  },
  {
    id: "bank",
    label: "Bank / wallet / merchant name",
    hint: "The account or wallet the money left from, and where it went if known.",
    financialOnly: true,
  },
  {
    id: "amount-date",
    label: "Fraud amount and transaction date",
    hint: "Exact amount and date/time of each disputed transaction.",
    financialOnly: true,
  },
  {
    id: "screenshots",
    label: "Screenshots / receipts",
    hint: "Chats, payment receipts, app screens. Each file must be under 10 MB on the portal.",
  },
  {
    id: "messages",
    label: "Messages, emails and caller numbers",
    hint: "SMS, WhatsApp chats, emails with full headers, phone numbers used.",
  },
  {
    id: "urls",
    label: "Suspicious URLs / profile links",
    hint: "Website links, app download links, social media profile URLs.",
  },
];

export const CONTACTS = [
  {
    name: "Cyber Crime Helpline 1930",
    value: "1930",
    href: "tel:1930",
    note: "24\u00d77 national helpline. Call immediately if money was just lost \u2014 the golden hour matters.",
    urgent: true,
  },
  {
    name: "Police Emergency",
    value: "112",
    href: "tel:112",
    note: "For any immediate threat to life or safety.",
  },
  {
    name: "Women & Child Helpline",
    value: "1098 / 181",
    href: "tel:1098",
    note: "For crimes against children (1098) and women in distress (181).",
  },
  {
    name: "National Cyber Crime Reporting Portal",
    value: "cybercrime.gov.in",
    href: NCRP_URL,
    note: "The only official portal to file and track a cyber crime complaint in India.",
  },
];

export const PREVENTION_TIPS = [
  {
    title: "Never share OTP, CVV or PIN",
    body: "No bank, police officer or government official will ever ask for them \u2014 on call, chat or email.",
  },
  {
    title: "There is no such thing as a digital arrest",
    body: "Indian agencies do not arrest, interrogate or demand money over video calls. Disconnect and call 1930.",
  },
  {
    title: "Verify before you pay",
    body: "Type the website address yourself. Do not use links from SMS, ads or search results for banking or KYC.",
  },
  {
    title: "Guaranteed returns are a red flag",
    body: "Fixed daily profit, task commissions and early-withdrawal fees are the signature of investment and job scams.",
  },
  {
    title: "Lock down your accounts",
    body: "Turn on two-factor authentication, review logged-in devices, and set transaction alerts on every account.",
  },
  {
    title: "Report fast, report anyway",
    body: "Reporting within the first hours greatly improves the chance of freezing the money. Report even if you are unsure.",
  },
];

export const OFFICIAL_STEPS = [
  {
    n: 1,
    title: "Call 1930 first if money has just left your account",
    body: "The Cyber Crime Helpline 1930 runs 24\u00d77. Immediate reporting gives banks the best chance to freeze the transfer before it is withdrawn. Do this before anything else, then continue with the online complaint.",
  },
  {
    n: 2,
    title: "Open the official portal",
    body: "Go to cybercrime.gov.in. On the homepage choose Register a Complaint. The portal keeps financial fraud and other cyber crime as two separate reporting routes.",
  },
  {
    n: 3,
    title: "Choose the correct reporting route",
    body: "Use FINANCIAL FRAUD when money was transferred or debited. Use OTHER CYBER CRIME for hacking, social media crime, phishing and similar cases with no financial transaction.",
  },
  {
    n: 4,
    title: "Register or log in",
    body: "For Report & Track / Other Cyber Crime you register with your name, a valid Indian mobile number, the OTP sent to it, and a captcha. The OTP is valid for 30 minutes.",
  },
  {
    n: 5,
    title: "Select the crime category and sub-category",
    body: "Categories include Online Financial Fraud, Online and Social Media Related Crime, Hacking, Ransomware, Cryptocurrency crime and Other cyber crime. Exact options depend on the route and current portal interface.",
  },
  {
    n: 6,
    title: "Enter the incident details",
    body: "Describe when it happened, what happened, how it happened and who or what was involved. The portal requires at least 200 characters \u2014 SafeTrace drafts this for you.",
  },
  {
    n: 7,
    title: "Provide identity information",
    body: "Keep a soft copy of a national ID (Aadhaar, PAN, Passport, Driving licence or Voter ID) in JPEG/JPG/PNG format, maximum 5 MB. Upload it only on the official portal \u2014 never here.",
  },
  {
    n: 8,
    title: "Prepare transaction information",
    body: "For financial fraud, keep the bank / wallet / merchant name, the 12-digit Transaction ID or UTR, the transaction date and the fraud amount ready.",
  },
  {
    n: 9,
    title: "Upload relevant evidence on the portal",
    body: "Screenshots, transaction records, messages, emails, URLs and other supporting files can be attached. Each evidence file should be no more than 10 MB.",
  },
  {
    n: 10,
    title: "Submit and save the reference number",
    body: "After submission you receive a confirmation and a complaint reference number on your registered contact details. Save it \u2014 you cannot track the complaint without it.",
  },
  {
    n: 11,
    title: "Track your complaint",
    body: "Use Track your Complaint on the portal with your acknowledgement / reference number to follow the progress of the case.",
  },
];
