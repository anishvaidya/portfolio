(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e,a,t){},,,,function(e){e.exports=JSON.parse('{"education":[{"universityName":"University of Southern California","collegeName":"Viterbi School of Engineering","degree":"Master of Science in Computer Science","duration":"August 2019-May 2021","location":"Los Angeles, CA","courses":"Algorithms, Database Systems, Machine Learning, Natural Language Processing, Data Mining","Grade":"GPA 3.68/4","logo":"/assets/images/usc.png"},{"universityName":"University of Mumbai","collegeName":"Vivekanand Education Society\'s Institute of Technology","degree":"Bachelor of Engineering in Computer Engineering","duration":"August 2015-May 2019","location":"Mumbai, India","courses":"Software Engineering, Web Technologies, Distributed Databases, Operating Systems, Parallel and Distributed Systems","Grade":"CGPA 8.95/10","logo":"/assets/images/mumbai_university.jpg"}]}')},function(e){e.exports=JSON.parse('{"projects":[{"projectName":"Recommendation System for Yelp Businesses","technologies":"Python, Spark, MapReduce","technologies-icon":["/assets/skills_logos/python.png"],"duration":"May 2020-June 2020","description":["Devised content based recommendation algorithm which uses comprehensive reviews for each unique user and business to determine businesses likely to be reviewed by user.","Applied collaborative filtering methods to predict the ratings for about 10 thousand businesses by about 26 thousand unique users using specialized online and offline real-time algorithms with less than 1% RMS error on real world data."],"link":"https://github.com/anishvaidya/INF-553-Data-Mining"},{"projectName":"Dialog Act Tagger for Sequence Labelling","technologies":"Python, PyCRF suite","duration":"February 2020-March 2020","description":["Implemented a conditional random field model leveraging PyCRF suite for assigning dialog acts to data extracted from Switchboard DAMSL corpus and secured an accuracy of 74% on the baseline tagger.","Improved accuracy of tagger by implementing an optimized  n-gram model approach to baseline tagger and achieved an accuracy of 80% on advanced tagger."],"link":"https://github.com/anishvaidya/CSCI-544---Applied-Natural-Language-Processing"},{"projectName":"Personal Digital Assistant for Alzheimer\'s Patients","technologies":"Android, Python, Firebase, Tensorflow, Keras","duration":"May 2018-April 2019","description":["Directed the team to construct an Android application for Alzheimer\'s patients with features like daily reminders for medicine and meals and providing scene recognition using images captured from mobile device.","Created scene recognition deep neural network model based on VGG-16 Convolutional Neural Network architecture along with  MIT\'s Indoor Scene Recognition dataset and deployed it on Android using Tensorflow Lite.","Optimized the model leveraging methods like dropout and used stochastic gradient optimizer to acquire an accuracy of 76.4% on a test set with 60 classes.","Paper published in Computing Methodology journal published by Elsevier BV and made Top - 10 list in topic dementia. Link - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3266783"],"link":"https://github.com/anishvaidya/MIT-Indoor-Scene-Recognition"},{"projectName":"Face Recognition using One-Shot Learning","technologies":"Python, OpenCV, Tensorflow, Keras","duration":"June 2018 - November 2018","description":["Implemented OpenCV model to detect faces in real time from the images captured through the computer\'s webcam.","Utilized the FaceNet pre-trained architecture model to create 128 dimensional embeddings for each detected face.","Constructed the triplet loss function in Python to compare facial embeddings and recognize faces in real time."],"link":"https://github.com/anishvaidya/Face-Recognition-Inception-Opencv-"},{"projectName":"Browser Torrent","technologies":"VueJS, Torrent API, Javascript","duration":"January 2018-March 2018","description":["Developed a  web-application to download legal torrents directly through the browser without having to download any torrent client application.","Leveraged the Torrent API to handle the protocol and download files in a plug-and-play fashion."],"link":"https://github.com/anishvaidya/Face-Recognition-Inception-Opencv-"}]}')},function(e){e.exports=JSON.parse('{"experience":[{"position":"Deep Learning Research Intern","institution":"Centre for Systems & Software Engineering, USC","location":"Los Angeles, United States","duration":"May 2020-August 2020","project":"Applications of Deep Learning and Representation Learning in Software","logo":"/assets/experience_logos/CSSE-logo.png","description":["Researching representation and deep learning methods in Tensorflow to develop software source code summarization.","Constructing multi-modal models to learn source code summary using AST paths and attention layers to generate context."]},{"position":"Machine Learning Intern","institution":"Larsen & Toubro Infotech","location":"Mumbai, India","duration":"December 2018-January 2019","project":"Smart P&ID Extraction and Automation","logo":"/assets/experience_logos/LTI.png","description":["Extracted data and assets from CAD Piping and Instrumentation diagrams (P&IDs) in real time for automation.","Annotated and augmented the real world P&ID dataset to optimum size for input to Convolutional Neural Network Model.","Implemented the VGG-19 CNN architecture and utilized Adam optimizer and achieved an accuracy of 90.1%."]},{"position":"Web Development Intern","institution":"KAVWorks Technologies Pvt. Ltd.","location":"Mumbai, India","duration":"July 2018-August 2018","project":"Employee Management Portal","logo":"/assets/experience_logos/kavworkslogo.png","description":["Implemented employee management functionality in the system using Laravel Framework, Vue.js, MySQL & MongoDB.","Exported old databases to a new system and deployed on firm\'s network with Heroku server."]}]}')},,,,function(e,a,t){e.exports=t.p+"static/media/logo.143e6abb.svg"},,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e){e.exports=JSON.parse("{}")},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(5),r=t.n(i),s=(t(20),t(4),t(2),t(6)),l=t(1),c=t.n(l),d=s.education,m=function(){return Object(n.useEffect)((function(){c.a.init()})),o.a.createElement("div",{className:"Section",style:{backgroundColor:"#F1F1F1"},id:"education"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Education"),o.a.createElement("div",{className:"card-container","data-aos":"fade","data-aos-duration":"1000"},d.map((function(e,a){var t="/portfolio"+e.logo;return o.a.createElement("div",{className:"row",key:a},o.a.createElement("div",{className:"card","data-aos":"slide-left","data-aos-duration":"1500",key:a},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"card-title"},e.universityName),o.a.createElement("img",{src:t,alt:"logo",className:"Logo no-select"})),o.a.createElement("br",null),o.a.createElement("div",{className:"college"},e.collegeName),o.a.createElement("div",{style:{fontWeight:"bold"}},e.degree),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("div",null,e.location),o.a.createElement("br",null),o.a.createElement("div",{className:"card-content"},o.a.createElement("div",null,"Courses: ",e.courses),o.a.createElement("br",null),o.a.createElement("div",{style:{fontWeight:"bold"}},"Grade: ",e.Grade))))}))))},u=t(7).projects,g=function(){return Object(n.useEffect)((function(){c.a.init()})),o.a.createElement("div",{className:"Section",style:{backgroundColor:"#F1F1F1"},id:"projects"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Projects"),o.a.createElement("div",{className:"card-container","data-aos":"fade","data-aos-duration":"1000"},u.map((function(e,a){return o.a.createElement("div",{"data-aos":"slide-left","data-aos-duration":"1500",className:"row",key:a},o.a.createElement("div",{className:"card",key:a},o.a.createElement("div",{className:"card-title"},e.projectName),o.a.createElement("div",{className:"Technology"},"Technologies: ",e.technologies),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("br",null),o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/portfolio/assets/images/source_code.png",alt:"Link",className:"Project-link"})),o.a.createElement("br",null),o.a.createElement("div",{className:"card-content",style:{paddingRight:"25px"}},o.a.createElement("ul",null,e.description.map((function(e,a){return o.a.createElement("li",{className:"Description",key:a},e)}))))))}))))},p=t(8).experience,h=function(){return Object(n.useEffect)((function(){c.a.init()})),o.a.createElement("div",{className:"Section",id:"experience"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Experience"),o.a.createElement("div",{className:"card-container","data-aos":"fade","data-aos-duration":"1000"},p.map((function(e,a){var t="/portfolio"+e.logo;return o.a.createElement("div",{className:"row",key:a},o.a.createElement("div",{className:"card","data-aos":"slide-right","data-aos-duration":"1500",style:{backgroundColor:"#F1F1F1"},key:a},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"card-title"},e.position),o.a.createElement("img",{src:t,alt:"Logo",className:"Logo no-select"})),o.a.createElement("div",{className:"college"},e.institution),o.a.createElement("div",null,e.location),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("div",{style:{fontWeight:"bold"}},e.project),o.a.createElement("div",{className:"card-content",style:{paddingRight:"25px"}},o.a.createElement("ul",null,e.description.map((function(e,a){return o.a.createElement("li",{className:"Description",key:a},e)}))))))}))))},v=(t(21),function(){return o.a.createElement("div",{className:"Section no-select",id:"skills"},o.a.createElement("div",{className:"Heading","data-aos":"fade-in","data-aos-duration":"2000"},"Skills"))}),f=t(9),E=t.n(f),b=function(){return Object(n.useEffect)((function(){c.a.init()})),o.a.createElement("div",{className:"Section",id:"introduction",style:{backgroundColor:"#F1F1F1"}},o.a.createElement("div",{"data-aos":"fade-in","data-aos-duration":"2000",className:"IntroContent"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{src:"/portfolio/assets/images/anish.jpg",alt:"Meri tasveer",style:{width:"20vw",borderRadius:"50%"},"data-aos":"zoom-out-down","data-aos-duration":"1500"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"Name no-select"},"Anish Vaidya"),o.a.createElement(E.a,{className:"typed no-select",strings:["a coder","a learner","an ML enthusiast","a gymnast"],typeSpeed:30,backSpeed:50,loop:!0}),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/anishvaidya"},o.a.createElement("i",{className:"fab fa-github",style:{fontSize:"2em",color:"black",padding:"1vw"}})),o.a.createElement("a",{href:"https://www.linkedin.com/in/anish-amul-vaidya/"},o.a.createElement("i",{className:"fab fa-linkedin",style:{fontSize:"2em",color:"black",padding:"1vw"}})),o.a.createElement("a",{href:"https://www.instagram.com/anish_vaidya/"},o.a.createElement("i",{className:"fab fa-instagram",style:{fontSize:"2em",color:"black",padding:"1vw"}})))))},y=t(10),N=t(11),w=t(14),k=t(13),S=t(12),A=t.n(S),I=function(e){Object(w.a)(t,e);var a=Object(k.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},o.a.createElement("a",{href:"#introduction",className:"navbar-brand"},o.a.createElement("img",{src:A.a,className:"App-logo no-select",alt:"logo"})),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#skills",className:"nav-link"},"Skills")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#education",className:"nav-link"},"Education")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#experience",className:"nav-link"},"Experience")),o.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},o.a.createElement("a",{href:"#projects",className:"nav-link"},"Projects")))))}}]),t}(o.a.Component);var j=function(){return o.a.createElement("div",{className:"App","data-spy":"scroll","data-target":".navbar","data-offset":"50"},o.a.createElement(I,null),o.a.createElement(b,null),o.a.createElement(v,null),o.a.createElement(m,null),o.a.createElement(h,null),o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.86877729.chunk.js.map