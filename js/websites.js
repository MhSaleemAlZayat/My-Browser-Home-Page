// Initial data
const categories = [
  //Learning
  {
    id: "learning",
    name: "Learning",
    isExpanded: true,
    websites: [
      {
        id: "1",
        name: "Pluralsight",
        url: "https://www.pluralsight.com/",
        icon: "imgs/pluralsight-logo.png",
        description: "Online courses"
      },
      {
        id: "1",
        name: "Udemy",
        url: "https://www.udemy.com/",
        icon: "imgs/udemy-logo.png",
        description: "Online courses"
      },
      {
        id: "1",
        name: "Exercism",
        url: "https://exercism.org/",
        icon: "imgs/exercism-logo.png",
        description: "Online courses"
      },
      {
         id: "1",
        name: "LeetCode",
        url: "https://leetcode.com/",
        icon: "imgs/leetcode-logo.png",
        description: "Free coding tutorials"
      },
      {
        id: "1",
        name: "FreeCodeCamp",
        url: "https://www.freecodecamp.org/",
        icon: "imgs/freecodecamp-logo.png",
        description: "Free coding tutorials"
      },
      {
        id: "1",
        name: "Coursera",
        url: "https://www.coursera.org/",
        icon: "imgs/coursera-logo.png",
        description: "Online courses from universities"
      },
      {
        id: "1",
        name: "Khan Academy",
        url: "https://khanacademy.org",
        icon: "imgs/khan-academy-logo.png",
        description: "Free online courses"
      }
    ]
  },
  // Code Developement & Collaboration
  {
    id: "development",
    name: "Code Developement & Collaboration",
    isExpanded: true,
    websites: [
      {
        id: "1",
        name: "GitHub",
        url: "https://github.com/",
        icon: "imgs/github-logo.png",
        description: "Largest platform for code hosting and collaboration."
      },
      {
        id: "2",
        name: "GitLab",
        url: "https://gitlab.com/",
        icon: "imgs/gitlab-logo.png",
        description: "Git-based repository management with CI/CD built in"
      },
      {
        id: "3",
        name: "Bitbucket",
        url: "https://bitbucket.org/",
        icon: "imgs/bitbucket-logo.png",
        description: "Git repository hosting service with built-in CI/CD"
      },
      {
        id: "4",
        name: "Azure DevOps",
        url: "https://portal.azure.com/#home",
        icon: "imgs/azure-logo.png",
        description: "Online code editor and sandbox for web development."
      },
      {
        id: "5",
        name: "AWS CodeSpaces",
        url: "https://console.aws.amazon.com/iam/home",
        icon: "imgs/aws-logo.png",
        description: "Online code editor and sandbox for web development."
      },
    ]
  },
  //Developement Communities
  {
    id: "communities",
    name: "Developement Communities",
    isExpanded: true,
    websites: [
      {
        id: "1",
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        icon: "imgs/stackoverflow-logo.png",
        description: "Community-driven Q&A platform for developers."
      },
      {
        id: "2",
        name: "CodeSandbox",
        url: "https://codesandbox.io/",
        icon: "imgs/codesandbox-logo.png",
        description: "Online code editor and sandbox for web development."
      },
      {
        id: "3",
        name: "CodePen",
        url: "https://codepen.io/",
        icon: "imgs/codepen-logo.png",
        description: "Online code editor and social development environment."
      },
      
    ]
  },
  //AI
  {
    id: "ai",
    name: "AI Tools",
    isExpanded: false,
    websites: [
      {
        id: "1",
        name: "ChatGPT",
        url: "https://chat.openai.com/",
        icon: "imgs/chatgpt-logo.png",
        description: "AI chatbot by OpenAI"
      },
      {
        id: "1",
        name: "Claude",
        url: "https://claude.ai/",
        icon: "imgs/claude-logo.png",
        description: "AI chatbot by OpenAI"
      },
      {
        id: "1",
        name: "Deep Seek",
        url: "https://chat.deepseek.com/",
        icon: "imgs/deepseek-logo.png",
        description: "AI chatbot by OpenAI"
      },
      {
        id: "3",
        name: "Gemini Bard",
        url: "https://gemini.google.com/",
        icon: "imgs/Gemini-Logo.png",
        description: "AI chatbot by Google"
      },
      {
        id: "2",
        name: "DALL-E",
        url: "https://openai.com/dall-e-2/",
        icon: "imgs/dall-e-logo.png",
        description: "AI image generation"
      },
      {
        id: "4",
        name: "DeepL Translator",
        url: "https://www.deepl.com/translator",
        icon: "imgs/deepl-logo.png",
        description: "AI translation service"
      }
    ]
  },
  //Productivity
  {
    id: "productivity",
    name: "Productivity",
    isExpanded: false,
    websites: [
      {
        id: "5",
        name: "Gmail",
        url: "https://gmail.com",
        icon: "imgs/gmail-logo.png",
        description: "Email management",
      },
      {
        id: "6",
        name: "Google Drive",
        url: "https://drive.google.com",
        icon: "imgs/google-drive-logo.png",
        description: "Cloud storage and docs",
      },
      {
        id: "7",
        name: "Notion",
        url: "https://notion.so",
        icon: "imgs/notion-logo.png",
        description: "All-in-one workspace",
      },
      {
        id: "8",
        name: "Slack",
        url: "https://slack.com",
        icon: "imgs/slack-logo.png",
        description: "Team communication",
      },
    ],
  },
  //News & Information
  {
    id: "news",
    name: "News & Information",
    isExpanded: false,
    websites: [
      {
        id: "9",
        name: "BBC News",
        url: "https://bbc.com/news",
        icon: "imgs/bbc-news-logo.png",
        description: "Global news coverage",
      },
      {
        id: "10",
        name: "Reddit",
        url: "https://reddit.com",
        icon: "imgs/reddit-logo.png",
        description: "Community discussions",
      },
      {
        id: "11",
        name: "Hacker News",
        url: "https://news.ycombinator.com",
        icon: "imgs/hacker-news-logo.png",
        description: "Tech news and discussions",
      },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    isExpanded: false,
    websites: [
      {
        id: "12",
        name: "YouTube",
        url: "https://youtube.com",
        icon: "imgs/youtube-logo.png",
        description: "Videos and entertainment",
      },
      {
        id: "13",
        name: "Netflix",
        url: "https://netflix.com",
        icon: "imgs/netflix-inspired-logo.png",
        description: "Movies and TV shows",
      },
      {
        id: "14",
        name: "Spotify",
        url: "https://spotify.com",
        icon: "imgs/spotify-logo.png",
        description: "Music streaming",
      },
    ],
  },
  //Chating
  {
    id: "chating",
    name: "Chatting",
    isExpanded: false,
    websites: [
      {
        id: "1",
        name: "WhatsApp",
        url: "https://web.whatsapp.com/",
        icon: "imgs/whatsapp-logo.png",
        description: "Connect with friends and family"
      },
      {
        id: "2",
        name: "Telegram",
        url: "https://web.telegram.org/",
        icon: "imgs/telegram-logo.png",
        description: "Connect with friends and family"
      },
      {
        id: "3",
        name: "Facebook Messenger",
        url: "https://www.facebook.com/messages/",
        icon: "imgs/facebook-messenger-loog.png",
        description: "Connect with friends and family"
      }
    ]
  },
  //Social Media
  {
    id: "social",
    name: "Social Media",
    isExpanded: false,
    websites: [
      {
        id: "1",
        name: "Facebook",
        url: "https://facebook.com",
        icon: "imgs/facebook-logo.png",
        description: "Connect with friends and family",
      },
      {
        id: "2",
        name: "Twitter",
        url: "https://twitter.com",
        icon: "imgs/twitter-logo.png",
        description: "Latest news and updates",
      },
      {
        id: "3",
        name: "Instagram",
        url: "https://instagram.com",
        icon: "imgs/instagram-logo.png",
        description: "Share photos and stories",
      },
      {
        id: "4",
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "imgs/linkedin-logo.png",
        description: "Professional networking",
      },
    ],
  }
]