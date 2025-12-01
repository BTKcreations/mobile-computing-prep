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
                            <h3>1. Introduction</h3>
                            <p>A <strong>Strain Gauge</strong> is a passive resistive transducer that converts mechanical elongation or compression into a change in electrical resistance. It is the fundamental sensor for measuring strain, stress, and force.</p>
                            <p>The <strong>Bonded Metal Foil Strain Gauge</strong> is the most widely used type due to its high accuracy, stability, and ease of mass production.</p>

                            <h3>2. Principle of Operation</h3>
                            <p>It operates on the principle of <strong>Piezoresistivity</strong> (change in resistance due to mechanical stress) and geometric deformation. When a conductor is stretched:</p>
                            <ul>
                                <li>Its length (L) increases.</li>
                                <li>Its area of cross-section (A) decreases (Poisson's effect).</li>
                                <li>Its resistivity (ρ) may change.</li>
                            </ul>
                            <p>This combined effect causes an increase in resistance.</p>

                            <h3>3. Construction Details</h3>
                            <p>The construction involves the following key components:</p>
                            <ul>
                                <li><strong>Sensing Element:</strong> A very thin metal foil (thickness ~3-5 microns) made of <em>Constantan</em> (Ni-Cu alloy) or <em>Nichrome</em>. Constantan is preferred for its low temperature coefficient of resistance.</li>
                                <li><strong>Grid Pattern:</strong> The foil is photo-etched into a grid pattern. This pattern maximizes the length of the conductor in the direction of strain while keeping the gauge size small. The transverse loops are made wide to minimize sensitivity to transverse strain.</li>
                                <li><strong>Backing Material (Carrier):</strong> The grid is bonded to a thin, flexible insulating backing sheet made of <em>Polyimide</em> or <em>Epoxy</em>. This backing isolates the gauge from the test specimen and transmits the strain.</li>
                                <li><strong>Leads:</strong> Heavy copper tabs are attached to the ends of the grid for soldering lead wires.</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Diagram: A rectangular backing with a zig-zag metal foil grid pattern. Label: Solder Tabs, Grid Length, Grid Width, Backing, Alignment Marks.]</div>

                            <h3>4. Working Procedure</h3>
                            <ol>
                                <li><strong>Bonding:</strong> The gauge is bonded to the structure (specimen) using a special adhesive (Cyanoacrylate or Epoxy cement). The bond must be perfect to transfer strain without slip.</li>
                                <li><strong>Straining:</strong> When the structure is loaded, it undergoes strain (ε = ΔL/L).</li>
                                <li><strong>Resistance Change:</strong> The grid deforms with the structure.
                                    <ul>
                                        <li><strong>Tensile Strain:</strong> Length increases, Area decreases → Resistance Increases.</li>
                                        <li><strong>Compressive Strain:</strong> Length decreases, Area increases → Resistance Decreases.</li>
                                    </ul>
                                </li>
                                <li><strong>Measurement:</strong> This small change in resistance is measured using a <strong>Wheatstone Bridge</strong> circuit.</li>
                            </ol>

                            <h3>5. Derivation of Gauge Factor (GF)</h3>
                            <p>The Gauge Factor is the sensitivity of the strain gauge.</p>
                            <p><strong>Step 1:</strong> Resistance of a wire is given by:</p>
                            <p class="formula">R = ρ * L / A</p>
                            <p>Where ρ = Resistivity, L = Length, A = Area (πr²).</p>

                            <p><strong>Step 2:</strong> Differentiating the equation with respect to stress (σ):</p>
                            <p class="formula">dR = (ρ/A)dL + (L/A)dρ - (ρL/A²)dA</p>
                            <p>Divide by R (where R = ρL/A):</p>
                            <p class="formula">dR/R = dL/L + dρ/ρ - dA/A</p>

                            <p><strong>Step 3:</strong> Relate Area change to Length change.</p>
                            <p>A = πr². Differentiating: dA = 2πr dr.</p>
                            <p>dA/A = (2πr dr) / (πr²) = 2 * (dr/r)</p>
                            <p>We know Poisson's Ratio (ν) = - (Lateral Strain / Longitudinal Strain) = - (dr/r) / (dL/L).</p>
                            <p>So, dr/r = -ν * (dL/L).</p>
                            <p>Therefore, dA/A = -2ν * (dL/L).</p>

                            <p><strong>Step 4:</strong> Substitute back into the resistance equation:</p>
                            <p class="formula">dR/R = dL/L + dρ/ρ - (-2ν * dL/L)</p>
                            <p class="formula">dR/R = (1 + 2ν) * (dL/L) + dρ/ρ</p>

                            <p><strong>Step 5:</strong> Divide by Strain (ε = dL/L):</p>
                            <p class="formula">Gauge Factor (GF) = (dR/R) / ε = 1 + 2ν + (dρ/ρ)/ε</p>

                            <p><strong>Conclusion:</strong></p>
                            <ul>
                                <li><strong>1 + 2ν:</strong> Geometric term (Dominant in metals like Constantan, GF ≈ 2).</li>
                                <li><strong>(dρ/ρ)/ε:</strong> Piezoresistive term (Dominant in Semiconductors, GF ≈ 100+).</li>
                            </ul>

                            <h3>6. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> High accuracy, good frequency response, small size, low cost.</li>
                                <li><strong>Disadvantages:</strong> Low output signal (requires amplification), sensitive to temperature (requires compensation), one-time use (cannot be reused after bonding).</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Describe the working principle of Capacitive Transducers. Discuss their advantages and disadvantages.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Capacitive Transducer</strong> is a passive transducer that works on the principle of variable capacitance. It is used to measure physical quantities like displacement, pressure, force, and liquid level by converting them into a change in capacitance.</p>

                            <h3>2. Principle of Operation</h3>
                            <p>The capacitance of a parallel plate capacitor is given by the formula:</p>
                            <p class="formula">C = (ε₀ * εr * A) / d</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>C:</strong> Capacitance in Farads.</li>
                                <li><strong>ε₀:</strong> Permittivity of free space (8.854 x 10⁻¹² F/m).</li>
                                <li><strong>εr:</strong> Relative permittivity (Dielectric constant).</li>
                                <li><strong>A:</strong> Overlapping area of the plates (m²).</li>
                                <li><strong>d:</strong> Distance between the plates (m).</li>
                            </ul>
                            <p>The transducer works by varying one of these three parameters (d, A, or εr).</p>

                            <h3>3. Types of Capacitive Transducers</h3>
                            
                            <h4>A. Variation in Distance (d)</h4>
                            <p>One plate is fixed, and the other is movable (connected to the object being measured).</p>
                            <ul>
                                <li>As 'd' decreases, 'C' increases (Inverse relationship).</li>
                                <li><strong>Sensitivity (S):</strong> dC/dd = - (εA) / d²</li>
                                <li><strong>Linearity:</strong> The response is non-linear (hyperbolic). However, for very small displacements (Δd << d), it is approximately linear.</li>
                                <li><em>Application:</em> Microphone diaphragms, pressure sensors.</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Diagram: Two parallel plates, one fixed, one moving left/right. Label 'd'.]</div>

                            <h4>B. Variation in Area (A)</h4>
                            <p>One plate slides over the other, changing the overlapping area.</p>
                            <ul>
                                <li><strong>C ∝ A</strong> (Directly proportional).</li>
                                <li><strong>Sensitivity:</strong> Constant (Linear response).</li>
                                <li><em>Application:</em> Measuring larger displacements (1cm to 10cm).</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Diagram: Two plates sliding past each other. Label 'Effective Area A'.]</div>

                            <h4>C. Variation in Dielectric (εr)</h4>
                            <p>A dielectric material moves between fixed plates.</p>
                            <ul>
                                <li>Used primarily for <strong>Liquid Level Measurement</strong>. The liquid acts as the dielectric. As the level rises, the effective dielectric constant changes, changing the capacitance linearly.</li>
                            </ul>

                            <h3>4. Differential Arrangement</h3>
                            <p>To improve linearity and sensitivity, a <strong>Differential Capacitor</strong> is used.</p>
                            <ul>
                                <li>It consists of three plates: two fixed plates and one movable central plate.</li>
                                <li>As the central plate moves, C1 increases and C2 decreases.</li>
                                <li>Using a bridge circuit, the output voltage becomes linear with respect to displacement.</li>
                            </ul>

                            <h3>5. Advantages</h3>
                            <ul>
                                <li><strong>Extremely High Sensitivity:</strong> Can detect displacements as small as 10⁻⁹ meters.</li>
                                <li><strong>Low Loading Effect:</strong> High input impedance means it draws negligible power from the system.</li>
                                <li><strong>Good Frequency Response:</strong> Can measure dynamic changes (up to 50 kHz).</li>
                                <li><strong>No Hysteresis:</strong> Unlike magnetic sensors, there is no magnetic hysteresis.</li>
                            </ul>

                            <h3>6. Disadvantages</h3>
                            <ul>
                                <li><strong>High Output Impedance:</strong> Requires complex signal conditioning (charge amplifiers) and short cables to prevent signal loss.</li>
                                <li><strong>Stray Capacitance:</strong> The cable capacitance can cause errors. Requires "Guarding" or "Active Shielding".</li>
                                <li><strong>Environmental Effects:</strong> Sensitive to temperature and humidity changes (dielectric changes).</li>
                            </ul>

                            <h3>7. Applications</h3>
                            <ul>
                                <li>Condenser Microphones (Sound to Electrical).</li>
                                <li>Digital Vernier Calipers.</li>
                                <li>Fuel level sensors in aircraft.</li>
                                <li>Touch screens (Capacitive touch).</li>
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
                            <h3>1. Introduction</h3>
                            <p>A <strong>Thermocouple</strong> is an active transducer used for temperature measurement. It is the most widely used temperature sensor in industrial applications due to its wide range, ruggedness, and low cost.</p>

                            <h3>2. Working Principle: Seebeck Effect</h3>
                            <p>The operation is based on the <strong>Seebeck Effect</strong> (discovered by T.J. Seebeck in 1821).</p>
                            <blockquote>"When two dissimilar metals are joined together to form a closed loop, and the two junctions are maintained at different temperatures, an electromotive force (EMF) is generated in the circuit."</blockquote>
                            <p>The magnitude of this EMF depends on:</p>
                            <ul>
                                <li>The materials of the two metals.</li>
                                <li>The temperature difference between the Hot Junction and the Cold Junction.</li>
                            </ul>
                            <p><strong>E = a(ΔT) + b(ΔT)²</strong> (where a, b are constants).</p>

                            <h3>3. Associated Effects</h3>
                            <ul>
                                <li><strong>Peltier Effect:</strong> The reverse of Seebeck. Passing current through a junction causes heating or cooling.</li>
                                <li><strong>Thomson Effect:</strong> EMF generated along a single wire if a temperature gradient exists.</li>
                            </ul>

                            <h3>4. Construction</h3>
                            <ul>
                                <li><strong>Thermoelements:</strong> Two wires of different metals (e.g., Iron and Constantan) are twisted and welded at one end to form the <strong>Measuring Junction (Hot Junction)</strong>.</li>
                                <li><strong>Reference Junction:</strong> The other ends are connected to the measuring instrument, forming the <strong>Reference Junction (Cold Junction)</strong>.</li>
                                <li><strong>Insulation:</strong> Wires are insulated using ceramic beads or fiberglass to prevent shorting.</li>
                                <li><strong>Protective Sheath:</strong> The assembly is placed inside a stainless steel or Inconel thermowell to protect it from corrosive environments and mechanical damage.</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Diagram: Two wires (Metal A, Metal B) joined at 'Hot Junction'. Other ends at 'Cold Junction' connected to a Voltmeter. Label T1 and T2.]</div>

                            <h3>5. Cold Junction Compensation (CJC)</h3>
                            <p>The EMF depends on (Thot - Tcold). If Tcold varies (ambient temp), the reading will be wrong. Methods for compensation:</p>
                            <ul>
                                <li><strong>Ice Bath:</strong> Physically keeping the cold junction at 0°C (Lab standard).</li>
                                <li><strong>Automatic Compensation:</strong> Using a thermistor or RTD to measure the ambient temperature at the terminal block and electronically adding the equivalent voltage to the thermocouple signal.</li>
                            </ul>

                            <h3>6. Common Thermocouple Types</h3>
                            <table class="table-bordered">
                                <tr><th>Type</th><th>Positive Leg</th><th>Negative Leg</th><th>Range (°C)</th><th>Application</th></tr>
                                <tr><td><strong>J</strong></td><td>Iron</td><td>Constantan</td><td>-40 to 750</td><td>General purpose, reducing atmospheres.</td></tr>
                                <tr><td><strong>K</strong></td><td>Chromel</td><td>Alumel</td><td>-200 to 1250</td><td>Most common, oxidizing atmospheres.</td></tr>
                                <tr><td><strong>T</strong></td><td>Copper</td><td>Constantan</td><td>-200 to 350</td><td>Low temp, cryogenics, moisture resistant.</td></tr>
                                <tr><td><strong>E</strong></td><td>Chromel</td><td>Constantan</td><td>-200 to 900</td><td>Highest sensitivity (µV/°C).</td></tr>
                                <tr><td><strong>R/S</strong></td><td>Platinum/Rh</td><td>Platinum</td><td>0 to 1450</td><td>High temp, high accuracy (Reference std).</td></tr>
                            </table>

                            <h3>7. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Wide temperature range, fast response time, rugged, no external power required (active).</li>
                                <li><strong>Disadvantages:</strong> Non-linear output, low voltage signal (mV), requires cold junction compensation, less stable than RTDs.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "What is an RTD? Explain its construction and Lead Wire Compensation.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>RTD (Resistance Temperature Detector)</strong> is a passive transducer that measures temperature by correlating the resistance of the RTD element with temperature. It offers the highest accuracy and stability among industrial sensors.</p>

                            <h3>2. Principle: Piezoresistive / PTC</h3>
                            <p>Metals exhibit a <strong>Positive Temperature Coefficient (PTC)</strong> of resistance. As temperature increases, lattice vibrations increase, impeding electron flow, thus increasing resistance.</p>
                            <p>The relationship is given by the <strong>Callendar-Van Dusen Equation</strong>:</p>
                            <p class="formula">Rt = R₀ (1 + αT)</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>Rt:</strong> Resistance at temperature T.</li>
                                <li><strong>R₀:</strong> Resistance at 0°C (typically 100Ω for Pt100).</li>
                                <li><strong>α:</strong> Temperature coefficient of resistance (0.00385 Ω/Ω/°C for Platinum).</li>
                            </ul>

                            <h3>3. Construction</h3>
                            <ul>
                                <li><strong>Sensing Material:</strong> Platinum is the standard (Pt100) because it is chemically inert, has a linear resistance-temp relationship, and is stable. Nickel and Copper are also used for lower ranges.</li>
                                <li><strong>Wire Wound:</strong> A fine platinum wire is wound on a ceramic or glass bobbin. The winding is non-inductive (bifilar) to avoid magnetic pickup.</li>
                                <li><strong>Thin Film:</strong> A thin layer of platinum is deposited on a ceramic substrate. This is smaller, cheaper, and faster responding.</li>
                                <li><strong>Protection:</strong> Encased in a stainless steel probe packed with MgO powder for heat transfer and vibration resistance.</li>
                            </ul>

                            <h3>4. Lead Wire Compensation</h3>
                            <p>Since the change in resistance of an RTD is small (approx 0.385Ω/°C), the resistance of the connecting lead wires can cause significant errors. We use bridge configurations to compensate.</p>

                            <h4>A. 2-Wire Configuration</h4>
                            <p>Simple connection. The lead resistance (RL1 + RL2) adds directly to the RTD resistance.</p>
                            <p><em>Error:</em> High. Not used for precision work.</p>

                            <h4>B. 3-Wire Configuration (Most Common)</h4>
                            <p>Uses a Wheatstone bridge. Two leads connect to one end of the RTD, and one to the other.</p>
                            <ul>
                                <li>L1 is in the RTD arm.</li>
                                <li>L2 is in the adjacent bridge arm.</li>
                                <li>L3 carries the bridge current.</li>
                            </ul>
                            <p>If L1 and L2 have the same length/resistance, they cancel each other out in the bridge equation.</p>
                            <div class="diagram-placeholder">[Draw Diagram: Wheatstone bridge with 3 leads connecting the RTD.]</div>

                            <h4>C. 4-Wire Configuration (High Precision)</h4>
                            <p>Uses a constant current source.</p>
                            <ul>
                                <li>Two leads carry the current (I).</li>
                                <li>Two leads measure the voltage drop (V).</li>
                            </ul>
                            <p>Since the voltmeter has high impedance, no current flows through the voltage leads. Thus, V = I * R_RTD exactly, completely eliminating lead resistance error.</p>

                            <h3>5. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> High accuracy, excellent stability, linear response, interchangeable.</li>
                                <li><strong>Disadvantages:</strong> Slower response than thermocouples, self-heating error (current causes I²R heating), expensive, max temp limited (~850°C).</li>
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
                            <h3>1. Introduction</h3>
                            <p>The <strong>LVDT (Linear Variable Differential Transformer)</strong> is the most widely used inductive transducer for translating linear motion into an electrical signal. It is a passive transducer.</p>

                            <h3>2. Construction</h3>
                            <p>It consists of a transformer with:</p>
                            <ul>
                                <li><strong>One Primary Winding (P):</strong> Wound on a cylindrical former and excited by an AC source (50Hz to 20kHz).</li>
                                <li><strong>Two Secondary Windings (S1, S2):</strong> Wound on either side of the primary. They have equal number of turns and are connected in <strong>Series Opposition</strong> (differentially).</li>
                                <li><strong>Movable Core:</strong> A high-permeability, soft iron core moves axially inside the former. It couples the magnetic flux from primary to secondaries.</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Diagram: Cylindrical former, Primary coil in center, S1 and S2 on sides. Core inside. Circuit showing S1 and S2 connected in series opposition.]</div>

                            <h3>3. Working Principle</h3>
                            <p>The output voltage depends on the position of the core.</p>
                            <p><strong>Net Output (Vo) = Vs1 - Vs2</strong> (Vector difference).</p>

                            <h4>Case 1: Null Position (Core at Center)</h4>
                            <p>Flux linkage to S1 equals flux linkage to S2.</p>
                            <p>Vs1 = Vs2.</p>
                            <p><strong>Vo = 0.</strong></p>

                            <h4>Case 2: Core moves Right (towards S2)</h4>
                            <p>More flux links with S2 than S1.</p>
                            <p>Vs2 > Vs1.</p>
                            <p><strong>Vo = Vs2 - Vs1</strong> (180° phase shift w.r.t primary).</p>

                            <h4>Case 3: Core moves Left (towards S1)</h4>
                            <p>More flux links with S1 than S2.</p>
                            <p>Vs1 > Vs2.</p>
                            <p><strong>Vo = Vs1 - Vs2</strong> (In-phase w.r.t primary).</p>

                            <h3>4. Characteristics</h3>
                            <ul>
                                <li><strong>Linear Range:</strong> For a limited range of displacement (e.g., ±5mm), the output voltage is directly proportional to displacement.</li>
                                <li><strong>Non-Linear Region:</strong> Beyond the linear range, the curve bends due to flux leakage.</li>
                                <li><strong>Residual Voltage:</strong> At null position, output is not exactly zero due to harmonics and stray capacitance. This small voltage is called residual voltage (typically < 1%).</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Graph: X-axis = Displacement (+/-), Y-axis = Output Voltage. V-shaped curve passing through origin.]</div>

                            <h3>5. Signal Conditioning</h3>
                            <p>Since the output is AC and magnitude is same for left/right movement, a <strong>Phase Sensitive Demodulator</strong> is used to convert the AC output into a DC voltage that indicates both magnitude and direction (polarity).</p>

                            <h3>6. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Infinite resolution, high linearity (0.05%), frictionless operation (long life), rugged, high sensitivity.</li>
                                <li><strong>Disadvantages:</strong> Sensitive to stray magnetic fields, requires AC excitation, dynamic response limited by excitation frequency.</li>
                            </ul>

                            <h3>7. Applications</h3>
                            <ul>
                                <li>Displacement measurement (microns to cms).</li>
                                <li>Secondary transducer in Pressure (Bourdon tube) and Force (Load cell) sensors.</li>
                                <li>CNC machine tool positioning.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Describe the Hall Effect Sensor and its applications.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>Hall Effect Sensors</strong> are solid-state devices that sense magnetic fields. They are used for proximity switching, positioning, speed detection, and current sensing.</p>

                            <h3>2. Principle: The Hall Effect</h3>
                            <p>Discovered by Edwin Hall in 1879.</p>
                            <blockquote>"When a current-carrying conductor or semiconductor is placed in a transverse magnetic field, a potential difference (voltage) is generated perpendicular to both the current and the magnetic field directions."</blockquote>

                            <h3>3. Physics & Derivation</h3>
                            <p>Consider a semiconductor slab:</p>
                            <ul>
                                <li>Current (I) flows in X-direction.</li>
                                <li>Magnetic Field (B) is applied in Z-direction.</li>
                                <li>Lorentz Force (F = q(v x B)) acts on charge carriers, pushing them to the Y-direction edge.</li>
                            </ul>
                            <p>This charge accumulation creates an electric field that opposes further migration. At equilibrium, the Hall Voltage (Vh) is established.</p>
                            <p class="formula">Vh = (Rh * I * B) / t</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>Rh:</strong> Hall Coefficient (depends on material type n or p).</li>
                                <li><strong>I:</strong> Current.</li>
                                <li><strong>B:</strong> Magnetic Flux Density.</li>
                                <li><strong>t:</strong> Thickness of the strip.</li>
                            </ul>
                            <p><em>Note:</em> Semiconductors (InSb, GaAs) are used because they have high carrier mobility, producing a larger Vh than metals.</p>
                            <div class="diagram-placeholder">[Draw Diagram: A rectangular slab. Current entering left. Magnet above. Voltmeter connected to top and bottom faces showing Vh.]</div>

                            <h3>4. Types of Hall Sensors</h3>
                            <ul>
                                <li><strong>Linear (Analog) Hall Sensors:</strong> Output voltage is directly proportional to magnetic field strength. Used for measuring field strength or continuous distance.</li>
                                <li><strong>Digital (Switch) Hall Sensors:</strong> Contains a Schmitt trigger. Output snaps ON or OFF when magnetic field crosses a threshold. Used for proximity detection.</li>
                            </ul>

                            <h3>5. Applications</h3>
                            
                            <h4>A. RPM / Speed Measurement</h4>
                            <p>A magnet is attached to a rotating shaft. A stationary Hall sensor detects the magnet passing by. The frequency of pulses = Speed.</p>
                            
                            <h4>B. Brushless DC Motors (BLDC)</h4>
                            <p>Used to detect the position of the permanent magnet rotor to determine which stator coils to energize (electronic commutation).</p>
                            
                            <h4>C. Current Sensing (Hall Clamp Meter)</h4>
                            <p>Measures current flowing through a wire without contact. The wire creates a magnetic field around it (B ∝ I). The Hall sensor measures B and calculates I.</p>
                            
                            <h4>D. Automotive Ignition</h4>
                            <p>Replaced mechanical breaker points. Detects camshaft position to fire spark plugs.</p>
                            
                            <h4>E. Keyboard Switches</h4>
                            <p>High-reliability keys (no contact bounce, waterproof).</p>
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
                            <p>A <strong>Photodiode</strong> is a semiconductor PN junction device that converts light energy (photons) into electrical current. It is operated in <strong>Reverse Bias</strong>.</p>

                            <h3>2. Construction</h3>
                            <ul>
                                <li><strong>Material:</strong> Silicon (visible light), Germanium (IR), or Indium Gallium Arsenide (InGaAs) for fiber optics.</li>
                                <li><strong>Structure:</strong> A PN junction is housed in a package with a transparent window or lens on top to allow light to focus on the junction.</li>
                                <li><strong>PIN Photodiode:</strong> A layer of Intrinsic (I) semiconductor is added between P and N layers to increase the depletion width, improving sensitivity and speed.</li>
                            </ul>

                            <h3>3. Working Principle</h3>
                            <ol>
                                <li><strong>Dark Condition:</strong> When reverse biased with no light, a negligible current flows due to minority carriers. This is called <strong>Dark Current</strong> (Id).</li>
                                <li><strong>Illumination:</strong> When light falls on the junction, photons with energy (E = hν > Bandgap Eg) strike the depletion region.</li>
                                <li><strong>Generation:</strong> The energy is absorbed, breaking covalent bonds and generating electron-hole pairs.</li>
                                <li><strong>Conduction:</strong> The strong electric field in the depletion region sweeps electrons to the N-side and holes to the P-side.</li>
                                <li><strong>Photocurrent:</strong> This movement constitutes a reverse current (Ip) which is linearly proportional to the intensity of incident light.</li>
                            </ol>
                            <p class="formula">Total Current I = Is + Ip</p>

                            <h3>4. V-I Characteristics</h3>
                            <p>The characteristics are plotted in the 3rd Quadrant (Reverse Bias).</p>
                            <ul>
                                <li>X-axis: Reverse Voltage (Vr).</li>
                                <li>Y-axis: Reverse Current (Ir).</li>
                                <li>As Light Intensity (Lux) increases, the horizontal current lines shift downwards (current increases).</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Graph: 3rd Quadrant. Flat lines for Dark, 1000 Lux, 2000 Lux, etc.]</div>

                            <h3>5. Modes of Operation</h3>
                            <ul>
                                <li><strong>Photoconductive Mode:</strong> Reverse biased. Fast response, high linearity. Used in fiber optic receivers. Has dark current noise.</li>
                                <li><strong>Photovoltaic Mode:</strong> Zero bias. No dark current. Used in precision light meters and solar cells. Slower response.</li>
                            </ul>

                            <h3>6. Advantages & Disadvantages</h3>
                            <ul>
                                <li><strong>Advantages:</strong> Very fast response (nanoseconds), linear response, small size, low cost.</li>
                                <li><strong>Disadvantages:</strong> Requires amplification (low current), temperature sensitive, small active area.</li>
                            </ul>

                            <h3>7. Applications</h3>
                            <ul>
                                <li>Optical Communication (Fiber optics).</li>
                                <li>Remote controls (TV IR receivers).</li>
                                <li>Smoke detectors.</li>
                                <li>Barcode scanners.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Describe the measurement of pH using a Glass Electrode.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p><strong>pH</strong> is a measure of the acidity or alkalinity of a solution. It is defined as the negative logarithm of Hydrogen ion concentration.</p>
                            <p class="formula">pH = -log₁₀[H⁺]</p>
                            <p>The <strong>Glass Electrode</strong> method is the standard industrial and laboratory method for pH measurement (Potentiometric method).</p>

                            <h3>2. The Electrode System</h3>
                            <p>It consists of two electrodes dipped in the solution:</p>
                            
                            <h4>A. Measuring Electrode (Glass Electrode)</h4>
                            <ul>
                                <li>Consists of a glass tube with a thin, pH-sensitive glass bulb at the tip.</li>
                                <li>Inside the bulb is a buffer solution of fixed pH (usually 0.1M HCl, pH 7).</li>
                                <li>An internal reference wire (Ag/AgCl) is immersed in this buffer.</li>
                            </ul>

                            <h4>B. Reference Electrode</h4>
                            <ul>
                                <li>Provides a stable, constant potential independent of the test solution.</li>
                                <li>Common types: <strong>Calomel Electrode</strong> (Hg/Hg₂Cl₂) or Silver-Silver Chloride (Ag/AgCl).</li>
                                <li>It has a porous junction (salt bridge) to complete the electrical circuit with the test solution.</li>
                            </ul>
                            <div class="diagram-placeholder">[Draw Diagram: Beaker with solution. Glass electrode and Reference electrode dipped in. Connected to pH meter.]</div>

                            <h3>3. Working Principle</h3>
                            <p>When the glass bulb is immersed in the test solution, an ion-exchange equilibrium is established at the glass-solution interface.</p>
                            <ul>
                                <li>If the solution is acidic (High H⁺), H⁺ ions migrate into the glass surface layer.</li>
                                <li>If alkaline, H⁺ ions migrate out.</li>
                            </ul>
                            <p>This creates a potential difference across the glass membrane called the <strong>Nernst Potential</strong>.</p>

                            <h3>4. The Nernst Equation</h3>
                            <p>The potential E generated is given by:</p>
                            <p class="formula">E = E₀ - (2.303 RT / F) * pH</p>
                            <p>Where:</p>
                            <ul>
                                <li><strong>E₀:</strong> Standard potential.</li>
                                <li><strong>R:</strong> Gas constant.</li>
                                <li><strong>T:</strong> Absolute Temperature (K).</li>
                                <li><strong>F:</strong> Faraday's constant.</li>
                            </ul>
                            <p>At 25°C, the factor (2.303 RT / F) is approx <strong>59.16 mV</strong>.</p>
                            <p>So, for every 1 unit change in pH, the voltage changes by 59.16 mV.</p>

                            <h3>5. Measurement & Calibration</h3>
                            <ul>
                                <li>The voltage is measured by a high-input impedance voltmeter (pH meter) because the glass electrode has very high resistance (100 MΩ).</li>
                                <li><strong>Temperature Compensation:</strong> Since 'T' is in the equation, pH meters have a temperature probe (RTD) to correct the reading automatically (ATC).</li>
                                <li><strong>Calibration:</strong> The meter must be calibrated regularly using standard buffer solutions (pH 4.01, 7.00, 10.01) to correct for aging (Slope adjustment).</li>
                            </ul>

                            <h3>6. Applications</h3>
                            <ul>
                                <li>Chemical processing (neutralization).</li>
                                <li>Water treatment plants.</li>
                                <li>Food and Beverage industry.</li>
                                <li>Blood pH monitoring.</li>
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
                    question: "What are Smart Sensors? Explain their block diagram and features.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>A <strong>Smart Sensor</strong> (or Intelligent Sensor) is a sensor that goes beyond simple detection. It integrates the sensing element with signal conditioning, data processing (microcontroller), and communication capabilities in a single package.</p>
                            <p>It follows the <strong>IEEE 1451</strong> standard for smart transducer interfaces.</p>

                            <h3>2. Block Diagram Description</h3>
                            <p>A smart sensor consists of the following functional blocks:</p>
                            <div class="diagram-placeholder">[Draw Block Diagram: Physical Input -> [Primary Sensor] -> [Signal Conditioning (Amp/Filter)] -> [ADC] -> [Microprocessor/DSP + Memory] -> [Comm Interface] -> Digital Output]</div>

                            <ul>
                                <li><strong>Primary Sensing Element:</strong> Detects the physical quantity (e.g., pressure, temp) and gives a raw analog signal.</li>
                                <li><strong>Excitation Control:</strong> Provides constant current/voltage to the sensor if needed.</li>
                                <li><strong>Amplification & Filtering (Analog Front End):</strong> Amplifies weak signals and removes noise (Anti-aliasing filter).</li>
                                <li><strong>ADC (Analog to Digital Converter):</strong> Converts the conditioned analog signal into digital data for the processor.</li>
                                <li><strong>Microprocessor / DSP:</strong> The "Brain" of the sensor. It performs:
                                    <ul>
                                        <li><strong>Linearization:</strong> Corrects non-linear sensor response.</li>
                                        <li><strong>Compensation:</strong> Corrects for cross-sensitivity (e.g., temp effects on pressure).</li>
                                        <li><strong>Data Processing:</strong> Averaging, unit conversion.</li>
                                    </ul>
                                </li>
                                <li><strong>Memory (EEPROM/Flash):</strong> Stores calibration data (TEDS - Transducer Electronic Data Sheet), sensor ID, and configuration.</li>
                                <li><strong>Communication Interface:</strong> Transmits data via standard protocols (UART, I2C, SPI, CAN, Zigbee, Wi-Fi).</li>
                            </ul>

                            <h3>3. Key Features</h3>
                            <ul>
                                <li><strong>Self-Calibration:</strong> Can automatically adjust offset and gain.</li>
                                <li><strong>Self-Diagnosis:</strong> Can detect if the sensor is broken, disconnected, or operating out of range.</li>
                                <li><strong>Multi-Sensing:</strong> One package can measure multiple parameters (e.g., A pressure sensor that also measures temp for compensation).</li>
                                <li><strong>Digital Communication:</strong> Direct interface with PLCs, SCADA, and IoT networks.</li>
                                <li><strong>Remote Configuration:</strong> Settings can be changed remotely via software.</li>
                            </ul>

                            <h3>4. Advantages</h3>
                            <ul>
                                <li>Higher accuracy and reliability.</li>
                                <li>Reduced load on the main system controller.</li>
                                <li>Easy networking and scalability.</li>
                                <li>Plug-and-play capability.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    question: "Discuss the applications of Sensors in the Automotive Industry.",
                    answer: `
                        <div class="model-answer-pro">
                            <h3>1. Introduction</h3>
                            <p>Modern automobiles are "Computers on Wheels," using 50-100+ sensors to monitor engine performance, safety, comfort, and emissions. These sensors feed data to the <strong>ECU (Electronic Control Unit)</strong>.</p>

                            <h3>2. Powertrain (Engine & Transmission)</h3>
                            <ul>
                                <li><strong>MAP Sensor (Manifold Absolute Pressure):</strong> Measures air pressure in the intake manifold to calculate air density and determine fuel injection mass.</li>
                                <li><strong>MAF Sensor (Mass Air Flow):</strong> Directly measures the mass of air entering the engine.</li>
                                <li><strong>Oxygen Sensor (Lambda Sensor):</strong> Located in the exhaust. Measures O₂ levels to adjust the air-fuel ratio for optimal combustion and emission control (Stoichiometry). Uses Zirconia elements.</li>
                                <li><strong>Crankshaft/Camshaft Position Sensors:</strong> (Hall Effect/Inductive) Determine engine speed (RPM) and piston position for ignition timing.</li>
                                <li><strong>Knock Sensor:</strong> (Piezoelectric) Detects engine knocking (detonation) so ECU can retard ignition timing.</li>
                                <li><strong>Throttle Position Sensor (TPS):</strong> Monitors gas pedal position.</li>
                            </ul>

                            <h3>3. Chassis & Safety Systems</h3>
                            <ul>
                                <li><strong>Wheel Speed Sensors:</strong> (Hall Effect) Measure speed of each wheel. Essential for <strong>ABS (Anti-lock Braking System)</strong> and Traction Control.</li>
                                <li><strong>Accelerometers (MEMS):</strong> Detect sudden deceleration (crash) to deploy <strong>Airbags</strong>. Also used in Electronic Stability Control (ESC).</li>
                                <li><strong>TPMS (Tire Pressure Monitoring System):</strong> Wireless sensors inside tires measure pressure and temp to warn of under-inflation.</li>
                                <li><strong>Steering Angle Sensor:</strong> Measures steering wheel position for stability control.</li>
                            </ul>

                            <h3>4. Comfort & Convenience</h3>
                            <ul>
                                <li><strong>Cabin Temperature Sensors:</strong> For Automatic Climate Control (HVAC).</li>
                                <li><strong>Rain Sensor:</strong> (Optical) Detects rain on windshield to activate wipers automatically.</li>
                                <li><strong>Light Sensor:</strong> Turns on headlights in tunnels/night.</li>
                                <li><strong>Ultrasonic / Radar Sensors:</strong> Used for Parking Assist and Blind Spot Detection.</li>
                            </ul>

                            <h3>5. Future: ADAS & Autonomous Driving</h3>
                            <ul>
                                <li><strong>LiDAR:</strong> 3D mapping of surroundings.</li>
                                <li><strong>Radar:</strong> Adaptive Cruise Control (distance keeping).</li>
                                <li><strong>Cameras:</strong> Lane departure warning, sign recognition.</li>
                            </ul>
                        </div>
                    `
                }
            ]
        }
    ]
};
