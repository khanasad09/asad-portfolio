"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

/**
 * Single-file portfolio with simple in-app routing (Home / Experience).
 * Designed to be Next.js App Router compatible and recruiter-friendly.
 */

type Page = "home" | "experience";

type ExperienceItem = {
  company: string;
  role: string;
  locationLine: string;
  dates: string;
  bullets: string[];
};

type EducationItem = {
  title: string;
  org?: string;
  year?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Nav({ page, onNavigate }: { page: Page; onNavigate: (p: Page) => void }) {
  return (
    <nav className="mb-12 flex flex-wrap items-center gap-3 text-sm">
      <button
        type="button"
        onClick={() => onNavigate("home")}
        className={cx(
          "px-3 py-1 rounded-md transition-colors",
          page === "home"
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
        )}
        aria-current={page === "home" ? "page" : undefined}
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => onNavigate("experience")}
        className={cx(
          "px-3 py-1 rounded-md transition-colors",
          page === "experience"
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
        )}
        aria-current={page === "experience" ? "page" : undefined}
      >
        Experience
      </button>

      <div className="ml-auto flex flex-wrap gap-3">
        <Button variant="outline" asChild className="transition-transform hover:-translate-y-0.5">
          {/* Resume PDF: place the file at /public/Asad_Khan_Resume.pdf so this link works */}
          <a href="/Asad_Khan_Resume.pdf" target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        </Button>
        <Button asChild className="transition-transform hover:-translate-y-0.5">
          <a
            href="https://www.linkedin.com/in/asad-toronto89"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </Button>
      </div>
    </nav>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
      <p className="text-sm text-slate-600 mt-1">{label}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>PMP</Pill>
            <Pill>SAP · Cloud</Pill>
            <Pill>AI-enabled delivery</Pill>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900">
            I bring a rare dual perspective from both technology consulting and in-house project/program management.
	  </h1>

          <p className="text-xl text-slate-700 max-w-4xl">
           PMP-certified Project Manager with 12+ years leading complex, multi-stream initiatives across data platforms, 
	   integrations, analytics reporting, ERP ecosystems, and regulated operations and AI-enabled execution.
          </p>

          <p className="max-w-4xl text-slate-600">
            Expert in end-to-end project delivery (charter → business case → requirements → workflow mapping → schedule/budget → RAID → governance → benefits realization), with strong capability in policy/process 		    standardization, audit-ready controls, and organization-wide change. Trusted partner to executives and cross-functional stakeholders (clinical/business/technical equivalents) to deliver measurable outcomes 	    through disciplined governance, clear decision-making, and high-quality documentation.
          </p>
        </div>
      </section>

      {/* What I've shipped */}
      <section className="mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Metric value="12+" label="Years Experience" />
          <Metric value="$7M+" label="Program Budgets" />
          <Metric value="99.95%" label="Platform uptime" />
          <Metric value="20+" label="Team Members Reporting" />
        </div>
      </section>

      {/* AI Section */}
      <section className="mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">AI as a Delivery Tool</h2>
            <p className="max-w-4xl text-slate-700">
              I treat AI like internal tooling—something that improves speed, clarity, and decision quality across teams.
            </p>
          </div>
          <Pill>Human-in-the-loop · Audit-ready</Pill>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Project planning & sequencing</h3>
              <p className="mb-2 text-slate-700">
                Structure integrated plans, validate sequencing logic, and surface hidden dependencies across SAP, cloud, and data
                workstreams.
              </p>
              <p className="text-sm text-slate-600">
                Example: Sanity-check a multi-release plan by validating dependencies, surfacing compression risk, and proposing
                alternative phasing.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Workload & resource balancing</h3>
              <p className="mb-2 text-slate-700">
                Analyze capacity, role allocation, and competing priorities to reduce over-commitment and protect critical paths.
              </p>
              <p className="text-sm text-slate-600">
                Example: Review release commitments to flag bottlenecks and rebalance work while keeping delivery dates stable.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Budget oversight & forecast clarity</h3>
              <p className="mb-2 text-slate-700">
                Compare planned vs. actuals, summarize burn trends, and highlight variance drivers early for corrective action.
              </p>
              <p className="text-sm text-slate-600">
                Example: Generate a monthly forecast summary that identifies overrun risk and options (scope, vendors, sequencing).
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Release calendar & readiness</h3>
              <p className="mb-2 text-slate-700">
                Rationalize multi-team release calendars and validate alignment with freeze windows, approvals, and readiness criteria.
              </p>
              <p className="text-sm text-slate-600">
                Example: Consolidate SAP + integration release plans to detect collisions and prevent last-minute change risk.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">RAID synthesis & trend analysis</h3>
              <p className="mb-2 text-slate-700">
                Keep RAID logs current, cluster related risks, and elevate systemic themes into executive-level narratives.
              </p>
              <p className="text-sm text-slate-600">
                Example: Identify recurring integration risk patterns and propose mitigations with traceability to source evidence.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Exec-ready communication</h3>
              <p className="mb-2 text-slate-700">Convert detailed delivery inputs into concise updates that drive decisions, not meetings.</p>
              <p className="text-sm text-slate-600">
                Example: Produce a 1-page summary with status, decisions needed, financial implications, and next milestones.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Opinion callout */}
        <div className="mt-8">
          <Card className="border border-slate-200/70 bg-slate-50/80 backdrop-blur shadow-sm">
            <CardContent className="p-6 italic text-slate-700">
              “Great delivery isn’t about moving faster — it’s about removing friction so teams can ship with confidence.”
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How I think */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">How I Think About Delivery</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl text-slate-700">
          <p>• Start with customer impact, then design the delivery system.</p>
          <p>• Prefer small, reversible decisions over rigid long-term plans.</p>
          <p>• Treat reliability and operational clarity as product features.</p>
          <p>• Use AI to reduce cognitive load — not replace accountability.</p>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl font-semibold text-slate-800">Selected Projects</h2>
          <Pill>Outcome-first · Product-minded</Pill>
        </div>

<Card className="border border-blue-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
  <CardContent className="p-6 space-y-3">
    <div className="flex flex-wrap items-center gap-2 text-xs text-blue-700 font-medium">
      <span>Enterprise ERP</span>
      <span>•</span>
      <span>Regulated Environment</span>
      <span>•</span>
      <span>$5M Program</span>
    </div>

    <h3 className="font-semibold text-lg">
      Cipla USA – Multi-Entity SAP S/4HANA Implementation
    </h3>

    <p className="text-slate-700">
      Led a $5M SAP implementation program across three Cipla US entities—a regulated manufacturing plant, a
      government subsidiary, and the US head office—delivering a unified, compliant ERP platform under FDA,
      SOX, GRC, and CSV requirements.
    </p>

    <ul className="list-disc pl-5 space-y-1 text-slate-700">
      <li>Program Manager for a 50-person cross-functional team spanning IT, Finance, Supply Chain, Quality, and Operations</li>
      <li>Managed Accenture as the implementation partner; coordinated integrations with UPS (3PL) and HSBC (banking)</li>
      <li>Delivered full-scope SAP modules: OTC, P2P, SCM, EWM, FICO, MM, QM, and PP</li>
      <li>Owned program governance, budget control, timeline management, and enterprise risk management</li>
      <li>Ensured audit-ready delivery aligned with FDA, SOX, GRC, and Computer System Validation (CSV) standards</li>
    </ul>

    <p className="text-sm text-slate-600">
      Outcome: Successful on-time, on-budget go-live with compliant, scalable SAP operations and stable post-production
      performance across all three US entities.
    </p>
  </CardContent>
</Card>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <div className="mb-2">
                <span className="text-xs font-medium text-indigo-600">Manufacturing FinOps</span>
              </div>
              <h3 className="font-semibold mb-2">SAP IS-U utilities billing exploration</h3>
              <p className="text-slate-700">
                Designed an approach to allocate plant utility consumption (water/steam/electricity) to company codes for accurate
                financial tracking and chargebacks.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <div className="mb-2">
                <span className="text-xs font-medium text-indigo-600">Platform Reliability</span>
              </div>
              <h3 className="font-semibold mb-2">Clean Core integration program</h3>
              <p className="text-slate-700">
                Reduced production incidents by 25% by decoupling SAP S/4HANA from AWS-hosted services using API-first integration
                patterns (CPI) and clean-core standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl font-semibold text-slate-800">Case Study</h2>
          <Pill>Problem → Constraints → Decision → Outcome</Pill>
        </div>

        <Card className="mt-6 border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-medium text-indigo-600">Shipping at scale</span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-500">S/4HANA · AWS · Integration</span>
            </div>

            <h3 className="text-lg font-semibold mb-4">Decoupling core finance from downstream apps to reduce change risk</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Problem</h4>
                <p className="text-slate-700">
                  Frequent downstream changes and tight release windows increased incident risk and slowed delivery across the platform.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Constraints</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Regulated environment with formal change control</li>
                  <li>Multiple vendor teams and legacy integrations</li>
                  <li>Production stability and auditability requirements</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Decision</h4>
                <p className="text-slate-700">
                  Implemented API-first integration patterns and SAP CPI-based mediation, enforcing clean-core standards and reducing point-to-point coupling.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Outcome</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Reduced integration-related production incidents by 25%</li>
                  <li>Improved release coordination and lowered last-minute change risk</li>
                  <li>Increased predictability through clearer contracts and dependency boundaries</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Guardrails over gates</Pill>
              <Pill>Small, reversible changes</Pill>
              <Pill>Reliability as a feature</Pill>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Skills & Methods</h2>
        <p className="max-w-5xl text-slate-700">
          SAP S/4HANA, SAP BTP, SAP Integration Suite (CPI), AWS, Azure, Waterfall & Agile Delivery, PMI Governance, Vendor
          Management, Budget Ownership, Data & Integration Platforms, AI-Assisted Delivery
        </p>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-3xl text-center bg-slate-900 text-white rounded-2xl p-10">
        <h2 className="text-2xl font-semibold mb-3">Let’s Connect</h2>
        <p className="mb-2 text-slate-300">Toronto, Canada · Open to Tech & Consulting Roles</p>
        <p className="mb-6 text-slate-300">Happy to connect about product delivery, platform reliability, and AI-enabled transformation.</p>
        <div className="flex justify-center gap-4">
          <Button asChild className="transition-transform hover:-translate-y-0.5">
            <a
              href="https://www.linkedin.com/in/asad-toronto89"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </Button>
          <Button asChild className="transition-transform hover:-translate-y-0.5">
            <a href="mailto:khan.asad09@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Email</span>
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

function ExperiencePage({
  experience,
  education,
  additional,
}: {
  experience: ExperienceItem[];
  education: EducationItem[];
  additional: string[];
}) {
  return (
    <>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-3 text-slate-900">Experience</h1>
        <p className="max-w-4xl text-slate-700">Detailed professional experience, education, certifications, and additional information.</p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <Card
              key={`${item.company}-${item.role}`}
              className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg">
                    {item.role} – {item.company}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.dates} | {item.locationLine}
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  {item.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <Card
              key={e.title}
              className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold">{e.title}</h3>
                {(e.org || e.year) && (
                  <p className="text-sm text-slate-600 mt-1">
                    {e.org ? e.org : ""}
                    {e.org && e.year ? " · " : ""}
                    {e.year ? e.year : ""}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Additional Information</h2>
        <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <CardContent className="p-6">
            <ul className="list-disc pl-5 space-y-2">
              {additional.map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function runSelfTests(data: { experience: ExperienceItem[]; education: EducationItem[]; additional: string[] }) {
  try {
    console.assert(Array.isArray(data.experience) && data.experience.length >= 3, "Expected at least 3 experience items");
    console.assert(Array.isArray(data.education) && data.education.length >= 3, "Expected at least 3 education/cert items");
    console.assert(Array.isArray(data.additional) && data.additional.length >= 1, "Expected at least 1 additional info item");
    console.assert(data.experience[0]?.bullets?.length >= 5, "Expected Sun Life role to contain full bullet set (5+ bullets)");
  } catch {
    // no-op
  }
}

export default function Portfolio() {
  const [page, setPage] = useState<Page>("home");

  const data = useMemo(() => {
    const experience: ExperienceItem[] = [
      {
        company: "Sun Life Financial",
        role: "IT Delivery Manager",
        locationLine: "Toronto, ON",
        dates: "Feb 2023 – Feb 2025",
        bullets: [
          "Independently led multiple concurrent, high-complexity initiatives across data, integrations, reporting and enterprise platforms owning project charters, business case inputs, requirements, workflow mapping, 	  integrated schedules, budget tracking, RAID, resource plans, and benefits realization.",
	  "Established and ran project governance to enable timely decisions and independent delivery execution—set up SteerCo/working groups, escalation paths, decision logs, stage gates, and delivery standards, ensuring 	  transparency and accountability across business and technology leadership.",
	  "Led organization-wide change and stakeholder alignment across 25–40 stakeholders (business, risk/control, engineering, data, vendors)—driving shared outcomes through structured communications, dependency 	 	  management, and executive-ready decision materials.",
	  "Defined and standardized delivery “ways of working” (policy/SOP-level process standards) across releases—implemented intake and prioritization workflows, release readiness criteria, reconciliation gates, cutover 	  runbook templates, documentation standards, and triage/escalation paths, improving predictability and control outcomes.",
	  "Designed and operationalized data quality and reconciliation controls (source-to-target checks, break reporting, triage workflows, and resolution SLAs) to strengthen audit readiness and reduce downstream errors  	  across integration and reporting pipelines.",
	  "Project-managed SAP BTP integration delivery connecting SAP S/4HANA with AWS services and Informatica pipelines—owned integrated planning across ERP/cloud/data teams, executed SIT/UAT, cutover readiness, release 	  governance, and hypercare stabilization across 4–6 releases, achieving 98% reconciliation pass rate at go-live.",
	  "Delivered executive-ready analytics and reporting governance for Group Insurance—launched 5 Tableau dashboards (Claims trend/severity, Loss Ratio, Premium/Growth, Retention/Lapse, SLA/TAT) and drove 70–80% 	  adoption within 6–8 weeks, improving decision velocity and performance visibility.",
 	  "Led controls-focused reporting migration governance for Vietnam and Philippines (Tableau reporting from IFRS 9 → IFRS 17)—implemented documentation standards, sign-off checkpoints, and audit-ready governance; 	  achieved 100% milestone signoffs across 2 countries / 2 workstreams.",
	  "Governed change/release execution using ITIL-aligned controls (CAB/change approvals, verification gates, post-release validation), reducing integration-related production incidents by 15–20% and improving 	  operational stability post-release.",
	  "Managed portfolio financials and resourcing across a $1.8M+ annual run + change budget, improving forecasting transparency and KPI-based delivery tracking.",
	  "Led and developed a multidisciplinary team (14+) by setting clear accountabilities, improving delivery hygiene, and strengthening transition-to-operations practices.",
        ],
      },
      {
        company: "Cipla Pharmaceuticals",
        role: "IT Senior Manager",
        locationLine: "New Jersey, USA & Mumbai, India",
        dates: "Dec 2018 – Feb 2023",
        bullets: [
          "Served as the strategic and operational lead for SAP services in a GMP/GxP-regulated environment, translating business priorities into delivery roadmaps, release plans, and adoption/change readiness across 	   regulated manufacturing, quality, and supply chain operations.",
	   "Program-managed up to $7M USD SAP ERP transformation initiatives across Finance + Supply Chain (O2C, P2P, FI/CO, MM, EWM, PP, QM, Vistex) and complex integrations (3PL, banking, serialization, vendor portals, 	   regulatory reporting)—owning business case inputs, charter, integrated plan, budget, RAID, governance cadence, vendor/SI management, and executive reporting.",
	   "Led end-to-end delivery from initiation to close-out: requirements workshops, workflow mapping, build/test (SIT/UAT), reconciliation controls, 2 cutover rehearsals, go/no-go governance, rollback planning, and 	   command-center hypercare—delivering controlled launches with 3-week stabilization.",
	   "Developed and institutionalized “standard ways of working” (policy/SOP-level process standards) for delivery execution in a regulated landscape—release readiness criteria, validation-friendly documentation 	   standards, cutover/runbook templates, triage/escalation paths, and reconciliation gates—reducing delivery risk and improving audit readiness across multiple releases.",
	   "Defined and implemented change control and compliance controls aligned to CSV/GxP validation expectations—chaired CAB, enforced change documentation and approval workflows, and improved throughput while 	   	   protecting production stability; reduced high-priority ticket turnaround by 35% (14 → 9 days).",
	   "Led multi-site rollout and process standardization across 2 plants/warehouses (including S/4HANA delivery for Cipla South Africa across SCM/Manufacturing/EWM/P2P/QM/FI/CO), coordinating cross-functional SMEs and 	   system integrators through testing, cutover readiness, and go-live stabilization.",
	   "Project-managed SAP IBP implementation to operationalize shelf-life/expiry management and clinical trial supply planning—led requirements, integrated design, SIT/UAT, and cutover readiness; integrated IBP 	   planning outputs and master data with SAP S/4HANA to improve compliance and end-to-end visibility for time-sensitive inventory.",
	   "Established SAP services governance / operating model across L2/L3 support and enhancement delivery—ran monthly service reviews, maintained SLA/KPI scorecards, governed a $5M+ support/enhancement portfolio, and 	   managed global vendors to improve stability and user experience.",
        ],
      },
      {
        company: "Capgemini · DXC Technology · Mahindra Bristlecone",
        role: "Enterprise Software Consultant",
        locationLine: "Mumbai, India",
        dates: "Feb 2011 – Apr 2016",
        bullets: [
          "Delivered large-scale enterprise platform migrations, modernizing legacy systems to improve scalability, performance, and long-term maintainability.",
          "Led backend remediation and optimization initiatives, resolving technical debt, improving processing efficiency, and stabilizing mission-critical applications.",
          "Designed and implemented system integrations across finance, supply chain, and operational platforms, enabling seamless data exchange and business continuity.",
          "Partnered with cross-functional stakeholders to translate complex business requirements into robust, production-ready software solutions.",
          "Managed integration testing, defect resolution, and post-release stabilization to ensure smooth production transitions.",
          "Developed custom backend services, automation, and reporting capabilities, reducing manual effort and improving operational efficiency by up to 25%.",
          "Supported platform upgrades and production support activities, strengthening reliability, observability, and incident response practices.",
          "Contributed to pre-sales and solution design efforts, shaping long-term platform roadmaps and delivery strategies for enterprise clients.",
        ],
      },
    ];

    const education: EducationItem[] = [
      { title: "Project Management Professional (PMP®)", org: "PMI", year: "Apr 2025" },
      { title: "MBA, Project & Program Management", org: "HULT International Business School, Boston", year: "2017" },
      { title: "B.Sc. Computer Science", org: "Chennai University, India", year: "2010" },
      { title: "SAP Certified Development Associate – ABAP NetWeaver 7.0", org: "SAP, Germany", year: "2011" },
    ];

    const additional: string[] = ["Canadian Permanent Resident", "Languages: English (Fluent), French (Beginner), Hindi (Fluent)"];

    return { experience, education, additional };
  }, []);

  runSelfTests(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 px-6 py-12 max-w-6xl mx-auto">
      <Nav page={page} onNavigate={setPage} />
      {page === "home" ? (
        <HomePage />
      ) : (
        <ExperiencePage experience={data.experience} education={data.education} additional={data.additional} />
      )}
    </div>
  );
}
