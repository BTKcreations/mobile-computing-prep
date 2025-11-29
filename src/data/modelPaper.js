export const modelPaper = {
  title: "B.Tech IV Year I Semester Regular Examinations",
  subject: "MOBILE COMPUTING",
  time: "3 Hours",
  maxMarks: 75,
  partA: [
    // Unit I
    { unit: "I", id: 1, question: "Define Mobile Computing.", answer: "<strong>Definition:</strong> Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless enabled device without having to be connected to a fixed physical link." },
    { unit: "I", id: 2, question: "List the limitations of Mobile Devices.", answer: "<strong>Limitations:</strong><br/>1. <strong>Resource constraints:</strong> Limited Battery life and Memory.<br/>2. <strong>Small screen size:</strong> Affects user interface design.<br/>3. <strong>Lower bandwidth:</strong> Compared to wired networks.<br/>4. <strong>Security risks:</strong> Prone to eavesdropping and theft." },
    // Unit II
    { unit: "II", id: 3, question: "What is the Hidden Terminal Problem?", answer: "<strong>Explanation:</strong> It occurs when a terminal is visible from a wireless access point (AP), but is invisible from other nodes communicating with that AP. This leads to collisions at the AP because the hidden nodes cannot sense each other's transmissions." },
    { unit: "II", id: 4, question: "Define Care-of Address (CoA).", answer: "<strong>Definition:</strong> CoA is a temporary IP address assigned to a mobile node while it is visiting a foreign network. It marks the mobile node's current location and is used for packet delivery via tunneling." },
    // Unit III
    { unit: "III", id: 5, question: "What is Snooping TCP?", answer: "<strong>Concept:</strong> Snooping TCP is a technique where the Base Station buffers packets and performs local retransmissions upon detecting packet loss on the wireless link, effectively hiding these errors from the sender to prevent unnecessary congestion control." },
    { unit: "III", id: 6, question: "Define Database Hoarding.", answer: "<strong>Definition:</strong> Database Hoarding (or prefetching) is the process of downloading data that a user is likely to need in the future, before the device disconnects from the network, to support disconnected operations." },
    // Unit IV
    { unit: "IV", id: 7, question: "Differentiate between Push and Pull mechanisms.", answer: "<strong>Push:</strong> Server sends data without request (e.g., TV). Best for popular data.<br/><strong>Pull:</strong> Client explicitly requests data (e.g., Web browsing). Best for personalized data." },
    { unit: "IV", id: 8, question: "What is Selective Tuning?", answer: "<strong>Definition:</strong> Selective Tuning allows mobile receivers to keep their radio off for most of the time and wake up only when the data of interest is being broadcast, significantly saving battery power." },
    // Unit V
    { unit: "V", id: 9, question: "Define MANET.", answer: "<strong>Definition:</strong> Mobile Ad hoc Network (MANET) is a decentralized wireless network formed by mobile devices without any pre-existing infrastructure or centralized administration. Nodes act as both hosts and routers." },
    { unit: "V", id: 10, question: "What is a Proactive Routing Protocol?", answer: "<strong>Definition:</strong> A Proactive (Table-driven) protocol maintains fresh lists of destinations and their routes by periodically distributing routing tables throughout the network (e.g., DSDV), ensuring routes are available immediately when needed." }
  ],
  partB: [
    {
      unit: "I",
      questionNumber: 11,
      choices: [
        {
          type: "a",
          question: "Explain the GSM System Architecture with a neat diagram.",
          answer: `
            <h4>1. Introduction</h4>
            <p>GSM (Global System for Mobile Communications) is a standard developed by ETSI to describe protocols for second-generation (2G) digital cellular networks.</p>

            <h4>2. GSM Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Station (MS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Base Station Subsystem (BSS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Network & Switching Subsystem (NSS)</div>
            </div>

            <h4>3. Subsystems Explanation</h4>
            <ul>
              <li><strong>Mobile Station (MS):</strong>
                <ul>
                  <li><strong>Mobile Equipment (ME):</strong> The physical phone.</li>
                  <li><strong>Subscriber Identity Module (SIM):</strong> Stores IMSI and keys.</li>
                </ul>
              </li>
              <li><strong>Base Station Subsystem (BSS):</strong>
                <ul>
                  <li><strong>Base Transceiver Station (BTS):</strong> Handles radio signals.</li>
                  <li><strong>Base Station Controller (BSC):</strong> Manages radio resources and handovers.</li>
                </ul>
              </li>
              <li><strong>Network and Switching Subsystem (NSS):</strong>
                <ul>
                  <li><strong>Mobile Switching Center (MSC):</strong> Handles call routing.</li>
                  <li><strong>Home Location Register (HLR):</strong> Permanent user database.</li>
                  <li><strong>Visitor Location Register (VLR):</strong> Temporary roaming database.</li>
                </ul>
              </li>
            </ul>

            <div class="conclusion">
              <strong>Conclusion:</strong> GSM architecture separates radio functions (BSS) from switching functions (NSS), allowing for scalability and efficient mobility management.
            </div>
          `
        },
        {
          type: "b",
          question: "Discuss the 3-Tier Architecture of Mobile Computing.",
          answer: `
            <h4>1. Definition</h4>
            <p>The 3-Tier Architecture is a client-server software architecture pattern in which the user interface (presentation), functional process logic (business rules), and computer data storage and data access are developed and maintained as independent modules.</p>

            <h4>2. Block Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Presentation Tier (Client)</div>
              <div class="diagram-arrow">⬇⬆</div>
              <div class="diagram-box">Application Tier (Middle)</div>
              <div class="diagram-arrow">⬇⬆</div>
              <div class="diagram-box">Data Tier (Database)</div>
            </div>

            <h4>3. Detailed Explanation</h4>
            <ul>
              <li><strong>Presentation Tier (Client):</strong>
                <ul>
                  <li>Runs on the mobile device.</li>
                  <li>Handles UI and user input.</li>
                  <li><strong>Challenge:</strong> Limited resources (battery, screen).</li>
                </ul>
              </li>
              <li><strong>Application Tier (Middle Tier):</strong>
                <ul>
                  <li>Runs on a server (e.g., Web Server).</li>
                  <li>Contains business logic.</li>
                  <li>Handles data adaptation for mobile clients (e.g., compressing images).</li>
                </ul>
              </li>
              <li><strong>Data Tier (Database):</strong>
                <ul>
                  <li>Stores enterprise data.</li>
                  <li>Ensures data integrity and security.</li>
                </ul>
              </li>
            </ul>

            <h4>4. Advantages</h4>
            <ul>
              <li>Scalability</li>
              <li>Ease of maintenance</li>
              <li>Security (Client doesn't access DB directly)</li>
            </ul>
          `
        }
      ]
    },
    {
      unit: "II",
      questionNumber: 12,
      choices: [
        {
          type: "a",
          question: "Explain Mobile IP operation with respect to Agent Discovery, Registration, and Tunneling.",
          answer: `
            <h4>1. Overview</h4>
            <p>Mobile IP allows a device to move from one network to another while maintaining a permanent IP address.</p>

            <h4>2. Steps of Operation</h4>
            
            <h5>Step 1: Agent Discovery</h5>
            <p>Mobile Node (MN) needs to know if it is in the Home Network or Foreign Network.</p>
            <ul>
              <li><strong>Agent Advertisement:</strong> HA and FA periodically broadcast their presence.</li>
              <li><strong>Agent Solicitation:</strong> If MN doesn't hear an advertisement, it sends a solicitation request.</li>
            </ul>

            <h5>Step 2: Registration</h5>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">MN</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">FA</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">HA</div>
              </div>
              <div style="font-size: 0.8rem; margin-top: 0.5rem">(Registration Request)</div>
            </div>
            <ul>
              <li>MN sends its Care-of Address (CoA) to HA (via FA).</li>
              <li>HA updates its routing table: <em>Home Address -> CoA</em>.</li>
              <li>HA sends Registration Reply.</li>
            </ul>

            <h5>Step 3: Tunneling</h5>
            <p>Packet delivery from Correspondent Node (CN) to MN:</p>
            <ol>
              <li>CN sends packet to MN's Home Address.</li>
              <li>HA intercepts packet.</li>
              <li>HA <strong>encapsulates</strong> packet (puts it inside a new IP packet) with destination = CoA.</li>
              <li>Packet routed to FA.</li>
              <li>FA <strong>decapsulates</strong> and delivers original packet to MN.</li>
            </ol>
          `
        },
        {
          type: "b",
          question: "Compare SDMA, FDMA, TDMA, and CDMA.",
          answer: `
            <h4>Comparison Table</h4>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SDMA</th>
                  <th>FDMA</th>
                  <th>TDMA</th>
                  <th>CDMA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Full Name</strong></td>
                  <td>Space Division Multiple Access</td>
                  <td>Frequency Division Multiple Access</td>
                  <td>Time Division Multiple Access</td>
                  <td>Code Division Multiple Access</td>
                </tr>
                <tr>
                  <td><strong>Separation</strong></td>
                  <td>Space (Angle/Sector)</td>
                  <td>Frequency</td>
                  <td>Time</td>
                  <td>Code</td>
                </tr>
                <tr>
                  <td><strong>Resource</strong></td>
                  <td>Antenna Sector</td>
                  <td>Frequency Band</td>
                  <td>Time Slot</td>
                  <td>Orthogonal Code</td>
                </tr>
                <tr>
                  <td><strong>Synchronization</strong></td>
                  <td>Not strict</td>
                  <td>Not strict</td>
                  <td>Strict needed</td>
                  <td>Chip-level needed</td>
                </tr>
                <tr>
                  <td><strong>Interference</strong></td>
                  <td>Co-channel</td>
                  <td>Adjacent channel</td>
                  <td>Adjacent slot</td>
                  <td>Multi-user</td>
                </tr>
              </tbody>
            </table>

            <div class="conclusion">
              <strong>Summary:</strong> SDMA optimizes space, FDMA splits frequencies, TDMA splits time, and CDMA uses codes. 4G/5G often use combinations (e.g., OFDMA).
            </div>
          `
        }
      ]
    },
    {
      unit: "III",
      questionNumber: 13,
      choices: [
        {
          type: "a",
          question: "Explain Indirect TCP (I-TCP) and its advantages/disadvantages.",
          answer: `
            <h4>1. Concept</h4>
            <p>Indirect TCP (I-TCP) splits the TCP connection into two separate connections to isolate the wireless link from the fixed network.</p>

            <h4>2. Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Fixed Host</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">Base Station (BS)</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">Mobile Host</div>
              </div>
              <div style="display: flex; gap: 4rem; font-size: 0.8rem; margin-top: 0.5rem">
                <span>Standard TCP</span>
                <span>Wireless TCP</span>
              </div>
            </div>

            <h4>3. Working Principle</h4>
            <ul>
              <li><strong>Connection 1:</strong> Between Fixed Host and BS. Standard TCP is used. BS acts as the receiver for the Fixed Host.</li>
              <li><strong>Connection 2:</strong> Between BS and Mobile Host. An optimized protocol for wireless (handling errors/handovers) is used.</li>
            </ul>

            <h4>4. Advantages</h4>
            <ul>
              <li><strong>Isolation:</strong> Wireless errors are handled locally by BS. Fixed Host doesn't see them.</li>
              <li><strong>Optimization:</strong> Wireless link can use a different transport protocol.</li>
              <li><strong>Performance:</strong> Prevents unnecessary congestion control triggering on the sender side.</li>
            </ul>

            <h4>5. Disadvantages</h4>
            <ul>
              <li><strong>Loss of End-to-End Semantics:</strong> BS acknowledges a packet before the Mobile Host actually receives it. If BS crashes, data is lost.</li>
              <li><strong>Handover Latency:</strong> State (buffers, sequence numbers) must be migrated from old BS to new BS during handover.</li>
            </ul>
          `
        },
        {
          type: "b",
          question: "Discuss Data Hoarding and Caching techniques in mobile environments.",
          answer: `
            <h4>1. Introduction</h4>
            <p>Mobile devices often face disconnection or low bandwidth. Data management techniques are required to ensure availability.</p>

            <h4>2. Data Hoarding (Prefetching)</h4>
            <ul>
              <li><strong>Definition:</strong> Predictively downloading data that the user <em>might</em> need in the future, before the device disconnects.</li>
              <li><strong>Steps:</strong>
                <ol>
                  <li>Determine user access patterns.</li>
                  <li>Select relevant data.</li>
                  <li>Download and store locally.</li>
                </ol>
              </li>
              <li><strong>Advantage:</strong> Supports disconnected operations.</li>
              <li><strong>Limitation:</strong> Wastes storage and bandwidth if predicted data is not used.</li>
            </ul>

            <h4>3. Caching</h4>
            <ul>
              <li><strong>Definition:</strong> Storing frequently or recently accessed data locally on the mobile device.</li>
              <li><strong>Benefit:</strong> Reduces bandwidth usage and access latency.</li>
              <li><strong>Challenge:</strong> <strong>Cache Consistency</strong>. Keeping the local copy in sync with the server.</li>
            </ul>

            <h4>4. Cache Consistency Techniques</h4>
            <table class="comparison-table">
              <tr>
                <th>Technique</th>
                <th>Description</th>
              </tr>
              <tr>
                <td><strong>Time-to-Live (TTL)</strong></td>
                <td>Data is valid for a specific time. Expired data is refreshed.</td>
              </tr>
              <tr>
                <td><strong>Invalidation Reports</strong></td>
                <td>Server broadcasts a list of changed data items. Clients check this list to invalidate local cache.</td>
              </tr>
            </table>
          `
        }
      ]
    },
    {
      unit: "IV",
      questionNumber: 14,
      choices: [
        {
          type: "a",
          question: "Explain the Push-based and Pull-based data delivery mechanisms.",
          answer: `
            <h4>1. Classification of Delivery Mechanisms</h4>
            <p>Data delivery in mobile systems depends on the asymmetry of the communication channel.</p>

            <h4>2. Push-based (Publish-Subscribe)</h4>
            <ul>
              <li><strong>Mechanism:</strong> Server broadcasts data to all clients without explicit request.</li>
              <li><strong>Example:</strong> News tickers, Stock quotes, Traffic updates.</li>
              <li><strong>Flow:</strong>
                <div class="diagram-container">
                  <div class="diagram-box">Server</div>
                  <div class="diagram-arrow">➡➡➡</div>
                  <div class="diagram-box">Many Clients</div>
                </div>
              </li>
              <li><strong>Advantages:</strong> Scalable (Server load independent of number of clients).</li>
              <li><strong>Disadvantages:</strong> "Spam" (Clients receive unwanted data); High access latency (Wait for data to appear in cycle).</li>
            </ul>

            <h4>3. Pull-based (On-demand)</h4>
            <ul>
              <li><strong>Mechanism:</strong> Client explicitly requests specific data from the server.</li>
              <li><strong>Example:</strong> Web browsing, Database query.</li>
              <li><strong>Flow:</strong>
                <div class="diagram-container">
                  <div class="diagram-box">Client</div>
                  <div class="diagram-arrow">➡ (Request)</div>
                  <div class="diagram-box">Server</div>
                  <div class="diagram-arrow">⬅ (Response)</div>
                  <div class="diagram-box">Client</div>
                </div>
              </li>
              <li><strong>Advantages:</strong> Personalized data; No unnecessary traffic.</li>
              <li><strong>Disadvantages:</strong> Server bottleneck with many requests; Energy consuming for client (Uplink transmission).</li>
            </ul>

            <h4>4. Hybrid Mechanism</h4>
            <p>Combines both: Push for popular data, Pull for specific/long-tail data.</p>
          `
        },
        {
          type: "b",
          question: "What is Selective Tuning? Explain Index-based method.",
          answer: `
            <h4>1. Selective Tuning Definition</h4>
            <p>Selective Tuning is a power conservation technique where the mobile receiver stays in "doze mode" (low power) and wakes up only when the data of interest is being broadcast.</p>

            <h4>2. Index-based Method</h4>
            <p>The broadcast channel sends a directory (Index) at the beginning of a broadcast cycle.</p>

            <h4>3. Structure</h4>
            <div class="diagram-container">
              <div class="diagram-box">Index</div>
              <div class="diagram-arrow">... Data ...</div>
              <div class="diagram-box">Data Item 1</div>
              <div class="diagram-arrow">...</div>
              <div class="diagram-box">Data Item N</div>
            </div>

            <h4>4. Steps</h4>
            <ol>
              <li><strong>Wake Up:</strong> Mobile wakes up at the start of the cycle.</li>
              <li><strong>Read Index:</strong> Reads the index to find the time offset of the desired data.</li>
              <li><strong>Sleep:</strong> Goes into doze mode to save power.</li>
              <li><strong>Wake Up:</strong> Wakes up exactly at the calculated time.</li>
              <li><strong>Read Data:</strong> Downloads the data.</li>
              <li><strong>Sleep:</strong> Returns to sleep.</li>
            </ol>

            <h4>5. Advantages & Disadvantages</h4>
            <ul>
              <li><strong>Advantage:</strong> Significant energy saving.</li>
              <li><strong>Disadvantage:</strong> Increases broadcast cycle length (Index overhead).</li>
            </ul>
          `
        }
      ]
    },
    {
      unit: "V",
      questionNumber: 15,
      choices: [
        {
          type: "a",
          question: "Explain the DSDV routing protocol.",
          answer: `
            <h4>1. Introduction</h4>
            <p><strong>DSDV (Destination-Sequenced Distance-Vector)</strong> is a <strong>Proactive (Table-driven)</strong> routing protocol for MANETs based on the Bellman-Ford algorithm.</p>

            <h4>2. Key Features</h4>
            <ul>
              <li><strong>Table-Driven:</strong> Every node maintains a routing table with entries for <em>all</em> destinations in the network.</li>
              <li><strong>Periodic Updates:</strong> Nodes broadcast their tables periodically to neighbors.</li>
              <li><strong>Sequence Numbers:</strong> Used to distinguish stale routes from fresh ones and prevent routing loops.</li>
            </ul>

            <h4>3. Routing Table Structure</h4>
            <table class="comparison-table">
              <tr><th>Dest</th><th>Next Hop</th><th>Metric</th><th>Seq No</th></tr>
              <tr><td>A</td><td>B</td><td>2</td><td>100</td></tr>
              <tr><td>C</td><td>B</td><td>3</td><td>102</td></tr>
            </table>

            <h4>4. Route Selection Rule</h4>
            <ul>
              <li>Always select the route with the <strong>Highest Sequence Number</strong> (Most recent).</li>
              <li>If Sequence Numbers are equal, select the route with the <strong>Lowest Metric</strong> (Shortest path).</li>
            </ul>

            <h4>5. Pros & Cons</h4>
            <ul>
              <li><strong>Pros:</strong> Low latency for route discovery (routes are always available). Loop-free.</li>
              <li><strong>Cons:</strong> High overhead due to periodic updates. Wastes bandwidth if topology changes frequently.</li>
            </ul>
          `
        },
        {
          type: "b",
          question: "Explain the DSR routing protocol.",
          answer: `
            <h4>1. Introduction</h4>
            <p><strong>DSR (Dynamic Source Routing)</strong> is a <strong>Reactive (On-demand)</strong> routing protocol.</p>

            <h4>2. Concept: Source Routing</h4>
            <p>The sender determines the complete sequence of nodes (path) to the destination. This path is listed in the packet header.</p>

            <h4>3. Phases of Operation</h4>
            
            <h5>Phase 1: Route Discovery</h5>
            <ul>
              <li>Sender broadcasts <strong>Route Request (RREQ)</strong>.</li>
              <li>Intermediate nodes append their ID to the RREQ and rebroadcast.</li>
              <li>Destination receives RREQ, reverses the path, and sends <strong>Route Reply (RREP)</strong>.</li>
            </ul>
            <div class="diagram-container">
              <div class="diagram-box">Source</div>
              <div class="diagram-arrow">➡ RREQ ➡</div>
              <div class="diagram-box">Dest</div>
            </div>

            <h5>Phase 2: Route Maintenance</h5>
            <ul>
              <li>Nodes monitor link status.</li>
              <li>If a link breaks, a <strong>Route Error (RERR)</strong> is sent to the source.</li>
              <li>Source initiates new discovery.</li>
            </ul>

            <h4>4. Pros & Cons</h4>
            <ul>
              <li><strong>Pros:</strong> No overhead for idle routes. Loop-free by design.</li>
              <li><strong>Cons:</strong> Packet header overhead (stores full path). Route discovery delay for new destinations.</li>
            </ul>
          `
        }
      ]
    }
  ]
};
