import{_ as r,r as i,o as l,c as d,a as e,b as o,w as c,e as t,d as a}from"./app.e0ae10c3.js";const h={},u=e("h1",{id:"writing-docs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#writing-docs","aria-hidden":"true"},"#"),t(" Writing Docs")],-1),p={class:"custom-container tip"},g=e("p",{class:"custom-container-title"},"Notice",-1),m=t("These docs are a work in progress, if you have any issues getting things setup drop us a message on the SuperHouse "),_={href:"https://discord.gg/H6bbrAtS",target:"_blank",rel:"noopener noreferrer"},b=t("Discord"),y=e("h2",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),t(" Getting started")],-1),f=e("p",null,"There is a many different ways of editing the OXRS Documentation. We have tried to provide some guides below with the various methods available for those choosing to contribute.",-1),w=e("h2",{id:"edit-pages-using-github-website",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#edit-pages-using-github-website","aria-hidden":"true"},"#"),t(" Edit pages using Github website")],-1),v=t("Most of the pages on the "),k={href:"https://oxrs.io/",target:"_blank",rel:"noopener noreferrer"},T=t("OXRS Docs website"),R=t(" have been setup to allow you to edit them directly using the Github website interface."),S=e("h3",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),x=e("hr",null,null,-1),I=e("p",null,"You must have a Github account to make changes using the Github website.",-1),O={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},E=t("Github"),q=e("h4",{id:"editing-pages-online",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editing-pages-online","aria-hidden":"true"},"#"),t(" Editing pages online")],-1),G=t("Simply navigate to the page you're wanting to edit on the "),N={href:"https://oxrs.io/",target:"_blank",rel:"noopener noreferrer"},X=t("OXRS Docs"),P=t(" website, then scroll to the bottom of the page and click on the "),C={href:"https://github.com/OXRS-IO/OXRS-IO-WEBSITE/edit/main/docs/guides/writing-docs/getting-started.md",target:"_blank",rel:"noopener noreferrer"},j=t("Edit this page"),W=t(" link. This will redirect you to the pages repo location on the Github website."),D=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"If you're not already logged into Github you will prompted to do so.")],-1),B=t("You will then be presented with a simple in-page text editor, you will see two tabs "),A=e("code",null,"Edit file",-1),M=t(" and "),V=e("code",null,"Preview",-1),H=t(" to make your changes. The OXRS documents are written in Markdown, for a guide on Markdown and other supported elements please see our "),F=t("Markdown Guide"),L=t("."),Y=a('<h3 id="commiting-your-changes" tabindex="-1"><a class="header-anchor" href="#commiting-your-changes" aria-hidden="true">#</a> Commiting your changes</h3><hr><p>Once you are happy with your changes, please add a description with option extended description in the <code>Commit changes</code> section at the bottom of the page and click <code>Commit changes</code>.</p><p>This will create a merge request that will be reviewed by a member of the OXRS Core Team and merged once accepted.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You cannot add/remove pages using this method.</p></div><h2 id="edit-pages-locally" tabindex="-1"><a class="header-anchor" href="#edit-pages-locally" aria-hidden="true">#</a> Edit pages locally</h2>',6),U=t("All of the pages on the "),$={href:"https://oxrs.io/",target:"_blank",rel:"noopener noreferrer"},z=t("OXRS Docs website"),J=t(" can be edited including adding assets, new pages and navigation changes. The project is setup on Git and has a local development server built in to make editing locally easier."),K=e("h3",{id:"prerequisites-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites-1","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),Q=e("hr",null,null,-1),Z={href:"https://github.com/git-guides/install-git",target:"_blank",rel:"noopener noreferrer"},ee=t("Git"),te={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},oe=t("Node.js v12+"),ne={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},ie=t("VSCode"),ae=t(" or some text editor"),se=e("h3",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),re=e("hr",null,null,-1),le=e("p",null,"[TODO INSERT INTRO TEXT HERE]",-1),de=e("h4",{id:"step-1-fork-the-main-repo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-1-fork-the-main-repo","aria-hidden":"true"},"#"),t(" Step 1 - Fork the Main Repo")],-1),ce=e("hr",null,null,-1),he=t("Navigate to the "),ue={href:"https://github.com/OXRS-IO/OXRS-IO-WEBSITE",target:"_blank",rel:"noopener noreferrer"},pe=t("OXRS-IO-WEBSITE repo"),ge=t(" on Github."),me=a(`<p>Click the <code>Fork</code> button on the top right, and fork it to your Git account.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This will create a clone of the repo on your own account. Here you can make the changes you wish without affecting the live project.</p></div><h4 id="step-2-clone-your-forked-repo-locally" tabindex="-1"><a class="header-anchor" href="#step-2-clone-your-forked-repo-locally" aria-hidden="true">#</a> Step 2 - Clone your Forked Repo locally</h4><hr><p>To clone and pull down your repo, click the <code>Code</code> button, and copy the url (select HTTPS or GitHub CLI whichever is your prefered method).</p><p>Then run the following command in your Terminal to pull down the repo.</p><p><code>$ git clone https://github.com/&lt;username&gt;/OXRS-IO-WEBSITE</code></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Replace the url with the one copied from your Repo.</p></div><h4 id="step-3-install-and-run-website-locally" tabindex="-1"><a class="header-anchor" href="#step-3-install-and-run-website-locally" aria-hidden="true">#</a> Step 3 - Install and run website locally</h4><hr><p>After Forking the OXRS Main Repo and cloning your repo down to your local machine you can begin to install the project. To install the OXRS Doc Website and get the local development server running follow these steps:</p><ol><li>Open project directory in chosen IDE.</li><li>Using Terminal cd into the project directory.</li><li>run command <code>npm i</code> this will install all the project dependancies.</li><li>To run the local development server run the following command in your terminal <code>npm run dev</code>.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This will build and serve the project files and automatically launch your web browser showing your local version of the OXRS Docs website.</p><p>The local development server has hot reloading and listens for changes in the directory files. This automatically rebuilds and reloads your browser to allow you to see your latest changes.</p></div><ol start="5"><li>To stop the local development server simple press <code>control+C</code> in the terminal running the development server.</li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The development server can run slowly. Be aware that every change you make the development server is rebuilding the project and serving it your local browser so please be paitent.</p></div><h4 id="step-3-1-validate-changes-to-the-nav-or-sidebar" tabindex="-1"><a class="header-anchor" href="#step-3-1-validate-changes-to-the-nav-or-sidebar" aria-hidden="true">#</a> Step 3.1 - Validate changes to the NAV or Sidebar</h4><p>If you have made any changes to the <code>config.nav.js</code> or <code>config.sidebar.js</code> files, validate your changes before commiting.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run validate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will run and validate all items conform to link standards.</p><h4 id="step-4-commit-and-push-your-changes" tabindex="-1"><a class="header-anchor" href="#step-4-commit-and-push-your-changes" aria-hidden="true">#</a> Step 4 - Commit and Push your changes</h4><hr><p>Then next step is to commit, push the code up and rasie a Pull Request for youer changes to be reviewed and hopfully merged.</p><p>In your terminal, run the following commands:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ensure you are located in your repos directory in your terminal for example <code>&lt;user&gt;:OXRS-IO-WEBSITE/</code> before running any of these commands.</p></div><p>To see the current status of your local repo in your terminal run <code>git status</code> this will list all of your current uncommmited changes.</p><p>If you want to add any files youe have changed, run the following command in your terminal <code>git add {file path}</code> or <code>git add .</code> to add all.</p><p>Now we can commit the changes locallyby running the folling command in your terminal:</p><p><code>git commit -m &quot;&lt;Add a message here explaining your changes&gt;&quot;</code></p><p>You can now push your changes to your Github account, simply enter the following command in your terminal:</p><p><code>git push</code></p><h4 id="step-5-raise-a-pull-request" tabindex="-1"><a class="header-anchor" href="#step-5-raise-a-pull-request" aria-hidden="true">#</a> Step 5 - Raise a Pull Request</h4><hr><p>Navigate back to your repo on github.com</p><p>You should notice that the repo shows that the files have recently been updated. Please ensure you review all your changes, comments and other information to assist with the merge.</p><p>Finally you are now ready to rasie a Pull Request (PR).</p><p>In your Repo on Github select the tab <code>Pull requests</code> and click on the <code>New pull request</code> button.</p><h4 id="merge-requests" tabindex="-1"><a class="header-anchor" href="#merge-requests" aria-hidden="true">#</a> Merge requests</h4><hr><p>Someone from the OXRS Core Team will review all merge requests and if any changes need to be made, they will comment on the PR (Pull Request) you have raised.</p><p>Once the merge has been accepted, it will be merged into the main branch and deployed automaticalto the live website.</p>`,40);function _e(be,ye){const n=i("ExternalLinkIcon"),s=i("RouterLink");return l(),d("div",null,[u,e("div",p,[g,e("p",null,[m,e("a",_,[b,o(n)])])]),y,f,w,e("p",null,[v,e("a",k,[T,o(n)]),R]),S,x,I,e("ul",null,[e("li",null,[e("a",O,[E,o(n)])])]),q,e("p",null,[G,e("a",N,[X,o(n)]),P,e("a",C,[j,o(n)]),W]),D,e("p",null,[B,A,M,V,H,o(s,{to:"/guides/writing-docs/markdown.html"},{default:c(()=>[F]),_:1}),L]),Y,e("p",null,[U,e("a",$,[z,o(n)]),J]),K,Q,e("ul",null,[e("li",null,[e("a",Z,[ee,o(n)])]),e("li",null,[e("a",te,[oe,o(n)])]),e("li",null,[e("a",ne,[ie,o(n)]),ae])]),se,re,le,de,ce,e("p",null,[he,e("a",ue,[pe,o(n)]),ge]),me])}var we=r(h,[["render",_e],["__file","index.html.vue"]]);export{we as default};
