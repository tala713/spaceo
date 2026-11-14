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
        else { stars = s.totalPoints >= 25 ? "★★★" : "★★"; atlasMsg = "Optimal design! Earth temperature and vegetation data were successfully sent to the ground station."; logs.push({ text: `CLIMATE DATA STREAMING [+${s.totalPoints} PTS]`, type: "ok" }); }
    } else if (L.id === 2) {
        if (!has("solar_2")) fail("A rover with no sunlight. The 500 Wh battery will be drained within hours.", "SOLAR PANELS MISSING 🔴");
        else if (!has("bat_2")) fail("At the first sunset, everything shut down. There is no battery to store energy.", "BATTERY PACK MISSING 🔴");
        else if (s.batteryRemaining < 0) fail("The rover froze. The heaters died hours before dawn because the battery ran out overnight.", `BATTERY_REMAINING < 0 (${s.batteryRemaining} Wh) 🔴`);
        else if (!has("comm_ant_2")) fail("We drilled into the ice and nobody knew. Data that never reaches Earth never happened.", "COMMS & ANTENNA MISSING 🔴");
        else {
            const margin = s.batteryRemaining >= 50;
            stars = (s.totalPoints >= 60 && margin) ? "★★★" : (s.totalPoints >= 60 ? "★★" : "★");
            atlasMsg = `Outstanding success! The rover survived the 12-hour lunar night with ${s.batteryRemaining} Wh left in the battery.`;
            logs.push({ text: `LUNAR NIGHT SURVIVED: ${s.batteryRemaining} Wh LEFT`, type: "ok" });
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
            logs.push({ text: `EUROPA OCEAN SCANNED [+${s.totalPoints} PTS]`, type: "ok" });
        }
    }

    goToScreen("screen-report");
    document.body.dataset.result = failed ? "fail" : "pass";
    document.getElementById("report-mission-title").textContent = `${L.code}: MISSION REPORT`;
    const headEl = document.getElementById("report-status-headline"), starsEl = document.getElementById("report-stars");
    headEl.textContent = failed ? "Mission Failed!" : "Mission Success!";
    headEl.className = failed ? "status-heading fail" : "status-heading pass";
    starsEl.textContent = failed ? "✖" : stars;
    starsEl.className = failed ? "big-status-visual fail" : "big-status-visual stars";
    document.getElementById("report-score-badge").textContent = `SCIENCE SCORE: +${failed ? 0 : s.totalPoints} PTS`;
    document.getElementById("report-atlas-summary").textContent = atlasMsg;

    const metric = (label, value, ok) => `<div class="metric-box"><div class="metric-info"><strong>${label}</strong><span>${value}</span></div><div class="metric-status ${ok ? "pass" : "fail"}">${ok ? "✓" : "✖"}</div></div>`;
    document.getElementById("report-metrics-list").innerHTML =
        metric("BUDGET USED", formatMoney(s.totalCost), s.totalCost <= L.budget) +
        metric("TOTAL MASS", `${s.totalMass} kg`, s.totalMass <= L.rocketCapacity) +
        metric("POWER BALANCE", `${s.powerGenDay - s.powerUseDay} W Margin`, s.powerGenDay >= s.powerUseDay);
    document.getElementById("report-log-list").innerHTML = logs.map(l => `<div class="log-item ${l.type}">${l.text}</div>`).join("");

    if (!failed) {
        completedMissions.add(L.id);
        if (L.id === unlockedLevel && unlockedLevel < 3) unlockedLevel++;
    }
}

updateHomeScreen();
