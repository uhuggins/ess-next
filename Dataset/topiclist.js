const topiclist = [
  {
    ess_metadata: [
      {
        value: "Social Trust",
        topicByTopic: {
          icon: "fa-bars",
          ess_metadata: [
            {
              label: "Helpfulness of Others",
              value: "pplhlp",
            },
            {
              label: "Trust In People",
              value: "ppltrst",
            },
            {
              label: "Fairness",
              value: "pplfair",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Health",
        topicByTopic: {
          icon: "fa-ambulance",
          ess_metadata: [
            {
              label: "Alcohol Consumption",
              value: "alcfreq",
            },
            {
              label: "Restless Sleep",
              value: "slprl",
            },
            {
              label: "Feelings of Depression",
              value: "fltdpr",
            },
            {
              label: "Smoking Behavior",
              value: "cgtsmke",
            },
            {
              label: "General Health",
              value: "health",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Subjective Well-being",
        topicByTopic: {
          icon: "Wellbeing",
          ess_metadata: [
            {
              label: "Happiness",
              value: "happy",
            },
            {
              label: "Job Satisfaction",
              value: "stfjb",
            },
            {
              label: "Life Satisfaction",
              value: "stflife",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Economic Issues/Welfare",
        topicByTopic: {
          icon: "Economic",
          ess_metadata: [
            {
              label: "Fairness in Differences of Living Standards",
              value: "smdfslv",
            },
            {
              label: "Opinion on social benefits & equality",
              value: "sbeqsoc",
            },
            {
              label: "Social Benefits & Economy",
              value: "sbstrec",
            },
            {
              label: "Opinion on Social Benefits & Taxes",
              value: "sbbsntx",
            },
            {
              label: "Opinion on Social Benefits & Laziness",
              value: "sblazy",
            },
            {
              label: "Opinion on Social Services & Slefishness",
              value: "sblwcoa",
            },
            {
              label: "Opinion on Social services & Laziness",
              value: "sbprvpv",
            },
            {
              label: "Opinion that Income Differences are Justified",
              value: "dfincac",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Trust in Institutions",
        topicByTopic: {
          icon: "Institution",
          ess_metadata: [
            {
              label: "Trust in European Parliament",
              value: "trstep",
            },
            {
              label: "Trust in Police",
              value: "trstplc",
            },
            {
              label: "Trust in Politicians",
              value: "trstplt",
            },
            {
              label: "Trust in Legal System",
              value: "trstlgl",
            },
            {
              label: "Trust in Parliament",
              value: "trstprl",
            },
            {
              label: "Trust in the U.N.",
              value: "trstun",
            },
            {
              label: "Belief that European Unification has Gone too Far",
              value: "euftf",
            },
            {
              label: "Trust in Political Parties",
              value: "trstprt",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Political Participation & Activism",
        topicByTopic: {
          icon: "Polactive",
          ess_metadata: [
            {
              label: "Voting in last eletion",
              value: "vote",
            },
            {
              label: "Worn a Political Badge",
              value: "badge",
            },
            {
              label: "Boycott of Products",
              value: "bctprd",
            },
            {
              label: "Sign a Petition",
              value: "sgnptit",
            },
            {
              label: "Interest in Politics",
              value: "polintr",
            },
            {
              label: "Public Demonstrations",
              value: "pbldmn",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Role of Government",
        topicByTopic: {
          icon: "Gov",
          ess_metadata: [
            {
              label: "Child Care Assistance",
              value: "gvcldcr",
            },
            {
              label: "Reduce Income Difference",
              value: "gincdif",
            },
            {
              label: "Help Unemployed",
              value: "gvslvue",
            },
            {
              label: "Care for Elderly ",
              value: "gvslvol",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Satisfaction with Government",
        topicByTopic: {
          icon: "Sat",
          ess_metadata: [
            {
              label: "Satisfaction with Democracy",
              value: "stfdem",
            },
            {
              label: "Satisfaction with Economy",
              value: "stfeco",
            },
            {
              label: "Satisfaction with Health Services",
              value: "stfhlth",
            },
            {
              label: "Satisfaction with Education",
              value: "stfedu",
            },
            {
              label: "Satisfaction with Government",
              value: "stfgov",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Social Issues",
        topicByTopic: {
          icon: "Social",
          ess_metadata: [
            {
              label: "Working Women & Family",
              value: "wmcpwrk",
            },
            {
              label: "Feeling of Safety After Dark",
              value: "aesfdrk",
            },
            {
              label: "Freedom of Sexual Orientation",
              value: "freehms",
            },
            {
              label: "Men's Right to Work over Woman",
              value: "mnrgtjb",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Immigration",
        topicByTopic: {
          icon: "Immigration",
          ess_metadata: [
            {
              label: "Opinion on Immigration & Cultural Life",
              value: "imbgeco",
            },
            {
              label: "Opinion on Immigration",
              value: "imwbcnt",
            },
            {
              label: "Opinion on Immigration & Economy",
              value: "imueclt",
            },
            {
              label: "Refugeees in fear of persecution",
              value: "rfgfrpc",
            },
            {
              label: "Refugees bring family members",
              value: "rfgbfml",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Human Values",
        topicByTopic: {
          icon: "Values",
          ess_metadata: [
            {
              label: "Volunteerism",
              value: "wkvlorg",
            },
            {
              label: "Torture",
              value: "trrtort",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Religion",
        topicByTopic: {
          icon: "Religion",
          ess_metadata: [
            {
              label: "Prayer Frequency",
              value: "pray",
            },
            {
              label: "Religious Service Attendance",
              value: "rlgatnd",
            },
            {
              label: "Religiosity",
              value: "rlgdgr",
            },
            {
              label: "Religion Membership",
              value: "rlgblg",
            },
          ],
        },
      },
    ],
  },
  {
    ess_metadata: [
      {
        value: "Climate Change",
        topicByTopic: {
          icon: "Climate",
          ess_metadata: [
            {
              label: "Belief in Climate Change",
              value: "clmchng",
            },
            {
              label: "Likelihood of Climate Change Political Action",
              value: "gvsrdcc",
            },
            {
              label: "Science & Saving the Environment",
              value: "scnsenv",
            },
            {
              label: "Using public funds to subsidise wind & solar power",
              value: "sbsrnen",
            },
            {
              label: "Taxes to Reduce Climate Change",
              value: "inctxff",
            },
            {
              label: "Opinion on Cause of Climate Change",
              value: "ccnthum",
            },
          ],
        },
      },
    ],
  },
];

export default topiclist;
