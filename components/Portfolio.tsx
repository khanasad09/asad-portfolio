"use client";
import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

/**
 * Single-file portfolio site with simple in-app routing.
 * This avoids framework-specific routing (e.g., next/link) to ensure the component
 * renders reliably in any React runtime.
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
          "px-3 py-1 rounded-md",
          page === "home" ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
        )}
        aria-current={page === "home" ? "page" : undefined}
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => onNavigate("experience")}
        className={cx(
          "px-3 py-1 rounded-md",
          page === "experience" ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
        )}
        aria-current={page === "experience" ? "page" : undefined}
      >
        Experience
      </button>

      <div className="ml-auto flex flex-wrap gap-3">
        <Button variant="outline" asChild>
          {/* Resume PDF: place the file at /public/Asad_Khan_Resume.pdf so this link works */}
          <a href="/Asad_Khan_Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume (PDF)
          </a>
        </Button>
        <Button asChild>
          <a href="https://www.linkedin.com/in/asad-toronto89" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button asChild>
            <a href="mailto:khan.asad09@gmail.com">Email</a>
          </Button>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-14">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Asad Khan</h1>
        <p className="text-xl mb-4 text-slate-700">Senior Technical Program Manager | SAP & Cloud Platforms | AI-Enabled Delivery</p>
        <p className="max-w-4xl text-slate-700">
          PMP-certified Technical Program and Business Process Leader with 12+ years of experience delivering large-scale SAP,
          cloud, and data-intensive platforms in regulated enterprise environments. I bridge engineering execution and business
          outcomes—bringing a dual perspective from consulting and in-house product delivery, and applying AI to improve
          decision-making, speed, and delivery quality.
        </p>
      </section>

      {/* AI Section */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">How I Use AI in Practice</h2>
        <p className="max-w-4xl text-slate-700 mb-8">
          I use AI as a delivery acceleration and decision-support layer—not as a replacement for accountability or governance.
          My usage is practical, auditable, and aligned with enterprise delivery standards, enabling faster execution while
          preserving control in regulated environments.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Project Planning & Scheduling</h3>
              <p className="mb-2">
                AI assists in structuring integrated project plans, validating sequencing logic, and surfacing hidden dependencies
                across SAP, cloud, and data workstreams.
              </p>
              <p className="text-sm text-slate-600">
                Example: Sanity-checking a multi-release SAP S/4HANA plan by validating task dependencies, surfacing schedule
                compression risks, and proposing alternative phasing scenarios.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Workload & Resource Management</h3>
              <p className="mb-2">
                AI helps analyze capacity, role allocation, and competing priorities across concurrent initiatives to reduce
                over-commitment risk.
              </p>
              <p className="text-sm text-slate-600">
                Example: Reviewing sprint and release commitments to flag engineer over-allocation, identify bottlenecks, and
                rebalance work while protecting critical milestones.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Budget & Financial Oversight</h3>
              <p className="mb-2">
                AI supports budget tracking by comparing planned vs. actuals, summarizing burn trends, and identifying cost
                variance drivers early.
              </p>
              <p className="text-sm text-slate-600">
                Example: Generating monthly financial summaries that highlight forecast overruns, enabling proactive scope
                management or vendor adjustments.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Release & Calendar Management</h3>
              <p className="mb-2">
                AI helps rationalize release calendars across platforms and environments, aligning with business events, freeze
                windows, and CAB approvals.
              </p>
              <p className="text-sm text-slate-600">
                Example: Consolidating SAP, cloud, and integration release schedules to identify collisions, validate approvals,
                and strengthen production readiness.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">RAID Log Management & Analysis</h3>
              <p className="mb-2">
                AI accelerates RAID maintenance by synthesizing updates, clustering related risks, and flagging systemic themes
                for executive attention.
              </p>
              <p className="text-sm text-slate-600">
                Example: Analyzing weekly RAID entries to surface recurring integration risks, translate them into executive-level
                themes, and propose mitigations.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Executive Communication & Governance</h3>
              <p className="mb-2">
                AI helps convert detailed delivery data into concise, decision-ready updates for steering committees, leaders, and
                cross-functional stakeholders.
              </p>
              <p className="text-sm text-slate-600">
                Example: Producing one-page program summaries with status, risks, decisions required, and financial implications—
                while maintaining traceability to source artifacts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">SAP IS-U Utilities Billing Exploration</h3>
              <p>
                Explored SAP IS-U solutions to track water, steam, and electricity usage across manufacturing plants and allocate
                costs to company codes for accurate financial reporting.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Clean Core Integration Program</h3>
              <p>
                Decoupled SAP S/4HANA from AWS-hosted applications using CPI and API-first integration patterns to improve
                resiliency and reduce custom code.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Skills & Methods</h2>
        <p className="max-w-4xl text-slate-700">
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
            <a href="https://www.linkedin.com/in/asad-toronto89" target="_blank" rel="noreferrer" className="flex items-center gap-2">
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

function ExperiencePage({ experience, education, additional }: { experience: ExperienceItem[]; education: EducationItem[]; additional: string[] }) {
  return (
    <>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-3 text-slate-900">Experience</h1>
        <p className="max-w-4xl text-slate-700">
          Detailed professional experience, education, certifications, and additional information.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <Card key={`${item.company}-${item.role}`} className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg">
                    {item.role} – {item.company}
                  </h3>
                  <p className="text-sm text-slate-600">{item.dates} | {item.locationLine}</p>
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
            <Card key={e.title} className="border border-slate-200/70 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <CardContent className="p-6">
                <h3 className="font-semibold">{e.title}</h3>
                {(e.org || e.year) && (
                  <p className="text-sm text-slate-600 mt-1">
                    {e.org ? e.org : ""}{e.org && e.year ? " · " : ""}{e.year ? e.year : ""}
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
  // Lightweight sanity tests (non-blocking) to prevent regressions.
  try {
    console.assert(Array.isArray(data.experience) && data.experience.length >= 3, "Expected at least 3 experience items");
    console.assert(Array.isArray(data.education) && data.education.length >= 3, "Expected at least 3 education/cert items");
    console.assert(Array.isArray(data.additional) && data.additional.length >= 1, "Expected at least 1 additional info item");
    console.assert(
      data.experience[0]?.bullets?.length >= 5,
      "Expected Sun Life role to contain full bullet set (5+ bullets)"
    );
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
          "Led SAP S/4HANA Finance system upgrades and system-change initiatives using a Waterfall delivery model, managing scope, schedule, dependencies, and formal change control for internal Finance and Risk stakeholders.",
          "Negotiated and managed technology vendors and delivery partners, achieving 20% cost savings while improving delivery quality and responsiveness.",
          "Implemented proactive risk and issue management practices, resolving 95% of critical issues prior to executive escalation.",
          "Established engineering governance, change management, and release controls across cloud-hosted and enterprise platforms, reducing operational costs and delivery variability.",
          "Defined and executed SAP BTP Clean Core integration strategy using SAP Integration Suite (CPI), decoupling S/4HANA from AWS-hosted applications, enforcing API standards, minimizing custom code, and reducing integration-related production incidents by 25%.",
          "Managed AWS-hosted environments, overseeing deployment pipelines, monitoring, and cost optimization for internal and customer-facing applications.",
          "Applied Agile and SAFe practices within hybrid delivery models to accelerate feature throughput while aligning milestones with business priorities.",
          "Facilitated executive governance forums, presenting delivery status, financials, risks, and dependencies to senior leadership.",
          "Oversaw release planning, production readiness, and go-live execution, achieving zero high-severity incidents post-deployment.",
          "Strengthened IT governance and audit readiness by aligning delivery practices with enterprise security and compliance standards.",
          "Led globally distributed engineers and external partners, ensuring SLA adherence, consistent engineering standards, and delivery predictability.",
        ],
      },
      {
        company: "Cipla Pharmaceuticals",
        role: "IT Senior Manager",
        locationLine: "New Jersey, USA & Mumbai, India",
        dates: "Dec 2018 – Feb 2023",
        bullets: [
          "Led large-scale enterprise application and platform modernization programs across North America and international markets, managing budgets up to $5M.",
          "Optimized vendor contracts and delivery financials, generating $500K in annual recurring savings.",
          "Directed hybrid cloud operations supporting mission-critical platforms, achieving 99.95% uptime and consistent SLA compliance.",
          "Executed projects using Waterfall delivery methodologies (requirements, design, build, test, deploy), supplemented with Agile workshops for solution exploration and stakeholder validation.",
          "Oversaw platform upgrades, patching, and disaster recovery planning, reducing operational risk exposure by 80%.",
          "Facilitated Change Advisory Board (CAB) processes for production systems, reducing high-priority change turnaround time by 35% and improving platform stability.",
          "Delivered complex order-to-cash, supply chain, and manufacturing software capabilities, integrating external partners, logistics providers, and financial systems.",
          "Applied Agile delivery practices to manage engineering backlogs and align feature delivery with regulatory compliance and business objectives.",
          "Enhanced observability and incident response through automated dashboards, improving stakeholder visibility and decision-making.",
          "Recognized as Cipla IT Ambassador (2020) for fostering a collaborative, high-performance engineering culture.",
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

    const additional: string[] = [
      "Canadian PR",
      "Languages: English (Fluent), French (Beginner), Hindi (Fluent)",
    ];

    return { experience, education, additional };
  }, []);

  // Non-blocking sanity checks for quick debugging.
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
