export const syllabus = [
  {
    unit: "I",
    title: "Introduction to Mobile Computing",
    notes: "<h3>Unit I Overview</h3><p>This unit covers the fundamental paradigms of mobile computing, device architecture, and the GSM standard.</p>",
    topics: [
      {
        title: "Mobile Computing Paradigm",
        content: `
          <div class="study-guide-box">
            <h4>1. Introduction</h4>
            <div class="definition-box">
              <strong>Mobile Computing:</strong> A technology allowing transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link.
            </div>
            
            <h4>2. Paradigm & Architecture</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border-radius:8px;">
                <defs><marker id="arrow-p" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#555"/></marker></defs>
                <rect x="100" y="20" width="200" height="50" rx="5" fill="#e3f2fd" stroke="#1e88e5"/>
                <text x="200" y="50" text-anchor="middle" font-weight="bold" fill="#0d47a1">Mobile Device</text>
                <line x1="200" y1="70" x2="200" y2="110" stroke="#555" stroke-width="2" marker-end="url(#arrow-p)"/>
                <ellipse cx="200" cy="140" rx="120" ry="30" fill="#fff3e0" stroke="#fb8c00"/>
                <text x="200" y="145" text-anchor="middle" fill="#e65100">Wireless Network</text>
                <line x1="200" y1="170" x2="200" y2="210" stroke="#555" stroke-width="2" marker-end="url(#arrow-p)"/>
                <rect x="100" y="210" width="200" height="50" rx="5" fill="#e8f5e9" stroke="#43a047"/>
                <text x="200" y="240" text-anchor="middle" font-weight="bold" fill="#1b5e20">Server / Internet</text>
              </svg>
            </div>

            <h4>3. Promises (Novel Applications)</h4>
            <ul>
              <li><strong>Ubiquity:</strong> Access from anywhere.</li>
              <li><strong>Location Awareness:</strong> GPS-based services (Uber, Maps).</li>
              <li><strong>Adaptation:</strong> Adjusting to bandwidth/context.</li>
            </ul>

            <h4>4. Impediments (Limitations)</h4>
            <ul>
              <li><strong>Bandwidth:</strong> Scarce and expensive.</li>
              <li><strong>Security:</strong> Wireless is easier to eavesdrop.</li>
              <li><strong>Power Consumption:</strong> Battery life constraints.</li>
              <li><strong>Interface:</strong> Small screens and keyboards.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Mobile Devices & Architecture",
        content: `
          <div class="study-guide-box">
            <h4>1. Mobile & Handheld Devices</h4>
            <ul>
              <li><strong>Smartphones:</strong> General purpose (Android/iOS).</li>
              <li><strong>Tablets:</strong> Larger screens, media focus.</li>
              <li><strong>Sensors:</strong> IoT devices, low power.</li>
              <li><strong>Wearables:</strong> Smartwatches, fitness trackers.</li>
            </ul>

            <h4>2. Device Architecture</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ddd; border-radius:8px;">
                <rect x="50" y="20" width="300" height="40" fill="#ffcdd2" stroke="#c62828"/>
                <text x="200" y="45" text-anchor="middle" font-weight="bold">Application Layer</text>
                <rect x="50" y="60" width="300" height="40" fill="#fff9c4" stroke="#fbc02d"/>
                <text x="200" y="85" text-anchor="middle" font-weight="bold">Operating System / Middleware</text>
                <rect x="50" y="100" width="300" height="40" fill="#c8e6c9" stroke="#2e7d32"/>
                <text x="200" y="125" text-anchor="middle" font-weight="bold">Hardware (CPU, Memory)</text>
                <rect x="50" y="140" width="300" height="40" fill="#bbdefb" stroke="#1565c0"/>
                <text x="200" y="165" text-anchor="middle" font-weight="bold">Communication (Radio)</text>
              </svg>
            </div>
          </div>
        `
      },
      {
        title: "GSM Architecture & Services",
        content: `
          <div class="study-guide-box">
            <h4>1. GSM Services</h4>
            <table class="comparison-table">
              <tr><th>Service Type</th><th>Description</th></tr>
              <tr><td><strong>Bearer Services</strong></td><td>Data transmission (SMS, GPRS).</td></tr>
              <tr><td><strong>Tele Services</strong></td><td>Voice calls, Emergency calls.</td></tr>
              <tr><td><strong>Supplementary</strong></td><td>Call forwarding, Call waiting, Caller ID.</td></tr>
            </table>

            <h4>2. System Architecture</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px;">
                <defs><marker id="arrow-gsm" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker></defs>
                <rect x="20" y="120" width="60" height="80" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                <text x="50" y="165" text-anchor="middle" font-weight="bold">MS</text>
                <rect x="120" y="50" width="160" height="200" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5"/>
                <text x="200" y="70" text-anchor="middle" fill="#666">BSS</text>
                <rect x="140" y="100" width="50" height="60" fill="#bbdefb" stroke="#1976d2"/>
                <text x="165" y="135" text-anchor="middle" font-size="12">BTS</text>
                <rect x="210" y="100" width="50" height="60" fill="#bbdefb" stroke="#1976d2"/>
                <text x="235" y="135" text-anchor="middle" font-size="12">BSC</text>
                <rect x="320" y="20" width="260" height="260" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5"/>
                <text x="450" y="40" text-anchor="middle" fill="#666">NSS</text>
                <rect x="340" y="100" width="60" height="60" fill="#c8e6c9" stroke="#388e3c"/>
                <text x="370" y="135" text-anchor="middle" font-weight="bold">MSC</text>
                <rect x="450" y="60" width="50" height="40" fill="#fff9c4" stroke="#fbc02d"/><text x="475" y="85" text-anchor="middle" font-size="12">HLR</text>
                <rect x="450" y="110" width="50" height="40" fill="#fff9c4" stroke="#fbc02d"/><text x="475" y="135" text-anchor="middle" font-size="12">VLR</text>
                <line x1="80" y1="160" x2="140" y2="130" stroke="#333" marker-end="url(#arrow-gsm)"/>
                <line x1="260" y1="130" x2="340" y2="130" stroke="#333" marker-end="url(#arrow-gsm)"/>
              </svg>
            </div>
          </div>
        `
      },
      {
        title: "GSM Protocols, Localization & Handover",
        content: `
          <div class="study-guide-box">
            <h4>1. Localization & Calling</h4>
            <p><strong>Localization:</strong> The network tracks the user via periodic updates to the HLR/VLR.</p>
            <p><strong>MTC (Mobile Terminated Call):</strong> PSTN -> GMSC -> HLR (finds VLR) -> VLR (assigns MSRN) -> MSC -> BTS -> Mobile.</p>

            <h4>2. Handover</h4>
            <p>Switching the call from one channel/cell to another to maintain continuity.</p>
            <ul>
              <li><strong>Intra-cell:</strong> Change frequency in same cell (interference).</li>
              <li><strong>Inter-cell, Intra-BSC:</strong> Move to new cell, same controller.</li>
              <li><strong>Inter-BSC:</strong> Move to new controller.</li>
              <li><strong>Inter-MSC:</strong> Move to new switch (complex).</li>
            </ul>

            <h4>3. Security</h4>
            <ul>
              <li><strong>Authentication:</strong> Challenge-Response using Ki and A3 algorithm.</li>
              <li><strong>Encryption:</strong> Voice encryption using A5 algorithm.</li>
              <li><strong>Anonymity:</strong> Using TMSI (Temporary ID) instead of IMSI.</li>
            </ul>
          </div>
        `
      },
      {
        title: "GPRS, CSHSD & DECT",
        content: `
          <div class="study-guide-box">
            <h4>1. GPRS (General Packet Radio Service)</h4>
            <p>Upgrade to GSM for packet data. Always-on connection. Uses <strong>SGSN</strong> (Serving GPRS Support Node) and <strong>GGSN</strong> (Gateway GPRS Support Node).</p>

            <h4>2. CSHSD (Circuit Switched High Speed Data)</h4>
            <p>Enhancement to standard GSM data. Allocates multiple time slots to a single user to increase speed (up to 57.6 kbps).</p>

            <h4>3. DECT (Digital Enhanced Cordless Telecommunications)</h4>
            <p>Standard for cordless phones. High capacity in small areas (homes/offices). Uses FDMA/TDMA/TDD.</p>
          </div>
        `
      }
    ]
  },
  {
    unit: "II",
    title: "Wireless MAC & Mobile Network Layer",
    notes: "<h3>Unit II Overview</h3><p>Focuses on accessing the shared medium (MAC) and routing packets to mobile nodes (Mobile IP).</p>",
    topics: [
      {
        title: "Motivation for Specialized MAC",
        content: `
          <div class="study-guide-box">
            <h4>Why not CSMA/CD?</h4>
            <p>Standard Ethernet MAC doesn't work because collision detection is impossible in wireless (signal fading).</p>

            <h4>1. Hidden & Exposed Terminals</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:8px;">
                <circle cx="100" cy="75" r="20" fill="#2196f3"/><text x="100" y="80" text-anchor="middle" fill="white">A</text>
                <circle cx="250" cy="75" r="20" fill="#4caf50"/><text x="250" y="80" text-anchor="middle" fill="white">B</text>
                <circle cx="400" cy="75" r="20" fill="#f44336"/><text x="400" y="80" text-anchor="middle" fill="white">C</text>
                <text x="250" y="120" text-anchor="middle" fill="#d32f2f" font-weight="bold">Hidden Terminal Problem</text>
                <text x="250" y="140" text-anchor="middle" font-size="12">A & C transmit to B simultaneously -> Collision</text>
              </svg>
            </div>

            <h4>2. Near and Far Terminals</h4>
            <p>A strong signal from a nearby node drowns out a weak signal from a far node. Requires power control.</p>
          </div>
        `
      },
      {
        title: "MAC Protocols (SDMA, FDMA, TDMA, CDMA)",
        content: `
          <div class="study-guide-box">
            <h4>Multiplexing Techniques</h4>
            <table class="comparison-table">
              <tr><th>Technique</th><th>Concept</th><th>Pros/Cons</th></tr>
              <tr><td><strong>SDMA</strong></td><td>Space Division (Sectorized Antennas).</td><td>High reuse, complex HW.</td></tr>
              <tr><td><strong>FDMA</strong></td><td>Frequency Division (Distinct bands).</td><td>Simple, inflexible.</td></tr>
              <tr><td><strong>TDMA</strong></td><td>Time Division (Time slots).</td><td>Flexible, sync required.</td></tr>
              <tr><td><strong>CDMA</strong></td><td>Code Division (Orthogonal codes).</td><td>Secure, complex power control.</td></tr>
            </table>
          </div>
        `
      },
      {
        title: "Wireless LAN (IEEE 802.11)",
        content: `
          <div class="study-guide-box">
            <h4>IEEE 802.11 Architecture</h4>
            <ul>
              <li><strong>Infrastructure Mode:</strong> Devices connect via Access Point (AP).</li>
              <li><strong>Ad-hoc Mode:</strong> Devices connect directly.</li>
            </ul>
            <h4>Protocol: CSMA/CA</h4>
            <p>Carrier Sense Multiple Access with Collision Avoidance. Uses <strong>RTS/CTS</strong> (Request to Send / Clear to Send) to solve hidden node problem.</p>
          </div>
        `
      },
      {
        title: "Mobile IP Network Layer",
        content: `
          <div class="study-guide-box">
            <h4>1. Goal</h4>
            <p>Allow a device to keep its IP address while moving across networks.</p>

            <h4>2. Entities & Architecture</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" style="background:#e0f7fa; border-radius:8px;">
                <rect x="50" y="50" width="150" height="100" rx="10" fill="white" stroke="#00bcd4"/>
                <text x="125" y="80" text-anchor="middle" fill="#00bcd4">Home Network</text>
                <rect x="90" y="90" width="70" height="40" fill="#00bcd4"/><text x="125" y="115" text-anchor="middle" fill="white">HA</text>
                <rect x="400" y="50" width="150" height="100" rx="10" fill="white" stroke="#ff9800"/>
                <text x="475" y="80" text-anchor="middle" fill="#ff9800">Foreign Network</text>
                <rect x="440" y="90" width="70" height="40" fill="#ff9800"/><text x="475" y="115" text-anchor="middle" fill="white">FA</text>
                <circle cx="475" cy="200" r="20" fill="#9c27b0"/><text x="475" y="205" text-anchor="middle" fill="white" font-size="10">MN</text>
                <path d="M 160 110 Q 300 20 440 110" stroke="#006064" stroke-width="3" stroke-dasharray="5,5" fill="none"/>
                <text x="300" y="50" text-anchor="middle" fill="#006064" font-weight="bold">Tunnel</text>
              </svg>
            </div>
          </div>
        `
      },
      {
        title: "Packet Delivery & Handover Management",
        content: `
          <div class="study-guide-box">
            <h4>1. Packet Delivery</h4>
            <p>CN -> HA -> Tunnel -> FA -> MN. Reverse path is usually direct (Triangular Routing).</p>

            <h4>2. Registration</h4>
            <p>MN registers its new CoA (Care-of Address) with the HA via the FA.</p>

            <h4>3. Tunneling & Encapsulation</h4>
            <p><strong>IP-in-IP Encapsulation:</strong> The original IP packet is wrapped inside a new IP packet destined for the CoA.</p>
          </div>
        `
      },
      {
        title: "Optimization & DHCP",
        content: `
          <div class="study-guide-box">
            <h4>1. Route Optimization</h4>
            <p>Solves Triangular Routing. The CN learns the current CoA of the MN and sends packets directly, bypassing the HA (requires updates to CN).</p>

            <h4>2. DHCP (Dynamic Host Configuration Protocol)</h4>
            <p>Used to automatically assign a CoA to the MN when it enters a foreign network.</p>
          </div>
        `
      }
    ]
  },
  {
    unit: "III",
    title: "Mobile Transport Layer & Database Issues",
    notes: "<h3>Unit III Overview</h3><p>Transport layer adaptations for wireless and data management strategies.</p>",
    topics: [
      {
        title: "Mobile Transport Layer (TCP)",
        content: `
          <div class="study-guide-box">
            <h4>1. Conventional TCP Issues</h4>
            <p>Designed for wired networks. Interprets packet loss as congestion. In wireless, loss is due to noise/handover. TCP slows down unnecessarily.</p>

            <h4>2. Indirect TCP (I-TCP)</h4>
            <p>Splits connection at the Base Station. Standard TCP on fixed link, Wireless TCP on mobile link. <strong>Pros:</strong> Isolation. <strong>Cons:</strong> Loss of end-to-end semantics.</p>

            <h4>3. Snooping TCP</h4>
            <p>BS buffers packets and retransmits locally if loss is detected. <strong>Pros:</strong> Maintains semantics. <strong>Cons:</strong> Fails with encryption.</p>

            <h4>4. Mobile TCP (M-TCP)</h4>
            <p>Handles frequent disconnections. Freezes the sender's window (Persist Mode) during disconnection.</p>
          </div>
        `
      },
      {
        title: "Database Hoarding & Caching",
        content: `
          <div class="study-guide-box">
            <h4>1. Hoarding</h4>
            <p>Predictively downloading data before disconnection (e.g., downloading map area before entering tunnel).</p>

            <h4>2. Caching Techniques</h4>
            <p>Storing frequently accessed data on the mobile device to reduce latency and bandwidth usage. Requires cache invalidation strategies.</p>
            <div class="diagram-container">
              <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="background:#f1f8e9; border-radius:8px;">
                 <rect x="100" y="20" width="100" height="40" fill="#4caf50"/><text x="150" y="45" text-anchor="middle" fill="white">Server DB</text>
                 <line x1="150" y1="60" x2="150" y2="100" stroke="#333" marker-end="url(#arrow-p)"/>
                 <rect x="80" y="100" width="140" height="40" fill="#c5e1a5"/><text x="150" y="125" text-anchor="middle" fill="#333">Mobile Cache</text>
              </svg>
            </div>
          </div>
        `
      },
      {
        title: "Transactional Models & QoS",
        content: `
          <div class="study-guide-box">
            <h4>1. Transactional Models</h4>
            <p>ACID properties are hard to maintain in mobile.</p>
            <ul>
              <li><strong>Kangaroo Transactions:</strong> Transaction moves with the user across base stations.</li>
              <li><strong>Tentative Transactions:</strong> Local commit, verified later with server.</li>
            </ul>

            <h4>2. Query Processing</h4>
            <p>Optimizing queries for low bandwidth and high latency.</p>

            <h4>3. QoS (Quality of Service)</h4>
            <p>Managing resources to guarantee performance (bandwidth, delay, jitter) for applications like VoIP.</p>
          </div>
        `
      }
    ]
  },
  {
    unit: "IV",
    title: "Data Dissemination & Synchronization",
    notes: "<h3>Unit IV Overview</h3><p>Mechanisms for delivering data and keeping it consistent.</p>",
    topics: [
      {
        title: "Data Dissemination",
        content: `
          <div class="study-guide-box">
            <h4>1. Communications Asymmetry</h4>
            <p>Downlink (Server to Mobile) bandwidth is much higher than Uplink (Mobile to Server).</p>

            <h4>2. Classification of Delivery Mechanisms</h4>
            <ul>
              <li><strong>Push (Broadcast):</strong> Server sends to all. Scalable.</li>
              <li><strong>Pull (On-Demand):</strong> Client requests. Personalized.</li>
              <li><strong>Hybrid:</strong> Combination.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Broadcast Models & Selective Tuning",
        content: `
          <div class="study-guide-box">
            <h4>1. Broadcast Models</h4>
            <ul>
              <li><strong>Flat:</strong> Data sent sequentially.</li>
              <li><strong>Hash-based:</strong> Uses hashing for location.</li>
              <li><strong>Index-based:</strong> Directory sent first.</li>
            </ul>

            <h4>2. Selective Tuning</h4>
            <p>Technique to save battery. Device wakes up only when desired data is broadcast.</p>
            <p><strong>Indexing:</strong> Server sends an index. Client reads index, sleeps, and wakes up exactly when data arrives.</p>
          </div>
        `
      },
      {
        title: "Data Synchronization",
        content: `
          <div class="study-guide-box">
            <h4>1. Introduction</h4>
            <p>Process of making two datasets identical (Mobile & Server).</p>

            <h4>2. Protocols & Software</h4>
            <ul>
              <li><strong>SyncML:</strong> Industry standard XML-based protocol.</li>
              <li><strong>HotSync:</strong> Palm OS protocol.</li>
              <li><strong>ActiveSync:</strong> Microsoft protocol.</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    unit: "V",
    title: "Mobile Ad-hoc Networks (MANETs)",
    notes: "<h3>Unit V Overview</h3><p>Decentralized networks where every node is a router.</p>",
    topics: [
      {
        title: "MANET Introduction",
        content: `
          <div class="study-guide-box">
            <h4>1. Definition</h4>
            <p>Infrastructure-less network. Nodes move and configure themselves dynamically.</p>

            <h4>2. Applications</h4>
            <p>Military (Battlefield), Disaster Relief (No towers), Sensor Networks, VANETs (Vehicles).</p>

            <h4>3. Challenges</h4>
            <p>Dynamic Topology, Limited Battery, Security, Routing Overhead, Hidden Terminal.</p>
          </div>
        `
      },
      {
        title: "Routing Algorithms Classification",
        content: `
          <div class="study-guide-box">
            <h4>Classification</h4>
            <div class="diagram-container">
              <svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" style="background:#e8f5e9; border-radius:8px;">
                <rect x="200" y="20" width="100" height="30" fill="#2e7d32"/><text x="250" y="40" text-anchor="middle" fill="white">Routing</text>
                <line x1="250" y1="50" x2="100" y2="80" stroke="#333"/>
                <line x1="250" y1="50" x2="250" y2="80" stroke="#333"/>
                <line x1="250" y1="50" x2="400" y2="80" stroke="#333"/>
                <rect x="50" y="80" width="100" height="30" fill="#43a047"/><text x="100" y="100" text-anchor="middle" fill="white">Proactive</text>
                <rect x="200" y="80" width="100" height="30" fill="#43a047"/><text x="250" y="100" text-anchor="middle" fill="white">Reactive</text>
                <rect x="350" y="80" width="100" height="30" fill="#43a047"/><text x="400" y="100" text-anchor="middle" fill="white">Hybrid</text>
              </svg>
            </div>
          </div>
        `
      },
      {
        title: "Specific Routing Protocols",
        content: `
          <div class="study-guide-box">
            <h4>1. DSDV (Destination-Sequenced Distance-Vector)</h4>
            <p><strong>Proactive.</strong> Table-driven. Uses sequence numbers to avoid loops. High overhead.</p>

            <h4>2. DSR (Dynamic Source Routing)</h4>
            <p><strong>Reactive.</strong> Source routing (full path in header). No periodic updates. High header overhead.</p>

            <h4>3. AODV (Ad-hoc On-demand Distance Vector)</h4>
            <p><strong>Reactive.</strong> Hop-by-hop routing. Uses RREQ (Request) and RREP (Reply). Industry standard.</p>
          </div>
        `
      },
      {
        title: "Mobile Agents & Service Discovery",
        content: `
          <div class="study-guide-box">
            <h4>1. Mobile Agents</h4>
            <p>Code that moves from node to node to perform tasks (e.g., collecting data, negotiating). Saves bandwidth by moving computation to data.</p>

            <h4>2. Service Discovery</h4>
            <p>Mechanism to find services (printers, gateways) in a dynamic network without a central server. Examples: Jini, UPnP.</p>
          </div>
        `
      }
    ]
  }
];
