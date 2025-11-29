export const syllabus = [
    {
        unit: "I",
        title: "Introduction to Mobile Computing",
        notes: "<h3>Unit I Overview</h3><p>This unit provides a foundational understanding of Mobile Computing, distinguishing it from wireless networking, and diving deep into the GSM architecture, a cornerstone of mobile communications.</p>",
        topics: [
            {
                title: "Introduction to Mobile Computing",
                content: `
          <div class="study-guide-box">
            <h4>1. Definition & Core Concepts</h4>
            <div class="definition-box">
              <strong>Mobile Computing:</strong> A technology that allows transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link. It involves mobile communication, mobile hardware, and mobile software.
            </div>
            
            <h5>Three Dimensions of Mobile Computing:</h5>
            <ul>
              <li><strong>Ubiquity:</strong> Ability to access information from anywhere.</li>
              <li><strong>Convenience:</strong> Devices are portable and easy to use.</li>
              <li><strong>Connectivity:</strong> Continuous access to the network.</li>
            </ul>

            <h4>2. Mobile Computing vs Wireless Networking</h4>
            <table class="comparison-table">
              <tr>
                <th>Feature</th>
                <th>Mobile Computing</th>
                <th>Wireless Networking</th>
              </tr>
              <tr>
                <td><strong>Focus</strong></td>
                <td>User's ability to compute while moving.</td>
                <td>Method of communication without wires.</td>
              </tr>
              <tr>
                <td><strong>Dependency</strong></td>
                <td>Relies on wireless networking.</td>
                <td>Can exist without mobile computing (e.g., fixed wireless).</td>
              </tr>
              <tr>
                <td><strong>Example</strong></td>
                <td>Working on a laptop in a train.</td>
                <td>Connecting a printer via Wi-Fi.</td>
              </tr>
            </table>
          </div>
        `
            },
            {
                title: "Architecture of Mobile Computing",
                content: `
          <div class="study-guide-box">
            <h4>3-Tier Architecture</h4>
            <p>Mobile computing applications typically follow a 3-tier architecture to separate concerns and ensure scalability.</p>
            
            <div class="concept-grid">
              <div class="concept-card">
                <h5>1. Presentation Tier (Client)</h5>
                <p><strong>Role:</strong> User Interface (UI) and user interaction.</p>
                <p><strong>Components:</strong> Mobile devices (Smartphones, Tablets), Browsers, Native Apps.</p>
                <p><strong>Key Task:</strong> Rendering data and capturing user input.</p>
              </div>
              <div class="concept-card">
                <h5>2. Application Tier (Middle)</h5>
                <p><strong>Role:</strong> Business logic and processing.</p>
                <p><strong>Components:</strong> Web Servers (Apache, IIS), App Servers (Tomcat, Node.js).</p>
                <p><strong>Key Task:</strong> Processing requests, decision making, formatting data for client.</p>
              </div>
              <div class="concept-card">
                <h5>3. Data Tier (Server)</h5>
                <p><strong>Role:</strong> Data storage and management.</p>
                <p><strong>Components:</strong> Databases (SQL, NoSQL), Legacy Systems.</p>
                <p><strong>Key Task:</strong> Storing, retrieving, and maintaining data integrity.</p>
              </div>
            </div>
          </div>
        `
            },
            {
                title: "GSM Architecture",
                content: `
          <div class="study-guide-box">
            <h4>Global System for Mobile Communications (GSM)</h4>
            <p>GSM is a digital mobile network that is widely used by mobile phone users. It uses a variation of Time Division Multiple Access (TDMA).</p>
            
            <div class="deep-dive-box">
              <h5>Key Subsystems</h5>
              <ul>
                <li><strong>Mobile Station (MS):</strong> The user's device (Phone + SIM).
                  <ul>
                    <li><strong>ME (Mobile Equipment):</strong> The hardware (IMEI).</li>
                    <li><strong>SIM (Subscriber Identity Module):</strong> Stores user data (IMSI, Ki).</li>
                  </ul>
                </li>
                <li><strong>Base Station Subsystem (BSS):</strong> Controls the radio link.
                  <ul>
                    <li><strong>BTS (Base Transceiver Station):</strong> The radio tower. Handles radio signals.</li>
                    <li><strong>BSC (Base Station Controller):</strong> Manages multiple BTSs, handovers, and frequency hopping.</li>
                  </ul>
                </li>
                <li><strong>Network Switching Subsystem (NSS):</strong> The core network.
                  <ul>
                    <li><strong>MSC (Mobile Switching Center):</strong> The brain. Handles call routing and switching.</li>
                    <li><strong>HLR (Home Location Register):</strong> Database of permanent subscriber info.</li>
                    <li><strong>VLR (Visitor Location Register):</strong> Database of currently roaming users.</li>
                    <li><strong>AuC (Authentication Center):</strong> Handles security and encryption keys.</li>
                    <li><strong>EIR (Equipment Identity Register):</strong> Tracks stolen devices (White/Grey/Black lists).</li>
                  </ul>
                </li>
                <li><strong>Operation Support Subsystem (OSS):</strong> Network management and maintenance.</li>
              </ul>
            </div>
            
            <h5>GSM Interfaces:</h5>
            <ul>
              <li><strong>Um Interface:</strong> Air interface between MS and BTS.</li>
              <li><strong>Abis Interface:</strong> Between BTS and BSC.</li>
              <li><strong>A Interface:</strong> Between BSC and MSC.</li>
            </ul>
          </div>
        `
            },
            {
                title: "GSM Call Routing",
                content: `
          <div class="study-guide-box">
            <h4>Call Routing Scenarios</h4>
            
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Mobile Originating (MO) Call</h5>
                <ol>
                  <li><strong>Request:</strong> MS sends request to BSS (BTS -> BSC).</li>
                  <li><strong>Forward:</strong> BSS forwards to MSC.</li>
                  <li><strong>Auth:</strong> MSC/VLR authenticates user with HLR/AuC.</li>
                  <li><strong>Setup:</strong> MSC routes call to GMSC or PSTN.</li>
                  <li><strong>Connect:</strong> Connection established.</li>
                </ol>
              </div>
              <div class="concept-card">
                <h5>Mobile Terminating (MT) Call</h5>
                <ol>
                  <li><strong>Entry:</strong> Call enters GMSC from PSTN.</li>
                  <li><strong>Query:</strong> GMSC queries HLR for user location (MSRN).</li>
                  <li><strong>Route:</strong> HLR asks VLR for MSRN. VLR returns MSRN to HLR -> GMSC.</li>
                  <li><strong>Forward:</strong> GMSC routes call to current MSC.</li>
                  <li><strong>Page:</strong> MSC pages the MS via BSS.</li>
                  <li><strong>Connect:</strong> MS answers.</li>
                </ol>
              </div>
            </div>
            
            <div class="key-takeaway">
              <strong>MSRN (Mobile Station Roaming Number):</strong> A temporary number assigned by the VLR to route a call to a roaming subscriber. It is released after the call is set up.
            </div>
          </div>
        `
            },
            {
                title: "Applications & Limitations",
                content: `
          <div class="study-guide-box">
            <h4>Applications of Mobile Computing</h4>
            <ul>
              <li><strong>Vehicles:</strong> GPS, music, news, vehicle diagnosis.</li>
              <li><strong>Emergencies:</strong> Ambulances, police, fire squads (ad-hoc networks).</li>
              <li><strong>Business:</strong> Mobile sales, inventory management, instant access to corporate data.</li>
              <li><strong>Infotainment:</strong> Travel guides, location-based services, streaming.</li>
            </ul>
            
            <h4>Limitations</h4>
            <div class="deep-dive-box">
              <ul>
                <li><strong>Resource Constraints:</strong> Limited battery, processing power, and memory compared to desktops.</li>
                <li><strong>Bandwidth:</strong> Wireless networks have lower bandwidth and higher latency than wired networks.</li>
                <li><strong>Security:</strong> Wireless signals are easier to intercept; devices are prone to theft.</li>
                <li><strong>Interference:</strong> Signal quality affected by weather, obstacles, and distance.</li>
              </ul>
            </div>
          </div>
        `
            }
        ]
    },
    {
        unit: "II",
        title: "Wireless Medium Access Control and Mobile Network Layer",
        notes: "<h3>Unit II Overview</h3><p>This unit delves into how multiple users share the wireless medium (MAC) and how mobile devices maintain connectivity while moving across networks (Mobile IP).</p>",
        topics: [
            {
                title: "Medium Access Control (MAC)",
                content: `
          <div class="study-guide-box">
            <h4>Why Special MAC?</h4>
            <p>Wireless medium is shared and prone to collisions. Standard Ethernet (CSMA/CD) doesn't work well due to:</p>
            <ul>
              <li><strong>Hidden Terminal Problem:</strong> A and C want to send to B. A can't hear C, so they collide at B.</li>
              <li><strong>Exposed Terminal Problem:</strong> B sending to A. C wants to send to D. C hears B and waits unnecessarily.</li>
            </ul>
            
            <h4>Multiplexing Techniques</h4>
            <div class="concept-grid">
              <div class="concept-card">
                <h5>SDMA (Space)</h5>
                <p>Segment space into sectors (e.g., directional antennas). Reuse frequencies in different spaces.</p>
              </div>
              <div class="concept-card">
                <h5>FDMA (Frequency)</h5>
                <p>Split spectrum into frequency bands. Each user gets a band. (e.g., Radio stations).</p>
              </div>
              <div class="concept-card">
                <h5>TDMA (Time)</h5>
                <p>Split time into slots. Users take turns. (e.g., GSM).</p>
              </div>
              <div class="concept-card">
                <h5>CDMA (Code)</h5>
                <p>Spread spectrum. Users use unique codes. Can transmit at same time/freq. (e.g., 3G).</p>
              </div>
            </div>
          </div>
        `
            },
            {
                title: "Mobile IP",
                content: `
          <div class="study-guide-box">
            <h4>The Problem</h4>
            <p>Standard IP assumes a device's IP address is fixed to a physical network location. If you move, your IP changes, breaking connections.</p>
            
            <h4>Mobile IP Solution</h4>
            <p>Allows a Mobile Node (MN) to keep its Home Address (HoA) while moving.</p>
            
            <div class="definition-box">
              <h5>Key Entities</h5>
              <ul>
                <li><strong>Mobile Node (MN):</strong> The device moving.</li>
                <li><strong>Home Agent (HA):</strong> Router on home network. Forwards packets to MN.</li>
                <li><strong>Foreign Agent (FA):</strong> Router on visited network. Provides Care-of-Address (CoA).</li>
                <li><strong>Care-of-Address (CoA):</strong> Temporary address on the foreign network.</li>
              </ul>
            </div>
            
            <h5>Process:</h5>
            <ol>
              <li><strong>Agent Discovery:</strong> MN finds FA.</li>
              <li><strong>Registration:</strong> MN registers CoA with HA.</li>
              <li><strong>Tunneling:</strong> HA intercepts packets for MN, encapsulates them, and tunnels to CoA.</li>
              <li><strong>Delivery:</strong> FA decapsulates and delivers to MN.</li>
            </ol>
          </div>
        `
            },
            {
                title: "Mobile IP Optimizations",
                content: `
          <div class="study-guide-box">
            <h4>Inefficiency: Triangular Routing</h4>
            <p>Packets from Correspondent Node (CN) go to HA -> FA -> MN. But MN sends directly to CN. This "triangle" adds latency.</p>
            
            <h4>Optimization: Route Optimization</h4>
            <p>CN learns the current CoA of the MN and sends packets directly (bypassing HA).</p>
            
            <h4>DHCP (Dynamic Host Configuration Protocol)</h4>
            <p>Used to automatically assign IP addresses (and CoAs) to devices joining a network.</p>
          </div>
        `
            }
        ]
    },
    {
        unit: "III",
        title: "Mobile Transport Layer",
        notes: "<h3>Unit III Overview</h3><p>Standard TCP performs poorly in wireless environments due to packet loss being misinterpreted as congestion. This unit explores modifications to TCP for mobile networks.</p>",
        topics: [
            {
                title: "Traditional TCP Issues",
                content: `
          <div class="study-guide-box">
            <h4>Congestion Control vs Wireless Loss</h4>
            <p><strong>Wired Networks:</strong> Packet loss = Congestion. Solution: Slow down (reduce window).</p>
            <p><strong>Wireless Networks:</strong> Packet loss = Interference/Handover. Solution: Retransmit immediately (don't slow down).</p>
            <p><strong>Problem:</strong> Standard TCP assumes all loss is congestion, so it slows down unnecessarily on wireless links, killing performance.</p>
          </div>
        `
            },
            {
                title: "TCP Improvements",
                content: `
          <div class="study-guide-box">
            <h4>Indirect TCP (I-TCP)</h4>
            <p>Splits connection into two: Fixed (CN to BS) and Wireless (BS to MN). BS acts as proxy.</p>
            <ul>
              <li><strong>Pros:</strong> Isolates wireless problems.</li>
              <li><strong>Cons:</strong> Breaks end-to-end semantics. BS crash = lost data.</li>
            </ul>
            
            <h4>Snooping TCP</h4>
            <p>BS "snoops" on packets. Buffers packets. If loss detected on wireless, BS retransmits locally (transparent to CN).</p>
            <ul>
              <li><strong>Pros:</strong> Maintains end-to-end semantics.</li>
              <li><strong>Cons:</strong> Doesn't work with encryption (can't snoop).</li>
            </ul>
            
            <h4>Mobile TCP (M-TCP)</h4>
            <p>Handles frequent disconnections. If disconnection detected, set window size to 0 (persist mode) to pause sender, rather than dropping window.</p>
          </div>
        `
            },
            {
                title: "Other TCP Variants",
                content: `
          <div class="study-guide-box">
            <h4>Fast Retransmit / Fast Recovery</h4>
            <p>Retransmit after 3 duplicate ACKs instead of waiting for timeout.</p>
            
            <h4>Transmission / Time-out Freezing</h4>
            <p>Freeze TCP state during handover to prevent timeout.</p>
            
            <h4>Selective Retransmission</h4>
            <p>SACK (Selective ACK). Retransmit <em>only</em> the lost packets, not everything after.</p>
            
            <h4>Transaction Oriented TCP (T-TCP)</h4>
            <p>Optimized for short transactions (overhead reduction). Combines connection setup, data, and teardown.</p>
          </div>
        `
            }
        ]
    },
    {
        unit: "IV",
        title: "Data Dissemination and Synchronization",
        notes: "<h3>Unit IV Overview</h3><p>Focuses on how data is delivered efficiently to mobile devices (Push vs Pull) and how data consistency is maintained (Synchronization).</p>",
        topics: [
            {
                title: "Data Dissemination",
                content: `
          <div class="study-guide-box">
            <h4>Communications Asymmetry</h4>
            <p>Downlink (Server -> Mobile) bandwidth is usually much higher than Uplink (Mobile -> Server).</p>
            
            <h4>Delivery Mechanisms</h4>
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Push (Broadcast)</h5>
                <p>Server sends data without request. Good for popular data (News, Stock tickers).</p>
              </div>
              <div class="concept-card">
                <h5>Pull (On-Demand)</h5>
                <p>Client requests specific data. Good for personal data (Email, Bank balance).</p>
              </div>
              <div class="concept-card">
                <h5>Hybrid</h5>
                <p>Combine both. Push popular data, Pull specific data.</p>
              </div>
            </div>
          </div>
        `
            },
            {
                title: "Broadcast Models & Tuning",
                content: `
          <div class="study-guide-box">
            <h4>Selective Tuning</h4>
            <p>Mobile devices want to save battery. They shouldn't wake up for every packet.</p>
            <p><strong>Indexing:</strong> Add a directory at the start of a broadcast cycle. Client reads index, sleeps, and wakes up exactly when its data arrives.</p>
            
            <h4>Digital Audio/Video Broadcasting (DAB/DVB)</h4>
            <p>Standards for broadcasting digital media. DVB-H (Handheld) is optimized for mobile TV.</p>
          </div>
        `
            },
            {
                title: "Data Synchronization",
                content: `
          <div class="study-guide-box">
            <h4>The Challenge</h4>
            <p>Mobile devices work offline. Data on device (replica) changes. Data on server (master) changes. How to reconcile?</p>
            
            <h4>Synchronization Protocols</h4>
            <ul>
              <li><strong>Slow Sync:</strong> Compare all records. Safe but slow.</li>
              <li><strong>Fast Sync:</strong> Compare only modified records since last sync.</li>
            </ul>
            
            <div class="definition-box">
              <strong>SyncML:</strong> An industry-standard protocol for platform-independent data synchronization.
            </div>
          </div>
        `
            }
        ]
    },
    {
        unit: "V",
        title: "Mobile Ad-hoc Networks (MANETs)",
        notes: "<h3>Unit V Overview</h3><p>Introduction to decentralized wireless networks where devices form the network themselves without infrastructure (routers/towers).</p>",
        topics: [
            {
                title: "MANET Basics",
                content: `
          <div class="study-guide-box">
            <h4>Definition</h4>
            <div class="definition-box">
              <strong>MANET:</strong> A collection of mobile nodes forming a temporary network without the aid of any centralized administration or standard support services.
            </div>
            
            <h5>Characteristics:</h5>
            <ul>
              <li>Dynamic Topology (Nodes move constantly).</li>
              <li>Multi-hop routing (Nodes act as routers).</li>
              <li>Energy constrained.</li>
              <li>Limited security.</li>
            </ul>
            
            <p><strong>Applications:</strong> Military battlefields, Disaster relief (no towers), Sensor networks.</p>
          </div>
        `
            },
            {
                title: "Routing Protocols",
                content: `
          <div class="study-guide-box">
            <h4>Classification</h4>
            
            <div class="concept-grid">
              <div class="concept-card">
                <h5>Proactive (Table-Driven)</h5>
                <p>Maintain routes to <em>all</em> nodes at all times. Low latency, high overhead.</p>
                <p><strong>Examples:</strong> DSDV (Destination Sequenced Distance Vector), WRP.</p>
              </div>
              <div class="concept-card">
                <h5>Reactive (On-Demand)</h5>
                <p>Find route only when needed. High latency (initial), low overhead.</p>
                <p><strong>Examples:</strong> DSR (Dynamic Source Routing), AODV (Ad-hoc On-demand Distance Vector).</p>
              </div>
              <div class="concept-card">
                <h5>Hybrid</h5>
                <p>Combine both. Proactive for local, Reactive for distant.</p>
                <p><strong>Example:</strong> ZRP (Zone Routing Protocol).</p>
              </div>
            </div>
          </div>
        `
            },
            {
                title: "Specific Protocols",
                content: `
          <div class="study-guide-box">
            <h4>DSDV (Proactive)</h4>
            <p>Based on Bellman-Ford. Adds sequence numbers to avoid routing loops.</p>
            
            <h4>DSR (Reactive)</h4>
            <p>Source Routing. The sender puts the full path in the packet header. Route Discovery (RREQ, RREP) and Route Maintenance.</p>
            
            <h4>AODV (Reactive)</h4>
            <p>Like DSR but uses hop-by-hop routing (routing tables) instead of source routing. Uses sequence numbers like DSDV.</p>
          </div>
        `
            }
        ]
    }
];
