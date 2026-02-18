# Artiva AI-Powered Intelligence Platform
### Internal Proposal — Expansion & Requirements

**Prepared by:** Daniel Branco, with AI support from the Artiva Dashboard team  
**Date:** February 2026  
**Current state:** Live prototype at artiva.consaience.com (Clinical Trials Dashboard)

---

## Executive Summary

We have a working AI-powered clinical trials dashboard that was built entirely by an AI agent (Claude) under human direction — no traditional software development team required. The platform currently tracks **11 companies, 900+ clinical trial sites across 40+ countries**, with an AI chat assistant ("Ask a Pill") that answers questions about the data in real-time.

This document outlines the opportunity to expand this into a **comprehensive competitive intelligence platform** for Artiva, powered by multiple public and proprietary data sources, maintained and continuously improved by AI agents at a fraction of the cost of traditional software development.

---

## What We Have Today

### Clinical Trials Dashboard (Live)
- Interactive world map with all trial sites, color-coded by company
- Table view with search/filter across all sites
- Company comparison view with pipeline visualization
- AI-generated insights with categorization
- AI chat assistant that answers questions about the data
- **Feature request pipeline**: Users can request changes via chat → AI implements and deploys in minutes

### Companies Currently Tracked
Artiva, Cullinan Oncology, Candid Therapeutics, Amgen (Blinatumomab), Xencor, Novartis, BMS/Juno, AstraZeneca, Adicet Therapeutics, Sonoma Biotherapeutics, Dren Bio

---

## Data Sources & What They Unlock

### 1. ClinicalTrials.gov (Currently in use)
**Access:** Free, public API (v2)  
**Data available:** Trial registrations, phases, recruiting status, site locations, conditions, sponsors, enrollment targets, study arms, outcome measures  
**Cost:** $0

**Questions we can answer:**
- Which competitors are recruiting for the same indications, and where?
- How does our site footprint compare to competitors by geography?
- What's the pace of new trial registrations in our therapeutic areas?
- Which sites are shared across multiple competing programs?
- How are competitors expanding into new indications or geographies?
- Enrollment target analysis — who's planning the largest trials?

### 2. CMS / Medicare Data (New)
**Access:** Free, public (data.cms.gov, Medicare Provider Utilization & Payment Data)  
**Data available:** Provider billing data, drug utilization (Part B/Part D), facility-level administration volumes, average sales price (ASP), reimbursement rates  
**Cost:** $0

**Questions we can answer:**
- Which hospitals/clinics have the highest volume of infusions for competing therapies (e.g., blinatumomab)?
- What is the current reimbursement rate for cell therapies and bispecifics?
- Which geographic markets have the highest utilization of related therapies?
- How is adoption of new cell therapies trending quarter-over-quarter?
- What does the payer landscape look like for our target indications?
- Site-of-care analysis: hospital outpatient vs. freestanding infusion centers
- Average cost per infusion/administration by product and setting

### 3. Infusion Center Networks (New)
**Sources:**
- **2infuse.com** — Commercial infusion center locator and network
- **InfusionCenter.org** — National Home Infusion Association locator
- Other networks: Option Care Health, Orsini, BioMatrix, PharMerica

**Access:** Web scraping / API where available  
**Data available:** Infusion center locations, capabilities, specialties, network affiliations  
**Cost:** $0 (public data)

**Questions we can answer:**
- Where are the infusion centers capable of administering cell therapies?
- Which infusion networks have the geographic reach to support our launch?
- Gap analysis: where do we have trial sites but no nearby commercial infusion capacity?
- Which markets are underserved for specialty infusion?
- Partnership opportunities: which networks are expanding?
- Distance analysis for patients: average miles to nearest infusion center by metro area

### 4. AlphaSense (Existing subscription)
**Access:** Company subscription (API or web access)  
**Data available:** SEC filings, earnings call transcripts, broker research, expert calls, news, patent filings  
**Cost:** Already covered by existing Artiva subscription

**Questions we can answer:**
- What are competitors saying about their RA/autoimmune programs on earnings calls?
- What guidance are competitors giving on timelines, enrollment, and commercialization?
- Which analysts are covering the cell therapy autoimmune space, and what's their consensus?
- What are KOLs saying in expert network calls about our competitive positioning?
- Patent landscape: freedom-to-operate analysis for our key programs
- M&A signals: which competitors are acquisition targets or acquirers?
- Sentiment analysis across competitor communications over time

### 5. Investor Relations / SEC Filings (New)
**Sources:** Company IR websites, SEC EDGAR, investor presentations  
**Access:** Free, public  
**Data available:** 10-K/10-Q filings, investor presentations, press releases, pipeline updates, financial data  
**Cost:** $0

**Questions we can answer:**
- Competitor cash runway analysis — who's well-funded vs. at risk?
- Pipeline milestone tracking: expected data readouts, regulatory submissions
- Headcount and R&D spend trends by competitor
- Partnership and licensing deal structures in our space
- What commercialization infrastructure are competitors building?
- Competitive pricing signals from ex-US markets

### 6. FDA / Regulatory Data (New)
**Sources:** FDA.gov (FAERS, Orange Book, BLA/NDA databases, Advisory Committee transcripts)  
**Access:** Free, public APIs  
**Data available:** Adverse event reports, approval history, regulatory correspondence, advisory committee votes  
**Cost:** $0

**Questions we can answer:**
- What safety signals exist for competing therapies?
- Regulatory pathway precedents for our drug class
- Advisory committee voting patterns for similar products
- REMS requirements for competitors — what should we expect?
- Post-market surveillance data for approved cell therapies

### 7. Academic / Publication Data (New)
**Sources:** PubMed API, bioRxiv, medRxiv, conference abstracts (ASH, ACR, EULAR)  
**Access:** Free, public APIs  
**Data available:** Publications, clinical data presentations, review articles, meta-analyses  
**Cost:** $0

**Questions we can answer:**
- What clinical data have competitors published?
- KOL mapping: who's publishing on our target indications and therapies?
- Trend analysis: what's the publication velocity in cell therapy for autoimmune?
- Which conferences are most relevant for our competitive landscape?

### 8. Drug Pricing & Market Data (New)
**Sources:** GoodRx API, Medicaid NADAC, WAC pricing databases, IQVIA (if subscribed)  
**Access:** Mixed (some free, some subscription)  
**Data available:** Drug pricing (WAC, ASP, NADAC), market share, prescription volumes  
**Cost:** $0–$5,000/mo depending on depth

**Questions we can answer:**
- Current pricing benchmarks for competing cell therapies and bispecifics
- Price trajectory over time for comparable products
- Market size modeling based on diagnosis volumes and pricing
- Formulary coverage analysis across major PBMs and payers

---

## Proposed Dashboard Expansion

### Dashboard 1: Clinical Trials (Current — Live ✅)
Competitive clinical trial landscape with site mapping, company comparison, and AI insights.

### Dashboard 2: Commercialization Intelligence (Next)
- Infusion center mapping and capacity analysis
- CMS utilization data for competing therapies
- Site-of-care mix analysis
- Launch readiness scoring by geography
- Reimbursement landscape

### Dashboard 3: Competitive Intelligence
- Real-time competitor tracking from AlphaSense + SEC filings
- Pipeline milestone timeline
- Earnings call sentiment analysis
- Cash runway and financial health comparisons
- KOL and publication mapping

### Dashboard 4: Market Access & Pricing
- Drug pricing benchmarks and trends
- Payer coverage landscape
- Patient access and affordability analysis
- Market size modeling

---

## Infrastructure Requirements

### What We Need

| Component | Purpose | Estimated Monthly Cost |
|-----------|---------|----------------------|
| **Cloud VPS** (Hetzner/AWS/Azure) | Host dashboards, AI agents, databases | $20–$80/mo |
| **Anthropic Claude API** (corporate key) | AI agent reasoning, chat, data analysis | $50–$200/mo* |
| **OpenClaw** (agent platform) | Orchestrate AI agents, manage sessions, deploy | $0 (open source) |
| **Domain + SSL** | Corporate URL (e.g., intelligence.artiva.com) | $15/yr |
| **AlphaSense** | Competitive intelligence data | Already subscribed |
| **Optional: IQVIA or similar** | Deeper market/prescription data | $3,000–$10,000/mo |

*Claude API cost depends on usage. Current prototype runs at ~$5–15/day with active development. Steady-state monitoring and chat would be $50–100/mo. Heavy analysis bursts (new company research, data pulls) add $50–100 per project.

### What We Already Have (Prototype)
- Working dashboard with 11 companies, 900+ sites
- AI chat assistant with feature request pipeline
- Automated deployment (git → production in seconds)
- Inter-agent communication system
- Server-side persistent insights with categorization

### Total Estimated Monthly Cost

| Tier | Scope | Est. Monthly Cost |
|------|-------|-------------------|
| **Starter** | Clinical trials + commercialization dashboards, CMS data, infusion center mapping | **$100–$300/mo** |
| **Standard** | + AlphaSense integration, competitive intelligence, SEC filing analysis | **$300–$500/mo** |
| **Enterprise** | + IQVIA/market data subscription, full market access dashboard | **$3,500–$10,500/mo** |

Note: The "Starter" and "Standard" tiers are remarkably cost-efficient because most data sources are free public APIs, and the AI agent replaces what would traditionally require a data engineering team + BI developers + analysts.

---

## How It Works — The AI Agent Model

### Traditional Approach
- Hire data engineers to build ETL pipelines ($150K–$200K/yr each)
- Hire BI developers for dashboards ($120K–$160K/yr each)
- Hire analysts to interpret data ($100K–$140K/yr each)
- 6–12 month development cycle
- Ongoing maintenance team
- **Annual cost: $500K–$1M+ for a small team**

### AI Agent Approach (What We're Doing)
- AI agent builds, deploys, and maintains dashboards autonomously
- Users request features via chat → implemented in minutes, not months
- Data research and integration done by AI sub-agents
- Continuous improvement without development sprints
- Single human (Daniel) provides direction and approval
- **Annual cost: $1,200–$6,000 (Starter/Standard tiers)**

This represents a **99%+ cost reduction** compared to traditional development, with faster iteration and 24/7 availability.

---

## What Makes This Different

1. **Self-improving platform**: Users can request changes in plain English via the chat widget. The AI implements and deploys in minutes — no development tickets, no sprints, no waiting.

2. **Living competitive intelligence**: The platform doesn't just display static data. The AI chat assistant can analyze trends, compare companies, and generate insights on demand.

3. **Multi-source synthesis**: The AI can pull from multiple data sources simultaneously to answer complex questions that would normally require an analyst spending hours across different tools.

4. **Virtually zero maintenance cost**: The AI agent monitors, fixes, and updates itself. Infrastructure costs are minimal (a single VPS).

5. **Rapid expansion**: Adding a new company, data source, or entire dashboard takes hours, not quarters.

---

## Recommended Next Steps

1. **Approve corporate VPS + Claude API key** — enables dedicated, secure infrastructure
2. **Start with Commercialization Dashboard** — integrate CMS data + infusion center mapping (highest business value, all free data)
3. **Wire up AlphaSense** — leverage existing subscription for competitive intelligence
4. **Iterate based on internal feedback** — the feature request pipeline means anyone at Artiva can shape the platform via the chat widget

---

## Questions?

The AI assistant ("Ask a Pill") is available 24/7 on the dashboard to answer questions about the data, generate insights, or take feature requests. For infrastructure or strategic questions, contact Daniel Branco.

---

*This proposal was generated collaboratively between Daniel Branco and an AI agent (VPS1MasterClaw). The platform described is live and operational at artiva.consaience.com.*
