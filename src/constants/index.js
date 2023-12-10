import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  castle1,
  phonedoc1,
  phonedoc2,
  chatbot1,
  podologie1,
  codewars,
  blackjack1,
  kl1,
  kl2,
  blocky2,
  blocky3,
  blocky1,
  kl3,
  layoutbuilder1,
  layoutbuilder2,
  layoutbuilder3,
  csharp,
  svelte,
  sql,
  python,
  java,
  nextjs,
  westnetz,
  ebootis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Über mich",
  },
  {
    id: "projects",
    title: "Projekte",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "svelte",
    icon: svelte,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Elektroniker für Betriebstechnik (Ausbildung)",
    company_name: "Westnetz GmbH",
    icon: westnetz,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Juli 2021",
    points: [
      "Verdrahten der Steuer- und Hauptstromkreis im Schaltschrank von Schützschaltungen mit Selbsthaltung, Folgeschaltungen",
      "Verdrahtung eines Wohnzimmers mit Ausschaltung, Wechselschaltung, Kreuzschaltung",
      "im Bereich Vernetzung: Errichtung von CAT-Kabeln und die Einrichtung von Router, Repeater und Switch",
      "Werkstoffbearbeitung",
    ],
  },
  {
    title: "Fullstack Entwickler (Ausbildung)",
    company_name: "e.bootis",
    icon: ebootis,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Jetzt",
    points: [
      "Implementierung von Kartenspielen (BestOfTen, MauMau, Blackjack, Quartett) als Konsolenanwendung in Java, unter Anwendung von objektorientierter Programmierung",
      "Entwicklung eines Kassen- und Lagersystems als Anwendung in Windows Forms mit C#, wobei SQLite als Datenbank verwendet wurde",
      "Einführung in die ERP-Anwendung (Java, C#, Windows Forms, SQL) und aktive Bearbeitung von Tickets",
      "Integration von Komponenten in den neuen ERP-Webclient mithilfe von HTML, CSS und Svelte",
      "Betreuung von Praktikanten, einschließlich der Erstellung von Praktikantenaufgaben und der Durchführung von Code-Kontrollen",
    ],
  },
];

const projects = [
  {
    id: 0,
    name: "Blocky Slider",
    description:
      "schnelles Retro-Runner Spiel in Cyberpunk-Optik, erstellt mit Unity und C#, bei denen die Reflexe der Spieler getestet und verbessert werden.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "game-dev",
        color: "pink-text-gradient",
      },
      {
        name: "unity",
        color: "blue-text-gradient",
      },
    ],
    image: blocky1,
    source_code_link:
      "https://play.google.com/store/apps/details?id=io.KenToky.BlockySlider&hl=de&gl=US",
  },
  {
    id: 1,
    name: "Castle Defense",
    description:
      "Spiel, in dem man sich gegen eine Armee von Strichmännchen verteidigen muss. Mit jedem Anstieg der Wellen wird es immer herausfordernder.",
    tags: [
      {
        name: "browsergame",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "game-dev",
        color: "pink-text-gradient",
      },
      {
        name: "unity",
        color: "blue-text-gradient",
      },
    ],
    release: "28. Juni 2022",
    image: castle1,
    source_code_link: "https://kentokyo.itch.io/castledefense",
  },
  {
    id: 2,
    name: "Phone-Doc Zobair",
    description:
      "Webseite, um Kunden bei der Reparatur ihrer Mobiltelefone zu unterstützen. Benutzer können schnell und einfach ihre Reparaturanfragen einreichen.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "web-design",
        color: "pink-text-gradient",
      },
      {
        name: "form",
        color: "blue-text-gradient",
      },
    ],
    image: phonedoc1,
    source_code_link: "https://phonedoc-zobair.de/",
  },
  {
    id: 3,
    name: "Podologiepraxis",
    description:
      "Website, entwickelt mit dem Svelte-Framework, bietet eine moderne und optimierte Benutzererfahrung für Patienten. Die Website präsentiert umfassende Informationen über die Podologiepraxis, ihre Dienstleistungen, das Team und die Kontaktmöglichkeiten.",
    tags: [
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "seo",
        color: "green-text-gradient",
      },
      {
        name: "web-design",
        color: "pink-text-gradient",
      },
    ],
    image: podologie1,
    source_code_link: "https://podologiepraxis-sassnitz.de/",
  },
  {
    id: 4,
    name: "Ken's AI-Chatbot",
    description:
      "KI-Chatbot, der mit React, NextJS, Vercel AI SDK und mithilfe der OpenAI-API erstellt wurde. Stellen Sie dem Chatbot Fragen, diskutieren Sie verschiedene Themen und entdecken Sie die Möglichkeiten der künstlichen Intelligenz.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "chatgpt-clone",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
    ],
    image: chatbot1,
    source_code_link: "https://kens-aichat.netlify.app/",
  },
  {
    id: 5,
    name: "Codewars (1252 Punkte)",
    description:
      "Breite Palette von Aufgaben erfolgreich bewältigt, ganz ohne Unterstützung künstlicher Intelligenz. " +
      "Herausforderungen im Bereich Algorithmen, Mathematik, reguläre Ausdrücke, Rätsel, Arrays und Maps in verschiedenen Programmiersprachen gemeistert, vorwiegend in Java und C#.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: codewars,
    source_code_link: "https://www.codewars.com/users/KenToky",
  },
  {
    id: 6,
    name: "Kartenspiele",
    description:
      "Blackjack, BestOfTen, MauMau, Quartett in Java entwickelt, um Konzepte der Objektorientierung zu verstehen. Für Mehrspielerinteraktion ausgelegt. Fehleingaben werden abgefangen.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "objektorientierung",
        color: "green-text-gradient",
      },
      {
        name: "factory-pattern",
        color: "pink-text-gradient",
      },
      {
        name: "interface",
        color: "blue-text-gradient",
      },
    ],
    image: blackjack1,
  },
  {
    id: 7,
    name: "Kassen- und Lagersystem",
    description:
      "GUI-Anwendung geschrieben in C# und Oberfläche mit Windows Forms gestaltet. " +
      "Persistenz mithilfe von SQLite gewährleistet. " +
      "Bietet eine vielzahl an Funktionen, die zum Verkauf und Kauf nötig sind.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "windows forms",
        color: "green-text-gradient",
      },
      {
        name: "gui-anwendung",
        color: "pink-text-gradient",
      },
      {
        name: "schichtenarchitektur",
        color: "blue-text-gradient",
      },
    ],
    image: kl1,
  },
  {
    id: 8,
    name: "Form-/Layout-Builder",
    description:
      "Erstellung von einfachen und komplexen Layouts mithilfe einer Drag&Drop-Anwendung als Erweiterung zu einer Webanwendung realisiert.",
    tags: [
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "reaktiv",
        color: "green-text-gradient",
      },
      {
        name: "rekursion",
        color: "pink-text-gradient",
      },
      {
        name: "abschlussprojekt",
        color: "blue-text-gradient",
      },
    ],
    image: layoutbuilder1,
  },
];

const modals = [
  {
    id: 0,
    name: "Blocky Slider",
    undertitle:
      "🔸 Erstellt mit der Unity Engine und programmiert in C# \n " +
      "🔸 Schnelles und unterhaltsames Retro-Runner-Spiel im Cyberpunk-Stil \n  " +
      "🔸 Benutzung von APIs wie IronSource und Google AdMob \n" +
      "🔸 Erhältlich für Android-Geräte im Play Store\n\n",
    description:
      "🟥 Features und Funktionen 🟥\n" +
      "◻️ Tägliche Belohnungen\n" +
      "◻️ Skill-System mit Upgrades\n" +
      "◻️ Level-System mit vielen Belohnungen\n" +
      "◻️ Anpassungsmöglichkeiten zum Map-Design\n" +
      "◻️ Music mit Shuffle-Funktion\n" +
      "◻️ Rangliste\n" +
      "◻️ Verschiedene auswählbare Farben\n" +
      "◻️ Aussehen-Veränderungsshop\n",
    release: "26. October 2020",
    image1: blocky2,
    image2: blocky3,
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Game Design",
        color: "pink-text-gradient",
      },
    ],
    weblink: "https://blockyslider.netlify.app/#features",
    playlink:
      "https://play.google.com/store/apps/details?id=io.KenToky.BlockySlider&hl=de&gl=US",
  },
  {
    id: 7,
    name: "Kassen- und Lagersystem",
    undertitle:
      "🔸 Erstellt mit C# und Windows Forms\n " +
      "🔸 Persisenz mithilfe von SQLite\n" +
      "🔸 Vier-Schichten-Architektur (Model-, Client-, Service-, Datenschicht) \n  " +
      "🔸 Benutzung von LiveCharts zur Erstellung von Diagrammen\n",

    description:
      "🟥 Funktionen und Features 🟥\n" +
      "◻️ Login-System mit verschiedenen Benutzergruppen (Admin, Verkäufer usw.)\n" +
      "◻️ Dashboard mit umfassende Analysen der Verkaufszahlen als Diagrammen und Statistiken.\n" +
      "◻️ Changelogs, die es ermöglichen, Änderungen jeglicher Art von verschiedenen Benutzern einzusehen.\n" +
      "◻️ Ein Verkaufsbereich, in dem Benutzer Warenkörbe erstellen können, bezahlten Betrag eingeben und Rückgeldbetrag berechnen. Rabattmöglichkeiten vorhanden.\n" +
      "◻️ Ein Rechnungsbereich, in dem Benutzer Rechnungen erstellen und ausdrucken können. Retournierung ebenfalls möglich.\n" +
      "◻️ Eine Artikelliste und Lagerbestand, in der Benutzer Produkte hinzufügen oder bearbeiten können.\n" +
      "◻️ Anwendung erkennt Fehleingaben des Benutzers und gibt entsprechende Meldungen aus.\n" +
      "◻️ Admin-Bereich zum Anlegen neue Benutzer oder Bearbeitung vorhandener Benutzer.\n",
    release: "12. September 2022",
    image1: kl2,
    image2: kl3,
    tags: [
      {
        name: "Windows Forms",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 8,
    name: "Form-/Layout-Builder",
    undertitle:
      "🔸 Erstellt mit Typescript und Svelte als Framework\n " +
      "🔸 Benutzerfreundliche Erstellung von Anwendungslayouts ohne Programmierkenntnisse ermöglicht \n" +
      "🔸 Erstelltes Layout ist speicherbar und wird beim Laden einer Anwendung wiederhergestellt \n  " +
      "🔸 Erstelltes Layout bleibt weiterhin editierbar und ist responiv (an verschiedenen Bildschirmgrößen verwendbar)\n",
    description:
      "🟥 Layout-Gestaltung und Logik 🟥 \n" +
      "◻️ In der Draggable-Sidebar (linke Seitenleiste) werden alle verfügbaren UI-Elemente aufgelistet (Container und verschiedene Komponenten wie Textboxen, Dropdowns, Datumsfelder usw.)\n" +
      "◻️ Komponenten können mithilfe einer Drag&Drop-Funktionalität in Container platziert werden und Container können sowohl in anderen Containern als auch in der Arbeitsfläche platizert werden\n" +
      "◻️ Eine Liste der bereits verwendeten Komponenten wird angezeigt und verhindert, dass diese erneut platziert werden können.\n" +
      "◻️ UI-Elemente (Komponente oder Container) innerhalb eines Containers sind austauschbar\n" +
      "◻️ Eine bereits platzierte Komponente kann in einen anderen Container gezogen und abgelegt werden.\n" +
      "◻️ UI-Elemente sind anklickbar und ihre Eigenschaften werden in der Property-Sidebar (rechte Seitenleiste) rechts angezeigt und können bei Bedarf geändert werden\n" +
      "◻️ Löschen von UI-Elementen ist möglich\n" +
      "◻️ Bei Containern kann die Ausrichtung der Elemente (horizontal oder vertikal) geändert werden.\n" +
      "◻️ Der LayoutBuilder ermöglicht eine Vorschau der Anwendung vor der Speicherung.\n",
    release: "02. November 2023",
    image1: layoutbuilder2,
    image2: layoutbuilder3,
    tags: [
      {
        name: "Windows Forms",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, technologies, experiences, projects, modals };
