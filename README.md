# Cyber Helper

make a website according to the uploaded image which assists users to report cyber fraud on the official cyber fraud reporting websites using redirect links and steps checklist and help them make the process easier

"1. Go to the official portal

Open:

cybercrime.gov.in

On the homepage, choose Register a Complaint → Financial Fraud for a financial cyber-fraud case. The current portal also has a separate Other Cyber Crime route for non-financial cybercrimes.

2. Choose the appropriate reporting route

For money/financial fraud, use:

FINANCIAL FRAUD

For things such as hacking, social-media crime, phishing without a financial transaction, etc., use:

OTHER CYBER CRIME

The portal specifically provides separate financial-fraud and other-cybercrime sections.

🚨 If money has just been stolen

Call 1930 immediately.

The official portal says the Cyber Crime Helpline 1930 operates 24×7 and recommends immediate reporting for cyber financial fraud.

For your SafeTrace website, I would therefore put “Call 1930 immediately” before the longer online-reporting instructions.

3. Register / log in

For the Report & Track / Other Cyber Crime process, you register using:

 Your name

 Valid Indian mobile number

 OTP received on the mobile

 Captcha/security verification

The official FAQ says the OTP is valid for 30 minutes.

4. Select the crime category

You'll then select the relevant category and sub-category.

For example, the portal's reporting workflow includes categories such as:

 Online Financial Fraud

 Online and Social Media Related Crime

 Hacking

 Ransomware

 Cryptocurrency-related crime

 Other cybercrime

The exact options shown can depend on the reporting route and current portal interface.

5. Enter the incident details

This is where SafeTrace can be extremely useful.

The official portal asks for important information such as:

When did it happen?

What happened?

How did it happen?

Who/what was involved?

The portal currently specifies that the incident details should contain at least 200 characters.

So your SafeTrace portal could take the user's answers and help them produce a properly structured incident description.

6. Provide identity information

The portal's current checklist says complainants should have a soft copy of a national ID such as:

 Aadhaar

 PAN

 Passport

 Driving licence

 Voter ID

The portal specifies JPEG/JPG/PNG format and a maximum file size of 5 MB for this identity document.

For your website, don't tell users to upload their ID to SafeTrace unless you actually have a secure/legal reason and infrastructure to handle it.

Instead:

“Prepare this document for the official NCRP portal.”

That's much safer for your prototype.

7. If it's financial fraud, prepare transaction information

The official checklist specifically asks victims of financial fraud to keep:

💰 Financial information

 Bank / wallet / merchant name

12-digit Transaction ID / UTR

 Transaction date

 Fraud amount

The portal also asks for relevant evidence.

This is where your Evidence Locker becomes useful.

Your SafeTrace flow could say:

Do you have your Transaction ID/UTR?

✅ Yes
❌ No

Then:

Do you have a screenshot/receipt?

✅ Yes
❌ No

And finally:

Evidence readiness: 4/5

8. Upload relevant evidence to the official portal

The NCRP says relevant evidence can be uploaded, with the current portal checklist stating that individual evidence files should be no more than 10 MB each.

Examples can include relevant:

 Screenshots

 Transaction records

 Messages

 Emails

 URLs

 Other files supporting the complaint

Your SafeTrace shouldn't replace this upload step.

Instead:

SafeTrace
     ↓
Organize evidence
     ↓
Prepare incident information
     ↓
Open official NCRP
     ↓
User submits official complaint

That's a much stronger architecture.

9. Submit the complaint

After entering the required information and evidence, the user submits the complaint through the official portal.

The NCRP says complaints submitted through its reporting routes receive confirmation, and users receive a complaint reference number through the registered contact details.

10. Save the acknowledgement/reference number

This is VERY important for your SafeTrace design.

After submission:

✅ COMPLAINT SUBMITTED

Complaint Reference Number

XXXXXXXXXXXX

Then SafeTrace could show:

Save this number. You will need it to track your complaint.

The official portal allows users to check the status of complaints submitted through Report & Track / Other Cyber Crime using the acknowledgement/reference number.

11. Track the complaint

The official portal has:

Track your Complaint

The user can use their acknowledgement/reference information to check the progress.

So your SafeTrace flow can finish with:

                    INCIDENT
                       ↓
                 SAFETrace
                       ↓
              Incident Assessment
                       ↓
                Evidence Locker
                       ↓
               Incident Summary
                       ↓
            ┌─────────────────────┐
            │ OFFICIAL NCRP       │
            │ CYBERCRIME.GOV.IN   │
            └─────────────────────┘
                       ↓
                 Submit Complaint
                       ↓
              Reference Number
                       ↓
                Track Complaint

🔥 This is how I'd implement it in your website

Don't make SafeTrace pretend to file the government complaint itself.

Make the final button:

🚀 CONTINUE TO OFFICIAL REPORTING

And underneath:

You'll be redirected to India's official National Cyber Crime Reporting Portal to submit your complaint.

Then your website has already prepared:

✓ Incident category
✓ Incident timeline
✓ Transaction details
✓ Evidence checklist
✓ Structured incident description
✓ Reporting route"

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cyberhelper.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c742d38b-baa5-43d4-bb5c-42005e92bc30).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
