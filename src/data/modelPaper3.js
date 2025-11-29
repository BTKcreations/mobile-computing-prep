export const modelPaper3 = {
    title: "B.Tech IV Year I Semester Regular Examinations",
    subject: "MOBILE COMPUTING - SET 3",
    time: "3 Hours",
    maxMarks: 75,
    partA: [
        // Unit I
        { unit: "I", id: 1, question: "Differentiate between User Mobility and Device Portability.", answer: "<strong>User Mobility:</strong> The user can move between different physical locations and use different devices.<br/><strong>Device Portability:</strong> The device can be moved to different locations while maintaining connectivity." },
        { unit: "I", id: 2, question: "What is Spread Spectrum?", answer: "<strong>Spread Spectrum:</strong> A technique where a signal is transmitted on a bandwidth much larger than the frequency content of the original information, to minimize interference and improve security." },
        // Unit II
        { unit: "II", id: 3, question: "What is Frequency Reuse?", answer: "<strong>Frequency Reuse:</strong> The practice of using the same radio frequencies in different geographic areas (cells) that are separated by sufficient distance to avoid interference." },
        { unit: "II", id: 4, question: "Define Agent Advertisement.", answer: "<strong>Agent Advertisement:</strong> A method in Mobile IP where Home Agents and Foreign Agents periodically broadcast their presence to let Mobile Nodes know which network they are in." },
        // Unit III
        { unit: "III", id: 5, question: "What is Fast Retransmit?", answer: "<strong>Fast Retransmit:</strong> A TCP enhancement where the sender retransmits a packet after receiving 3 duplicate ACKs, without waiting for the timeout timer to expire." },
        { unit: "III", id: 6, question: "Define Transaction Oriented TCP.", answer: "<strong>T-TCP:</strong> A TCP extension designed to make TCP more efficient for transactions (request-response) by combining the connection setup, data transfer, and connection teardown." },
        // Unit IV
        { unit: "IV", id: 7, question: "What is Indexing in data dissemination?", answer: "<strong>Indexing:</strong> A technique where a directory of data locations is broadcasted before the actual data, allowing clients to know exactly when their desired data will arrive." },
        { unit: "IV", id: 8, question: "What is Cache Invalidation?", answer: "<strong>Cache Invalidation:</strong> The process of removing or marking as invalid the data in the local cache when the original data on the server has changed." },
        // Unit V
        { unit: "V", id: 9, question: "What is a Wormhole Attack?", answer: "<strong>Wormhole Attack:</strong> A severe attack in MANETs where an attacker records packets at one location and tunnels them to another location to replay them, disrupting routing." },
        { unit: "V", id: 10, question: "Define J2ME.", answer: "<strong>Java 2 Micro Edition (J2ME):</strong> A Java platform designed for embedded systems and mobile devices, providing a robust environment for application development." }
    ],
    partB: [
        {
            unit: "I",
            questionNumber: 11,
            choices: [
                {
                    type: "a",
                    question: "Discuss the evolution of Mobile Communication from 1G to 5G.",
                    answer: `
            <h4>Generations of Mobile Communication</h4>
            <table class="comparison-table">
              <tr><th>Gen</th><th>Technology</th><th>Key Features</th></tr>
              <tr><td><strong>1G</strong></td><td>Analog (AMPS)</td><td>Voice only. Poor security.</td></tr>
              <tr><td><strong>2G</strong></td><td>Digital (GSM, CDMA)</td><td>Voice + SMS. Data (GPRS/EDGE). Encryption.</td></tr>
              <tr><td><strong>3G</strong></td><td>CDMA2000, UMTS</td><td>High-speed data. Video calling. Mobile Internet.</td></tr>
              <tr><td><strong>4G</strong></td><td>LTE, WiMAX</td><td>All-IP network. High speed (100Mbps+). HD streaming.</td></tr>
              <tr><td><strong>5G</strong></td><td>NR (New Radio)</td><td>Ultra-low latency. Massive IoT. Gigabit speeds.</td></tr>
            </table>
          `
                },
                {
                    type: "b",
                    question: "Differentiate between Circuit Switching and Packet Switching.",
                    answer: `
            <h4>Comparison</h4>
            <table class="comparison-table">
              <tr><th>Feature</th><th>Circuit Switching</th><th>Packet Switching</th></tr>
              <tr><td><strong>Connection</strong></td><td>Dedicated path established.</td><td>No dedicated path (Connectionless).</td></tr>
              <tr><td><strong>Bandwidth</strong></td><td>Fixed/Reserved.</td><td>Dynamic/Shared.</td></tr>
              <tr><td><strong>Efficiency</strong></td><td>Low (wasted during silence).</td><td>High (resources used only when needed).</td></tr>
              <tr><td><strong>Delay</strong></td><td>Constant.</td><td>Variable (Jitter).</td></tr>
              <tr><td><strong>Example</strong></td><td>Traditional Telephone (PSTN), GSM Voice.</td><td>Internet (IP), GPRS, LTE.</td></tr>
            </table>
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
                    question: "Explain the DHCP protocol and its role in mobility.",
                    answer: `
            <h4>1. Introduction</h4>
            <p><strong>Dynamic Host Configuration Protocol (DHCP)</strong> automates the assignment of IP addresses and network parameters.</p>

            <h4>2. Role in Mobility</h4>
            <ul>
              <li>When a mobile node enters a foreign network, it needs a <strong>Care-of Address (CoA)</strong>.</li>
              <li>DHCP acts as a mechanism to assign this CoA.</li>
              <li>The Foreign Agent (FA) can act as a DHCP Relay.</li>
            </ul>

            <h4>3. DORA Process</h4>
            <div class="diagram-container">
              <div class="diagram-box">Client</div>
              <div class="diagram-arrow">➡ Discover ➡</div>
              <div class="diagram-box">Server</div>
              <div class="diagram-arrow">⬅ Offer ⬅</div>
              <div class="diagram-box">Client</div>
              <div class="diagram-arrow">➡ Request ➡</div>
              <div class="diagram-box">Server</div>
              <div class="diagram-arrow">⬅ Acknowledge ⬅</div>
              <div class="diagram-box">Client</div>
            </div>
            <ul>
              <li><strong>Discover:</strong> Client broadcasts to find servers.</li>
              <li><strong>Offer:</strong> Server offers an IP.</li>
              <li><strong>Request:</strong> Client requests the offered IP.</li>
              <li><strong>Acknowledge:</strong> Server confirms the lease.</li>
            </ul>
          `
                },
                {
                    type: "b",
                    question: "Discuss the entities and terminology of Mobile IP.",
                    answer: `
            <h4>Mobile IP Terminology</h4>
            <ul>
              <li><strong>Mobile Node (MN):</strong> A host or router that changes its point of attachment from one network to another.</li>
              <li><strong>Home Agent (HA):</strong> A router on the MN's home network that tunnels packets to the MN when it is away.</li>
              <li><strong>Foreign Agent (FA):</strong> A router on the visited network that provides routing services to the MN.</li>
              <li><strong>Home Address:</strong> The permanent IP address of the MN.</li>
              <li><strong>Care-of Address (CoA):</strong> The temporary IP address of the MN in the foreign network.</li>
              <li><strong>Correspondent Node (CN):</strong> A peer node with which the MN is communicating.</li>
            </ul>
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
                    question: "Explain the Bluetooth Protocol Stack and its architecture.",
                    answer: `
            <h4>1. Bluetooth Architecture</h4>
            <p>Bluetooth operates in the 2.4 GHz ISM band and forms <strong>Piconets</strong> (1 Master + up to 7 Slaves).</p>

            <h4>2. Protocol Stack</h4>
            <div class="diagram-container">
              <div class="diagram-box">Applications / Profiles</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Middleware (RFCOMM, SDP, TCS)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">L2CAP (Logical Link Control)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Host Controller Interface (HCI)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Link Manager (LMP)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Baseband / Radio</div>
            </div>

            <h4>3. Key Layers</h4>
            <ul>
              <li><strong>Radio:</strong> Physical transmission.</li>
              <li><strong>Baseband:</strong> Frequency hopping, connection establishment.</li>
              <li><strong>LMP:</strong> Link setup, authentication, power management.</li>
              <li><strong>L2CAP:</strong> Multiplexing, segmentation, and reassembly.</li>
              <li><strong>SDP:</strong> Service Discovery Protocol.</li>
            </ul>
          `
                },
                {
                    type: "b",
                    question: "Explain the WAP (Wireless Application Protocol) Architecture.",
                    answer: `
            <h4>1. Overview</h4>
            <p>WAP is a standard for accessing information over a mobile wireless network.</p>

            <h4>2. WAP Model</h4>
            <div class="diagram-container">
              <div class="diagram-box">Mobile Client (WAP Browser)</div>
              <div class="diagram-arrow">⬌ (WAP Protocols) ⬌</div>
              <div class="diagram-box">WAP Gateway</div>
              <div class="diagram-arrow">⬌ (HTTP/TCP) ⬌</div>
              <div class="diagram-box">Web Server</div>
            </div>
            <p>The <strong>Gateway</strong> translates WAP requests to HTTP requests and compresses content for the mobile.</p>

            <h4>3. WAP Protocol Stack</h4>
            <ul>
              <li><strong>WAE (Application):</strong> WML, WMLScript.</li>
              <li><strong>WSP (Session):</strong> Session management.</li>
              <li><strong>WTP (Transaction):</strong> Reliable request/response.</li>
              <li><strong>WTLS (Security):</strong> Encryption (like SSL).</li>
              <li><strong>WDP (Datagram):</strong> Transport layer (UDP adaptation).</li>
            </ul>
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
                    question: "Discuss the issues in Client-Server computing in mobile environments.",
                    answer: `
            <h4>Challenges in Mobile Client-Server</h4>
            <ul>
              <li><strong>Low Bandwidth:</strong> Wireless links are slow. Data transfer takes longer.</li>
              <li><strong>High Latency:</strong> Round-trip time is high.</li>
              <li><strong>Disconnection:</strong> Frequent link failures. Transactions may fail.</li>
              <li><strong>Battery Power:</strong> Complex processing drains battery.</li>
              <li><strong>Asymmetry:</strong> Downlink is faster than Uplink.</li>
            </ul>

            <h4>Adaptation Strategies</h4>
            <ul>
              <li><strong>Caching:</strong> Reduce network access.</li>
              <li><strong>Proxies:</strong> Middleware to filter/compress data.</li>
              <li><strong>Asynchronous Operations:</strong> Don't block the UI while waiting for server.</li>
            </ul>
          `
                },
                {
                    type: "b",
                    question: "Explain the different Data Synchronization protocols.",
                    answer: `
            <h4>1. Classification</h4>
            <ul>
              <li><strong>Pessimistic:</strong> Prevents conflicts by locking. Not suitable for mobile (disconnected) environments.</li>
              <li><strong>Optimistic:</strong> Allows updates anywhere. Detects and resolves conflicts later.</li>
            </ul>

            <h4>2. Protocols</h4>
            <ul>
              <li><strong>Slow Sync:</strong> Client sends all data to server. Server compares and merges. (High bandwidth).</li>
              <li><strong>Fast Sync:</strong> Client sends only changed data since last sync. (Efficient).</li>
            </ul>

            <h4>3. SyncML</h4>
            <p>An industry standard XML-based protocol for data synchronization.</p>
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
                    question: "Explain the TORA (Temporally Ordered Routing Algorithm).",
                    answer: `
            <h4>1. Introduction</h4>
            <p>TORA is a distributed, highly adaptive routing protocol for MANETs.</p>

            <h4>2. Key Concept: Height Metric</h4>
            <p>It creates a DAG (Directed Acyclic Graph) rooted at the destination. Each node has a "height". Packets flow "downhill" from higher height to lower height.</p>

            <h4>3. Operations</h4>
            <ul>
              <li><strong>Route Creation:</strong> Query/Update packets build the DAG.</li>
              <li><strong>Route Maintenance:</strong> If a link breaks, nodes adjust their height to reverse the flow (like water finding a new path).</li>
              <li><strong>Route Erasure:</strong> Clear packets remove invalid routes.</li>
            </ul>

            <h4>4. Pros & Cons</h4>
            <ul>
              <li><strong>Pros:</strong> Good for dense networks; minimizes control traffic for topological changes.</li>
              <li><strong>Cons:</strong> Oscillations can occur; requires synchronized clocks.</li>
            </ul>
          `
                },
                {
                    type: "b",
                    question: "Discuss the architecture of Android Mobile OS.",
                    answer: `
            <h4>Android Architecture Stack</h4>
            <div class="diagram-container">
              <div class="diagram-box">Applications (Home, Contacts, Browser)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Application Framework (Activity Manager, Window Manager)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Libraries (SQLite, SSL) & Android Runtime (Dalvik/ART)</div>
              <div class="diagram-arrow">⬇</div>
              <div class="diagram-box">Linux Kernel (Drivers, Power Mgmt)</div>
            </div>

            <h4>Layer Description</h4>
            <ul>
              <li><strong>Linux Kernel:</strong> The foundation. Handles hardware drivers, memory, and process management.</li>
              <li><strong>Libraries:</strong> C/C++ libraries for graphics, database, etc.</li>
              <li><strong>Android Runtime:</strong> Executes apps. Uses DEX files.</li>
              <li><strong>App Framework:</strong> Java API for developers to access hardware/services.</li>
              <li><strong>Applications:</strong> User-facing apps.</li>
            </ul>
          `
                }
            ]
        }
    ]
};
