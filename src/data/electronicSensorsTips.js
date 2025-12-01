export const electronicSensorsTips = [
    {
        category: "General Exam Strategy 🎯",
        tips: [
            {
                title: "The 'Diagram First' Rule",
                content: "In Electronic Sensors, **Diagrams are King**. Even if the question asks for 'Explain the principle', start with a neat circuit diagram or block diagram. It creates an immediate positive impression."
            },
            {
                title: "Structure Your Answers",
                content: "Don't write huge paragraphs. Use this standard structure for every sensor:\n1. **Principle** (1-2 lines)\n2. **Construction** (Diagram + Labels)\n3. **Working** (Step-by-step points)\n4. **Characteristics** (Graph)\n5. **Applications** (Bullet points)"
            },
            {
                title: "Units & Axes",
                content: "Marks are often deducted for missing units. Always label graphs (e.g., 'Temp (°C)' on X-axis, 'Resistance (Ω)' on Y-axis). Never leave a graph floating without labels."
            }
        ]
    },
    {
        category: "Subject-Specific Hacks ⚡",
        tips: [
            {
                title: "Active vs Passive Trick",
                content: "Confused? Remember: **Active** sensors are like 'Activists' - they generate their own energy (Voltage/Current) e.g., Thermocouple, Solar Cell. **Passive** sensors are 'Lazy' - they need external power to work e.g., Strain Gauge, LVDT."
            },
            {
                title: "The 'Transduction' Keyword",
                content: "For almost every question, you can add a point about the **Transduction Principle**. \n- Strain Gauge -> Piezoresistive\n- LVDT -> Electromagnetic Induction\n- Thermocouple -> Seebeck Effect\n- Solar Cell -> Photovoltaic"
            },
            {
                title: "Linearity Defense",
                content: "If you forget the characteristics, most sensors aim to be **Linear**. You can safely write: 'Ideally, this sensor exhibits linear characteristics over a specific range.' (Exceptions: Thermistors are highly non-linear)."
            }
        ]
    },
    {
        category: "Topic-Wise Shortcuts 🧠",
        tips: [
            {
                title: "Strain Gauge GF Formula",
                content: "Memorize **GF = 1 + 2ν**. \n- 1 comes from length change.\n- 2ν comes from area change.\n- If piezoresistive effect is included, add the resistivity term."
            },
            {
                title: "LVDT Null Position",
                content: "The most important concept in LVDT is the **Null Position**. Always mention: 'At center, Vs1 = Vs2, so Vout = 0'. This is the heart of the working principle."
            },
            {
                title: "Thermocouple Laws",
                content: "Don't memorize definitions. Understand them:\n- **Homogeneous:** Wire quality matters, not temp distribution.\n- **Intermediate Metals:** Adding a meter doesn't hurt.\n- **Intermediate Temp:** T1->T2 + T2->T3 = T1->T3."
            },
            {
                title: "Hall Effect Direction",
                content: "Remember **FBI** (Force, B-field, I-current) are all perpendicular to each other. The Hall Voltage builds up 'sideways' across the conductor."
            }
        ]
    },
    {
        category: "For Last-Minute Learners ⏳",
        tips: [
            {
                title: "Focus on 'The Big 5'",
                content: "If you have no time, master these 5 topics perfectly. They appear in almost every paper:\n1. **Strain Gauge** (Derivation)\n2. **LVDT** (Construction & Graph)\n3. **Thermocouple** (Laws)\n4. **Hall Effect**\n5. **Smart Sensors** (Block Diagram)"
            },
            {
                title: "Definition + Diagram Strategy",
                content: "If you don't know the full answer, write a correct **Definition** and draw a relevant **Diagram**. This alone can fetch you 40-50% marks for that question."
            }
        ]
    },
    {
        category: "For Toppers (90+ Aim) 🏆",
        tips: [
            {
                title: "Mention 'Compensation'",
                content: "To stand out, mention how to fix errors. \n- For Strain Gauges: Mention **Temperature Compensation** (Dummy Gauge).\n- For Thermocouples: Mention **Cold Junction Compensation**."
            },
            {
                title: "Bridge Circuits",
                content: "Don't just draw the sensor. Draw the **Signal Conditioning Circuit** (Wheatstone Bridge or Op-Amp) connected to it. This shows deep understanding."
            },
            {
                title: "Real-World Examples",
                content: "Add a 'Practical Note'. E.g., for Accelerometers, mention 'Used in Airbag deployment systems'. For LVDT, mention 'Used in CNC machines'."
            }
        ]
    }
];
