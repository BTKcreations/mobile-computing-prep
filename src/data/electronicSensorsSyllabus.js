export const electronicSensorsSyllabus = [
  {
    unit: "I",
    title: "Sensors / Transducers & Electromechanical Sensors",
    notes: "<h3>Unit I Overview</h3><p>This unit establishes the foundation of measurement systems, defining sensors and transducers, their classification, and static characteristics. It then dives deep into Electromechanical sensors, specifically Resistive (Potentiometers, Strain Gauges), Inductive (LVDT), and Capacitive sensors.</p>",
    topics: [
      {
        title: "1. Sensors & Transducers Basics",
        content: `
          <div class="study-guide-box">
            <h4>1.1 Definitions & Differences</h4>
            <div class="definition-box">
              <strong>Transducer:</strong> A device that converts energy from one form to another. <br>
              <em>Example:</em> A loudspeaker converts electrical energy into acoustic (sound) energy.
            </div>
            <div class="definition-box">
              <strong>Sensor:</strong> A specific type of transducer that detects a physical parameter (like temperature, pressure, speed) and converts it into a signal (usually electrical) that can be measured or recorded. <br>
              <em>Example:</em> A Thermocouple detects temperature and produces a voltage.
            </div>
            
            <table class="comparison-table">
              <tr><th>Feature</th><th>Sensor</th><th>Transducer</th></tr>
              <tr><td><strong>Function</strong></td><td>Detects changes in environment</td><td>Converts energy form</td></tr>
              <tr><td><strong>Output</strong></td><td>Electrical signal (mostly)</td><td>Any form of energy</td></tr>
              <tr><td><strong>Example</strong></td><td>Proximity Sensor</td><td>Motor, Speaker, Lamp</td></tr>
            </table>

            <h4>1.2 Classification of Transducers</h4>
            <ul>
              <li><strong>Based on Power Source:</strong>
                <ul>
                  <li><strong>Active Transducers:</strong> Self-generating. Do NOT require an external power source. They generate their own voltage/current. <br><em>Examples:</em> Thermocouple, Piezoelectric crystal, Photovoltaic cell.</li>
                  <li><strong>Passive Transducers:</strong> Require an external power source (excitation) to operate. They work by varying a passive parameter (R, L, or C). <br><em>Examples:</em> Strain Gauge (R), LVDT (L), Thermistor (R).</li>
                </ul>
              </li>
              <li><strong>Based on Signal Type:</strong>
                <ul>
                  <li><strong>Analog:</strong> Continuous output (e.g., LVDT, Thermocouple).</li>
                  <li><strong>Digital:</strong> Discrete output (e.g., Optical Encoder).</li>
                </ul>
              </li>
            </ul>

            <h4>1.3 Static Characteristics</h4>
            <p>These parameters define the performance of a sensor under static conditions (slowly changing input).</p>
            <ul>
              <li><strong>Accuracy:</strong> Closeness to the true value.</li>
              <li><strong>Precision:</strong> Reproducibility of the reading (closeness of multiple readings to each other).</li>
              <li><strong>Sensitivity:</strong> Ratio of change in output to change in input (Slope of the calibration curve).</li>
              <li><strong>Linearity:</strong> How close the calibration curve is to a straight line.</li>
              <li><strong>Hysteresis:</strong> The difference in output for the same input when approached from increasing vs. decreasing directions.</li>
              <li><strong>Resolution:</strong> The smallest change in input that can be detected.</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. Resistive Sensors: Strain Gauges",
        content: `
          <div class="study-guide-box">
            <h4>2.1 Principle: Piezoresistive Effect</h4>
            <p>When a metal conductor is stretched or compressed, its resistance changes due to:</p>
            <ol>
              <li>Change in physical dimensions (Length increases, Area decreases).</li>
              <li>Change in resistivity (Piezoresistive effect).</li>
            </ol>
            <div class="formula-box">
              <strong>Resistance Formula:</strong> R = ρ * (L / A)<br>
              <strong>Gauge Factor (GF):</strong> The measure of sensitivity.<br>
              GF = (ΔR / R) / (ΔL / L) = 1 + 2ν + (Δρ/ρ)/ε
            </div>
            <p>Where <strong>ν</strong> is Poisson's Ratio. For metals, GF is around 2. For semiconductors, GF is around 100.</p>

            <h4>2.2 Bonded Metal Foil Strain Gauge</h4>
            <p>The most common type. A thin metal foil grid is bonded to a backing material.</p>
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <rect x="50" y="20" width="300" height="160" rx="10" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
                    <rect x="60" y="70" width="40" height="60" fill="#ffcc80" stroke="#ef6c00"/>
                    <rect x="300" y="70" width="40" height="60" fill="#ffcc80" stroke="#ef6c00"/>
                    <path d="M 100 80 L 260 80 L 260 90 L 100 90 L 100 100 L 260 100 L 260 110 L 100 110 L 100 120 L 260 120" fill="none" stroke="#d84315" stroke-width="3"/>
                    <text x="200" y="150" text-anchor="middle" font-size="12" fill="#bf360c">Metal Foil Grid</text>
                    <text x="200" y="40" text-anchor="middle" font-size="12" fill="#e65100" font-weight="bold">Bonded Strain Gauge</text>
                </svg>
            </div>
            
            <h4>2.3 Measurement Circuit</h4>
            <p>Since the change in resistance (ΔR) is very small, a <strong>Wheatstone Bridge</strong> is used to convert ΔR into a voltage signal.</p>
          </div>
        `
      },
      {
        title: "3. Inductive Sensors: LVDT",
        content: `
          <div class="study-guide-box">
            <h4>3.1 Linear Variable Differential Transformer (LVDT)</h4>
            <p>The most widely used inductive transducer for measuring linear displacement.</p>
            
            <h4>3.2 Construction</h4>
            <ul>
              <li><strong>Primary Coil (P):</strong> Connected to AC source.</li>
              <li><strong>Secondary Coils (S1, S2):</strong> Connected in series opposition.</li>
              <li><strong>Core:</strong> Movable soft iron core.</li>
            </ul>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <rect x="50" y="50" width="300" height="100" fill="#f5f5f5" stroke="#999"/>
                    <rect x="175" y="40" width="50" height="120" fill="#ffcc80" stroke="#ef6c00"/>
                    <text x="200" y="30" text-anchor="middle" font-size="12">Primary (P)</text>
                    <rect x="75" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                    <text x="100" y="30" text-anchor="middle" font-size="12">Sec 1 (S1)</text>
                    <rect x="275" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                    <text x="300" y="30" text-anchor="middle" font-size="12">Sec 2 (S2)</text>
                    <rect x="150" y="80" width="100" height="40" rx="5" fill="#616161" stroke="#333"/>
                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="12">Soft Iron Core</text>
                    <line x1="150" y1="140" x2="250" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                    <text x="200" y="155" text-anchor="middle" font-size="10">Motion</text>
                </svg>
            </div>

            <h4>3.3 Working Principle</h4>
            <p>Output Voltage <strong>Vo = Vs1 - Vs2</strong>.</p>
            <ul>
              <li><strong>Null Position:</strong> Core at center. Vs1 = Vs2. Vo = 0.</li>
              <li><strong>Right Displacement:</strong> More flux to S2. Vs2 > Vs1. Vo is -ve (180° phase shift).</li>
              <li><strong>Left Displacement:</strong> More flux to S1. Vs1 > Vs2. Vo is +ve (in phase).</li>
            </ul>
          </div>
        `
      },
      {
        title: "4. Capacitive Sensors",
        content: `
          <div class="study-guide-box">
            <h4>4.1 Principle</h4>
            <p>Based on the parallel plate capacitor formula:</p>
            <div class="formula-box">
              C = (ε₀ * εr * A) / d
            </div>
            <p>Capacitance (C) can be varied by changing:</p>
            <ul>
              <li><strong>d (Distance):</strong> Most common. Very sensitive. Non-linear (hyperbolic).</li>
              <li><strong>A (Area):</strong> Linear response. Used for larger displacements.</li>
              <li><strong>εr (Dielectric):</strong> Used for liquid level measurement.</li>
            </ul>

            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <rect x="50" y="50" width="20" height="100" fill="#90caf9" stroke="#1565c0"/>
                    <line x1="50" y1="100" x2="20" y2="100" stroke="#333" stroke-width="2"/>
                    <text x="35" y="165" text-anchor="middle" font-size="12">Fixed Plate</text>
                    <rect x="150" y="50" width="20" height="100" fill="#90caf9" stroke="#1565c0"/>
                    <line x1="170" y1="100" x2="200" y2="100" stroke="#333" stroke-width="2"/>
                    <text x="185" y="165" text-anchor="middle" font-size="12">Movable Plate</text>
                    <line x1="75" y1="70" x2="145" y2="70" stroke="#333" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                    <text x="110" y="65" text-anchor="middle" font-size="14" font-weight="bold">d</text>
                    <text x="110" y="120" text-anchor="middle" font-size="12" fill="#666">Dielectric (Air)</text>
                </svg>
            </div>
          </div>
        `
      }
    ]
  },
  {
    unit: "II",
    title: "Thermal Sensors",
    notes: "<h3>Unit II Overview</h3><p>This unit focuses on temperature measurement. It covers Expansion types (Bimetallic), Electrical types (RTD, Thermistor, Thermocouple), and Non-contact types (Radiation Pyrometers).</p>",
    topics: [
      {
        title: "1. Thermocouples",
        content: `
          <div class="study-guide-box">
            <h4>1.1 Principle: Seebeck Effect</h4>
            <p>When two dissimilar metals are joined to form a closed loop and the junctions are at different temperatures, an EMF is generated.</p>
            <div class="formula-box">
              E = a(ΔT) + b(ΔT)²
            </div>
            
            <h4>1.2 Construction</h4>
            <p>Two wires (e.g., Iron and Constantan for Type J) welded at one end (Hot Junction). The other ends form the Cold Junction.</p>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <path d="M 50 100 Q 150 50 250 100" fill="none" stroke="#d32f2f" stroke-width="3"/>
                    <text x="150" y="60" text-anchor="middle" fill="#d32f2f" font-size="12">Metal A</text>
                    <path d="M 50 100 Q 150 150 250 100" fill="none" stroke="#1976d2" stroke-width="3"/>
                    <text x="150" y="140" text-anchor="middle" fill="#1976d2" font-size="12">Metal B</text>
                    <circle cx="50" cy="100" r="5" fill="#333"/>
                    <text x="50" y="120" text-anchor="middle" font-weight="bold">Hot Junction</text>
                    <text x="50" y="80" text-anchor="middle" fill="red">Heat</text>
                    <circle cx="250" cy="100" r="5" fill="#333"/>
                    <text x="250" y="120" text-anchor="middle" font-weight="bold">Cold Junction</text>
                    <circle cx="350" cy="100" r="20" fill="#fff" stroke="#333" stroke-width="2"/>
                    <text x="350" y="105" text-anchor="middle" font-weight="bold">V</text>
                    <line x1="250" y1="100" x2="330" y2="100" stroke="#333" stroke-width="2"/>
                </svg>
            </div>

            <h4>1.3 Laws of Thermocouples</h4>
            <ul>
              <li><strong>Law of Homogeneous Circuits:</strong> Current depends only on T1 and T2, not on temp distribution along the wire.</li>
              <li><strong>Law of Intermediate Metals:</strong> Inserting a third metal (like a meter) doesn't affect reading if its junctions are at the same temp.</li>
              <li><strong>Law of Intermediate Temperatures:</strong> E(T1, T3) = E(T1, T2) + E(T2, T3).</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. RTD & Thermistors",
        content: `
          <div class="study-guide-box">
            <h4>2.1 RTD (Resistance Temperature Detector)</h4>
            <p><strong>Principle:</strong> Metals increase resistance with temperature (PTC). <br><strong>Material:</strong> Platinum (Pt100) is standard.</p>
            <div class="formula-box">
              Rt = R₀ (1 + αT)
            </div>
            <p><strong>Features:</strong> High accuracy, linear, stable. Needs lead wire compensation (3-wire bridge).</p>

            <h4>2.2 Thermistor (Thermal Resistor)</h4>
            <p><strong>Principle:</strong> Semiconductors change resistance with temperature. Usually <strong>NTC</strong> (Resistance drops as Temp rises).</p>
            <div class="formula-box">
              Rt = R₀ * e^(β(1/T - 1/T₀))
            </div>
            <p><strong>Features:</strong> High sensitivity, fast response, non-linear.</p>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <line x1="50" y1="150" x2="250" y2="150" stroke="#333" stroke-width="2"/>
                    <line x1="50" y1="20" x2="50" y2="150" stroke="#333" stroke-width="2"/>
                    <text x="250" y="165" text-anchor="end" font-size="12">Temp (T)</text>
                    <text x="60" y="30" font-size="12">Res (R)</text>
                    <path d="M 60 30 Q 80 140 240 145" fill="none" stroke="#d32f2f" stroke-width="3"/>
                    <text x="150" y="80" fill="#d32f2f" font-weight="bold">NTC Thermistor</text>
                    <line x1="60" y1="140" x2="240" y2="40" stroke="#1976d2" stroke-width="2" stroke-dasharray="4"/>
                    <text x="200" y="50" fill="#1976d2" font-weight="bold">RTD (Linear)</text>
                </svg>
            </div>
          </div>
        `
      }
    ]
  },
  {
    unit: "III",
    title: "Magnetic Sensors",
    notes: "<h3>Unit III Overview</h3><p>This unit explores sensors that detect magnetic fields. Key topics include the Hall Effect, Magnetoresistive sensors, and Magnetostrictive sensors.</p>",
    topics: [
      {
        title: "1. Hall Effect Sensors",
        content: `
          <div class="study-guide-box">
            <h4>1.1 Principle</h4>
            <p>When a current-carrying conductor is placed in a transverse magnetic field, a voltage (Hall Voltage) is generated perpendicular to both.</p>
            <div class="formula-box">
              Vh = (Rh * I * B) / t
            </div>
            
            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <path d="M 100 100 L 300 100 L 340 60 L 140 60 Z" fill="#b2dfdb" stroke="#00695c"/>
                    <rect x="100" y="100" width="200" height="40" fill="#80cbc4" stroke="#00695c"/>
                    <path d="M 300 100 L 340 60 L 340 100 L 300 140 Z" fill="#4db6ac" stroke="#00695c"/>
                    <line x1="50" y1="120" x2="100" y2="120" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
                    <text x="70" y="115" font-weight="bold">I</text>
                    <line x1="220" y1="20" x2="220" y2="80" stroke="#d32f2f" stroke-width="2" marker-end="url(#arrow)"/>
                    <text x="230" y="40" font-weight="bold" fill="#d32f2f">B</text>
                    <line x1="220" y1="60" x2="220" y2="40" stroke="#333" stroke-width="1"/>
                    <line x1="220" y1="140" x2="220" y2="180" stroke="#333" stroke-width="1"/>
                    <circle cx="220" cy="200" r="15" fill="#fff" stroke="#333"/>
                    <text x="220" y="205" text-anchor="middle" font-weight="bold">Vh</text>
                </svg>
            </div>

            <h4>1.2 Applications</h4>
            <ul>
              <li><strong>RPM Measurement:</strong> Counting pulses from a rotating magnet.</li>
              <li><strong>Current Sensing:</strong> Measuring magnetic field around a wire.</li>
              <li><strong>BLDC Motor Commutation:</strong> Detecting rotor position.</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. Magnetostrictive Sensors",
        content: `
          <div class="study-guide-box">
            <h4>2.1 Principle: Wiedemann Effect</h4>
            <p>Interaction between two magnetic fields (one from a permanent magnet, one from a current pulse) causes a mechanical twist in a ferromagnetic wire.</p>
            
            <h4>2.2 Working</h4>
            <ol>
              <li>Current pulse sent down the waveguide.</li>
              <li>Interacts with position magnet field -> Twist.</li>
              <li>Sonic wave travels back.</li>
              <li>Time of flight determines position.</li>
            </ol>
            <p><strong>Application:</strong> High precision liquid level measurement.</p>
          </div>
        `
      }
    ]
  },
  {
    unit: "IV",
    title: "Radiation & Electroanalytical Sensors",
    notes: "<h3>Unit IV Overview</h3><p>This unit covers sensors that detect radiation (Light, X-rays) and chemical properties (pH, Conductivity). It bridges the gap between physical and chemical sensing.</p>",
    topics: [
      {
        title: "1. Radiation Sensors (Optical)",
        content: `
          <div class="study-guide-box">
            <h4>1.1 Photodiode</h4>
            <p><strong>Principle:</strong> Photovoltaic/Photoconductive effect. Reverse biased PN junction. Light generates electron-hole pairs -> Reverse current increases.</p>
            
            <h4>1.2 Phototransistor</h4>
            <p>Like a photodiode but with internal gain (Amplification). Slower than photodiode but higher output.</p>
            
            <h4>1.3 LDR (Light Dependent Resistor)</h4>
            <p><strong>Principle:</strong> Photoconductivity. Resistance decreases as light intensity increases. Made of Cadmium Sulfide (CdS).</p>
          </div>
        `
      },
      {
        title: "2. Electroanalytical Sensors",
        content: `
          <div class="study-guide-box">
            <h4>2.1 pH Sensor (Glass Electrode)</h4>
            <p>Measures Hydrogen ion concentration.</p>
            <div class="formula-box">
              E = E₀ - 0.059 * pH
            </div>
            <p>Consists of a glass electrode (measuring) and a reference electrode (Calomel/Ag-AgCl).</p>

            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <path d="M 100 50 L 100 200 Q 100 220 120 220 L 280 220 Q 300 220 300 200 L 300 50" fill="none" stroke="#333" stroke-width="2"/>
                    <path d="M 100 100 L 100 200 Q 100 220 120 220 L 280 220 Q 300 220 300 200 L 300 100 Z" fill="#e1f5fe" stroke="none"/>
                    <rect x="140" y="20" width="20" height="150" fill="#fff" stroke="#333"/>
                    <circle cx="150" cy="170" r="15" fill="#fff" stroke="#333"/>
                    <rect x="240" y="20" width="20" height="150" fill="#fff" stroke="#333"/>
                    <rect x="170" y="-20" width="60" height="30" fill="#333" stroke="none"/>
                    <text x="200" y="0" text-anchor="middle" fill="#0f0" font-family="monospace">7.01</text>
                    <path d="M 150 20 L 150 -5 L 170 -5" fill="none" stroke="#333"/>
                    <path d="M 250 20 L 250 -5 L 230 -5" fill="none" stroke="#333"/>
                </svg>
            </div>

            <h4>2.2 Conductivity Sensor</h4>
            <p>Measures the ability of a solution to conduct current (Ion concentration). Uses AC excitation to prevent polarization.</p>
          </div>
        `
      }
    ]
  },
  {
    unit: "V",
    title: "Smart Sensors & MEMS",
    notes: "<h3>Unit V Overview</h3><p>The final unit covers modern sensor technology: Smart Sensors (IEEE 1451) and MEMS (Micro-Electro-Mechanical Systems).</p>",
    topics: [
      {
        title: "1. Smart Sensors",
        content: `
          <div class="study-guide-box">
            <h4>1.1 Definition</h4>
            <p>A sensor that integrates the sensing element with signal conditioning, processing (microcontroller), and communication in a single package.</p>
            
            <h4>1.2 Features</h4>
            <ul>
              <li><strong>Self-Calibration:</strong> Auto-adjusts zero and span.</li>
              <li><strong>Self-Diagnosis:</strong> Detects faults.</li>
              <li><strong>Digital Comm:</strong> I2C, SPI, Zigbee.</li>
            </ul>

            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                    <defs>
                        <marker id="arrow-smart" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
                    </defs>
                    <text x="30" y="75" text-anchor="middle" font-size="10">Input</text>
                    <line x1="50" y1="70" x2="70" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="70" y="40" width="60" height="60" rx="5" fill="#ffcc80" stroke="#ef6c00"/>
                    <text x="100" y="75" text-anchor="middle" font-size="10">Sensor</text>
                    <line x1="130" y1="70" x2="150" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="150" y="40" width="80" height="60" rx="5" fill="#fff9c4" stroke="#fbc02d"/>
                    <text x="190" y="65" text-anchor="middle" font-size="10">Signal Cond.</text>
                    <line x1="230" y1="70" x2="250" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="250" y="40" width="50" height="60" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                    <text x="275" y="75" text-anchor="middle" font-size="10">ADC</text>
                    <line x1="300" y1="70" x2="320" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="320" y="30" width="100" height="80" rx="5" fill="#bbdefb" stroke="#1976d2"/>
                    <text x="370" y="60" text-anchor="middle" font-size="10" font-weight="bold">Microprocessor</text>
                    <line x1="420" y1="70" x2="440" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <rect x="440" y="40" width="80" height="60" rx="5" fill="#c8e6c9" stroke="#388e3c"/>
                    <text x="480" y="75" text-anchor="middle" font-size="10">Comm.</text>
                    <line x1="520" y1="70" x2="550" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arrow-smart)"/>
                    <text x="575" y="75" text-anchor="middle" font-size="10">Out</text>
                </svg>
            </div>
          </div>
        `
      },
      {
        title: "2. MEMS (Micro-Electro-Mechanical Systems)",
        content: `
          <div class="study-guide-box">
            <h4>2.1 Introduction</h4>
            <p>Miniaturized devices containing both mechanical (levers, springs, membranes) and electrical components on a silicon chip. Size: 1 to 100 micrometers.</p>
            
            <h4>2.2 Fabrication: Bulk Micromachining</h4>
            <p>Selectively etching away the silicon substrate to create 3D structures (cavities, beams).</p>
            <ul>
              <li><strong>Anisotropic Etching:</strong> Etching rate depends on crystal orientation. Creates V-grooves.</li>
              <li><strong>Isotropic Etching:</strong> Etches in all directions equally.</li>
            </ul>
            
            <h4>2.3 Applications</h4>
            <ul>
              <li><strong>Accelerometers:</strong> Airbag deployment, screen rotation.</li>
              <li><strong>Gyroscopes:</strong> Stabilization in drones/phones.</li>
              <li><strong>Pressure Sensors:</strong> TPMS (Tire Pressure Monitoring System).</li>
            </ul>
          </div>
        `
      }
    ]
  }
];
