export const quizzes = {
    "I": [
        {
            question: "What is the primary difference between Mobile Computing and Mobile Communication?",
            options: [
                "Mobile Computing involves data processing, while Mobile Communication involves data transmission.",
                "Mobile Computing is only for laptops.",
                "Mobile Communication is only for phones.",
                "There is no difference."
            ],
            answer: 0
        },
        {
            question: "Which of the following is NOT a subsystem of GSM Architecture?",
            options: [
                "Mobile Station (MS)",
                "Base Station Subsystem (BSS)",
                "Network and Switching Subsystem (NSS)",
                "Global Positioning System (GPS)"
            ],
            answer: 3
        },
        {
            question: "What does HLR stand for in GSM?",
            options: [
                "Home Location Register",
                "Home Local Radio",
                "Host Location Register",
                "High Level Register"
            ],
            answer: 0
        },
        {
            question: "Which interface connects the BTS and BSC in GSM?",
            options: [
                "Um Interface",
                "A Interface",
                "Abis Interface",
                "B Interface"
            ],
            answer: 2
        },
        {
            question: "What is the maximum data rate of GPRS (theoretical)?",
            options: [
                "9.6 kbps",
                "56 kbps",
                "171.2 kbps",
                "2 Mbps"
            ],
            answer: 2
        },
        {
            question: "Which component in GPRS is equivalent to the MSC in GSM?",
            options: [
                "GGSN",
                "SGSN",
                "PCU",
                "HLR"
            ],
            answer: 1
        },
        {
            question: "In Mobile Computing, what does 'Ubiquitous Computing' refer to?",
            options: [
                "Computing that is visible everywhere",
                "Computing that is integrated into the environment and invisible to the user",
                "Computing using only mobile phones",
                "Cloud computing"
            ],
            answer: 1
        },
        {
            question: "What is the function of the Equipment Identity Register (EIR)?",
            options: [
                "Stores user billing info",
                "Stores the IMEI numbers of valid, stolen, or faulty devices",
                "Stores the current location of the user",
                "Stores SMS messages"
            ],
            answer: 1
        },
        {
            question: "Which multiple access technique does GSM use?",
            options: [
                "FDMA only",
                "TDMA only",
                "CDMA",
                "Combination of FDMA and TDMA"
            ],
            answer: 3
        },
        {
            question: "What is a 'Cell' in cellular networks?",
            options: [
                "A battery",
                "The geographic area covered by a single Base Station",
                "A mobile phone",
                "A packet of data"
            ],
            answer: 1
        }
    ],
    "II": [
        {
            question: "Which problem occurs when two terminals can hear the base station but not each other?",
            options: [
                "Exposed Terminal Problem",
                "Hidden Terminal Problem",
                "Near-Far Problem",
                "Far-Near Problem"
            ],
            answer: 1
        },
        {
            question: "What is the temporary IP address assigned to a mobile node in a foreign network called?",
            options: [
                "Home Address",
                "Foreign Address",
                "Care-of Address (CoA)",
                "Mobile Address"
            ],
            answer: 2
        },
        {
            question: "Which mechanism is used to forward packets from the Home Agent to the Foreign Agent?",
            options: [
                "Routing",
                "Tunneling",
                "Switching",
                "Bridging"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the NAV (Network Allocation Vector) in IEEE 802.11?",
            options: [
                "To route packets",
                "To assign IP addresses",
                "To indicate how long the channel will be busy (Virtual Carrier Sensing)",
                "To encrypt data"
            ],
            answer: 2
        },
        {
            question: "In Mobile IP, what is 'Triangular Routing'?",
            options: [
                "Routing between 3 routers",
                "The path CN -> HA -> FA -> MN -> CN",
                "A routing loop",
                "Routing using 3 antennas"
            ],
            answer: 1
        },
        {
            question: "Which protocol is used for Agent Discovery in Mobile IP?",
            options: [
                "ARP",
                "ICMP Router Discovery",
                "DHCP",
                "DNS"
            ],
            answer: 1
        },
        {
            question: "What is 'Minimal Encapsulation' in Mobile IP?",
            options: [
                "No encryption",
                "A tunneling method with less overhead than IP-in-IP",
                "Sending small packets",
                "Compressing headers"
            ],
            answer: 1
        },
        {
            question: "Which IEEE standard defines Wireless LANs (Wi-Fi)?",
            options: [
                "802.3",
                "802.15",
                "802.11",
                "802.16"
            ],
            answer: 2
        },
        {
            question: "What is the Near-Far problem primarily associated with?",
            options: [
                "TDMA",
                "FDMA",
                "CDMA",
                "SDMA"
            ],
            answer: 2
        },
        {
            question: "What is the function of the Foreign Agent (FA)?",
            options: [
                "It stores the user's permanent profile",
                "It acts as a router on the visited network and delivers packets to the MN",
                "It assigns the Home Address",
                "It manages the radio spectrum"
            ],
            answer: 1
        }
    ],
    "III": [
        {
            question: "Which TCP variant splits the connection into Fixed-to-BS and BS-to-Mobile?",
            options: [
                "Mobile TCP",
                "Snooping TCP",
                "Indirect TCP (I-TCP)",
                "Fast Retransmit TCP"
            ],
            answer: 2
        },
        {
            question: "In Snooping TCP, where are the packets buffered?",
            options: [
                "Mobile Node",
                "Base Station",
                "Home Agent",
                "Foreign Agent"
            ],
            answer: 1
        },
        {
            question: "What does M-TCP do when the mobile client disconnects?",
            options: [
                "It terminates the connection.",
                "It keeps sending packets.",
                "It forces the sender into Persist Mode.",
                "It switches to UDP."
            ],
            answer: 2
        },
        {
            question: "What is the main disadvantage of I-TCP?",
            options: [
                "It is slow",
                "It violates end-to-end TCP semantics",
                "It requires new hardware",
                "It doesn't work with IPv6"
            ],
            answer: 1
        },
        {
            question: "What is 'Fast Retransmit' in TCP?",
            options: [
                "Retransmitting after timeout",
                "Retransmitting after receiving 3 duplicate ACKs",
                "Sending data twice",
                "Using UDP for retransmission"
            ],
            answer: 1
        },
        {
            question: "Which TCP mechanism is designed to distinguish between congestion loss and wireless error loss?",
            options: [
                "Standard TCP",
                "TCP Reno",
                "Explicit Congestion Notification (ECN) / TCP Westwood",
                "UDP"
            ],
            answer: 2
        },
        {
            question: "In WAP, which layer replaces HTTP?",
            options: [
                "WAE",
                "WSP (Wireless Session Protocol)",
                "WTP",
                "WDP"
            ],
            answer: 1
        },
        {
            question: "What is a Piconet in Bluetooth?",
            options: [
                "A large network",
                "A network of up to 8 devices (1 Master, 7 Slaves)",
                "A network of routers",
                "A type of antenna"
            ],
            answer: 1
        },
        {
            question: "Which layer in WAP provides security equivalent to TLS/SSL?",
            options: [
                "WDP",
                "WTP",
                "WTLS",
                "WAE"
            ],
            answer: 2
        },
        {
            question: "What is the frequency band used by Bluetooth?",
            options: [
                "5 GHz",
                "900 MHz",
                "2.4 GHz ISM",
                "60 GHz"
            ],
            answer: 2
        }
    ],
    "IV": [
        {
            question: "Which data delivery mechanism is best for highly popular data like stock quotes?",
            options: [
                "Pull-based (On-demand)",
                "Push-based (Publish-Subscribe)",
                "Hybrid",
                "Selective Tuning"
            ],
            answer: 1
        },
        {
            question: "What is the main advantage of Selective Tuning?",
            options: [
                "Increases bandwidth",
                "Reduces latency",
                "Conserves battery power",
                "Increases security"
            ],
            answer: 2
        },
        {
            question: "In Index-based selective tuning, what does the device do after reading the index?",
            options: [
                "Immediately downloads all data",
                "Disconnects from the network",
                "Sleeps until the desired data arrives",
                "Sends an acknowledgement"
            ],
            answer: 2
        },
        {
            question: "What is 'Data Hoarding'?",
            options: [
                "Deleting data",
                "Prefetching data into cache before disconnection",
                "Compressing data",
                "Encrypting data"
            ],
            answer: 1
        },
        {
            question: "Which synchronization protocol is 'Pessimistic'?",
            options: [
                "One that allows conflicts",
                "One that locks data to prevent conflicts",
                "One that uses timestamps",
                "One that uses version vectors"
            ],
            answer: 1
        },
        {
            question: "What is a 'Broadcast Disk'?",
            options: [
                "A physical disk",
                "A cyclic broadcast of data that simulates a rotating disk",
                "A satellite dish",
                "A CD-ROM"
            ],
            answer: 1
        },
        {
            question: "In the context of Mobile Databases, what is a 'Tentative Transaction'?",
            options: [
                "A transaction that has been committed",
                "A transaction executed on a disconnected mobile unit that is not yet confirmed by the server",
                "A failed transaction",
                "A read-only transaction"
            ],
            answer: 1
        },
        {
            question: "What is 'Kangaroo Transaction'?",
            options: [
                "A fast transaction",
                "A transaction that hops from one Base Station to another with the user",
                "A transaction that jumps steps",
                "A large transaction"
            ],
            answer: 1
        },
        {
            question: "What is the primary goal of Caching in mobile computing?",
            options: [
                "To use more memory",
                "To reduce access latency and bandwidth usage",
                "To increase server load",
                "To slow down the device"
            ],
            answer: 1
        },
        {
            question: "Which strategy is used to maintain cache consistency?",
            options: [
                "Random Deletion",
                "Invalidation Reports",
                "Formatting",
                "Rebooting"
            ],
            answer: 1
        }
    ],
    "V": [
        {
            question: "Which of the following is a characteristic of MANETs?",
            options: [
                "Centralized Administration",
                "Static Topology",
                "Multi-hop Routing",
                "Unlimited Power Supply"
            ],
            answer: 2
        },
        {
            question: "DSDV is an example of which type of routing protocol?",
            options: [
                "Reactive (On-demand)",
                "Proactive (Table-driven)",
                "Hybrid",
                "Static"
            ],
            answer: 1
        },
        {
            question: "Which protocol uses Route Request (RREQ) and Route Reply (RREP) messages on demand?",
            options: [
                "DSDV",
                "AODV",
                "OSPF",
                "BGP"
            ],
            answer: 1
        },
        {
            question: "What is a 'Blackhole Attack' in MANETs?",
            options: [
                "A physical hole in the device",
                "A malicious node drops all packets it receives",
                "A virus",
                "A power failure"
            ],
            answer: 1
        },
        {
            question: "What does DSR stand for?",
            options: [
                "Dynamic Source Routing",
                "Direct Source Routing",
                "Distance Source Routing",
                "Dynamic Static Routing"
            ],
            answer: 0
        },
        {
            question: "Which routing protocol uses a 'Height' metric and is loop-free?",
            options: [
                "AODV",
                "DSR",
                "TORA",
                "DSDV"
            ],
            answer: 2
        },
        {
            question: "What is J2ME primarily used for?",
            options: [
                "Desktop applications",
                "Server-side scripting",
                "Mobile and embedded applications",
                "Web design"
            ],
            answer: 2
        },
        {
            question: "In J2ME, what is a MIDlet?",
            options: [
                "A small device",
                "A Java application for mobile devices",
                "A virus",
                "A database"
            ],
            answer: 1
        },
        {
            question: "What is the 'Wormhole Attack'?",
            options: [
                "Tunneling packets to another location to disrupt routing",
                "Eating data",
                "Creating a loop",
                "Blocking signals"
            ],
            answer: 0
        },
        {
            question: "Which configuration in J2ME is for devices with limited resources (like cell phones)?",
            options: [
                "CDC (Connected Device Configuration)",
                "CLDC (Connected Limited Device Configuration)",
                "J2SE",
                "J2EE"
            ],
            answer: 1
        }
    ]
}
