export const mindmaps = {
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
