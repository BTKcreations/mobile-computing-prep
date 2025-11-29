export const syllabus = [
    {
        unit: "I",
        title: "Introduction",
        notes: "<h3>Unit I Overview</h3><p>This unit covers the basics of Mobile Computing, including paradigms, devices, and the GSM architecture.</p>",
        topics: [
            {
                title: "Mobile Communications",
                content: `
          <div class="study-guide-box">
            <h4>1. Introduction to Mobile Communication</h4>
            <div class="definition-box">
              <strong>Definition:</strong> Mobile Communication refers to the technology that allows the transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link.
            </div>
            
            <p>It enables users to communicate from any location without being tethered to a specific physical location. This flexibility has revolutionized how we work, socialize, and access information.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Mobility</strong>
                The ability to move freely while maintaining communication.
              </div>
              <div class="concept-card">
                <strong>Portability</strong>
                The ability to easily carry devices (handhelds, wearables).
              </div>
              <div class="concept-card">
                <strong>Connectivity</strong>
                Seamless access to networks (Wi-Fi, Cellular).
              </div>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>2. Evolution of Mobile Radio Communication</h4>
            <p>The journey from analog voice to ultra-fast 5G data has been marked by distinct generations.</p>
            
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Generation</th>
                  <th>Primary Service</th>
                  <th>Key Technology</th>
                  <th>Data Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1G (1980s)</strong></td>
                  <td>Analog Voice</td>
                  <td>AMPS, FDMA</td>
                  <td>2.4 kbps</td>
                </tr>
                <tr>
                  <td><strong>2G (1990s)</strong></td>
                  <td>Digital Voice + SMS</td>
                  <td>GSM, CDMA, TDMA</td>
                  <td>64 kbps</td>
                </tr>
                <tr>
                  <td><strong>3G (2000s)</strong></td>
                  <td>Mobile Internet</td>
                  <td>WCDMA, UMTS</td>
                  <td>2 Mbps</td>
                </tr>
                <tr>
                  <td><strong>4G (2010s)</strong></td>
                  <td>High-Speed IP Data</td>
                  <td>LTE, WiMAX, OFDM</td>
                  <td>100 Mbps - 1 Gbps</td>
                </tr>
                <tr>
                  <td><strong>5G (2020s)</strong></td>
                  <td>IoT, Ultra-Low Latency</td>
                  <td>NR (New Radio), mmWave</td>
                  <td>10 Gbps+</td>
                </tr>
              </tbody>
            </table>

            <div class="deep-dive-box">
              <h5>🚀 Deep Dive: Why 5G is a Game Changer</h5>
              <p>5G isn't just faster 4G. It introduces <strong>Network Slicing</strong>, allowing operators to create virtual networks for specific use cases (e.g., a low-latency slice for autonomous cars and a high-bandwidth slice for 4K streaming) on the same physical infrastructure.</p>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>3. Wireless Transmission Basics</h4>
            <p>Understanding how signals travel is crucial.</p>
            
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Transmitter</div>
                <div class="diagram-arrow">Signal (EM Waves)</div>
                <div class="diagram-box">Receiver</div>
              </div>
            </div>

            <ul>
              <li><strong>Frequencies:</strong> Mobile networks operate in the Radio Frequency (RF) spectrum (e.g., 900 MHz, 1800 MHz, 2.4 GHz).</li>
              <li><strong>Signals:</strong> Physical representation of data. Can be Analog (continuous) or Digital (discrete).</li>
              <li><strong>Antennas:</strong> Convert electrical signals into electromagnetic waves and vice-versa.</li>
            </ul>

            <div class="example-box">
              <strong>Real World Example:</strong> When you talk on your phone, your voice (analog) is converted to digital data, modulated onto a radio wave by the antenna, and transmitted to the nearest cell tower.
            </div>
          </div>
        `
            },
            {
                title: "Mobile Computing - Paradigm & Architecture",
                content: `
          <div class="study-guide-box">
            <h4>1. The Mobile Computing Paradigm</h4>
            <p>Mobile Computing is a generic term describing your ability to use technology while moving, as opposed to portable computers, which are only practical for use while deployed in a stationary configuration.</p>

            <div class="definition-box">
              <strong>Core Concept:</strong> "Anytime, Anywhere" computing. It brings the power of a desktop computer to a handheld device, untethered by wires.
            </div>

            <h5>Key Characteristics:</h5>
            <ul>
              <li><strong>Ubiquity:</strong> Available everywhere.</li>
              <li><strong>Location Awareness:</strong> Devices know where they are (GPS).</li>
              <li><strong>Adaptation:</strong> Systems adapt to changing bandwidth and resources.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>2. 3-Tier Architecture</h4>
            <p>Mobile applications typically follow a 3-tier structure to manage resources efficiently.</p>

            <div class="diagram-container">
              <div class="diagram-box" style="background:#e0f2fe">Tier 1: Presentation (Client)</div>
              <div class="diagram-arrow">⬇⬆ User Interface / Input</div>
              <div class="diagram-box" style="background:#f0fdf4">Tier 2: Application (Middle)</div>
              <div class="diagram-arrow">⬇⬆ Business Logic / Processing</div>
              <div class="diagram-box" style="background:#fff7ed">Tier 3: Data (Database)</div>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Tier 1: Client</strong>
                Runs on the mobile device. Handles UI and user input. Lightweight to save battery.
              </div>
              <div class="concept-card">
                <strong>Tier 2: Application</strong>
                Runs on a server (e.g., Web Server). Processes data, handles logic, and formats content for the mobile.
              </div>
              <div class="concept-card">
                <strong>Tier 3: Data</strong>
                The backend database. Stores user profiles, content, and logs. Secure and scalable.
              </div>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>3. Novel Applications</h4>
            <p>Mobile computing enables applications that were previously impossible.</p>
            <ul>
              <li><strong>LBS (Location Based Services):</strong> Uber, Google Maps, "Find my Friends".</li>
              <li><strong>M-Commerce:</strong> Mobile banking, NFC payments (Apple Pay).</li>
              <li><strong>Tele-medicine:</strong> Remote patient monitoring via wearable sensors.</li>
              <li><strong>Smart Cities:</strong> Traffic management, pollution monitoring sensors.</li>
            </ul>
          </div>
        `
            },
            {
                title: "Mobile and Handheld Devices",
                content: `
          <div class="study-guide-box">
            <h4>Types of Mobile Devices</h4>
            <p>The ecosystem of mobile hardware is vast.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Smartphones</strong>
                General-purpose computers with cellular connectivity. (iPhone, Pixel).
              </div>
              <div class="concept-card">
                <strong>Tablets</strong>
                Larger screens, bridging the gap between phones and laptops. (iPad).
              </div>
              <div class="concept-card">
                <strong>Wearables</strong>
                Body-borne computers. (Smartwatches, AR Glasses).
              </div>
              <div class="concept-card">
                <strong>Sensors (IoT)</strong>
                Low-power devices that gather environmental data. (Temp sensors, GPS trackers).
              </div>
            </div>
          </div>

          <div class="study-guide-box">
            <h4>Limitations of Mobile Devices</h4>
            <p>Designing for mobile is challenging due to inherent hardware constraints.</p>

            <div class="deep-dive-box">
              <h5>1. Battery Power 🔋</h5>
              <p>The biggest bottleneck. Processors and screens are power-hungry. Battery technology (Li-Ion) improves slowly compared to CPU speed (Moore's Law).</p>
              <p><strong>Implication:</strong> Apps must be energy-efficient. Avoid polling; use push notifications.</p>
            </div>

            <div class="deep-dive-box">
              <h5>2. Bandwidth & Connectivity 📶</h5>
              <p>Wireless connections are unstable, slower than wired, and have high latency.</p>
              <p><strong>Implication:</strong> Apps must handle "Offline Mode" gracefully and sync data when connection returns.</p>
            </div>

            <div class="deep-dive-box">
              <h5>3. Screen Size & UI 📱</h5>
              <p>Small screens limit the amount of information displayed.</p>
              <p><strong>Implication:</strong> UI must be simple, uncluttered, and touch-friendly.</p>
            </div>
          </div>
        `
            },
            {
                title: "GSM Architecture & Services",
                content: `
          <div class="study-guide-box">
            <h4>1. GSM Overview</h4>
            <div class="definition-box">
              <strong>GSM (Global System for Mobile Communications)</strong> is the world's most popular standard for mobile telephony systems. It is a 2G digital technology.
            </div>
          </div>

          <div class="study-guide-box">
            <h4>2. GSM System Architecture</h4>
            <p>The network is divided into three major subsystems.</p>

            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box" style="border-color: #2563eb">Mobile Station (MS)</div>
                <div class="diagram-arrow">Air Interface (Um)</div>
                <div class="diagram-box" style="border-color: #16a34a">Base Station Subsystem (BSS)</div>
                <div class="diagram-arrow">A Interface</div>
                <div class="diagram-box" style="border-color: #dc2626">Network Subsystem (NSS)</div>
              </div>
            </div>

            <h5>A. Mobile Station (MS)</h5>
            <ul>
              <li><strong>Mobile Equipment (ME):</strong> The physical phone. Identified by IMEI.</li>
              <li><strong>Subscriber Identity Module (SIM):</strong> A smart card containing the user's identity (IMSI) and secret keys (Ki) for authentication.</li>
            </ul>

            <h5>B. Base Station Subsystem (BSS)</h5>
            <ul>
              <li><strong>BTS (Base Transceiver Station):</strong> The radio equipment (antennas). Handles signal transmission/reception.</li>
              <li><strong>BSC (Base Station Controller):</strong> The "brain" of the BSS. Manages radio resources, frequency hopping, and handovers between BTSs.</li>
            </ul>

            <h5>C. Network and Switching Subsystem (NSS)</h5>
            <ul>
              <li><strong>MSC (Mobile Switching Center):</strong> The core switch. Routes calls to other MSCs or the PSTN (landline network).</li>
              <li><strong>HLR (Home Location Register):</strong> Database of all permanent subscriber data and their current location (VLR address).</li>
              <li><strong>VLR (Visitor Location Register):</strong> Temporary database of users currently roaming in the MSC's area.</li>
              <li><strong>AuC (Authentication Center):</strong> Stores secret keys for security.</li>
              <li><strong>EIR (Equipment Identity Register):</strong> Database of valid/stolen IMEIs.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>3. GSM Services</h4>
            <table class="comparison-table">
              <tr>
                <th>Service Type</th>
                <th>Description</th>
                <th>Examples</th>
              </tr>
              <tr>
                <td><strong>Teleservices</strong></td>
                <td>End-to-end communication services.</td>
                <td>Voice Calls, SMS, MMS, Fax.</td>
              </tr>
              <tr>
                <td><strong>Bearer Services</strong></td>
                <td>Data transmission services (lower layers).</td>
                <td>Circuit-switched data (9.6 kbps), Packet data (GPRS).</td>
              </tr>
              <tr>
                <td><strong>Supplementary Services</strong></td>
                <td>Add-on features.</td>
                <td>Call Forwarding, Call Waiting, Caller ID, Conference Calling.</td>
              </tr>
            </table>
          </div>
        `
            }
        ]
    },
    {
        unit: "II",
        title: "(Wireless) Medium Access Control (MAC)",
        notes: "<h3>Unit II Overview</h3><p>Focuses on how multiple users share the wireless medium (MAC) and how IP works in mobile environments (Mobile IP).</p>",
        topics: [
            {
                title: "Motivation for Specialized MAC",
                content: `
          <div class="study-guide-box">
            <h4>Why Standard Ethernet (CSMA/CD) Fails in Wireless</h4>
            <p>In wired networks, we use CSMA/CD (Carrier Sense Multiple Access with Collision Detection). If a collision occurs, the voltage spikes, and everyone stops. In wireless, this is impossible because:</p>
            <ul>
              <li><strong>Signal Attenuation:</strong> The transmitted signal is millions of times stronger than the received signal. A node cannot "hear" a collision while it is transmitting (it deafens itself).</li>
              <li><strong>Hidden Terminal Problem:</strong> Nodes may not hear each other.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>The Hidden Terminal Problem</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">A</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">B</div>
                <div class="diagram-arrow">⬅</div>
                <div class="diagram-box">C</div>
              </div>
            </div>
            <p><strong>Scenario:</strong> A is in range of B. C is in range of B. But A and C are <em>not</em> in range of each other.</p>
            <p><strong>Problem:</strong> A transmits to B. C checks the medium, hears nothing (since A is out of range), and transmits to B. <strong>Collision at B!</strong></p>
          </div>

          <div class="study-guide-box">
            <h4>The Exposed Terminal Problem</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">A</div>
                <div class="diagram-arrow">⬅</div>
                <div class="diagram-box">B</div>
                <div class="diagram-box">C</div>
                <div class="diagram-arrow">➡</div>
                <div class="diagram-box">D</div>
              </div>
            </div>
            <p><strong>Scenario:</strong> B sends to A. C wants to send to D.</p>
            <p><strong>Problem:</strong> C hears B transmitting and waits. But C's transmission to D would <em>not</em> interfere with B's transmission to A (since A is out of C's range). <strong>Result:</strong> Unnecessary waiting (wasted bandwidth). </p>
          </div>

          <div class="key-takeaway">
            <strong>Solution:</strong> Wireless networks use <strong>CSMA/CA (Collision Avoidance)</strong> with RTS/CTS (Request to Send / Clear to Send) packets to reserve the medium.
          </div>
        `
            },
            {
                title: "SDMA, FDMA, TDMA, CDMA",
                content: `
          <div class="study-guide-box">
            <h4>Multiple Access Techniques</h4>
            <p>How do we allow multiple users to talk at the same time?</p>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>SDMA (Space)</strong>
                Control radiated energy into specific sectors.
                <em>Analogy:</em> Two people talking in different rooms.
              </div>
              <div class="concept-card">
                <strong>FDMA (Frequency)</strong>
                Assign distinct frequencies.
                <em>Analogy:</em> Two people talking at different pitches (bass vs soprano).
              </div>
              <div class="concept-card">
                <strong>TDMA (Time)</strong>
                Assign distinct time slots.
                <em>Analogy:</em> Two people taking turns talking.
              </div>
              <div class="concept-card">
                <strong>CDMA (Code)</strong>
                Assign unique mathematical codes.
                <em>Analogy:</em> Two people speaking different languages in the same room.
              </div>
            </div>

            <div class="deep-dive-box">
              <h5>🚀 Deep Dive: CDMA (Code Division Multiple Access)</h5>
              <p>CDMA uses <strong>Spread Spectrum</strong> technology. Each user is assigned a unique <strong>Orthogonal Code</strong> (Chipping Sequence).</p>
              <ul>
                <li>Sender multiplies data bits by the code.</li>
                <li>Receiver multiplies the incoming signal by the same code.</li>
                <li>Other users' signals appear as random noise (interference) and are filtered out.</li>
              </ul>
              <p><strong>Advantage:</strong> Secure, resistant to jamming, and allows soft handovers.</p>
            </div>
          </div>
        `
            },
            {
                title: "Mobile Network Layer (Mobile IP)",
                content: `
          <div class="study-guide-box">
            <h4>The Problem with Standard IP</h4>
            <p>In standard IP, your IP address identifies <strong>who you are</strong> AND <strong>where you are</strong> (network prefix). If you move to a new network, your IP must change. If your IP changes, all active TCP connections break.</p>
            <div class="definition-box">
              <strong>Mobile IP</strong> is a standard (RFC 3344) that allows a Mobile Node to keep the same IP address (Home Address) while moving across networks.
            </div>
          </div>

          <div class="study-guide-box">
            <h4>Mobile IP Entities</h4>
            <ul>
              <li><strong>Mobile Node (MN):</strong> The device (e.g., laptop) moving around.</li>
              <li><strong>Home Agent (HA):</strong> A router in the MN's home network. It intercepts packets destined for the MN and tunnels them.</li>
              <li><strong>Foreign Agent (FA):</strong> A router in the visited network. It receives tunneled packets and delivers them to the MN.</li>
              <li><strong>Care-of Address (CoA):</strong> A temporary IP address that identifies the MN's current location in the foreign network.</li>
            </ul>
          </div>

          <div class="study-guide-box">
            <h4>How It Works (The Process)</h4>
            <ol>
              <li><strong>Agent Discovery:</strong> HA and FA broadcast advertisements. MN listens to determine if it's at home or away.</li>
              <li><strong>Registration:</strong>
                <ul>
                  <li>MN gets a CoA from the FA.</li>
                  <li>MN sends a Registration Request to HA (via FA) saying "I am now at this CoA".</li>
                  <li>HA updates its routing table.</li>
                </ul>
              </li>
              <li><strong>Tunneling (Data Transfer):</strong>
                <ul>
                  <li>Correspondent Node (CN) sends packet to MN's Home Address.</li>
                  <li>HA intercepts the packet.</li>
                  <li>HA <strong>encapsulates</strong> the packet (IP-in-IP) and sends it to the CoA.</li>
                  <li>FA receives, <strong>decapsulates</strong>, and delivers the original packet to MN.</li>
                </ul>
              </li>
            </ol>
          </div>
        `
            },
            {
                title: "DHCP",
                content: `
          <div class="study-guide-box">
            <h4>DHCP (Dynamic Host Configuration Protocol)</h4>
            <p>A protocol used to automatically assign IP addresses and other network configuration parameters (Subnet mask, Gateway, DNS) to devices.</p>
            
            <div class="example-box">
              <strong>The DORA Process:</strong>
              <ul>
                <li><strong>D</strong>iscover: Client broadcasts "Is there a DHCP server?"</li>
                <li><strong>O</strong>ffer: Server says "Yes, here is an IP (192.168.1.5)."</li>
                <li><strong>R</strong>equest: Client says "I'll take it."</li>
                <li><strong>A</strong>cknowledge: Server says "Confirmed. It's yours for 24 hours."</li>
              </ul>
            </div>
          </div>
        `
            }
        ]
    },
    {
        unit: "III",
        title: "Mobile Transport Layer",
        notes: "<h3>Unit III Overview</h3><p>Covers TCP adaptations for mobile networks and database issues like hoarding and caching.</p>",
        topics: [
            {
                title: "Conventional TCP vs Mobile",
                content: `
          <div class="study-guide-box">
            <h4>The TCP Problem</h4>
            <p>TCP (Transmission Control Protocol) is tuned for wired networks. It assumes that <strong>Packet Loss = Network Congestion</strong>.</p>
            <p><strong>Reaction:</strong> When a packet is lost, TCP invokes congestion control (slow start), drastically reducing the transmission speed.</p>
            
            <div class="deep-dive-box">
              <h5>Why this is bad for Mobile</h5>
              <p>In wireless networks, packet loss is rarely due to congestion. It is usually due to:</p>
              <ul>
                <li><strong>Bit Errors:</strong> Noise/Interference on the radio link.</li>
                <li><strong>Handovers:</strong> Brief disconnection while switching towers.</li>
              </ul>
              <p><strong>Result:</strong> TCP "thinks" the network is congested and slows down unnecessarily, leading to poor throughput.</p>
            </div>
          </div>
        `
            },
            {
                title: "Indirect TCP (I-TCP)",
                content: `
          <div class="study-guide-box">
            <h4>Indirect TCP (I-TCP)</h4>
            <p><strong>Idea:</strong> Split the connection into two separate connections.</p>
            
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Fixed Host</div>
                <div class="diagram-arrow">Connection 1 (Standard TCP)</div>
                <div class="diagram-box">Base Station (BS)</div>
                <div class="diagram-arrow">Connection 2 (Wireless TCP)</div>
                <div class="diagram-box">Mobile Host</div>
              </div>
            </div>

            <ul>
              <li><strong>Connection 1:</strong> Between Fixed Host and BS. Uses standard TCP. BS acts as the receiver for the Fixed Host.</li>
              <li><strong>Connection 2:</strong> Between BS and Mobile Host. Uses a protocol optimized for wireless (e.g., fast retransmission, selective ACKs).</li>
            </ul>

            <div class="concept-grid">
              <div class="concept-card">
                <strong>Advantage</strong>
                Isolates the fixed network from wireless errors.
              </div>
              <div class="concept-card">
                <strong>Disadvantage</strong>
                Breaks end-to-end semantics. If BS crashes after ACKing, data is lost.
              </div>
            </div>
          </div>
        `
            },
            {
                title: "Snooping TCP",
                content: `
          <div class="study-guide-box">
            <h4>Snooping TCP</h4>
            <p><strong>Idea:</strong> The Base Station is "smart". It monitors (snoops) packets flowing through it.</p>
            <ul>
              <li>BS buffers packets sent to the Mobile Host.</li>
              <li>If BS sees a duplicate ACK (indicating loss), it retransmits the packet from its buffer <strong>locally</strong> to the Mobile Host.</li>
              <li>It suppresses the duplicate ACK from reaching the Fixed Host.</li>
            </ul>
            <p><strong>Benefit:</strong> The Fixed Host never knows a loss occurred, so it doesn't slow down. End-to-end semantics are preserved (BS doesn't ACK, it just buffers).</p>
          </div>
        `
            },
            {
                title: "Database Hoarding & Caching",
                content: `
          <div class="study-guide-box">
            <h4>Disconnected Operations</h4>
            <p>Mobile devices frequently disconnect. How do we keep apps working?</p>

            <h5>1. Hoarding (Prefetching)</h5>
            <div class="definition-box">
              The process of predictively downloading data that the user <em>is likely to need</em> in the future, before the device disconnects.
            </div>
            <p><strong>Example:</strong> Google Maps downloading the map of your route before you enter a tunnel.</p>

            <h5>2. Caching</h5>
            <p>Storing accessed data locally.</p>
            <div class="deep-dive-box">
              <h5>Cache Consistency Issue</h5>
              <p>If the data changes on the server, the mobile cache becomes stale. How do we fix this?</p>
              <ul>
                <li><strong>Invalidation Reports:</strong> Server broadcasts a list of changed items. Clients check this list.</li>
                <li><strong>Polling:</strong> Client asks server "Has this changed?" every time it accesses data. (High overhead).</li>
              </ul>
            </div>
          </div>
        `
            }
        ]
    },
    {
        unit: "IV",
        title: "Data Dissemination and Synchronization",
        notes: "<h3>Unit IV Overview</h3><p>Explores how data is delivered to mobile devices (Push/Pull) and how synchronization is handled.</p>",
        topics: [
            {
                title: "Data Delivery Mechanisms",
                content: `
          <div class="study-guide-box">
            <h4>Communication Asymmetry</h4>
            <p>In mobile networks, Downlink (Server -> Client) is fast. Uplink (Client -> Server) is slow and power-consuming.</p>
          </div>

          <div class="study-guide-box">
            <h4>1. Push-Based (Publish-Subscribe)</h4>
            <p>Server sends data without a specific request.</p>
            <ul>
              <li><strong>Pros:</strong> Highly scalable. Server load doesn't increase with more clients (Broadcast).</li>
              <li><strong>Cons:</strong> "Spam" factor. User might get irrelevant data.</li>
              <li><strong>Use Case:</strong> Emergency alerts, Stock tickers, Traffic updates.</li>
            </ul>

            <h4>2. Pull-Based (On-Demand)</h4>
            <p>Client requests specific data.</p>
            <ul>
              <li><strong>Pros:</strong> Personalized. No junk data.</li>
              <li><strong>Cons:</strong> Server bottleneck. High energy cost for client (sending requests).</li>
              <li><strong>Use Case:</strong> Web browsing, Database queries.</li>
            </ul>

            <h4>3. Hybrid</h4>
            <p>Push popular data. Pull specific data.</p>
          </div>
        `
            },
            {
                title: "Selective Tuning & Indexing",
                content: `
          <div class="study-guide-box">
            <h4>The Problem: Battery Drain</h4>
            <p>Listening to a broadcast channel consumes power. We want the device to sleep and wake up <em>only</em> when its data is on air.</p>

            <h4>Solution: Indexing</h4>
            <div class="diagram-container">
              <div class="diagram-row">
                <div class="diagram-box">Index</div>
                <div class="diagram-arrow">...Data...</div>
                <div class="diagram-box">Item A</div>
                <div class="diagram-arrow">...</div>
                <div class="diagram-box">Item B</div>
              </div>
            </div>
            <ol>
              <li>Mobile wakes up and reads the <strong>Index</strong>.</li>
              <li>Index says: "Item B will be broadcast at t=50ms".</li>
              <li>Mobile goes to <strong>Sleep</strong>.</li>
              <li>Mobile wakes up at t=50ms, downloads Item B.</li>
            </ol>
            <p><strong>Trade-off:</strong> Index takes up bandwidth, making the broadcast cycle longer (Access Latency increases), but Tuning Time (Power) decreases.</p>
          </div>
        `
            },
            {
                title: "Data Synchronization",
                content: `
          <div class="study-guide-box">
            <h4>Data Synchronization</h4>
            <p>When a mobile device modifies data while offline, it must reconcile these changes with the server upon reconnection.</p>

            <h5>Conflict Resolution</h5>
            <p>What if two users edit the same file?</p>
            <ul>
              <li><strong>Timestamp:</strong> Last write wins.</li>
              <li><strong>User Intervention:</strong> Ask the user to merge.</li>
              <li><strong>Application Logic:</strong> Merge automatically (e.g., appending to a log).</li>
            </ul>

            <h5>SyncML</h5>
            <p>An industry-standard XML-based protocol for synchronizing data (contacts, calendar, emails) across different devices and networks.</p>
          </div>
        `
            }
        ]
    },
    {
        unit: "V",
        title: "Mobile Ad hoc Networks (MANETs)",
        notes: "<h3>Unit V Overview</h3><p>Introduction to MANETs, their characteristics, and routing protocols (DSDV, DSR, AODV).</p>",
        topics: [
            {
                title: "MANET Introduction",
                content: `
          <div class="study-guide-box">
            <h4>What is a MANET?</h4>
            <div class="definition-box">
              <strong>Mobile Ad hoc Network (MANET)</strong> is a decentralized network of mobile devices connected by wireless links. Each node acts as both a host and a router.
            </div>

            <h5>Characteristics:</h5>
            <ul>
              <li><strong>Dynamic Topology:</strong> Nodes move, links break and form continuously.</li>
              <li><strong>Multi-hop Routing:</strong> No base stations. Packets jump from node to node.</li>
              <li><strong>Energy Constrained:</strong> Battery operated.</li>
              <li><strong>Security:</strong> Vulnerable to eavesdropping and denial of service.</li>
            </ul>
          </div>
        `
            },
            {
                title: "Routing Protocols Classification",
                content: `
          <div class="study-guide-box">
            <h4>Routing in MANETs</h4>
            <p>Standard routing (OSPF, RIP) fails because topology changes too fast.</p>

            <table class="comparison-table">
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Examples</th>
                <th>Pros/Cons</th>
              </tr>
              <tr>
                <td><strong>Proactive (Table-Driven)</strong></td>
                <td>Maintain routes to ALL destinations at ALL times. Periodic updates.</td>
                <td>DSDV</td>
                <td>✅ Low latency (route ready).<br/>❌ High overhead (wasted updates).</td>
              </tr>
              <tr>
                <td><strong>Reactive (On-Demand)</strong></td>
                <td>Find route only when needed.</td>
                <td>DSR, AODV</td>
                <td>✅ Low overhead.<br/>❌ High latency (Route Discovery delay).</td>
              </tr>
            </table>
          </div>
        `
            },
            {
                title: "AODV vs DSR",
                content: `
          <div class="study-guide-box">
            <h4>DSR (Dynamic Source Routing)</h4>
            <p>Uses <strong>Source Routing</strong>. The sender decides the full path and puts the list of all nodes in the packet header.</p>
            <p><strong>Route Discovery:</strong> Flood RREQ. Destination replies with RREP containing the path.</p>
            <p><strong>Pros:</strong> Loop-free. <strong>Cons:</strong> Large packet headers.</p>
          </div>

          <div class="study-guide-box">
            <h4>AODV (Ad hoc On-Demand Distance Vector)</h4>
            <p>Combines on-demand mechanism of DSR with hop-by-hop routing of DSDV.</p>
            <p>Nodes maintain a routing table. Packet header only contains destination IP.</p>
            <p><strong>Pros:</strong> Lower header overhead. Good for dynamic environments.</p>
          </div>
        `
            }
        ]
    }
];
