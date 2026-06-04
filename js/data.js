/* ============================================================
   data.js — 이곳에 이력서 내용을 입력하세요
   ============================================================ */

const RESUME = {

  /* ---------- 기본 정보 ---------- */
  name:     "MIA LEE",
  jobTitle: "Curator / Art Director",
  bio:      "I am a qualified and professional Curator / Art Director with five years of experience in exhibition planning and art business. Strong creative and analytical skills. Team player with an eye for detail.",
  email:    "mialee0217@gmail.com",
  phone:    "+82-10-7768-5735",
  github:   "https://github.com/lsm5735",
  photo:    "images/profile.png",

  /* ---------- 전문 분야 (기술 스택 자리에 Expertise로 활용) ---------- */
  skills: [
    {
      category: "Curation",
      items: [
        { name: "전시 기획",       level: 5 },
        { name: "전시 운영·관리",  level: 5 },
        { name: "아트 페어 기획",  level: 4 },
      ],
    },
    {
      category: "Consulting",
      items: [
        { name: "아트 컨설팅",     level: 5 },
        { name: "공공미술",        level: 4 },
        { name: "미디어아트",      level: 3 },
      ],
    },
    {
      category: "Art Direction",
      items: [
        { name: "브랜드 콜라보",   level: 5 },
        { name: "공간 디자인",     level: 4 },
        { name: "굿즈·조형물 제작",level: 3 },
      ],
    },
    {
      category: "Business",
      items: [
        { name: "기업 파트너십",   level: 5 },
        { name: "라이센싱",        level: 4 },
        { name: "SNS·채널 운영",   level: 3 },
      ],
    },
  ],

  /* ---------- 경력 ---------- */
  experience: [
    {
      company:  "M.contemporary",
      role:     "Chief Curator",
      period:   "2021 – 2022",
      location: "",
      desc: [
        "M 부산 지점 개관 및 기획·관리",
        "M 부산 개관전 카우스전 <Kaws Party> 기획",
        "BAMA 아트 페어 및 호텔 아트 페어 다수 참여",
        "롯데갤러리 대관 아트페어 기획 및 운영 — <Flex Art Fair>",
        "URBAN BREAK 2022: 존버거맨 단독 메인 부스·그룹전 부스·NFT 특별부스 3개 기획·운영",
        "갤러리아 백화점 콜라보 — 시즈널 메인컨셉 존버거맨 작가와 내외부 디자인·조형물·굿즈 제작",
        "존버거맨 작가 × SPC F&B 브랜드 기업간 콜라보 진행",
        "반안트리 제주점 내부 아트 컨설팅",
      ],
    },
    {
      company:  "8D Creative · Acme · UGI Production",
      role:     "Art Director",
      period:   "2019 – 2020",
      location: "",
      desc: [
        "아트 콜라보 의류 브랜드 MImeme 런칭",
        "롯데뮤지엄 스누피 전시 <To the Moon> 기획",
        "케니샤프 작가 기업 콜라보 진행 및 소속 작가 한국 라이선스 담당",
        "부산 문화복합공간 기획 및 운영",
        "아티스트 유튜브 채널 기획·운영 — channel NNG",
      ],
    },
    {
      company:  "M.contemporary Art Center",
      role:     "Curator",
      period:   "2018 – 2019",
      location: "",
      desc: [
        "<마르크 샤갈 특별전, 영혼의 정원> 기획",
        "빈센트 반 고흐와 125인의 작가들 <러빙 빈센트> 기획",
        "<슈퍼 스타 존버거맨> 기획",
        "공공미술 컨설팅 파트 담당, 다수 프로젝트 진행",
        "르 메르디앙 서울 호텔 내외부 아트 컨설팅",
        "여의도 8타워 미디어아트 컨설팅",
      ],
    },
  ],

  /* ---------- 학력 ---------- */
  education: [
    {
      school:  "Hanyang University",
      major:   "Clothing & Textiles",
      degree:  "Master of Technology",
      period:  "2014 – 2018",
    },
  ],

  /* ---------- 주요 전시·프로젝트 ---------- */
  projects: [
    {
      name:  "Kaws Party — M 부산 개관전",
      desc:  "M.contemporary 부산 지점 개관 기념 카우스 특별전 전시 기획 및 총괄.",
      tech:  ["Exhibition", "Art Fair", "Curation"],
      link:  "",
      image: "",
    },
    {
      name:  "URBAN BREAK 2022",
      desc:  "존버거맨 단독 메인 부스·그룹전·NFT 특별부스 3개 동시 기획·운영.",
      tech:  ["Art Fair", "NFT", "Brand Collab"],
      link:  "",
      image: "",
    },
    {
      name:  "Loving Vincent — 반 고흐 전",
      desc:  "빈센트 반 고흐와 125인의 작가들 <러빙 빈센트> 대규모 특별전 기획.",
      tech:  ["Exhibition", "Curation", "Public Art"],
      link:  "",
      image: "",
    },
    {
      name:  "MImeme 브랜드 런칭",
      desc:  "아트 콜라보 의류 브랜드 MImeme 기획·런칭 및 아트 디렉션 전담.",
      tech:  ["Art Direction", "Brand", "Fashion"],
      link:  "",
      image: "",
    },
  ],

  /* ---------- 자격증 & 수상 ---------- */
  certifications: [
    { name: "Flex Art Fair 기획·운영",  issued: "2022",  issuer: "롯데갤러리" },
    { name: "BAMA 아트 페어 참여",       issued: "2021",  issuer: "BAMA" },
    { name: "To the Moon 전시 기획",    issued: "2020",  issuer: "롯데뮤지엄" },
    { name: "마르크 샤갈 특별전 기획",   issued: "2018",  issuer: "M.contemporary" },
  ],
};
