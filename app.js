let unlockedLevel = 1;
let completedMissions = new Set();
let currentLevel = levelsData["1"];
let selectedParts = new Set(["chassis_6u"]);
let launchTimer = null;

function goToScreen(screenId) {
    if (launchTimer) clearInterval(launchTimer);
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    if (screenId === "screen-home") updateHomeScreen();
    if (screenId === "screen-missions") renderMissions();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatMoney(amount) { return "$" + amount.toLocaleString("en-US"); }

function updateHomeScreen() {
    const percent = Math.round((completedMissions.size / 3) * 100);
    document.getElementById("home-progress-fill").style.height = percent + "%";
    document.getElementById("home-progress-text").textContent = `${percent}% Complete`;
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
        return `
        <div class="mission-card ${isUnlocked ? 'unlocked' : 'locked'}">
            <div>
                <div class="m-card-top"><div class="m-icon">${lvl.icon}</div><div class="m-title">${lvl.title} ${isDone ? '✅' : ''}</div></div>
                <div class="m-meta">LEVEL: ${lvl.levelName}<br>OBJECTIVE: ${lvl.objective}</div>
                <p class="m-desc">${lvl.description}</p>
            </div>
            <div>
                <div class="m-specs"><strong>BUDGET TARGET:</strong> ${formatMoney(lvl.budget)}<br><strong>LAUNCH VEHICLE:</strong> ${lvl.rocketName}<br><strong>CAPACITY / SPECS:</strong><br>${lvl.specsSummary}</div>
                ${isUnlocked ? `<button class="select-btn" onclick="selectLevel(${lvl.id})">🚀 SELECT MISSION</button>` : `<button class="locked-btn" disabled>🔒 LOCKED</button>`}
            </div>
        </div>`;
    }).join("");
}

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
        videoEl.style.display = "none"; cuteBox.style.display = "block"; videoEl.src = videoSrc;
        videoEl.onloadeddata = () => { cuteBox.style.display = "none"; videoEl.style.display = "block"; videoEl.play().catch(() => {}); };
        videoEl.onerror = () => { videoEl.style.display = "none"; cuteBox.style.display = "block"; };
    } else { cuteBox.style.display = "block"; }
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
        const subText = p.required ? `Cost: ${formatMoney(p.cost)} | Mass: ${p.mass}kg | Mandatory Base` : `Cost: ${formatMoney(p.cost)} | Mass: ${p.mass}kg ${p.powerGenDay ? '| Power: +' + p.powerGenDay + 'W' : ''} ${p.powerUseDay ? '| Power: -' + p.powerUseDay + 'W' : ''} ${p.points ? '| Points: +' + p.points : ''}`;
        return `<div class="inv-card ${isSel ? 'selected' : ''}" onclick="togglePart('${p.id}')"><div class="inv-icon">${p.icon}</div><div class="inv-details"><div class="inv-title">${p.name}</div><div class="inv-sub">${subText}</div></div><div class="inv-check">${isSel ? '✓' : ''}</div></div>`;
    }).join("");
    bpTags.innerHTML = currentLevel.parts.map(p => `<span class="bp-tag ${selectedParts.has(p.id) ? 'active' : ''}">${p.shortName}</span>`).join("");
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
        totalCost += p.cost; totalMass += p.mass; powerGenDay += p.powerGenDay; powerUseDay += p.powerUseDay; totalBatteryWh += p.batteryWh; totalPoints += p.points;
        powerUseNight += (currentLevel.id === 2 && p.category === "heavy_science" && shutdownNight) ? 0 : p.powerUseNight;
    });
    const energyNight = powerUseNight * currentLevel.eclipseHours;
    const batteryRemaining = totalBatteryWh - energyNight;
    return { totalCost, totalMass: Number(totalMass.toFixed(2)), powerGenDay, powerUseDay, totalBatteryWh, energyNight: Number(energyNight.toFixed(1)), batteryRemaining: Number(batteryRemaining.toFixed(1)), totalPoints };
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
    if (currentLevel.id === 3) { batBox.style.display = "none"; }
    else {
        batBox.style.display = "block";
        const rem = Math.max(0, stats.batteryRemaining);
        document.getElementById("stat-battery").textContent = `${rem} Wh / ${stats.totalBatteryWh} Wh`;
        document.getElementById("stat-battery").className = stats.batteryRemaining < 0 ? "red-text" : "green-text";
Use code with caution.
document.getElementById("bar-battery").style.width = stats.totalBatteryWh > 0 ? Math.min(100, (rem / stats.totalBatteryWh) * 100) + "%" : "0%";
document.getElementById("bar-battery").className = "mini-fill " + (stats.batteryRemaining < 0 ? "over" : "");
}
document.getElementById("stat-points").textContent = ${stats.totalPoints} PTS;
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
document.getElementById("check-mission-header").textContent = ${currentLevel.code}: FINAL SYSTEMS CHECK;
document.getElementById("launch-craft-icon").textContent = currentLevel.icon;
document.getElementById("orbit-physics-info").textContent = currentLevel.orbitPhysics;
const massOk = stats.totalMass <= currentLevel.rocketCapacity;
const powerOk = stats.powerUseDay <= stats.powerGenDay && (currentLevel.id === 3 || stats.batteryRemaining >= 0);
const hasScience = stats.totalPoints > 0;
const hasComms = selectedParts.has("comm_1") || selectedParts.has("comm_ant_2") || selectedParts.has("comm_ant_3");
document.getElementById("prelaunch-report-list").innerHTML =  <div class="hud-box"><div class="hud-box-row"><span>LAUNCH VEHICLE:</span><strong class="green-text">✓</strong></div><small>${currentLevel.rocketName} (OK)</small></div> <div class="hud-box"><div class="hud-box-row"><span>STRUCTURAL INTEGRITY:</span><strong class="${massOk ? 'green-text' : 'red-text'}">${massOk ? '✓' : '✖'}</strong></div><small>Mass ${stats.totalMass} kg / ${currentLevel.rocketCapacity} kg</small></div> <div class="hud-box"><div class="hud-box-row"><span>POWER SYSTEMS:</span><strong class="${powerOk ? 'green-text' : 'red-text'}">${powerOk ? '✓' : '✖'}</strong></div><small>${powerOk ? 'Nominal Output (OK)' : 'Power Deficit Warning'}</small></div> <div class="hud-box"><div class="hud-box-row"><span>PAYLOAD SENSORS:</span><strong class="${hasScience ? 'green-text' : 'red-text'}">${hasScience ? '✓' : '✖'}</strong></div><small>${hasScience ? 'Instruments Armed (OK)' : 'No Science Payload'}</small></div> <div class="hud-box"><div class="hud-box-row"><span>COMMUNICATION LINK:</span><strong class="${hasComms ? 'green-text' : 'red-text'}">${hasComms ? '✓' : '✖'}</strong></div><small>${hasComms ? 'Telemetry Locked (OK)' : 'Link Missing'}</small></div>;
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
function abortLaunch() { if (launchTimer) clearInterval(launchTimer); goToScreen("screen-assembly"); }
function generateFinalReport() {
const stats = calculatePhysics();
let failed = false, atlasMsg = "", stars = "★";
let logs = [{ text: "LAUNCH SEQUENCE ACTIVE", type: "ok" }];
if (stats.totalMass > currentLevel.rocketCapacity) {
failed = true; atlasMsg = "الصاروخ وقف على المنصة وبصّلك. وزنك أكبر من اللي يقدر يشيله (TWR < 1).";
logs.push({ text: "TWR < 1: PAYLOAD MASS EXCEEDED", type: "err" });
} else if (stats.totalCost > currentLevel.budget) {
failed = true; atlasMsg = "الحسابات خلصت قبل ما الصاروخ يتجمّع. تجاوزت الميزانية المحددة!";
logs.push({ text: "BUDGET OVERRUN DETECTED", type: "err" });
} else if (currentLevel.id === 1) {
if (!selectedParts.has("solar_1")) { failed = true; atlasMsg = "البطارية 86 Wh بتكفي حوالي 3 ساعات بالحمل الكامل. بعدها القمر بيموت في المدار."; logs.push({ text: "NO SOLAR ARRAY: BATTERY DEPLETED 🔴", type: "err" }); }
else if (!selectedParts.has("comm_1")) { failed = true; atlasMsg = "فيه هوائي، بس مفيش جهاز يبعت. هوائي من غير مرسل زي ورقة من غير قلم."; logs.push({ text: "NO TRANSCEIVER: SIGNAL LOST 🔴", type: "err" }); }
else if (!selectedParts.has("ant_1")) { failed = true; atlasMsg = "القمر وصل المدار وصوّر 40 صورة، بس البيانات لسه محبوسة جواه. نجاح هندسي، فشل علمي. البيانات اللي ما وصلتش ما حصلتش."; logs.push({ text: "NO ANTENNA: DATA TRAPPED 🔴", type: "err" }); }
else if (stats.totalPoints === 0) { stars = "★"; atlasMsg = "ينجح تقنياً، لكن من غير قيمة علمية! لم تقم بتركيب كاميرا أو مطياف."; logs.push({ text: "ORBIT STABLE: 0 SCIENCE INSTRUMENTS", type: "warn" }); }
else { stars = stats.totalPoints >= 25 ? "★★★" : "★★"; atlasMsg = "تصميم مثالي! تم إرسال بيانات حرارة الأرض والغطاء النباتي للمحطة الأرضية بنجاح."; logs.push({ text: CLIMATE DATA STREAMING [+${stats.totalPoints} PTS], type: "ok" }); }
} else if (currentLevel.id === 2) {
if (!selectedParts.has("solar_2")) { failed = true; atlasMsg = "عربة من غير شمس. بطارية 500 Wh هتخلص في ساعات."; logs.push({ text: "SOLAR PANELS MISSING 🔴", type: "err" }); }
else if (!selectedParts.has("bat_2")) { failed = true; atlasMsg = "أول غروب شمس، وكل حاجة اتقفلت. لا توجد بطارية لتخزين الطاقة."; logs.push({ text: "BATTERY PACK MISSING 🔴", type: "err" }); }
else if (stats.batteryRemaining < 0) { failed = true; atlasMsg = "العربة اتجمدت. التدفئة وقفت قبل الفجر بساعات بسبب نفاد البطارية ليلاً."; logs.push({ text: E_REMAINING < 0 (${stats.batteryRemaining} Wh) 🔴, type: "err" }); }
else if (!selectedParts.has("comm_ant_2")) { failed = true; atlasMsg = "حفرنا الجليد وماحدش عرف. البيانات اللي ما وصلتش ما حصلتش."; logs.push({ text: "COMMS & ANTENNA MISSING 🔴", type: "err" }); }
else {
const hasMargin = stats.batteryRemaining >= 50;
stars = (stats.totalPoints >= 60 && hasMargin) ? "★★★" : (stats.totalPoints >= 60 ? "★★" : "★");
atlasMsg = نجاح باهر! صمدت العربة طوال 12 ساعة ليل قمري وتبقى ${stats.batteryRemaining} Wh في البطارية.;
logs.push({ text: LUNAR NIGHT SURVIVED: ${stats.batteryRemaining} Wh LEFT, type: "ok" });
}
} else if (currentLevel.id === 3) {
if (selectedParts.has("drill_3")) { failed = true; atlasMsg = "المسبار وصل المشتري بعد 6 سنين من الرحلة. وفي اللحظة اللي شغّلت فيها الحفار، الكهربا اتقطعت عن الاتصالات. القدرة المتاحة سقف مش اقتراح."; logs.push({ text: "POWER OVERLOAD: DRILL EXCEEDED 110W 🔴", type: "err" }); }
else if (!selectedParts.has("rtg_3") || stats.powerUseDay > stats.powerGenDay) { failed = true; atlasMsg = "ألواحك بتجمع ضوء شمس على بُعد 780 مليون كيلومتر. الشمس هناك لمبة بعيدة، مش مصدر طاقة (تعطي 17 W فقط!)."; logs.push({ text: "INVERSE SQUARE LAW: SOLAR INSUFFICIENT 🔴", type: "err" }); }
else if (!selectedParts.has("comm_ant_3")) { failed = true; atlasMsg = "وصلنا يوروبا، لكن البيانات لم تصل للأرض. البيانات اللي ما وصلتش ما حصلتش."; logs.push({ text: "DEEP SPACE COMMS MISSING 🔴", type: "err" }); }
else {
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
