export const syllabus = [
  {
    unit: "I",
    title: "Introduction to Mobile Computing",
    notes: "<h3>Unit I Overview</h3><p>This unit establishes the foundation of Mobile Computing, distinguishing it from general wireless networking. It covers the essential 3-Tier architecture used in mobile apps and provides a comprehensive deep-dive into the Global System for Mobile Communications (GSM), the standard that defined modern cellular networks.</p>",
    topics: [
      {
        title: "Introduction to Mobile Computing",
        content: `
          <div class="study-guide-box">
            <h4>1. Definition & Core Concepts</h4>
            <div class="definition-box">
              <strong>Mobile Computing:</strong> A technology paradigm that allows transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link. It focuses on the ability to compute while moving.
            </div>
            
            <h5>The Three Dimensions of Mobile Computing:</h5>
            <ul>
              <li><strong>Ubiquity:</strong> The ability to access information and services from anywhere, at any time. The user is not tied to a specific location.</li>
              <li><strong>Convenience:</strong> Devices are portable, lightweight, and designed for easy interaction, allowing users to carry their "office" with them.</li>
              <li><strong>Connectivity:</strong> Continuous access to the network (Internet/Intranet) regardless of movement, ensuring real-time data availability.</li>
            </ul>

            <h4>2. Mobile Computing vs. Wireless Networking</h4>
            <p>While often used interchangeably, they are distinct concepts:</p>
            <table class="comparison-table">
              <tr>
                <th>Feature</th>
                <th>Mobile Computing</th>
                <th>Wireless Networking</th>
              </tr>
              <tr>
                <td><strong>Primary Focus</strong></td>
                <td><strong>Computing while moving.</strong> Focuses on the applications, user experience, and data access on portable devices.</td>
                <td><strong>Communication without wires.</strong> Focuses on the physical infrastructure (radio waves, routers) that replaces cables.</td>
              </tr>
              <tr>
                <td><strong>Dependency</strong></td>
                <td>Relies on wireless networking as a transport medium.</td>
                <td>Can exist without mobile computing (e.g., a fixed desktop connected via Wi-Fi).</td>
              </tr>
              <tr>
                <td><strong>Key Challenges</strong></td>
                <td>Battery life, screen size, user interface, variable bandwidth, mobility management.</td>
                <td>Signal interference, spectrum allocation, data rate, coverage area.</td>
              </tr>
              <tr>
                <td><strong>Example</strong></td>
                <td>Checking email on a smartphone while riding a train.</td>
                <td>Connecting a printer to a router using Wi-Fi.</td>
              </tr>
            </table>
          </div>
        `
      },
      {
        title: "Architecture of Mobile Computing",
        content: `
          <div class="study-guide-box">
            <h4>The 3-Tier Architecture</h4>
            <p>Modern mobile applications are rarely standalone; they interact with remote servers. The 3-Tier Architecture is the industry standard for designing scalable and secure mobile systems.</p>
            
            <!-- 3-Tier Architecture Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #f8f9fa; border-radius: 8px;">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#555" />
                  </marker>
                </defs>
                
                <!-- Tier 1 -->
                <rect x="50" y="50" width="150" height="200" rx="10" fill="#e3f2fd" stroke="#1e88e5" stroke-width="2"/>
                <text x="125" y="80" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#0d47a1">Tier 1</text>
                <text x="125" y="105" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#1565c0">Presentation</text>
                <text x="125" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Mobile Device</text>
                <text x="125" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">(UI / Browser)</text>

                <!-- Arrow 1-2 -->
                <line x1="200" y1="150" x2="300" y2="150" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="250" y="140" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#666">HTTP/Request</text>

                <!-- Tier 2 -->
                <rect x="300" y="50" width="150" height="200" rx="10" fill="#fff3e0" stroke="#fb8c00" stroke-width="2"/>
                <text x="375" y="80" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#e65100">Tier 2</text>
                <text x="375" y="105" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#ef6c00">Application</text>
                <text x="375" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Web Server</text>
                <text x="375" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">(Business Logic)</text>

                <!-- Arrow 2-3 -->
                <line x1="450" y1="150" x2="550" y2="150" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="500" y="140" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#666">SQL/Query</text>

                <!-- Tier 3 -->
                <rect x="550" y="50" width="150" height="200" rx="10" fill="#e8f5e9" stroke="#43a047" stroke-width="2"/>
                <text x="625" y="80" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#1b5e20">Tier 3</text>
                <text x="625" y="105" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#2e7d32">Data</text>
                <text x="625" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Database</text>
                <text x="625" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">(Storage)</text>
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Tier 1: Presentation Tier (Client)</h5>
                <p><strong>Location:</strong> Runs on the mobile device (Smartphone, Tablet).</p>
                <p><strong>Responsibilities:</strong> UI, Input Capture, Basic Validation.</p>
              </div>
              <div class="concept-card">
                <h5>Tier 2: Application Tier (Server)</h5>
                <p><strong>Location:</strong> Remote server.</p>
                <p><strong>Responsibilities:</strong> Business Logic, Decision Making, Security.</p>
              </div>
              <div class="concept-card">
                <h5>Tier 3: Data Tier (Database)</h5>
                <p><strong>Location:</strong> Database server.</p>
                <p><strong>Responsibilities:</strong> Data Storage, Retrieval, Integrity.</p>
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
            <p>GSM is the standard that created the second generation (2G) of mobile networks. Its modular architecture is the blueprint for modern cellular systems.</p>
            
            <!-- GSM Architecture Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff; border: 1px solid #ddd; border-radius: 8px;">
                <defs>
                  <marker id="arrowhead-gsm" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                  </marker>
                </defs>

                <!-- MS -->
                <rect x="20" y="150" width="80" height="100" rx="5" fill="#e1bee7" stroke="#8e24aa" stroke-width="2" />
                <text x="60" y="205" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#4a148c">MS</text>
                
                <!-- Um Interface -->
                <line x1="100" y1="200" x2="160" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-gsm)" />
                <text x="130" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#555">Um</text>

                <!-- BSS Area -->
                <rect x="160" y="100" width="200" height="200" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5" />
                <text x="260" y="120" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#666">BSS</text>
                
                <rect x="180" y="150" width="60" height="100" rx="5" fill="#bbdefb" stroke="#1976d2" stroke-width="2" />
                <text x="210" y="205" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0d47a1">BTS</text>
                
                <line x1="240" y1="200" x2="280" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-gsm)" />
                
                <rect x="280" y="150" width="60" height="100" rx="5" fill="#bbdefb" stroke="#1976d2" stroke-width="2" />
                <text x="310" y="205" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0d47a1">BSC</text>

                <!-- A Interface -->
                <line x1="340" y1="200" x2="400" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-gsm)" />
                <text x="370" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#555">A-Int</text>

                <!-- NSS Area -->
                <rect x="400" y="50" width="380" height="300" rx="5" fill="none" stroke="#666" stroke-dasharray="5,5" />
                <text x="590" y="70" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#666">NSS (Core Network)</text>

                <rect x="420" y="150" width="80" height="100" rx="5" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" />
                <text x="460" y="205" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1b5e20">MSC</text>

                <!-- Databases -->
                <g transform="translate(550, 100)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#fff9c4" stroke="#fbc02d" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#f57f17">HLR</text>
                </g>
                <g transform="translate(550, 160)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#fff9c4" stroke="#fbc02d" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#f57f17">VLR</text>
                </g>
                <g transform="translate(550, 220)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#ffccbc" stroke="#d84315" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#bf360c">AuC</text>
                </g>
                <g transform="translate(550, 280)">
                   <rect x="0" y="0" width="80" height="40" rx="5" fill="#cfd8dc" stroke="#455a64" stroke-width="2" />
                   <text x="40" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#263238">EIR</text>
                </g>

                <!-- Connections -->
                <line x1="500" y1="200" x2="550" y2="120" stroke="#999" stroke-width="1" />
                <line x1="500" y1="200" x2="550" y2="180" stroke="#999" stroke-width="1" />
                <line x1="500" y1="200" x2="550" y2="240" stroke="#999" stroke-width="1" />
                <line x1="500" y1="200" x2="550" y2="300" stroke="#999" stroke-width="1" />

              </svg>
            </div>

            <div class="deep-dive-box">
              <h4>1. Mobile Station (MS)</h4>
              <p><strong>ME (Mobile Equipment):</strong> The phone hardware (IMEI).<br/><strong>SIM (Subscriber Identity Module):</strong> The smart card (IMSI, Ki).</p>
            </div>

            <div class="deep-dive-box">
              <h4>2. Base Station Subsystem (BSS)</h4>
              <p><strong>BTS (Base Transceiver Station):</strong> The radio tower.<br/><strong>BSC (Base Station Controller):</strong> Manages radio resources and handovers.</p>
            </div>

            <div class="deep-dive-box">
              <h4>3. Network Switching Subsystem (NSS)</h4>
              <p><strong>MSC:</strong> Call routing switch.<br/><strong>HLR:</strong> Permanent user database.<br/><strong>VLR:</strong> Temporary roaming database.<br/><strong>AuC:</strong> Security keys.<br/><strong>EIR:</strong> Stolen phone list.</p>
            </div>
          </div>
        `
      },
      {
        title: "GSM Call Routing",
        content: `
          <div class="study-guide-box">
            <h4>How a Call is Connected</h4>
            
            <!-- Mobile Terminating Call Flowchart -->
            <div class="diagram-container">
              <h5 style="text-align:center; margin-bottom: 10px;">Mobile Terminating (MT) Call Flow</h5>
              <svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #f0f4c3; border-radius: 8px;">
                 <defs>
                  <marker id="arrowhead-flow" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                  </marker>
                </defs>

                <!-- Steps -->
                <g transform="translate(20, 100)">
                  <rect width="100" height="50" rx="5" fill="#fff" stroke="#333" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">1. PSTN Call</text>
                </g>
                <line x1="120" y1="125" x2="150" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(150, 100)">
                  <rect width="100" height="50" rx="5" fill="#c8e6c9" stroke="#2e7d32" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">2. GMSC</text>
                </g>
                <line x1="250" y1="125" x2="280" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(280, 100)">
                  <rect width="100" height="50" rx="5" fill="#fff9c4" stroke="#fbc02d" />
                  <text x="50" y="20" font-size="10" text-anchor="middle">3. HLR Query</text>
                  <text x="50" y="40" font-size="10" text-anchor="middle">(Get MSRN)</text>
                </g>
                <line x1="380" y1="125" x2="410" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(410, 100)">
                  <rect width="100" height="50" rx="5" fill="#c8e6c9" stroke="#2e7d32" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">4. Visited MSC</text>
                </g>
                <line x1="510" y1="125" x2="540" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(540, 100)">
                  <rect width="100" height="50" rx="5" fill="#bbdefb" stroke="#1565c0" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">5. Paging (BSS)</text>
                </g>
                <line x1="640" y1="125" x2="670" y2="125" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-flow)" />

                <g transform="translate(670, 100)">
                  <rect width="100" height="50" rx="5" fill="#e1bee7" stroke="#6a1b9a" />
                  <text x="50" y="30" font-size="12" text-anchor="middle">6. Mobile Rings</text>
                </g>
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Mobile Originating (MO) Call</h5>
                <ol>
                  <li><strong>Request:</strong> MS -> BSS -> MSC.</li>
                  <li><strong>Auth:</strong> MSC checks VLR/AuC.</li>
                  <li><strong>Setup:</strong> MSC routes to PSTN.</li>
                  <li><strong>Connect:</strong> Voice path established.</li>
                </ol>
              </div>
              <div class="concept-card">
                <h5>Mobile Terminating (MT) Call</h5>
                <ol>
                  <li><strong>Entry:</strong> Call hits GMSC.</li>
                  <li><strong>Locate:</strong> GMSC asks HLR. HLR asks VLR.</li>
                  <li><strong>MSRN:</strong> VLR gives MSRN to HLR -> GMSC.</li>
                  <li><strong>Route:</strong> GMSC routes to current MSC.</li>
                  <li><strong>Page:</strong> MSC pages MS.</li>
                </ol>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    unit: "II",
    title: "Wireless Medium Access Control and Mobile Network Layer",
    notes: "<h3>Unit II Overview</h3><p>This unit explores the challenges of sharing the wireless medium (MAC Layer) and the complex problem of maintaining an IP address while moving across different networks (Mobile IP).</p>",
    topics: [
      {
        title: "Medium Access Control (MAC)",
        content: `
          <div class="study-guide-box">
            <h4>The Hidden Terminal Problem</h4>
            
            <!-- Hidden Terminal Diagram -->
            <div class="diagram-container">
               <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff; border: 1px solid #eee; border-radius: 8px;">
                <!-- Range Circles -->
                <circle cx="100" cy="100" r="90" fill="rgba(33, 150, 243, 0.1)" stroke="#2196f3" stroke-dasharray="4" />
                <circle cx="500" cy="100" r="90" fill="rgba(244, 67, 54, 0.1)" stroke="#f44336" stroke-dasharray="4" />
                
                <!-- Nodes -->
                <circle cx="100" cy="100" r="20" fill="#2196f3" />
                <text x="100" y="105" fill="white" text-anchor="middle" font-weight="bold">A</text>
                
                <circle cx="300" cy="100" r="20" fill="#4caf50" />
                <text x="300" y="105" fill="white" text-anchor="middle" font-weight="bold">B</text>
                
                <circle cx="500" cy="100" r="20" fill="#f44336" />
                <text x="500" y="105" fill="white" text-anchor="middle" font-weight="bold">C</text>

                <!-- Labels -->
                <text x="100" y="180" text-anchor="middle" font-size="12">Range of A</text>
                <text x="500" y="180" text-anchor="middle" font-size="12">Range of C</text>
                <text x="300" y="50" text-anchor="middle" font-size="14" font-weight="bold">Collision at B!</text>
                <text x="300" y="150" text-anchor="middle" font-size="12" fill="#666">A and C cannot see each other.</text>
               </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Hidden Terminal Problem</h5>
                <p><strong>Scenario:</strong> A and C want to send to B. A and C are far apart.</p>
                <p><strong>Issue:</strong> A transmits. C checks medium, hears silence (can't hear A), and transmits. <strong>Collision at B!</strong></p>
                <p><strong>Solution:</strong> RTS/CTS (Request to Send / Clear to Send).</p>
              </div>
              <div class="concept-card">
                <h5>Exposed Terminal Problem</h5>
                <p><strong>Scenario:</strong> B sends to A. C wants to send to D.</p>
                <p><strong>Issue:</strong> C hears B and waits unnecessarily.</p>
                <p><strong>Result:</strong> Wasted bandwidth.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "Multiplexing Techniques",
        content: `
          <div class="study-guide-box">
            <h4>Sharing the Spectrum</h4>
            <table class="comparison-table">
              <tr><th>Technique</th><th>Concept</th><th>Analogy</th></tr>
              <tr><td><strong>SDMA</strong></td><td>Space Division.</td><td>Separate rooms.</td></tr>
              <tr><td><strong>FDMA</strong></td><td>Frequency Division.</td><td>Radio stations.</td></tr>
              <tr><td><strong>TDMA</strong></td><td>Time Division.</td><td>Taking turns speaking.</td></tr>
              <tr><td><strong>CDMA</strong></td><td>Code Division.</td><td>Different languages.</td></tr>
            </table>
          </div>
        `
      },
      {
        title: "Mobile IP",
        content: `
          <div class="study-guide-box">
            <h4>Mobile IP Architecture</h4>
            
            <!-- Mobile IP Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #e0f7fa; border-radius: 8px;">
                <defs>
                  <marker id="arrowhead-mip" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#006064" />
                  </marker>
                </defs>

                <!-- Home Network -->
                <rect x="50" y="50" width="200" height="200" rx="10" fill="#fff" stroke="#00bcd4" stroke-dasharray="5,5" />
                <text x="150" y="70" text-anchor="middle" fill="#00bcd4" font-weight="bold">Home Network</text>
                
                <rect x="100" y="100" width="100" height="60" rx="5" fill="#00bcd4" />
                <text x="150" y="135" text-anchor="middle" fill="white" font-weight="bold">HA (Home Agent)</text>

                <!-- Foreign Network -->
                <rect x="550" y="50" width="200" height="200" rx="10" fill="#fff" stroke="#ff9800" stroke-dasharray="5,5" />
                <text x="650" y="70" text-anchor="middle" fill="#ff9800" font-weight="bold">Foreign Network</text>
                
                <rect x="600" y="100" width="100" height="60" rx="5" fill="#ff9800" />
                <text x="650" y="135" text-anchor="middle" fill="white" font-weight="bold">FA (Foreign Agent)</text>

                <!-- MN -->
                <circle cx="650" cy="210" r="20" fill="#9c27b0" />
                <text x="650" y="245" text-anchor="middle" fill="#9c27b0" font-weight="bold">MN</text>

                <!-- Internet/Tunnel -->
                <path d="M 200 130 Q 400 50 600 130" stroke="#006064" stroke-width="4" fill="none" stroke-dasharray="10,5" marker-end="url(#arrowhead-mip)" />
                <text x="400" y="80" text-anchor="middle" fill="#006064" font-weight="bold">Tunnel</text>

                <!-- CN -->
                <rect x="350" y="220" width="100" height="50" rx="5" fill="#607d8b" />
                <text x="400" y="250" text-anchor="middle" fill="white">CN (Sender)</text>
                
                <!-- CN to HA -->
                <line x1="350" y1="245" x2="150" y2="160" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-mip)" />
                <text x="250" y="220" text-anchor="middle" font-size="12">1. Packet to Home IP</text>

              </svg>
            </div>

            <div class="definition-box">
              <h5>Key Entities</h5>
              <ul>
                <li><strong>HA (Home Agent):</strong> Intercepts packets on home network.</li>
                <li><strong>FA (Foreign Agent):</strong> Receives tunneled packets on visited network.</li>
                <li><strong>CoA (Care-of Address):</strong> Temporary address at FA.</li>
                <li><strong>Tunneling:</strong> Encapsulating packet inside another packet to route it to CoA.</li>
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
    notes: "<h3>Unit III Overview</h3><p>Standard TCP performs poorly in wireless. This unit covers solutions like I-TCP and Snooping TCP.</p>",
    topics: [
      {
        title: "Traditional TCP Issues",
        content: `
          <div class="study-guide-box">
            <h4>The "Congestion" Assumption</h4>
            <p>TCP assumes packet loss = Congestion. In wireless, loss = Noise/Handover. TCP slows down unnecessarily.</p>
          </div>
        `
      },
      {
        title: "TCP Improvements",
        content: `
          <div class="study-guide-box">
            <h4>Indirect TCP (I-TCP)</h4>
            
            <!-- I-TCP Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff3e0; border-radius: 8px;">
                <!-- Fixed Host -->
                <rect x="20" y="50" width="80" height="50" rx="5" fill="#795548" />
                <text x="60" y="80" text-anchor="middle" fill="white">FH</text>

                <!-- Base Station -->
                <rect x="260" y="40" width="80" height="70" rx="5" fill="#ff9800" />
                <text x="300" y="80" text-anchor="middle" fill="white" font-weight="bold">Base Station</text>

                <!-- Mobile Host -->
                <rect x="500" y="50" width="80" height="50" rx="5" fill="#2196f3" />
                <text x="540" y="80" text-anchor="middle" fill="white">MH</text>

                <!-- Connection 1 -->
                <line x1="100" y1="75" x2="260" y2="75" stroke="#333" stroke-width="3" />
                <text x="180" y="65" text-anchor="middle" font-size="12">Standard TCP</text>

                <!-- Connection 2 -->
                <line x1="340" y1="75" x2="500" y2="75" stroke="#333" stroke-width="3" stroke-dasharray="5,5" />
                <text x="420" y="65" text-anchor="middle" font-size="12">Wireless TCP</text>
                
                <!-- Split -->
                <line x1="300" y1="40" x2="300" y2="110" stroke="white" stroke-width="2" />
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Indirect TCP (I-TCP)</h5>
                <p>Splits connection at BS. FH sees standard TCP. Wireless link is isolated.</p>
              </div>
              <div class="concept-card">
                <h5>Snooping TCP</h5>
                <p>BS monitors packets. Retransmits locally if lost. Preserves end-to-end semantics.</p>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    unit: "IV",
    title: "Data Dissemination and Synchronization",
    notes: "<h3>Unit IV Overview</h3><p>Efficient data delivery (Push/Pull) and consistency (Sync).</p>",
    topics: [
      {
        title: "Data Dissemination",
        content: `
          <div class="study-guide-box">
            <h4>Push vs. Pull</h4>
            
            <!-- Push Pull Diagram -->
            <div class="diagram-container">
              <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #f3e5f5; border-radius: 8px;">
                 <!-- Server -->
                 <rect x="50" y="20" width="100" height="160" rx="5" fill="#9c27b0" />
                 <text x="100" y="105" text-anchor="middle" fill="white" font-weight="bold">Server</text>

                 <!-- Clients -->
                 <circle cx="500" cy="50" r="20" fill="#2196f3" />
                 <circle cx="500" cy="100" r="20" fill="#2196f3" />
                 <circle cx="500" cy="150" r="20" fill="#2196f3" />

                 <!-- Push Arrows -->
                 <g stroke="#9c27b0" stroke-width="2" marker-end="url(#arrowhead-flow)">
                   <line x1="160" y1="50" x2="470" y2="50" />
                   <line x1="160" y1="100" x2="470" y2="100" />
                   <line x1="160" y1="150" x2="470" y2="150" />
                 </g>
                 <text x="300" y="40" text-anchor="middle" fill="#9c27b0" font-size="12">PUSH (Broadcast)</text>
              </svg>
            </div>

            <div class="concept-grid">
              <div class="concept-card">
                <h5>Push (Broadcast)</h5>
                <p>Server sends. Scalable. Good for news/traffic.</p>
              </div>
              <div class="concept-card">
                <h5>Pull (On-Demand)</h5>
                <p>Client asks. Personalized. Good for email/banking.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "Selective Tuning",
        content: `
          <div class="study-guide-box">
            <h4>Index-Based Method</h4>
            <p>Device reads Index -> Sleeps -> Wakes up for Data.</p>
          </div>
        `
      },
      {
        title: "Data Synchronization",
        content: `
          <div class="study-guide-box">
            <h4>SyncML</h4>
            <p>Standard protocol for syncing data (Contacts, Calendar) across devices.</p>
          </div>
        `
      }
    ]
  },
  {
    unit: "V",
    title: "Mobile Ad-hoc Networks (MANETs)",
    notes: "<h3>Unit V Overview</h3><p>Decentralized networks without infrastructure.</p>",
    topics: [
      {
        title: "MANET Basics",
        content: `
          <div class="study-guide-box">
            <h4>MANET Topology</h4>
            <!-- MANET Diagram -->
            <div class="diagram-container">
               <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; background: #fff; border: 1px solid #ccc; border-radius: 8px;">
                 <circle cx="100" cy="100" r="15" fill="#4caf50" />
                 <circle cx="200" cy="50" r="15" fill="#4caf50" />
                 <circle cx="200" cy="150" r="15" fill="#4caf50" />
                 <circle cx="350" cy="100" r="15" fill="#4caf50" />
                 <circle cx="500" cy="100" r="15" fill="#4caf50" />

                 <line x1="100" y1="100" x2="200" y2="50" stroke="#999" stroke-dasharray="4" />
                 <line x1="100" y1="100" x2="200" y2="150" stroke="#999" stroke-dasharray="4" />
                 <line x1="200" y1="50" x2="350" y2="100" stroke="#999" stroke-dasharray="4" />
                 <line x1="200" y1="150" x2="350" y2="100" stroke="#999" stroke-dasharray="4" />
                 <line x1="350" y1="100" x2="500" y2="100" stroke="#999" stroke-dasharray="4" />
                 
                 <text x="300" y="180" text-anchor="middle" fill="#555">Dynamic Mesh Topology</text>
               </svg>
            </div>
            <div class="definition-box">
              <strong>MANET:</strong> Infrastructure-less network. Nodes act as routers.
            </div>
          </div>
        `
      },
      {
        title: "Routing Protocols",
        content: `
          <div class="study-guide-box">
            <h4>Protocols</h4>
            <div class="concept-grid">
              <div class="concept-card">
                <h5>DSDV (Proactive)</h5>
                <p>Table-driven. High overhead. Low latency.</p>
              </div>
              <div class="concept-card">
                <h5>DSR (Reactive)</h5>
                <p>Source routing. Full path in header. No idle overhead.</p>
              </div>
              <div class="concept-card">
                <h5>AODV (Reactive)</h5>
                <p>Hop-by-hop. Sequence numbers. Industry standard.</p>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
];
