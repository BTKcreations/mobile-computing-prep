export const flashcards = [
    // Unit I
    {
        id: 1,
        unit: "I",
        front: "Mobile Computing",
        back: `
      <div class="fc-content">
        <div class="fc-icon">📱 + 💻</div>
        <p><strong>Definition:</strong> Transmission of data, voice, and video via a computer or wireless device without a fixed physical link.</p>
        <ul class="fc-list">
          <li>✅ <strong>Anytime</strong></li>
          <li>✅ <strong>Anywhere</strong></li>
        </ul>
      </div>
    `
    },
    {
        id: 2,
        unit: "I",
        front: "Mobility vs Portability",
        back: `
      <div class="fc-content">
        <div class="fc-grid">
          <div class="fc-item">
            <span class="fc-emoji">🏃‍♂️</span>
            <strong>Mobility</strong>
            <small>Move while connected</small>
          </div>
          <div class="fc-divider">VS</div>
          <div class="fc-item">
            <span class="fc-emoji">🎒</span>
            <strong>Portability</strong>
            <small>Easy to carry (Battery)</small>
          </div>
        </div>
      </div>
    `
    },
    {
        id: 3,
        unit: "I",
        front: "GSM Architecture",
        back: `
      <div class="fc-content">
        <div class="fc-diagram-simple">
          <span>MS</span> ↔ <span>BSS</span> ↔ <span>NSS</span>
        </div>
        <ul class="fc-list-sm">
          <li><strong>MS:</strong> Phone + SIM</li>
          <li><strong>BSS:</strong> Tower (BTS) + Controller (BSC)</li>
          <li><strong>NSS:</strong> Core Network (MSC, HLR, VLR)</li>
        </ul>
      </div>
    `
    },
    {
        id: 4,
        unit: "I",
        front: "HLR vs VLR",
        back: `
      <div class="fc-content">
        <table class="fc-table">
          <tr>
            <th>🏠 HLR (Home)</th>
            <th>✈️ VLR (Visitor)</th>
          </tr>
          <tr>
            <td>Permanent DB</td>
            <td>Temporary DB</td>
          </tr>
          <tr>
            <td>User Profile</td>
            <td>Current Location</td>
          </tr>
        </table>
      </div>
    `
    },

    // Unit II
    {
        id: 6,
        unit: "II",
        front: "Hidden Terminal Problem",
        back: `
      <div class="fc-content">
        <div class="fc-visual-problem">
          A 📡 ... 🏢 ... 📡 C
          <br/>
          (A & C can't hear each other)
        </div>
        <p><strong>Result:</strong> Both send to B at same time ➡ 💥 <strong>COLLISION</strong></p>
        <p class="fc-solution"><strong>Fix:</strong> RTS / CTS</p>
      </div>
    `
    },
    {
        id: 8,
        unit: "II",
        front: "Mobile IP Process",
        back: `
      <div class="fc-content">
        <ol class="fc-steps">
          <li>1️⃣ <strong>Move:</strong> MN leaves Home ➡ Foreign Network</li>
          <li>2️⃣ <strong>Get CoA:</strong> MN gets Care-of-Address</li>
          <li>3️⃣ <strong>Register:</strong> Tell Home Agent (HA) new CoA</li>
          <li>4️⃣ <strong>Tunnel:</strong> HA encapsulates packets to CoA</li>
        </ol>
      </div>
    `
    },
    {
        id: 10,
        unit: "II",
        front: "Tunneling (Encapsulation)",
        back: `
      <div class="fc-content">
        <div class="fc-capsule-outer">
          <span class="fc-label">New IP Header (Dest: CoA)</span>
          <div class="fc-capsule-inner">
            Original IP Packet
          </div>
        </div>
        <p>Like putting a letter inside a new envelope to forward it.</p>
      </div>
    `
    },

    // Unit III
    {
        id: 11,
        unit: "III",
        front: "Indirect TCP (I-TCP)",
        back: `
      <div class="fc-content">
        <div class="fc-split-connection">
          <div>Fixed ↔ BS</div>
          <div class="fc-break">⚡ Split ⚡</div>
          <div>BS ↔ Mobile</div>
        </div>
        <p><strong>Why?</strong> Isolates wireless errors from the fixed network.</p>
      </div>
    `
    },
    {
        id: 12,
        unit: "III",
        front: "Snooping TCP",
        back: `
      <div class="fc-content">
        <div class="fc-icon">🕵️‍♂️</div>
        <p><strong>Base Station "Snoops"</strong></p>
        <ul class="fc-list">
          <li>Buffers packets</li>
          <li>Retransmits locally if lost</li>
          <li>Hides loss from Sender</li>
        </ul>
      </div>
    `
    },

    // Unit IV
    {
        id: 15,
        unit: "IV",
        front: "Push vs Pull",
        back: `
      <div class="fc-content">
        <div class="fc-grid">
          <div class="fc-item">
            <strong>Push 📢</strong>
            <small>Server sends</small>
            <span class="fc-tag">Stock Ticker</span>
          </div>
          <div class="fc-item">
            <strong>Pull 📥</strong>
            <small>Client asks</small>
            <span class="fc-tag">Web Browsing</span>
          </div>
        </div>
      </div>
    `
    },
    {
        id: 17,
        unit: "IV",
        front: "Selective Tuning",
        back: `
      <div class="fc-content">
        <div class="fc-timeline">
          <span>Index</span> ➡ <span>Sleep 💤</span> ➡ <span>Wake & Data 📥</span>
        </div>
        <p><strong>Goal:</strong> Save Battery 🔋 by waking up only when necessary.</p>
      </div>
    `
    },

    // Unit V
    {
        id: 19,
        unit: "V",
        front: "MANET Characteristics",
        back: `
      <div class="fc-content">
        <p><strong>Mobile Ad-hoc Network</strong></p>
        <div class="fc-tags">
          <span>No Infrastructure 🚫</span>
          <span>Dynamic Topology 🔀</span>
          <span>Multi-hop 🐇</span>
          <span>Battery Constrained 🔋</span>
        </div>
      </div>
    `
    },
    {
        id: 22,
        unit: "V",
        front: "DSR vs AODV",
        back: `
      <div class="fc-content">
        <table class="fc-table">
          <tr>
            <th>DSR</th>
            <th>AODV</th>
          </tr>
          <tr>
            <td>Source Routing</td>
            <td>Hop-by-Hop</td>
          </tr>
          <tr>
            <td>Full path in header</td>
            <td>Routing tables</td>
          </tr>
          <tr>
            <td>High overhead</td>
            <td>Lower overhead</td>
          </tr>
        </table>
      </div>
    `
    }
];
