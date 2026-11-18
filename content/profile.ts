// Single source of truth for the portfolio (app/page.tsx) and the CV (app/cv/page.tsx).
// Public site: never add a phone number or private documents here.

export const profile = {
  name: "Thias B. Kochen",
  title: "Interaction Designer & Developer — Digital Design & Interactive Technologies",
  email: "thiaswork@gmail.com",
  location: "Albertslund, Denmark",
  links: {
    github: "https://github.com/Thias-BKH",
  },
  summary:
    "MSc Medialogy student at Aalborg University Copenhagen with a BSc in Digital Design & Interactive Technologies from ITU. I work with interactive systems, physical computing and user-centred technology development — from embedded prototypes to immersive, sensor-driven installations.",

  education: [
    {
      degree: "MSc Medialogy",
      school: "Aalborg University Copenhagen",
      period: "2026–present",
      details: [] as string[],
    },
    {
      degree: "BSc Digital Design & Interactive Technologies (DDIT)",
      school: "IT University of Copenhagen",
      period: "2023–2026",
      details: [
        "Programming (C++, JavaScript, Python), Physical Computing, Database & Information Systems",
        "Digital Data Analysis, Interaction Design, Co-design, Qualitative & Quantitative Research Methods",
      ],
    },
    {
      degree: "HTX — Communication & IT",
      school: "Københavns Medie Gymnasium",
      period: "2019–2022",
      details: ["Communication & IT (A), Digital Design & Development (A), Technology, Product Development"],
    },
  ],

  experience: [
    {
      role: "Digital Designer",
      org: "",
      period: "",
      description:
        "Digital design and rebranding across platforms: modular design systems and interactive assets in Figma and Adobe. Collaborated with strategists and developers to turn concepts into structured, implementable solutions with a focus on user experience and system coherence.",
    },
  ],

  skills: {
    Programming: ["C++", "C#", "Swift", "Python", "JavaScript", "HTML/CSS"],
    "Interactive & Real-time": ["Unity (URP, Timeline)", "Wwise", "Azure Kinect"],
    "Embedded Systems": ["Arduino", "ESP32", "Sensor integration", "Actuator feedback"],
    "Interaction Design": ["Prototyping", "User testing", "Co-design"],
    Tools: ["Figma", "Adobe Creative Suite", "Blender", "Git"],
  },

  languages: ["Danish — Fluent", "English — Fluent"],

  projects: [
    {
      title: "Rådhuspladsen Through Time",
      role: "Team project (7), MSc Medialogy — NPCs, audio, flags, environment",
      year: "2026",
      description:
        "Immersive installation showing Copenhagen's City Hall Square across history. An Azure Kinect tracks the visitor's head and an off-axis projection turns the screen into a window. I built the 1645 street life: root-motion NPC walkers, Wwise footstep and ambience audio, GPU-waving flags, atmosphere and modelled props.",
      tags: ["UNITY", "C#", "WWISE", "KINECT"],
      color: "cyan",
      href: "https://github.com/Bob-Ross-Codes/P707---Main-Project",
    },
    {
      title: "eyeRest",
      role: "Solo project",
      year: "2026",
      description:
        "macOS menu-bar app for the 20-20-20 eye-strain rule. On-device Vision face pose counts only the time you actually look at the screen (nothing recorded), then shows a full-screen break overlay.",
      tags: ["SWIFT", "SWIFTUI", "VISION", "MACOS"],
      color: "fuchsia",
      href: "",
    },
    {
      title: "Sixth Sense Belt",
      role: "Physical computing prototype, AIR Lab, ITU",
      year: "",
      description:
        "Wearable that translates ultrasonic sensor input into spatial haptic and auditory feedback. Featured on the ITU AIR Lab website.",
      tags: ["C++", "ARDUINO", "HAPTICS"],
      color: "purple",
      href: "",
    },
    {
      title: "Smart Waste System",
      role: "IoT prototype, ITU",
      year: "",
      description:
        "Interactive waste-sorting bin with sensing and embedded logic, and a proposed network of bins reporting fill levels over MQTT to optimise collection routes.",
      tags: ["ESP32", "MQTT", "IOT"],
      color: "yellow",
      href: "",
    },
  ],
} as const;
