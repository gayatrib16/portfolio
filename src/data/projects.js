import p1Cover from '../assets/project1-cover.jpeg'
import p2Cover from '../assets/project2-cover.jpeg'
import p3Cover from '../assets/project3-cover.jpeg'
import p4Cover from '../assets/project4-cover.jpeg'
import p5Cover from '../assets/project5-cover.jpeg'
import p6Cover from '../assets/project6-cover.jpeg'
import p7Cover from '../assets/project7-cover.jpeg'
import p8Cover from '../assets/project8-cover.jpeg'
import p9Cover from '../assets/project9-cover.jpeg'
import p10Cover from '../assets/project10-cover.jpeg'
import p11Cover from '../assets/project11-cover.jpeg'
import p12Cover from '../assets/project12-cover.jpeg'
import p13Cover from '../assets/project13-cover.jpeg'
import p1Img1 from '../assets/proj1-img1.jpeg'
import p1Img2 from '../assets/proj1-img2.jpeg'
import p1Img3 from '../assets/proj1-img3.jpeg'
import p1Img4 from '../assets/proj1-img4.jpeg'
import methp2Img1 from '../assets/proj2-meth1.jpeg'
import methp2Img2 from '../assets/proj2-meth2.jpeg'
import methp3Img1 from '../assets/proj3-meth1.jpeg'
import obj3Img1 from '../assets/proj3-obj1.jpeg'
import val3Img1 from '../assets/proj3-val1.jpeg'
import p3Img1 from '../assets/proj3-img1.jpeg'
import p4i1 from '../assets/p4-i1.jpg'
import p4i2 from '../assets/p4-i2.jpg'
import p4i3 from '../assets/p4-i3.jpg'
import p4i4 from '../assets/p4-i4.jpg'
import p4i5 from '../assets/p4-i5.jpg'
import p4i6 from '../assets/p4-i6.jpg'
import p5i1 from '../assets/p5-i1.jpg'
import p6i1 from '../assets/p6-i1.jpg'
import p6i2 from '../assets/p6-i2.jpg'
import p6i3 from '../assets/p6-i3.jpg'
import p7i1 from '../assets/p7-i1.jpg'
import p7i2 from '../assets/p7-i2.jpg'
import p7i3 from '../assets/p7-i3.jpg'
import p7i4 from '../assets/p7-i4.jpg'
import p8i1 from '../assets/p8-i1.jpg'
import p8i2 from '../assets/p8-i2.jpg'
import p9i1 from '../assets/p9-i1.jpg'
import p9i2 from '../assets/p9-i2.jpg'
import p9i3 from '../assets/p9-i3.jpg'
import p9i4 from '../assets/p9-i4.jpg'
import p10i1 from '../assets/p10-i1.jpg'
import p10i2 from '../assets/p10-i2.jpg'
import p10i3 from '../assets/p10-i3.jpg'
import p10i4 from '../assets/p10-i4.jpg'
import p11m1 from '../assets/p11-meth1.jpg'
import p11m2 from '../assets/p11-meth2.jpg'
import p11m3 from '../assets/p11-meth3.jpg'
import p11m4 from '../assets/p11-meth4.jpg'
import p11m5 from '../assets/p11-meth5.jpg'
import p11m6 from '../assets/p11-meth6.jpg'
import p11m7 from '../assets/p11-meth7.jpg'
import p11m8 from '../assets/p11-meth8.jpg'
import p11m9 from '../assets/p11-meth9.jpg'
import p12d1 from '../assets/p12-d1.jpg'
import p12v1 from '../assets/p12-v1.jpg'
import p12v2 from '../assets/p12-v2.jpg'
import p12v3 from '../assets/p12-v3.jpg'
import p12v4 from '../assets/p12-v4.jpg'
import p12v5 from '../assets/p12-v5.jpg'
import p12v6 from '../assets/p12-v6.jpg'
import p12v7 from '../assets/p12-v7.jpg'
import p13spec1 from '../assets/p13-spec1.jpg'
import p13d1 from '../assets/p13-d1.jpg'
import p13d2 from '../assets/p13-d2.jpg'
import p13f1 from '../assets/p13-f1.jpg'




export const projects = [
  {
    id: 1,
    image: p1Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "battery-tray-fea",
    title: "Elect. Vehicle Battery Enclosure Structural Development",
    shortDesc: "Analyzed the industry shift to structural EV battery packs and validated a 41% stiffness improvement in a baseline enclosure design using FEA modal analysis in Abaqus.",
    year: "2025",
    tags: ["FEA", "ANSYS", "Structural Analysis", "Automotive"],
    // image: null, // replace with: import img from '../assets/project1.jpg'
    coverColor: "#2D4A3E",
    description: `This project details the competitive analysis and structural simulation of Electric Vehicle (EV) battery enclosures. Traditional Cell-to-Module (CTM) enclosure designs are often heavy, space-inefficient, and do not contribute to the vehicle’s structural integrity. This project addresses that gap by benchmarking leading industry designs and analyzing the architectural shift towards integrated Cell-to-Pack (CTP) and Cell-to-Chassis (CTC) systems. The findings were then applied to a baseline Finite Element Analysis (FEA) model built in Abaqus, creating a framework to simulate and optimize enclosure performance.`,
challenge: `Traditional CTM battery packs, which house cells inside modules within a larger enclosure, act as passive, non-load-bearing components. Their primary limitation is the significant addition of parasitic mass—often accounting for 22-27% of the total vehicle weight—without contributing to the chassis stiffness. This design philosophy leads to redundant support structures, reduced volumetric energy density, and requires the vehicle's primary frame to absorb all crash and dynamic loads, limiting overall vehicle efficiency and performance.`,
approach: `To overcome these limitations, this project investigated the industry’s shift toward integrated battery architectures that make the enclosure a structural component of the vehicle. Two key approaches were analyzed:

a. Cell-to-Pack (CTP): This design eliminates the intermediate module structure and integrates cells directly into the pack. This allows the pack itself to serve as a load-bearing element, increasing torsional rigidity, reducing weight, and enabling a slimmer design for a lower center of gravity.

b. Cell-to-Chassis (CTC): This is the most advanced approach, where the battery cells are integrated directly into the vehicle's body structure. The chassis side rails and cross-members form the protective casing, maximizing weight reduction and handling improvements but introducing challenges in serviceability.
    These higher-order designs reduce part counts, improve energy density, and allow the battery to actively contribute to crash energy absorption.`,
methodology: `The project followed a workflow from industry research to computational simulation:

a. Competitive Benchmarking: Leading enclosure designs and patents from OEMs like Ford, BMW, and Hyundai, and suppliers like Constellium and Mitsubishi Chemical Group, were analyzed to identify key structural concepts, material choices, and manufacturing trends. 

b. Architectural Analysis: The identified designs were systematically classified into CTM, CTP, and CTC architectures to evaluate the trade-offs between serviceability, packaging efficiency, and structural performance.

c. FEA Simulation in Abaqus: A baseline shell model inspired by the Ford Mach-E CTM pack was developed. A modal analysis was then performed to identify the enclosure's natural frequencies, a key indicator of its dynamic stiffness and resistance to road-induced vibration.`,

validation: `The developed framework was used to validate the structural benefits of an integrated pack design. A baseline "open-top" CTM - style enclosure was compared against an optimized design featuring a fully constrained top cover, which simulates the closed-box rigidity of a CTP-style structural pack.
    The simulation produced clear numerical results:

a. The baseline model exhibited a fundamental natural frequency of 45.287 Hz.

b. The optimized model with the integrated top cover yielded a fundamental frequency of 63.832 Hz.

c. This result showed a 41% increase in structural stiffness, confirming the significant performance benefit of a unified, enclosed pack design. This successful validation confirms the accuracy of using modal analysis to guide and quantify structural improvements.`,
conclusion: `This project successfully developed and implemented a computational framework for analyzing and improving EV battery enclosure designs. The strong agreement between the simulation results (a 41% stiffness increase from an enclosed design) and established industry trends (the shift toward structural CTP/CTC packs) validates the project's methodology. This work provides a robust and accessible foundation for engineers to further explore higher-order battery architectures and develop advanced models for safer, lighter, and more efficient electric vehicles.
    This work provides a robust foundation for further exploration. Future work will involve extending the framework to include vibration fatigue analysis to evaluate the long-term durability of the enclosure and its joints under operational loads. This will enable the development of more advanced, reliable, and lightweight models for safer and more efficient electric vehicles.`,
    skills: ["Simulia Abaqus", "SolidWorks"],
    images: [p1Img1,p1Img2,p1Img3,p1Img4], // replace with imported images
  },
  {
    id: 2,
    image: p2Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "beam-theory-micropolar",
    title: "Computational Modeling of Micropolar Elasticity: FEniCS",
    shortDesc: "Developed and validated an open-source FEniCS framework for simulating micropolar elasticity to model size-dependent effects in complex materials.",
    year: "2025",
    tags: ["Computational Mechanics", "FEM", "Theory"],
    // image: null,
    coverColor: "#1A3A5C",
    description: `This project details the development of an open-source computational framework to simulate micropolar elasticity using the FEniCS finite element library. Classical elasticity theory is often insufficient for materials with internal microstructures—such as foams, granular assemblies, and metamaterials because it neglects the size-dependent effects that arise from the material's underlying length scales. This project addresses that gap by implementing a higher-order continuum model that accounts for these complex behaviors. The open-source code promotes reproducibility and further research in the field..`,

  challenge: `Traditional constitutive models assume that material deformation is driven solely by the translation of points. They do not account for the independent rotation of material points within a microstructure. This simplification leads to simulations that can be overly sensitive to the mesh size and produce inaccurate predictions when phenomena like strain localization occur.`,

  approach: `To overcome these limitations, this project employed Micropolar Elasticity theory, which extends classical elasticity by introducing two independent kinematic quantities:

Translational Displacement (u): The standard displacement field.

Micro-rotation (θ): An independent field representing the local rotation of material points.

This approach allows the model to incorporate couple stresses and more accurately capture the behavior of materials with internal structure. The FEniCS Project, a finite element library, was selected for the implementation due to its ability to simplify complex problems and translate mathematical formulations into efficient code with a syntax that closely mirrors the original notation.`,

  methodology: `The project followed a rigorous workflow from theory to validation:

Theoretical Formulation: The kinematics of micropolar continua were defined, including the non-symmetric micropolar strain tensor (ε) and the micro-curvature tensor (φ). The constitutive laws relating force stress and couple stress to these kinematic variables were derived from a quadratic strain energy density function.

Variational Formulation: The governing differential equations (balance of linear and angular momentum) were converted into a weak (integral) form suitable for the Finite Element Method. To ensure numerical stability, Taylor-Hood elements were used to define the function spaces for the displacement and microrotation fields.

FEniCS Implementation: The weak form was implemented in FEniCS using the Unified Form Language (UFL), creating a clear and efficient computational procedure. The complete, open-source code can be found in the project's appendix.`,

methodologyImages: [methp2Img1 , methp2Img2],
  validation: `The implemented framework was validated against a classic benchmark problem: calculating the
Stress Concentration Factor (SCF) for an infinite plate with a circular hole under uniaxial tension. The numerical results from the FEniCS simulation were compared directly with the known analytical solution.
The simulation produced a numerical SCF of 2.036, which showed strong agreement with the analytical solution of 2.38, resulting in a relative error of only 14.45%. This successful validation confirms the accuracy of the FEniCS implementation.`,

  conclusion: `This project successfully developed and validated an open-source FEniCS implementation of micropolar elasticity theory. The strong agreement between the numerical simulation and the analytical benchmark validates the code's accuracy. This work provides a robust and accessible foundation for researchers and engineers to further explore higher-order continuum mechanics and develop advanced models for materials exhibiting significant size effects.`,
    skills: ["Fenics Project", "Python"],
    images: [],
    //report file
    reportUrl: "/reports/proj2report.pdf",
  },
  {
    id: 3,
    image: p3Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "kinematic-hardening",
    title: "Low-Cycle Fatigue Simulation & Analysis",
    shortDesc: "Kinematic Hardening Model Validation via Low-Cycle Fatigue (LCF) Analysis",
    tags: ["Plasticity", "Material Science", "ANSYS"],
    // image: null,
    coverColor: "#3D2B1F",
    description: `This project validated a kinematic hardening model for SA508 Gr.3 low-alloy steel, a material widely used in critical structural components like nuclear reactors and pressure vessels. The study focused on the material's behavior under Very Low-Cycle Fatigue (VLCF), which involves failure in a small number of cycles (10-100) due to large plastic strains. By leveraging the Chaboche hardening model, this work successfully correlated Finite Element Analysis (FEA) simulations with existing experimental data to confirm the accuracy of the computational model.`,

  objective: `The core objective was to validate the kinematic hardening behavior of SA508 Gr.3 steel under strain-controlled fatigue testing. This was accomplished by 

a. Performing Finite Element Method (FEM) simulations in ABAQUS to predict the material's performance.

b. Correlating the simulation results with experimental data to confirm the accuracy of the modeling approach.`,

objectiveImages: [obj3Img1] ,
  approach: `Explain the strategy or solution direction taken.`,

  methodology: `
a. Material and Experimental Data: The analysis was based on experimental test data for SA508 Gr.3 low-alloy steel. Material properties were referenced from ASME Section II, Part D , and the experimental data was sourced from displacement-controlled cyclic tests on notched Compact Tension (C(T)) specimens.

b. Hardening Model: The Chaboche kinematic hardening model was selected for its ability to represent cyclic plasticity effectively within FEA software. The model's parameters were calibrated to trace the material's true stress-strain curve, which was obtained from experimental data.

c. Finite Element Analysis (FEA): A 3D model of the notched C(T) specimen was created and meshed in ABAQUS. Boundary conditions from the experiments were applied, including five sets of increasing displacement amplitudes, with each set running for 20 cycles. The simulation was run to predict the fatigue life of the specimen under these cyclic loads.`,

methodologyImages: [methp3Img1],
  validation: `The FEA simulation successfully predicted the fatigue behavior of the material with a high degree of accuracy.

a. Failure Prediction: The experimental results showed that crack initiation occurred at the 75th cycle. The FEA simulation predicted failure at approximately the 65th cycle.

b. Accuracy: This represents a deviation of only 13%, validating that the FEA model and the chosen Chaboche hardening parameters provide a reliable prediction of the material's fatigue life.

c. Stress Analysis: The simulation showed that the maximum Von Mises stress at the notch reached 653.96 MPa, exceeding the material's ultimate tensile strength of 610 MPa, which aligns with the predicted point of failure. The hysteresis loops from the force vs. displacement plot also captured the expected cyclic plastic behavior.`,

validationImages: [val3Img1],
  conclusion: `Key takeaways, impact, what was learned.`,
    skills: ["Simulia Abaqus", "Matlab", "Solidworks"],
    images: [p3Img1],
    //report file
    reportUrl: "/reports/proj3report.pdf",
  },
  {
    id: 4,
    image: p4Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view  
    slug: "cvd-reactor-piping",
    title: "Reliance Industries Ltd. CVD Reactor Piping Development",
    shortDesc: "Modified and validated the design for Reliance Industries CVD Offgas Cooler piping system in Ansys Mechanical",
    year: "2024",
    tags: ["Piping Design", "Thermal Analysis", "Industry"],
    // image: null,
    coverColor: "#1E3A4A",
    description: `During a project for Reliance Industries, I was responsible for conducting a failure analysis on critical piping T-joints subjected to high thermal stresses. This involved coordinating with the thermal engineering team to obtain accurate thermal load data for our structural analysis. I performed multiple FEA simulations on the T-joint designs and cross-verified our findings through several visits with the component vendor to compare results. Based on this comprehensive analysis, I developed and proposed key design modifications to mitigate stress concentrations, successfully improving the component's reliability and safety.`,

  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  // methodology: `Step-by-step process, tools used, simulations run, etc.`,

  // validation: `Results, comparisons, metrics, what was verified.`,

  conclusion: `Key takeaways, impact, what was learned.`,
    skills: ["ANSYS SpaceClaim", "ANSYS"],
    images: [p4i1 ,p4i2,p4i3,p4i4,p4i5,p4i6],
  },
  {
    id: 5,
    image: p5Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "nkmz-forging-machine",
    title: "NKMZ Forging Machine Design Improvement",
    shortDesc: "CAD model development of a forging press from shop drawings to facilitate engineering analysis and resolve an operational issue identified on-site.",
    year: "2024",
    tags: ["CAD", "Machine Design", "Manufacturing"],
    // image: null,
    coverColor: "#2A1F3D",
    description: `During a project focused on improving a forging press, I conducted an on-site visit to a forging shop to directly observe the equipment's operation and working demonstration. This visit allowed me to analyze a key issue faced on the shop floor. Using drawings provided by the shop in-charge as a reference, I developed a precise 3D CAD model of the forging press in SpaceClaim. This completed model was then submitted for further detailed engineering analysis to help resolve the identified problem.`,

  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  // methodology: `Step-by-step process, tools used, simulations run, etc.`,

  // validation: `Results, comparisons, metrics, what was verified.`,

  // conclusion: `Key takeaways, impact, what was learned.`,
    skills: ["ANSYS SpaceClaim", "ANSYS"],
    images: [p5i1],
  },
  {
    id: 6,
    image: p6Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "shell-displacement-analysis",
    title: "Synloop Waste Heat Boiler",
    shortDesc: "Project Overview: Design Developmentof a Vertical Synloop Boiler",
    year: "2023",
    tags: ["FEA", "Shell Theory", "Computational"],
    // image: null,
    coverColor: "#3A1A1A",
    description: `This report summarizes a Finite Element Analysis (FEA) performed by L&T Heavy Engineering for the H.P. Stripper. The analysis focuses on the distortion that occurs in the tubesheet, a critical component in heat exchangers, as a result of the tube-to-tubesheet welding process. Understanding and predicting this distortion is essential for ensuring the structural integrity and proper functioning of the equipment.`,

    objective: `The primary objective of this analysis was to evaluate the induced distortion of the tube-to-tubesheet joint that occurs during welding, based on a defined weld sequence.`,
  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  methodology: `The project utilized a simplified Welding Simulation methodology to predict the distortion. The approach involved several key steps and assumptions:

a. A Finite Element Analysis (FEA) was conducted using a 2-D axis-symmetric model which was subsequently modeled in 3D.

b. The simulation used a heat source model with a uniform temperature distribution and an inter-pass temperature of 100°C.

c. The effect of adding weld material was incorporated using the "element birth and death" methodology.

d. A key assumption was that material properties at high temperatures were obtained by extrapolating from available material data.`,

  validation: `
a. The analysis yielded specific predictions for the thermal effects and physical distortion caused by the tube-to-tubesheet welding.

b. Thermal profile from the simulation indicated that peak temperatures during the welding process reached 2000°C.

c. The analysis found that the maximum weld-induced distortion observed after the completion of welding is approximately 0.8 mm.

d. Maximum distortion was located at the center of the tubesheet.`,

  conclusion: `The study successfully predicted the distortion in the tubesheet caused by the tube-to-tubesheet welding procedure. The key conclusion is that a maximum distortion of  ~0.8 mm is expected at the center of the tubesheet.`,
    skills: ["Simulia Abaqus"],
    images: [p6i1,p6i2,p6i3],
  },
  {
    id: 7,
    image: p7Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "pressure-vessel-design",
    title: "CVD Reactor Welding Simulation",
    shortDesc: "Conducted a Finite Element Analysis to predict the welding distortion and induced stresses on a CVD reactor shell that result from welding a spiral stiffener onto it.",
    year: "2023",
    tags: ["Pressure Vessel", "ASME", "Design"],
    // image: null,
    coverColor: "#1A2E1A",
    description: `This report summarizes the "Prediction of Welding Distortion in a CVD Reactor," an analysis conducted by L&T Heavy Engineering for a project at RIL Jamnagar. The study examines a Chemical Vapor Deposition (CVD) reactor which features spiral stiffeners welded onto its main shell. The analysis simulates the effects of this specific welding procedure on the reactor's structure.`,

    objective: `The primary goal of this analysis was to use Finite Element Analysis (FEA) to evaluate and predict the distortion of the reactor's shell and its internal clad layer caused by the process of welding external stiffeners onto it.`,
  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  methodology: `A Finite Element Analysis (FEA) was performed to simulate the welding process and its structural consequences. A 2-D axisymmetric model represented the reactor's shell, cladding, and a stiffener. The simulation intentionally excluded the stiffener on the dished-end, because the dished-end's geometry makes it inherently more resistant to pressure and load than the cylindrical shell.

a. The welding process was simulated according to a specific sequence:

b. First, the spiral stiffener is positioned and tack-welded to the shell.

c. Next, a continuous first pass is welded, which is then followed by the remaining weld passes.

d. This welding pattern is traced along the entire spiral path of the stiffener.

e. The stiffener is welded in parallel from both sides onto the shell.
    The analysis operated on key assumptions, including the use of a simplified welding simulation with a uniform temperature heat source model and the application of an "element birth and death" methodology to account for the addition of weld material.`,

  validation: `The analysis yielded precise predictions regarding the thermal impact and physical distortion from the welding.

a. The simulation's thermal profile showed that temperatures during stiffener welding can reach a peak of 2000°C.

b. The main finding was the extent of radial distortion. After the welding of the stiffener rings was complete, the analysis predicted a
maximum radial distortion of approximately 1.7 mm in the inward direction.

c. The simulation also calculated the stress induced by welding, which was found to be 130 MPa in the vicinity of the junction between the clad plate and the shell.`,

  conclusion: `The FEA study successfully predicted the distortion and stress in the CVD reactor shell that result from welding on spiral stiffeners. The simulation concludes that a maximum inward radial distortion of about 1.7 mm can be expected. It is important to acknowledge that these predicted values are based on a simulation that used certain approximations, particularly for material properties at high temperatures. Therefore, the actual distortion and stress values observed in the physical reactor may differ slightly from these findings.`,
    skills: ["Simulia Abaqus"],
    images: [p7i1,p7i2,p7i3,p7i4],
  },
  {
    id: 8,
    image: p8Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "rail-structure-analysis",
    title: "Ammonia Chiller Design by Analysis",
    shortDesc: "Thermo-structural Finite Element Analysis to validate the design of an Ammonia Unitized Chiller's primary and intermediate tubesheets , confirming all stresses were within ASME code limits for design, operating, and hydrotest conditions.",
    year: "2023",
    tags: ["Structural", "Dynamics", "Transportation"],
    // image: null,
    coverColor: "#2E2E1A",
    description: ` This report summarizes the Finite Element Analysis (FEA) of the primary and intermediate tubesheets for an Ammonia Unitized Chiller. The analysis was required because the specific configuration of the tubesheets is not directly covered by the ASME code, necessitating a detailed design check.`,
objective: `The objective of this project was to perform a thermo-structural analysis to verify that the design of the primary and intermediate tubesheets is safe and compliant with code requirements under various loading conditions.`,
  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  methodology: `The analysis was conducted using ANSYS software and involved a two-step thermo-structural process.

a. Thermal analysis was performed to determine the temperature distribution across the components during operation.

b. Structural analysis was conducted by applying pressures from ten different load cases including design, operating, and hydrotest scenarios—along with the temperatures from the thermal analysis.
    Stresses were evaluated at critical locations and compared against the allowable limits defined in ASME Section VIII, Div. 2, the materials we defined as per ASME Section II D.`,

  validation: `The analysis evaluated the stresses across the tubesheets, channels, and dished ends for all specified load cases. The results demonstrated that for every design, operating, and hydrotest condition, the calculated stresses remained within the acceptable stress ratios allowed by the ASME code. Additionally, a check for protection against local failure was performed and satisfied.`,

  conclusion: `The tubesheets were analyzed for both thermal and mechanical loads, and all induced stresses were found to be below the allowable limits set by ASME Section VIII Div. 2. Therefore, the design of the primary and intermediate tubesheets is confirmed to be safe and acceptable.`,
    skills: ["ANSYS SpaceClaim", "ANSYS"],
    images: [p8i1,p8i2],
  },
  {
    id: 9,
    image: p9Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "heat-exchanger-thermal",
    title: "Synloop Waste Heat Boiler",
    shortDesc: "Design Developmentof a Vertical Synloop Boiler",
    year: "2023",
    tags: ["CFD", "Thermal", "Heat Transfer"],
    // image: null,
    coverColor: "#1A1A3A",
    description: `The Synthesis Loop (Synloop) Boiler is a waste heat boiler located downstream of the ammonia converter in an ammonia synthesis loop. It is designed to operate under very high pressures and temperatures. The existing design is a vertical U-tube boiler with an integral steam drum, featuring a "U-tube fountain type layout". In this setup, the hot synthesis gas flows through the tubes, while steam is generated on the shell side.`,
objective: `The primary objective of this project was to develop a synloop boiler using a conventional U-tube layout to address and reduce the manufacturing difficulties and long production cycle times associated with the fountain U-tube configuration.`,
  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  methodology: `The project involved a comparative Finite Element Analysis (FEA) of the two designs. A 3D FEA model was created for the existing fountain-type layout. Similarly, 3D FEA models were developed for a new design featuring a conventional U-tube layout. This analysis was extended to evaluate several design improvements for the conventional layout, including the use of expanded ferrules, a dummy tube-sheet, and ferrules with refractory paper. An additional configuration with alternating hot and cold streams on the gas side was also analyzed to study its effect on thermal performance.`,

  validation: `The analysis showed that the proposed conventional U-tube layout was a superior alternative. The configuration identified as the most suitable combined a conventional 'U' tube layout with a ferrule using refractory paper and a dummy tube-sheet. This design maintained all stresses within allowable limits while offering significant advantages. Further analysis of a design that alternated hot and cold fluid streams demonstrated even lower tube-sheet temperatures compared to other configurations.`,

  conclusion: `The study concluded that the improved conventional U-tube design is a viable and advantageous replacement for the existing fountain-type layout and can be implemented for future projects.

The key benefits of the new design include:

a. Fabrication: The conventional design is easy to fabricate, whereas the fountain layout is difficult.

b. Thermal Performance: The new design results in a moderate to low tube-sheet temperature, compared to the high temperature in the fountain layout.

c. Size and Weight: The new design allows for a smaller shell diameter and has a lower overall weight compared to the fountain design.`,
    skills: ["Simulia Abaqus"],
    images: [p9i1,p9i2,p9i3,p9i4],
  },
  {
    id: 10,
    image: p10Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "pulsed-wave-emf",
    title: "2-DOF Modeling of Dental Implant Stability using RFA",
    shortDesc: "Developed a two-degree-of-freedom (2 DOF) mathematical model to estimate the resonance frequencies and micro-displacements of a dental implant, helping to validate the non-invasive electromagnetic RFA technique for assessing implant stability.",
    year: "2022",
    tags: ["Electromagnetics", "Design", "Medical"],
    // image: null,
    coverColor: "#1A3A3A",
    description: `The successful clinical outcome of a dental implant hinges on achieving and maintaining stability, which is a direct result of osseointegration—the fusion between the implant and the patient's jawbone. Monitoring this stability is critical, as insufficient primary stability can lead to micromotions at the bone-implant interface, jeopardizing the healing process and potentially causing implant failure. While several methods exist to assess stability, traditional techniques are often invasive or subjective. Resonance Frequency Analysis (RFA), specifically using non-invasive electromagnetic excitation, has emerged as a practical and accurate method. However, there was a need to develop a more comprehensive understanding of the electromagnetic RFA technique itself. This research addresses this gap by moving beyond previous single-degree-of-freedom models to develop a more sophisticated two-degree-of-freedom (2 DOF) model to better represent the complex motions of a dental implant system.`,

    objective: `The primary objective of this research was to develop a two-degree-of-freedom (2 DOF) mathematical model of a dental implant prosthetic to evaluate its micro-displacement when subjected to electromagnetic excitation. The specific aims were to utilize this model to estimate the implant's resonance frequencies and the corresponding micro-displacements for both translational and angular motion, thereby verifying the functionality and accuracy of the electromagnetic RFA technique.`,
  challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  approach: `Explain the strategy or solution direction taken.`,

  methodology: `The methodology was centered on creating and simulating a 2 DOF mathematical model based on vibration theory and electromagnetism principles.

Modeling: The dental implant assembly (implant, abutment, and SmartPeg) was modeled as a 2 DOF spring-mass-damper system, capable of both translational (vertical) and angular (rotational) motion. The stiffness and damping values for the model, which represent the bone-implant interface, were determined using Finite Element Analysis (FEA). FEA simulations yielded an axial stiffness (kaxial​) of 35.33×106 N/m and a lateral stiffness (klateral​) of 7.60×106 N/m. The damping ratio (ζ) was established as 0.25 based on values from existing literature.

Excitation Force: The model simulated a non-contact electromagnetic force acting on the system, represented as a harmonic force (Fe​sin(ωt)). Parameters for calculating this force were derived from previous studies on pulsed electromagnetic fields.

Simulation and Analysis: The two governing equations of motion for the system were solved using a custom code in MATLAB. The system was analyzed across an input frequency range of 5 kHz to 15 kHz, consistent with clinical RFA devices. The resulting time-domain displacement data for both angular and translational motion were converted to the frequency domain using the Fast Fourier Transform (FFT) algorithm in MATLAB. This allowed for the identification of the system's resonance frequencies.`,

  validation: `The simulation successfully produced distinct results for the two degrees of freedom, quantifying both the micro-displacements and the unique resonance frequencies for each type of motion.

Micro-Displacements: The maximum calculated micro-displacements were:

Angular Motion: 7.44×10−9 radians.

Translational Motion: 1.48×10−11 meters.

Resonance Frequencies: The FFT analysis identified the primary resonance frequency for each motion within the 5 to 15 kHz input range. The resonance frequency for angular motion occurred at 7028.29 Hz. The resonance frequency for translational motion occurred at 9247.75 Hz.

The fact that the angular resonance frequency was significantly lower than the translational one indicates that the implant is more susceptible to dislocating through angular motion, highlighting a critical potential failure mode. These calculated frequencies align well with values reported in numerous independent clinical and experimental studies, which typically range from 6,000 to 11,000 Hz.`,

  conclusion: `This study successfully established and implemented a 2-degree-of-freedom mathematical model to represent a dental implant system under electromagnetic RFA. This work serves as a crucial initial step in mathematically modeling the complex dynamics of dental implants, an area with a notable scarcity of research.

The key conclusions are:

a. The 2 DOF model accurately analyzes both angular and translational displacements, providing a more comprehensive view of implant stability than previous models.

b. The study confirms that the 5 to 15 kHz frequency range is effective for ascertaining dental implant resonance frequencies and their corresponding micro-displacements.

c. The model addresses the need for a non-invasive method capable of detecting subtle changes in implant stability, which is fundamental to determining the short- and long-term clinical success of implant treatments.`,
    skills: ["Autodesk Fusion 360", "Simulia Abaqus", "Matlab"],
    images: [p10i1,p10i2,p10i3,p10i4],
    //reserach paper link ? 
    paperUrl: "https://www.sciencedirect.com/science/article/pii/S2772671123002097",
  },
  {
    id: 11,
    image: p11Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "dental-implant-fea",
    title: "Biomechanical Analysis of Dental Implant Stability",
    shortDesc: "An investigation into dental implant stability, combining FEA, simulation, and physical experimentation to develop a predictive mathematical model.",
    year: "2022",
    tags: ["Biomechanics", "FEA", "Medical"],
    // image: null,
    coverColor: "#3A1A3A",
    description: `The success of a dental implant hinges on its stability during the healing process, known as osseointegration. This project aimed to create a reliable method for measuring this stability by establishing a direct mathematical relationship between Resonance Frequency Analysis (RFA) and the clinical Implant Stability Quotient (ISQ). The research provides the foundation for developing a future low-cost, handheld diagnostic device.`,

  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  methodology: `A multi-faceted engineering approach was used to analyze the biomechanics of the implant system:

Simulation: A MATLAB Simulink model of a spring-mass-damper system was developed to simulate the implant's vibratory dynamics and predict its resonance frequency.

CAD and FEA: 3D models of the implant, abutment, and a dual-density artificial bone block were created in Fusion 360. Modal analysis was then performed using Hypermesh to determine the natural frequencies and mode shapes of the assembly.

Experimentation: A physical test rig was constructed using piezoelectric transducers to excite a dental implant in an artificial bone block made of dental plaster, simulating the hardening of bone over time.`,
// meth has images
methodologyImages:[p11m1,p11m2,p11m3, p11m4, p11m5,p11m6, p11m7, p11m8,p11m9],
// methodology: `CAD and FEA: 3D models of the implant, abutment, and a dual-density artificial bone block were created in Fusion 360. Modal analysis was then performed using Hypermesh to determine the natural frequencies and mode shapes of the assembly.`,
// methodologyImages:[p11m3, p11m4, p11m5],
// methodology: `Experimentation: A physical test rig was constructed using piezoelectric transducers to excite a dental implant in an artificial bone block made of dental plaster, simulating the hardening of bone over time.`,
// methodologyImages: [p11m6, p11m7, p11m8,p11m9],  
validation: `The study successfully demonstrated a strong, direct linear relationship between the physically measured resonance frequency and the clinical ISQ value.

Statistical Validation: Linear regression analysis of the experimental data yielded an R-squared value of 97.2%, confirming the high accuracy of the correlation.

Predictive Equation: The project culminated in the development of a predictive mathematical equation to convert a measured resonance frequency into the clinically understood ISQ score:

ISQ = 0.0091 * (RF) + 16.468`,

  // conclusion: `Key takeaways, impact, what was learned.`,
    skills: ["Simulia Abaqus", "Autodesk Fusion 360", "Matlab"],
    images: [],
    //report file?
    reportUrl: "/reports/proj11-report.pdf",
  },
  {
    id: 12,
    image: p12Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "gear-assembly-cad",
    title: "FEA Validation of a Variable-Ratio Rack and Pinion Stee",
    shortDesc: "An end-to-end design project improving vehicle maneuverability through the development and FEA validation of a variable-ratio rack and pinion steering system.",
    year: "2022",
    tags: ["CAD", "Gear Design", "Machine Elements"],
    // image: null,
    coverColor: "#1A2A3A",
    description: `A steering system is a crucial component of any vehicle, responsible for converting the driver's rotational input at the steering wheel into the translational motion needed to change the vehicle's direction. This project focuses on the design of a rack and pinion system, which is a common type of steering mechanism that adheres to the Ackerman Steering principle for its operational efficiency.`,
objective: `Standard, single-ratio steering racks require a constant and often significant number of steering wheel turns to maneuver, which can be inefficient during sharp turns or parking. This project aimed to design and analyze a variable-ratio rack and pinion system to overcome this limitation. The design was based on a maximum input torque of 35 N-m (35,000 N-mm) and an average input speed of 12 rpm from the steering wheel.`,
  // challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  methodology: `The project followed a comprehensive engineering design and validation process:

Material Selection: Appropriate materials were chosen for the gears and shaft based on strength and wear resistance properties.

Analytical Design: Theoretical calculations were performed to determine the necessary parameters for the helical gearing based on standard machine design principles.

CAD Modeling: 3D models of all components—the helical pinion, the center variable-ratio rack, and the base rack—were created using Autodesk Fusion 360.

Finite Element Analysis (FEA): A suite of simulations was conducted in the Autodesk Fusion 360 Simulation Workspace to validate the analytical design and assess the system's performance under load.`,

material:`
Gears (Pinion and Rack): Grey Cast Iron (FG 260) was selected for its high compressive strength, resistance to deformation, and good wear characteristics.

Ultimate Tensile Strength (Sut​): 700 N/mm²

Yield Strength (Syt​): 420 N/mm²

Shaft (Pinion): Plain Carbon Steel (FE 620) was chosen for its high strength, ductility, and wear resistance.

Ultimate Tensile Strength (Sut​): 620 N/mm²

Yield Strength (Syt​): 380 N/mm²`,



calc : `
5.1 Analytical Gear Design

The helical gear parameters were calculated to withstand the specified loads. A factor of safety of 1.5 was used for the analytical calculations. Key calculations included:
Bending Stress (σb​): Calculated as 233.334 N/mm² based on the material's ultimate tensile strength.
Normal Module (mn​): Determined to be 2.5 mm after equating the bending strength (Sb​) with the effective load (Peff​).
Pitch Circle Diameter (dp​): Calculated as 52.573 mm.

5.2 CAD Modeling

3D models were created for the following components based on the analytical calculations:`,
calcImages:[p12d1],
  validation: `
A range of analyses were performed to verify the design's integrity. The results were then compared with the initial analytical calculations.

6.1 Analysis Types

Safety Factor Analysis: To determine if the component can withstand the applied loads.
Von Mises Stress Analysis: To predict if the material will yield or fracture.
Bending Stress Analysis: To verify the theoretical bending stress calculations.
Modal Analysis: To determine the vibrational characteristics and natural frequencies of the assembly.
Contact Pressure Analysis: To find the pressure generated at the point of contact between the gear teeth.

6.2 Results and Comparison

The FEA results closely aligned with the theoretical calculations, providing strong validation for the design. (Can be viewed from the report)
`,
validationImages: [p12v1,p12v2,p12v3,p12v4,p12v5,p12v6,p12v7],
  conclusion: `The design of the variable-ratio rack and pinion steering system was successfully completed and validated. The close agreement between the analytical results and the FEA simulations confirmed the accuracy of the design calculations. The final design demonstrated a satisfactory factor of safety, and all stresses were well within the material's allowable limits, proving the design is safe and robust for its intended application. The modal analysis also successfully determined the natural frequencies of the system.`,
    skills: ["Autodesk Fusion 360"],
    images: [],
    //report? 
    reportUrl: "/reports/proj12-report.pdf",
  },
  {
    id: 13,
    image: p13Cover,          // Card thumbnail
    // images: [p1Img1],   // Gallery in detail view
    slug: "worm-gear-design",
    title: "Design of a Two-Stage Gearbox for a Lifting Mechanism",
    shortDesc: "Helical and spur gearbox to achieve an 18:1 speed reduction for a 12 kW industrial lifting application.",
    year: "2022",
    tags: ["CAD", "Kinematics", "Machine Design"],
    // image: null,
    coverColor: "#2A3A1A",
    description: ` This project involved the complete design of a two-stage gearbox intended for a lifting mechanism application. The core objective was to design a robust transmission system capable of handling a specified power input while achieving a significant speed reduction.`,

    specs: ` The design was based on the following input parameters:

Power Input: 12 kW

Input Shaft Speed: 700 rpm

Total Reduction Ratio: 18:1

    To achieve this, a two-stage reduction system was designed. The first stage employs a helical gear pair with a 6:1 ratio, and the second stage uses a spur gear pair with a 3:1 ratio. The entire assembly is configured across three shafts.`,
  
specsImages: [p13spec1],
  design:`A systematic design approach was followed, encompassing all critical components of the gearbox:

Gear Design: Both the helical and spur gear pairs were designed based on material strength (Fe 770 and Fe 540 steel) and considerations for bending and wear failure. Key parameters such as module, number of teeth, and face width were calculated to ensure safe and reliable operation.

Shaft Design: The input, intermediate, and output shafts were designed using FE 620 steel. Diameters were calculated to safely transmit the required torque and withstand bending and shear stresses.

Component Selection: Appropriate bearings were selected for each shaft to support the calculated radial and axial loads for a target life of 15,000 hours. Keys were also specified for each shaft based on standard design practices.`,  

designImages: [p13d1, p13d2],
finalspec: `The project culminated in a complete set of design parameters for the gearbox:

Helical Gears (Stage 1):  Module: 5, Teeth: 18 (pinion), 108 (gear)
Spur Gears (Stage 2):      Module: 11, Teeth: 18 (pinion), 54 (gear)

Shaft Diameters

Shaft 1 (Input):                24 mm

Shaft 2 (Intermediate):    42 mm

Shaft 3 (Output):             56 mm

Selected Bearings:          6405, 6009, 6309, 6012`,
finalspecImages: [p13f1],
// challenge: `Describe the problem or limitation being addressed.\n\nAdd a second paragraph if needed.`,

  // approach: `Explain the strategy or solution direction taken.`,

  // methodology: `Step-by-step process, tools used, simulations run, etc.`,

  // validation: `Results, comparisons, metrics, what was verified.`,

  // conclusion: `Key takeaways, impact, what was learned.`,
    skills: ["Autodesk Fusion 360"],
    images: [],
    //report file
    reportUrl: `/reports/proj13-report.pdf`
  },
];
