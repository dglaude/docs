"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[545],{829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));a(828);const r={sidebar_position:3},l="macOS",s={unversionedId:"installation/macos",id:"installation/macos",title:"macOS",description:"Es wird mindestens macOS Version 10.12 (Sierra) ben\xf6tigt, \xe4ltere Versionen von macOS werden nicht unterst\xfctzt.",source:"@site/docs/installation/macos.md",sourceDirName:"installation",slug:"/installation/macos",permalink:"/docs/installation/macos",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/macos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Debian, Ubuntu, Raspberry Pi",permalink:"/docs/installation/linux"},next:{title:"Docker",permalink:"/docs/installation/docker"}},p={},c=[{value:"Erstinstallation",id:"erstinstallation",level:2},{value:"Aktualisierung",id:"aktualisierung",level:2}],o={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"macos"},"macOS"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  Es wird mindestens macOS Version 10.12 (Sierra) ben\xf6tigt, \xe4ltere Versionen von macOS werden nicht unterst\xfctzt.")),(0,i.kt)("h2",{id:"erstinstallation"},"Erstinstallation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal Fenster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installiere ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),", falls es noch nicht installiert ist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F\xfcge das evcc tap hinzu:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap evcc-io/tap\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Aktualisiere den Paketbestand:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew update\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installiere evcc:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starte den evcc-Server:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew services start evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pr\xfcfe die Installation und \xf6ffne einen Browser und gibt die folgende URL ein: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),". Die evcc Oberfl\xe4che sollte im Demo Modus zu sehen sein.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stoppe den evcc-Server:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew services stop evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starte die Konfiguration und folge den Anweisungen im Terminal Fenster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure\n")),(0,i.kt)("p",{parentName:"li"},"Sofern alle Ger\xe4te korrekt konfiguriert sind, kannst du mit den n\xe4chsten Schritten fortfahren."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Fortgeschrittene Anwender (z.B. mit EVCC Erfahrung oder technischem Know-How) k\xf6nnen auch alternativ folgenden Aufruf verwenden:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure --advanced\n")),(0,i.kt)("p",{parentName:"admonition"},"Dieser Modus bietet weitere (technisch fortgeschrittene) Einstellm\xf6glichkeiten."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Teste ob die Konfiguration funktioniert:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc -c evcc.yaml\n")),(0,i.kt)("p",{parentName:"li"},"\xd6ffne einen Browser und gibt die folgende URL ein: http://localhost:7070. Die evcc Oberfl\xe4che sollte nun mit den eigenen Ger\xe4ten zu sehen sein.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wenn alles funktioniert beende evcc durch dr\xfccken der Tastenkombination ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL-C"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verschiebe die erstellte Konfigurationsdatei in den Zielordner:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv evcc.yaml /etc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start evcc neu:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew services start evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gehe zur\xfcck zum Browser und lade die evcc Seite neu. Die Oberfl\xe4che sollte nun mit deinen konfigurierten Ger\xe4ten zu sehen sein."))),(0,i.kt)("h2",{id:"aktualisierung"},"Aktualisierung"),(0,i.kt)("p",null,"Um auf eine neue Version von evcc zu aktualisieren, f\xfchre folgende Schritte durch:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal Fenster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Aktualisiere den Paketbestand:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew update\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installiere evcc:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install evcc\n")))))}m.isMDXComponent=!0}}]);