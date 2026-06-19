import type { Dictionary } from "./types";

export const th: Dictionary = {
  nav: {
    links: {
      about: "เกี่ยวกับ",
      skills: "ความสามารถ",
      experience: "ประสบการณ์",
      projects: "ผลงาน",
      contact: "ติดต่อ",
    },
    status: "พร้อมเริ่มงาน",
  },
  hero: {
    nameLine1: "สุวภิชญ์",
    nameLine2: "พลกูล",
    role: "Junior Developer",
    bio: "นักศึกษาวิทยาการคอมพิวเตอร์ปี 4 ที่มีประสบการณ์ทำงาน IT จริง และชอบแปลงโค้ดให้เป็นเว็บแอปพลิเคชันที่ใช้งานได้จริง",
    ctaProjects: "ดูผลงาน",
    ctaContact: "ติดต่อ",
    scroll: "เลื่อนลง",
  },
  about: {
    label: "เกี่ยวกับ",
    headingLine1: "นักพัฒนาที่สร้างสิ่งที่",
    headingLine2: "ใช้งานได้จริง",
    paragraphs: [
      "ผมเริ่มต้นจากงาน IT สนับสนุนการทำงานประจำวันของโรงพยาบาลส่งเสริมสุขภาพตำบล - ดูแลระบบข้อมูลผู้ป่วย ฐานข้อมูล MySQL และเซิร์ฟเวอร์ FreeBSD ประสบการณ์ระดับปฏิบัติงานนี้สอนให้ผมสร้างสิ่งที่ใช้งานได้จริงแม้ในสถานการณ์ที่มีแรงกดดัน",
      "ระหว่างทำงาน ผมศึกษาการพัฒนาเว็บเพิ่มเติม เริ่มจาก PHP ตามด้วย JavaScript จนถึง React และ Next.js ในปัจจุบัน โปรเจกต์จบการศึกษาของผม GaragePlus เป็น PWA เต็มรูปแบบที่ใช้ Firebase และ real-time sync ส่วนระบบ Queue Management ที่ผมสร้างก็ใช้งานจริงอยู่ในโรงพยาบาล",
      "ผมยังเรียนและเรียนรู้อยู่เสมอ - แต่ผลงานทุกชิ้นเป็นของจริง โค้ดถูกใช้งานจริง และผมพร้อมเติบโตในฐานะ junior developer ในทีมที่สร้างสิ่งที่มีความหมาย",
    ],
    facts: [
      { label: "ตำแหน่งปัจจุบัน", value: "IT Officer, โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านต้นเปา" },
      {
        label: "การศึกษา",
        value: "2565-ปัจจุบัน\nวท.บ. วิทยาการคอมพิวเตอร์\nมหาวิทยาลัยราชภัฏ\nGPA 3.22 | ภาคพิเศษ (เสาร์-อาทิตย์)",
      },
      { label: "สาย", value: "Junior Web Developer" },
      { label: "ที่อยู่", value: "เชียงใหม่, ประเทศไทย" },
    ],
  },
  skills: {
    label: "ความสามารถ",
    heading: "เครื่องมือที่ผมใช้",
    categories: { frontend: "Frontend", backend: "Backend", tools: "Tools" },
  },
  experience: {
    label: "ประสบการณ์",
    heading: "ที่ที่ผมเคยทำงาน",
    items: [
      {
        id: "hospital-it",
        role: "IT Officer",
        company: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านต้นเปา",
        period: "2564 - ปัจจุบัน",
        description:
          "ดูแลและสนับสนุนระบบ IT ของโรงพยาบาล รวมถึงระบบข้อมูลผู้ป่วย JHCIS เซิร์ฟเวอร์ และเครือข่าย",
        highlights: [
          "ดูแลระบบ JHCIS และฐานข้อมูล MySQL สำหรับเวชระเบียนผู้ป่วย",
          "บริหารจัดการเซิร์ฟเวอร์บน FreeBSD",
          "สนับสนุนงาน IT ประจำวันให้เจ้าหน้าที่ฝ่ายคลินิก",
          "พัฒนาระบบ Queue Management ภายในด้วย Next.js และ Prisma",
        ],
      },
    ],
  },
  projects: {
    label: "ผลงาน",
    heading: "สิ่งที่ผมสร้างขึ้น",
    live: "เว็บไซต์",
    github: "GitHub",
    items: [
      {
        id: "queue-system",
        title: "Queue Management System",
        description:
          "ระบบจัดการคิวผู้ป่วยสำหรับโรงพยาบาลส่งเสริมสุขภาพตำบล รองรับการลงทะเบียน OPD เรียกคิวหลายห้อง (แพทย์/พยาบาล) การส่งต่อคิว และจอแสดงผลคิวแบบ real-time",
        tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
        github: "https://github.com/Magub-zwp/Queue-System",
        featured: true,
      },
      {
        id: "garage-plus",
        title: "GaragePlus",
        description:
          "PWA สำหรับจัดการอู่ซ่อมรถ พัฒนาเป็นโปรเจกต์จบการศึกษา จัดการใบสั่งงาน ข้อมูลลูกค้า และขั้นตอนการทำงานของช่าง พร้อม real-time sync ผ่าน Firebase",
        tags: ["Next.js", "JavaScript", "Firebase", "Firestore", "Tailwind CSS"],
        github: "https://github.com/Magub-zwp/garage-plus",
        featured: true,
      },
      {
        id: "firstproject",
        title: "Task Management System",
        description:
          "โปรเจกต์เต็มรูปแบบโปรเจกต์แรกที่สร้างตอนปี 2 — ระบบจัดการงาน/ภาระงาน ด้วย backend แบบ PHP กำลังอยู่ระหว่างการ deploy",
        tags: ["PHP", "MySQL", "HTML", "CSS"],
        url: "https://tasklist.infinityfree.me/index.php",
        github: "https://github.com/Magub-zwp/firstproject",
        featured: false,
      },
      {
        id: "jorddeepeekhum",
        title: "Jorddeepeekhum Parking App",
        description:
          "แอปจอดรถบนมือถือที่พัฒนาด้วย Flutter เป็นโปรเจกต์ย่อยในวิชาเรียน รองรับการจองที่จอดรถและติดตามสถานะ",
        tags: ["Flutter", "Dart"],
        github: "https://github.com/Magub-zwp/Jorddeepeekhum_app",
        featured: false,
      },
    ],
  },
  contact: {
    label: "ติดต่อ",
    heading: "ทักทายกันได้เลย",
    blurb: "เปิดรับตำแหน่ง Junior Developer และงานฟรีแลนซ์ ติดต่อมาได้เลยครับ",
    namePlaceholder: "ชื่อ",
    emailPlaceholder: "อีเมล",
    messagePlaceholder: "ข้อความ",
    sendingText: "กำลังส่ง...",
    sendText: "ส่ง",
    errorText: "เกิดข้อผิดพลาด ลองใหม่อีกครั้ง",
    sentText: "ส่งข้อความแล้ว",
  },
  footer: {
    builtWith: "สร้างด้วย Next.js และ Tailwind CSS",
  },
};
