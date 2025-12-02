export const electronicSensorsModelPaper3 = {
    title: "B.Tech IV Year I Semester Regular Examinations",
    subject: "ELECTRONIC SENSORS - MODEL PAPER 3",
    time: "3 Hours",
    maxMarks: 75,
    partA: [
        { unit: "I", id: 1, question: "Define Resolution and Threshold of a sensor.", answer: "<strong>Resolution:</strong> The smallest change in input that can be detected.<br><strong>Threshold:</strong> The minimum input value required to produce a detectable output from zero." },
        { unit: "I", id: 2, question: "What is the principle of a Capacitive Transducer?", answer: "It works on the principle of variable capacitance: <strong>C = (εA) / d</strong>. Capacitance changes by varying Area (A), Distance (d), or Dielectric (ε)." },
        { unit: "II", id: 3, question: "State the Law of Homogeneous Circuits.", answer: "It states that a thermoelectric current cannot be sustained in a circuit of a single homogeneous metal, however the temperature varies along its length." },
        { unit: "II", id: 4, question: "What is a Bimetallic Strip?", answer: "A sensor made of two bonded metal strips with different coefficients of thermal expansion. It bends when heated, used in thermostats." },
        { unit: "III", id: 5, question: "Define Hall Coefficient (Rh).", answer: "The Hall Coefficient is a material property that determines the magnitude of the Hall Voltage. <strong>Rh = 1 / (n * e)</strong>, where n is carrier density." },
        { unit: "III", id: 6, question: "What is the Villari Effect?", answer: "The <strong>Villari Effect</strong> (Inverse Magnetostriction) is the change in magnetic permeability of a material when subjected to mechanical stress." },
        { unit: "IV", id: 7, question: "Difference between Photodiode and Phototransistor?", answer: "A <strong>Photodiode</strong> converts light to current (fast response). A <strong>Phototransistor</strong> amplifies that current (higher sensitivity, slower response)." },
        { unit: "IV", id: 8, question: "Define pH.", answer: "<strong>pH</strong> is the negative logarithm of the Hydrogen ion concentration in a solution. <strong>pH = -log[H+]</strong>. It measures acidity or alkalinity." },
        { unit: "V", id: 9, question: "What is a Smart Transmitter?", answer: "A <strong>Smart Transmitter</strong> is a device that not only measures a variable but also performs signal conditioning, linearization, and two-way digital communication (e.g., HART)." },
        { unit: "V", id: 10, question: "List two materials commonly used in MEMS.", answer: "1. <strong>Silicon</strong> (Single crystal or Polysilicon).<br>2. <strong>Silicon Dioxide (SiO₂)</strong> (Sacrificial layer or Insulator)." }
    ],
    partB: [
        {
            unit: "I",
            questionNumber: 11,
            choices: [
                {
                    question: "Explain the construction and working of LVDT (Linear Variable Differential Transformer).",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>LVDT</strong> is an inductive transducer used to measure linear displacement. It is a passive transducer working on the principle of <strong>Mutual Induction</strong>.</p>

                            <h3>2. Construction</h3>
                            <ul>
                                <li><strong>Former:</strong> A cylindrical non-magnetic form.</li>
                                <li><strong>Primary Coil (P):</strong> Wound at the center, connected to an AC excitation source.</li>
                                <li><strong>Secondary Coils (S1, S2):</strong> Two identical coils wound on either side of P, connected in <strong>Series Opposition</strong>.</li>
                                <li><strong>Core:</strong> A movable soft iron core placed inside the former.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Coils -->
                                    <rect x="100" y="50" width="200" height="100" fill="#f5f5f5" stroke="#999"/>
                                    
                                    <!-- Primary -->
                                    <rect x="175" y="40" width="50" height="120" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="200" y="30" text-anchor="middle" font-size="12">Primary (P)</text>
                                    
                                    <!-- Secondaries -->
                                    <rect x="110" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="135" y="30" text-anchor="middle" font-size="12">S1</text>
                                    <rect x="240" y="40" width="50" height="120" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="265" y="30" text-anchor="middle" font-size="12">S2</text>
                                    
                                    <!-- Core -->
                                    <rect x="150" y="80" width="100" height="40" rx="5" fill="#616161" stroke="#333"/>
                                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="12">Soft Iron Core</text>
                                    
                                    <!-- Motion -->
                                    <line x1="150" y1="140" x2="250" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                                    <text x="200" y="155" text-anchor="middle" font-size="10">Displacement</text>
                                    
                                    <!-- Circuit -->
                                    <text x="200" y="180" text-anchor="middle" font-size="12">Vout = Vs1 - Vs2</text>
                                </svg>
                            </div>

                            <h3>3. Working Principle</h3>
                            <p>The output voltage is the differential voltage of the two secondaries:</p>
                            <p class="formula">Vout = Vs1 - Vs2</p>
                            <ul>
                                <li><strong>Null Position (Center):</strong> Flux linking S1 = Flux linking S2. Vs1 = Vs2. <strong>Vout = 0</strong>.</li>
                                <li><strong>Right Displacement:</strong> Core moves towards S2. Flux in S2 > S1. Vs2 > Vs1. Vout is negative (180° phase shift).</li>
                                <li><strong>Left Displacement:</strong> Core moves towards S1. Flux in S1 > S2. Vs1 > Vs2. Vout is positive (in phase).</li>
                            </ul>

                            <h3>4. Advantages</h3>
                            <ul>
                                <li>High linearity.</li>
                                <li>Infinite resolution.</li>
                                <li>Low hysteresis.</li>
                                <li>Rugged construction.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Explain the principle and operation of a Capacitive Transducer for Level Measurement.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>Capacitive transducers are widely used for liquid level measurement of both conducting and non-conducting liquids. They rely on the change in capacitance due to the change in dielectric constant or area.</p>

                            <h3>2. Principle</h3>
                            <p>Capacitance of a coaxial cylinder is given by:</p>
                            <p class="formula">C = (2π * ε₀ * εr * h) / ln(D/d)</p>
                            <p>Where <strong>h</strong> is the height of the liquid, <strong>D</strong> is outer diameter, and <strong>d</strong> is inner diameter.</p>

                            <h3>3. Construction & Working</h3>
                            <ul>
                                <li><strong>Non-Conducting Liquid:</strong> Two concentric cylinders act as plates. The liquid acts as the dielectric. As level rises, the effective dielectric constant changes from Air (ε=1) to Liquid (ε > 1).</li>
                                <li><strong>Conducting Liquid:</strong> An insulated rod acts as one plate, and the liquid itself acts as the other plate. The insulation acts as the dielectric.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Tank -->
                                    <rect x="50" y="50" width="200" height="150" fill="none" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Liquid -->
                                    <rect x="50" y="120" width="200" height="80" fill="#e1f5fe" stroke="none"/>
                                    <path d="M 50 120 Q 100 110 150 120 Q 200 130 250 120" fill="none" stroke="#0288d1"/>
                                    
                                    <!-- Probe -->
                                    <rect x="140" y="20" width="20" height="160" fill="#bdbdbd" stroke="#333"/>
                                    <text x="150" y="100" text-anchor="middle" font-size="10" transform="rotate(-90 150 100)">Probe</text>
                                    
                                    <!-- Connections -->
                                    <line x1="140" y1="20" x2="100" y2="20" stroke="#333"/>
                                    <line x1="50" y1="150" x2="20" y2="150" stroke="#333"/>
                                    
                                    <!-- Capacitance Symbol -->
                                    <line x1="20" y1="150" x2="20" y2="100" stroke="#333"/>
                                    <line x1="100" y1="20" x2="100" y2="100" stroke="#333"/>
                                    <line x1="10" y1="100" x2="30" y2="100" stroke="#333"/>
                                    <line x1="90" y1="100" x2="110" y2="100" stroke="#333"/>
                                    <text x="60" y="105" text-anchor="middle">C</text>
                                    
                                    <text x="150" y="220" text-anchor="middle" font-size="12">Capacitive Level Sensor</text>
                                </svg>
                            </div>
                            <p>The capacitance <strong>C</strong> is directly proportional to the liquid level <strong>h</strong>.</p>
                        </div>
                    `
                }
            ]
        },
        {
            unit: "II",
            questionNumber: 12,
            choices: [
                {
                    question: "Explain the construction and working of a Thermocouple.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Thermocouple</strong> is an active temperature transducer based on the <strong>Seebeck Effect</strong>. It is widely used for high-temperature measurements.</p>

                            <h3>2. Principle: Seebeck Effect</h3>
                            <p>When two dissimilar metals are joined to form a closed circuit, and the two junctions are maintained at different temperatures (T1 and T2), an Electromotive Force (EMF) is generated.</p>
                            <p class="formula">E = a(ΔT) + b(ΔT)²</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Hot Junction (Measuring Junction):</strong> The joined end placed in the environment to be measured.</li>
                                <li><strong>Cold Junction (Reference Junction):</strong> The open ends maintained at a constant reference temperature (usually 0°C or compensated).</li>
                                <li><strong>Materials:</strong>
                                    <ul>
                                        <li>Type J: Iron - Constantan</li>
                                        <li>Type K: Chromel - Alumel (Most common)</li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Wires -->
                                    <path d="M 50 100 Q 150 50 250 100" fill="none" stroke="#d32f2f" stroke-width="3"/>
                                    <text x="150" y="60" text-anchor="middle" fill="#d32f2f" font-size="12">Metal A (Chromel)</text>
                                    
                                    <path d="M 50 100 Q 150 150 250 100" fill="none" stroke="#1976d2" stroke-width="3"/>
                                    <text x="150" y="140" text-anchor="middle" fill="#1976d2" font-size="12">Metal B (Alumel)</text>
                                    
                                    <!-- Hot Junction -->
                                    <circle cx="50" cy="100" r="5" fill="#333"/>
                                    <text x="50" y="120" text-anchor="middle" font-weight="bold">Hot Junction (T1)</text>
                                    <path d="M 40 130 L 60 130 L 50 110 Z" fill="red" opacity="0.5"/>
                                    
                                    <!-- Cold Junction -->
                                    <circle cx="250" cy="100" r="5" fill="#333"/>
                                    <text x="250" y="120" text-anchor="middle" font-weight="bold">Ref Junction (T2)</text>
                                    
                                    <!-- Meter -->
                                    <circle cx="350" cy="100" r="20" fill="#fff" stroke="#333" stroke-width="2"/>
                                    <text x="350" y="105" text-anchor="middle" font-weight="bold">mV</text>
                                    <line x1="250" y1="100" x2="330" y2="100" stroke="#333" stroke-width="2"/>
                                </svg>
                            </div>

                            <h3>4. Advantages</h3>
                            <ul>
                                <li>Wide temperature range (-200°C to 2000°C).</li>
                                <li>Fast response time.</li>
                                <li>Rugged and inexpensive.</li>
                                <li>No external power required.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Explain the construction and characteristics of an RTD (Resistance Temperature Detector).",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>RTD</strong> is a passive temperature sensor that operates on the principle that the resistance of a metal increases with temperature (Positive Temperature Coefficient - PTC).</p>

                            <h3>2. Principle</h3>
                            <p>The relationship between resistance and temperature is linear:</p>
                            <p class="formula">Rt = R₀ (1 + αT)</p>
                            <p>Where <strong>α</strong> is the temperature coefficient of resistance. Platinum (Pt100) is the standard material due to its stability and linearity.</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li>A fine Platinum wire is wound on a ceramic or glass former.</li>
                                <li>The assembly is enclosed in a protective sheath (Stainless Steel).</li>
                                <li><strong>Lead Wire Compensation:</strong> To eliminate the error due to lead resistance, a 3-wire or 4-wire bridge configuration is used.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Sheath -->
                                    <rect x="50" y="80" width="200" height="40" rx="10" fill="#e0e0e0" stroke="#333"/>
                                    
                                    <!-- Element -->
                                    <path d="M 60 100 L 240 100" stroke="#d32f2f" stroke-width="2" stroke-dasharray="5,2"/>
                                    <text x="150" y="95" text-anchor="middle" fill="#d32f2f" font-size="10">Platinum Wire</text>
                                    
                                    <!-- Leads -->
                                    <line x1="250" y1="90" x2="290" y2="90" stroke="#333" stroke-width="2"/>
                                    <line x1="250" y1="110" x2="290" y2="110" stroke="#333" stroke-width="2"/>
                                    <text x="270" y="85" font-size="10">Leads</text>
                                    
                                    <!-- Graph -->
                                    <line x1="50" y1="180" x2="150" y2="180" stroke="#333"/>
                                    <line x1="50" y1="180" x2="50" y2="130" stroke="#333"/>
                                    <line x1="50" y1="150" x2="150" y2="130" stroke="blue" stroke-width="2"/>
                                    <text x="100" y="140" fill="blue" font-size="10">Linear (RTD)</text>
                                </svg>
                            </div>

                            <h3>4. Characteristics</h3>
                            <ul>
                                <li><strong>Linearity:</strong> Highly linear over a wide range.</li>
                                <li><strong>Stability:</strong> Very stable over time.</li>
                                <li><strong>Accuracy:</strong> Higher accuracy than thermocouples.</li>
                            </ul>
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
                    question: "Explain the working of a Hall Effect Sensor for Current Measurement.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Hall Effect Sensors</strong> are widely used for non-contact current measurement. They detect the magnetic field generated by a current-carrying conductor.</p>

                            <h3>2. Principle</h3>
                            <p>When a current-carrying conductor is placed in a magnetic field, a voltage (Hall Voltage) is generated perpendicular to both current and field.</p>
                            <p class="formula">Vh ∝ I * B</p>

                            <h3>3. Working (Open Loop Current Sensor)</h3>
                            <ul>
                                <li>The current to be measured flows through a busbar or wire.</li>
                                <li>This current generates a magnetic field surrounding it (Ampere's Law).</li>
                                <li>A soft magnetic core concentrates this field onto a Hall Sensor placed in an air gap.</li>
                                <li>The Hall Sensor outputs a voltage proportional to the magnetic field, and thus proportional to the current.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Core -->
                                    <path d="M 50 50 L 250 50 L 250 150 L 50 150 Z" fill="none" stroke="#616161" stroke-width="15"/>
                                    
                                    <!-- Gap -->
                                    <rect x="240" y="90" width="20" height="20" fill="#fff"/>
                                    
                                    <!-- Sensor -->
                                    <rect x="245" y="92" width="10" height="16" fill="#ef5350" stroke="#c62828"/>
                                    <text x="280" y="105" font-size="10">Hall IC</text>
                                    
                                    <!-- Conductor -->
                                    <circle cx="150" cy="100" r="15" fill="#ffca28" stroke="#f57f17"/>
                                    <text x="150" y="105" text-anchor="middle" font-weight="bold">I</text>
                                    <text x="150" y="130" text-anchor="middle" font-size="10">Conductor</text>
                                    
                                    <!-- Flux -->
                                    <path d="M 100 50 Q 150 20 200 50" fill="none" stroke="#2196f3" stroke-dasharray="4,2"/>
                                    <text x="150" y="40" fill="#2196f3" font-size="10">Flux (B)</text>
                                </svg>
                            </div>

                            <h3>4. Applications</h3>
                            <ul>
                                <li>Clamp meters.</li>
                                <li>Battery management systems (BMS).</li>
                                <li>Motor control.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Explain the principle of Magnetoresistive Sensors (AMR).",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Magnetoresistive (MR) Sensors</strong> change their resistance when exposed to a magnetic field. <strong>AMR (Anisotropic Magnetoresistance)</strong> is the most common type.</p>

                            <h3>2. Principle</h3>
                            <p>In ferromagnetic materials (Permalloy), resistance depends on the angle (θ) between the current direction and the magnetization vector.</p>
                            <p class="formula">R = R₀ + ΔR cos²θ</p>
                            <p>Resistance is maximum when current is parallel to the magnetic field and minimum when perpendicular.</p>

                            <h3>3. Construction (Wheatstone Bridge)</h3>
                            <p>To increase sensitivity and linearity, four AMR elements are arranged in a Wheatstone bridge. The elements are often designed with "Barber Pole" structures (gold stripes) to linearize the response.</p>
                            
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Bridge -->
                                    <rect x="130" y="50" width="40" height="20" fill="#bdbdbd" stroke="#333"/>
                                    <rect x="130" y="130" width="40" height="20" fill="#bdbdbd" stroke="#333"/>
                                    <rect x="80" y="90" width="20" height="40" fill="#bdbdbd" stroke="#333"/>
                                    <rect x="200" y="90" width="20" height="40" fill="#bdbdbd" stroke="#333"/>
                                    
                                    <!-- Connections -->
                                    <line x1="150" y1="20" x2="150" y2="50" stroke="#333"/>
                                    <line x1="150" y1="150" x2="150" y2="180" stroke="#333"/>
                                    <line x1="50" y1="110" x2="80" y2="110" stroke="#333"/>
                                    <line x1="220" y1="110" x2="250" y2="110" stroke="#333"/>
                                    
                                    <text x="150" y="15" text-anchor="middle">Vcc</text>
                                    <text x="150" y="195" text-anchor="middle">GND</text>
                                    <text x="40" y="115">V+</text>
                                    <text x="260" y="115">V-</text>
                                    
                                    <text x="150" y="100" text-anchor="middle" font-size="12">AMR Bridge</text>
                                </svg>
                            </div>

                            <h3>4. Applications</h3>
                            <ul>
                                <li>Compass (Earth's magnetic field detection).</li>
                                <li>Wheel speed sensors (ABS).</li>
                                <li>Position sensing.</li>
                            </ul>
                        </div>
                    `
                }
            ]
        },
        {
            unit: "IV",
            questionNumber: 14,
            choices: [
                {
                    question: "Explain the construction and working of a Photodiode.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Photodiode</strong> is a semiconductor device that converts light into electrical current. It is always operated in <strong>Reverse Bias</strong>.</p>

                            <h3>2. Working Principle</h3>
                            <p>When light (photons) falls on the depletion region of a reverse-biased PN junction, electron-hole pairs are generated. The electric field sweeps these carriers across the junction, creating a <strong>Reverse Current (Photocurrent)</strong>.</p>
                            <p>Current is directly proportional to Light Intensity.</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>P-Layer & N-Layer:</strong> Silicon or Germanium.</li>
                                <li><strong>Window:</strong> A glass or plastic lens allows light to focus on the junction.</li>
                                <li><strong>Dark Current:</strong> A small leakage current that flows even in the absence of light.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Diode Symbol -->
                                    <path d="M 100 100 L 100 140 L 140 120 Z" fill="#fff" stroke="#333" stroke-width="2"/>
                                    <line x1="140" y1="100" x2="140" y2="140" stroke="#333" stroke-width="2"/>
                                    <line x1="80" y1="120" x2="100" y2="120" stroke="#333" stroke-width="2"/>
                                    <line x1="140" y1="120" x2="160" y2="120" stroke="#333" stroke-width="2"/>
                                    
                                    <!-- Arrows -->
                                    <path d="M 80 80 L 110 110" stroke="#fbc02d" stroke-width="2" marker-end="url(#arrow)"/>
                                    <path d="M 90 70 L 120 100" stroke="#fbc02d" stroke-width="2" marker-end="url(#arrow)"/>
                                    
                                    <!-- Circuit -->
                                    <rect x="180" y="110" width="40" height="20" fill="#fff" stroke="#333"/>
                                    <text x="200" y="125" text-anchor="middle" font-size="10">Load</text>
                                    <line x1="160" y1="120" x2="180" y2="120" stroke="#333"/>
                                    <line x1="220" y1="120" x2="240" y2="120" stroke="#333"/>
                                    <line x1="240" y1="120" x2="240" y2="160" stroke="#333"/>
                                    <line x1="80" y1="120" x2="80" y2="160" stroke="#333"/>
                                    
                                    <!-- Battery -->
                                    <line x1="140" y1="160" x2="180" y2="160" stroke="#333"/>
                                    <line x1="150" y1="155" x2="150" y2="165" stroke="#333" stroke-width="2"/>
                                    <line x1="170" y1="150" x2="170" y2="170" stroke="#333" stroke-width="2"/>
                                    <text x="160" y="180" text-anchor="middle" font-size="10">Reverse Bias</text>
                                </svg>
                            </div>

                            <h3>4. Modes of Operation</h3>
                            <ul>
                                <li><strong>Photoconductive Mode:</strong> Reverse biased. Fast response. Linear.</li>
                                <li><strong>Photovoltaic Mode:</strong> Zero bias. Solar cell operation.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Explain the working of a pH Meter using a Glass Electrode.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>pH Meter</strong> measures the acidity or alkalinity of a solution. It uses a <strong>Glass Electrode</strong> as the sensing element.</p>

                            <h3>2. Principle</h3>
                            <p>When a thin glass membrane separates two solutions of different Hydrogen ion concentrations (Internal buffer vs Unknown solution), a potential difference is developed across the membrane.</p>
                            <p class="formula">E = E₀ - 0.0591 * pH</p>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Glass Electrode:</strong> Contains a pH-sensitive glass bulb, internal buffer (pH 7), and an Ag/AgCl internal wire.</li>
                                <li><strong>Reference Electrode:</strong> Provides a stable potential (Calomel or Ag/AgCl).</li>
                                <li><strong>Combination Electrode:</strong> Both electrodes combined in a single probe.</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Beaker -->
                                    <path d="M 80 50 L 80 200 Q 80 220 100 220 L 200 220 Q 220 220 220 200 L 220 50" fill="none" stroke="#333" stroke-width="2"/>
                                    <path d="M 80 100 L 80 200 Q 80 220 100 220 L 200 220 Q 220 220 220 200 L 220 100 Z" fill="#e1f5fe" stroke="none"/>
                                    
                                    <!-- Electrode -->
                                    <rect x="140" y="20" width="20" height="160" fill="#fff" stroke="#333"/>
                                    <circle cx="150" cy="180" r="15" fill="#fff" stroke="#333"/>
                                    <text x="150" y="185" text-anchor="middle" font-size="8">Glass Bulb</text>
                                    
                                    <!-- Wire -->
                                    <line x1="150" y1="20" x2="150" y2="170" stroke="#333"/>
                                    
                                    <!-- Meter -->
                                    <rect x="120" y="-10" width="60" height="30" fill="#333"/>
                                    <text x="150" y="10" text-anchor="middle" fill="#0f0" font-family="monospace">pH 7.0</text>
                                </svg>
                            </div>

                            <h3>4. Working</h3>
                            <ul>
                                <li>The probe is dipped in the solution.</li>
                                <li>H+ ions interact with the glass surface (Ion Exchange).</li>
                                <li>The potential difference is measured by a high-impedance voltmeter.</li>
                                <li>The meter converts voltage to pH units.</li>
                            </ul>
                        </div>
                    `
                }
            ]
        },
        {
            unit: "V",
            questionNumber: 15,
            choices: [
                {
                    question: "Explain the architecture of a Smart Sensor (IEEE 1451).",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Smart Sensor</strong> integrates the sensing element with signal processing and communication capabilities. The <strong>IEEE 1451</strong> standard defines a common interface for connecting smart transducers to networks.</p>

                            <h3>2. Architecture Blocks</h3>
                            <ul>
                                <li><strong>Sensing Element:</strong> Measures physical quantity.</li>
                                <li><strong>Signal Conditioning:</strong> Amplification, Filtering.</li>
                                <li><strong>ADC:</strong> Analog to Digital Converter.</li>
                                <li><strong>Microprocessor/DSP:</strong> Performs linearization, calibration, and data processing.</li>
                                <li><strong>Communication Interface:</strong> Connects to the bus (I2C, SPI, CAN).</li>
                            </ul>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <defs>
                                        <marker id="arrow-smart" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
                                    </defs>
                                    
                                    <!-- Blocks -->
                                    <rect x="50" y="50" width="80" height="50" rx="5" fill="#ffcc80" stroke="#ef6c00"/>
                                    <text x="90" y="80" text-anchor="middle" font-size="12">Sensor</text>
                                    
                                    <rect x="160" y="50" width="80" height="50" rx="5" fill="#fff9c4" stroke="#fbc02d"/>
                                    <text x="200" y="80" text-anchor="middle" font-size="12">Sig Cond</text>
                                    
                                    <rect x="270" y="50" width="60" height="50" rx="5" fill="#e1bee7" stroke="#8e24aa"/>
                                    <text x="300" y="80" text-anchor="middle" font-size="12">ADC</text>
                                    
                                    <rect x="360" y="40" width="100" height="70" rx="5" fill="#bbdefb" stroke="#1976d2"/>
                                    <text x="410" y="80" text-anchor="middle" font-size="12" font-weight="bold">Processor</text>
                                    
                                    <rect x="490" y="50" width="80" height="50" rx="5" fill="#c8e6c9" stroke="#388e3c"/>
                                    <text x="530" y="80" text-anchor="middle" font-size="12">Comm</text>
                                    
                                    <!-- Arrows -->
                                    <line x1="130" y1="75" x2="160" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                    <line x1="240" y1="75" x2="270" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                    <line x1="330" y1="75" x2="360" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                    <line x1="460" y1="75" x2="490" y2="75" stroke="#333" marker-end="url(#arrow-smart)"/>
                                </svg>
                            </div>

                            <h3>3. Features</h3>
                            <ul>
                                <li><strong>Self-Identification (TEDS):</strong> Stores calibration data.</li>
                                <li><strong>Self-Diagnosis:</strong> Detects faults.</li>
                                <li><strong>Digital Output:</strong> Noise immune.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Explain Surface Micromachining in MEMS.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Surface Micromachining</strong> is a MEMS fabrication technique where structures are built <strong>on top</strong> of the substrate by depositing and etching alternate layers of structural and sacrificial materials.</p>

                            <h3>2. Process Steps</h3>
                            <ol>
                                <li><strong>Substrate:</strong> Silicon wafer.</li>
                                <li><strong>Sacrificial Layer:</strong> Deposit a temporary layer (e.g., Phosphosilicate Glass - PSG).</li>
                                <li><strong>Patterning:</strong> Etch holes (anchor points) in the sacrificial layer.</li>
                                <li><strong>Structural Layer:</strong> Deposit the mechanical material (e.g., Polysilicon). It fills the anchor holes.</li>
                                <li><strong>Release Etch:</strong> Use a chemical to dissolve the sacrificial layer, leaving the structural layer free-standing.</li>
                            </ol>
                            <div class="diagram-container" style="text-align:center; margin: 1rem 0;">
                                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #ccc; border-radius:8px; max-width:100%;">
                                    <!-- Substrate -->
                                    <rect x="50" y="100" width="300" height="20" fill="#cfd8dc" stroke="#455a64"/>
                                    <text x="200" y="115" text-anchor="middle" font-size="10">Substrate</text>
                                    
                                    <!-- Anchors -->
                                    <rect x="80" y="80" width="20" height="20" fill="#90caf9" stroke="#1565c0"/>
                                    <rect x="300" y="80" width="20" height="20" fill="#90caf9" stroke="#1565c0"/>
                                    
                                    <!-- Beam -->
                                    <rect x="80" y="70" width="240" height="10" fill="#90caf9" stroke="#1565c0"/>
                                    <text x="200" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Cantilever Beam</text>
                                    
                                    <!-- Gap -->
                                    <text x="200" y="95" text-anchor="middle" font-size="10" fill="#666">Air Gap (Sacrificial Layer Removed)</text>
                                </svg>
                            </div>

                            <h3>3. Advantages</h3>
                            <ul>
                                <li>Allows complex, multi-layer moving structures (gears, motors).</li>
                                <li>Compatible with IC fabrication.</li>
                            </ul>
                        </div>
                    `
                }
            ]
        }
    ]
};
