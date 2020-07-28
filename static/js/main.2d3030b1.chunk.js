(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/logo.d105153d.svg"},function(e){e.exports=JSON.parse('{"education":[{"universityName":"University of Southern California","collegeName":"Viterbi School of Engineering","degree":"Master of Science in Computer Science","duration":"August 2019-May 2021","location":"Los Angeles, CA","courses":"Algorithms, Database Systems, Machine Learning, Natural Language Processing, Data Mining","Grade":"GPA 3.68/4","logo":"/assets/images/usc.png"},{"universityName":"University of Mumbai","collegeName":"Vivekanand Education Society\'s Institute of Technology","degree":"Bachelor of Engineering in Computer Engineering","duration":"August 2015-May 2019","location":"Mumbai, India","courses":"Software Engineering, Web Technologies, Distributed Databases, Operating Systems, Parallel and Distributed Systems","Grade":"CGPA 8.95/10","logo":"/assets/images/mumbai_university.jpg"}]}')},function(e){e.exports=JSON.parse('{"projects":[{"projectName":"Recommendation System for Yelp Businesses","technologies":"Python, Spark, MapReduce","duration":"May 2020-June 2020","description":["Devised content based recommendation algorithm which uses comprehensive reviews for each unique user and business to determine businesses likely to be reviewed by user.","Applied collaborative filtering methods to predict the ratings for about 10 thousand businesses by about 26 thousand unique users using specialized online and offline real-time algorithms with less than 1% RMS error on real world data."],"link":"https://github.com/anishvaidya/INF-553-Data-Mining"},{"projectName":"Dialog Act Tagger for Sequence Labelling","technologies":"Python, PyCRF suite","duration":"February 2020-March 2020","description":["Implemented a conditional random field model leveraging PyCRF suite for assigning dialog acts to data extracted from Switchboard DAMSL corpus and secured an accuracy of 74% on the baseline tagger.","Improved accuracy of tagger by implementing an optimized  n-gram model approach to baseline tagger and achieved an accuracy of 80% on advanced tagger."],"link":"https://github.com/anishvaidya/CSCI-544---Applied-Natural-Language-Processing"},{"projectName":"Personal Digital Assistant for Alzheimer\'s Patients","technologies":"Android, Python, Firebase, Tensorflow, Keras","duration":"May 2018-April 2019","description":["Directed the team to construct an Android application for Alzheimer\'s patients with features like daily reminders for medicine and meals and providing scene recognition using images captured from mobile device.","Created scene recognition deep neural network model based on VGG-16 Convolutional Neural Network architecture along with  MIT\'s Indoor Scene Recognition dataset and deployed it on Android using Tensorflow Lite.","Optimized the model leveraging methods like dropout and used stochastic gradient optimizer to acquire an accuracy of 76.4% on a test set with 60 classes.","Paper published in Computing Methodology journal published by Elsevier BV and made Top - 10 list in topic dementia. Link - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3266783"],"link":"https://github.com/anishvaidya/MIT-Indoor-Scene-Recognition"},{"projectName":"Face Recognition using One-Shot Learning","technologies":"Python, OpenCV, Tensorflow, Keras","duration":"June 2018 - November 2018","description":["Implemented OpenCV model to detect faces in real time from the images captured through the computer\'s webcam.","Utilized the FaceNet pre-trained architecture model to create 128 dimensional embeddings for each detected face.","Constructed the triplet loss function in Python to compare facial embeddings and recognize faces in real time."],"link":"https://github.com/anishvaidya/Face-Recognition-Inception-Opencv-"},{"projectName":"Browser Torrent","technologies":"VueJS, Torrent API, Javascript","duration":"January 2018-March 2018","description":["Developed a  web-application to download legal torrents directly through the browser without having to download any torrent client application.","Leveraged the Torrent API to handle the protocol and download files in a plug-and-play fashion."],"link":"https://github.com/anishvaidya/Face-Recognition-Inception-Opencv-"}]}')},function(e){e.exports=JSON.parse('{"experience":[{"position":"Deep Learning Research Intern","institution":"Centre for Systems & Software Engineering, USC","location":"Los Angeles, United States","duration":"May 2020-August 2020","project":"Applications of Deep Learning and Representation Learning in Software","logo":"/assets/experience_logos/CSSE-logo.png","description":["Researching representation and deep learning methods in Tensorflow to develop software source code summarization.","Constructing multi-modal models to learn source code summary using AST paths and attention layers to generate context."]},{"position":"Machine Learning Intern","institution":"Larsen & Toubro Infotech","location":"Mumbai, India","duration":"December 2018-January 2019","project":"Smart P&ID Extraction and Automation","logo":"/assets/experience_logos/LTI.png","description":["Extracted data and assets from CAD Piping and Instrumentation diagrams (P&IDs) in real time for automation.","Annotated and augmented the real world P&ID dataset to optimum size for input to Convolutional Neural Network Model.","Implemented the VGG-19 CNN architecture and utilized Adam optimizer and achieved an accuracy of 90.1%."]},{"position":"Web Development Intern","institution":"KAVWorks Technologies Pvt. Ltd.","location":"Mumbai, India","duration":"July 2018-August 2018","project":"Employee Management Portal","logo":"/assets/experience_logos/kavworkslogo.png","description":["Implemented employee management functionality in the system using Laravel Framework, Vue.js, MySQL & MongoDB.","Exported old databases to a new system and deployed on firm\'s network with Heroku server."]}]}')},function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(3),r=t.n(i),s=(t(13),t(4)),c=t.n(s),l=(t(14),t(1),t(5).education),d=function(){return o.a.createElement("div",{className:"Section"},o.a.createElement("div",{className:"Heading"},"Education"),o.a.createElement("div",{className:"card-container"},l.map((function(e,a){var t="/portfolio"+e.logo;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card",key:a},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"University"},e.universityName),o.a.createElement("img",{src:t,alt:"logo",className:"Logo no-select"})),o.a.createElement("br",null),o.a.createElement("div",{className:"college"},e.collegeName),o.a.createElement("div",{style:{fontWeight:"bold"}},e.degree),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("div",null,e.location),o.a.createElement("br",null),o.a.createElement("div",{className:"card-content"},o.a.createElement("div",null,"Courses: ",e.courses),o.a.createElement("div",null,"Grade: ",e.Grade))))}))))},m=t(6).projects,u=function(){return o.a.createElement("div",{className:"Section"},o.a.createElement("div",{className:"Heading"},"Projects"),o.a.createElement("div",{className:"card-container"},m.map((function(e,a){return o.a.createElement("div",{className:"row",key:a},o.a.createElement("div",{className:"card",key:a},o.a.createElement("div",{className:"Project-title"},e.projectName),o.a.createElement("div",{className:"Technology"},"Technologies: ",e.technologies),o.a.createElement("div",{className:"Duration"},e.duration),o.a.createElement("br",null),o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/portfolio/assets/images/source_code.png",alt:"Link",className:"Project-link"})),o.a.createElement("br",null),o.a.createElement("div",{className:"card-content"},o.a.createElement("ul",null,e.description.map((function(e,a){return o.a.createElement("li",{className:"Description",key:a},e)}))))))}))))},g=t(7).experience,p=function(){return o.a.createElement("div",{className:"Section"},o.a.createElement("div",{className:"Heading"},"Experience"),o.a.createElement("div",{className:"card-container"},g.map((function(e,a){var t="/portfolio"+e.logo;return o.a.createElement("div",{className:"row",key:a},o.a.createElement("div",{className:"card",key:a},o.a.createElement("img",{src:t,alt:"Logo",className:"Logo no-select"}),o.a.createElement("div",null,e.position),o.a.createElement("div",null,e.institution),o.a.createElement("div",null,e.location),o.a.createElement("div",null,e.duration),o.a.createElement("div",null,e.project),o.a.createElement("ul",null,e.description.map((function(e,a){return o.a.createElement("li",{key:a},e)})))))}))))};var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:c.a,className:"App-logo no-select",alt:"logo"})),o.a.createElement(d,null),o.a.createElement(p,null),o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2d3030b1.chunk.js.map