const fs = require('fs');

// Read the conditions mapping
const conditionsMap = {
  "NCT04673617": ["Non Hodgkin Lymphoma"],
  "NCT05678205": ["Breast Cancer", "Gastric Cancer", "Gastroesophageal Junction Adenocarcinoma"],
  "NCT05883449": ["Relapsed or Refractory Hodgkin Lymphoma", "Peripheral T Cell Lymphoma"],
  "NCT06265220": ["Lupus Nephritis - WHO Class III", "Lupus Nephritis - WHO Class IV", "Refractory Systemic Lupus Erythematosus", "SLE"],
  "NCT06581562": ["Rheumatoid Arthritis", "Pemphigus Vulgaris", "Granulomatosis With Polyangiitis", "Systemic Lupus Erythematosus"],
  "NCT06699771": ["Lymphoma, T-Cell"],
  "NCT06991114": ["Refractory Rheumatoid Arthritis (RA)", "Idiopathic Inflammatory Myopathies (IIMs)", "Systemic Sclerosis (SSc)", "Rheumatoid Arthritis (RA)", "IIM", "Myositis", "Scleroderma", "Sjogren Syndrome", "Sjogrens Disease"]
};

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Extract the Artiva sites array
const datasetsMatch = html.match(/const datasets = \{[\s\S]*?artiva: (\[[\s\S]*?\]),[\s\S]*?cullinan:/);
if (!datasetsMatch) {
  console.error('Could not find Artiva dataset');
  process.exit(1);
}

const artivaSitesStr = datasetsMatch[1];
const artivaSites = JSON.parse(artivaSitesStr);

console.log(`Found ${artivaSites.length} Artiva sites`);

// Add conditions to each site
artivaSites.forEach(site => {
  if (conditionsMap[site.nct]) {
    site.conditions = conditionsMap[site.nct];
  } else {
    console.warn(`No conditions found for NCT ${site.nct}`);
    site.conditions = [];
  }
});

console.log(`Added conditions to all Artiva sites`);

// Replace the Artiva sites in the HTML
const updatedArtivaStr = JSON.stringify(artivaSites);
html = html.replace(
  /const datasets = \{[\s\S]*?artiva: \[[\s\S]*?\],/,
  'const datasets = {\n  artiva: ' + updatedArtivaStr + ','
);

// Write back
fs.writeFileSync('index.html', html, 'utf8');
console.log('✅ Updated index.html with conditions for Artiva sites');
