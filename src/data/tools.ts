import { 
  Archive, Shield, Eye, Search, Terminal, Network, Code, List, 
  FileSearch, Database, Globe, Lock, Webhook, Cloud, Users, 
  FileJson, Fingerprint, Camera, Key, Wifi, Mail, Server
} from 'lucide-react';

export const tools = [
  {
    name: 'Web Archive Search',
    description: 'Access historical snapshots of web pages to find sensitive information and exposed endpoints using Wayback Machine.',
    usage: 'https://web.archive.org/cdx/search/cdx?url=*.domain.com&fl=original&collapse=urlkey',
    icon: Archive,
  },
  {
    name: 'AlienVault OTX',
    description: 'Gather threat intelligence from AlienVault\'s Open Threat Exchange database.',
    usage: 'https://otx.alienvault.com/api/v1/indicators/domain/{domain}/url_list?limit=1',
    icon: Shield,
  },
  {
    name: 'URLScan',
    description: 'Search for domain scans to identify exposed URLs, JS files, and web components.',
    usage: 'https://urlscan.io/api/v1/search/?q=domain:{domain}&size=10000',
    icon: Search,
  },
  {
    name: 'VirusTotal Domain',
    description: 'Retrieve detailed domain reports including malware and blacklist information.',
    usage: 'https://www.virustotal.com/vtapi/v2/domain/report?apikey={key}&domain={domain}',
    icon: Eye,
  },
  {
    name: 'Source Code Analysis',
    description: 'Search for sensitive keywords and potential data exposures in source code.',
    usage: 'Keywords: .zi, .zip, .exe, .ex, token=, api=, unsubscribe, secret',
    icon: Code,
  },
  {
    name: 'Developer Info Scanner',
    description: 'Identify developer names and personal emails from installed or configuration files.',
    usage: 'installed.json analysis for developer information',
    icon: FileJson,
  },
  {
    name: 'Directory Brute Force',
    description: 'Brute-force directory paths while excluding common error codes to find hidden directories.',
    usage: 'dirsearch -u "https://target.com/" -x 301,403,404,500,400,502,503,302,429 -randomagent -deep-recursive',
    icon: List,
  },
  {
    name: 'Payload Testing',
    description: 'Test for injection vulnerabilities using various payloads.',
    usage: 'python3 lostsec.py -u "http://testphp.vulnweb.com/artists.php?artist=" -p payloads/xor.txt -t 5',
    icon: Terminal,
  },
  {
    name: 'Parameter Spider',
    description: 'Extract parameters from URLs for injection testing.',
    usage: 'paramspider -d testphp.vulnweb.com -o urls.txt',
    icon: Network,
  },
  {
    name: 'Path Enumeration',
    description: 'Generate lists of URLs with common scripting languages and query parameters.',
    usage: 'echo domain.com | gau --mc 200 | urldedupe >urls.txt && cat urls.txt | grep -E ".php|.asp|.aspx|.cfm|.jsp" | grep "=" | sort > output.txt',
    icon: FileSearch,
  },
  {
    name: 'URL Scraping',
    description: 'Deep crawl and scrape URLs from target domain.',
    usage: 'katana -u http://testphp.vulnweb.com -d 5 | grep "=" | urldedupe | anew output.txt',
    icon: Globe,
  },
  {
    name: 'Waymore Archive',
    description: 'Query historical URLs from archives and parse output for parameters.',
    usage: 'waymore -i "domain.com" -mc 200,302 -mode U | qsreplace "FUZZ" | grep "FUZZ" | sed "s/FUZZ//g" | sort -u',
    icon: Archive,
  },
  {
    name: 'SQLMap Scanner',
    description: 'Advanced SQL injection testing with tamper scripts.',
    usage: 'sqlmap -u "https://example.com/page.php?id=1" -batch -dbs --threads=5 --random-agent -risk=3 -level=5',
    icon: Database,
  },
  {
    name: 'Subdomain Scanner',
    description: 'Comprehensive subdomain enumeration and validation.',
    usage: 'subfinder -d domain.com -all -o subdomain.txt && cat subdomain.txt | httpx -o live.txt',
    icon: Network,
  },
  {
    name: 'Open Redirect Finder',
    description: 'Identify potential open redirect vulnerabilities.',
    usage: 'site:domain.com inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http',
    icon: Lock,
  },
  {
    name: 'JS Inspector',
    description: 'Extract and analyze JavaScript files for sensitive data.',
    usage: 'cat js.txt | while read url; do python3 SecretFinder.py -i $url -o cli; done',
    icon: Code,
  },
  {
    name: 'File Extension Filter',
    description: 'Identify potentially sensitive files by extension.',
    usage: 'cat allurls.txt | grep -E "\\.txt|\\.log|\\.cache|\\.secret|\\.db|\\.backup|\\.yml|\\.json|\\.gz"',
    icon: FileSearch,
  },
  {
    name: 'Subdomain Takeover',
    description: 'Detect subdomains vulnerable to takeover.',
    usage: 'subjack -w subdomains.txt -t 10 -o results.txt -ssl',
    icon: Globe,
  },
  {
    name: 'SSL/TLS Analyzer',
    description: 'Perform in-depth SSL/TLS security analysis.',
    usage: 'https://api.ssllabs.com/api/v3/analyze?host={domain}',
    icon: Lock,
  },
  {
    name: 'DNS Zone Transfer',
    description: 'Test for misconfigured DNS zone transfers.',
    usage: 'dig axfr @ns1.example.com example.com',
    icon: Network,
  },
  {
    name: 'Email Harvester',
    description: 'Gather email addresses associated with the domain.',
    usage: 'theharvester -d example.com -b google,bing,yahoo',
    icon: Mail,
  },
  {
    name: 'Header Inspector',
    description: 'Analyze HTTP headers for sensitive information.',
    usage: 'curl -I -L https://example.com',
    icon: Code,
  },
  {
    name: 'Port Scanner',
    description: 'Scan for open ports and service versions.',
    usage: 'nmap -sC -sV -p- example.com',
    icon: Wifi,
  },
  {
    name: 'Cloud Storage Enum',
    description: 'Identify exposed cloud storage buckets.',
    usage: 'python AWSBucketDump.py -d domain.com -l buckets.txt',
    icon: Cloud,
  },
  {
    name: 'Social Media Intel',
    description: 'Search for accounts across social platforms.',
    usage: 'sherlock username --site all',
    icon: Users,
  },
  {
    name: 'API Fuzzer',
    description: 'Test API endpoints for vulnerabilities.',
    usage: 'ffuf -w wordlist.txt -u https://api.example.com/FUZZ',
    icon: Webhook,
  },
  {
    name: 'DNS Enumerator',
    description: 'Brute force DNS records discovery.',
    usage: 'dnsrecon -d example.com -t brt',
    icon: Network,
  },
  {
    name: 'Metadata Extractor',
    description: 'Extract metadata from files for intelligence.',
    usage: 'exiftool -all sensitivefile.docx',
    icon: FileJson,
  },
  {
    name: 'Cloud Config Audit',
    description: 'Assess cloud service configurations.',
    usage: 'python ScoutSuite.py aws',
    icon: Cloud,
  },
  {
    name: 'JS Endpoint Finder',
    description: 'Extract endpoints from JavaScript files.',
    usage: 'python3 jsparser.py -u https://example.com/app.js',
    icon: Code,
  },
  {
    name: 'Vuln Scanner',
    description: 'Comprehensive vulnerability assessment.',
    usage: 'nessus scan --target example.com --policy "Web App Tests"',
    icon: Shield,
  },
  {
    name: 'WHOIS Lookup',
    description: 'Reverse WHOIS lookup for related domains.',
    usage: 'https://whois.whoisxmlapi.com/reverse-whois/lookup',
    icon: Search,
  },
  {
    name: 'Google Dorker',
    description: 'Advanced search for exposed sensitive files.',
    usage: 'site:example.com ext:sql OR ext:env OR ext:log',
    icon: Search,
  },
  {
    name: 'Package Analyzer',
    description: 'Identify vulnerable dependencies.',
    usage: 'https://npms.io/search?q=example-package',
    icon: Database,
  },
  {
    name: 'CMS Fingerprinter',
    description: 'Identify and analyze CMS installations.',
    usage: 'whatweb -v example.com',
    icon: Fingerprint,
  },
  {
    name: 'Web Screenshots',
    description: 'Capture screenshots of web applications.',
    usage: 'eyewitness -f urls.txt --web',
    icon: Camera,
  },
  {
    name: 'Credential Finder',
    description: 'Search for leaked credentials in public sources.',
    usage: 'leaklooker search --domain example.com',
    icon: Key,
  },
    {
    name: 'Content Discovery with Gobuster',
    description: 'Perform directory and file brute-forcing on the target domain using a predefined wordlist.',
    usage: 'gobuster dir -u https://target.com -w /path/to/wordlist.txt -x php,html,js -o results.txt -t 50',
    icon: Search,
  },
  
  {
    name: 'Content Discovery with Gobuster',
    description: 'Perform directory and file brute-forcing on the target domain using a predefined wordlist.',
    usage: 'gobuster dir -u https://target.com -w /path/to/wordlist.txt -x php,html,js -o results.txt -t 50',
    icon: Search
  },
  {
    name: 'DNS Enumeration with DNSRecon',
    description: 'Perform DNS enumeration to discover subdomains, zone transfers, and records like MX, TXT, and SOA.',
    usage: 'dnsrecon -d example.com -a',
    icon: Search
  },
  {
    name: 'Automated Vulnerability Scanning with Nuclei',
    description: 'Use predefined templates to scan for known vulnerabilities, misconfigurations, and security issues.',
    usage: 'nuclei -u https://target.com -t /path/to/templates/ -o nuclei_results.txt',
    icon: Shield
  },
  {
    name: 'Subdomain Enumeration with Assetfinder',
    description: 'Enumerate subdomains of a target domain to expand the attack surface.',
    usage: 'assetfinder --subs-only example.com > subdomains.txt',
    icon: Search
  },
  {
    name: 'CORS Misconfiguration Testing with Corsy',
    description: 'Detect Cross-Origin Resource Sharing (CORS) misconfigurations that may allow unauthorized access to sensitive data.',
    usage: 'python3 corsy.py -u https://target.com',
    icon: Eye
  },
  {
    name: 'XSS Payload Testing with XSStrike',
    description: 'Perform advanced Cross-Site Scripting (XSS) testing with automated payloads and detection techniques.',
    usage: 'python3 xsstrike.py -u "http://example.com/search.php?query="',
    icon: Code
  },
  {
    name: 'Email Enumeration with Hunter.io API',
    description: 'Identify email addresses associated with the target domain for phishing simulations or social engineering.',
    usage: 'https://api.hunter.io/v2/domain-search?domain=example.com&api_key=your_api_key',
    icon: Mail
  },
  {
    name: 'Reverse IP Lookup with Shodan',
    description: 'Discover all domains hosted on the same IP address, helping identify additional attack vectors.',
    usage: 'shodan host <IP>',
    icon: Globe
  },
  {
    name: 'Identifying Exposed APIs with Postman',
    description: 'Detect exposed API keys, tokens, and potential vulnerabilities in API implementations.',
    usage: 'Manually test known or suspected API endpoints using Postman.',
    icon: Server
  },
  {
    name: 'Automated Fuzzing with FFUF',
    description: 'Perform fast and flexible fuzzing to identify hidden directories, files, and parameters.',
    usage: 'ffuf -u https://target.com/FUZZ -w /path/to/wordlist.txt -o fuzz_results.txt',
    icon: Terminal
  },
  {
    name: 'SSL/TLS Vulnerability Scanning with SSLScan',
    description: 'Analyze the SSL/TLS configuration of the target domain, identifying weak ciphers, protocols, and misconfigurations.',
    usage: 'sslscan https://target.com',
    icon: Lock
  },
  {
    name: 'Exposed Credentials Search with GitRob',
    description: 'Analyze GitHub repositories associated with the target domain for exposed secrets, credentials, or sensitive information.',
    usage: 'gitrob -b your_github_token example.com',
    icon: Key
  },
  {
    name: 'Web Application Testing with OWASP ZAP',
    description: 'Identify common web vulnerabilities like XSS, SQLi, and CSRF in the target application.',
    usage: 'Run OWASP ZAP in proxy mode and crawl the target application to perform automated vulnerability scanning and manual testing.',
    icon: Shield
  },
  {
    name: 'DNS Brute Forcing with Gobuster',
    description: 'Brute-force DNS subdomains to uncover hidden subdomains.',
    usage: 'gobuster dns -d example.com -w /path/to/wordlist.txt -o dns_results.txt',
    icon: Search
  },
  {
    name: 'JWT Vulnerability Testing with JJWT Tool',
    description: 'Test for vulnerabilities in JSON Web Tokens (JWTs), such as signature bypass or weak algorithms.',
    usage: 'python3 jwt_tool.py <JWT_Token> -S example_secret',
    icon: Lock
  },
  {
    name: 'Metadata Analysis with ExifTool',
    description: 'Extract metadata from files (e.g., images, documents) to find sensitive information like usernames or software versions.',
    usage: 'exiftool -r /path/to/files',
    icon: FileSearch
  },
  {
    name: 'CVE Search with SearchSploit',
    description: 'Search for known vulnerabilities and exploits for specific software versions.',
    usage: 'searchsploit target_software_version',
    icon: Search
  },
  {
    name: 'Virtual Host Enumeration with VHostScan',
    description: 'Enumerate virtual hosts on a server to find additional domains or applications hosted on the same infrastructure.',
    usage: 'python3 VHostScan.py -u https://target.com -w /path/to/wordlist.txt',
    icon: Server
  },
  {
    name: 'SSRF Testing with HTTP Request Smuggling',
    description: 'Exploit server-side vulnerabilities to access internal systems or sensitive resources.',
    usage: 'Use Burp Intruder to test for SSRF and HTTP Request Smuggling vulnerabilities in the target application.',
    icon: Server
  },
  {
    name: 'Sensitive File Detection with Arjun',
    description: 'Automate parameter discovery and identify parameters that might lead to sensitive files or misconfigurations.',
    usage: 'arjun -u https://target.com -t 10',
    icon: FileSearch
  },
  {
    name: 'Kubernetes Enumeration with Kube-hunter',
    description: 'Perform security assessments on Kubernetes clusters, identifying common vulnerabilities and misconfigurations.',
    usage: 'kube-hunter --remote https://kubernetes-cluster-url',
    icon: Cloud
  },
  
];