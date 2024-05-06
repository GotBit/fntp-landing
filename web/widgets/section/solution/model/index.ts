const overview = {
  title: 'Overview',
  subtitle:
    'FNTP emerges as an innovative solution for the challenges faced by current data transmission protocols, offering enhancements in speed up to 50x, reliability, and security. Its comprehensive approach to managing network traffic, combined with advanced features like Packet 2.0 and robust security measures, positions FNTP as a promising technology for future internet and network applications, potentially revolutionizing how data is transmitted across global networks.',
}

const coreFeatures = {
  title: 'Core Features',
  list: [
    {
      title: 'Transport Mechanism',
      text: 'FNTP is designed as a transport protocol with guaranteed data delivery between devices, ensuring reliable communication across various network layers.',
    },
    {
      title: 'Bandwidth Allocation and Latency Guarantees ',
      text: 'It dynamically allocates bandwidth and guarantees latency levels while normalizing latency fluctuations, ensuring consistent data transmission quality.',
    },
    {
      title: 'Traffic Interference Elimination',
      text: 'The protocol effectively segregates different types of traffic to prevent interference, thereby optimizing network performance.',
    },
    {
      title: 'Unified Channel for Diverse Traffic',
      text: 'FNTP can combine real-time and non-critical latency traffic under a single channel, simplifying traffic management.',
    },
    {
      title: 'Security Enhancements',
      text: 'FNTP enhances security by allowing connections only between authenticated participants, maintaining session histories via a blockchain-like mechanism, and demonstrating resilience against DoS and DDoS attacks.',
    },
  ],
}

const performanceBenefits = {
  title: 'Performance & Benefits',
  subtitle:
    'FNTP has demonstrated significant improvements in data transmission speeds in various test scenarios, including:',
  text: [
    '1. London to Santa Clara: 11 times speed increase.',
    '2. London to Amsterdam: 3 times speed increase.',
    '3. London to Sydney: 50 times speed increase.',
  ],
}

const pictures = {
  miniArt: {
    path: '/images/solution/mini-art',
    gradient: 'bottom',
  },
  art: {
    title: 'FNTP',
    subtitle: 'up to 50 times faster than current standards',
    path: '/images/solution/art',
    gradient: 'left',
  },
}

export { pictures, overview, coreFeatures, performanceBenefits }
