// News API key

export const NEWS_API_KEY: string = '4c1caf8c03ca4b14b4b47db437b7a6e2';

// reduxsaga action consnatns

export const GET_NEWS: string = 'GET_NEWS';
export const GET_NEWS_SUCCESS: string = 'GET_NEWS_SUCCESS';
export const SET_NEWS: string = 'SET_NEWS';

export const LOADER_END: string = 'LOADER_END';
export const LOADER_BEGIN: string = 'LOADER_BEGIN';

export const BASE_URL: string = 'https://newsapi.org/';

// Screen names

export const HOME_SCREEN = 'HOME';
export const DETAIL_SCREEN = 'DETAIL';

// SAMPLE DATA SINCE THE REQUEST EXCEEDS THE NEWS API FREE PLAN

export const ARTCLES = [
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'Taiwan says dozens of Chinese planes entered defence zone',
    description:
      'Taiwan says 39 jets flew into its defence zone on Saturday, marking the largest incursion yet.',
    url: 'http://www.bbc.co.uk/news/worldasia58771369',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/18484/production/_120406499_gettyimages1176447697.jpg',
    publishedAt: '20211003T04:52:23.6542666Z',
    content:
      'Image source, Getty Images\r\nImage caption, Chinese J16 fighter jets (as seen in this archive photo doing an aerobatic manoeuvre) were involved in the incursions, Taiwan said\r\nTaiwan says a total of … [+2592 chars]',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'Hundreds evacuated as fire ravages Honduran island',
    description:
      'A major fire on Guanaja has been brought under control, after hundreds are forced to evacuate.',
    url: 'http://www.bbc.co.uk/news/worldlatinamerica58777266',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/A7CF/production/_120795924_gettyimages1235656075.jpg',
    publishedAt: '20211003T02:52:23.5890784Z',
    content:
      'A major fire on the Honduran resort island of Guanaja has been brought under control by authorities, after destroying dozens of homes and forcing hundreds of residents to evacuate. \r\nAt least three p… [+264 chars]',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'Crocodile sinks teeth into flying drone',
    description:
      "A ''croc'' leaps from the water to take down a drone in Darwin, Australia.",
    url: 'http://www.bbc.co.uk/news/world58773120',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/10AF3/production/_120793386_p09xkqnl.jpg',
    publishedAt: '20211003T00:37:28.4069309Z',
    content:
      'A crocodile leapt out of the water at a wildlife park in Darwin and sank its teeth into a low flying drone.\r\nThe Australian Broadcasting Corporation caught the moment the reptile snapped.',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'United Airlines CEO: Insisting on vaccines "right thing to do"',
    description:
      "Around 300 of the airline's 67,000 US based staff are yet to comply with the strict Covid policy.",
    url: 'http://www.bbc.co.uk/news/business58767310',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/2880/production/_120786301_gettyimages1235585087.jpg',
    publishedAt: '20211003T00:37:25.5951304Z',
    content:
      "By Jonathan JosephsBusiness reporter, BBC News\r\nImage source, Getty / Anadolu Agency\r\nImage caption, United Airlines says it will fire staff who refuse a vaccine and don't qualify for an exemption\r\nT… [+6766 chars]",
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'Tory conference: PM pledges to improve economy after Covid',
    description:
      'The fourday event begins amid a backdrop petrol shortages, and rising food and energy costs.',
    url: 'http://www.bbc.co.uk/news/ukpolitics58777034',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/74A3/production/_120795892_borisjohnsonepa.jpg',
    publishedAt: '20211003T00:22:22.8808117Z',
    content:
      'Image caption, The prime minister arrived in Manchester on Saturday for the Tories\' fourday conference\r\nBoris Johnson has pledged the Conservatives will "change and improve" the economy after Covid,… [+4343 chars]',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'Budget Ukrainian airline swaps high heels for trainers',
    description:
      "Flight attendants with Ukraine's SkyUp say the new uniform is much better for their health.",
    url: 'http://www.bbc.co.uk/news/worldeurope58755872',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/15944/production/_120788388_243405922_260444505964468_8194292005262864645_n.jpg',
    publishedAt: '20211003T00:07:26.3588579Z',
    content:
      'By Zhanna BezpiatchukBBC Ukrainian, Kyiv\r\nImage caption, The uniform is changing, but the colour remains bright orange\r\n"Twelve hours on your feet, flying to Kyiv to Zanzibar and back. If you wear hi… [+4404 chars]',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title:
      "Brazil Bolsonaro: Thousands protest calling for president's removal",
    description:
      'Demonstrations against Jair Bolsonaro take place in more than 160 towns and cities.',
    url: 'http://www.bbc.co.uk/news/worldlatinamerica58777244',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/6567/production/_120795952_mediaitem120795951.jpg',
    publishedAt: '20211002T22:07:23.1471934Z',
    content:
      "Image caption, The protests come a year ahead of the country's elections\r\nThousands of people have taken to the streets in towns and cities across Brazil to protest against the country's president Ja… [+1636 chars]",
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title:
      "Islamic Stage: Canadian accused of being 'voice behind the violence'",
    description:
      'Canadian Mohammed Khalifa, who narrated IS videos, played a key propaganda role, prosecutors say.',
    url: 'http://www.bbc.co.uk/news/worlduscanada58777274',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/B243/production/_99853654_p05w2s88.jpg',
    publishedAt: '20211002T21:52:23.9216475Z',
    content:
      'Image caption, Thousands of videos, graphics and other images have been collected together to form a growing propaganda archive\r\nA Canadian national who narrated propaganda videos for the Islamic Sta… [+1248 chars]',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: 'Thousands march across US in support of abortion rights',
    description:
      'Rallies are held in all 50 states amid fears that abortion rights are being rolled back.',
    url: 'http://www.bbc.co.uk/news/worlduscanada58774262',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/13523/production/_120793197_abortionafp1.jpg',
    publishedAt: '20211002T19:37:25.8704034Z',
    content:
      'Image caption, Protests were held from here in Los Angeles, on the west coast, to Washington DC, on the east coast\r\nTens of thousands of people are holding rallies across all 50 US states in support … [+2712 chars]',
  },
  {
    source: {
      id: 'bbcnews',
      name: 'BBC News',
    },
    author: 'BBC News',
    title: "Paris attacks: Haunting survivors' memories shake terror trial",
    description:
      'The harrowing, personal, stories of people caught up in the 2015 attacks take centre stage in Paris.',
    url: 'http://www.bbc.co.uk/news/worldeurope58759778',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/EFA5/production/_120794316_gettyimages497599296.jpg',
    publishedAt: '20211002T17:07:23.8054644Z',
    content:
      "By Hugh SchofieldBBC News, Paris\r\nImage source, Getty Images\r\nImage caption, This children's painting adorned the wall of Le Carillon bar after the 2015 attacks\r\nSurvivors of the terror attacks that … [+7543 chars]",
  },
];
