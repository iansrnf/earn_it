import type { LucideIcon } from "lucide-react";
import { AlertTriangle, Building2, CalendarDays, CloudRain, DollarSign, Landmark, Radio, ShieldCheck, Trophy, Waves } from "lucide-react";

export type Article = {
  slug: string;
  category: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
  heroAlt: string;
  imageWidth: number;
  imageHeight: number;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  sections: {
    id: string;
    kicker: string;
    title: string;
    paragraphs: string[];
  }[];
  keyPoints: {
    title: string;
    text: string;
    icon: LucideIcon;
  }[];
  impactTitle: string;
  impacts: string[];
  relatedTopics: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  sources: {
    label: string;
    href: string;
  }[];
  promotedLink?: {
    label: string;
    href: string;
    disclosure: string;
  };
  externalImage?: {
    title: string;
    description: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  theme?: "earnapp";
};

export const articles: Article[] = [
  {
    slug: "walmart-heir-lukas-walton-chicago-bulls-united-center",
    category: "Business Sports",
    eyebrow: "Walmart Heir Investment",
    title: "Walmart Heir Lukas Walton Buys Minority Stake in Chicago Bulls and United Center",
    shortTitle: "Walmart Heir Buys Bulls Stake",
    description:
      "Lukas and Samantha Walton acquired a minority interest in the Chicago Bulls and United Center while the Reinsdorf family remains in control of the NBA team.",
    publishedAt: "2026-06-27",
    updatedAt: "June 27, 2026",
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/United%20Center%20060716.jpg?width=1600",
    heroAlt: "United Center exterior in Chicago",
    imageWidth: 1600,
    imageHeight: 1200,
    lead:
      "The Walmart name is now tied to one of Chicago's most valuable sports assets. Lukas Walton and his wife Samantha have acquired a minority interest in the Chicago Bulls and the United Center, according to the Bulls' announcement.",
    primaryCta: "Read Deal Summary",
    secondaryCta: "Official Sources",
    sections: [
      {
        id: "summary",
        kicker: "Deal Summary",
        title: "What Happened",
        paragraphs: [
          "The Chicago Bulls and United Center announced that Lukas and Samantha Walton acquired a minority interest in the team and the arena. The transaction brings a high-profile Chicago-based family into the Bulls ownership picture, but it does not change who controls the franchise.",
          "The Reinsdorf family will continue to hold the controlling interest in the Bulls. The Reinsdorf and Wirtz families also remain the controlling owners of the United Center and The 1901 Project.",
        ],
      },
      {
        id: "control",
        kicker: "Ownership Control",
        title: "What Does Not Change",
        paragraphs: [
          "The most important detail for Bulls fans is control. This is a minority investment, not a sale of the team. Reports and the team announcement point to existing limited-partner shares changing hands rather than a shift in control.",
          "That makes the move different from a succession-style transaction. It adds financial weight and local civic interest without creating an announced path to controlling ownership.",
        ],
      },
      {
        id: "context",
        kicker: "Why It Matters",
        title: "Why the Walton Investment Matters",
        paragraphs: [
          "Lukas Walton is the grandson of Walmart founder Sam Walton and is widely associated with one of America's wealthiest families. His involvement gives the Bulls and United Center another major financial name at a time when sports teams and arena districts are increasingly viewed as long-term real estate and media assets.",
          "The United Center is tied to the broader West Side sports and entertainment campus conversation, so the investment is about more than basketball. It links the Bulls, the arena, and neighborhood development ambitions under one headline.",
        ],
      },
    ],
    keyPoints: [
      {
        title: "Minority Interest",
        text: "Lukas and Samantha Walton acquired a minority interest in both the Chicago Bulls and the United Center.",
        icon: DollarSign,
      },
      {
        title: "Control Stays Put",
        text: "The Reinsdorf family remains the controlling owner of the Bulls after the transaction.",
        icon: ShieldCheck,
      },
      {
        title: "Arena Link",
        text: "The investment also touches the United Center, where the Reinsdorf and Wirtz families continue to hold control.",
        icon: Building2,
      },
    ],
    impactTitle: "Fast Facts for Readers",
    impacts: [
      "Buyer: Lukas Walton and Samantha Walton.",
      "Asset: minority interest in the Chicago Bulls and United Center.",
      "Control: Reinsdorf family remains controlling owner of the Bulls.",
      "Terms: stake size and transaction value were not publicly disclosed in the team announcement.",
    ],
    relatedTopics: [
      "walmart heir bulls stake",
      "lukas walton chicago bulls",
      "walmart bulls united center",
      "chicago bulls minority owner",
      "reinsdorf family bulls control",
      "united center investment",
    ],
    faqs: [
      {
        question: "Did Lukas Walton buy the Chicago Bulls?",
        answer:
          "No. Lukas and Samantha Walton acquired a minority interest. The Reinsdorf family continues to hold the controlling interest in the Bulls.",
      },
      {
        question: "Did the deal include the United Center?",
        answer:
          "Yes. The Bulls and United Center announcement said the Waltons acquired a minority interest in both the team and the arena.",
      },
      {
        question: "Were the financial terms disclosed?",
        answer:
          "No. The official announcement and major reports did not disclose the size of the stake or the transaction value.",
      },
    ],
    sources: [
      {
        label: "Chicago Bulls official announcement",
        href: "https://www.nba.com/bulls/news/the-chicago-bulls-announce-new-minority-investment-by-lukas-and-samantha-walton",
      },
      {
        label: "Chicago Sun-Times report",
        href: "https://chicago.suntimes.com/bulls/2026/06/26/reinsdorfs-new-investors-bulls-and-united-center",
      },
      {
        label: "Forbes report",
        href: "https://www.forbes.com/sites/tylerroush/2026/06/26/billionaire-walmart-heir-lukas-walton-acquires-minority-stake-in-chicago-bulls/",
      },
      {
        label: "United Center official site",
        href: "https://www.unitedcenter.com/",
      },
    ],
    promotedLink: {
      label: "Start with EarnApp",
      href: "https://earnapp.com/i/wUJsLJTI",
      disclosure: "Promoted referral link. Earnings depend on location, demand, device availability, and connection quality.",
    },
    theme: "earnapp",
  },
  {
    slug: "earnapp-uptime-based-earnings-referral-guide",
    category: "Passive Income",
    eyebrow: "EarnApp Earnings Update",
    title: "EarnApp Uptime-Based Earnings Explained: What Changed and How to Start",
    shortTitle: "EarnApp Passive Income Guide",
    description:
      "EarnApp is one of the simplest passive-income apps for turning idle internet availability into potential earnings. Learn the uptime-based earning model, how to improve results, and how to start with a referral link.",
    publishedAt: "2026-06-27",
    updatedAt: "June 27, 2026",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Laptop showing analytics on a desk",
    imageWidth: 1600,
    imageHeight: 1067,
    lead:
      "EarnApp is built for people who want passive income without trading more hours for money. Keep an eligible device online, maintain a reliable connection, and let idle internet availability work in the background when there is demand for your IP.",
    primaryCta: "Maximize Earnings",
    secondaryCta: "Start with EarnApp",
    sections: [
      {
        id: "summary",
        kicker: "Earnings Update",
        title: "EarnApp Turns Uptime Into a Passive-Income Opportunity",
        paragraphs: [
          "EarnApp still describes its service as a way to monetize unused internet resources, but the more useful way to think about it now is uptime: the longer an eligible device stays available with a stable connection, the more chances it has to earn when demand appears.",
          "That makes EarnApp appealing as a low-effort passive-income tool. You do not need to manage products, talk to customers, or create content every day. The core habit is simple: keep your device online and your connection healthy.",
        ],
      },
      {
        id: "rates",
        kicker: "Rates",
        title: "How to Think About Higher Earnings",
        paragraphs: [
          "EarnApp's help center describes United States earnings as up to $10 per IP per month, or up to $0.0138 per hour, when speed requirements and demand are met. For the rest of the world, the guide lists up to $5 per IP per month, or up to $0.0069 per hour.",
          "Those figures are caps rather than guaranteed income, but they also show why uptime matters. A device that stays online for more hours has more earning windows than one that disconnects, sleeps, or drops connection throughout the day.",
        ],
      },
      {
        id: "setup",
        kicker: "Setup",
        title: "The Simple Setup That Can Earn More",
        paragraphs: [
          "The best setup is boring in the best way: a device that stays online, a connection that is stable, and a network that meets EarnApp's speed and latency expectations. EarnApp's own passive-income page says devices and availability are factors that impact earnings.",
          "To give yourself the best chance, use a device you can leave running, avoid unstable Wi-Fi, prevent sleep mode from cutting availability, and check the dashboard for performance. Start with one device first, then expand only after you understand how your location and connection perform.",
        ],
      },
      {
        id: "why-top",
        kicker: "Why It Stands Out",
        title: "Why EarnApp Can Be a Top Passive-Income Pick",
        paragraphs: [
          "No passive-income app is automatically the best for every person in the world, but EarnApp has one big advantage: it is simple. You can start without inventory, posting schedules, editing videos, or handling clients.",
          "That simplicity is why it can be a top choice for beginners who want a background earning stream. If your connection has demand and your device stays available, EarnApp can quietly add income while you focus on other work.",
        ],
      },
    ],
    keyPoints: [
      {
        title: "Uptime Matters",
        text: "More online hours can mean more chances to earn when demand is available for your IP.",
        icon: Radio,
      },
      {
        title: "Hourly Caps",
        text: "EarnApp lists hourly maximums that depend on region, speed requirements, availability, and demand.",
        icon: DollarSign,
      },
      {
        title: "Easy Start",
        text: "Use the promoted referral link to start directly and test your own device performance.",
        icon: Landmark,
      },
    ],
    impactTitle: "Ways to Improve Your EarnApp Results",
    impacts: [
      "Start with the promoted referral link: https://earnapp.com/i/wUJsLJTI",
      "Keep your device online for longer uptime windows.",
      "Use a stable connection and avoid sleep settings that interrupt availability.",
      "Check your dashboard before adding more devices or changing locations.",
    ],
    relatedTopics: [
      "earnapp uptime based earnings",
      "earnapp hourly rate",
      "earnapp passive income",
      "earnapp referral link",
      "earnapp bandwidth earnings change",
      "earnapp how to maximize earnings",
      "best passive income app",
    ],
    faqs: [
      {
        question: "Did EarnApp change from bandwidth-based earnings to uptime-based earnings?",
        answer:
          "EarnApp still uses unused internet resources, but its current help material presents rates as hourly caps affected by demand, internet speed, and device availability. That makes uptime and stability central to earning potential.",
      },
      {
        question: "How much can EarnApp pay per hour?",
        answer:
          "EarnApp's help center lists up to $0.0138 per hour in the United States and up to $0.0069 per hour for the rest of the world, subject to requirements and demand.",
      },
      {
        question: "Is EarnApp the number one passive-income app in the world?",
        answer:
          "There is no universal verified ranking that proves any app is number one for everyone. EarnApp can be a top passive-income option for users who want a simple background earning tool and can keep eligible devices online.",
      },
      {
        question: "Is the referral link required?",
        answer:
          "No, but this article promotes the referral link https://earnapp.com/i/wUJsLJTI for readers who want to start through the recommended sign-up path.",
      },
    ],
    sources: [
      {
        label: "Start EarnApp with referral link",
        href: "https://earnapp.com/i/wUJsLJTI",
      },
      {
        label: "EarnApp rates help article",
        href: "https://help.earnapp.com/hc/en-us/articles/38191916327441--What-are-the-EarnApp-rates-How-are-they-calculated",
      },
      {
        label: "EarnApp passive income page",
        href: "https://earnapp.com/passive-income",
      },
      {
        label: "EarnApp about page",
        href: "https://earnapp.com/about",
      },
      {
        label: "EarnApp earnings guide",
        href: "https://earnapp.zendesk.com/hc/en-us/articles/38640314568721--Comprehensive-EarnApp-Earnings-Guide",
      },
    ],
  },
  {
    slug: "july-4th-atlantic-weather-outlook",
    category: "Weather",
    eyebrow: "Atlantic Weather Outlook",
    title: "July 4th Atlantic Weather Outlook: Tropics, Southeast Rain and Holiday Forecast",
    shortTitle: "July 4th Atlantic Weather Outlook",
    description:
      "Updated July 4th Atlantic weather outlook with the latest National Hurricane Center tropical update, Southeast rain risk, beach impacts, and official forecast links.",
    publishedAt: "2026-06-26",
    updatedAt: "June 27, 2026",
    heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Storm clouds over the ocean",
    imageWidth: 1600,
    imageHeight: 900,
    lead:
      "A practical holiday-weather guide for the Atlantic basin, Southeast coast, beach trips, boating plans, and Independence Day events.",
    primaryCta: "Read Outlook",
    secondaryCta: "Official Sources",
    sections: [
      {
        id: "outlook",
        kicker: "Current Outlook",
        title: "What the July 4th Atlantic Weather Signal Shows Now",
        paragraphs: [
          "The cleanest current takeaway is cautious but not alarming: the National Hurricane Center does not expect tropical cyclone formation in the Atlantic during the next seven days.",
          "That keeps the near-term tropical signal low, but July 4 holiday planning should still account for the Southeast's normal summer pattern of pop-up thunderstorms, humid air, beach hazards, and fast-changing coastal conditions.",
        ],
      },
      {
        id: "context",
        kicker: "Forecast Context",
        title: "Why the Forecast Can Still Change",
        paragraphs: [
          "Early July is part of Atlantic hurricane season, but every tropical setup depends on short-term details: upper-level winds, Saharan dust, sea-surface temperatures, and whether a weak disturbance can organize near the coast or over open water.",
          "For practical planning, separate the tropical question from the day-to-day weather question. Even without a named storm, coastal thunderstorms can create lightning delays, heavy rain, rip currents, and rough boating windows.",
        ],
      },
    ],
    keyPoints: [
      {
        title: "No Named Storm Signal Yet",
        text: "The National Hurricane Center's current Atlantic outlook says tropical cyclone formation is not expected during the next seven days.",
        icon: ShieldCheck,
      },
      {
        title: "Southeast Rain Risk",
        text: "Holiday-week travel along the Southeast and Atlantic coast should still watch for scattered storms, rough surf, and locally heavy downpours.",
        icon: CloudRain,
      },
      {
        title: "Forecast Can Change Fast",
        text: "July 4 sits near the edge of the official seven-day tropical outlook window, so the most useful plan is to check fresh updates daily.",
        icon: AlertTriangle,
      },
    ],
    impactTitle: "What Travelers Should Watch Before July 4",
    impacts: [
      "Beach plans: watch for rip-current statements and surf advisories before swimming.",
      "Road trips: afternoon storms can slow I-95 and coastal routes from Florida through the Carolinas.",
      "Boating: check local marine forecasts for wind shifts, lightning, and seas before leaving port.",
      "Fireworks: evening storms can delay outdoor events even when the tropics stay quiet.",
    ],
    relatedTopics: [
      "july 4th atlantic weather",
      "atlantic tropics july 4",
      "southeast holiday rain forecast",
      "atlantic hurricane outlook",
      "july 4 beach weather",
      "national hurricane center update",
    ],
    faqs: [
      {
        question: "Is there a hurricane threat for July 4th?",
        answer:
          "As of June 26, 2026, the National Hurricane Center does not expect Atlantic tropical cyclone formation during the next seven days. Keep checking because July 4 is close to the edge of that forecast window.",
      },
      {
        question: "Could the Southeast still have stormy weather?",
        answer:
          "Yes. Scattered showers and thunderstorms are common in early July, especially during the afternoon and evening near the coast.",
      },
      {
        question: "What should beach visitors check first?",
        answer:
          "Check your local National Weather Service forecast, beach hazard statements, rip-current risk, marine forecast, and any local event updates.",
      },
    ],
    sources: [
      {
        label: "National Hurricane Center Atlantic Outlook",
        href: "https://www.nhc.noaa.gov/gtwo.php?basin=atlc&fdays=7",
      },
      {
        label: "NHC Tropical Weather Discussion",
        href: "https://www.nhc.noaa.gov/text/MIATWDAT.shtml",
      },
      {
        label: "NOAA Weather Prediction Center",
        href: "https://www.wpc.ncep.noaa.gov/",
      },
      {
        label: "National Weather Service Forecast Search",
        href: "https://www.weather.gov/",
      },
    ],
    externalImage: {
      title: "Latest NHC Atlantic Map",
      description:
        "This external map is loaded directly from the National Hurricane Center. It updates independently when NHC refreshes the seven-day Atlantic tropical outlook.",
      src: "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
      alt: "National Hurricane Center seven-day Atlantic tropical weather outlook map",
      width: 900,
      height: 675,
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const featuredArticle = articles[0];
