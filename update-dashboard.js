const fs = require('fs');

// Read the current HTML
let html = fs.readFileSync('index.html', 'utf8');

// Read the competitor datasets
const cullinanSites = JSON.parse(fs.readFileSync('cullinan-sites.json', 'utf8'));
const candidSites = JSON.parse(fs.readFileSync('candid-sites.json', 'utf8'));
const amgenSites = JSON.parse(fs.readFileSync('amgen-sites.json', 'utf8'));

// Extract the existing Artiva sites
const artivaMatch = html.match(/var sites = (\[.*?\]);/s);
if (!artivaMatch) {
  console.error('Could not find Artiva sites array');
  process.exit(1);
}

// Replace the single sites array with multiple datasets
const datasetsCode = `
// All program datasets
const datasets = {
  artiva: ${artivaMatch[1]},
  cullinan: ${JSON.stringify(cullinanSites)},
  candid: ${JSON.stringify(candidSites)},
  amgen: ${JSON.stringify(amgenSites)}
};

// Current program and filtered sites
let currentProgram = 'artiva';
let sites = datasets[currentProgram];

// Update sites based on selected program
function switchProgram(program) {
  currentProgram = program;
  sites = datasets[program];
  updateStats();
  refreshMap();
  refreshTable();
}

// Calculate and update header stats
function updateStats() {
  const uniqueTrials = new Set(sites.map(s => s.nct)).size;
  const uniqueCountries = new Set(sites.map(s => s.country)).size;
  document.getElementById('studyCount').textContent = uniqueTrials;
  document.getElementById('siteCount').textContent = sites.length;
  document.getElementById('countryCount').textContent = uniqueCountries;
}

// Refresh the map with current sites
function refreshMap() {
  const svg = document.getElementById('svg');
  // Remove existing site circles
  const circles = svg.querySelectorAll('.site');
  circles.forEach(c => c.remove());
  drawSites();
}

// Refresh the table with current sites
function refreshTable() {
  populateTable();
  filterTable(); // Re-apply any active search filter
}`;

html = html.replace(/var sites = \[.*?\];/s, datasetsCode);

// Add event listener for program selector
const showDashboardMatch = html.match(/(function showDashboard\(\) \{[\s\S]*?\})/);
if (showDashboardMatch) {
  const newShowDashboard = showDashboardMatch[1].replace(
    /\/\/ Bind toggle view button/,
    `// Bind program selector
  document.getElementById('programSelector').addEventListener('change', function(e) {
    switchProgram(e.target.value);
  });
  
  // Initialize stats
  updateStats();
  
  // Bind toggle view button`
  );
  html = html.replace(showDashboardMatch[1], newShowDashboard);
}

// Write the updated HTML
fs.writeFileSync('index.html', html, 'utf8');
console.log('✅ Dashboard updated with all datasets');
console.log('   - Artiva: 77 sites');
console.log('   - Cullinan: 25 sites');
console.log('   - Candid: 10 sites');
console.log('   - Amgen: 690 sites');
