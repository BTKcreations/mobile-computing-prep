export const modelPaper2 = {
    title: "B.Tech IV Year I Semester Regular Examinations",
    subject: "MOBILE COMPUTING - SET 2",
    time: "3 Hours",
    maxMarks: 75,
    partA: [
        // Unit I
        { unit: "I", id: 1, question: "What is GPRS?", answer: "<strong>General Packet Radio Service (GPRS)</strong> is a packet-oriented mobile data standard on the 2G and 3G cellular communication network's global system for mobile communications (GSM)." },
        { unit: "I", id: 2, question: "Define Handoff.", answer: "<strong>Handoff</strong> (or Handover) is the process of transferring an ongoing call or data session from one channel connected to the core network to another channel." },
        // Unit II
        { unit: "II", id: 3, question: "What is the Near-Far Problem?", answer: "<strong>Explanation:</strong> In CDMA, a strong signal from a near mobile unit masks the weak signal from a far mobile unit at the base station." },
        { unit: "II", id: 4, question: "What is Tunneling?", answer: "<strong>Definition:</strong> Tunneling is a mechanism used to ship a packet to a mobile node. It involves encapsulation of the original IP packet inside another IP packet." },
        // Unit III
        { unit: "III", id: 5, question: "What is Mobile TCP?", answer: "<strong>Mobile TCP (M-TCP)</strong> is a protocol designed to handle frequent disconnections. It splits the connection and forces the sender into persist mode during disconnection." },
        { unit: "III", id: 6, question: "Define Caching in Mobile Computing.", answer: "<strong>Caching:</strong> Storing frequently accessed data locally on the mobile device to reduce access latency and bandwidth usage." },
        // Unit IV
        { unit: "IV", id: 7, question: "What is a Broadcast Disk?", answer: "<strong>Broadcast Disk:</strong> A technique where data is cyclically broadcasted, appearing like a rotating disk to the client. Popular data is repeated more often." },
        { unit: "IV", id: 8, question: "What is Data Synchronization?", answer: "<strong>Definition:</strong> The process of establishing consistency among data from a source to a target data storage and vice versa and the continuous harmonization of the data over time." },
        // Unit V
        { unit: "V", id: 9, question: "What is AODV?", answer: "<strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive routing protocol for MANETs that establishes a route to a destination only on demand." },
        { unit: "V", id: 10, question: "What is Service Discovery?", answer: "<strong>Service Discovery:</strong> The automatic detection of devices and services offered by these devices on a computer network." }
    ],
    partB: [
        {
            unit: "I",
            questionNumber: 11,
            choices: [
                {
                    type: "a",
                    question: "Explain the GPRS Architecture with a neat diagram.",
                    answer: `
            <h4>1. Introduction</h4>
            <p>GPRS (General Packet Radio Service) extends GSM to support packet-switched data.</p>

            <h4>2. GPRS Architecture Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Station</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">BSS (PCU)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">SGSN</div>
              <div class="diagram-arrow">⬌</div>
              <div class="diagram-box">GGSN</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Internet</div>
            </div>

            <h4>3. Key Elements</h4>
            <ul>
              <li><strong>SGSN (Serving GPRS Support Node):</strong> Handles packet routing, mobility management, and authentication for MS within its service area. Equivalent to MSC in GSM.</li>
              <li><strong>GGSN (Gateway GPRS Support Node):</strong> Gateway to external networks (Internet). Handles IP address assignment.</li>
              <li><strong>PCU (Packet Control Unit):</strong> Added to BSS to handle packet scheduling.</li>
            </ul>

            <div class="conclusion">
              <strong>Conclusion:</strong> GPRS introduces packet switching to the circuit-switched GSM network, enabling "always-on" internet connectivity.
            </div>
          `
                },
                {
                    type: "b",
                    question: "Discuss various Applications of Mobile Computing.",
                    answer: `
            <h4>Applications</h4>
            <ul>
              <li><strong>Vehicles:</strong> GPS, Traffic updates, Emergency assistance.</li>
              <li><strong>Business:</strong> Mobile office, Sales force automation, Inventory management.</li>
              <li><strong>Medical:</strong> Remote patient monitoring, Access to patient records.</li>
              <li><strong>Education:</strong> E-learning, Virtual classrooms.</li>
              <li><strong>Entertainment:</strong> Streaming, Gaming, Social media.</li>
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
                    question: "Explain the IEEE 802.11 System Architecture.",
                    answer: `
            <h4>1. Architecture Components</h4>
            <ul>
              <li><strong>Station (STA):</strong> Any device with a wireless network interface (e.g., Laptop, Phone).</li>
              <li><strong>Access Point (AP):</strong> Bridge between wireless and wired network.</li>
              <li><strong>Basic Service Set (BSS):</strong> A group of stations controlled by a single AP.</li>
              <li><strong>Extended Service Set (ESS):</strong> Multiple BSSs connected via a Distribution System (DS).</li>
            </ul>

            <h4>2. Diagram Representation</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">BSS 1 (AP1 + STAs)</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">Distribution System</div>
                <div class="diagram-arrow">⬌</div>
                <div class="diagram-box">BSS 2 (AP2 + STAs)</div>
              </div>
            </div>

            <h4>3. Modes of Operation</h4>
            <ul>
              <li><strong>Infrastructure Mode:</strong> Communication via AP.</li>
              <li><strong>Ad-hoc Mode:</strong> Direct communication between STAs (IBSS).</li>
            </ul>
          `
                },
                {
                    type: "b",
                    question: "Explain Packet Delivery in Mobile IP.",
                    answer: `
            <h4>Packet Delivery Steps</h4>
            <ol>
              <li><strong>CN to HA:</strong> Correspondent Node sends packet to Mobile Node's Home Address. Packet routed to Home Agent.</li>
              <li><strong>HA Intercepts:</strong> HA looks up MN's current location (CoA).</li>
              <li><strong>Tunneling:</strong> HA encapsulates packet and tunnels it to CoA (Foreign Agent).</li>
              <li><strong>FA Decapsulates:</strong> FA removes outer header and delivers original packet to MN.</li>
              <li><strong>MN to CN:</strong> MN sends packet directly to CN (Standard IP routing). This is called <strong>Triangular Routing</strong>.</li>
            </ol>
            
            <div class="diagram-container">
              <div class="diagram-box">CN</div>
              <div class="diagram-arrow">➡</div>
              <div class="diagram-box">HA</div>
              <div class="diagram-arrow">➡ (Tunnel) ➡</div>
              <div class="diagram-box">FA</div>
              <div class="diagram-arrow">➡</div>
              <div class="diagram-box">MN</div>
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
                    question: "Explain Mobile TCP (M-TCP) in detail.",
                    answer: `
            <h4>1. Overview</h4>
            <p>M-TCP is designed to handle frequent disconnections and low bandwidth. It splits the connection like I-TCP but preserves end-to-end semantics better.</p>

            <h4>2. Architecture</h4>
            <p>Uses a <strong>Supervisory Host (SH)</strong> (usually the BS) to monitor the mobile node.</p>

            <h4>3. Handling Disconnection</h4>
            <ul>
              <li>When MN disconnects, SH detects it.</li>
              <li>SH sends a "Zero Window Size" update to the Sender (Fixed Host).</li>
              <li>Sender enters <strong>Persist Mode</strong>: stops sending data and freezes retransmission timers.</li>
              <li>Sender periodically probes the window size.</li>
            </ul>

            <h4>4. Reconnection</h4>
            <ul>
              <li>When MN reconnects, SH re-opens the window.</li>
              <li>Sender resumes transmission without having timed out or reduced congestion window.</li>
            </ul>
          `
                },
                {
                    type: "b",
                    question: "Explain the Kangaroo Transaction Model.",
                    answer: `
            <h4>1. Concept</h4>
            <p>Designed for mobile transactions where the user moves between cells (BSs) during a transaction.</p>

            <h4>2. Structure</h4>
            <ul>
              <li><strong>Base Transaction:</strong> The main transaction initiated at the first BS.</li>
              <li><strong>Joey Transactions:</strong> Sub-transactions created at each new BS the user visits.</li>
            </ul>

            <h4>3. Operation</h4>
            <p>As the user moves, the transaction state "hops" with them (like a Kangaroo). The Data Access Agents (DAA) at each BS manage the movement of the transaction context.</p>
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
                    question: "Explain Broadcast Disk model.",
                    answer: `
            <h4>1. Concept</h4>
            <p>Data is broadcast cyclically. To improve performance for popular data, different items are broadcast with different frequencies.</p>

            <h4>2. Multi-disk Approach</h4>
            <p>Imagine multiple disks of different sizes rotating at the same speed.</p>
            <ul>
              <li><strong>Fast Disk:</strong> Contains popular data (appears often).</li>
              <li><strong>Slow Disk:</strong> Contains less popular data (appears rarely).</li>
            </ul>

            <h4>3. Diagram</h4>
            <div class="diagram-container">
              <div class="diagram-box">Hot Data (Freq: High)</div>
              <div class="diagram-arrow">||</div>
              <div class="diagram-box">Cold Data (Freq: Low)</div>
            </div>
            <p>The broadcast schedule interleaves chunks from the fast disk and slow disk.</p>
          `
                },
                {
                    type: "b",
                    question: "Explain the synchronization protocol in mobile computing.",
                    answer: `
            <h4>Synchronization</h4>
            <p>Ensuring the mobile replica and server origin are consistent.</p>

            <h4>Two-Phase Commit Protocol (2PC)</h4>
            <ol>
              <li><strong>Phase 1 (Voting):</strong> Coordinator asks all participants if they can commit. Participants vote "Yes" or "No".</li>
              <li><strong>Phase 2 (Commit):</strong>
                <ul>
                  <li>If all voted "Yes", Coordinator sends "Commit".</li>
                  <li>If any voted "No", Coordinator sends "Abort".</li>
                </ul>
              </li>
            </ol>
            <p><strong>Challenge in Mobile:</strong> Blocking nature of 2PC is bad for disconnected nodes. Optimistic protocols are preferred.</p>
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
                    question: "Explain AODV Routing Protocol.",
                    answer: `
            <h4>1. Introduction</h4>
            <p><strong>Ad hoc On-Demand Distance Vector (AODV)</strong> is a reactive protocol that combines DSR's on-demand mechanism with DSDV's hop-by-hop routing and sequence numbers.</p>

            <h4>2. Route Discovery</h4>
            <ul>
              <li><strong>RREQ:</strong> Broadcast when route needed. Contains Source IP, Source Seq#, Dest IP, Dest Seq#, Hop Count.</li>
              <li><strong>Reverse Path:</strong> Intermediate nodes record the previous hop to form a reverse path to Source.</li>
              <li><strong>RREP:</strong> Unicast back to Source along the reverse path.</li>
            </ul>

            <h4>3. Route Maintenance</h4>
            <ul>
              <li><strong>Hello Messages:</strong> Used to detect link breaks.</li>
              <li><strong>RERR:</strong> Sent when a link breaks to notify affected nodes.</li>
            </ul>

            <h4>4. Comparison with DSR</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>AODV</th><th>DSR</th></tr>
              <tr><td>Routing</td><td>Hop-by-Hop</td><td>Source Routing</td></tr>
              <tr><td>Header Overhead</td><td>Low</td><td>High (Full path)</td></tr>
              <tr><td>Table</td><td>Routing Table</td><td>Route Cache</td></tr>
            </table>
          `
                },
                {
                    type: "b",
                    question: "Discuss Security Issues in MANETs.",
                    answer: `
            <h4>Security Challenges</h4>
            <ul>
              <li><strong>Open Medium:</strong> Eavesdropping is easy.</li>
              <li><strong>Dynamic Topology:</strong> Hard to trust nodes; no fixed infrastructure.</li>
              <li><strong>Resource Constraints:</strong> Heavy encryption drains battery.</li>
            </ul>

            <h4>Types of Attacks</h4>
            <ul>
              <li><strong>Blackhole Attack:</strong> Malicious node drops all packets.</li>
              <li><strong>Wormhole Attack:</strong> Tunneling packets to another location to disrupt routing.</li>
              <li><strong>Sybil Attack:</strong> A node claims multiple identities.</li>
            </ul>
          `
                }
            ]
        }
    ]
};
