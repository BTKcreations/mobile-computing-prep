export const mobileMindmaps = {
    "I": {
        id: "root",
        label: "Mobile Computing",
        children: [
            {
                id: "gsm",
                label: "GSM Architecture",
                children: [
                    { id: "rss", label: "Radio Subsystem (RSS)", children: [{ id: "ms", label: "Mobile Station" }, { id: "bss", label: "Base Station (BSS)" }] },
                    { id: "nss", label: "Network Switching (NSS)", children: [{ id: "msc", label: "MSC" }, { id: "hlr", label: "HLR / VLR" }] },
                    { id: "oss", label: "Operation (OSS)", children: [{ id: "omc", label: "OMC" }, { id: "eir", label: "EIR / AUC" }] }
                ]
            },
            {
                id: "gprs",
                label: "GPRS",
                children: [
                    { id: "pkt", label: "Packet Switching" },
                    { id: "nodes", label: "New Nodes", children: [{ id: "sgsn", label: "SGSN" }, { id: "ggsn", label: "GGSN" }] }
                ]
            }
        ]
    },
    "II": {
        id: "root",
        label: "Wireless MAC & IP",
        children: [
            {
                id: "mac",
                label: "MAC Layer",
                children: [
                    { id: "sdma", label: "SDMA (Space)" },
                    { id: "fdma", label: "FDMA (Freq)" },
                    { id: "tdma", label: "TDMA (Time)" },
                    { id: "cdma", label: "CDMA (Code)" }
                ]
            },
            {
                id: "80211",
                label: "IEEE 802.11",
                children: [
                    { id: "arch", label: "Architecture", children: [{ id: "bss", label: "BSS/ESS" }, { id: "ap", label: "Access Point" }] },
                    { id: "mac_layer", label: "MAC", children: [{ id: "dcf", label: "DCF" }, { id: "pcf", label: "PCF" }] }
                ]
            },
            {
                id: "mip",
                label: "Mobile IP",
                children: [
                    { id: "entities", label: "Entities", children: [{ id: "mn", label: "MN" }, { id: "ha", label: "HA" }, { id: "fa", label: "FA" }] },
                    { id: "mech", label: "Mechanisms", children: [{ id: "tunnel", label: "Tunneling" }, { id: "tri", label: "Triangular Routing" }] }
                ]
            }
        ]
    },
    "III": {
        id: "root",
        label: "Mobile Transport",
        children: [
            {
                id: "tcp_issues",
                label: "TCP Issues",
                children: [
                    { id: "cong", label: "Congestion vs Error" },
                    { id: "disc", label: "Frequent Disconnection" }
                ]
            },
            {
                id: "solutions",
                label: "Solutions",
                children: [
                    { id: "itcp", label: "Indirect TCP", children: [{ id: "split", label: "Split Connection" }] },
                    { id: "snoop", label: "Snooping TCP", children: [{ id: "buffer", label: "Buffering at BS" }] },
                    { id: "mtcp", label: "Mobile TCP", children: [{ id: "persist", label: "Persist Mode" }] }
                ]
            }
        ]
    },
    "IV": {
        id: "root",
        label: "Data Dissemination",
        children: [
            {
                id: "models",
                label: "Delivery Models",
                children: [
                    { id: "push", label: "Push (Publish/Sub)" },
                    { id: "pull", label: "Pull (On-Demand)" },
                    { id: "hybrid", label: "Hybrid" }
                ]
            },
            {
                id: "bdisk",
                label: "Broadcast Disk",
                children: [
                    { id: "flat", label: "Flat Schedule" },
                    { id: "skew", label: "Skewed Schedule" },
                    { id: "index", label: "Indexing", children: [{ id: "power", label: "Save Power" }] }
                ]
            },
            {
                id: "cache",
                label: "Caching",
                children: [
                    { id: "consist", label: "Consistency", children: [{ id: "inv", label: "Invalidation Reports" }] }
                ]
            }
        ]
    },
    "V": {
        id: "root",
        label: "MANETs & Platforms",
        children: [
            {
                id: "routing",
                label: "Routing Protocols",
                children: [
                    { id: "pro", label: "Proactive", children: [{ id: "dsdv", label: "DSDV" }] },
                    { id: "reac", label: "Reactive", children: [{ id: "dsr", label: "DSR" }, { id: "aodv", label: "AODV" }] },
                    { id: "hybrid", label: "Hybrid", children: [{ id: "zrp", label: "ZRP" }] }
                ]
            },
            {
                id: "security",
                label: "Security",
                children: [
                    { id: "attacks", label: "Attacks", children: [{ id: "black", label: "Blackhole" }, { id: "worm", label: "Wormhole" }] }
                ]
            },
            {
                id: "j2me",
                label: "J2ME",
                children: [
                    { id: "config", label: "Config (CLDC)" },
                    { id: "profile", label: "Profile (MIDP)" }
                ]
            }
        ]
    }
};

export const electronicSensorsMindmaps = {
    "I": {
        id: "root",
        label: "Sensors & Transducers",
        children: [
            {
                id: "basics",
                label: "Basics",
                children: [
                    { id: "def", label: "Sensor vs Transducer" },
                    { id: "class", label: "Classification", children: [{ id: "act", label: "Active" }, { id: "pass", label: "Passive" }] },
                    { id: "char", label: "Characteristics", children: [{ id: "stat", label: "Static (Accuracy, Precision)" }, { id: "dyn", label: "Dynamic" }] }
                ]
            },
            {
                id: "resistive",
                label: "Resistive Sensors",
                children: [
                    { id: "pot", label: "Potentiometer" },
                    { id: "strain", label: "Strain Gauge", children: [{ id: "gf", label: "Gauge Factor" }, { id: "bridge", label: "Wheatstone Bridge" }] }
                ]
            },
            {
                id: "inductive",
                label: "Inductive Sensors",
                children: [
                    { id: "lvdt", label: "LVDT", children: [{ id: "core", label: "Movable Core" }, { id: "out", label: "Vout = Vs1 - Vs2" }] }
                ]
            },
            {
                id: "capacitive",
                label: "Capacitive Sensors",
                children: [
                    { id: "var", label: "Variations", children: [{ id: "dist", label: "Distance (d)" }, { id: "area", label: "Area (A)" }, { id: "diel", label: "Dielectric (ε)" }] }
                ]
            }
        ]
    },
    "II": {
        id: "root",
        label: "Thermal Sensors",
        children: [
            {
                id: "expansion",
                label: "Expansion Type",
                children: [
                    { id: "bimetal", label: "Bimetallic Strip" },
                    { id: "liq", label: "Liquid in Glass" }
                ]
            },
            {
                id: "electrical",
                label: "Electrical Type",
                children: [
                    { id: "rtd", label: "RTD (Pt100)", children: [{ id: "ptc", label: "PTC (Linear)" }] },
                    { id: "thermistor", label: "Thermistor", children: [{ id: "ntc", label: "NTC (Non-linear)" }] },
                    { id: "tcouple", label: "Thermocouple", children: [{ id: "seebeck", label: "Seebeck Effect" }, { id: "types", label: "Types (J, K, T)" }] }
                ]
            },
            {
                id: "radiation",
                label: "Radiation Type",
                children: [
                    { id: "pyro", label: "Pyrometers", children: [{ id: "opt", label: "Optical" }, { id: "rad", label: "Total Radiation" }] }
                ]
            }
        ]
    },
    "III": {
        id: "root",
        label: "Magnetic Sensors",
        children: [
            {
                id: "hall",
                label: "Hall Effect",
                children: [
                    { id: "principle", label: "Lorentz Force" },
                    { id: "app", label: "Applications", children: [{ id: "rpm", label: "RPM" }, { id: "curr", label: "Current Sensing" }] }
                ]
            },
            {
                id: "magneto",
                label: "Magnetoresistive",
                children: [
                    { id: "amr", label: "AMR" },
                    { id: "gmr", label: "GMR (Giant MR)" }
                ]
            },
            {
                id: "strictive",
                label: "Magnetostrictive",
                children: [
                    { id: "wied", label: "Wiedemann Effect" },
                    { id: "level", label: "Liquid Level Sensing" }
                ]
            }
        ]
    },
    "IV": {
        id: "root",
        label: "Radiation & Electroanalytical",
        children: [
            {
                id: "optical",
                label: "Optical Sensors",
                children: [
                    { id: "pdiode", label: "Photodiode" },
                    { id: "ptrans", label: "Phototransistor" },
                    { id: "ldr", label: "LDR" },
                    { id: "solar", label: "Solar Cell" }
                ]
            },
            {
                id: "nuclear",
                label: "Nuclear Radiation",
                children: [
                    { id: "gm", label: "Geiger Muller Counter" },
                    { id: "scint", label: "Scintillation Counter" }
                ]
            },
            {
                id: "chem",
                label: "Chemical Sensors",
                children: [
                    { id: "ph", label: "pH Sensor", children: [{ id: "glass", label: "Glass Electrode" }, { id: "nernst", label: "Nernst Eq" }] },
                    { id: "cond", label: "Conductivity Cell" }
                ]
            }
        ]
    },
    "V": {
        id: "root",
        label: "Smart Sensors & MEMS",
        children: [
            {
                id: "smart",
                label: "Smart Sensors",
                children: [
                    { id: "std", label: "IEEE 1451" },
                    { id: "blocks", label: "Blocks", children: [{ id: "sens", label: "Sensor" }, { id: "adc", label: "ADC" }, { id: "dsp", label: "DSP" }, { id: "comm", label: "Comm" }] }
                ]
            },
            {
                id: "mems",
                label: "MEMS",
                children: [
                    { id: "def", label: "Micro-Electro-Mechanical" },
                    { id: "fab", label: "Fabrication", children: [{ id: "bulk", label: "Bulk Micromachining" }, { id: "surf", label: "Surface Micromachining" }] },
                    { id: "apps", label: "Applications", children: [{ id: "accel", label: "Accelerometer" }, { id: "gyro", label: "Gyroscope" }] }
                ]
            }
        ]
    }
};
