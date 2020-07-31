(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,a,t){},301:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(75),i=t.n(s),l=(t(88),t(8)),r=t(9),c=t(12),d=t(11),m=(t(43),t(17),t(76)),u=t(10),g=t.n(u),p=m.education,h=function(){return Object(n.useEffect)((function(){g.a.init()})),o.a.createElement("div",{className:"Section",style:{backgroundColor:"#F1F1F1"},id:"education"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Education"),o.a.createElement("div",{className:"card-container","data-aos":"fade","data-aos-duration":"1000"},p.map((function(e,a){var t="/portfolio"+e.logo;return o.a.createElement("div",{className:"row",key:a},o.a.createElement("div",{className:"card","data-aos":"slide-left","data-aos-duration":"1500",key:a},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"card-title"},e.universityName),o.a.createElement("img",{src:t,alt:"logo",className:"Logo no-select"})),o.a.createElement("br",null),o.a.createElement("div",{className:"college"},e.collegeName),o.a.createElement("div",{style:{fontWeight:"bold"}},e.degree),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("div",null,e.location),o.a.createElement("br",null),o.a.createElement("div",{className:"card-content"},o.a.createElement("div",null,"Courses: ",e.courses),o.a.createElement("br",null),o.a.createElement("div",{style:{fontWeight:"bold"}},"Grade: ",e.Grade))))}))))},v=t(77).projects,f=function(){return Object(n.useEffect)((function(){g.a.init()})),o.a.createElement("div",{className:"Section",style:{backgroundColor:"#F1F1F1"},id:"projects"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Projects"),o.a.createElement("div",{className:"card-container","data-aos":"fade","data-aos-duration":"1000"},v.map((function(e,a){return o.a.createElement("div",{"data-aos":"slide-left","data-aos-duration":"1500",className:"row",key:a},o.a.createElement("div",{className:"card",key:a},o.a.createElement("div",{className:"card-title"},e.projectName),o.a.createElement("div",{className:"Technology"},"Technologies: ",e.technologies),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("br",null),o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/portfolio/assets/images/source_code.png",alt:"Link",className:"Project-link"})),o.a.createElement("br",null),o.a.createElement("div",{className:"card-content",style:{paddingRight:"25px"}},o.a.createElement("ul",null,e.description.map((function(e,a){return o.a.createElement("li",{className:"Description",key:a},e)}))))))}))))},y=t(78).experience,b=function(){return Object(n.useEffect)((function(){g.a.init()})),o.a.createElement("div",{className:"Section",id:"experience"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Experience"),o.a.createElement("div",{className:"card-container","data-aos":"fade","data-aos-duration":"1000"},y.map((function(e,a){var t="/portfolio"+e.logo;return o.a.createElement("div",{className:"row",key:a},o.a.createElement("div",{className:"card","data-aos":"slide-right","data-aos-duration":"1500",style:{backgroundColor:"#F1F1F1"},key:a},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"card-title"},e.position),o.a.createElement("img",{src:t,alt:"Logo",className:"Logo no-select"})),o.a.createElement("div",{className:"college"},e.institution),o.a.createElement("div",null,e.location),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("div",{style:{fontWeight:"bold"}},e.project),o.a.createElement("div",{className:"card-content",style:{paddingRight:"25px"}},o.a.createElement("ul",null,e.description.map((function(e,a){return o.a.createElement("li",{className:"Description",key:a},e)}))))))}))))},E=t(79).skills,k=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).getData=function(e){for(var a=[],t=0;t<e.value.length;t++){var n="/portfolio"+e.value[t].logo;a.push(o.a.createElement("div",{className:"skill",key:t},o.a.createElement("img",{src:n,alt:"Logo",className:"skill-logo no-select"}),o.a.createElement("div",null,e.value[t].name)))}return a},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){g.a.init({duration:2e3})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Section",id:"skills"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Skills"),o.a.createElement("div",{id:"demo",className:"carousel slide","data-ride":"carousel"},o.a.createElement("ul",{className:"carousel-indicators",style:{color:"#343a40"}},E.map((function(e,a){return 0===a?o.a.createElement("li",{key:a,"data-target":"#demo","data-slide-to":a,className:"active"}):o.a.createElement("li",{key:a,"data-target":"#demo","data-slide-to":a})}))),o.a.createElement("div",{className:"carousel-inner"},E.map((function(a,t){return 0===t?o.a.createElement("div",{className:"carousel-item active domain",key:t},o.a.createElement("div",{style:{fontSize:"5vmin"}},a.domain),o.a.createElement("div",{className:"skill-data"},e.getData(a))):o.a.createElement("div",{className:"carousel-item domain",key:t},o.a.createElement("div",{style:{fontSize:"4vmin"}},a.domain),o.a.createElement("div",{className:"skill-data"},e.getData(a)))}))),o.a.createElement("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev"},o.a.createElement("i",{style:{fontSize:"3vh",color:"#343a40"},className:"fa fa-chevron-left"}),o.a.createElement("span",{className:"sr-only"},"Previous")),o.a.createElement("a",{className:"carousel-control-next",href:"#demo","data-slide":"next"},o.a.createElement("i",{style:{fontSize:"3vh",color:"#343a40"},className:"fa fa-chevron-right"}),o.a.createElement("span",{className:"sr-only"},"Next"))))}}]),t}(n.Component),N=t(80),w=t.n(N),S=t(81),j=t.n(S),_={position:"absolute",width:"100%",height:"100%"},A={particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#343a40",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},O=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:_},o.a.createElement(j.a,{params:A}))}}]),t}(n.Component),C=function(){return Object(n.useEffect)((function(){g.a.init()})),o.a.createElement("div",{className:"Section",id:"introduction",style:{backgroundColor:"#F1F1F1"}},o.a.createElement(O,null),o.a.createElement("div",{"data-aos":"fade-in","data-aos-duration":"2000",className:"IntroContent"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{src:"/portfolio/assets/images/anish.jpg",alt:"Meri tasveer",className:"no-select",style:{width:"20vw",borderRadius:"50%"},"data-aos":"zoom-out-down","data-aos-duration":"1500"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"Name no-select"},"Anish Vaidya"),o.a.createElement(w.a,{className:"typed no-select",strings:["a coder","a learner","an ML enthusiast","a gymnast"],typeSpeed:30,backSpeed:50,loop:!0}),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/anishvaidya"},o.a.createElement("i",{className:"fab fa-github",style:{fontSize:"2em",color:"black",padding:"1vw"}})),o.a.createElement("a",{href:"https://www.linkedin.com/in/anish-amul-vaidya/"},o.a.createElement("i",{className:"fab fa-linkedin",style:{fontSize:"2em",color:"black",padding:"1vw"}})),o.a.createElement("a",{href:"https://www.instagram.com/anish_vaidya/"},o.a.createElement("i",{className:"fab fa-instagram",style:{fontSize:"2em",color:"black",padding:"1vw"}})))))},I=t(82),M=t.n(I),D=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},o.a.createElement("a",{href:"#introduction",className:"navbar-brand"},o.a.createElement("img",{src:M.a,className:"App-logo no-select",alt:"logo"})),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#skills",className:"nav-link"},"Skills")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#education",className:"nav-link"},"Education")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#experience",className:"nav-link"},"Experience")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#projects",className:"nav-link"},"Projects")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#about",className:"nav-link"},"About")))))}}]),t}(o.a.Component),L=t(41),P=L.story,x=L.quote,T=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){g.a.init({duration:2e3})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Section",id:"about"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"About"),o.a.createElement("article",{className:"About","data-aos":"slide-up","data-aos-duration":"2000"},P),o.a.createElement("div",{style:{fontSize:"calc(8px + 2vmin)",fontWeight:"bold"},"data-aos":"slide-up","data-aos-duration":"2000"},x))}}]),t}(n.Component),z=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{margin:"auto",display:"flex",justifyContent:"center",height:"100vh",width:"100%",backgroundColor:"#343a40"},"data-aos":"fill","data-aos-duration":"1000"},o.a.createElement("img",{src:"/portfolio/assets/images/splash_logo.svg",style:{width:"20vh",height:"100%"},className:"bounce",alt:"My logo"}))}}]),t}(n.Component),F=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={renderSplashscreen:!0},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({renderSplashscreen:!1})}),1e3)}},{key:"render",value:function(){return this.state.renderSplashscreen?o.a.createElement(z,null):o.a.createElement("div",{className:"App","data-spy":"scroll","data-target":".navbar","data-offset":"50"},o.a.createElement(D,null),o.a.createElement(C,null),o.a.createElement(k,null),o.a.createElement(h,null),o.a.createElement(b,null),o.a.createElement(f,null),o.a.createElement(T,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e){e.exports=JSON.parse('{"story":"Hello, I am Anish, a Computer Science graduate student from University of Southern California. After completing my undergrad in Computer Engineering from University of Mumbai, I moved to Los Angeles in 2019 for pursuing my Masters. I grew up in a city called Thane, near the thriving metropolis of Mumbai. After spending about 21 years of my life being pampered by my parents and family, I have moved about 9000 miles from my home, to better myself, build my career, meet different people, make new friends, and simply, have an adventure. Of course, my desire to learn more advanced concepts of computer science and the idea of experiencing the American hustle, and working towards the American dream helped my decision to pursue Masters from the United States.\\n I used to do gymnastics as a kid, and that habit, nay routine, has been translated to my affinity towards working out, calisthenics and cycling. Working out at least half an hour daily helps me focus and contrary to the popular belief, get energized for the day ahead. Other things I enjoy are playing cricket, going on long walks, petting dogs, and obviously, video games like The Witcher and CS: GO. And yes, moving away from my home made me realize yet another thing I love, cooking! Ah, I know, I\u2019ve written too many pastimes which are not all possible in a day due to the on-going grind of life, so I try to switch these enjoyments accordingly when I am not fixated to my computer coding. Two things I\u2019ve learned through the years is that I have got so much to learn, and being kind always pays off. Thus, I try to live by my quote,","quote":"Think smart, keep it Real"}')},76:function(e){e.exports=JSON.parse('{"education":[{"universityName":"University of Southern California","collegeName":"Viterbi School of Engineering","degree":"Master of Science in Computer Science","duration":"August 2019-May 2021","location":"Los Angeles, CA","courses":"Algorithms, Database Systems, Machine Learning, Natural Language Processing, Data Mining","Grade":"GPA 3.68/4","logo":"/assets/images/usc.png"},{"universityName":"University of Mumbai","collegeName":"Vivekanand Education Society\'s Institute of Technology","degree":"Bachelor of Engineering in Computer Engineering","duration":"August 2015-May 2019","location":"Mumbai, India","courses":"Software Engineering, Web Technologies, Distributed Databases, Operating Systems, Parallel and Distributed Systems","Grade":"CGPA 8.95/10","logo":"/assets/images/mumbai_university.jpg"}]}')},77:function(e){e.exports=JSON.parse('{"projects":[{"projectName":"Recommendation System for Yelp Businesses","technologies":"Python, Spark, MapReduce","technologies-icon":["/assets/skills_logos/python.png"],"duration":"May 2020-June 2020","description":["Devised content based recommendation algorithm which uses comprehensive reviews for each unique user and business to determine businesses likely to be reviewed by user.","Applied collaborative filtering methods to predict the ratings for about 10 thousand businesses by about 26 thousand unique users using specialized online and offline real-time algorithms with less than 1% RMS error on real world data."],"link":"https://github.com/anishvaidya/INF-553-Data-Mining"},{"projectName":"Dialog Act Tagger for Sequence Labelling","technologies":"Python, PyCRF suite","duration":"February 2020-March 2020","description":["Implemented a conditional random field model leveraging PyCRF suite for assigning dialog acts to data extracted from Switchboard DAMSL corpus and secured an accuracy of 74% on the baseline tagger.","Improved accuracy of tagger by implementing an optimized  n-gram model approach to baseline tagger and achieved an accuracy of 80% on advanced tagger."],"link":"https://github.com/anishvaidya/CSCI-544---Applied-Natural-Language-Processing"},{"projectName":"Personal Digital Assistant for Alzheimer\'s Patients","technologies":"Android, Python, Firebase, Tensorflow, Keras","duration":"May 2018-April 2019","description":["Directed the team to construct an Android application for Alzheimer\'s patients with features like daily reminders for medicine and meals and providing scene recognition using images captured from mobile device.","Created scene recognition deep neural network model based on VGG-16 Convolutional Neural Network architecture along with  MIT\'s Indoor Scene Recognition dataset and deployed it on Android using Tensorflow Lite.","Optimized the model leveraging methods like dropout and used stochastic gradient optimizer to acquire an accuracy of 76.4% on a test set with 60 classes.","Paper published in Computing Methodology journal published by Elsevier BV and made Top - 10 list in topic dementia. Link - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3266783"],"link":"https://github.com/anishvaidya/MIT-Indoor-Scene-Recognition"},{"projectName":"Face Recognition using One-Shot Learning","technologies":"Python, OpenCV, Tensorflow, Keras","duration":"June 2018 - November 2018","description":["Implemented OpenCV model to detect faces in real time from the images captured through the computer\'s webcam.","Utilized the FaceNet pre-trained architecture model to create 128 dimensional embeddings for each detected face.","Constructed the triplet loss function in Python to compare facial embeddings and recognize faces in real time."],"link":"https://github.com/anishvaidya/Face-Recognition-Inception-Opencv-"},{"projectName":"Browser Torrent","technologies":"VueJS, Torrent API, Javascript","duration":"January 2018-March 2018","description":["Developed a  web-application to download legal torrents directly through the browser without having to download any torrent client application.","Leveraged the Torrent API to handle the protocol and download files in a plug-and-play fashion."],"link":"https://github.com/anishvaidya/Face-Recognition-Inception-Opencv-"}]}')},78:function(e){e.exports=JSON.parse('{"experience":[{"position":"Deep Learning Research Intern","institution":"Centre for Systems & Software Engineering, USC","location":"Los Angeles, United States","duration":"May 2020-August 2020","project":"Applications of Deep Learning and Representation Learning in Software","logo":"/assets/experience_logos/CSSE-logo.png","description":["Researching representation and deep learning methods in Tensorflow to develop software source code summarization.","Constructing multi-modal models to learn source code summary using AST paths and attention layers to generate context."]},{"position":"Machine Learning Intern","institution":"Larsen & Toubro Infotech","location":"Mumbai, India","duration":"December 2018-January 2019","project":"Smart P&ID Extraction and Automation","logo":"/assets/experience_logos/LTI.png","description":["Extracted data and assets from CAD Piping and Instrumentation diagrams (P&IDs) in real time for automation.","Annotated and augmented the real world P&ID dataset to optimum size for input to Convolutional Neural Network Model.","Implemented the VGG-19 CNN architecture and utilized Adam optimizer and achieved an accuracy of 90.1%."]},{"position":"Web Development Intern","institution":"KAVWorks Technologies Pvt. Ltd.","location":"Mumbai, India","duration":"July 2018-August 2018","project":"Employee Management Portal","logo":"/assets/experience_logos/kavworkslogo.png","description":["Implemented employee management functionality in the system using Laravel Framework, Vue.js, MySQL & MongoDB.","Exported old databases to a new system and deployed on firm\'s network with Heroku server."]}]}')},79:function(e){e.exports=JSON.parse('{"skills":[{"domain":"Languages","value":[{"name":"Python","logo":"/assets/skills_logos/python.png"},{"name":"Java","logo":"/assets/skills_logos/java.png"},{"name":"C","logo":"/assets/skills_logos/c.png"},{"name":"C++","logo":"/assets/skills_logos/cpp.png"},{"name":"SQL","logo":"/assets/skills_logos/sql.png"},{"name":"Shell scripting","logo":"/assets/skills_logos/shell.png"}]},{"domain":"Web Development","value":[{"name":"HTML","logo":"/assets/skills_logos/html.png"},{"name":"JavaScript","logo":"/assets/skills_logos/js.png"},{"name":"PHP","logo":"/assets/skills_logos/php.jpg"},{"name":"Laravel","logo":"/assets/skills_logos/laravel.jpg"},{"name":"Node.js","logo":"/assets/skills_logos/nodejs.jpg"},{"name":"Vue.js","logo":"/assets/skills_logos/vuejs.jpg"},{"name":"React.js","logo":"/assets/skills_logos/react.png"}]},{"domain":"Databases","value":[{"name":"MySQL","logo":"/assets/skills_logos/mysql.png"},{"name":"MongoDB","logo":"/assets/skills_logos/mongodb.png"},{"name":"Firebase","logo":"/assets/skills_logos/firebase.png"},{"name":"PostgreSQL","logo":"/assets/skills_logos/postgresql.png"},{"name":"SQLite","logo":"/assets/skills_logos/sqlite.png"}]},{"domain":"Data Science","value":[{"name":"Tensorflow","logo":"/assets/skills_logos/tensorflow.png"},{"name":"Keras","logo":"/assets/skills_logos/keras.png"},{"name":"PyTorch","logo":"/assets/skills_logos/pytorch.png"},{"name":"Scikit-learn","logo":"/assets/skills_logos/scikit.png"},{"name":"Hadoop","logo":"/assets/skills_logos/hadoop.png"},{"name":"PySpark","logo":"/assets/skills_logos/pyspark.png"},{"name":"OpenCV","logo":"/assets/skills_logos/opencv.png"}]},{"domain":"Other","value":[{"name":"Android","logo":"/assets/skills_logos/android.jpg"},{"name":"Git","logo":"/assets/skills_logos/git.png"},{"name":"Docker","logo":"/assets/skills_logos/docker.png"},{"name":"Amazon Web Services","logo":"/assets/skills_logos/aws.jpg"},{"name":"Google Cloud Platform","logo":"/assets/skills_logos/gcp.png"}]}]}')},82:function(e,a,t){e.exports=t.p+"static/media/logo.143e6abb.svg"},83:function(e,a,t){e.exports=t(301)},88:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.27be3958.chunk.js.map