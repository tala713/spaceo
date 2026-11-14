const levelsData = {
    1: {
        id: 1, code: "MISSION 01", icon: "🛰️", craftLabel: "6U CUBESAT ARCHITECTURE",
        title: "MISSION 01:<br>EYES ON CLIMATE", cleanTitle: "MISSION 01: EYES ON CLIMATE",
        levelName: "NOVICE", objective: "EARTH-MONITOR CUBESAT",
        description: "An unprecedented heat wave hits North Africa. Scientists need a small CubeSat to monitor vegetation and Earth's temperature from a 500 km orbit.",
        budget: 500000, rocketName: "Falcon 9 Rideshare", rocketCapacity: 25, rocketCost: 150000,
        specsSummary: "Payload: 25 kg | Launch Cost: $150,000", eclipseHours: 35 / 60,
        orbitPhysics: "ORBIT RADIUS: 6,871 KM | VELOCITY: 7.62 KM/S | PERIOD: 94.5 MIN",
        introVideo: "videos/mission1_intro.mp4", outroVideo: "videos/mission1_nasa_story.mp4",
        cuteIntroChar: "👩‍🚀🛰️", cuteIntroTitle: "Commander Lina's Briefing: Eyes on Climate!",
        cuteIntroText: "Year 2031. An unprecedented heat wave hits North Africa! Scientists need a 6U CubeSat in a 500 km orbit to monitor vegetation and Earth's temperature. Keep it within the $500K budget and don't forget the antenna!",
        cuteOutroChar: "🌍✨", cuteOutroTitle: "Real NASA Journey: Tiny Satellites, Big Impact!",
        cuteOutroText: "In real life, NASA launches shoebox-sized CubeSats like TROPICS and PREFIRE! They zip around Earth every 94.5 minutes at 7.62 km/s, tracking heat waves and storms at a fraction of the cost of giant satellites.",
        parts: [
            { id: "chassis_6u", icon: "📦", category: "core", shortName: "6U BUS", name: "Structure (6U Bus, 86 Wh Battery)", mass: 6, cost: 120000, powerGenDay: 0, powerUseDay: 0, powerUseNight: 0, batteryWh: 86, points: 0, required: true },
            { id: "solar_1", icon: "☀️", category: "system", shortName: "SOLAR ARRAY", name: "Solar Array (68 W)", mass: 0.78, cost: 60000, powerGenDay: 68, powerUseDay: 0, powerUseNight: 0, batteryWh: 0, points: 0 },
            { id: "cam_1", icon: "📷", category: "science", shortName: "SCIENTIFIC CAMERA", name: "Scientific Camera (6 W)", mass: 0.5, cost: 45000, powerGenDay: 0, powerUseDay: 6, powerUseNight: 6, batteryWh: 0, points: 20 },
            { id: "spec_1", icon: "🔬", category: "science", shortName: "MINI SPECTROMETER", name: "Mini Spectrometer (12 W)", mass: 1.2, cost: 120000, powerGenDay: 0, powerUseDay: 12, powerUseNight: 12, batteryWh: 0, points: 25 },
            { id: "comm_1", icon: "📡", category: "system", shortName: "COMMUNICATION SYSTEM", name: "Communication System (11 W)", mass: 0.246, cost: 20000, powerGenDay: 0, powerUseDay: 11, powerUseNight: 11, batteryWh: 0, points: 0 },
            { id: "ant_1", icon: "📶", category: "system", shortName: "ANTENNA", name: "Antenna", mass: 0.0774, cost: 8000, powerGenDay: 0, powerUseDay: 0, powerUseNight: 0, batteryWh: 0, points: 0 }
        ]
    },
    2: {
        id: 2, code: "MISSION 02", icon: "🌕", craftLabel: "VIPER-CLASS LUNAR ROVER",
        title: "MISSION 02:<br>WATER ON THE MOON", cleanTitle: "MISSION 02: WATER ON THE MOON",
        levelName: "INTERMEDIATE", objective: "LUNAR WATER-ICE EXPLORATION",
        description: "Dr. Laila detected signals of buried ice near the lunar South Pole. Design a rover to drill, analyze, and transmit data back.",
        budget: 75000000, rocketName: "Electron", rocketCapacity: 300, rocketCost: 7500000,
        specsSummary: "Capacity: 300 kg | Night: 12 Hours | Launch Cost: $7.5M", eclipseHours: 12,
        orbitPhysics: "LUNAR GRAVITY: 1.62 M/S² | LUNAR NIGHT ECLIPSE: 12 HOURS",
        introVideo: "videos/mission2_intro.mp4", outroVideo: "videos/mission2_nasa_story.mp4",
        cuteIntroChar: "🤖🌕", cuteIntroTitle: "Dr. Laila's Briefing: Hunting Lunar Ice!",
        cuteIntroText: "Dr. Laila detected buried water-ice near the lunar South Pole! Build a rover under $75M that survives a freezing 12-hour lunar night. Remember: heavy instruments must hibernate at night so the heaters don't die!",
        cuteOutroChar: "🚜❄️", cuteOutroTitle: "Real NASA Journey: How VIPER Explores the Dark!",
        cuteOutroText: "NASA's VIPER rover was designed just like yours! Because sunlight hits the Moon's poles at a super low angle, engineers mounted solar panels on its sides and programmed VIPER to hibernate during freezing lunar shadows.",
        parts: [
            { id: "rover_chassis", icon: "🚜", category: "core", shortName: "ROVER CHASSIS", name: "Structure (20W Day / 30W Night Heater)", mass: 150, cost: 10000000, powerGenDay: 0, powerUseDay: 20, powerUseNight: 30, batteryWh: 0, points: 0, required: true },
            { id: "bat_2", icon: "🔋", category: "system", shortName: "500Wh BATTERY", name: "500Wh Battery Pack", mass: 15, cost: 500000, powerGenDay: 0, powerUseDay: 0, powerUseNight: 0, batteryWh: 500, points: 0 },
            { id: "solar_2", icon: "☀️", category: "system", shortName: "SOLAR ARRAY (450W)", name: "Solar Array (450 W Day / 0 W Night)", mass: 35, cost: 2500000, powerGenDay: 450, powerUseDay: 0, powerUseNight: 0, batteryWh: 0, points: 0 },
            { id: "comm_ant_2", icon: "📡", category: "system", shortName: "COMMS + ANTENNA", name: "Communication System + Antenna", mass: 0.32, cost: 28000, powerGenDay: 0, powerUseDay: 11, powerUseNight: 1.2, batteryWh: 0, points: 0 },
            { id: "drill_2", icon: "⛏️", category: "heavy_science", shortName: "ICE-MINING DRILL", name: "Ice-Mining Drill (150 W)", mass: 16, cost: 15000000, powerGenDay: 0, powerUseDay: 150, powerUseNight: 150, batteryWh: 0, points: 40 },
            { id: "cam_2", icon: "📷", category: "light_science", shortName: "SCIENTIFIC CAMERA", name: "Scientific Camera (6 W)", mass: 0.5, cost: 45000, powerGenDay: 0, powerUseDay: 6, powerUseNight: 6, batteryWh: 0, points: 20 },
            { id: "radar_2", icon: "📶", category: "heavy_science", shortName: "GROUND RADAR", name: "Ice-Penetrating Radar (25 W)", mass: 36, cost: 45000000, powerGenDay: 0, powerUseDay: 25, powerUseNight: 25, batteryWh: 0, points: 45 }
        ]
    },
    3: {
        id: 3, code: "MISSION 03", icon: "🪐", craftLabel: "DEEP SPACE EUROPA ORBITER",
        title: "MISSION 03:<br>UNDER EUROPA'S ICE", cleanTitle: "MISSION 03: UNDER EUROPA'S ICE",
        levelName: "ADVANCED", objective: "SUBSURFACE OCEAN SCAN",
        description: "Deep space probe to scan ice with radar. Dr. Laila says: 'We want to know the ice thickness without drilling.'",
        budget: 300000000, rocketName: "Falcon Heavy", rocketCapacity: 16800, rocketCost: 97000000,
        specsSummary: "Deep Space Cap: 16,800 kg | Launch Cost: $97M", eclipseHours: 0,
        orbitPhysics: "SOLAR DISTANCE: 780M KM | SOLAR FLUX: 3.7% OF EARTH | TWR > 1",
        introVideo: "videos/mission3_intro.mp4", outroVideo: "videos/mission3_nasa_story.mp4",
        cuteIntroChar: "🛸🪐", cuteIntroTitle: "Deep Space Briefing: Mystery of Europa!",
        cuteIntroText: "At 780 million km from the Sun, solar intensity drops to just 3.7%! We need a Nuclear RTG to power the REASON Radar and scan Europa's subsurface ocean without heavy drills.",
        cuteOutroChar: "🌊🔭", cuteOutroTitle: "Real NASA Journey: Europa Clipper's Titanium Vault!",
        cuteOutroText: "In reality, NASA's Europa Clipper uses specialized instruments like REASON radar to look through kilometers of ice and hides its electronics inside a thick Titanium Radiation Vault to survive Jupiter's magnetic storms!",
        parts: [
            { id: "probe_chassis", icon: "🛡️", category: "core", shortName: "PROBE BUS", name: "Radiation-Shielded Bus (20 W)", mass: 150, cost: 10000000, powerGenDay: 0, powerUseDay: 20, powerUseNight: 20, batteryWh: 0, points: 0, required: true },
            { id: "rtg_3", icon: "☢️", category: "system", shortName: "NUCLEAR RTG (110W)", name: "Nuclear RTG Generator (110 W Constant)", mass: 45, cost: 109000000, powerGenDay: 110, powerUseDay: 0, powerUseNight: 0, batteryWh: 1000, points: 0 },
            { id: "solar_3", icon: "☀️", category: "system", shortName: "SOLAR ARRAY (17W)", name: "Solar Array (Only 17 W at Jupiter)", mass: 35, cost: 2500000, powerGenDay: 17, powerUseDay: 0, powerUseNight: 0, batteryWh: 0, points: 0 },
            { id: "comm_ant_3", icon: "📡", category: "system", shortName: "COMMS + ANTENNA", name: "Deep Space Transceiver + Antenna", mass: 0.32, cost: 28000, powerGenDay: 0, powerUseDay: 11, powerUseNight: 11, batteryWh: 0, points: 0 },
            { id: "radar_3", icon: "📶", category: "science", shortName: "REASON RADAR", name: "REASON Ice-Penetrating Radar (25 W)", mass: 36, cost: 45000000, powerGenDay: 0, powerUseDay: 25, powerUseNight: 25, batteryWh: 0, points: 45 },
            { id: "cam_3", icon: "📷", category: "science", shortName: "EUROPA CAMERA", name: "Europa Imaging Camera (6 W)", mass: 0.5, cost: 45000, powerGenDay: 0, powerUseDay: 6, powerUseNight: 6, batteryWh: 0, points: 20 },
            { id: "drill_3", icon: "⛏️", category: "useless", shortName: "SURFACE ICE DRILL", name: "Surface Ice Drill (150 W - Useless on Orbit)", mass: 16, cost: 15000000, powerGenDay: 0, powerUseDay: 150, powerUseNight: 150, batteryWh: 0, points: 0 }
        ]
    }
};

/* ================= 2. GAME STATE & LOGIC ================= */
let unlockedLevel = 1;
let completedMissions = new Set();
let currentLevel = levelsData[1];
let selectedParts = new Set(["chassis_6u"]);
let launchTimer = null;

function goToScreen(screenId) {
    if (launchTimer) clearInterval(launchTimer);
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    document.body.dataset.screen = screenId.replace("screen-", "");
    document.body.dataset.level = currentLevel.id;
    document.body.dataset.result = "pass";
    if (screenId === "screen-home") updateHomeScreen();
    if (screenId === "screen-missions") renderMissions();

window.scrollTo({ top: 0, behavior: "smooth" });
}
function formatMoney(n) { return "$" + n.toLocaleString("en-US"); }
function updateHomeScreen() {
const percent = Math.round((completedMissions.size / 3) * 100);
document.getElementById("home-progress-fill").style.height = percent + "%";
document.getElementById("home-progress-text").textContent = ${percent}% Complete;
const stats = calculatePhysics();
document.getElementById("home-current-budget").textContent = formatMoney(stats.totalCost);
document.getElementById("home-target-budget").textContent = formatMoney(currentLevel.budget);
const ratio = Math.min(100, Math.max(5, (stats.totalCost / currentLevel.budget) * 100));
document.getElementById("home-budget-glow").style.width = ratio + "%";
}
function openCurrentLab() { selectLevel(currentLevel.id); }
function renderMissions() {
document.getElementById("mission-selector").innerHTML = Object.values(levelsData).map(lvl => {
const unlocked = lvl.id <= unlockedLevel;
const done = completedMissions.has(lvl.id);
return <div class="mission-card ${unlocked ? "unlocked" : "locked"}"> <div> <div class="m-card-top"><div class="m-icon">${lvl.icon}</div><div class="m-title">${lvl.title} ${done ? "✅" : ""}</div></div> <div class="m-meta">LEVEL: ${lvl.levelName}<br>OBJECTIVE: ${lvl.objective}</div> <p class="m-desc">${lvl.description}</p> </div> <div> <div class="m-specs"><strong>BUDGET TARGET:</strong> ${formatMoney(lvl.budget)}<br><strong>LAUNCH VEHICLE:</strong> ${lvl.rocketName}<br><strong>CAPACITY / SPECS:</strong><br>${lvl.specsSummary}</div> ${unlocked ?🚀 SELECT MISSION:🔒 LOCKED} </div> </div>;
}).join("");
}
function selectLevel(levelId) {
currentLevel = levelsData[levelId];
resetCurrentBuild();
goToScreen("screen-assembly");
playMissionVideo("intro");
}
function playMissionVideo(type) {
const intro = type === "intro";
const modal = document.getElementById("story-video-modal");
const videoEl = document.getElementById("mission-video-player");
const cuteBox = document.getElementById("cute-storyboard-box");
document.getElementById("video-stage-badge").textContent = intro ? 🎬 ${currentLevel.code}: AI MISSION BRIEFING : 🌟 ${currentLevel.code}: REAL NASA AI JOURNEY;
document.getElementById("video-continue-btn").textContent = intro ? "START BUILDING SPACECRAFT 🚀" : "BACK TO MISSION REPORT 📊";
document.getElementById("cute-char-emoji").textContent = intro ? currentLevel.cuteIntroChar : currentLevel.cuteOutroChar;
document.getElementById("cute-story-title").textContent = intro ? currentLevel.cuteIntroTitle : currentLevel.cuteOutroTitle;
document.getElementById("cute-story-dialogue").textContent = intro ? currentLevel.cuteIntroText : currentLevel.cuteOutroText;
const note = document.getElementById("cute-nasa-note");
note.style.display = intro ? "none" : "block";
note.textContent = "✨ Simplified AI-Style Animated Visualization of NASA's Real Engineering Journey";
videoEl.style.display = "none"; cuteBox.style.display = "block";
videoEl.src = intro ? currentLevel.introVideo : currentLevel.outroVideo;
videoEl.onloadeddata = () => { cuteBox.style.display = "none"; videoEl.style.display = "block"; videoEl.play().catch(() => {}); };
videoEl.onerror = () => { videoEl.style.display = "none"; cuteBox.style.display = "block"; };
modal.style.display = "flex";
}
function closeMissionVideo() {
document.getElementById("mission-video-player").pause();
document.getElementById("story-video-modal").style.display = "none";
}
function resetCurrentBuild() {
selectedParts.clear();
currentLevel.parts.forEach(p => { if (p.required) selectedParts.add(p.id); });
document.body.dataset.level = currentLevel.id;
document.getElementById("lab-mission-title").textContent = currentLevel.cleanTitle;
document.getElementById("craft-icon").textContent = currentLevel.icon;
document.getElementById("craft-name").textContent = currentLevel.craftLabel;
document.getElementById("mass-sub-label").textContent = currentLevel.id === 2 ? "Rover Mass" : "Payload Mass";
document.getElementById("night-schedule-box").style.display = currentLevel.id === 2 ? "block" : "none";
renderInventoryAndBlueprint();
updateDashboard();
}
function renderInventoryAndBlueprint() {
document.getElementById("inventory-list").innerHTML = currentLevel.parts.map(p => {
const sel = selectedParts.has(p.id);
const sub = p.required
? Cost: ${formatMoney(p.cost)} | Mass: ${p.mass}kg | Mandatory Base
: Cost: ${formatMoney(p.cost)} | Mass: ${p.mass}kg ${p.powerGenDay ? "| Power: +" + p.powerGenDay + "W" : ""} ${p.powerUseDay ? "| Power: -" + p.powerUseDay + "W" : ""} ${p.points ? "| Points: +" + p.points : ""};
return <div class="inv-card ${sel ? "selected" : ""}" onclick="togglePart('${p.id}')"><div class="inv-icon">${p.icon}</div><div class="inv-details"><div class="inv-title">${p.name}</div><div class="inv-sub">${sub}</div></div><div class="inv-check">${sel ? "✓" : ""}</div></div>;
}).join("");
document.getElementById("blueprint-tags").innerHTML = currentLevel.parts.map(p => <span class="bp-tag ${selectedParts.has(p.id) ? "active" : ""}">${p.shortName}</span>).join("");
}
function togglePart(partId) {
const part = currentLevel.parts.find(p => p.id === partId);
if (part.required) return;
if (selectedParts.has(partId)) selectedParts.delete(partId); else selectedParts.add(partId);
renderInventoryAndBlueprint();
updateDashboard();
}
function calculatePhysics() {
let totalCost = currentLevel.rocketCost, totalMass = 0, powerGenDay = 0, powerUseDay = 0, powerUseNight = 0, totalBatteryWh = 0, totalPoints = 0;
const shutdownNight = currentLevel.id === 2 && document.getElementById("night-shutdown").checked;
selectedParts.forEach(id => {
const p = currentLevel.parts.find(i => i.id === id);
if (!p) return;
totalCost += p.cost; totalMass += p.mass; powerGenDay += p.powerGenDay; powerUseDay += p.powerUseDay;
totalBatteryWh += p.batteryWh; totalPoints += p.points;
powerUseNight += (currentLevel.id === 2 && p.category === "heavy_science" && shutdownNight) ? 0 : p.powerUseNight;
});
const energyNight = powerUseNight * currentLevel.eclipseHours;
return {
totalCost, totalMass: Number(totalMass.toFixed(2)), powerGenDay, powerUseDay, totalBatteryWh, totalPoints,
energyNight: Number(energyNight.toFixed(1)),
batteryRemaining: Number((totalBatteryWh - energyNight).toFixed(1))
};
}
function setBar(id, pct, over) {
const el = document.getElementById(id);
el.style.width = Math.min(100, pct) + "%";
el.className = "mini-fill " + (over ? "over" : "");
}
function updateDashboard() {
const s = calculatePhysics(), L = currentLevel;
const bEl = document.getElementById("stat-budget");
bEl.textContent = ${formatMoney(s.totalCost)} / ${formatMoney(L.budget)};
bEl.className = s.totalCost > L.budget ? "red-text" : "green-text";
setBar("bar-budget", (s.totalCost / L.budget) * 100, s.totalCost > L.budget);
const mEl = document.getElementById("stat-mass");
mEl.textContent = ${s.totalMass} kg / ${L.rocketCapacity} kg;
mEl.className = s.totalMass > L.rocketCapacity ? "red-text" : "green-text";
setBar("bar-mass", (s.totalMass / L.rocketCapacity) * 100, s.totalMass > L.rocketCapacity);
const dEl = document.getElementById("stat-power-day");
dEl.textContent = ${s.powerUseDay} W / ${s.powerGenDay} W;
dEl.className = s.powerUseDay > s.powerGenDay ? "red-text" : "green-text";
setBar("bar-power", s.powerGenDay > 0 ? (s.powerUseDay / s.powerGenDay) * 100 : 100, s.powerUseDay > s.powerGenDay);
const batBox = document.getElementById("night-battery-box");
if (L.id === 3) {
batBox.style.display = "none";
} else {
batBox.style.display = "block";
const rem = Math.max(0, s.batteryRemaining);
const bt = document.getElementById("stat-battery");
bt.textContent = ${rem} Wh / ${s.totalBatteryWh} Wh;
bt.className = s.batteryRemaining < 0 ? "red-text" : "green-text";
setBar("bar-battery", s.totalBatteryWh > 0 ? (rem / s.totalBatteryWh) * 100 : 0, s.batteryRemaining < 0);
}
document.getElementById("stat-points").textContent = ${s.totalPoints} PTS;
setBar("bar-points", (s.totalPoints / 65) * 100, false);
const hint = document.getElementById("atlas-hint-text");
if (s.totalCost > L.budget) hint.textContent = "⚠️ ATLAS Hint: Budget overrun detected! Reduce payload cost.";
else if (s.totalMass > L.rocketCapacity) hint.textContent = "⚠️ ATLAS Hint: Payload mass exceeds rocket capacity (TWR < 1).";
else if (s.powerUseDay > s.powerGenDay) hint.textContent = "⚠️ ATLAS Hint: Power deficit! Consumption exceeds generation.";
else if (L.id === 2 && s.batteryRemaining < 0) hint.textContent = "⚠️ ATLAS Hint: Night battery will deplete! Hibernate heavy tools at night.";
else if (s.totalPoints === 0) hint.textContent = "💡 ATLAS Hint: Engineering looks solid, but no science instruments are attached.";
else hint.textContent = "✅ ATLAS Hint: All equations balanced. Launch window is open.";
}
function goToFinalCheck() {
const s = calculatePhysics(), L = currentLevel;
goToScreen("screen-launch");
document.getElementById("check-mission-header").textContent = ${L.code}: FINAL SYSTEMS CHECK;
document.getElementById("launch-craft-icon").textContent = L.icon;
document.getElementById("orbit-physics-info").textContent = L.orbitPhysics;
const massOk = s.totalMass <= L.rocketCapacity;
const powerOk = s.powerUseDay <= s.powerGenDay && (L.id === 3 || s.batteryRemaining >= 0);
const hasScience = s.totalPoints > 0;
const hasComms = ["comm_1", "comm_ant_2", "comm_ant_3"].some(id => selectedParts.has(id));
const row = (label, ok, text) => <div class="hud-box"><div class="hud-box-row"><span>${label}</span><strong class="${ok ? "green-text" : "red-text"}">${ok ? "✓" : "✖"}</strong></div><small>${text}</small></div>;
document.getElementById("prelaunch-report-list").innerHTML =
row("LAUNCH VEHICLE:", true, ${L.rocketName} (OK)) +
row("STRUCTURAL INTEGRITY:", massOk, Mass ${s.totalMass} kg / ${L.rocketCapacity} kg) +
row("POWER SYSTEMS:", powerOk, powerOk ? "Nominal Output (OK)" : "Power Deficit Warning") +
row("PAYLOAD SENSORS:", hasScience, hasScience ? "Instruments Armed (OK)" : "No Science Payload") +
row("COMMUNICATION LINK:", hasComms, hasComms ? "Telemetry Locked (OK)" : "Link Missing");
const banner = document.getElementById("system-status-banner");
const allGreen = massOk && powerOk && hasScience && hasComms;
banner.className = allGreen ? "status-green-box" : "status-green-box warn";
banner.innerHTML = <strong>SYSTEM STATUS:</strong><br><span>${allGreen ? "ALL GREEN - READY FOR LAUNCH" : "WARNING - ANOMALIES DETECTED"}</span>;
let sec = 10;
const clockEl = document.getElementById("countdown-timer"), barEl = document.getElementById("clock-bar");
clockEl.textContent = "00:00:10"; barEl.style.width = "100%";
launchTimer = setInterval(() => {
sec--;
clockEl.textContent = sec >= 10 ? 00:00:${sec} : 00:00:0${Math.max(0, sec)};
barEl.style.width = (sec / 10) * 100 + "%";
if (sec <= 0) { clearInterval(launchTimer); generateFinalReport(); }
}, 600);
}
function abortLaunch() { if (launchTimer) clearInterval(launchTimer); goToScreen("screen-assembly"); }
function generateFinalReport() {
const s = calculatePhysics(), L = currentLevel;
let failed = false, atlasMsg = "", stars = "★";
const logs = [{ text: "LAUNCH SEQUENCE ACTIVE", type: "ok" }];
const fail = (msg, log) => { failed = true; atlasMsg = msg; logs.push({ text: log, type: "err" }); };
const has = id => selectedParts.has(id);
if (s.totalMass > L.rocketCapacity) {
fail("The rocket stayed on the pad. Your payload is heavier than it can lift (TWR < 1).", "TWR < 1: PAYLOAD MASS EXCEEDED");
} else if (s.totalCost > L.budget) {
fail("The money ran out before the rocket was even assembled. You exceeded the mission budget!", "BUDGET OVERRUN DETECTED");
} else if (L.id === 1) {
if (!has("solar_1")) fail("The 86 Wh battery lasts about 3 hours at full load. After that, the satellite goes dark in orbit.", "NO SOLAR ARRAY: BATTERY DEPLETED 🔴");
else if (!has("comm_1")) fail("You have an antenna, but nothing to transmit with. An antenna without a transceiver is like a page without a pen.", "NO TRANSCEIVER: SIGNAL LOST 🔴");
else if (!has("ant_1")) fail("The satellite reached orbit and captured 40 images, but the data is still trapped inside. Engineering success, science failure. Data that never reaches Earth never happened.", "NO ANTENNA: DATA TRAPPED 🔴");
else if (s.totalPoints === 0) { atlasMsg = "Technically successful, but with no scientific value! You didn't install a camera or a spectrometer."; logs.push({ text: "ORBIT STABLE: 0 SCIENCE INSTRUMENTS", type: "warn" }); }
else { stars = s.totalPoints >= 25 ? "★★★" : "★★"; atlasMsg = "Optimal design! Earth temperature and vegetation data were successfully sent to the ground station."; logs.push({ text: CLIMATE DATA STREAMING [+${s.totalPoints} PTS], type: "ok" }); }
} else if (L.id === 2) {
if (!has("solar_2")) fail("A rover with no sunlight. The 500 Wh battery will be drained within hours.", "SOLAR PANELS MISSING 🔴");
else if (!has("bat_2")) fail("At the first sunset, everything shut down. There is no battery to store energy.", "BATTERY PACK MISSING 🔴");
else if (s.batteryRemaining < 0) fail("The rover froze. The heaters died hours before dawn because the battery ran out overnight.", BATTERY_REMAINING < 0 (${s.batteryRemaining} Wh) 🔴);
else if (!has("comm_ant_2")) fail("We drilled into the ice and nobody knew. Data that never reaches Earth never happened.", "COMMS & ANTENNA MISSING 🔴");
else {
const margin = s.batteryRemaining >= 50;
stars = (s.totalPoints >= 60 && margin) ? "★★★" : (s.totalPoints >= 60 ? "★★" : "★");
atlasMsg = Outstanding success! The rover survived the 12-hour lunar night with ${s.batteryRemaining} Wh left in the battery.;
logs.push({ text: LUNAR NIGHT SURVIVED: ${s.batteryRemaining} Wh LEFT, type: "ok" });
}
} else if (L.id === 3) {
if (has("drill_3")) fail("The probe reached Jupiter after a 6-year journey. The moment you switched on the drill, power to communications was cut. Available power is a ceiling, not a suggestion.", "POWER OVERLOAD: DRILL EXCEEDED 110W 🔴");
else if (!has("rtg_3") || s.powerUseDay > s.powerGenDay) fail("Your panels are collecting sunlight 780 million km away. The Sun out there is a distant lamp, not a power source (only 17 W!).", "INVERSE SQUARE LAW: SOLAR INSUFFICIENT 🔴");
else if (!has("comm_ant_3")) fail("We reached Europa, but the data never made it to Earth. Data that never reaches Earth never happened.", "DEEP SPACE COMMS MISSING 🔴");
else {
const powerMargin = (s.powerGenDay - s.powerUseDay) / s.powerGenDay;
const clean = !has("solar_3") && !has("drill_3");
if (has("radar_3") && has("cam_3") && powerMargin >= 0.1 && clean) stars = "★★★";
else if (has("radar_3")) stars = "★★";
atlasMsg = "A historic mission! The REASON radar penetrated Europa's icy crust and sent ocean data back to Earth.";
logs.push({ text: EUROPA OCEAN SCANNED [+${s.totalPoints} PTS], type: "ok" });
}
}
goToScreen("screen-report");
document.body.dataset.result = failed ? "fail" : "pass";
document.getElementById("report-mission-title").textContent = ${L.code}: MISSION REPORT;
const headEl = document.getElementById("report-status-headline"), starsEl = document.getElementById("report-stars");
headEl.textContent = failed ? "Mission Failed!" : "Mission Success!";
headEl.className = failed ? "status-heading fail" : "status-heading pass";
starsEl.textContent = failed ? "✖" : stars;
starsEl.className = failed ? "big-status-visual fail" : "big-status-visual stars";
document.getElementById("report-score-badge").textContent = SCIENCE SCORE: +${failed ? 0 : s.totalPoints} PTS;
document.getElementById("report-atlas-summary").textContent = atlasMsg;
const metric = (label, value, ok) => <div class="metric-box"><div class="metric-info"><strong>${label}</strong><span>${value}</span></div><div class="metric-status ${ok ? "pass" : "fail"}">${ok ? "✓" : "✖"}</div></div>;
document.getElementById("report-metrics-list").innerHTML =
metric("BUDGET USED", formatMoney(s.totalCost), s.totalCost <= L.budget) +
metric("TOTAL MASS", ${s.totalMass} kg, s.totalMass <= L.rocketCapacity) +
metric("POWER BALANCE", ${s.powerGenDay - s.powerUseDay} W Margin, s.powerGenDay >= s.powerUseDay);
document.getElementById("report-log-list").innerHTML = logs.map(l => <div class="log-item ${l.type}">${l.text}</div>).join("");
if (!failed) {
completedMissions.add(L.id);
if (L.id === unlockedLevel && unlockedLevel < 3) unlockedLevel++;
}
}
updateHomeScreen();
