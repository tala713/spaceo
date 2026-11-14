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