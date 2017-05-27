$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Landing_Page_profile_cards.feature");
formatter.feature({
  "line": 1,
  "name": "Present Landing Page with profile cards",
  "description": "As a User\r\nI want to able to see the profile cards of each speaker containing their name, title, most revelant project, photo and social network links(twitter, linkedIn, facebook).\r\nSo that i get an overview of who are the speakers in the conference.",
  "id": "present-landing-page-with-profile-cards",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the name of the speaker \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;",
  "rows": [
    {
      "cells": [
        "speaker",
        "name"
      ],
      "line": 14,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Gabriel Silva"
      ],
      "line": 15,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Emanuel Silva"
      ],
      "line": 16,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;3"
    },
    {
      "cells": [
        "Luis",
        "Luis Alberto Cisneros Gómez"
      ],
      "line": 17,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1831365983,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 2388007522,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 276864326,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"Gabriel\" must be presented with the name of the speaker \"Gabriel Silva\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "Gabriel Silva",
      "offset": 82
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String,String)"
});
formatter.result({
  "duration": 890389755,
  "status": "passed"
});
formatter.after({
  "duration": 384870,
  "status": "passed"
});
formatter.before({
  "duration": 13308596,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 87357254,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 711325042,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"Emanuel\" must be presented with the name of the speaker \"Emanuel Silva\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "Emanuel Silva",
      "offset": 82
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String,String)"
});
formatter.result({
  "duration": 59988515,
  "status": "passed"
});
formatter.after({
  "duration": 360612,
  "status": "passed"
});
formatter.before({
  "duration": 16850806,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 97849995,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 711306382,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"Luis\" must be presented with the name of the speaker \"Luis Alberto Cisneros Gómez\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "Luis Alberto Cisneros Gómez",
      "offset": 79
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String,String)"
});
formatter.result({
  "duration": 61808370,
  "status": "passed"
});
formatter.after({
  "duration": 187537,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the photo of speaker \"\u003cphoto\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;",
  "rows": [
    {
      "cells": [
        "speaker",
        "photo"
      ],
      "line": 23,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;1"
    },
    {
      "cells": [
        "Gabriel",
        "gabriel.jpg"
      ],
      "line": 24,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;2"
    },
    {
      "cells": [
        "Emanuel",
        "emanuel.jpg"
      ],
      "line": 25,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;3"
    },
    {
      "cells": [
        "Luis",
        "luis.jpg"
      ],
      "line": 26,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 72648195,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 52597597,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706103863,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"Gabriel\" must be presented with the photo of speaker \"gabriel.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "gabriel.jpg",
      "offset": 79
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String,String)"
});
formatter.result({
  "duration": 3038379,
  "status": "passed"
});
formatter.after({
  "duration": 268710,
  "status": "passed"
});
formatter.before({
  "duration": 10124665,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 48918234,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704157584,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"Emanuel\" must be presented with the photo of speaker \"emanuel.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "emanuel.jpg",
      "offset": 79
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String,String)"
});
formatter.result({
  "duration": 1701362,
  "status": "passed"
});
formatter.after({
  "duration": 239786,
  "status": "passed"
});
formatter.before({
  "duration": 8700411,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 42854537,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 707596695,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"Luis\" must be presented with the photo of speaker \"luis.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "luis.jpg",
      "offset": 76
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String,String)"
});
formatter.result({
  "duration": 2275169,
  "status": "passed"
});
formatter.after({
  "duration": 1308561,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title"
      ],
      "line": 32,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Software engineer"
      ],
      "line": 33,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Computer Engineer"
      ],
      "line": 34,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;3"
    },
    {
      "cells": [
        "Luis",
        "Computational Systems Engineer"
      ],
      "line": 35,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14900328,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 42235478,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704996835,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"Gabriel\" must be presented with the \"Software engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "Software engineer",
      "offset": 62
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThe(String,String)"
});
formatter.result({
  "duration": 82650635,
  "status": "passed"
});
formatter.after({
  "duration": 238386,
  "status": "passed"
});
formatter.before({
  "duration": 10450756,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 39549314,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703584242,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"Emanuel\" must be presented with the \"Computer Engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "Computer Engineer",
      "offset": 62
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThe(String,String)"
});
formatter.result({
  "duration": 59205711,
  "status": "passed"
});
formatter.after({
  "duration": 270576,
  "status": "passed"
});
formatter.before({
  "duration": 7720273,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 35436562,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706561976,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"Luis\" must be presented with the \"Computational Systems Engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "Computational Systems Engineer",
      "offset": 59
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThe(String,String)"
});
formatter.result({
  "duration": 60402309,
  "status": "passed"
});
formatter.after({
  "duration": 221125,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the short bio like \"\u003cshort bio\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;",
  "rows": [
    {
      "cells": [
        "speaker",
        "short bio"
      ],
      "line": 41,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;1"
    },
    {
      "cells": [
        "Gabriel",
        "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#."
      ],
      "line": 42,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;2"
    },
    {
      "cells": [
        "Emanuel",
        "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming."
      ],
      "line": 43,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;3"
    },
    {
      "cells": [
        "Luis",
        "I am a full stack developer with 2 years of experience. Involving with java, javascript and php."
      ],
      "line": 44,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5845836,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 28608256,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 708800757,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"Gabriel\" must be presented with the short bio like \"I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheShortBioLike(String,String)"
});
formatter.result({
  "duration": 59836432,
  "status": "passed"
});
formatter.after({
  "duration": 200599,
  "status": "passed"
});
formatter.before({
  "duration": 5132076,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 31255233,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705961577,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"Emanuel\" must be presented with the short bio like \"I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheShortBioLike(String,String)"
});
formatter.result({
  "duration": 63625892,
  "status": "passed"
});
formatter.after({
  "duration": 208064,
  "status": "passed"
});
formatter.before({
  "duration": 5299553,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 25670643,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 707847211,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"Luis\" must be presented with the short bio like \"I am a full stack developer with 2 years of experience. Involving with java, javascript and php.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "I am a full stack developer with 2 years of experience. Involving with java, javascript and php.",
      "offset": 74
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheShortBioLike(String,String)"
});
formatter.result({
  "duration": 69144239,
  "status": "passed"
});
formatter.after({
  "duration": 380672,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented an \"\u003csocial network image\u003e\" redirecting to \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;",
  "rows": [
    {
      "cells": [
        "speaker",
        "social network image",
        "link"
      ],
      "line": 51,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;1"
    },
    {
      "cells": [
        "Emanuel",
        "fb.png",
        "https://www.facebook.com/emanuel.silva.146"
      ],
      "line": 52,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;2"
    },
    {
      "cells": [
        "Luis",
        "in.png",
        "https://www.linkedin.com/in/luiscisnerosg/"
      ],
      "line": 53,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;3"
    },
    {
      "cells": [
        "Luis",
        "fb.png",
        "https://www.facebook.com/tiko.Luis.Cisneros"
      ],
      "line": 54,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;4"
    },
    {
      "cells": [
        "Luis",
        "twitter.png",
        "https://twitter.com/TikoCisneros"
      ],
      "line": 55,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11467281,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 31735739,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706160310,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Emanuel\" must be presented an \"fb.png\" redirecting to \"https://www.facebook.com/emanuel.silva.146\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "fb.png",
      "offset": 56
    },
    {
      "val": "https://www.facebook.com/emanuel.silva.146",
      "offset": 80
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 2333483,
  "status": "passed"
});
formatter.after({
  "duration": 363878,
  "status": "passed"
});
formatter.before({
  "duration": 16284463,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 30596522,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704505600,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Luis\" must be presented an \"in.png\" redirecting to \"https://www.linkedin.com/in/luiscisnerosg/\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "in.png",
      "offset": 53
    },
    {
      "val": "https://www.linkedin.com/in/luiscisnerosg/",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 2866704,
  "status": "passed"
});
formatter.after({
  "duration": 449249,
  "status": "passed"
});
formatter.before({
  "duration": 10971847,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 38004233,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705749315,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Luis\" must be presented an \"fb.png\" redirecting to \"https://www.facebook.com/tiko.Luis.Cisneros\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "fb.png",
      "offset": 53
    },
    {
      "val": "https://www.facebook.com/tiko.Luis.Cisneros",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 2563473,
  "status": "passed"
});
formatter.after({
  "duration": 479572,
  "status": "passed"
});
formatter.before({
  "duration": 14215491,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 36654619,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704536389,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Luis\" must be presented an \"twitter.png\" redirecting to \"https://twitter.com/TikoCisneros\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "twitter.png",
      "offset": 53
    },
    {
      "val": "https://twitter.com/TikoCisneros",
      "offset": 82
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 1211526,
  "status": "passed"
});
formatter.after({
  "duration": 616726,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must not be presented an \"\u003csocial network image\u003e\" redirecting to \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;",
  "rows": [
    {
      "cells": [
        "speaker",
        "social network image",
        "link"
      ],
      "line": 61,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;1"
    },
    {
      "cells": [
        "Emanuel",
        "in.png",
        "https://www.linkedin.com/in/emanuel.silva/"
      ],
      "line": 62,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;2"
    },
    {
      "cells": [
        "Emanuel",
        "twitter.png",
        "https://twitter.com/emanuelsilva"
      ],
      "line": 63,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;3"
    },
    {
      "cells": [
        "Gabriel",
        "in.png",
        "https://www.linkedin.com/in/gabriel/"
      ],
      "line": 64,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;4"
    },
    {
      "cells": [
        "Gabriel",
        "fb.png",
        "https://www.facebook.com/gabriel.silva"
      ],
      "line": 65,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;5"
    },
    {
      "cells": [
        "Gabriel",
        "twitter.png",
        "https://twitter.com/gabrielsilva"
      ],
      "line": 66,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6960795,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 25357615,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703707402,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Emanuel\" must not be presented an \"in.png\" redirecting to \"https://www.linkedin.com/in/emanuel.silva/\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "in.png",
      "offset": 60
    },
    {
      "val": "https://www.linkedin.com/in/emanuel.silva/",
      "offset": 84
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 204873910,
  "status": "passed"
});
formatter.after({
  "duration": 400265,
  "status": "passed"
});
formatter.before({
  "duration": 10244092,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 29851972,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705603298,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Emanuel\" must not be presented an \"twitter.png\" redirecting to \"https://twitter.com/emanuelsilva\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "twitter.png",
      "offset": 60
    },
    {
      "val": "https://twitter.com/emanuelsilva",
      "offset": 89
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 201459057,
  "status": "passed"
});
formatter.after({
  "duration": 435721,
  "status": "passed"
});
formatter.before({
  "duration": 11898803,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 36745589,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705482938,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Gabriel\" must not be presented an \"in.png\" redirecting to \"https://www.linkedin.com/in/gabriel/\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "in.png",
      "offset": 60
    },
    {
      "val": "https://www.linkedin.com/in/gabriel/",
      "offset": 84
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 201770219,
  "status": "passed"
});
formatter.after({
  "duration": 703031,
  "status": "passed"
});
formatter.before({
  "duration": 11214432,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 44958030,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704681008,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Gabriel\" must not be presented an \"fb.png\" redirecting to \"https://www.facebook.com/gabriel.silva\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "fb.png",
      "offset": 60
    },
    {
      "val": "https://www.facebook.com/gabriel.silva",
      "offset": 84
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 202288978,
  "status": "passed"
});
formatter.after({
  "duration": 416127,
  "status": "passed"
});
formatter.before({
  "duration": 10696607,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 35441694,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705524458,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Gabriel\" must not be presented an \"twitter.png\" redirecting to \"https://twitter.com/gabrielsilva\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "twitter.png",
      "offset": 60
    },
    {
      "val": "https://twitter.com/gabrielsilva",
      "offset": 89
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 202093510,
  "status": "passed"
});
formatter.after({
  "duration": 292035,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 68,
      "value": "#  Scenario Outline: Landing Page - View Speaker Redirect Speaker Social Networks Links"
    },
    {
      "line": 69,
      "value": "#    And I press \"\u003csocial network\u003e\" of \"\u003cspeaker\u003e\""
    },
    {
      "line": 70,
      "value": "#    Then Open new tab and the title of page openned is \"\u003cvalue\u003e\""
    },
    {
      "line": 71,
      "value": "#"
    },
    {
      "line": 72,
      "value": "#    Examples:"
    },
    {
      "line": 73,
      "value": "#      | speaker | social network | value |"
    },
    {
      "line": 74,
      "value": "#      | Emanuel | facebook       | Emanuel Silva \\| Facebook |"
    },
    {
      "line": 75,
      "value": "#      | Luis    | linkedIn       | LinkedIn |"
    },
    {
      "line": 76,
      "value": "#      | Luis    | facebook       | Luis Alberto Cisneros Gómez \\| Facebook |"
    },
    {
      "line": 77,
      "value": "#      | Luis    | twitter        | Luis Cisneros (7!k#) (@TikoCisneros) \\| Twitter |"
    }
  ],
  "line": 79,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"\u003cspeaker\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title"
      ],
      "line": 84,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Gabriel Silva - Details Page"
      ],
      "line": 85,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Emanuel Silva - Details Page"
      ],
      "line": 86,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;3"
    },
    {
      "cells": [
        "Luis",
        "Luis Alberto Cisneros Gómez - Details Page"
      ],
      "line": 87,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6442969,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 26043384,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704020896,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"Gabriel Silva - Details Page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    }
  ],
  "location": "StepdefsLandingPage.iPressMoreInfoButtonOf(String)"
});
formatter.result({
  "duration": 1454554700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel Silva - Details Page",
      "offset": 44
    }
  ],
  "location": "StepdefsLandingPage.theDetailPageMustBePresentedWithThe(String)"
});
formatter.result({
  "duration": 325157,
  "status": "passed"
});
formatter.after({
  "duration": 499166,
  "status": "passed"
});
formatter.before({
  "duration": 10153589,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 36243625,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703823096,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"Emanuel Silva - Details Page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 29
    }
  ],
  "location": "StepdefsLandingPage.iPressMoreInfoButtonOf(String)"
});
formatter.result({
  "duration": 248366632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel Silva - Details Page",
      "offset": 44
    }
  ],
  "location": "StepdefsLandingPage.theDetailPageMustBePresentedWithThe(String)"
});
formatter.result({
  "duration": 104964,
  "status": "passed"
});
formatter.after({
  "duration": 191270,
  "status": "passed"
});
formatter.before({
  "duration": 5982990,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 30740207,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703637425,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"Luis Alberto Cisneros Gómez - Details Page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 29
    }
  ],
  "location": "StepdefsLandingPage.iPressMoreInfoButtonOf(String)"
});
formatter.result({
  "duration": 887765636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis Alberto Cisneros Gómez - Details Page",
      "offset": 44
    }
  ],
  "location": "StepdefsLandingPage.theDetailPageMustBePresentedWithThe(String)"
});
formatter.result({
  "duration": 108697,
  "status": "passed"
});
formatter.after({
  "duration": 262178,
  "status": "passed"
});
formatter.uri("PresentSpeakerDetailPage.feature");
formatter.feature({
  "line": 1,
  "name": "Present Speaker Detail Page",
  "description": "As a  User\r\nI want   to able to see the detailed information about one specific speaker (photo, working experience, education and training, projects, certifications and awards)\r\nSo that  i may know the projects and accomplishments of one specific speaker",
  "id": "present-speaker-detail-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;",
  "rows": [
    {
      "cells": [
        "speaker"
      ],
      "line": 13,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;1"
    },
    {
      "cells": [
        "Luis"
      ],
      "line": 14,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;2"
    },
    {
      "cells": [
        "Gabriel"
      ],
      "line": 15,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;3"
    },
    {
      "cells": [
        "Emanuel"
      ],
      "line": 16,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6397251,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 117899193,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701800308,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact()"
});
formatter.result({
  "duration": 86908937,
  "status": "passed"
});
formatter.after({
  "duration": 233722,
  "status": "passed"
});
formatter.before({
  "duration": 4939874,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 115742984,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 702154856,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact()"
});
formatter.result({
  "duration": 15153643,
  "status": "passed"
});
formatter.after({
  "duration": 420325,
  "status": "passed"
});
formatter.before({
  "duration": 7675021,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 107510950,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700798245,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact()"
});
formatter.result({
  "duration": 12440888,
  "status": "passed"
});
formatter.after({
  "duration": 365744,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"\u003cphoto\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;",
  "rows": [
    {
      "cells": [
        "speaker",
        "photo"
      ],
      "line": 24,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;1"
    },
    {
      "cells": [
        "Gabriel",
        "gabriel.jpg"
      ],
      "line": 25,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;2"
    },
    {
      "cells": [
        "Emanuel",
        "emanuel.jpg"
      ],
      "line": 26,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;3"
    },
    {
      "cells": [
        "Luis",
        "luis.jpg"
      ],
      "line": 27,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8372454,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"gabriel.jpg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 117046414,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701275951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gabriel.jpg",
      "offset": 47
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayThePhotoConctentIn(String)"
});
formatter.result({
  "duration": 2954874,
  "status": "passed"
});
formatter.after({
  "duration": 430588,
  "status": "passed"
});
formatter.before({
  "duration": 7952128,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"emanuel.jpg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 92705324,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701622568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emanuel.jpg",
      "offset": 47
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayThePhotoConctentIn(String)"
});
formatter.result({
  "duration": 2549011,
  "status": "passed"
});
formatter.after({
  "duration": 367609,
  "status": "passed"
});
formatter.before({
  "duration": 7352664,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"luis.jpg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 97033137,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700432502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "luis.jpg",
      "offset": 47
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayThePhotoConctentIn(String)"
});
formatter.result({
  "duration": 2997326,
  "status": "passed"
});
formatter.after({
  "duration": 435721,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"\u003cname\u003e\" of the speaker selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;",
  "rows": [
    {
      "cells": [
        "speaker",
        "name"
      ],
      "line": 35,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;1"
    },
    {
      "cells": [
        "Luis",
        "Luis Alberto Cisneros Gómez"
      ],
      "line": 36,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;2"
    },
    {
      "cells": [
        "Gabriel",
        "Gabriel Silva"
      ],
      "line": 37,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;3"
    },
    {
      "cells": [
        "Emanuel",
        "Emanuel Silva"
      ],
      "line": 38,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7811242,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"Luis Alberto Cisneros Gómez\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 119402289,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700906008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis Alberto Cisneros Gómez",
      "offset": 30
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 2911956,
  "status": "passed"
});
formatter.after({
  "duration": 499632,
  "status": "passed"
});
formatter.before({
  "duration": 7607378,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"Gabriel Silva\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 84006779,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700648029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel Silva",
      "offset": 30
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 1773204,
  "status": "passed"
});
formatter.after({
  "duration": 181939,
  "status": "passed"
});
formatter.before({
  "duration": 3841709,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"Emanuel Silva\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 73681981,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700515074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel Silva",
      "offset": 30
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 2832649,
  "status": "passed"
});
formatter.after({
  "duration": 475373,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"\u003ctitle\u003e\" of the speaker selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title"
      ],
      "line": 46,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;1"
    },
    {
      "cells": [
        "Luis",
        "Computational Systems Engineer"
      ],
      "line": 47,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;2"
    },
    {
      "cells": [
        "Gabriel",
        "Software engineer"
      ],
      "line": 48,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;3"
    },
    {
      "cells": [
        "Emanuel",
        "Computer Engineer"
      ],
      "line": 49,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9628299,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"Computational Systems Engineer\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 92561172,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 702368985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computational Systems Engineer",
      "offset": 36
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 3711553,
  "status": "passed"
});
formatter.after({
  "duration": 267310,
  "status": "passed"
});
formatter.before({
  "duration": 5620045,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"Software engineer\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 73094645,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701498010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software engineer",
      "offset": 36
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 4889958,
  "status": "passed"
});
formatter.after({
  "duration": 365277,
  "status": "passed"
});
formatter.before({
  "duration": 11744388,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"Computer Engineer\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 93380364,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701219970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Engineer",
      "offset": 36
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 2462706,
  "status": "passed"
});
formatter.after({
  "duration": 188003,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"\u003csocial network\u003e\" redirecting to \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;",
  "rows": [
    {
      "cells": [
        "speaker",
        "social network",
        "link"
      ],
      "line": 57,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;1"
    },
    {
      "cells": [
        "Emanuel",
        "facebook",
        "https://www.facebook.com/emanuel.silva.146"
      ],
      "line": 58,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;2"
    },
    {
      "cells": [
        "Luis",
        "linkedin",
        "https://www.linkedin.com/in/luiscisnerosg/"
      ],
      "line": 59,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;3"
    },
    {
      "cells": [
        "Luis",
        "facebook",
        "https://www.facebook.com/tiko.Luis.Cisneros"
      ],
      "line": 60,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;4"
    },
    {
      "cells": [
        "Luis",
        "twitter",
        "https://twitter.com/TikoCisneros"
      ],
      "line": 61,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4978128,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"facebook\" redirecting to \"https://www.facebook.com/emanuel.silva.146\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 85469288,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701433631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/emanuel.silva.146",
      "offset": 74
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 2833115,
  "status": "passed"
});
formatter.after({
  "duration": 758546,
  "status": "passed"
});
formatter.before({
  "duration": 7434302,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"linkedin\" redirecting to \"https://www.linkedin.com/in/luiscisnerosg/\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 77603464,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700698879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "linkedin",
      "offset": 48
    },
    {
      "val": "https://www.linkedin.com/in/luiscisnerosg/",
      "offset": 74
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 2596594,
  "status": "passed"
});
formatter.after({
  "duration": 362478,
  "status": "passed"
});
formatter.before({
  "duration": 7978720,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"facebook\" redirecting to \"https://www.facebook.com/tiko.Luis.Cisneros\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 69755367,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701707007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/tiko.Luis.Cisneros",
      "offset": 74
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 2480434,
  "status": "passed"
});
formatter.after({
  "duration": 334487,
  "status": "passed"
});
formatter.before({
  "duration": 8545062,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"twitter\" redirecting to \"https://twitter.com/TikoCisneros\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 73325567,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 466044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "twitter",
      "offset": 48
    },
    {
      "val": "https://twitter.com/TikoCisneros",
      "offset": 73
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 1073906,
  "status": "passed"
});
formatter.after({
  "duration": 165145,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"\u003cwork experience\u003e\" with the \"\u003cjob\u003e\" and \"\u003cactivities\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;",
  "rows": [
    {
      "cells": [
        "speaker",
        "work experience",
        "job",
        "activities"
      ],
      "line": 69,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Polytechnic of Leiria",
        "Guest assistant",
        "Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics."
      ],
      "line": 70,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Internship at the College Conciliar de Maria Immaculada - Leiria",
        "Intern",
        "Maintenance and expansion of existing computer network in college, Technical support"
      ],
      "line": 71,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;3"
    },
    {
      "cells": [
        "Luis",
        "Yachay E.P.",
        "Web programmer",
        "Development of web applications, web services, web apps."
      ],
      "line": 72,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;4"
    },
    {
      "cells": [
        "Luis",
        "Nemecis Solutions",
        "Website developer",
        "Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 73,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4050240,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Polytechnic of Leiria\" with the \"Guest assistant\" and \"Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 67217553,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701706540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polytechnic of Leiria",
      "offset": 36
    },
    {
      "val": "Guest assistant",
      "offset": 69
    },
    {
      "val": "Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.",
      "offset": 91
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 14145514,
  "status": "passed"
});
formatter.after({
  "duration": 372742,
  "status": "passed"
});
formatter.before({
  "duration": 11359517,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Internship at the College Conciliar de Maria Immaculada - Leiria\" with the \"Intern\" and \"Maintenance and expansion of existing computer network in college, Technical support\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 54490228,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701606707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internship at the College Conciliar de Maria Immaculada - Leiria",
      "offset": 36
    },
    {
      "val": "Intern",
      "offset": 112
    },
    {
      "val": "Maintenance and expansion of existing computer network in college, Technical support",
      "offset": 125
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 8128470,
  "status": "passed"
});
formatter.after({
  "duration": 364811,
  "status": "passed"
});
formatter.before({
  "duration": 7112877,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Yachay E.P.\" with the \"Web programmer\" and \"Development of web applications, web services, web apps.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 88891605,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 702411437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yachay E.P.",
      "offset": 36
    },
    {
      "val": "Web programmer",
      "offset": 59
    },
    {
      "val": "Development of web applications, web services, web apps.",
      "offset": 80
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 8735399,
  "status": "passed"
});
formatter.after({
  "duration": 329822,
  "status": "passed"
});
formatter.before({
  "duration": 8350994,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Nemecis Solutions\" with the \"Website developer\" and \"Development of static and dynamic websites (html, joomla, wordpress).\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 68361901,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700950794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nemecis Solutions",
      "offset": 36
    },
    {
      "val": "Website developer",
      "offset": 65
    },
    {
      "val": "Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 89
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 9712270,
  "status": "passed"
});
formatter.after({
  "duration": 543484,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"\u003ctitle\u003e\" , \"\u003cinstitution\u003e\" and \"\u003clevel\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title",
        "institution",
        "level"
      ],
      "line": 81,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Course of science and technology",
        "Escola Secundária Raul Proença, Caldas da Rainha, Portugal",
        "High School"
      ],
      "line": 82,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;2"
    },
    {
      "cells": [
        "Gabriel",
        "Mobile Computing",
        "Polytechnic of Leiria",
        "Master Degree"
      ],
      "line": 83,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;3"
    },
    {
      "cells": [
        "Gabriel",
        "Computer Science",
        "Polytechnic of Leiria",
        "Bachelor Degree"
      ],
      "line": 84,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;4"
    },
    {
      "cells": [
        "Emanuel",
        "Computer Science",
        "Polytechnic Institute of Leiria",
        "Bachelor Degree"
      ],
      "line": 85,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;5"
    },
    {
      "cells": [
        "Emanuel",
        "Mobile Computing",
        "Polytechnic Institute of Leiria",
        "Master Degree"
      ],
      "line": 86,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;6"
    },
    {
      "cells": [
        "Luis",
        "Computational Systems Engineer",
        "Universidad Técnica del Norte",
        "Bachelor"
      ],
      "line": 87,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8530601,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Course of science and technology\" , \"Escola Secundária Raul Proença, Caldas da Rainha, Portugal\" and \"High School\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 72154161,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 194068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Course of science and technology",
      "offset": 60
    },
    {
      "val": "Escola Secundária Raul Proença, Caldas da Rainha, Portugal",
      "offset": 97
    },
    {
      "val": "High School",
      "offset": 162
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 3992392,
  "status": "passed"
});
formatter.after({
  "duration": 170276,
  "status": "passed"
});
formatter.before({
  "duration": 3285630,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Mobile Computing\" , \"Polytechnic of Leiria\" and \"Master Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 60749393,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 182872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Computing",
      "offset": 60
    },
    {
      "val": "Polytechnic of Leiria",
      "offset": 81
    },
    {
      "val": "Master Degree",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 2531749,
  "status": "passed"
});
formatter.after({
  "duration": 174008,
  "status": "passed"
});
formatter.before({
  "duration": 3329948,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Computer Science\" , \"Polytechnic of Leiria\" and \"Bachelor Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 54000393,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701080951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Science",
      "offset": 60
    },
    {
      "val": "Polytechnic of Leiria",
      "offset": 81
    },
    {
      "val": "Bachelor Degree",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 7324206,
  "status": "passed"
});
formatter.after({
  "duration": 374141,
  "status": "passed"
});
formatter.before({
  "duration": 6874491,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Computer Science\" , \"Polytechnic Institute of Leiria\" and \"Bachelor Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 63012432,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 702111937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Science",
      "offset": 60
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 81
    },
    {
      "val": "Bachelor Degree",
      "offset": 119
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 6529274,
  "status": "passed"
});
formatter.after({
  "duration": 401665,
  "status": "passed"
});
formatter.before({
  "duration": 11260618,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Mobile Computing\" , \"Polytechnic Institute of Leiria\" and \"Master Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 57941469,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701570786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Computing",
      "offset": 60
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 81
    },
    {
      "val": "Master Degree",
      "offset": 119
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 6465828,
  "status": "passed"
});
formatter.after({
  "duration": 377874,
  "status": "passed"
});
formatter.before({
  "duration": 7721673,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Computational Systems Engineer\" , \"Universidad Técnica del Norte\" and \"Bachelor\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 60523135,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701166788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computational Systems Engineer",
      "offset": 60
    },
    {
      "val": "Universidad Técnica del Norte",
      "offset": 95
    },
    {
      "val": "Bachelor",
      "offset": 131
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5446504,
  "status": "passed"
});
formatter.after({
  "duration": 379739,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"\u003ctitle\u003e\", \"\u003cplace\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title",
        "place",
        "description"
      ],
      "line": 95,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Evolution of Virtual Creatures",
        "Polytechnic of Leiria",
        "The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine."
      ],
      "line": 96,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Silent Television",
        "Polytechnic Institute of Leiria",
        "This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices."
      ],
      "line": 97,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;3"
    },
    {
      "cells": [
        "Emanuel",
        "Smart Garden",
        "Polytechnic Institute of Leiria",
        "This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time."
      ],
      "line": 98,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;4"
    },
    {
      "cells": [
        "Luis",
        "Ibarra Tourism App",
        "Ibarra - Ecuador",
        "Android Tourism App builded with Apache Cordova and web technologies."
      ],
      "line": 99,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6512013,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Evolution of Virtual Creatures\", \"Polytechnic of Leiria\" and \"The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 60826833,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701164456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Evolution of Virtual Creatures",
      "offset": 50
    },
    {
      "val": "Polytechnic of Leiria",
      "offset": 84
    },
    {
      "val": "The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine.",
      "offset": 112
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5389123,
  "status": "passed"
});
formatter.after({
  "duration": 383005,
  "status": "passed"
});
formatter.before({
  "duration": 6810578,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Silent Television\", \"Polytechnic Institute of Leiria\" and \"This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 70000285,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700844429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silent Television",
      "offset": 50
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 71
    },
    {
      "val": "This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices.",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5764197,
  "status": "passed"
});
formatter.after({
  "duration": 391401,
  "status": "passed"
});
formatter.before({
  "duration": 7051765,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Smart Garden\", \"Polytechnic Institute of Leiria\" and \"This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 56631509,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701332866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smart Garden",
      "offset": 50
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 66
    },
    {
      "val": "This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time.",
      "offset": 104
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 2291963,
  "status": "passed"
});
formatter.after({
  "duration": 205264,
  "status": "passed"
});
formatter.before({
  "duration": 3325749,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Ibarra Tourism App\", \"Ibarra - Ecuador\" and \"Android Tourism App builded with Apache Cordova and web technologies.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 52841116,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701304409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ibarra Tourism App",
      "offset": 50
    },
    {
      "val": "Ibarra - Ecuador",
      "offset": 72
    },
    {
      "val": "Android Tourism App builded with Apache Cordova and web technologies.",
      "offset": 95
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5086358,
  "status": "passed"
});
formatter.after({
  "duration": 372275,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"\u003ccertification\u003e\" with the \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 106,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;",
  "rows": [
    {
      "cells": [
        "speaker",
        "certification",
        "description"
      ],
      "line": 107,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Workshop IBM: Big Data",
        "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours."
      ],
      "line": 108,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Workshop Cloud Computing",
        "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours."
      ],
      "line": 109,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;3"
    },
    {
      "cells": [
        "Luis",
        "Cisco IT ESSENTIALS BASIC",
        "Universidad Técnica del Norte, Academia CISCO / Enero de 2013"
      ],
      "line": 110,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;4"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: PHP Course",
        "SoloLearn Licencia 1059-593722 / February 2016"
      ],
      "line": 111,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;5"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: JavaScript Fundamentals",
        "SoloLearn Licencia 1024-593722 / February 2016"
      ],
      "line": 112,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;6"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: SQL Fundamentals",
        "SoloLearn Licencia 1060-593722 / February 2016"
      ],
      "line": 113,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;7"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: HTML Fundamentals",
        "SoloLearn Licencia 1014-593722 / February 2016"
      ],
      "line": 114,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;8"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: CSS Fundamentals",
        "SoloLearn Licencia 1023-593722 / February 2016"
      ],
      "line": 115,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;9"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: Java Course",
        "SoloLearn Licencia 1068-593722 / February 2016"
      ],
      "line": 116,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6964061,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Workshop IBM: Big Data\" with the \"Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 66562106,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700494547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Workshop IBM: Big Data",
      "offset": 36
    },
    {
      "val": "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.",
      "offset": 70
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 3683563,
  "status": "passed"
});
formatter.after({
  "duration": 382072,
  "status": "passed"
});
formatter.before({
  "duration": 7048499,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Workshop Cloud Computing\" with the \"Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 91793297,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701200376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Workshop Cloud Computing",
      "offset": 36
    },
    {
      "val": "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.",
      "offset": 72
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 4206053,
  "status": "passed"
});
formatter.after({
  "duration": 374607,
  "status": "passed"
});
formatter.before({
  "duration": 6828773,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Cisco IT ESSENTIALS BASIC\" with the \"Universidad Técnica del Norte, Academia CISCO / Enero de 2013\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 66513589,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 699844699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cisco IT ESSENTIALS BASIC",
      "offset": 36
    },
    {
      "val": "Universidad Técnica del Norte, Academia CISCO / Enero de 2013",
      "offset": 73
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 4121149,
  "status": "passed"
});
formatter.after({
  "duration": 365744,
  "status": "passed"
});
formatter.before({
  "duration": 6740602,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: PHP Course\" with the \"SoloLearn Licencia 1059-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 65134586,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701088414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: PHP Course",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1059-593722 / February 2016",
      "offset": 85
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 1747546,
  "status": "passed"
});
formatter.after({
  "duration": 210396,
  "status": "passed"
});
formatter.before({
  "duration": 3402257,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: JavaScript Fundamentals\" with the \"SoloLearn Licencia 1024-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 68335777,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700968522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: JavaScript Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1024-593722 / February 2016",
      "offset": 98
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 1999462,
  "status": "passed"
});
formatter.after({
  "duration": 172609,
  "status": "passed"
});
formatter.before({
  "duration": 4871763,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: SQL Fundamentals\" with the \"SoloLearn Licencia 1060-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 53065507,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701460689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: SQL Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1060-593722 / February 2016",
      "offset": 91
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 4058637,
  "status": "passed"
});
formatter.after({
  "duration": 402131,
  "status": "passed"
});
formatter.before({
  "duration": 6549333,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: HTML Fundamentals\" with the \"SoloLearn Licencia 1014-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 60736797,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701265222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: HTML Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1014-593722 / February 2016",
      "offset": 92
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 3924748,
  "status": "passed"
});
formatter.after({
  "duration": 342418,
  "status": "passed"
});
formatter.before({
  "duration": 6470959,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: CSS Fundamentals\" with the \"SoloLearn Licencia 1023-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 72482584,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701148594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: CSS Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1023-593722 / February 2016",
      "offset": 91
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 3872500,
  "status": "passed"
});
formatter.after({
  "duration": 369942,
  "status": "passed"
});
formatter.before({
  "duration": 6845567,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: Java Course\" with the \"SoloLearn Licencia 1068-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 370865147,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701311873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: Java Course",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1068-593722 / February 2016",
      "offset": 86
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 4010120,
  "status": "passed"
});
formatter.after({
  "duration": 610662,
  "status": "passed"
});
formatter.uri("SearchInSpeakerProfileCard.feature");
formatter.feature({
  "line": 1,
  "name": "Search in Speaker Profile",
  "description": "As a User\r\nI want to be able to search information about the speakers from each profile card\r\nSo that I can easily find information about the speakers and i can view and compare all the speakers information without be forced to open multiple detailed profile pages",
  "id": "search-in-speaker-profile",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"\u003ctag\u003e\" on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"\u003cspeaker\u003e\" content adjusts automatically with the \"\u003cinformation\u003e\" found related with the tag selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;",
  "rows": [
    {
      "cells": [
        "tag",
        "speaker",
        "information"
      ],
      "line": 15,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;1"
    },
    {
      "cells": [
        "Default",
        "Luis",
        "I am a full stack developer with 2 years of experience. Involving with java, javascript and php."
      ],
      "line": 16,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;2"
    },
    {
      "cells": [
        "Default",
        "Gabriel",
        "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#."
      ],
      "line": 17,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;3"
    },
    {
      "cells": [
        "Default",
        "Emanuel",
        "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming."
      ],
      "line": 18,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;4"
    },
    {
      "cells": [
        "Work",
        "Luis",
        "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 19,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;5"
    },
    {
      "cells": [
        "Work",
        "Emanuel",
        "Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support"
      ],
      "line": 20,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;6"
    },
    {
      "cells": [
        "Work",
        "Gabriel",
        "Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics."
      ],
      "line": 21,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;7"
    },
    {
      "cells": [
        "Education",
        "Emanuel",
        "Mobile Computing in Polytechnic Institute of Leiria. \u0026 Computer Science in Polytechnic Institute of Leiria."
      ],
      "line": 22,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;8"
    },
    {
      "cells": [
        "Education",
        "Luis",
        "Computational Systems Engineer in Universidad Técnica del Norte."
      ],
      "line": 23,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;9"
    },
    {
      "cells": [
        "Education",
        "Gabriel",
        "Mobile Computing in Polytechnic of Leiria. \u0026 Computer Science in Polytechnic of Leiria. \u0026 Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal."
      ],
      "line": 24,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;10"
    },
    {
      "cells": [
        "Relevant Projects",
        "Emanuel",
        "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... \u0026 Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo..."
      ],
      "line": 25,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;11"
    },
    {
      "cells": [
        "Relevant Projects",
        "Luis",
        "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies...."
      ],
      "line": 26,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;12"
    },
    {
      "cells": [
        "Relevant Projects",
        "Gabriel",
        "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol..."
      ],
      "line": 27,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;13"
    },
    {
      "cells": [
        "Web",
        "Luis",
        "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 28,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;14"
    },
    {
      "cells": [
        "Web",
        "Emanuel",
        "Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo..."
      ],
      "line": 29,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;15"
    },
    {
      "cells": [
        "Joomla",
        "Luis",
        "Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 30,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;16"
    },
    {
      "cells": [
        "Android",
        "Luis",
        "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies...."
      ],
      "line": 31,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6620709,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 23116034,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705747450,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Default\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"I am a full stack developer with 2 years of experience. Involving with java, javascript and php.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 72454127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "I am a full stack developer with 2 years of experience. Involving with java, javascript and php.",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1658909,
  "status": "passed"
});
formatter.after({
  "duration": 365277,
  "status": "passed"
});
formatter.before({
  "duration": 5413381,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15018822,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704766379,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Default\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 65624888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1585667,
  "status": "passed"
});
formatter.after({
  "duration": 355015,
  "status": "passed"
});
formatter.before({
  "duration": 7407711,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 20655661,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705078940,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Default\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 76474510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2107226,
  "status": "passed"
});
formatter.after({
  "duration": 348950,
  "status": "passed"
});
formatter.before({
  "duration": 6674824,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 17057937,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704481808,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Work\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 67898657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2796260,
  "status": "passed"
});
formatter.after({
  "duration": 326091,
  "status": "passed"
});
formatter.before({
  "duration": 6505482,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 19368093,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703631360,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Work\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 71537435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1563275,
  "status": "passed"
});
formatter.after({
  "duration": 363412,
  "status": "passed"
});
formatter.before({
  "duration": 6801248,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 20686450,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703643489,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Work\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 68619416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1515690,
  "status": "passed"
});
formatter.after({
  "duration": 341486,
  "status": "passed"
});
formatter.before({
  "duration": 7552330,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 23584877,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704249019,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Education\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Mobile Computing in Polytechnic Institute of Leiria. \u0026 Computer Science in Polytechnic Institute of Leiria.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 68272332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Mobile Computing in Polytechnic Institute of Leiria. \u0026 Computer Science in Polytechnic Institute of Leiria.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 4114618,
  "status": "passed"
});
formatter.after({
  "duration": 390935,
  "status": "passed"
});
formatter.before({
  "duration": 6912744,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 21460391,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705421359,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Education\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Computational Systems Engineer in Universidad Técnica del Norte.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 154079372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Computational Systems Engineer in Universidad Técnica del Norte.",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 919957,
  "status": "passed"
});
formatter.after({
  "duration": 217394,
  "status": "passed"
});
formatter.before({
  "duration": 3744676,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15226885,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703054287,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Education\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"Mobile Computing in Polytechnic of Leiria. \u0026 Computer Science in Polytechnic of Leiria. \u0026 Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 58156530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "Mobile Computing in Polytechnic of Leiria. \u0026 Computer Science in Polytechnic of Leiria. \u0026 Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2487431,
  "status": "passed"
});
formatter.after({
  "duration": 264978,
  "status": "passed"
});
formatter.before({
  "duration": 5185725,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 22547359,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704878341,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Relevant Projects\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... \u0026 Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Relevant Projects",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 63982773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... \u0026 Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2027919,
  "status": "passed"
});
formatter.after({
  "duration": 356880,
  "status": "passed"
});
formatter.before({
  "duration": 6282490,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 25962679,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704484607,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Relevant Projects\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Relevant Projects",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 66101195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1509626,
  "status": "passed"
});
formatter.after({
  "duration": 197800,
  "status": "passed"
});
formatter.before({
  "duration": 3718551,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15640213,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702045693,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Relevant Projects\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Relevant Projects",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 57510414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1555344,
  "status": "passed"
});
formatter.after({
  "duration": 307897,
  "status": "passed"
});
formatter.before({
  "duration": 6434572,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 23978612,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705109731,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Web\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 67426083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2747277,
  "status": "passed"
});
formatter.after({
  "duration": 382072,
  "status": "passed"
});
formatter.before({
  "duration": 6898750,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 26661511,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703894938,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Web\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 68012020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 766942,
  "status": "passed"
});
formatter.after({
  "duration": 201066,
  "status": "passed"
});
formatter.before({
  "duration": 3126550,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15098594,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704443087,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Joomla\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joomla",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 70583889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 990867,
  "status": "passed"
});
formatter.after({
  "duration": 239786,
  "status": "passed"
});
formatter.before({
  "duration": 4068900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15009025,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702427298,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Android\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Android",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 77866575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 3818384,
  "status": "passed"
});
formatter.after({
  "duration": 387204,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"\u003ctag\u003e\" on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"\u003cspeaker\u003e\" that dont have information and show a \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;",
  "rows": [
    {
      "cells": [
        "tag",
        "speaker",
        "message"
      ],
      "line": 38,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;1"
    },
    {
      "cells": [
        "Joomla",
        "Emanuel",
        "No information found"
      ],
      "line": 39,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;2"
    },
    {
      "cells": [
        "Joomla",
        "Gabriel",
        "No information found"
      ],
      "line": 40,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;3"
    },
    {
      "cells": [
        "Android",
        "Emanuel",
        "No information found"
      ],
      "line": 41,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;4"
    },
    {
      "cells": [
        "Android",
        "Gabriel",
        "No information found"
      ],
      "line": 42,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;5"
    },
    {
      "cells": [
        "Web",
        "Gabriel",
        "No information found"
      ],
      "line": 43,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8465289,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 16397825,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704364247,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Joomla\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Emanuel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joomla",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 66932048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1540416,
  "status": "passed"
});
formatter.after({
  "duration": 338687,
  "status": "passed"
});
formatter.before({
  "duration": 6450433,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 18723377,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703710200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Joomla\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Gabriel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joomla",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 61880213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 945616,
  "status": "passed"
});
formatter.after({
  "duration": 28364738,
  "status": "passed"
});
formatter.before({
  "duration": 3410187,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 14398830,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702539726,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Android\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Emanuel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Android",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 71528105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1445714,
  "status": "passed"
});
formatter.after({
  "duration": 352215,
  "status": "passed"
});
formatter.before({
  "duration": 6638437,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 19458130,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704482274,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Android\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Gabriel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Android",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 67242744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1457844,
  "status": "passed"
});
formatter.after({
  "duration": 353614,
  "status": "passed"
});
formatter.before({
  "duration": 6841835,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 22983079,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703741456,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Web\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Gabriel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 304415470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1698096,
  "status": "passed"
});
formatter.after({
  "duration": 396067,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"\u003ckeyword\u003e\" in the search bar on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"\u003cspeaker\u003e\" adjusts automatically with the \"\u003cinformation\u003e\" found related to the words searched",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;",
  "rows": [
    {
      "cells": [
        "keyword",
        "speaker",
        "information"
      ],
      "line": 49,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;1"
    },
    {
      "cells": [
        "Ecuador",
        "Luis",
        "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies...."
      ],
      "line": 50,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;2"
    },
    {
      "cells": [
        "game",
        "Gabriel",
        "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol..."
      ],
      "line": 51,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;3"
    },
    {
      "cells": [
        "raspberry",
        "Emanuel",
        "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w..."
      ],
      "line": 52,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7755728,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 25245186,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703995238,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"Ecuador\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"Luis\" adjusts automatically with the \"Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....\" found related to the words searched",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ecuador",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 168879868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 33
    },
    {
      "val": "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....",
      "offset": 71
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String,String)"
});
formatter.result({
  "duration": 1662641,
  "status": "passed"
});
formatter.after({
  "duration": 312095,
  "status": "passed"
});
formatter.before({
  "duration": 7301814,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 22886978,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704659548,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"game\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"Gabriel\" adjusts automatically with the \"Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...\" found related to the words searched",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "game",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 60874417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 33
    },
    {
      "val": "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...",
      "offset": 74
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String,String)"
});
formatter.result({
  "duration": 1013726,
  "status": "passed"
});
formatter.after({
  "duration": 239320,
  "status": "passed"
});
formatter.before({
  "duration": 4020850,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 20418208,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703797438,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"raspberry\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"Emanuel\" adjusts automatically with the \"Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w...\" found related to the words searched",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raspberry",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 68510718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 33
    },
    {
      "val": "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w...",
      "offset": 74
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String,String)"
});
formatter.result({
  "duration": 1475105,
  "status": "passed"
});
formatter.after({
  "duration": 327024,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"\u003ckeyword\u003e\" in the search bar on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"\u003cspeaker\u003e\" that dont have information for the keyword searched show a \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;",
  "rows": [
    {
      "cells": [
        "keyword",
        "speaker",
        "message"
      ],
      "line": 59,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;1"
    },
    {
      "cells": [
        "Ecuador",
        "Emanuel",
        "No information found"
      ],
      "line": 60,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;2"
    },
    {
      "cells": [
        "Ecuador",
        "Gabriel",
        "No information found"
      ],
      "line": 61,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;3"
    },
    {
      "cells": [
        "game",
        "Emanuel",
        "No information found"
      ],
      "line": 62,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;4"
    },
    {
      "cells": [
        "game",
        "Luis",
        "No information found"
      ],
      "line": 63,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;5"
    },
    {
      "cells": [
        "raspberry",
        "Gabriel",
        "No information found"
      ],
      "line": 64,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;6"
    },
    {
      "cells": [
        "raspberry",
        "Luis",
        "No information found"
      ],
      "line": 65,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3580931,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15576767,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704576042,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"Ecuador\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Emanuel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ecuador",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 68125848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 1506361,
  "status": "passed"
});
formatter.after({
  "duration": 358746,
  "status": "passed"
});
formatter.before({
  "duration": 6686487,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 18010083,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704199103,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"Ecuador\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Gabriel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ecuador",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 58354796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 737086,
  "status": "passed"
});
formatter.after({
  "duration": 189870,
  "status": "passed"
});
formatter.before({
  "duration": 3221717,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 14384368,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703949519,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"game\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Emanuel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "game",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 57298151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 759012,
  "status": "passed"
});
formatter.after({
  "duration": 174941,
  "status": "passed"
});
formatter.before({
  "duration": 3333214,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 14305528,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704130525,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"game\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Luis\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "game",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 61582112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 99
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 805196,
  "status": "passed"
});
formatter.after({
  "duration": 191269,
  "status": "passed"
});
formatter.before({
  "duration": 3400857,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 50472178,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702627431,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"raspberry\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Gabriel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raspberry",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 56852635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 768342,
  "status": "passed"
});
formatter.after({
  "duration": 210863,
  "status": "passed"
});
formatter.before({
  "duration": 3369134,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15912188,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704889538,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"raspberry\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Luis\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raspberry",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 59881217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 99
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 945616,
  "status": "passed"
});
formatter.after({
  "duration": 208063,
  "status": "passed"
});
});