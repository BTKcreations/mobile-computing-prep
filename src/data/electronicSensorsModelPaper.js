export const electronicSensorsModelPaper = {
    title: "ELECTRONIC SENSORS - MODEL PAPER 1",
    subject: "Electronic Sensors (Open Elective-II)",
    time: "3 Hours",
    maxMarks: 75,
    partA: [
        {
            id: 1,
            question: "Define Sensor and Transducer with examples.",
            answer: `
                <p><strong>Sensor:</strong> A device that detects a physical parameter (like temperature, pressure) and converts it into a signal which can be measured or recorded. <br/><em>Example:</em> Thermocouple (detects temperature).</p>
                <p><strong>Transducer:</strong> A device that converts one form of energy into another. <br/><em>Example:</em> Microphone (Sound energy to Electrical energy).</p>
            `
        },
        {
            id: 2,
            question: "What is Gauge Factor? Give its formula.",
            answer: `
                <p><strong>Gauge Factor (GF)</strong> is the measure of the sensitivity of a strain gauge. It is defined as the ratio of fractional change in resistance to the fractional change in length (strain).</p>
                <p><strong>Formula:</strong> GF = (ΔR / R) / ε <br/>Where ΔR/R is change in resistance and ε is strain.</p>
            `
        },
        {
            id: 3,
            question: "State the principle of the Seebeck Effect.",
            answer: `
                <p><strong>Seebeck Effect:</strong> When two dissimilar metals are joined to form a closed circuit and their junctions are kept at different temperatures, an electromotive force (EMF) is generated in the circuit.</p>
                <p>This is the working principle of <strong>Thermocouples</strong>.</p>
            `
        },
        {
            id: 4,
            question: "Differentiate between NTC and PTC Thermistors.",
            answer: `
                <ul>
                    <li><strong>NTC (Negative Temperature Coefficient):</strong> Resistance <em>decreases</em> as temperature increases. Used for temp measurement.</li>
                    <li><strong>PTC (Positive Temperature Coefficient):</strong> Resistance <em>increases</em> as temperature increases. Used for overcurrent protection.</li>
                </ul>
            `
        },
        {
            id: 5,
            question: "What is the Hall Effect?",
            answer: `
                <p><strong>Hall Effect:</strong> When a current-carrying conductor is placed in a transverse magnetic field, a potential difference (Hall Voltage) is generated across the conductor in a direction perpendicular to both the current and the magnetic field.</p>
            `
        },
        {
            id: 6,
            question: "Explain the working principle of LVDT.",
            answer: `
                <p><strong>LVDT (Linear Variable Differential Transformer):</strong> Works on the principle of mutual induction. The displacement of a core inside the transformer changes the magnetic flux linkage between primary and secondary coils, producing a differential output voltage proportional to displacement.</p>
            `
        },
        {
            id: 7,
            question: "What is an LDR? Mention one application.",
            answer: `
                <p><strong>LDR (Light Dependent Resistor):</strong> A photo-resistor whose resistance decreases when light intensity increases.</p>
                <p><em>Application:</em> Automatic street light control.</p>
            `
        },
        {
            id: 8,
            question: "What is the function of a Reference Electrode in pH measurement?",
            answer: `
                <p>A <strong>Reference Electrode</strong> (like Calomel or Ag/AgCl) provides a stable, known potential against which the potential of the indicator electrode (glass electrode) is measured to determine pH.</p>
            `
        },
        {
            id: 9,
            question: "Define a Smart Sensor.",
            answer: `
                <p>A <strong>Smart Sensor</strong> is a sensor with integrated electronics that can perform functions like logic, decision making, two-way communication, and self-calibration, in addition to sensing.</p>
            `
        },
        {
            id: 10,
            question: "What are MEMS?",
            answer: `
                <p><strong>MEMS (Micro-Electro-Mechanical Systems):</strong> Miniaturized devices integrating mechanical and electrical components on a single chip (silicon) ranging from micrometers to millimeters.</p>
            `
        }
    ],
    partB: [
        {
            unit: "I",
            questionNumber: 11,
            choices: [
                {
                    question: "Explain the construction and working of a Bonded Metal Foil Strain Gauge. Derive the expression for Gauge Factor.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Introduction</h4>
                            <p>A <strong>Strain Gauge</strong> is a passive transducer that converts mechanical elongation or compression into a change in resistance. The bonded metal foil type is the most common.</p>
                            
                            <h4>2. Construction</h4>
                            <ul>
                                <li>Consists of a thin metal foil grid (Constantan or Nichrome).</li>
                                <li>Bonded to a thin backing material (Polyimide or Epoxy).</li>
                                <li>The grid pattern maximizes the length of the conductor in the direction of strain to increase sensitivity.</li>
                            </ul>

                            <h4>3. Working Principle</h4>
                            <p>When the gauge is bonded to a structure under stress, it undergoes the same strain. This deformation changes its electrical resistance due to:</p>
                            <ul>
                                <li>Change in length (L).</li>
                                <li>Change in area of cross-section (A).</li>
                                <li>Piezoresistive effect (Change in resistivity ρ).</li>
                            </ul>

                            <h4>4. Derivation of Gauge Factor (GF)</h4>
                            <p>Resistance <strong>R = ρL / A</strong></p>
                            <p>Differentiating, dR/R = dρ/ρ + dL/L - dA/A</p>
                            <p>Using Poisson's ratio (ν = - lateral strain / longitudinal strain), we get:</p>
                            <p><strong>GF = 1 + 2ν + (dρ/ρ)/ε</strong></p>
                            <p>For metals, piezoresistive effect is negligible, so <strong>GF ≈ 1 + 2ν</strong>.</p>
                        </div>
                    `
                },
                {
                    question: "Describe the working principle of Capacitive Transducers. Discuss their advantages and disadvantages.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Principle</h4>
                            <p>A capacitive transducer works on the principle of changing capacitance of a parallel plate capacitor.</p>
                            <p><strong>C = εA / d</strong></p>
                            <p>Where: <br/>ε = Permittivity of dielectric<br/>A = Overlapping area of plates<br/>d = Distance between plates</p>
                            <p>The transducer works by varying any of these three parameters (ε, A, or d) due to a physical quantity (like displacement, pressure, level).</p>

                            <h4>2. Types of Variation</h4>
                            <ul>
                                <li><strong>Change in Distance (d):</strong> Most common for displacement. Sensitivity is non-linear (hyperbolic).</li>
                                <li><strong>Change in Area (A):</strong> Linear relationship. Used for larger displacements.</li>
                                <li><strong>Change in Dielectric (ε):</strong> Used for liquid level measurement.</li>
                            </ul>

                            <h4>3. Advantages</h4>
                            <ul>
                                <li>Extremely high sensitivity.</li>
                                <li>Requires very small force to operate.</li>
                                <li>Good frequency response.</li>
                                <li>High input impedance (low loading effect).</li>
                            </ul>

                            <h4>4. Disadvantages</h4>
                            <ul>
                                <li>Sensitive to temperature and humidity variations.</li>
                                <li>Stray capacitance effects (requires shielding).</li>
                                <li>Output impedance is high, requiring complex signal conditioning.</li>
                            </ul>
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
                    question: "Explain the construction and working of a Thermocouple. List common types.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Principle: Seebeck Effect</h4>
                            <p>When two dissimilar metals are joined to form two junctions (Hot and Cold), and these junctions are at different temperatures, a voltage (EMF) is generated proportional to the temperature difference.</p>

                            <h4>2. Construction</h4>
                            <ul>
                                <li>Two wires of different metals (e.g., Copper and Constantan) are welded at one end to form the measuring junction (Hot).</li>
                                <li>The other ends form the reference junction (Cold), usually maintained at 0°C or compensated electronically.</li>
                            </ul>

                            <h4>3. Laws of Thermoelectricity</h4>
                            <ul>
                                <li><strong>Law of Homogeneous Circuits:</strong> Current cannot be sustained in a single metal circuit by heat alone.</li>
                                <li><strong>Law of Intermediate Metals:</strong> Adding a third metal doesn't affect EMF if its junctions are at the same temperature.</li>
                                <li><strong>Law of Intermediate Temperatures:</strong> EMF(T1, T3) = EMF(T1, T2) + EMF(T2, T3).</li>
                            </ul>

                            <h4>4. Common Types</h4>
                            <table border="1" style="width:100%; border-collapse: collapse; margin-top: 10px;">
                                <tr><th>Type</th><th>Materials (+ / -)</th><th>Range</th></tr>
                                <tr><td>J</td><td>Iron / Constantan</td><td>-40 to 750°C</td></tr>
                                <tr><td>K</td><td>Chromel / Alumel</td><td>-200 to 1250°C</td></tr>
                                <tr><td>T</td><td>Copper / Constantan</td><td>-200 to 350°C</td></tr>
                            </table>
                        </div>
                    `
                },
                {
                    question: "What is an RTD? Explain its construction and Lead Wire Compensation.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Introduction</h4>
                            <p><strong>RTD (Resistance Temperature Detector)</strong> works on the principle that the resistance of a metal increases linearly with temperature (Positive Temperature Coefficient).</p>
                            <p>Equation: <strong>Rt = R0 (1 + αΔT)</strong></p>

                            <h4>2. Construction</h4>
                            <ul>
                                <li><strong>Material:</strong> Platinum (Pt100) is standard due to stability and linearity.</li>
                                <li><strong>Structure:</strong> A fine wire is wound on a ceramic or glass former to avoid strain.</li>
                                <li><strong>Protection:</strong> Placed inside a protective sheath (stainless steel) to prevent damage.</li>
                            </ul>

                            <h4>3. Lead Wire Compensation</h4>
                            <p>Since RTDs have low resistance (100Ω), the resistance of connecting leads can introduce errors.</p>
                            <ul>
                                <li><strong>2-Wire:</strong> Simple but inaccurate (Lead R adds to measurement).</li>
                                <li><strong>3-Wire:</strong> Most common. Uses a Wheatstone bridge where one lead is in the detector arm and another in the adjacent arm, cancelling the effect.</li>
                                <li><strong>4-Wire:</strong> Most accurate. Uses a constant current source; voltage is measured across the RTD, eliminating lead resistance effects completely.</li>
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
                    question: "Explain the working of LVDT with a neat diagram. Plot its characteristics.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Introduction</h4>
                            <p><strong>LVDT (Linear Variable Differential Transformer)</strong> is an inductive transducer used to measure linear displacement.</p>

                            <h4>2. Construction</h4>
                            <ul>
                                <li><strong>Primary Winding (P):</strong> Connected to AC excitation source.</li>
                                <li><strong>Secondary Windings (S1, S2):</strong> Two identical windings connected in series opposition.</li>
                                <li><strong>Core:</strong> A movable soft iron core placed inside the former.</li>
                            </ul>

                            <h4>3. Working</h4>
                            <ul>
                                <li><strong>Null Position:</strong> Core at center. Flux linking S1 and S2 is equal. Vs1 = Vs2. Output Vo = Vs1 - Vs2 = 0.</li>
                                <li><strong>Right Displacement:</strong> Core moves to S2. Flux in S2 > S1. Vo = Vs1 - Vs2 (Negative/Phase shift).</li>
                                <li><strong>Left Displacement:</strong> Core moves to S1. Flux in S1 > S2. Vo = Vs1 - Vs2 (Positive).</li>
                            </ul>

                            <h4>4. Characteristics</h4>
                            <p>The output voltage is linear over a specific range of core displacement. Beyond this range, it becomes non-linear. The phase of output changes by 180° as the core passes through the null position.</p>
                        </div>
                    `
                },
                {
                    question: "Describe the Hall Effect Sensor and its applications.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Principle</h4>
                            <p>If a current (I) flows through a semiconductor strip and a magnetic field (B) is applied perpendicular to it, a voltage (Hall Voltage, Vh) is generated perpendicular to both.</p>
                            <p><strong>Vh = (Rh * I * B) / t</strong></p>
                            <p>Where Rh is Hall coefficient, t is thickness.</p>

                            <h4>2. Working</h4>
                            <p>Charge carriers are deflected by the Lorentz force, causing accumulation on one side of the material, creating a potential difference.</p>

                            <h4>3. Applications</h4>
                            <ul>
                                <li><strong>Magnetic Field Strength Meter (Gaussmeter):</strong> Direct measurement of B.</li>
                                <li><strong>Current Sensor:</strong> Non-intrusive current measurement (Clamp meters).</li>
                                <li><strong>Position/Proximity Sensor:</strong> Detecting the presence of a magnet (e.g., in brushless DC motors).</li>
                                <li><strong>RPM Measurement:</strong> Counting gear teeth passing a sensor.</li>
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
                            <h4>1. Introduction</h4>
                            <p>A <strong>Photodiode</strong> is a PN junction diode operated in reverse bias that converts light energy into electrical current.</p>

                            <h4>2. Working Principle</h4>
                            <ul>
                                <li><strong>Dark Current:</strong> When no light falls, a very small reverse saturation current flows.</li>
                                <li><strong>Illumination:</strong> When light (photons) falls on the junction, electron-hole pairs are generated in the depletion region.</li>
                                <li><strong>Photocurrent:</strong> The electric field sweeps these carriers across the junction, increasing the reverse current linearly with light intensity.</li>
                            </ul>

                            <h4>3. Modes of Operation</h4>
                            <ul>
                                <li><strong>Photoconductive Mode:</strong> Reverse biased. Fast response, linear.</li>
                                <li><strong>Photovoltaic Mode:</strong> Zero bias. Generates voltage (like a solar cell). Low noise.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Describe the measurement of pH using a Glass Electrode.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Introduction</h4>
                            <p>pH measures the acidity or alkalinity of a solution (H+ ion concentration). pH = -log[H+].</p>

                            <h4>2. Electrode System</h4>
                            <ul>
                                <li><strong>Glass Electrode (Indicator):</strong> Contains a thin glass membrane sensitive to H+ ions and an internal buffer with a reference wire (Ag/AgCl).</li>
                                <li><strong>Reference Electrode:</strong> Provides a stable potential (e.g., Calomel electrode).</li>
                            </ul>

                            <h4>3. Working Principle</h4>
                            <p>When the glass bulb is immersed in the test solution, an ion-exchange process occurs at the glass surface. A potential difference (Nernst Potential) develops across the membrane proportional to the pH difference between the internal buffer and the test solution.</p>
                            <p><strong>E = E0 - 0.0591 * pH</strong> (at 25°C)</p>

                            <h4>4. Measurement</h4>
                            <p>The voltage between the two electrodes is measured by a high-impedance voltmeter (pH meter) calibrated to display pH units directly.</p>
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
                    question: "What are Smart Sensors? Explain their block diagram and features.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Definition</h4>
                            <p>A <strong>Smart Sensor</strong> integrates the sensing element with signal conditioning and processing electronics (microcontroller/DSP) in a single package.</p>

                            <h4>2. Block Diagram Components</h4>
                            <ul>
                                <li><strong>Primary Sensor:</strong> Detects physical variable.</li>
                                <li><strong>Signal Conditioning:</strong> Amplification, filtering, linearization.</li>
                                <li><strong>ADC:</strong> Converts analog signal to digital.</li>
                                <li><strong>Microprocessor:</strong> Processes data, performs calculations, compensation.</li>
                                <li><strong>Communication Interface:</strong> Transmits data (e.g., UART, I2C, Wireless).</li>
                            </ul>

                            <h4>3. Features</h4>
                            <ul>
                                <li><strong>Self-Calibration:</strong> Auto-zero and span adjustment.</li>
                                <li><strong>Self-Diagnosis:</strong> Detects faults in sensor or electronics.</li>
                                <li><strong>Communication:</strong> Two-way data exchange.</li>
                                <li><strong>Multisensing:</strong> Can measure multiple parameters (e.g., Pressure + Temp).</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Discuss the applications of Sensors in the Automotive Industry.",
                    answer: `
                        <div class="model-answer-pro">
                            <h4>1. Engine Control</h4>
                            <ul>
                                <li><strong>MAP Sensor:</strong> Manifold Absolute Pressure for fuel injection.</li>
                                <li><strong>Oxygen Sensor:</strong> Exhaust gas monitoring for emission control.</li>
                                <li><strong>Throttle Position Sensor:</strong> Air intake control.</li>
                            </ul>

                            <h4>2. Safety Systems</h4>
                            <ul>
                                <li><strong>Accelerometers:</strong> Airbag deployment during crash.</li>
                                <li><strong>Wheel Speed Sensors:</strong> ABS (Anti-lock Braking System).</li>
                                <li><strong>Tire Pressure Monitoring System (TPMS).</strong></li>
                            </ul>

                            <h4>3. Comfort & Convenience</h4>
                            <ul>
                                <li><strong>Temperature Sensors:</strong> Climate control.</li>
                                <li><strong>Proximity Sensors:</strong> Parking assist.</li>
                                <li><strong>Rain Sensors:</strong> Automatic wipers.</li>
                            </ul>
                        </div>
                    `
                }
            ]
        }
    ]
};
