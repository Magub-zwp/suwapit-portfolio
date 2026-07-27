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
    nameLine1: "สุวพิชญ์",
    nameLine2: "พลกุล",
    role: "Junior Developer",
    bio: "เริ่มจากไอทีซัพพอร์ตของโรงพยาบาล ค้นพบสิ่งที่ชอบ — สู่นักศึกษาวิทยาการคอมพิวเตอร์ ปี4 ที่สนุกกับการพัฒนาเว็บและแอปพลิเคชัน และอยากเติบโตเป็นนักพัฒนาที่มีคุณค่าต่อทีมงาน",
    ctaProjects: "ดูผลงาน",
    ctaContact: "ติดต่อ",
    ctaDownloadCV: "ดาวน์โหลด CV",
    scroll: "เลื่อนลง",
  },
  about: {
    label: "เกี่ยวกับ",
    headingLine1: "ต้นไม้จะงอกงาม",
    headingLine2: "เมื่อได้อยู่ในกระถางที่เหมาะกับมัน",
    paragraphs: [
      "ผมเริ่มต้นจากงาน ฝ่ายสนับสนุนด้านไอที(ไอทีซัพพอร์ต)ทำงานประจำวันของโรงพยาบาลส่งเสริมสุขภาพตำบล - ดูแลระบบข้อมูลผู้ป่วย ฐานข้อมูล MySQL และเซิร์ฟเวอร์ Linux จากประสบการณ์การทำงานนี้สอนให้ผมแก้ปัญหาเฉพาะหน้าและสามารถทำงานภายใต้แรงกดดันได้ดี",
      "ระหว่างทำงาน ผมศึกษาการพัฒนาเว็บเพิ่มเติม เริ่มจาก PHP ตามด้วย JavaScript จนถึง React และ Next.js ในปัจจุบัน โปรเจกต์จบการศึกษาของผม GaragePlus เป็น PWA เต็มรูปแบบที่ใช้ Firebase และ real-time sync ส่วนระบบ Queue Management ที่ผมสร้างก็ใช้งานจริงอยู่ในโรงพยาบาล",
      "ปัจจุบันผมศึกษาอยู่ชั้นปีที่4(คาดว่าจะจบในปี 2570) และผมพร้อมเติบโตในฐานะ junior developer ที่ช่วยเสริมความแข็งแกร่งให้กับทีม",
    ],
    facts: [
      { label: "ตำแหน่งปัจจุบัน", value: "IT Officer, โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านต้นเปา" },
      {
        label: "การศึกษา",
        value: "2565-ปัจจุบัน\nวท.บ. วิทยาการคอมพิวเตอร์\nมหาวิทยาลัยราชภัฏเชียงใหม่\nGPA 3.22 | ภาคพิเศษ (เสาร์-อาทิตย์)\n (คาดว่าจะจบในปี 2570)",
      },
      { label: "สาย", value: "Junior Developer" },
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
          "บริหารจัดการดูแลเซิร์ฟเวอร์ Linux ",
          "สนับสนุนงาน IT ประจำวันให้เจ้าหน้าที่",
          "พัฒนาระบบจัดการคิวเข้ารับบริการ ด้วย Next.js และ Prisma",
        ],
      },
    ],
  },
  projects: {
    label: "ผลงาน",
    heading: "สิ่งที่ผมพัฒนาขึ้น",
    live: "เว็บไซต์",
    github: "GitHub",
    seeMore: "ดูผลงานเพิ่มเติม",
    seeLess: "ย่อกลับ",
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
          "PWA สำหรับการจองคิวและให้บริการอู่ซ่อมรถ พัฒนาเป็นโปรเจกต์จบการศึกษา การจองคิวของลูกค้า และขั้นตอนการทำงานของช่าง แจ้งเตือนลูกค้าด้วยline Notify พร้อม real-time sync ผ่าน Firebase",
        tags: ["Next.js", "JavaScript", "Firebase", "Firestore", "Tailwind CSS"],
        url: "https://garageplus.shop",
        github: "https://github.com/Magub-zwp/garage-plus",
        featured: true,
      },
      {
        id: "zwpweb-trainai",
        title: "ZWP Train AI",
        description:
          "เว็บแอป full-stack ที่พัฒนาระหว่างอบรม AI Vibe Coding ของมหาวิทยาลัย — สาธิตการสั่งงาน AI อย่างมีประสิทธิภาพด้วยการออกแบบโครงสร้างข้อมูลที่มีคุณภาพทั้งฝั่ง backend และ frontend ทดลองเข้าสู่ระบบ — admin / admin123",
        tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
        github: "https://github.com/Magub-zwp/zwpweb-trainai",
        featured: true,
      },
      {
        id: "medical-equipment-borrowing",
        title: "Medical Equipment Borrowing (MEBS)",
        description:
          "ระบบยืม-คืนและจัดการคลังอุปกรณ์การแพทย์ พัฒนาด้วยตัวเองจากความรู้ที่ได้จากการอบรม AI Vibe Coding และนำไปใช้งานจริงที่โรงพยาบาล มี dashboard ผู้ดูแล ระบบสัญญายืมพร้อมลายเซ็นดิจิทัลและ export PDF ระบบสแกนคืนอุปกรณ์ และจัดการคลัง (CRUD) ทดลองเข้าสู่ระบบ — admin / admin123",
        tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Better Auth"],
        url: "https://borrow-mocha.vercel.app",
        github: "https://github.com/Magub-zwp/Medical-Equipment-Borrowing",
        featured: true,
      },
      {
        id: "firstproject",
        title: "Task Management System",
        description:
          "โปรเจกต์เต็มรูปแบบโปรเจกต์แรกที่สร้างตอนปี 2 — ระบบจัดการงาน/ภาระงาน ด้วย backend แบบ PHP ",
        tags: ["PHP", "MySQL", "HTML", "CSS"],
        url: "https://tasklist.infinityfree.me/index.php",
        github: "https://github.com/Magub-zwp/firstproject",
        featured: false,
      },
      {
        id: "jorddeepeekhum",
        title: "Jorddeepeekhum Parking App",
        description:
          "แอปจองที่จอดรถบนมือถือที่พัฒนาด้วย Flutter เป็นโปรเจกต์ย่อยในวิชาเรียน รองรับการจองที่จอดรถและติดตามสถานะ",
        tags: ["Flutter", "Dart"],
        github: "https://github.com/Magub-zwp/Jorddeepeekhum_app",
        featured: false,
      },
    ],
  },
  contact: {
    label: "ติดต่อ",
    heading: "ช่องทางการติดต่อ",
    blurb: "ตอนนี้ผมกำลังมองหาโอกาสใหม่ๆ ในการทำงาน หากสนใจร่วมงานกัน มีคำถาม หรือมีโปรเจกต์ที่น่าสนใจ สามารถติดต่อผมได้โดยตรงเลยนะครับ ยินดีที่ได้พูดคุยครับ",
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
