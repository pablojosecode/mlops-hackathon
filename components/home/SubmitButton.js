
const SubmitButton = ({setActive, setDescription}) => {
    // to handle file uploads
    const uploadFiles = async () => {

        setActive(true)
        // get the files from the fileList as an array
        // let files = data.fileList;
        // // initialize formData object
        // const formData = new FormData();
        // loop over files and add to formData

        // files.forEach((file) => formData.append("files", file));
        // console.log(files[0])

        const jsonObject = JSON.stringify([{
            "header": "YouTube",
            "title": "Searched for youtube",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyoutube",
            "time": "2022-12-19T06:53:14.894Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for more plates more dates",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmore+plates+more+dates",
            "time": "2022-12-19T06:20:22.368Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for \"i coded\" -minecraft",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22i+coded%22+-minecraft",
            "time": "2022-12-19T03:56:07.285Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for million token",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmillion+token",
            "time": "2022-12-18T09:15:17.252Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for bostrom",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbostrom",
            "time": "2022-12-18T09:07:14.839Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for working at nasa",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+nasa",
            "time": "2022-12-18T08:49:51.706Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for are we in a simulated heaven",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dare+we+in+a+simulated+heaven",
            "time": "2022-12-18T07:55:13.311Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        }, {
            "header": "YouTube",
            "title": "Searched for how to organize shots youtube",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+to+organize+shots+youtube",
            "time": "2022-12-18T07:34:54.697Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
        },
        {
            "header": "YouTube",
            "title": "Searched for davinci resolve newspaper sequence",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+newspaper+sequence",
            "time": "2022-12-17T19:48:13.057Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for davinci resolve newspaper headlines sequence",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+newspaper+headlines+sequence",
            "time": "2022-12-17T19:48:09.543Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for davinci resolve newspaper headlines",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+newspaper+headlines",
            "time": "2022-12-17T19:47:57.768Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"I built an\"",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22I+built+an%22",
            "time": "2022-12-17T19:07:32.100Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"I built an ai\"",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22I+built+an+ai%22",
            "time": "2022-12-17T19:07:00.943Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how to edit videos",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+to+edit+videos",
            "time": "2022-12-17T09:24:14.811Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for learning to edit",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlearning+to+edit",
            "time": "2022-12-17T09:04:28.900Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stuff built here",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstuff+built+here",
            "time": "2022-12-17T08:55:32.620Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for vanessa hudgens",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dvanessa+hudgens",
            "time": "2022-12-17T08:28:07.392Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i\u0027m sorry",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di%27m+sorry",
            "time": "2022-12-17T08:23:48.293Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for leaving",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dleaving",
            "time": "2022-12-17T08:23:27.864Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for leavig",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dleavig",
            "time": "2022-12-17T08:23:08.338Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for monica church",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmonica+church",
            "time": "2022-12-17T08:22:41.917Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ethan chlebowski",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dethan+chlebowski",
            "time": "2022-12-17T08:12:24.099Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for leaving vox",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dleaving+vox",
            "time": "2022-12-17T08:10:48.114Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for leaving vice",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dleaving+vice",
            "time": "2022-12-17T08:10:43.579Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for billionaire son",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbillionaire+son",
            "time": "2022-12-17T08:09:56.675Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mike posner ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmike+posner+",
            "time": "2022-12-17T08:09:45.954Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for feat coffeezilla ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfeat+coffeezilla+",
            "time": "2022-12-17T08:09:28.002Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for   net worth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d++net+worth",
            "time": "2022-12-17T06:48:05.267Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for caleb hammer net worth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcaleb+hammer+net+worth",
            "time": "2022-12-17T06:48:03.531Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for waking up at 4 am for a week",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dwaking+up+at+4+am+for+a+week",
            "time": "2022-12-17T06:38:55.023Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for waking up at 4am",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dwaking+up+at+4am",
            "time": "2022-12-17T06:38:46.455Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for susan wojcicki",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsusan+wojcicki",
            "time": "2022-12-17T06:38:30.201Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for caleb hammer net worth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcaleb+hammer+net+worth",
            "time": "2022-12-17T05:55:32.099Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stuff built here",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstuff+built+here",
            "time": "2022-12-16T22:55:19.984Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for monica church vlog",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmonica+church+vlog",
            "time": "2022-12-16T07:47:18.038Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for monica church",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmonica+church",
            "time": "2022-12-16T07:46:19.465Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for shelby church",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dshelby+church",
            "time": "2022-12-16T07:46:16.115Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Free Course",
            "titleUrl": "https://www.youtube.com/watch?v\u003dP5OMu_a3Zd4",
            "description": "Watched at 11:11 PM",
            "time": "2022-12-16T07:11:05.185Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for youtube",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyoutube",
            "time": "2022-12-16T06:50:14.612Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i coded a trading bot",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+coded+a+trading+bot",
            "time": "2022-12-16T06:46:45.333Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i coded an ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+coded+an+",
            "time": "2022-12-16T06:46:38.254Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i coded an",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+coded+an",
            "time": "2022-12-16T06:41:54.447Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i built a ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+built+a+",
            "time": "2022-12-16T06:41:38.660Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for feat colin and samir",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfeat+colin+and+samir",
            "time": "2022-12-16T06:36:59.900Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for jason calacanis",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djason+calacanis",
            "time": "2022-12-16T06:36:05.439Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for feat jason calacanis",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfeat+jason+calacanis",
            "time": "2022-12-16T06:35:37.702Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for feat.",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfeat.",
            "time": "2022-12-16T05:51:10.886Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for feat",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfeat",
            "time": "2022-12-16T05:51:06.432Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for airrack pizza",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dairrack+pizza",
            "time": "2022-12-16T05:44:47.917Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for making youtube videos",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmaking+youtube+videos",
            "time": "2022-12-16T04:51:04.767Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hayden hillier smith AUDIO",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhayden+hillier+smith+AUDIO",
            "time": "2022-12-16T04:26:39.396Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"VOX\"",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22VOX%22",
            "time": "2022-12-16T04:22:44.496Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for davinci resolve VOX",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+VOX",
            "time": "2022-12-16T04:13:40.611Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for davinci resolve NEWSPAPERS",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+NEWSPAPERS",
            "time": "2022-12-16T04:13:27.102Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for davinci resolve heaDLINES",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+heaDLINES",
            "time": "2022-12-16T04:13:15.879Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for davinci resolve heDLINES",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddavinci+resolve+heDLINES",
            "time": "2022-12-16T04:12:52.675Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for record scratch sound effect inerruption",
            "titleUrl": "https://www.youtube.com/results?search_query\u003drecord+scratch+sound+effect+inerruption",
            "time": "2022-12-16T02:29:50.456Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for gotham",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgotham",
            "time": "2022-12-15T20:27:44.690Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for lofi",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlofi",
            "time": "2022-12-15T20:15:32.828Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for logi",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlogi",
            "time": "2022-12-15T20:15:30.602Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i build a chess",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+build+a+chess",
            "time": "2022-12-15T20:12:39.640Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"i built an ai music",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22i+built+an+ai+music",
            "time": "2022-12-15T20:07:29.250Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"i built an\" ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22i+built+an%22+",
            "time": "2022-12-15T20:07:15.473Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"i built an\"__",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%22i+built+an%22__",
            "time": "2022-12-15T20:07:12.863Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i built an__",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+built+an__",
            "time": "2022-12-15T20:07:08.688Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin bieber",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+bieber",
            "time": "2022-12-15T09:47:48.381Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for coffeezilla shark tank",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcoffeezilla+shark+tank",
            "time": "2022-12-15T06:23:27.058Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for monica church",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmonica+church",
            "time": "2022-12-15T05:18:18.651Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for money",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoney",
            "time": "2022-12-15T05:18:14.998Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for finance",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfinance",
            "time": "2022-12-15T05:18:02.995Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for the plain bagel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dthe+plain+bagel",
            "time": "2022-12-15T05:14:46.689Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for spencer cornelia",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dspencer+cornelia",
            "time": "2022-12-15T03:59:02.021Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for limits of technology podcast",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlimits+of+technology+podcast",
            "time": "2022-12-14T06:17:02.392Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for the thinning",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dthe+thinning",
            "time": "2022-12-14T06:15:11.832Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Part Time Youtuber Academy",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dPart+Time+Youtuber+Academy",
            "time": "2022-12-14T05:13:12.694Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ptya ali abdaal",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dptya+ali+abdaal",
            "time": "2022-12-14T05:12:17.907Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dboyd",
            "time": "2022-12-14T03:36:32.587Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how does jasper work",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+does+jasper+work",
            "time": "2022-12-14T03:31:52.923Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for cofeezila on grifters",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcofeezila+on+grifters",
            "time": "2022-12-14T02:37:01.422Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for lex fridman clips grifters",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlex+fridman+clips+grifters",
            "time": "2022-12-14T02:36:39.706Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for lex fridman clips",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlex+fridman+clips",
            "time": "2022-12-14T02:36:31.610Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for CockPunch",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dCockPunch",
            "time": "2022-12-14T02:18:20.061Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Black Shirt",
            "titleUrl": "https://www.youtube.com/watch?v\u003dPai_JaMBTAQ",
            "description": "Watched at 2:15 PM",
            "time": "2022-12-13T22:15:51.428Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Spin off - Direct Callout Only",
            "titleUrl": "https://www.youtube.com/watch?v\u003dsL1ehYhidbc",
            "description": "Watched at 11:34 PM\nWatched at 11:19 PM\nWatched at 11:03 PM",
            "time": "2022-12-13T07:34:19.032Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ramit sethi",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dramit+sethi",
            "time": "2022-12-13T07:33:12.049Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Driver Love",
            "titleUrl": "https://www.youtube.com/watch?v\u003djE-Ho0QWpbM",
            "description": "Watched at 11:31 PM",
            "time": "2022-12-13T07:31:27.251Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Pirate Ship - Quicksand",
            "titleUrl": "https://www.youtube.com/watch?v\u003d9L-C0FyoyXE",
            "description": "Watched at 11:27 PM",
            "time": "2022-12-13T07:27:55.764Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for michael reeves",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmichael+reeves",
            "time": "2022-12-13T07:24:59.866Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched | Fiverr Stop Pitching Sub 40s",
            "titleUrl": "https://www.youtube.com/watch?v\u003dbOSSfMXKxuI",
            "description": "Watched at 11:19 PM",
            "time": "2022-12-13T07:19:28.082Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Expand Your Team 45 sec Rayno_v2 | Fiverr",
            "titleUrl": "https://www.youtube.com/watch?v\u003dSZrHag4PLL4",
            "description": "Watched at 11:08 PM",
            "time": "2022-12-13T07:08:34.608Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched This is Wix",
            "titleUrl": "https://www.youtube.com/watch?v\u003d-LDZyoBx6k4",
            "description": "Watched at 10:57 PM",
            "time": "2022-12-13T06:57:41.587Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mkbhd colin and samir",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmkbhd+colin+and+samir",
            "time": "2022-12-13T04:01:12.121Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Build brand love with powerful marketing tools designed to help your business grow.",
            "titleUrl": "https://www.youtube.com/watch?v\u003dnAfRwaU3PVY",
            "description": "Watched at 6:11 PM",
            "time": "2022-12-13T02:11:34.367Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for deep dive with ali abdaal",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddeep+dive+with+ali+abdaal",
            "time": "2022-12-13T01:17:56.091Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for simone giertz",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsimone+giertz",
            "time": "2022-12-13T01:15:41.954Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for matt tran",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmatt+tran",
            "time": "2022-12-12T06:05:51.972Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for enginerred truth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003denginerred+truth",
            "time": "2022-12-12T06:04:39.281Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan business partner",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan+business+partner",
            "time": "2022-12-12T05:40:49.969Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ali abdaal ptya",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dali+abdaal+ptya",
            "time": "2022-12-11T21:24:45.133Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how long can we innovate",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+long+can+we+innovate",
            "time": "2022-12-11T02:14:00.111Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at nyt",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+nyt",
            "time": "2022-12-11T01:49:22.138Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Bluehost eCommerce Solution - Go Big With Bluehost",
            "titleUrl": "https://www.youtube.com/watch?v\u003doa5fEYcoMvU",
            "description": "Watched at 5:27 PM",
            "time": "2022-12-11T01:27:51.172Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched YouTube_Whatever_30s_la.EN_cc.Global",
            "titleUrl": "https://www.youtube.com/watch?v\u003dxK7w_BA9S_E",
            "description": "Watched at 5:24 PM",
            "time": "2022-12-11T01:24:19.391Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Artlist Is How You Make Videos Today",
            "titleUrl": "https://www.youtube.com/watch?v\u003dk7z-jqfoD2g",
            "description": "Watched at 5:21 PM",
            "time": "2022-12-11T01:21:05.837Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Got an Idea for a Business? Bring It to Life with Shopify\u0027s All-in-One E-commerce Platform! (EN,NA)",
            "titleUrl": "https://www.youtube.com/watch?v\u003dCkPilnJ1Zrg",
            "description": "Watched at 5:18 PM",
            "time": "2022-12-11T01:18:20.281Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for colin and samir studio",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcolin+and+samir+studio",
            "time": "2022-12-10T09:28:16.009Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for los angeles",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlos+angeles",
            "time": "2022-12-10T08:55:10.578Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for music",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmusic",
            "time": "2022-12-10T08:14:31.081Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for #investing",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%23investing",
            "time": "2022-12-10T04:46:58.415Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for simulation theory",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsimulation+theory",
            "time": "2022-12-10T03:44:22.122Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched 31822 HOOK NONE + Q\u0026A 1 + END BOOK CALL WITH WRONG TEXT + SUBS",
            "titleUrl": "https://www.youtube.com/watch?v\u003d41-GH-aJnKw",
            "description": "Watched at 11:03 AM",
            "time": "2022-12-09T19:03:05.389Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Hero Ad + Alt Intro 1",
            "titleUrl": "https://www.youtube.com/watch?v\u003dlMhSyQFr9PY",
            "description": "Watched at 1:00 AM",
            "time": "2022-12-09T09:00:25.535Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for allen pan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dallen+pan",
            "time": "2022-12-09T09:00:22.358Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for snake video",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsnake+video",
            "time": "2022-12-09T09:00:15.647Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for pewdiepie",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpewdiepie",
            "time": "2022-12-09T09:00:00.914Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched new ad original 2 0",
            "titleUrl": "https://www.youtube.com/watch?v\u003d3e0R44z7dQY",
            "description": "Watched at 12:57 AM",
            "time": "2022-12-09T08:57:16.019Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched MC22Q4 NowYouCampaign 30 Yellow YT 2for1 General Mono YT",
            "titleUrl": "https://www.youtube.com/watch?v\u003dEDw49dQRebc",
            "description": "Watched at 12:53 AM",
            "time": "2022-12-09T08:53:39.511Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched AffordabilityOffer TgtDeals06NOCAT EL 6 NA SFV V1 QDAF0033077H",
            "titleUrl": "https://www.youtube.com/watch?v\u003d8tscQEUlcaU",
            "description": "Watched at 12:50 AM",
            "time": "2022-12-09T08:50:26.049Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Build. Manage. Grow. | Wix eCommerce",
            "titleUrl": "https://www.youtube.com/watch?v\u003dH3Uk9WAOI08",
            "description": "Watched at 12:45 AM",
            "time": "2022-12-09T08:45:09.087Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched 30DCC | TOFU | CR16 | 1:30",
            "titleUrl": "https://www.youtube.com/watch?v\u003dXvZVAuTCYUg",
            "description": "Watched at 12:34 AM",
            "time": "2022-12-09T08:34:28.157Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how i sold my company",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+i+sold+my+company",
            "time": "2022-12-09T08:34:05.543Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Build Anything You Want with Wix | Wix.com",
            "titleUrl": "https://www.youtube.com/watch?v\u003drxN8Iuo28oQ",
            "description": "Watched at 12:22 AM",
            "time": "2022-12-09T08:22:11.291Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Where Teams Coordinate Work",
            "titleUrl": "https://www.youtube.com/watch?v\u003d-PcVoWrb3s0",
            "description": "Watched at 12:14 AM",
            "time": "2022-12-09T08:14:39.160Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Record Audio \u0026 Video Locally in the Highest Quality Possible with Riverside | Zoom",
            "titleUrl": "https://www.youtube.com/watch?v\u003dj_SSRsnF6bg",
            "description": "Watched at 12:14 AM",
            "time": "2022-12-09T08:14:37.491Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Known Sale",
            "titleUrl": "https://www.youtube.com/watch?v\u003dKRIF3dS_Owo",
            "description": "Watched at 12:09 AM",
            "time": "2022-12-09T08:09:43.884Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Wix Sites Are Faster than Ever | Wix Performance",
            "titleUrl": "https://www.youtube.com/watch?v\u003dEwZV8pqltxM",
            "description": "Watched at 12:07 AM",
            "time": "2022-12-09T08:07:07.460Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for j laser video",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dj+laser+video",
            "time": "2022-12-08T09:14:56.357Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mike boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmike+boyd",
            "time": "2022-12-08T07:39:38.123Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mik",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmik",
            "time": "2022-12-08T07:39:33.354Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tom boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtom+boyd",
            "time": "2022-12-08T07:39:22.564Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stole",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstole",
            "time": "2022-12-08T07:39:09.747Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moon sporting event",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoon+sporting+event",
            "time": "2022-12-08T07:28:42.648Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moin sporting event",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoin+sporting+event",
            "time": "2022-12-08T07:28:35.014Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mon sporting event",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmon+sporting+event",
            "time": "2022-12-08T07:28:25.215Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for youtube wrapped",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyoutube+wrapped",
            "time": "2022-12-07T03:42:42.178Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Riverside - Record Podcasts \u0026 Video Interviews From Anywhere",
            "titleUrl": "https://www.youtube.com/watch?v\u003dmujUOKWQzC8",
            "description": "Watched at 6:04 PM",
            "time": "2022-12-07T02:04:43.348Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for How Much Money A Podcast",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dHow+Much+Money+A+Podcast",
            "time": "2022-12-06T07:51:33.546Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for beehiiv",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbeehiiv",
            "time": "2022-12-06T07:51:02.361Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for beulr shark tank",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbeulr+shark+tank",
            "time": "2022-12-06T07:42:21.601Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mark cuban Breathometer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmark+cuban+Breathometer",
            "time": "2022-12-06T07:35:23.877Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for dude perfect",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddude+perfect",
            "time": "2022-12-06T06:51:17.296Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at twitter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+twitter",
            "time": "2022-12-06T04:47:56.277Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for h3h3 podcast",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dh3h3+podcast",
            "time": "2022-12-05T06:28:50.711Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for picking a cofounder",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpicking+a+cofounder",
            "time": "2022-12-05T06:25:05.001Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i\u0027m sorry",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di%27m+sorry",
            "time": "2022-12-05T04:28:30.865Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for im sorry",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dim+sorry",
            "time": "2022-12-05T04:28:10.474Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for patreon",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpatreon",
            "time": "2022-12-04T23:16:46.256Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mai pham",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmai+pham",
            "time": "2022-12-04T23:01:20.648Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Charlotte V4 Hook 2",
            "titleUrl": "https://www.youtube.com/watch?v\u003dyxnsjiQCRRg",
            "description": "Watched at 11:24 AM",
            "time": "2022-12-04T19:24:29.781Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hack job wired",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhack+job+wired",
            "time": "2022-12-04T08:08:45.366Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hack job",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhack+job",
            "time": "2022-12-04T08:08:34.809Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for first employee startup",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfirst+employee+startup",
            "time": "2022-12-04T06:27:36.967Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Cockpunch",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dCockpunch",
            "time": "2022-12-04T06:14:57.145Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for   real butter robot",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d++real+butter+robot",
            "time": "2022-12-04T06:10:22.535Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for   butter robot",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d++butter+robot",
            "time": "2022-12-04T06:09:19.140Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for lex fridman butter robot",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlex+fridman+butter+robot",
            "time": "2022-12-04T06:09:10.072Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for millennial money",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmillennial+money",
            "time": "2022-12-04T05:49:54.273Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for meet kevin leaving  ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmeet+kevin+leaving++",
            "time": "2022-12-04T05:49:50.562Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for meet kevin leaving youtube",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmeet+kevin+leaving+youtube",
            "time": "2022-12-04T05:49:48.911Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for lucid motors",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlucid+motors",
            "time": "2022-12-04T05:08:59.825Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ai usinesses",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dai+usinesses",
            "time": "2022-12-04T04:47:03.796Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for liver king",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dliver+king",
            "time": "2022-12-04T04:11:58.584Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for all in podcast",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dall+in+podcast",
            "time": "2022-12-04T01:55:30.569Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for myth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmyth",
            "time": "2022-12-04T01:17:39.372Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for what do software engineers do all day",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dwhat+do+software+engineers+do+all+day",
            "time": "2022-12-04T00:30:08.615Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for linq card",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlinq+card",
            "time": "2022-12-04T00:11:47.025Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for scott shafer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dscott+shafer",
            "time": "2022-12-03T23:51:37.482Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched The platform where everyone manages work, their way | monday.com",
            "titleUrl": "https://www.youtube.com/watch?v\u003dwko93JCYwKk",
            "description": "Watched at 3:09 PM",
            "time": "2022-12-03T23:09:37.766Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Become a Software Engineer while living your life",
            "titleUrl": "https://www.youtube.com/watch?v\u003dvLmEz5nn9-4",
            "description": "Watched at 2:26 PM",
            "time": "2022-12-03T22:26:29.193Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched The Immerse Manifesto (Abridged) - Live VR Language Learning",
            "titleUrl": "https://www.youtube.com/watch?v\u003dszd3unENjyY",
            "description": "Watched at 2:26 PM",
            "time": "2022-12-03T22:26:25.242Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for jack selby",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djack+selby",
            "time": "2022-12-03T07:29:36.669Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tom scott wveform",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtom+scott+wveform",
            "time": "2022-12-03T07:21:49.871Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hank green",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhank+green",
            "time": "2022-12-03T07:03:30.697Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for rhett and link",
            "titleUrl": "https://www.youtube.com/results?search_query\u003drhett+and+link",
            "time": "2022-12-03T05:56:17.962Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ai companies",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dai+companies",
            "time": "2022-12-03T05:35:01.448Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for best   startups",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbest+++startups",
            "time": "2022-12-03T04:28:13.170Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for best new startups",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbest+new+startups",
            "time": "2022-12-03T04:26:15.329Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for sam bankman-fried",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsam+bankman-fried",
            "time": "2022-12-03T04:11:33.744Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ai startups",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dai+startups",
            "time": "2022-12-03T04:04:48.157Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for state of ai",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstate+of+ai",
            "time": "2022-12-03T04:04:25.831Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for anker ltt",
            "titleUrl": "https://www.youtube.com/results?search_query\u003danker+ltt",
            "time": "2022-12-03T03:24:55.657Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for anker",
            "titleUrl": "https://www.youtube.com/results?search_query\u003danker",
            "time": "2022-12-03T03:24:45.659Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for doug demuro",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddoug+demuro",
            "time": "2022-12-03T03:23:20.184Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for living forever",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dliving+forever",
            "time": "2022-12-02T06:55:36.840Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for musk podcast",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmusk+podcast",
            "time": "2022-12-02T06:45:09.246Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for \"12ft.io\"",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d%2212ft.io%22",
            "time": "2022-12-02T06:42:35.129Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for 12ft.io",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d12ft.io",
            "time": "2022-12-02T06:42:27.227Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for 12ft.io this week in startups",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d12ft.io+this+week+in+startups",
            "time": "2022-12-02T06:40:21.267Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc accepted",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+accepted",
            "time": "2022-12-02T05:45:19.285Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc w23",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+w23",
            "time": "2022-12-02T05:41:53.102Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for constitution dao",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dconstitution+dao",
            "time": "2022-12-02T05:17:08.398Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for dying",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddying",
            "time": "2022-12-02T05:00:53.860Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for primeagen netflix",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dprimeagen+netflix",
            "time": "2022-12-02T04:54:58.402Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for building spotify wrapped ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbuilding+spotify+wrapped+",
            "time": "2022-12-02T04:52:49.330Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc w23 accepted",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+w23+accepted",
            "time": "2022-12-02T04:43:05.756Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc w23",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+w23",
            "time": "2022-12-02T04:42:55.433Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc s22",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+s22",
            "time": "2022-12-02T04:42:42.254Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc s21",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+s21",
            "time": "2022-12-02T04:42:38.610Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yc s2",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyc+s2",
            "time": "2022-12-02T04:42:36.081Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for sam harris jordan peterson",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsam+harris+jordan+peterson",
            "time": "2022-12-02T04:14:20.294Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched 10XMP | BG-Black \u0026 Grant | How I started biz in 90 days | Free Workshop | MG",
            "titleUrl": "https://www.youtube.com/watch?v\u003dPFeYe3DBRXU",
            "description": "Watched at 11:33 PM",
            "time": "2022-12-01T07:33:49.609Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Make this year more efficient with monday.com",
            "titleUrl": "https://www.youtube.com/watch?v\u003d2Q2lFj3KsBU",
            "description": "Watched at 11:30 PM",
            "time": "2022-12-01T07:30:47.222Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Create a Logo that Best Reflects Your Brand | Wix Logo Maker",
            "titleUrl": "https://www.youtube.com/watch?v\u003dspD09_W6lPg",
            "description": "Watched at 11:26 PM",
            "time": "2022-12-01T07:26:52.180Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Wish you could be a Lead Engineer at Google?",
            "titleUrl": "https://www.youtube.com/watch?v\u003dhpg5Rq_TXDw",
            "description": "Watched at 11:21 PM",
            "time": "2022-12-01T07:21:27.588Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for joma quit",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djoma+quit",
            "time": "2022-12-01T07:19:49.955Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Everyday, hundreds of businesses get their first sale on Shopify - the next could be you! (ENNA)",
            "titleUrl": "https://www.youtube.com/watch?v\u003dilZM-ULwQu8",
            "description": "Watched at 11:17 PM",
            "time": "2022-12-01T07:17:55.464Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Julia Dancewear",
            "titleUrl": "https://www.youtube.com/watch?v\u003d30Oi2SRKPwM",
            "description": "Watched at 11:06 PM",
            "time": "2022-12-01T07:06:14.209Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for thiel fellowship",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dthiel+fellowship",
            "time": "2022-12-01T06:57:09.463Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for solo founder",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsolo+founder",
            "time": "2022-12-01T06:56:34.904Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched AI Bootcamp Caltech Script 2.1 (Person on Camera) | Desktop",
            "titleUrl": "https://www.youtube.com/watch?v\u003dgZLKlpuX53c",
            "description": "Watched at 10:41 PM",
            "time": "2022-12-01T06:41:42.983Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for solo founder",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsolo+founder",
            "time": "2022-12-01T06:09:26.820Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ycc application accepted",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dycc+application+accepted",
            "time": "2022-12-01T05:45:29.721Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for These Are The People Drugs Take At Festivals | Shambhala 2022",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dThese+Are+The+People+Drugs+Take+At+Festivals+%7C+Shambhala+2022",
            "time": "2022-12-01T03:40:43.377Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how to prepare for performance review faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+to+prepare+for+performance+review+faang",
            "time": "2022-11-30T03:21:55.502Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how to prepare for performance review",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+to+prepare+for+performance+review",
            "time": "2022-11-30T03:21:47.363Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Day in the Life of a Forward Member",
            "titleUrl": "https://www.youtube.com/watch?v\u003d_h8QvIoSTsE",
            "description": "Watched at 9:59 PM",
            "time": "2022-11-29T05:59:11.587Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for fiverr ai",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfiverr+ai",
            "time": "2022-11-29T05:52:27.136Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched | Fiverr Jimmy App Development 15s",
            "titleUrl": "https://www.youtube.com/watch?v\u003deO-IjA4F_Ho",
            "description": "Watched at 9:51 PM",
            "time": "2022-11-29T05:51:18.515Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for fiverr",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfiverr",
            "time": "2022-11-29T05:50:54.672Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for future of fiverr",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfuture+of+fiverr",
            "time": "2022-11-29T05:50:48.698Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-29T05:18:59.228Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched AI Bootcamp Caltech Script 2.1 (Person on Camera) | Desktop",
            "titleUrl": "https://www.youtube.com/watch?v\u003dgZLKlpuX53c",
            "description": "Watched at 8:47 PM",
            "time": "2022-11-29T04:47:07.026Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for demo day",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddemo+day",
            "time": "2022-11-28T06:42:35.746Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-28T06:42:31.247Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i want you",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+want+you",
            "time": "2022-11-28T00:19:41.043Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i want to be with you song",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+want+to+be+with+you+song",
            "time": "2022-11-28T00:18:51.684Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i want to be with you",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+want+to+be+with+you",
            "time": "2022-11-28T00:18:32.673Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stephen bridges",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstephen+bridges",
            "time": "2022-11-27T23:36:12.363Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Don\u0027t Get Frustrated! Use Shopify\u0027s Professional Website Templates to Create Your Store (EN,NA)",
            "titleUrl": "https://www.youtube.com/watch?v\u003dod9swo0kAzQ",
            "description": "Watched at 2:39 PM",
            "time": "2022-11-27T22:39:29.341Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched LD-013122-Jan-22-Zenith-New-VO-mini-scrip#1-AD#2-HOOK#2",
            "titleUrl": "https://www.youtube.com/watch?v\u003df79Pk0i132o",
            "description": "Watched at 2:35 PM",
            "time": "2022-11-27T22:35:33.536Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stephen bridges",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstephen+bridges",
            "time": "2022-11-27T07:08:26.998Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for attending y combinator",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dattending+y+combinator",
            "time": "2022-11-27T06:34:20.318Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for millennial money",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmillennial+money",
            "time": "2022-11-27T06:01:20.364Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for surgeon salary",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsurgeon+salary",
            "time": "2022-11-27T06:00:00.579Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for jeremy financial education",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djeremy+financial+education",
            "time": "2022-11-27T05:30:09.547Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for aws professional",
            "titleUrl": "https://www.youtube.com/results?search_query\u003daws+professional",
            "time": "2022-11-27T04:38:28.598Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for two minute papers voice cloning",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtwo+minute+papers+voice+cloning",
            "time": "2022-11-27T04:34:22.234Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for principal engineer interview",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dprincipal+engineer+interview",
            "time": "2022-11-26T08:42:20.791Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for principal engineer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dprincipal+engineer",
            "time": "2022-11-26T08:42:14.444Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for shelby church",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dshelby+church",
            "time": "2022-11-26T08:05:36.759Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for fundig stage",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfundig+stage",
            "time": "2022-11-26T08:03:08.914Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for netflix aws",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnetflix+aws",
            "time": "2022-11-26T05:32:23.030Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for private equity",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dprivate+equity",
            "time": "2022-11-26T04:45:11.578Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for private equity documentary",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dprivate+equity+documentary",
            "time": "2022-11-26T04:45:10.180Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for aws solutions architect professional",
            "titleUrl": "https://www.youtube.com/results?search_query\u003daws+solutions+architect+professional",
            "time": "2022-11-26T03:38:05.959Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for this week in startups y combinator",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dthis+week+in+startups+y+combinator",
            "time": "2022-11-26T03:30:28.110Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for funding round ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfunding+round+",
            "time": "2022-11-26T03:22:03.634Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for series a",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dseries+a",
            "time": "2022-11-26T03:21:52.378Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how to recruit cofounder",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+to+recruit+cofounder",
            "time": "2022-11-26T03:15:15.407Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how to recruit founders",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+to+recruit+founders",
            "time": "2022-11-26T03:15:10.390Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for a16z founders",
            "titleUrl": "https://www.youtube.com/results?search_query\u003da16z+founders",
            "time": "2022-11-26T03:14:56.088Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for a16z funds",
            "titleUrl": "https://www.youtube.com/results?search_query\u003da16z+funds",
            "time": "2022-11-26T03:14:51.832Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for a16z",
            "titleUrl": "https://www.youtube.com/results?search_query\u003da16z",
            "time": "2022-11-26T03:14:42.953Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for milestone based funding",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmilestone+based+funding",
            "time": "2022-11-26T03:14:27.995Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for milestone funding",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmilestone+funding",
            "time": "2022-11-26T03:14:19.587Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for learning cloud computing",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlearning+cloud+computing",
            "time": "2022-11-26T02:30:31.828Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for earning the cloud",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dearning+the+cloud",
            "time": "2022-11-26T02:30:25.037Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for aws intro",
            "titleUrl": "https://www.youtube.com/results?search_query\u003daws+intro",
            "time": "2022-11-26T01:37:46.960Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for express js",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dexpress+js",
            "time": "2022-11-26T01:26:19.911Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for adam neumann flow",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dadam+neumann+flow",
            "time": "2022-11-25T23:43:06.931Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for cicero",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcicero",
            "time": "2022-11-25T23:35:04.711Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for established titles scam",
            "titleUrl": "https://www.youtube.com/results?search_query\u003destablished+titles+scam",
            "time": "2022-11-25T23:23:12.635Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for veritasium is wrong",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dveritasium+is+wrong",
            "time": "2022-11-25T23:22:33.976Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for personal finance youtubers",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpersonal+finance+youtubers",
            "time": "2022-11-25T23:03:16.571Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for personal finance how money w",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpersonal+finance+how+money+w",
            "time": "2022-11-25T22:52:48.083Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for bootstraping vc sunday",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbootstraping+vc+sunday",
            "time": "2022-11-25T22:40:20.351Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for vc sundqy schoool",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dvc+sundqy+schoool",
            "time": "2022-11-25T08:05:08.112Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ali abdaal issue",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dali+abdaal+issue",
            "time": "2022-11-25T07:21:06.620Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for  nathaniel drew",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d+nathaniel+drew",
            "time": "2022-11-25T06:48:29.667Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for vc school",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dvc+school",
            "time": "2022-11-24T23:55:46.403Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stable diffusion",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstable+diffusion",
            "time": "2022-11-24T07:28:12.812Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for selling calendars on etsy",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dselling+calendars+on+etsy",
            "time": "2022-11-24T07:16:37.572Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for stable diffusion",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstable+diffusion",
            "time": "2022-11-24T06:52:44.904Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for smart boxing gloves",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsmart+boxing+gloves",
            "time": "2022-11-24T06:05:21.167Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for HenryBelcaster",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dHenryBelcaster",
            "time": "2022-11-24T05:26:28.044Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for apple vr",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dapple+vr",
            "time": "2022-11-24T02:47:01.280Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tom brady ftx",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtom+brady+ftx",
            "time": "2022-11-23T06:32:40.326Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for growth tactics startup",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgrowth+tactics+startup",
            "time": "2022-11-23T06:28:08.689Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for gas app my first ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgas+app+my+first+",
            "time": "2022-11-23T06:20:15.502Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Paul Davison",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dPaul+Davison",
            "time": "2022-11-23T06:19:02.599Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for clubhouse ceo",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dclubhouse+ceo",
            "time": "2022-11-23T06:18:45.250Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tim ferriss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtim+ferriss",
            "time": "2022-11-23T05:53:00.314Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for binging with babish",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbinging+with+babish",
            "time": "2022-11-23T05:52:41.661Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tiger 21",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtiger+21",
            "time": "2022-11-23T02:32:32.571Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ted talks",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dted+talks",
            "time": "2022-11-23T02:32:08.008Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for this week in startups bob chapek",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dthis+week+in+startups+bob+chapek",
            "time": "2022-11-22T04:59:07.799Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for garry tan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgarry+tan",
            "time": "2022-11-22T04:55:33.888Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for marques brownlee car channel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmarques+brownlee+car+channel",
            "time": "2022-11-22T04:12:25.586Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for marques brownlee car",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmarques+brownlee+car",
            "time": "2022-11-22T04:12:21.294Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for marques brownlee",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmarques+brownlee",
            "time": "2022-11-22T04:12:08.686Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-22T04:11:22.349Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for andrew tate￼",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dandrew+tate%EF%BF%BC",
            "time": "2022-11-22T04:10:49.704Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for netflix tech",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnetflix+tech",
            "time": "2022-11-21T05:26:04.936Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for lockpickinglawyer electronic door lock",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlockpickinglawyer+electronic+door+lock",
            "time": "2022-11-21T05:12:08.706Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for michelle khare",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmichelle+khare",
            "time": "2022-11-21T02:08:57.140Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-21T02:08:48.245Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Kurzkegasgt ion",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dKurzkegasgt+ion",
            "time": "2022-11-20T20:39:41.595Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for skate playtest",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dskate+playtest",
            "time": "2022-11-20T20:17:53.794Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for paddy galloway",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpaddy+galloway",
            "time": "2022-11-20T20:00:20.632Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for l7",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dl7",
            "time": "2022-11-20T18:32:49.499Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dboyd",
            "time": "2022-11-20T07:49:14.919Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for twitter sf",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtwitter+sf",
            "time": "2022-11-20T07:21:07.604Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for twitter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtwitter",
            "time": "2022-11-20T07:21:02.804Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for musk aarthi",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmusk+aarthi",
            "time": "2022-11-20T07:19:03.725Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mark zuckerberg musk",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmark+zuckerberg+musk",
            "time": "2022-11-20T07:18:54.600Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mark zuckerberg aarthi",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmark+zuckerberg+aarthi",
            "time": "2022-11-20T07:18:44.307Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for millennial money deleted",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmillennial+money+deleted",
            "time": "2022-11-20T03:51:35.020Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for millennial money deeleted",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmillennial+money+deeleted",
            "time": "2022-11-20T03:51:30.353Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for millennial money",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmillennial+money",
            "time": "2022-11-20T03:49:05.063Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for netflix swe",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnetflix+swe",
            "time": "2022-11-20T03:05:42.887Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mike boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmike+boyd",
            "time": "2022-11-20T02:56:07.843Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tom boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtom+boyd",
            "time": "2022-11-20T02:55:57.649Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for real chess cheat device",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dreal+chess+cheat+device",
            "time": "2022-11-20T02:55:25.220Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for real chess cheat",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dreal+chess+cheat",
            "time": "2022-11-20T02:55:16.820Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for real chess",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dreal+chess",
            "time": "2022-11-20T02:55:11.350Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at netflix ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+netflix+",
            "time": "2022-11-20T02:02:06.085Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for workign at anduril",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworkign+at+anduril",
            "time": "2022-11-20T02:01:44.580Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for matthew beem",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmatthew+beem",
            "time": "2022-11-20T01:58:50.466Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-20T01:57:21.403Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for alvin zhou",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dalvin+zhou",
            "time": "2022-11-19T06:22:26.196Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for michelle khare",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmichelle+khare",
            "time": "2022-11-19T01:47:02.532Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for graham norton taylor swift",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgraham+norton+taylor+swift",
            "time": "2022-11-19T01:26:21.910Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for feat colin and samir",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfeat+colin+and+samir",
            "time": "2022-11-17T04:23:27.125Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched #LifeAtCruise: Driving change together",
            "titleUrl": "https://www.youtube.com/watch?v\u003dhUIF4zVJvuA",
            "description": "Watched at 7:25 PM",
            "time": "2022-11-16T03:25:37.163Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched YouTube_Whatever_30s_la.EN_cc.Global",
            "titleUrl": "https://www.youtube.com/watch?v\u003dxK7w_BA9S_E",
            "description": "Watched at 7:22 PM",
            "time": "2022-11-16T03:22:29.905Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Bluehost eCommerce Solution - Go Big With Bluehost (16 sec)",
            "titleUrl": "https://www.youtube.com/watch?v\u003dI_WM09ZVg5E",
            "description": "Watched at 7:22 PM",
            "time": "2022-11-16T03:22:13.334Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Intel vPro - IT Hero Trailer :15 | Intel Business",
            "titleUrl": "https://www.youtube.com/watch?v\u003dFzL2-xALYnc",
            "description": "Watched at 7:19 PM",
            "time": "2022-11-16T03:19:29.462Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Don\u0027t Get Frustrated! Use Shopify\u0027s Professional Website Templates to Create Your Store (EN,NA)",
            "titleUrl": "https://www.youtube.com/watch?v\u003dod9swo0kAzQ",
            "description": "Watched at 7:13 PM",
            "time": "2022-11-16T03:13:24.845Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched The Holiday Unicorn | Bring Back Holiday Magic V2",
            "titleUrl": "https://www.youtube.com/watch?v\u003dhVv_7IDOepg",
            "description": "Watched at 1:50 AM",
            "time": "2022-11-15T09:50:05.335Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for desinty",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddesinty",
            "time": "2022-11-15T05:11:00.451Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for s",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ds",
            "time": "2022-11-15T05:02:34.368Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at citadel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+citadel",
            "time": "2022-11-14T06:45:59.071Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for workign at citadel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworkign+at+citadel",
            "time": "2022-11-14T06:45:55.952Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for workign at hrt",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworkign+at+hrt",
            "time": "2022-11-14T06:45:46.453Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for workign at jane street",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworkign+at+jane+street",
            "time": "2022-11-14T06:45:39.810Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for workign at anduril",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworkign+at+anduril",
            "time": "2022-11-14T06:45:04.495Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moving from san francisco ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoving+from+san+francisco+",
            "time": "2022-11-14T05:45:30.405Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for to seattle",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dto+seattle",
            "time": "2022-11-14T05:45:26.598Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for co",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dco",
            "time": "2022-11-14T04:36:54.755Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for newsletter frequency",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnewsletter+frequency",
            "time": "2022-11-13T21:31:14.922Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for coffeezilla graham stephan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcoffeezilla+graham+stephan",
            "time": "2022-11-13T20:18:53.233Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for newsletter business",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnewsletter+business",
            "time": "2022-11-13T19:42:47.078Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for newsletter frequency",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnewsletter+frequency",
            "time": "2022-11-13T19:41:14.302Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for how often newsletter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhow+often+newsletter",
            "time": "2022-11-13T19:37:42.392Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hopw often newsletter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhopw+often+newsletter",
            "time": "2022-11-13T19:37:36.907Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Everyday, hundreds of businesses get their first sale on Shopify - the next could be you! (ENNA)",
            "titleUrl": "https://www.youtube.com/watch?v\u003dcKbz3xud2WQ",
            "description": "Watched at 10:28 AM",
            "time": "2022-11-13T18:28:49.469Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for y combinator jason calacanis",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dy+combinator+jason+calacanis",
            "time": "2022-11-13T07:26:40.019Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for scams",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dscams",
            "time": "2022-11-13T07:04:08.722Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for shopify scams",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dshopify+scams",
            "time": "2022-11-13T06:56:11.796Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for jordan welch",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djordan+welch",
            "time": "2022-11-13T06:54:13.135Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin welsh",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+welsh",
            "time": "2022-11-13T06:54:07.533Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i built a ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+built+a+",
            "time": "2022-11-13T05:38:43.459Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moving every year",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoving+every+year",
            "time": "2022-11-13T05:36:00.947Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for matthew beem",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmatthew+beem",
            "time": "2022-11-13T05:35:43.975Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moving every year",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoving+every+year",
            "time": "2022-11-13T04:36:00.548Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moving every",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoving+every",
            "time": "2022-11-13T04:35:54.776Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for leaving patreon",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dleaving+patreon",
            "time": "2022-11-13T04:17:40.798Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for leaving",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dleaving",
            "time": "2022-11-13T04:16:47.875Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for monetize blog",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmonetize+blog",
            "time": "2022-11-13T01:14:41.171Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for monetize newsletter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmonetize+newsletter",
            "time": "2022-11-13T01:10:28.862Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ali abdaal expenses",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dali+abdaal+expenses",
            "time": "2022-11-12T08:27:55.263Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for effective altruism",
            "titleUrl": "https://www.youtube.com/results?search_query\u003deffective+altruism",
            "time": "2022-11-12T08:26:14.452Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for michelle khare",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmichelle+khare",
            "time": "2022-11-12T06:45:55.404Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for   dinner party",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d++dinner+party",
            "time": "2022-11-12T04:47:36.273Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for harvard dinner party",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dharvard+dinner+party",
            "time": "2022-11-12T04:47:14.081Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for moving every 6 months",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmoving+every+6+months",
            "time": "2022-11-12T04:33:49.039Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for nyc",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnyc",
            "time": "2022-11-12T04:27:00.248Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for flow adam neumann ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dflow+adam+neumann+",
            "time": "2022-11-12T03:39:31.690Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for gary vee",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgary+vee",
            "time": "2022-11-12T02:34:47.160Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-12T02:33:05.832Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for meta layoffs",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmeta+layoffs",
            "time": "2022-11-12T02:31:53.954Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-12T02:31:39.273Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ftx graham stephan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dftx+graham+stephan",
            "time": "2022-11-12T02:26:34.232Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for day in the life actress",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dday+in+the+life+actress",
            "time": "2022-11-11T06:06:17.110Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for space",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dspace",
            "time": "2022-11-11T05:43:58.016Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for twitter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtwitter",
            "time": "2022-11-11T05:42:25.539Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-11T05:15:47.155Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for phd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dphd",
            "time": "2022-11-11T05:15:01.507Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for emma chamberlain",
            "titleUrl": "https://www.youtube.com/results?search_query\u003demma+chamberlain",
            "time": "2022-11-11T05:14:41.914Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ben shapiro",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dben+shapiro",
            "time": "2022-11-11T05:14:11.465Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tech lead",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtech+lead",
            "time": "2022-11-11T04:27:53.995Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for sam bankman-fried",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsam+bankman-fried",
            "time": "2022-11-11T04:13:26.889Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ftx",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dftx",
            "time": "2022-11-11T04:13:07.058Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for selling youtube channel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dselling+youtube+channel",
            "time": "2022-11-11T04:12:40.795Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for digital nomad faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddigital+nomad+faang",
            "time": "2022-11-11T03:48:17.165Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for digital nomad",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddigital+nomad",
            "time": "2022-11-11T03:48:13.467Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at netflix",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+netflix",
            "time": "2022-11-11T03:38:19.891Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-10T23:03:22.125Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-10T23:03:15.868Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for netflix software engineer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnetflix+software+engineer",
            "time": "2022-11-10T09:33:17.881Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at netflix",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+netflix",
            "time": "2022-11-10T09:32:02.726Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for podcast studio",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpodcast+studio",
            "time": "2022-11-10T07:41:24.140Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for built a jet pack",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbuilt+a+jet+pack",
            "time": "2022-11-10T07:23:45.713Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for simone giertz",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsimone+giertz",
            "time": "2022-11-10T07:23:10.397Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for learn to kickflip",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlearn+to+kickflip",
            "time": "2022-11-10T07:22:56.012Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for tom boyd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtom+boyd",
            "time": "2022-11-10T07:22:47.789Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-10T05:30:47.808Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-10T05:30:21.519Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for los gatos",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlos+gatos",
            "time": "2022-11-10T05:18:58.624Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for faang ded",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfaang+ded",
            "time": "2022-11-10T04:51:25.512Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for netflix software engineer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnetflix+software+engineer",
            "time": "2022-11-10T04:41:46.555Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for netflix",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnetflix",
            "time": "2022-11-10T04:41:41.941Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched #LifeAtCruise: Driving change together",
            "titleUrl": "https://www.youtube.com/watch?v\u003dhUIF4zVJvuA",
            "description": "Watched at 7:33 AM",
            "time": "2022-11-09T15:33:27.207Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for quitting faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dquitting+faang",
            "time": "2022-11-09T08:02:48.496Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for qyittingg faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dqyittingg+faang",
            "time": "2022-11-09T08:02:45.789Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for secret youtube channel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsecret+youtube+channel",
            "time": "2022-11-09T07:51:19.251Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for i started a new youtube channel",
            "titleUrl": "https://www.youtube.com/results?search_query\u003di+started+a+new+youtube+channel",
            "time": "2022-11-09T07:51:02.232Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for emma chamberlain",
            "titleUrl": "https://www.youtube.com/results?search_query\u003demma+chamberlain",
            "time": "2022-11-09T06:48:46.619Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for frozen one bite pizza review",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfrozen+one+bite+pizza+review",
            "time": "2022-11-09T06:39:46.577Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for one bite pizza review",
            "titleUrl": "https://www.youtube.com/results?search_query\u003done+bite+pizza+review",
            "time": "2022-11-09T06:39:39.097Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for One Bite Pizza",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dOne+Bite+Pizza",
            "time": "2022-11-09T06:39:36.682Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for airrack island",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dairrack+island",
            "time": "2022-11-09T06:30:21.670Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for director faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddirector+faang",
            "time": "2022-11-09T05:12:22.723Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for direct google",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddirect+google",
            "time": "2022-11-09T05:12:08.226Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for staff software engineer google",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstaff+software+engineer+google",
            "time": "2022-11-09T05:11:36.373Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Web Summit",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dWeb+Summit",
            "time": "2022-11-09T04:40:39.506Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for 20 year old software engineer ",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d20+year+old+software+engineer+",
            "time": "2022-11-09T04:31:14.434Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for 500k software engineer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003d500k+software+engineer",
            "time": "2022-11-09T04:28:18.640Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched WaystoShop | Rooms | Petco",
            "titleUrl": "https://www.youtube.com/watch?v\u003dG10-or_kzx0",
            "description": "Watched at 7:33 PM",
            "time": "2022-11-09T03:33:20.400Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mario movie trailer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmario+movie+trailer",
            "time": "2022-11-09T03:33:11.067Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for get channels uploads youtube api",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dget+channels+uploads+youtube+api",
            "time": "2022-11-09T02:50:18.844Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for get channels uploads youtube",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dget+channels+uploads+youtube",
            "time": "2022-11-09T02:50:16.726Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for a day in the life of colin",
            "titleUrl": "https://www.youtube.com/results?search_query\u003da+day+in+the+life+of+colin",
            "time": "2022-11-09T01:33:49.223Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for nft colin and smair",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnft+colin+and+smair",
            "time": "2022-11-09T01:23:50.811Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working for mrbeast",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+for+mrbeast",
            "time": "2022-11-09T00:52:51.878Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for amouranth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003damouranth",
            "time": "2022-11-09T00:50:02.157Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mopstick",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmopstick",
            "time": "2022-11-09T00:44:15.209Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for nft colin and smair",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnft+colin+and+smair",
            "time": "2022-11-09T00:25:48.482Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for new grad faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnew+grad+faang",
            "time": "2022-11-08T23:14:51.742Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-08T23:10:58.396Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for legacy media",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dlegacy+media",
            "time": "2022-11-08T22:28:49.035Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for twitter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dtwitter",
            "time": "2022-11-08T22:28:28.997Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-08T21:39:43.406Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for graham stephan net worth",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgraham+stephan+net+worth",
            "time": "2022-11-08T21:10:41.986Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for new grad faang",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnew+grad+faang",
            "time": "2022-11-08T07:06:20.573Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for faang vs startup",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dfaang+vs+startup",
            "time": "2022-11-08T07:01:41.630Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for day in the life google",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dday+in+the+life+google",
            "time": "2022-11-08T07:01:11.077Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for day in the life netflix",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dday+in+the+life+netflix",
            "time": "2022-11-08T06:59:15.299Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for day in the life netflix engineer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dday+in+the+life+netflix+engineer",
            "time": "2022-11-08T06:59:12.350Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-08T06:35:52.109Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at netflix",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+netflix",
            "time": "2022-11-08T06:31:18.086Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at twitter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+twitter",
            "time": "2022-11-08T06:22:24.161Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for day in the life netflix engineer",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dday+in+the+life+netflix+engineer",
            "time": "2022-11-08T04:47:34.290Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for working at twitter",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworking+at+twitter",
            "time": "2022-11-08T04:20:05.398Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for jake tran",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djake+tran",
            "time": "2022-11-08T04:19:33.160Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for flagrant asian",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dflagrant+asian",
            "time": "2022-11-08T04:11:51.806Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for flagrant  justin",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dflagrant++justin",
            "time": "2022-11-08T04:11:45.046Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-08T04:11:30.129Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for flagrant 2",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dflagrant+2",
            "time": "2022-11-08T03:56:56.731Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for startup culture",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dstartup+culture",
            "time": "2022-11-08T03:08:27.050Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ur mom",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dur+mom",
            "time": "2022-11-08T02:57:57.317Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hai",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhai",
            "time": "2022-11-08T02:46:56.615Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for garry tan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgarry+tan",
            "time": "2022-11-08T01:35:17.900Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-08T01:35:05.620Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Are you sitting on a gold mine?",
            "titleUrl": "https://www.youtube.com/watch?v\u003d4uGL6dOPKcw",
            "description": "Watched at 4:07 PM",
            "time": "2022-11-08T00:07:59.067Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ssundee try not to laugh",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dssundee+try+not+to+laugh",
            "time": "2022-11-08T00:07:52.156Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched WaystoShop | Rooms | Petco",
            "titleUrl": "https://www.youtube.com/watch?v\u003dG10-or_kzx0",
            "description": "Watched at 4:01 PM",
            "time": "2022-11-08T00:01:22.161Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-07T02:00:17.981Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for emma chamberlain",
            "titleUrl": "https://www.youtube.com/results?search_query\u003demma+chamberlain",
            "time": "2022-11-07T01:56:40.215Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for paddy galloway",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dpaddy+galloway",
            "time": "2022-11-07T01:47:07.953Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-07T01:28:40.334Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Watched Chris Voss Teaches the Art of Negotiation | Official Trailer | MasterClass",
            "titleUrl": "https://www.youtube.com/watch?v\u003dq8rX4GUZSsU",
            "description": "Watched at 4:21 PM",
            "time": "2022-11-07T00:21:42.049Z",
            "products": ["YouTube"],
            "details": [{
              "name": "From Google Ads"
            }],
            "activityControls": ["Web \u0026 App Activity", "YouTube watch history", "YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for caltech",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcaltech",
            "time": "2022-11-05T20:55:49.189Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for harvard law",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dharvard+law",
            "time": "2022-11-05T20:55:22.246Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for being a doctor",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbeing+a+doctor",
            "time": "2022-11-05T20:55:03.366Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ai phd",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dai+phd",
            "time": "2022-11-05T20:52:09.543Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for cheated on me",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcheated+on+me",
            "time": "2022-11-05T20:49:26.795Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for nyc salary transparency law",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnyc+salary+transparency+law",
            "time": "2022-11-05T20:43:44.753Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for nyc salary",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnyc+salary",
            "time": "2022-11-05T20:43:37.256Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for ryan pineda",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dryan+pineda",
            "time": "2022-11-05T20:40:10.781Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for garry tan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgarry+tan",
            "time": "2022-11-05T20:24:55.806Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for KICKSTARTEW",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dKICKSTARTEW",
            "time": "2022-11-05T20:07:54.033Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for is the news biSED",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dis+the+news+biSED",
            "time": "2022-11-05T20:05:10.371Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for dakk e api",
            "titleUrl": "https://www.youtube.com/results?search_query\u003ddakk+e+api",
            "time": "2022-11-05T20:02:11.875Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-05T19:41:19.137Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-05T19:40:17.858Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for openai startup fund",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dopenai+startup+fund",
            "time": "2022-11-05T11:29:15.300Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for openai funding",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dopenai+funding",
            "time": "2022-11-05T11:28:56.669Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for worcestershire pronunciation",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dworcestershire+pronunciation",
            "time": "2022-11-05T08:20:24.065Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for cnbc make it",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dcnbc+make+it",
            "time": "2022-11-04T05:17:32.267Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for gmhikaru",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dgmhikaru",
            "time": "2022-11-04T04:10:38.064Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hans",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhans",
            "time": "2022-11-04T04:10:07.546Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for hormozi",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dhormozi",
            "time": "2022-11-04T03:51:50.878Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-04T03:34:07.042Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for mrwhosetheboss",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmrwhosetheboss",
            "time": "2022-11-04T02:47:57.903Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for jordan welch",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djordan+welch",
            "time": "2022-11-04T02:32:50.327Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for marques brownlee",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dmarques+brownlee",
            "time": "2022-11-04T02:18:40.651Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for justin kan",
            "titleUrl": "https://www.youtube.com/results?search_query\u003djustin+kan",
            "time": "2022-11-04T02:16:32.133Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yale",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyale",
            "time": "2022-11-03T23:18:20.516Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for before:2019",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dbefore:2019",
            "time": "2022-11-03T22:50:24.594Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for since:2019",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dsince:2019",
            "time": "2022-11-03T22:50:20.250Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for yale courses",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dyale+courses",
            "time": "2022-11-03T22:49:52.139Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Incredible Eats taste test",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dIncredible+Eats+taste+test",
            "time": "2022-11-03T07:27:13.628Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for nigahiga",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dnigahiga",
            "time": "2022-11-03T07:01:46.455Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for Nature of Genius yale",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dNature+of+Genius+yale",
            "time": "2022-11-03T06:42:32.484Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for usb c",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dusb+c",
            "time": "2022-11-03T06:37:29.474Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          },{
            "header": "YouTube",
            "title": "Searched for obf is a copy",
            "titleUrl": "https://www.youtube.com/results?search_query\u003dobf+is+a+copy",
            "time": "2022-11-03T06:13:49.624Z",
            "products": ["YouTube"],
            "activityControls": ["YouTube search history"]
          }])
        alert(jsonObject)
        console.log(typeof (jsonObject))
        console.log("THAT")

        // Upload the files as a POST request to the server using fetch
        // Note: /api/fileupload is not a real endpoint, it is just an example
        const response = await fetch("https://kspodx1um6.execute-api.us-east-1.amazonaws.com/analyze_ytwrapped", {
            method: "POST",
            // body: formData
            body: jsonObject
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })
            ).then(res => {
                console.log(res.data['Region '])
                let  x = 0;
                const l = [
                    <p></p>
                ]
                while (x<(res.data['Region '].length)){
                    x++
                    l.push(<p>{res.data['Region '][x]} </p> )
                    l.push(<br />)
                }
                setDescription(l)
            }));

        // //successful file upload
        // if (response.ok) {
        //   alert("Files uploaded successfully");
        // } else {
        //   // unsuccessful file upload
        //   alert("Error uploading files");
        // }
    };
    
    return (
        < button onClick={() => uploadFiles()} className="align-right rounded-lg px-2 bg-[#2dff5c]  py-3" >
            Submit
        </button >);
};


export default SubmitButton;