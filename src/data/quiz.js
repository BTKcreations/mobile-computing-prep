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
        }
    ]
}
