import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Łukasz Cichecki",
  initials: "ŁC",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "DevOps Engineer with knowledge related to ISMS",
  summary: (
    <>
      DevOps engineer, system and network administrator with 8 years of
      experience in IT area. I am a problem-solving person who can make
      decisions under time pressure and I have ability to prioritize tasks
      properly. I’m currently looking for a job that will allow me to gain
      extensive experience with DevOps methodology toolset and develop my skills
      in the cloud technologies field.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/37215071?v=4",
  personalWebsiteUrl: "https://lukcic.pl",
  contact: {
    email: "lukcic@outlook.com",
    tel: "+48 723 333 222",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lukcic",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lukcic/",
        icon: LinkedInIcon,
      },
      {
        name: "XXX TODO",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Kielce University of Technology",
      degree: "Postgraduate Studies: Administrator of computer networks",
      start: "2014",
      end: "2015",
    },
    {
      school:
        "The University of Computer Engineering and Telecommunications (WSTKT) Kielce",
      degree:
        "Bachelor of Science in Engineering: Electronic and Telecommunication",
      start: "2008",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Bright IT Sp. z o.o.",
      link: "https://bright.global",
      badges: ["DevOps", "AWS", "Information Security"],
      title: "DevOps Engineer, ISO 27001 Internal Auditor",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description: (
        <>
          Design and configuration of virtual infrastructure in the cloud (AWS),
          automation of the above-mentioned processes (Terraform, AWS CDK),
          project maintenance.
          <ul className="list-inside list-disc">
            <li>
              Design and configuration of virtual infrastructure in the cloud
              (AWS), automation of the above-mentioned processes (Terraform, AWS
              CDK), project maintenance
            </li>
            <li>Preparing work environment for programmers and testers.</li>
            <li>
              Creating CI/CD workflows using GitHub Actions and Azure DevOps.
            </li>
            <li>
              Infrastructure and application monitoring (ELK Stack,
              Prometheus/Grafana, CloudWatch).
            </li>
            <li>
              Configuration automation using Ansible, Bash and Python scripts.
            </li>
            <li>
              Administration of company toolset (Google Workspace, Slack,
              Atlassian, 1Password), maintaining company internal network
              (Fortigate, UniFi).
            </li>
            <li>Creating technical documentation and training materials</li>
            <li>
              Increasing the level of company’s Information Security, including
              the development and analysis of existing IT and business
              documentation (policies, procedures).
            </li>
            <li>
              Ensuring compliance with internal regulations, regulatory
              requirements, requirements of international standards and good
              practices in the field of information security.
            </li>
            <li>
              Identification, assessment and analysis of information security
              risks for: IT systems, IT infrastructure, internal business
              procedures and contracts with service providers.
            </li>
            <li>
              Reduction of information security risks by proposing, implementing
              and monitoring activities that increase cybersecurity and
              information security.
            </li>
            <li>
              Conducting Information Security audits regarding compliance with
              the ISO 27001 standard
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Creator Sp. z o.o. Wrocław",
      link: "https://creator.wroc.pl",
      badges: ["SysAdmin", "HIS", "Network"],
      title: "Computer Systems Administrator",
      logo: null,
      start: "2016",
      end: "2022",
      description: (
        <>
          System and network administrator.
          <ul className="list-inside list-disc">
            <li>
              Leading the team responsible for the purchase and deployment (in
              IaaS cloud) of the Electronic Medical Documentation - HIS system
              (Comarch Optimed NXT): data migration and archiving from previous
              software, ongoing application and VMs administration, user support
              and training, reporting errors to the vendor&apos;s service.
            </li>
            <li>
              Radical reconstruction of the company`&apos;`s LAN network (10G
              core). Change data transmission providers (negotiating terms),
              setting up SD-WANs, implementation of UTM solutions (Fortigate),
              modernization and configuration of network devices (Cisco,
              Ubiquiti). Deploying of VLANs, EthernetVPN, SSL VPN.{" "}
            </li>
            <li>
              On-premise servers replacement (HP, Lenovo ThinkSystem),
              virtualization implementation (VMware), installation and
              configuration OS: Windows Server (AD, RDS, GPO) and Linux CentOS
              (MySQL, LAMP), Ubuntu (Zabbix, Docker containers)
            </li>
            <li>
              AD domain management (approx. 200 users), web server
              administration (Wordpress), e-mail server and ERP system with
              MSSQL.
            </li>
            <li>
              Modernization of the backup system based on NAS servers (QNAP,
              Synology), Cobian backup and own scripts. - Migration of antivirus
              solution – deploying Kaspersky Security Center instead of ESET.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "CeFarMed Sp. z o.o. Wrocław",
      link: "null",
      badges: ["Remote", "Test"],
      title: "IT Systems and Networks Administrator ",
      logo: null,
      start: "2015",
      end: "2016",
      description: (
        <>
          Short position description.
          <ul className="list-inside list-disc">
            <li>
              Server systems management: Windows Server 2003 - 2012 and Linux
              (Debian, CentOS).
            </li>
            <li>
              Ensuring the safety, continuity and efficiency of IT systems and
              multi-branch network.
            </li>
            <li>
              Administration of HIS - Medical Unit Management System (Eurosoft
              Przychodnia).
            </li>
            <li>
              Administration of Axigen mail server (approx. 400 accounts), AD
              domains, web server (Apache) and QNAP file servers.
            </li>
            <li>
              Analysis of IT solutions available on the market, purchase of
              hardware and software.
            </li>
            <li>Supervision over the ERP system (Comarch Optima ERP).</li>
            <li>
              Implementation of new software solutions, license management.
            </li>
            <li>
              Management and modernizations of the Access Control Systems
              (Roger), CCTV monitoring systems (Dahua, BCS) and telephone
              exchanges (Slican).
            </li>
            <li>
              Service of computer equipment and ongoing support for system
              users.
            </li>
            <li>
              Building multimedia presentation devices based on single-board
              computers (RaspberryPi).
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "AWS Cloud",
    "Ansible",
    "Terraform",
    "ISO 27001",
    "Linux",
    "Networking",
    "Prometheus/Grafana",
    "Git",
    "Docker",
    "IT Security",
  ],
  projects: [],
  //   {
  //     title: "Monito",
  //     techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
  //     description:
  //       "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "monito.dev",
  //       href: "https://monito.dev/",
  //     },
  //   },
  //   {
  //     title: "Consultly",
  //     techStack: [
  //       "TypeScript",
  //       "Next.js",
  //       "Vite",
  //       "GraphQL",
  //       "WebRTC",
  //       "Tailwind CSS",
  //       "PostgreSQL",
  //       "Redis",
  //     ],
  //     description:
  //       "Platform for online consultations with real-time video meetings and scheduling",
  //     logo: ConsultlyLogo,
  //     link: {
  //       label: "consultly.com",
  //       href: "https://consultly.com/",
  //     },
  //   },
  //   {
  //     title: "Minimalist CV",
  //     techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
  //     description:
  //       "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "Minimalist CV",
  //       href: "https://github.com/BartoszJarocki/cv",
  //     },
  //   },
  // ],
} as const;
