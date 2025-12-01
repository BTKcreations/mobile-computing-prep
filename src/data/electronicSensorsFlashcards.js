export const electronicSensorsFlashcards = [
    // Unit I: Basics & Electromechanical
    {
        id: 1,
        unit: "I",
        front: "Sensor",
        back: `<div class="fc-content"><p>A device that detects a physical parameter and converts it into a signal (usually electrical).</p></div>`
    },
    {
        id: 2,
        unit: "I",
        front: "Transducer",
        back: `<div class="fc-content"><p>A device that converts energy from one form to another (e.g., Microphone: Sound -> Electrical).</p></div>`
    },
    {
        id: 3,
        unit: "I",
        front: "Active Transducer",
        back: `<div class="fc-content"><p>Self-generating. Does NOT require external power.<br/><em>Ex: Thermocouple, Piezoelectric.</em></p></div>`
    },
    {
        id: 4,
        unit: "I",
        front: "Passive Transducer",
        back: `<div class="fc-content"><p>Requires external power source to operate.<br/><em>Ex: Strain Gauge, LVDT, Thermistor.</em></p></div>`
    },
    {
        id: 5,
        unit: "I",
        front: "Resolution",
        back: `<div class="fc-content"><p>The smallest change in input that a sensor can detect.</p></div>`
    },
    {
        id: 6,
        unit: "I",
        front: "Sensitivity",
        back: `<div class="fc-content"><p>Ratio of change in output to change in input.<br/><strong>S = ΔOutput / ΔInput</strong></p></div>`
    },
    {
        id: 7,
        unit: "I",
        front: "Linearity",
        back: `<div class="fc-content"><p>The closeness of the calibration curve to a straight line.</p></div>`
    },
    {
        id: 8,
        unit: "I",
        front: "Hysteresis",
        back: `<div class="fc-content"><p>The difference in output for the same input when approached from increasing vs decreasing directions.</p></div>`
    },
    {
        id: 9,
        unit: "I",
        front: "Piezoresistive Effect",
        back: `<div class="fc-content"><p>Change in electrical resistance of a material when mechanical strain is applied.</p></div>`
    },
    {
        id: 10,
        unit: "I",
        front: "Gauge Factor (GF)",
        back: `<div class="fc-content"><p>Sensitivity of a Strain Gauge.<br/><strong>GF = (ΔR/R) / ε</strong><br/>Ideally ~2 for metals.</p></div>`
    },
    {
        id: 11,
        unit: "I",
        front: "Wheatstone Bridge",
        back: `<div class="fc-content"><p>Circuit used to convert small resistance changes (ΔR) into measurable voltage changes.</p></div>`
    },
    {
        id: 12,
        unit: "I",
        front: "LVDT",
        back: `<div class="fc-content"><p><strong>Linear Variable Differential Transformer</strong>.<br/>Inductive sensor for linear displacement.</p></div>`
    },
    {
        id: 13,
        unit: "I",
        front: "LVDT Principle",
        back: `<div class="fc-content"><p>Mutual Induction. Output voltage depends on the position of the magnetic core linking Primary and Secondary coils.</p></div>`
    },
    {
        id: 14,
        unit: "I",
        front: "LVDT Null Position",
        back: `<div class="fc-content"><p>Core at center. Flux in S1 = Flux in S2.<br/><strong>Vout = Vs1 - Vs2 = 0</strong>.</p></div>`
    },
    {
        id: 15,
        unit: "I",
        front: "Capacitive Sensor Formula",
        back: `<div class="fc-content"><p><strong>C = (εA) / d</strong><br/>Sensitivity is high for small changes in 'd'.</p></div>`
    },

    // Unit II: Thermal Sensors
    {
        id: 16,
        unit: "II",
        front: "Bimetallic Strip",
        back: `<div class="fc-content"><p>Two metals with different coefficients of expansion bonded together. Bends when heated.</p></div>`
    },
    {
        id: 17,
        unit: "II",
        front: "RTD",
        back: `<div class="fc-content"><p><strong>Resistance Temperature Detector</strong>.<br/>Metal (Platinum) resistance increases linearly with temperature (PTC).</p></div>`
    },
    {
        id: 18,
        unit: "II",
        front: "Pt100",
        back: `<div class="fc-content"><p>Standard Platinum RTD with 100Ω resistance at 0°C.</p></div>`
    },
    {
        id: 19,
        unit: "II",
        front: "Thermistor",
        back: `<div class="fc-content"><p><strong>Thermal Resistor</strong>.<br/>Semiconductor device. High sensitivity but non-linear.</p></div>`
    },
    {
        id: 20,
        unit: "II",
        front: "NTC",
        back: `<div class="fc-content"><p><strong>Negative Temperature Coefficient</strong>.<br/>Resistance decreases as Temperature increases. Common in Thermistors.</p></div>`
    },
    {
        id: 21,
        unit: "II",
        front: "Seebeck Effect",
        back: `<div class="fc-content"><p>Principle of Thermocouple. EMF generated when two dissimilar metals form a loop with junctions at different temps.</p></div>`
    },
    {
        id: 22,
        unit: "II",
        front: "Peltier Effect",
        back: `<div class="fc-content"><p>Inverse of Seebeck. Current flowing through a junction causes heating or cooling.</p></div>`
    },
    {
        id: 23,
        unit: "II",
        front: "Cold Junction Compensation",
        back: `<div class="fc-content"><p>Technique to correct Thermocouple errors caused by ambient temperature changes at the reference junction.</p></div>`
    },
    {
        id: 24,
        unit: "II",
        front: "Law of Intermediate Metals",
        back: `<div class="fc-content"><p>Inserting a third metal (meter) into a thermocouple circuit doesn't affect reading if its junctions are at same temp.</p></div>`
    },
    {
        id: 25,
        unit: "II",
        front: "Optical Pyrometer",
        back: `<div class="fc-content"><p>Non-contact sensor. Measures temperature by comparing brightness of source with a standard filament.</p></div>`
    },

    // Unit III: Magnetic Sensors
    {
        id: 26,
        unit: "III",
        front: "Hall Effect",
        back: `<div class="fc-content"><p>Generation of transverse voltage in a current-carrying conductor placed in a magnetic field.</p></div>`
    },
    {
        id: 27,
        unit: "III",
        front: "Hall Voltage Formula",
        back: `<div class="fc-content"><p><strong>Vh = (Rh * I * B) / t</strong><br/>Directly proportional to Magnetic Field (B).</p></div>`
    },
    {
        id: 28,
        unit: "III",
        front: "Hall Sensor Applications",
        back: `<div class="fc-content"><p>1. Current Sensing<br/>2. RPM Measurement<br/>3. Position Sensing (BLDC Motors)</p></div>`
    },
    {
        id: 29,
        unit: "III",
        front: "Magnetoresistance",
        back: `<div class="fc-content"><p>Change in resistance of a material in the presence of a magnetic field.</p></div>`
    },
    {
        id: 30,
        unit: "III",
        front: "Magnetostriction",
        back: `<div class="fc-content"><p>Change in physical dimensions (shape/size) of a ferromagnetic material when magnetized.</p></div>`
    },
    {
        id: 31,
        unit: "III",
        front: "Wiedemann Effect",
        back: `<div class="fc-content"><p>Twisting of a wire due to interaction of longitudinal and circular magnetic fields. Used in Magnetostrictive Level Sensors.</p></div>`
    },

    // Unit IV: Radiation & Electroanalytical
    {
        id: 32,
        unit: "IV",
        front: "Photodiode",
        back: `<div class="fc-content"><p>Semiconductor PN junction operated in <strong>Reverse Bias</strong>. Light creates electron-hole pairs -> Current flows.</p></div>`
    },
    {
        id: 33,
        unit: "IV",
        front: "Photovoltaic Effect",
        back: `<div class="fc-content"><p>Generation of voltage when light falls on a material (Solar Cell principle). No external power needed.</p></div>`
    },
    {
        id: 34,
        unit: "IV",
        front: "LDR",
        back: `<div class="fc-content"><p><strong>Light Dependent Resistor</strong>.<br/>Resistance decreases as light intensity increases (Photoconductivity).</p></div>`
    },
    {
        id: 35,
        unit: "IV",
        front: "pH",
        back: `<div class="fc-content"><p>Negative logarithm of Hydrogen ion concentration.<br/><strong>pH = -log[H+]</strong></p></div>`
    },
    {
        id: 36,
        unit: "IV",
        front: "Glass Electrode",
        back: `<div class="fc-content"><p>The sensing electrode in a pH meter. Has a thin glass membrane sensitive to H+ ions.</p></div>`
    },
    {
        id: 37,
        unit: "IV",
        front: "Nernst Equation (pH)",
        back: `<div class="fc-content"><p>Relates cell potential to pH.<br/><strong>E = E₀ - 0.0591 * pH</strong> (at 25°C).</p></div>`
    },
    {
        id: 38,
        unit: "IV",
        front: "Conductivity Cell",
        back: `<div class="fc-content"><p>Measures ionic concentration. Uses AC excitation to prevent polarization (electrolysis) of the solution.</p></div>`
    },

    // Unit V: Smart Sensors & MEMS
    {
        id: 39,
        unit: "V",
        front: "Smart Sensor",
        back: `<div class="fc-content"><p>A sensor with built-in intelligence.<br/><strong>Sensor + Signal Conditioning + ADC + Microprocessor + Comm.</strong></p></div>`
    },
    {
        id: 40,
        unit: "V",
        front: "IEEE 1451",
        back: `<div class="fc-content"><p>Standard for Smart Transducer Interface. Defines TEDS (Transducer Electronic Data Sheet).</p></div>`
    },
    {
        id: 41,
        unit: "V",
        front: "Self-Calibration",
        back: `<div class="fc-content"><p>Ability of a smart sensor to automatically adjust its zero and span settings.</p></div>`
    },
    {
        id: 42,
        unit: "V",
        front: "MEMS",
        back: `<div class="fc-content"><p><strong>Micro-Electro-Mechanical Systems</strong>.<br/>Miniaturized devices with moving parts on a silicon chip.</p></div>`
    },
    {
        id: 43,
        unit: "V",
        front: "Bulk Micromachining",
        back: `<div class="fc-content"><p>Fabrication technique where the silicon substrate itself is etched away to create structures.</p></div>`
    },
    {
        id: 44,
        unit: "V",
        front: "Surface Micromachining",
        back: `<div class="fc-content"><p>Building structures ON TOP of the substrate using deposited layers (Sacrificial & Structural layers).</p></div>`
    },
    {
        id: 45,
        unit: "V",
        front: "Anisotropic Etching",
        back: `<div class="fc-content"><p>Etching that depends on crystal orientation. Creates precise shapes like V-grooves.</p></div>`
    },
    {
        id: 46,
        unit: "V",
        front: "Isotropic Etching",
        back: `<div class="fc-content"><p>Etching that proceeds at the same rate in all directions (like a spherical hole).</p></div>`
    },
    {
        id: 47,
        unit: "V",
        front: "MEMS Accelerometer",
        back: `<div class="fc-content"><p>Uses a proof mass and springs. Displacement changes capacitance. Used in Airbags, Phones.</p></div>`
    },
    {
        id: 48,
        unit: "V",
        front: "Sacrificial Layer",
        back: `<div class="fc-content"><p>A temporary layer in MEMS fabrication that is etched away to release moving parts.</p></div>`
    },
    {
        id: 49,
        unit: "V",
        front: "TEDS",
        back: `<div class="fc-content"><p><strong>Transducer Electronic Data Sheet</strong>.<br/>Digital ID card of a smart sensor stored in memory.</p></div>`
    },
    {
        id: 50,
        unit: "V",
        front: "Actuator",
        back: `<div class="fc-content"><p>Inverse of a sensor. Converts electrical signal into physical action (e.g., Motor, Valve).</p></div>`
    }
];
