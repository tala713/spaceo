
javascript  

const levelsData = {
    1: {
        id: 1,
        code: "MISSION 01",
        icon: "🛰️",
        craftLabel: "6U CUBESAT ARCHITECTURE",
        title: "MISSION 01:<br>EYES ON CLIMATE",
        cleanTitle: "MISSION 01: EYES ON CLIMATE",
        levelName: "NOVICE",
        objective: "EARTH-MONITOR CUBESAT",
        description: "An unprecedented heat wave hits North Africa. Scientists need a small CubeSat to monitor vegetation and Earth's temperature from a 500 km orbit.",
        budget: 500000,
        rocketName: "Falcon 9 Rideshare",
        rocketCapacity: 25,
        rocketCost: 150000,
        specsSummary: "Payload: 25 kg | Launch Cost: $150,000",
        eclipseHours: 35 / 60,
        orbitPhysics: "ORBIT RADIUS: 6,871 KM | VELOCITY: 7.62 KM/S | PERIOD: 94.5 MIN",
        introVideo: "videos/mission1_intro.mp4",
        outroVideo: "videos/mission1_nasa_story.mp4",
        cuteIntroChar: "👩‍🚀🛰️",
        cuteIntroTitle: "Commander Lina's Briefing: Eyes on Climate!",
        cuteIntroText: "Year 2031. An unprecedented heat wave hits North Africa! Scientists need a 6U CubeSat in a 500 km orbit to monitor vegetation and Earth's temperature. Keep it within the $500K budget and don't forget the antenna!",
        cuteOutroChar: "🌍✨",
        cuteOutroTitle: "Real NASA Journey: Tiny Satellites, Big Impact!",
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
        id: 2,
        code: "MISSION 02",
        icon: "🌕",
        craftLabel: "VIPER-CLASS LUNAR ROVER",
        title: "MISSION 02:<br>WATER ON THE MOON",
        cleanTitle: "MISSION 02: WATER ON THE MOON",
        levelName: "INTERMEDIATE",
        objective: "LUNAR WATER-ICE EXPLORATION",
        description: "Dr. Laila detected signals of buried ice near the lunar South Pole. Design a rover to drill, analyze, and transmit data back.",
        budget: 75000000,
        rocketName: "Electron",
        rocketCapacity: 300,
        rocketCost: 7500000,
        specsSummary: "Capacity: 300 kg | Night: 12 Hours | Launch Cost: $7.5M",
        eclipseHours: 12,
        orbitPhysics: "LUNAR GRAVITY: 1.62 M/S² | LUNAR NIGHT ECLIPSE: 12 HOURS",
        introVideo: "videos/mission2_intro.mp4",
        outroVideo: "videos/mission2_nasa_story.mp4",
        cuteIntroChar: "🤖🌕",
        cuteIntroTitle: "Dr. Laila's Briefing: Hunting Lunar Ice!",
        cuteIntroText: "Dr. Laila detected buried water-ice near the lunar South Pole! Build a rover under $75M that survives a freezing 12-hour lunar night. Remember: heavy instruments must hibernate at night so the heaters don't die!",
        cuteOutroChar: "🚜❄️",
        cuteOutroTitle: "Real NASA Journey: How VIPER Explores the Dark!",
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
        id: 3,
        code: "MISSION 03",
        icon: "🪐",
        craftLabel: "DEEP SPACE EUROPA ORBITER",
        title: "MISSION 03:<br>UNDER EUROPA'S ICE",
        cleanTitle: "MISSION 03: UNDER EUROPA'S ICE",
        levelName: "ADVANCED",
        objective: "SUBSURFACE OCEAN SCAN",
        description: "Deep space probe to scan ice with radar. Dr. Laila says: 'We want to know the ice thickness without drilling.'",
        budget: 300000000,
        rocketName: "Falcon Heavy",
        rocketCapacity: 16800,
        rocketCost: 97000000,
        specsSummary: "Deep Space Cap: 16,800 kg | Launch Cost: $97M",
        eclipseHours: 0,
        orbitPhysics: "SOLAR DISTANCE: 780M KM | SOLAR FLUX: 3.7% OF EARTH | TWR > 1",
        introVideo: "videos/mission3_intro.mp4",
        outroVideo: "videos/mission3_nasa_story.mp4",
        cuteIntroChar: "🛸🪐",
        cuteIntroTitle: "Deep Space Briefing: Mystery of Europa!",
        cuteIntroText: "At 780 million km from the Sun, solar intensity drops to just 3.7%! We need a Nuclear RTG to power the REASON Radar and scan Europa's subsurface ocean without heavy drills.",
        cuteOutroChar: "🌊🔭",
        cuteOutroTitle: "Real NASA Journey: Europa Clipper's Titanium Vault!",
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

let unlockedLevel = 1;
let completedMissions = new Set();
let currentLevel = levelsData[1];
let selectedParts = new Set(["chassis_6u"]);
let launchTimer = null;

function goToScreen(screenId) {
    if (launchTimer) clearInterval(launchTimer);
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    if (screenId === "screen-home") updateHomeScreen();
Use code with caution.
if (screenId === "screen-missions") renderMissions();
window.scrollTo({ top: 0, behavior: "smooth" });
}
function formatMoney(amount) {
return "$" + amount.toLocaleString("en-US");
}
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
const container = document.getElementById("mission-selector");
container.innerHTML = Object.values(levelsData).map(lvl => {
const isUnlocked = lvl.id <= unlockedLevel;
const isDone = completedMissions.has(lvl.id);
return <div class="mission-card ${isUnlocked ? 'unlocked' : 'locked'}"> <div> <div class="m-card-top"> <div class="m-icon">${lvl.icon}</div> <div class="m-title">${lvl.title} ${isDone ? '✅' : ''}</div> </div> <div class="m-meta">LEVEL: ${lvl.levelName}<br>OBJECTIVE: ${lvl.objective}</div> <p class="m-desc">${lvl.description}</p> </div> <div> <div class="m-specs"> <strong>BUDGET TARGET:</strong> ${formatMoney(lvl.budget)}<br> <strong>LAUNCH VEHICLE:</strong> ${lvl.rocketName}<br> <strong>CAPACITY / SPECS:</strong><br>${lvl.specsSummary} </div> ${isUnlocked ?🚀 SELECT MISSION:🔒 LOCKED} </div> </div>;
}).join("");
}

---

### الجزء الثاني من `script.js`

```javascript
function selectLevel(levelId) {
    currentLevel = levelsData[levelId];
    resetCurrentBuild();
    goToScreen("screen-assembly");
    playMissionVideo("intro");
}

function playMissionVideo(type) {
    const modal = document.getElementById("story-video-modal");
    const videoEl = document.getElementById("mission-video-player");
    const cuteBox = document.getElementById("cute-storyboard-box");
    const badgeEl = document.getElementById("video-stage-badge");
    const btnEl = document.getElementById("video-continue-btn");
    const videoSrc = (type === "intro") ? currentLevel.introVideo : currentLevel.outroVideo;

    badgeEl.textContent = (type === "intro") ? `🎬 ${currentLevel.code}: AI MISSION BRIEFING` : `🌟 ${currentLevel.code}: REAL NASA AI JOURNEY`;
    btnEl.textContent = (type === "intro") ? "START BUILDING SPACECRAFT 🚀" : "BACK TO MISSION REPORT 📊";

    document.getElementById("cute-char-emoji").textContent = (type === "intro") ? currentLevel.cuteIntroChar : currentLevel.cuteOutroChar;
    document.getElementById("cute-story-title").textContent = (type === "intro") ? currentLevel.cuteIntroTitle : currentLevel.cuteOutroTitle;
    document.getElementById("cute-story-dialogue").textContent = (type === "intro") ? currentLevel.cuteIntroText : currentLevel.cuteOutroText;
    document.getElementById("cute-nasa-note").style.display = (type === "outro") ? "block" : "none";
    document.getElementById("cute-nasa-note").textContent = "✨ Simplified AI-Style Animated Visualization of NASA's Real Engineering Journey";

    if (videoEl) {
        videoEl.style.display = "none";
        cuteBox.style.display = "block";
        videoEl.src = videoSrc;
        videoEl.onloadeddata = () => { cuteBox.style.display = "none"; videoEl.style.display = "block"; videoEl.play().catch(() => {}); };
        videoEl.onerror = () => { videoEl.style.display = "none"; cuteBox.style.display = "block"; };
    } else {
        cuteBox.style.display = "block";
    }
    modal.style.display = "flex";
}

function closeMissionVideo() {
    const modal = document.getElementById("story-video-modal");
    const videoEl = document.getElementById("mission-video-player");
    if (videoEl) videoEl.pause();
    modal.style.display = "none";
}

function resetCurrentBuild() {
    selectedParts.clear();
    currentLevel.parts.forEach(p => { if (p.required) selectedParts.add(p.id); });
    document.getElementById("lab-mission-title").textContent = currentLevel.cleanTitle;
    document.getElementById("craft-icon").textContent = currentLevel.icon;
    document.getElementById("craft-name").textContent = currentLevel.craftLabel;
    document.getElementById("mass-sub-label").textContent = currentLevel.id === 2 ? "Rover Mass" : "Payload Mass";
    document.getElementById("night-schedule-box").style.display = (currentLevel.id === 2) ? "block" : "none";
    renderInventoryAndBlueprint();
    updateDashboard();
}

function renderInventoryAndBlueprint() {
    const invContainer = document.getElementById("inventory-list");
    const bpTags = document.getElementById("blueprint-tags");

    invContainer.innerHTML = currentLevel.parts.map(p => {
        const isSel = selectedParts.has(p.id);
        const subText = p.required
            ? `Cost: ${formatMoney(p.cost)} | Mass: ${p.mass}kg | Mandatory Base`
            : `Cost: ${formatMoney(p.cost)} | Mass: ${p.mass}kg ${p.powerGenDay ? '| Power: +' + p.powerGenDay + 'W' : ''} ${p.powerUseDay ? '| Power: -' + p.powerUseDay + 'W' : ''} ${p.points ? '| Points: +' + p.points : ''}`;
        return `
        <div class="inv-card ${isSel ? 'selected' : ''}" onclick="togglePart('${p.id}')">
            <div class="inv-icon">${p.icon}</div>
            <div class="inv-details">
                <div class="inv-title">${p.name}</div>
                <div class="inv-sub">${subText}</div>
            </div>
            <div class="inv-check">${isSel ? '✓' : ''}</div>
        </div>`;
    }).join("");

    bpTags.innerHTML = currentLevel.parts.map(p => {
        const isSel = selectedParts.has(p.id);
        return `<span class="bp-tag ${isSel ? 'active' : ''}">${p.shortName}</span>`;
    }).join("");
}

function togglePart(partId) {
    const part = currentLevel.parts.find(p => p.id === partId);
    if (part.required) return;
    if (selectedParts.has(partId)) selectedParts.delete(partId);
    else selectedParts.add(partId);
    renderInventoryAndBlueprint();
    updateDashboard();
}

function calculatePhysics() {
    let totalCost = currentLevel.rocketCost;
    let totalMass = 0, powerGenDay = 0, powerUseDay = 0, powerUseNight = 0, totalBatteryWh = 0, totalPoints = 0;
    const shutdownNight = (currentLevel.id === 2) && document.getElementById("night-shutdown").checked;

    selectedParts.forEach(id => {
        const p = currentLevel.parts.find(item => item.id === id);
        if (!p) return;
        totalCost += p.cost;
        totalMass += p.mass;
        powerGenDay += p.powerGenDay;
        powerUseDay += p.powerUseDay;
        totalBatteryWh += p.batteryWh;
        totalPoints += p.points;
        if (currentLevel.id === 2 && p.category === "heavy_science" && shutdownNight) {
            powerUseNight += 0;
        } else {
            powerUseNight += p.powerUseNight;
        }
    });

    const energyNight = powerUseNight * currentLevel.eclipseHours;
    const batteryRemaining = totalBatteryWh - energyNight;
    return {
        totalCost, totalMass: Number(totalMass.toFixed(2)), powerGenDay, powerUseDay,
        totalBatteryWh, energyNight: Number(energyNight.toFixed(1)),
        batteryRemaining: Number(batteryRemaining.toFixed(1)), totalPoints
    };
}

function updateDashboard() {
    const stats = calculatePhysics();
    const bEl = document.getElementById("stat-budget");
    bEl.textContent = `${formatMoney(stats.totalCost)} / ${formatMoney(currentLevel.budget)}`;
    bEl.className = stats.totalCost > currentLevel.budget ? "red-text" : "green-text";
    document.getElementById("bar-budget").style.width = Math.min(100, (stats.totalCost / currentLevel.budget) * 100) + "%";
    document.getElementById("bar-budget").className = "mini-fill " + (stats.totalCost > currentLevel.budget ? "over" : "");

    const mEl = document.getElementById("stat-mass");
    mEl.textContent = `${stats.totalMass} kg / ${currentLevel.rocketCapacity} kg`;
    mEl.className = stats.totalMass > currentLevel.rocketCapacity ? "red-text" : "green-text";
    document.getElementById("bar-mass").style.width = Math.min(100, (stats.totalMass / currentLevel.rocketCapacity) * 100) + "%";
    document.getElementById("bar-mass").className = "mini-fill " + (stats.totalMass > currentLevel.rocketCapacity ? "over" : "");

    const dEl = document.getElementById("stat-power-day");
    dEl.textContent = `${stats.powerUseDay} W / ${stats.powerGenDay} W`;
    dEl.className = stats.powerUseDay > stats.powerGenDay ? "red-text" : "green-text";
    document.getElementById("bar-power").style.width = stats.powerGenDay > 0 ? Math.min(100, (stats.powerUseDay / stats.powerGenDay) * 100) + "%" : "100%";
    document.getElementById("bar-power").className = "mini-fill " + (stats.powerUseDay > stats.powerGenDay ? "over" : "");

    const batBox = document.getElementById("night-battery-box");
    if (currentLevel.id === 3) {
        batBox.style.display = "none";
    } else {
        batBox.style.display = "block";
        const rem = Math.max(0, stats.batteryRemaining);
        document.getElementById("stat-battery").textContent = `${rem} Wh / ${stats.totalBatteryWh} Wh`;
        document.getElementById("stat-battery").className = stats.batteryRemaining < 0 ? "red-text" : "green-text";
        document.getElementById("bar-battery").style.width = stats.totalBatteryWh > 0 ? Math.min(100, (rem / stats.totalBatteryWh) * 100) + "%" : "0%";
        document.getElementById("bar-battery").className = "mini-fill " + (stats.batteryRemaining < 0 ? "over" : "");
    }

    document.getElementById("stat-points").textContent = `${stats.totalPoints} PTS`;
    document.getElementById("bar-points").style.width = Math.min(100, (stats.totalPoints / 65) * 100) + "%";

    const hint = document.getElementById("atlas-hint-text");
    if (stats.totalCost > currentLevel.budget) hint.textContent = "⚠️ ATLAS Hint: Budget overrun detected! Reduce payload cost.";
    else if (stats.totalMass > currentLevel.rocketCapacity) hint.textContent = "⚠️ ATLAS Hint: Payload mass exceeds rocket capacity (TWR < 1).";
    else if (stats.powerUseDay > stats.powerGenDay) hint.textContent = "⚠️ ATLAS Hint: Power deficit! Consumption exceeds generation.";
    else if (currentLevel.id === 2 && stats.batteryRemaining < 0) hint.textContent = "⚠️ ATLAS Hint: Night battery will deplete! Hibernate heavy tools at night.";
    else if (stats.totalPoints === 0) hint.textContent = "💡 ATLAS Hint: Engineering looks solid, but no science instruments are attached.";
    else hint.textContent = "✅ ATLAS Hint: All equations balanced. Launch window is open.";
}

function goToFinalCheck() {
    const stats = calculatePhysics();
    goToScreen("screen-launch");
    document.getElementById("check-mission-header").textContent = `${currentLevel.code}: FINAL SYSTEMS CHECK`;
    document.getElementById("launch-craft-icon").textContent = currentLevel.icon;
    document.getElementById("orbit-physics-info").textContent = currentLevel.orbitPhysics;

    const massOk = stats.totalMass <= currentLevel.rocketCapacity;
    const powerOk = stats.powerUseDay <= stats.powerGenDay && (currentLevel.id === 3 || stats.batteryRemaining >= 0);
    const hasScience = stats.totalPoints > 0;
    const hasComms = selectedParts.has("comm_1") || selectedParts.has("comm_ant_2") || selectedParts.has("comm_ant_3");

    document.getElementById("prelaunch-report-list").innerHTML = `
LAUNCH VEHICLE:✓${currentLevel.rocketName} (OK)
STRUCTURAL INTEGRITY:${massOk ? '✓' : '✖'}Mass ${stats.totalMass} kg / ${currentLevel.rocketCapacity} kg
POWER SYSTEMS:${powerOk ? '✓' : '✖'}${powerOk ? 'Nominal Output (OK)' : 'Power Deficit Warning'}
PAYLOAD SENSORS:${hasScience ? '✓' : '✖'}${hasScience ? 'Instruments Armed (OK)' : 'No Science Payload'}
COMMUNICATION LINK:${hasComms ? '✓' : '✖'}${hasComms ? 'Telemetry Locked (OK)' : 'Link Missing'}`;
const statusBanner = document.getElementById("system-status-banner");
if (massOk && powerOk && hasScience && hasComms) {
statusBanner.className = "status-green-box";
statusBanner.innerHTML = <strong>SYSTEM STATUS:</strong><br><span>ALL GREEN - READY FOR LAUNCH</span>;
} else {
statusBanner.className = "status-green-box warn";
statusBanner.innerHTML = <strong>SYSTEM STATUS:</strong><br><span>WARNING - ANOMALIES DETECTED</span>;
}
let sec = 10;
const clockEl = document.getElementById("countdown-timer");
const barEl = document.getElementById("clock-bar");
clockEl.textContent = "00:00:10";
barEl.style.width = "100%";
launchTimer = setInterval(() => {
sec--;
clockEl.textContent = sec >= 10 ? 00:00:${sec} : 00:00:0${Math.max(0, sec)};
barEl.style.width = (sec / 10) * 100 + "%";
if (sec <= 0) { clearInterval(launchTimer); generateFinalReport(); }
}, 600);
}
function abortLaunch() {
if (launchTimer) clearInterval(launchTimer);
goToScreen("screen-assembly");
}
function generateFinalReport() {
const stats = calculatePhysics();
let failed = false, atlasMsg = "", stars = "★";
let logs = [{ text: "LAUNCH SEQUENCE ACTIVE", type: "ok" }];
if (stats.totalMass > currentLevel.rocketCapacity) {
failed = true;
atlasMsg = "الصاروخ وقف على المنصة وبصّلك. وزنك أكبر من اللي يقدر يشيله (TWR < 1).";
logs.push({ text: "TWR < 1: PAYLOAD MASS EXCEEDED", type: "err" });
} else if (stats.totalCost > currentLevel.budget) {
failed = true;
atlasMsg = "الحسابات خلصت قبل ما الصاروخ يتجمّع. تجاوزت الميزانية المحددة!";
logs.push({ text: "BUDGET OVERRUN DETECTED", type: "err" });
} else if (currentLevel.id === 1) {
if (!selectedParts.has("solar_1")) {
failed = true;
atlasMsg = "البطارية 86 Wh بتكفي حوالي 3 ساعات بالحمل الكامل. بعدها القمر بيموت في المدار.";
logs.push({ text: "NO SOLAR ARRAY: BATTERY DEPLETED 🔴", type: "err" });
} else if (!selectedParts.has("comm_1")) {
failed = true;
atlasMsg = "فيه هوائي، بس مفيش جهاز يبعت. هوائي من غير مرسل زي ورقة من غير قلم.";
logs.push({ text: "NO TRANSCEIVER: SIGNAL LOST 🔴", type: "err" });
} else if (!selectedParts.has("ant_1")) {
failed = true;
atlasMsg = "القمر وصل المدار وصوّر 40 صورة، بس البيانات لسه محبوسة جواه. نجاح هندسي، فشل علمي. البيانات اللي ما وصلتش ما حصلتش.";
logs.push({ text: "NO ANTENNA: DATA TRAPPED 🔴", type: "err" });
} else if (stats.totalPoints === 0) {
stars = "★";
atlasMsg = "ينجح تقنياً، لكن من غير قيمة علمية! لم تقم بتركيب كاميرا أو مطياف.";
logs.push({ text: "ORBIT STABLE: 0 SCIENCE INSTRUMENTS", type: "warn" });
} else {
stars = stats.totalPoints >= 25 ? "★★★" : "★★";
atlasMsg = "تصميم مثالي! تم إرسال بيانات حرارة الأرض والغطاء النباتي للمحطة الأرضية بنجاح.";
logs.push({ text: CLIMATE DATA STREAMING [+${stats.totalPoints} PTS], type: "ok" });
}
} else if (currentLevel.id === 2) {
if (!selectedParts.has("solar_2")) {
failed = true;
atlasMsg = "عربة من غير شمس. بطارية 500 Wh هتخلص في ساعات.";
logs.push({ text: "SOLAR PANELS MISSING 🔴", type: "err" });
} else if (!selectedParts.has("bat_2")) {
failed = true;
atlasMsg = "أول غروب شمس، وكل حاجة اتقفلت. لا توجد بطارية لتخزين الطاقة.";
logs.push({ text: "BATTERY PACK MISSING 🔴", type: "err" });
} else if (stats.batteryRemaining < 0) {
failed = true;
atlasMsg = "العربة اتجمدت. التدفئة وقفت قبل الفجر بساعات بسبب نفاد البطارية ليلاً.";
logs.push({ text: E_REMAINING < 0 (${stats.batteryRemaining} Wh) 🔴, type: "err" });
} else if (!selectedParts.has("comm_ant_2")) {
failed = true;
atlasMsg = "حفرنا الجليد وماحدش عرف. البيانات اللي ما وصلتش ما حصلتش.";
logs.push({ text: "COMMS & ANTENNA MISSING 🔴", type: "err" });
} else {
const hasMargin = stats.batteryRemaining >= 50;
stars = (stats.totalPoints >= 60 && hasMargin) ? "★★★" : (stats.totalPoints >= 60 ? "★★" : "★");
atlasMsg = نجاح باهر! صمدت العربة طوال 12 ساعة ليل قمري وتبقى ${stats.batteryRemaining} Wh في البطارية.;
logs.push({ text: LUNAR NIGHT SURVIVED: ${stats.batteryRemaining} Wh LEFT, type: "ok" });
}
} else if (currentLevel.id === 3) {
if (selectedParts.has("drill_3")) {
failed = true;
atlasMsg = "المسبار وصل المشتري بعد 6 سنين من الرحلة. وفي اللحظة اللي شغّلت فيها الحفار، الكهربا اتقطعت عن الاتصالات. آخر رسالة وصلتنا: 'ال...'. القدرة المتاحة سقف مش اقتراح.";
logs.push({ text: "POWER OVERLOAD: DRILL EXCEEDED 110W 🔴", type: "err" });
} else if (!selectedParts.has("rtg_3") || stats.powerUseDay > stats.powerGenDay) {
failed = true;
atlasMsg = "ألواحك بتجمع ضوء شمس على بُعد 780 مليون كيلومتر. الشمس هناك لمبة بعيدة، مش مصدر طاقة (تعطي 17 W فقط!).";
logs.push({ text: "INVERSE SQUARE LAW: SOLAR INSUFFICIENT 🔴", type: "err" });
} else if (!selectedParts.has("comm_ant_3")) {
failed = true;
atlasMsg = "وصلنا يوروبا، لكن البيانات لم تصل للأرض. البيانات اللي ما وصلتش ما حصلتش.";
logs.push({ text: "DEEP SPACE COMMS MISSING 🔴", type: "err" });
} else {
const powerMargin = (stats.powerGenDay - stats.powerUseDay) / stats.powerGenDay;
const noUseless = !selectedParts.has("solar_3") && !selectedParts.has("drill_3");
if (selectedParts.has("radar_3") && selectedParts.has("cam_3") && powerMargin >= 0.1 && noUseless) stars = "★★★";
else if (selectedParts.has("radar_3")) stars = "★★";
else stars = "★";
atlasMsg = "مهمة تاريخية! اخترق رادار REASON قشرة يوروبا الجليدية وأرسل بيانات المحيط للأرض.";
logs.push({ text: EUROPA OCEAN SCANNED [+${stats.totalPoints} PTS], type: "ok" });
}
}
goToScreen("screen-report");
document.getElementById("report-mission-title").textContent = ${currentLevel.code}: MISSION REPORT;
const headEl = document.getElementById("report-status-headline");
const starsEl = document.getElementById("report-stars");
headEl.textContent = failed ? "Mission Failed!" : "Mission Success!";
headEl.className = failed ? "status-heading fail" : "status-heading pass";
starsEl.textContent = failed ? "✖" : stars;
starsEl.className = failed ? "big-status-visual fail" : "big-status-visual stars";
document.getElementById("report-score-badge").textContent = SCIENCE SCORE: +${failed ? 0 : stats.totalPoints} PTS;
document.getElementById("report-atlas-summary").textContent = atlasMsg;
document.getElementById("report-metrics-list").innerHTML =  <div class="metric-box"><div class="metric-info"><strong>BUDGET USED</strong><span>${formatMoney(stats.totalCost)}</span></div><div class="metric-status ${stats.totalCost <= currentLevel.budget ? 'pass' : 'fail'}">${stats.totalCost <= currentLevel.budget ? '✓' : '✖'}</div></div> <div class="metric-box"><div class="metric-info"><strong>TOTAL MASS</strong><span>${stats.totalMass} kg</span></div><div class="metric-status ${stats.totalMass <= currentLevel.rocketCapacity ? 'pass' : 'fail'}">${stats.totalMass <= currentLevel.rocketCapacity ? '✓' : '✖'}</div></div> <div class="metric-box"><div class="metric-info"><strong>POWER BALANCE</strong><span>${stats.powerGenDay - stats.powerUseDay} W Margin</span></div><div class="metric-status ${stats.powerGenDay >= stats.powerUseDay ? 'pass' : 'fail'}">${stats.powerGenDay >= stats.powerUseDay ? '✓' : '✖'}</div></div>;
document.getElementById("report-log-list").innerHTML = logs.map(l => <div class="log-item ${l.type}">${l.text}</div>).join("");
if (!failed) {
completedMissions.add(currentLevel.id);
if (currentLevel.id === unlockedLevel && unlockedLevel < 3) unlockedLevel++;
}
}
window.onload = () => updateHomeScreen()