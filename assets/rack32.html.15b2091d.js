import{_ as s,r as a,o as i,c as l,a as e,b as o,w as c,d as h,e as t}from"./app.e0ae10c3.js";var d="/images/oxrs-rack32.jpg";const u={},p=h('<h1 id="rack32" tabindex="-1"><a class="header-anchor" href="#rack32" aria-hidden="true">#</a> Rack32</h1><p class="maker">by <b>SuperHouse Automation</b></p><blockquote><p>SKU: OXRS-SHA-RACK32</p></blockquote><p><img src="'+d+'" alt="SuperHouse Automation Rack32 ESP32 control board"></p><p>A general purpose control board for rack mount projects.</p><p>DIY rack-mount projects often require an Ethernet connection, a status display, power regulation, and other features that are not specific to the project.</p><p>This board fits into a rack-mount case and provides those common features so they don&#39;t have to be recreated every time.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li><strong>ESP32</strong> microcontroller with <strong>WiFi</strong>.</li><li><strong>10/100Mbps</strong> Ethernet.</li><li>Support for both DIY (12V) PoE and <strong>802.3af PoE</strong>.</li><li>Pluggable terminal block for optional external DC power input.</li><li>Automotive-grade voltage regulator for harsh electrical environments.</li><li>6-way IDC &quot;I2C-Breakout&quot; header for linking to other boards.</li><li>8-way IDC &quot;SPI-LCD&quot; header for connection to an LCD.</li><li><strong>USB-C</strong> connector for loading firmware.</li><li>Auto power source selection between USB-C, PoE, and external DC.</li><li>I/O header with power, 2 x I2C ports, and second hardware serial port.</li><li>Micro SD card slot for config files, logs, and media storage.</li><li>Onboard <strong>temperature sensor</strong>.</li><li>Header for front-panel power LED.</li><li>Can be built with onboard PCB antenna or external WiFi antenna.</li></ul><div class="custom-container danger"><p class="custom-container-title">PoE Bypass Jumpers</p><p>The PoE bypass jumper headers are &#39;Red&#39; for a reason. <strong>DO NOT</strong> insert these jumpers if you are intending to power the Rack32 via <strong>802.3af PoE</strong>. ONLY insert them if you intend using DIY (12V) PoE, otherwise you will apply 48VDC from the <strong>802.3af PoE</strong> source to the L78S05CV linear 5V regulator (25VDC max input voltage) and destroy it.</p></div><div class="custom-container danger"><p class="custom-container-title">External I2C Hardware</p><p><strong>DO NOT</strong> connect any external supported hardware to the &#39;I2CBreakout&#39; socket while the Rack32 is powered up as this will likely cause a failure of the AP2112K LDO 3.3V regulator or the ESP32 itself. <strong>ONLY connect external supported hardware to the &#39;I2CBreakout&#39; socket when the Rack32 is powered down.</strong></p></div><h2 id="supported-firmware" tabindex="-1"><a class="header-anchor" href="#supported-firmware" aria-hidden="true">#</a> Supported Firmware</h2>',12),_=t("OXRS-SHA-SmokeDetector-ESP32-FW "),f={href:"https://github.com/SuperHouse/OXRS-SHA-SmokeDetector-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},m=t("Github"),g=t("OXRS-SHA-StateController-ESP32-FW "),b={href:"https://github.com/SuperHouse/OXRS-SHA-StateController-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},S=t("Github"),k=t("OXRS-SHA-StateMonitor-ESP32-FW "),w={href:"https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},E=t("Github"),C=e("h2",{id:"supported-libraries",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supported-libraries","aria-hidden":"true"},"#"),t(" Supported Libraries")],-1),v=t("OXRS-SHA-Rack32-ESP32-LIB "),x={href:"https://github.com/SuperHouse/OXRS-SHA-Rack32-ESP32-LIB",target:"_blank",rel:"noopener noreferrer"},P=t("Github"),O=e("h2",{id:"additional-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-resources","aria-hidden":"true"},"#"),t(" Additional Resources")],-1),R=t("More info "),y={href:"https://github.com/SuperHouse/RACK32",target:"_blank",rel:"noopener noreferrer"},A=t("Github"),H=e("h2",{id:"where-to-buy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-buy","aria-hidden":"true"},"#"),t(" Where to Buy")],-1),D={href:"https://www.superhouse.tv/product/rack32-universal-rack-controller-board/",target:"_blank",rel:"noopener noreferrer"},I=t("SuperHouse Store"),L=e("h2",{id:"faqs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faqs","aria-hidden":"true"},"#"),t(" FAQs")],-1),B=e("details",{class:"custom-container details"},[e("summary",null,"Does it come with a power supply?"),e("p",null,"TODO - Jon to supply some FAQ's")],-1),F={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"Maker Info",-1),q=e("p",null,[e("strong",null,"Maker:"),t(" SuperHouse Automation")],-1),W=e("strong",null,"Link:",-1),X=t(),N={href:"https://www.superhouse.tv",target:"_blank",rel:"noopener noreferrer"},M=t("https://www.superhouse.tv"),j=e("h2",{id:"compatible-hardware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compatible-hardware","aria-hidden":"true"},"#"),t(" Compatible Hardware")],-1),T=t("Universal Input/Output (UIO) 16Port "),G=t("Link");function U(Y,K){const r=a("ExternalLinkIcon"),n=a("RouterLink");return i(),l("div",null,[p,e("ul",null,[e("li",null,[_,e("a",f,[m,o(r)])]),e("li",null,[g,e("a",b,[S,o(r)])]),e("li",null,[k,e("a",w,[E,o(r)])])]),C,e("ul",null,[e("li",null,[v,e("a",x,[P,o(r)])])]),O,e("ul",null,[e("li",null,[R,e("a",y,[A,o(r)])])]),H,e("ul",null,[e("li",null,[e("a",D,[I,o(r)])])]),L,B,e("div",F,[V,q,e("p",null,[W,X,e("a",N,[M,o(r)])])]),j,e("ul",null,[e("li",null,[T,o(n,{to:"/docs/hardware/input-output-devices/smoke-detector-sd-16port.html"},{default:c(()=>[G]),_:1})])])])}var Q=s(u,[["render",U],["__file","rack32.html.vue"]]);export{Q as default};
