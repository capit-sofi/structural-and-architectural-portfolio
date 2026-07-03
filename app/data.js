
 
 const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
export default navLinks;

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "ETABS",
      "SAFE",
      "Tekla structure",
      "SAP2000",
      "navisworks,infraworks",
      "CSIBRIDGE,CIVIL3D",
      "REVIT,AUTOCAD,Skechup",
      "RHINO-3D",
      "ENSCAP,D5,LUMION,UNREALENGINE",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Bachelor's Degree in CIVIL ENGINEERING",
      "STRUCTURAL AND ARCHITECTURALDESIGHN",
      "BIM SPECIALIST",
      "Quantity Surveyor (QS), "
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "STRUCTURAL-DESIGHN",
      "CIVIL-ENGINEERING",
      "BIM SPECIALIST AND DRAFTING",
    ],
  },
];
export const services = [
  {
    id: 1,
    title: "Structural AND BIM Design",
    description:
      "Planning, analyzing, and detailing the framework that supports a building or structure (concrete, steel, timber) to ensure it is safe, stable, and durable under all expected loads and conditions.",
    icon: "/structural.png",   // ✅ use path instead of import
  },
  {
    id: 2,
    title: "Architectural Design",
    description:
      "Creating functional and aesthetic building layouts with consideration of user needs, lighting, ventilation, and materials.",
    icon: "/arch.png",         // ✅ path string
  },
  
  {
    id: 3,
    title: "Quantity Surveying",
    description:
      "Preparing cost estimates, BOQs, and managing financial control throughout construction to ensure value for money.",
    icon: "/quantity.png",
  },
];
export const PROJECTS_DATA = [
   {
    id: 1,
    title: "G+2 Residential House",
    description:
      "This project is a G+2  residential house designed in Revit and rendered in Enscape, covering an area of approximately 190 m². The design focuses on modern living requirements, functional spaces, and aesthetic appeal, ensuring comfort, convenience, and efficient use of the plot.",
    image: "/view-7.png",
    tag: ["All", "Architectural"],
    gitUrl: "/",
    previewUrl: "/",
  },
   {
    id: 2,
    title: "INTERIOR DESIGN",
    description:
      "This interior design project focuses on creating functional, comfortable, and visually appealing spaces that reflect the client's lifestyle and project requirements. The design balances aesthetics, space planning, lighting, materials, colors, and furniture selection to achieve a modern and practical environment.",
    image: "/INTERIOR.png",
    tag: ["All", "Architectural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "B+G+5",
    description:
      "This project involved the complete structural analysis and design of a Basement + Ground + 5-Storey (B+G+5) reinforced concrete building located in Welliso, Ethiopia. The structural system was designed in accordance with applicable design standards to ensure safety, stability, serviceability, and cost-effective construction.",
    image: "/B+G+5-STR.png",
    tag: ["All", "Structural"],
    gitUrl: "/",
    previewUrl: "/",
  },
   {
    id: 4,
    title: "G+2 Residential House",
    description:
      "This project involved the 3D structural modeling and detailing of a Ground + 2 Storey (G+2) reinforced concrete residential building using Autodesk Revit. The objective was to develop an accurate BIM model that supports efficient coordination, visualization, and construction documentation.",
    image: "/revitstr.png",
    tag: ["All", "Structural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Steel Warehouse Design",
    description:
      "This project involved the 3D modeling and structural detailing of a steel warehouse using Tekla Structures. The model was developed to provide an accurate and constructible BIM representation of the steel structure, supporting fabrication, coordination, and on-site erection.",
    image: "/tekla-2.png",
    tag: ["All", "Structural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "G+1",
    description:
      "This project is a G+1 (Ground plus One) residential house designed in Revit and rendered in Enscape, covering an area of approximately 400 m². The design focuses on modern living requirements, functional spaces, and aesthetic appeal, ensuring comfort, convenience, and efficient use of the plot.",
    image: "/revit-enscap.png",
    tag: ["All", "Architectural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "G+1",
    description:
      "This project is a G+1 residential house designed in Archicad and rendered in Enscape. The house is thoughtfully planned to provide comfort, functionality, and modern aesthetics across its spaces. It features a master bedroom with an attached shower and toilet, a secondary bedroom, and shared sanitary facilities and office.",
    image: "/archicad.png",
    tag: ["All", "Architectural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: " G+1",
    description:
      "This project is a G+1 residential house designed in Revit and rendered in Twinmotion, combining modern aesthetics with functional living spaces. The house features a master bedroom, additional bedrooms, a shower and toilet, and a dedicated office, providing comfortable and efficient accommodation for a family.",
    image: "/hose.jpg",
    tag: ["All", "Architectural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "2B+G+14",
    description:
      "This project involves the structural analysis and design of a 2B+G+14 multi-story building using ETABS for the superstructure and SAFE for the foundation system. The building consists of two basement levels, a ground floor, and 14 upper floors, designed to accommodate residential and/or commercial use and the detail drawing prepared in autocad.",
    image: "/2B+G+14.png",
    tag: ["All", "Structural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "3B+G+17",
    description:
      "This project involves the analysis and structural design of a 3B+G+17 building using ETABS for modeling, analysis, and design, with detailed reinforcement and load considerations performed according to relevant standards. The design ensures that all structural elements—including columns, beams, slabs, shear walls, and foundations—are optimized for safety, stability, and serviceability under various loads such as gravity, wind, and seismic forces.",
    image: "/3B+G+17.png",
    tag: ["All", "Structural"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "complex G+22",
    description:
      "This project involves the structural modeling of a complex G+22 (Ground plus 22 floors) building, executed using ETABS for superstructure modeling and SAFE for foundation and slab design. The building is designed to safely accommodate a mix of residential, commercial, or office functions, with emphasis on structural stability, efficiency, and compliance with applicable codes and standards.",
    image: "/G+22.png",
    tag: ["All", "Structural"],
    gitUrl: "/",
    previewUrl: "/",
  },
];