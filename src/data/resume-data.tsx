import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Łukasz Cichecki",
  initials: "ŁC",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "DevOps Engineer and System Administrator with nearly a decade of hands-on experience in the IT industry.",
  summary: (
    <>
      I specialize in the automation and maintenance of IT environments, with a
      focus on high availability, performance, but most importantly
      infrastructure security, helped by my additional expertise in ISO 27001. I
      am looking for new challenges that will allow me to develop my skills with
      production cloud systems and gain practical experience in the area of
      securing IT projects. I am a solution-oriented person, able to prioritize
      tasks accordingly, and constantly follow my innate technical curiosity.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/37215071?v=4",
  personalWebsiteUrl: "https://cichecki.it",
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
        name: "TwiXer",
        url: "https://x.com/lukcicPL",
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
      logo: null,
      start: "May 2022",
      end: null,
      description: (
        <>
          Short position description:
          <ul className="list-inside list-disc">
            <li>
              Design and deployment of cloud infrastructure (mainly AWS) using
              Infrastructure as a Code (Terraform, AWS CDK), projects
              maintenance.
            </li>
            <li>
              Creating CI/CD workflows using GitHub Actions, Jenkins and Azure
              DevOps.
            </li>
            <li>
              Implementation of infrastructure monitoring solution based on
              Prometheus/Grafana/Loki/SNMP.
            </li>
            <li>
              Configuration automation using Ansible and its own scripts (Bash,
              Python).
            </li>
            <li>
              Administration of company toolset (Google Workspace, Slack,
              Atlassian, 1Password).
            </li>
            <li>
              Implementation of a security monitoring platform (Wazuh), system
              hardening (Linux, cloud infrastructure).
            </li>
            <li>
              Reorganization of internal LAN network (FortiGate, Unifi, Radius).
              Integration with a multi-project cloud environment.
            </li>
            <li>
              Increasing the level of the company&apos;s ISMS, including the
              development and analysis of existing IT and business documentation
              (policies, procedures). Conducting training.
            </li>
            <li>
              Conducting Information Security audits regarding compliance with
              the ISO 27001 standard
            </li>
            <li>
              Ensuring compliance with internal regulations, regulatory
              requirements, international standards (ISO 27001) and good
              practices in the field of information security.
            </li>
            <li>
              Identification, assessment and analysis of information security
              risks for: IT systems, IT infrastructure, internal business
              procedures and contracts with service providers.
            </li>
            <li>Creating technical documentation and training materials.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Creator Sp. z o.o. Wrocław",
      link: "https://creator.wroc.pl",
      badges: ["SysAdmin", "HIS", "Network"],
      title: "IT Systems Administrator",
      logo: null,
      start: "June 2016",
      end: "April 2022",
      description: (
        <>
          Short position description:
          <ul className="list-inside list-disc">
            <li>
              Leading a team responsible for the purchase and implementation (in
              the cloud IaaS) of Electronic Medical Records - HIS system
              (Comarch Optimed NXT), migration and archiving of data from the
              previous software, ongoing administration of the application and
              virtual machines, user training and support, reporting issues to
              the vendor.
            </li>
            <li>
              Fundamental reorganization of the internal LAN network (10 Gbps).
              Change data transmission providers (negotiating terms), setting up
              SD-WANs, implementation of UTM solutions (FortiGate),
              modernization and configuration of network devices, deploying of
              VLANs, EthernetVPN, SSL VPN.
            </li>
            <li>
              On-premise servers replacement (HP, Lenovo ThinkSystem),
              virtualization implementation (VMware), installation and
              configuration of server operating systems: Windows Server (AD,
              RDS, GPO) and Linux (CentOS, Ubuntu) with MySQL, LAMP, Zabbix.
            </li>
            <li>
              Active Directory domain management (approx. 200 users), web server
              administration (Wordpress), e-mail server and ERP system with
              MSSQL. Antivirus software maintenance (KAV).
            </li>
            <li>
              Modernization of the backup system based on NAS servers (QNAP,
              Synology), Cobian Backup software and own scripts.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "CeFarMed Sp. z o.o. Wrocław",
      link: "null",
      badges: ["SysAdmin", "Linux", "ERP"],
      title: "IT Systems and Networks Administrator",
      logo: null,
      start: "June 2015",
      end: "May 2016",
      description: (
        <>
          Short position description:
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
              Administration of Axigen mail server (approx. 400 accounts), AD
              domains, web server (Apache) and QNAP file servers.
            </li>
            <li>
              Medical Unit Management System (Eurosoft Przychodnia) software
              maintenance and user support.
            </li>
            <li>
              Implementation of new software solutions, software integration,
              license management.
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
    "Security",
    "Wazuh",
    "Python",
    "Windows Server",
    "Proxmox",
    "AWS CDK",
    "Kubernetes",
  ],
  projects: [
    {
      title: "ISO 27001 update (2022)",
      techStack: ["ISMS", "ISO 27001", "Internal Auditor", "Cloud"],
      description: "ISO 27001",
      isActive: false,
      logo: null,
      link: {
        label: "Bright IT ISO 27001 Certification",
        href: "https://www.bright.global/en/blog/the-importance-of-iso-certification-in-earning-client-trust",
      },
    },
  ],
} as const;
