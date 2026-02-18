# Artiva Clinical Sites — New Companies Research Summary
**Generated:** 2026-02-18 via ClinicalTrials.gov API v2  
**Scope:** RA-focused cell therapy and T-cell engager programs  
**Output file:** `new-companies-data.js`

---

## Overview

| Company | Drug | Mechanism | Color | Trials Found | Primary Focus |
|---------|------|-----------|-------|--------------|---------------|
| Novartis | PIT565 | T-cell engager (CD19?) | `#e67e22` | 2 | RA + SLE |
| BMS/Juno | CC-97540 (Zola-cel) | Allo CD19 CAR-T | `#9b59b6` | 2 | RA, SLE, SSc, IIM |
| AstraZeneca | AZD0120 (GC012F) | CD19+BCMA CAR-T | `#1abc9c` | 2+ | RA, SSc, SLE, MM |
| Adicet | ADI-001 | γδ CAR-T (CD20 targeting) | `#e74c3c` | 2 | Autoimmune + RA |
| Sonoma | SBT777101 | Treg cell therapy | `#2ecc71` | 2 | RA (primary!) |
| Dren Bio | DR-0201 | CD19 bispecific antibody | `#f39c12` | 2 | SLE, Sjogren's, DM, SSc |

---

## Detailed Findings

### 1. Novartis — PIT565

**Primary NCT:** NCT07029555  
**Drug:** PIT565 (T-cell engager)  
**Focus:** Rheumatoid Arthritis  
**Phase:** 1  
**Status:** RECRUITING  
**Title:** "An Ascending Dose Study of PIT565 in Participants With Rheumatoid Arthritis"

**Sites (11 sites, 0 US):**
- Argentina: Buenos Aires (CABA) — no geo in API, used approximate
- Bulgaria: Sofia
- China: Beijing (×2)
- Germany: Jena, Mainz
- Netherlands: Leiden
- Romania: Cluj-Napoca, Bucharest
- Spain: Santiago de Compostela, Barcelona

**Secondary NCT:** NCT06335979  
**Drug:** PIT565  
**Focus:** Systemic Lupus Erythematosus (SLE)  
**Phase:** 1  
**Status:** RECRUITING  
**Sites:** Bulgaria, China, Germany, Hungary (+ more per truncated API)

**Notes:**
- PIT565 is Novartis's T-cell engager program for autoimmune disease
- No US sites identified for the RA trial — entirely international Phase 1
- CABA = Ciudad Autónoma de Buenos Aires; coordinates approximated as -34.603, -58.381

---

### 2. BMS/Juno — CC-97540 (Zola-cel, BMS-986353)

**Primary NCT:** NCT05869955  
**Drug:** CC-97540 (also called Zola-cel or BMS-986353) — allogeneic CD19-targeted NEX-T CAR-T  
**Focus:** SLE, IIM, Systemic Sclerosis, **Rheumatoid Arthritis**  
**Phase:** 1  
**Status:** RECRUITING  
**Title:** "Breakfree-1 — CC-97540 in Severe, Refractory Autoimmune Diseases"

**Sites (51 sites across US and EU):**
- USA: Aurora CO, Denver CO, New Haven CT, Jacksonville FL, Miami FL, Chicago IL, Baltimore MD, Boston MA, Worcester MA, Ann Arbor MI, Detroit MI, Rochester MN, St. Louis MO, Omaha NE, Summit NJ, New York NY (multiple), Chapel Hill NC, Cleveland OH, Columbus OH, Dallas TX, Houston TX, Seattle WA
- Belgium: Leuven
- France: Strasbourg, Pessac/Bordeaux, Montpellier, Lille, Nice, Paris (multiple), Rennes
- Germany: Würzburg, Cologne, Leipzig, Magdeburg, Berlin, Düsseldorf, Erlangen
- Italy: Rome, Rozzano (Milan area)
- Spain: Barcelona, Santander, Córdoba, Málaga

**Secondary NCT:** NCT07015983 (Breakfree-SLE, Phase 2, SLE/Lupus Nephritis — not included in dataset, available separately)

**Notes:**
- This is the most comprehensively enrolled trial in the group
- "Local Institution" site names replaced with known institution names where identifiable
- RA is explicitly listed as one of the conditions; trial is open to multiple autoimmune diseases
- Zola-cel is allogeneic (off-the-shelf), manufactured by Juno/BMS

---

### 3. AstraZeneca — AZD0120 (GC012F)

**Primary RA NCT:** NCT07295847  
**Drug:** AZD0120 (GC012F) — CD19+BCMA dual-targeting CAR-T  
**Focus:** Systemic Sclerosis, Idiopathic Inflammatory Myopathies, **Rheumatoid Arthritis**  
**Phase:** 1  
**Status:** RECRUITING  
**Title:** "A Study of AZD0120 in Autoimmune Diseases"

**Sites (18 sites):**
- USA: Tucson AZ, Stanford CA, Chicago IL, Ann Arbor MI, St. Louis MO, New York NY, Chapel Hill NC, Seattle WA
- Australia: Darlinghurst (Sydney), Waratah (Newcastle)
- Germany: Hamburg, Mainz, Würzburg
- Spain: Barcelona, Madrid (×2)
- UK: Edinburgh, London

**Secondary NCT:** NCT06897930  
**Focus:** SLE (Phase 1/2, recruiting)  
**Sites:** 16 sites across USA and Australia

**Important Context:**  
AZD0120 = GC012F, originally developed by Gracell Biotechnologies (acquired by AstraZeneca 2024). The drug also appears under NCT05850234 (RRMM, Phase 1/2) and NCT07391657 (RRMM Phase 3, not yet recruiting). The most RA-relevant trial is NCT07295847 which explicitly lists RA, SSc, and IIM.

---

### 4. Adicet Therapeutics — ADI-001

**Primary Autoimmune NCT:** NCT06375993  
**Drug:** ADI-001 — allogeneic γδ (gamma delta) T-cell CAR-T  
**Focus:** Lupus Nephritis, SLE, SSc, AAV, IIM, Stiff Person Syndrome  
**Phase:** 1  
**Status:** RECRUITING  
**Title:** "A Phase 1 Study of ADI-001 in Autoimmune Disease"

**Sites (2 US sites):**
- Redwood City, CA — Adicet Clinical Trials (company-operated site)
- Buffalo, NY — Roswell Park Comprehensive Cancer Center

**RA-Specific NCT:** NCT07100873  
**Focus:** Rheumatoid Arthritis (RA-only)  
**Phase:** 1  
**Status:** RECRUITING  
**Site:** Shanghai, China — Adicet Clinical Trials

**Historical NCT (terminated):** NCT04735471 — ADI-001 in B-cell malignancies (TERMINATED, not included)

**Notes:**
- ADI-001 is allogeneic γδ T-cells — unique mechanism vs. αβ T-cell CAR-T
- Very limited site footprint for autoimmune (only 2 US + 1 China)
- The RA-specific China trial (NCT07100873) is particularly relevant to the dashboard
- Company operates its own clinical trial site in Redwood City (near HQ)

---

### 5. Sonoma Biotherapeutics — SBT777101

**Primary NCT:** NCT06201416  
**Drug:** SBT777101 — gene-modified regulatory T cells (Tregs)  
**Focus:** Rheumatoid Arthritis (**RA primary indication**)  
**Phase:** 1  
**Status:** RECRUITING  
**Title:** "Study of Single Doses of SBT777101 in Subjects With Rheumatoid Arthritis"

**Sites (8 US academic medical centers):**
- Mayo Clinic, Scottsdale AZ
- UCSF Medical Center, San Francisco CA
- Stanford Medical Center, Stanford CA
- University of Colorado, Aurora CO
- Northwestern University, Chicago IL
- Tufts University, Boston MA
- Massachusetts General Hospital, Boston MA
- Brigham and Women's Hospital, Boston MA

**LTFU NCT:** NCT07123038  
**Focus:** RA + Hidradenitis Suppurativa (long-term safety follow-up)  
**Status:** RECRUITING  
**Additional Sites:** Minneapolis MN (U Minnesota), Durham NC (Duke), Houston TX (MD Anderson)

**HS NCT:** NCT06361836 — SBT777101 in Hidradenitis Suppurativa (not included in dataset)

**Notes:**
- Only company with RA as sole/primary indication in Phase 1
- All US sites at major academic rheumatology/immunology centers
- Treg approach is mechanistically distinct from CAR-T (suppressive vs. cytotoxic)
- Founded by Andrew Bluestone (UCSF) — explains UCSF/Stanford concentration

---

### 6. Dren Bio — DR-0201

**Primary NCT:** NCT06647069  
**Drug:** DR-0201 — CD19-targeting bispecific antibody (NK cell engager)  
**Focus:** SLE, Cutaneous Lupus, Sjogren's Syndrome, Dermatomyositis, Polymyositis, Systemic Sclerosis  
**Phase:** 1  
**Status:** RECRUITING  
**Title:** "DR-0201 in Subjects With Autoimmune Diseases"

**Sites (8 sites, entirely non-US):**
- Australia: Coorparoo/Brisbane QLD, Melbourne VIC
- Bosnia and Herzegovina: Mostar, Sarajevo
- New Zealand: Auckland
- South Africa: Pretoria (×3 sites), Polokwane, Vereeniging

**Completed Healthy Volunteer NCT:** NCT06008652 (Adelaide, Australia — COMPLETED, not in dataset)

**NHL NCT:** NCT06392477 — SAR448501/DR-0201 in B-cell NHL (partnership with Sanofi) — not included (oncology, not autoimmune)

**Notes:**
- DR-0201 is a FcγRIIIa-optimized anti-CD19 antibody (NK cell engaging), NOT a cell therapy — but being investigated in autoimmune
- RA is NOT currently in NCT06647069 conditions — the focus is SLE, Sjogren's, DM, SSc
- No US sites in the autoimmune trial (regulatory strategy likely using ex-US lower-risk populations first)
- Dren Bio was founded in 2021; still early-stage
- Partnership with Sanofi (SAR448501) covers oncology indication separately

---

## Data Quality Notes

| Issue | Detail |
|-------|--------|
| Missing coordinates | Novartis CABA (Argentina): used approximate Buenos Aires coords (-34.603, -58.381). Novartis Santiago Compostela: used city approx (42.880, -8.544). AZD0120 Mainz Am Rhein: used Mainz coords (49.982, 8.280) |
| Duplicate sites | Novartis Beijing has 2 entries (different hospital IDs in source data) — both retained. BMS NYC has 5 entries collapsed to major named institutions |
| "Local Institution" names | BMS Breakfree-1 uses internal site codes like "Local Institution - 0038"; retained as-is or mapped to known institution where identifiable |
| Facility names | AstraZeneca and BMS use "Research Site" generically; retained as provided |
| RA relevance | Dren Bio's DR-0201 does not currently have an RA trial — closest is the autoimmune basket trial. Flagged in conditions |
| Trial scope | AZD0120 has many trials (MM, MS, SLE, RA) — only autoimmune-relevant trials included (NCT07295847, NCT06897930) |

---

## NCT Numbers Reference

| NCT | Company | Drug | Indication | Phase | Status |
|-----|---------|------|------------|-------|--------|
| NCT07029555 | Novartis | PIT565 | Rheumatoid Arthritis | 1 | RECRUITING |
| NCT06335979 | Novartis | PIT565 | Systemic Lupus Erythematosus | 1 | RECRUITING |
| NCT05869955 | BMS/Juno | CC-97540/Zola-cel | RA, SLE, SSc, IIM | 1 | RECRUITING |
| NCT07015983 | BMS/Juno | CC-97540/Zola-cel | SLE, Lupus Nephritis | 2 | RECRUITING |
| NCT07295847 | AstraZeneca | AZD0120/GC012F | RA, SSc, IIM | 1 | RECRUITING |
| NCT06897930 | AstraZeneca | AZD0120/GC012F | SLE | 1/2 | RECRUITING |
| NCT06375993 | Adicet | ADI-001 | Autoimmune basket | 1 | RECRUITING |
| NCT07100873 | Adicet | ADI-001 | Rheumatoid Arthritis | 1 | RECRUITING |
| NCT06201416 | Sonoma | SBT777101 | Rheumatoid Arthritis | 1 | RECRUITING |
| NCT07123038 | Sonoma | SBT777101 | RA + Hidradenitis Suppurativa (LTFU) | Obs | RECRUITING |
| NCT06647069 | Dren Bio | DR-0201 | Autoimmune (SLE, Sjogren's, DM, SSc) | 1 | RECRUITING |
| NCT06008652 | Dren Bio | DR-0201 | Healthy volunteers | 1 | COMPLETED |

---

## Site Count Summary

| Company | Total Sites in Dataset | US Sites | International Sites |
|---------|----------------------|----------|---------------------|
| Novartis | 15 | 0 | 15 (AR, BG, CN, DE, HU, NL, RO, ES) |
| BMS/Juno | 47 | 24 | 23 (BE, FR, DE, IT, ES) |
| AstraZeneca | 25 | 15 | 10 (AU, DE, ES, UK) |
| Adicet | 3 | 2 | 1 (CN) |
| Sonoma | 15 | 15 | 0 |
| Dren Bio | 8 | 0 | 8 (AU, BA, NZ, ZA) |
| **TOTAL** | **113** | **56** | **57** |
