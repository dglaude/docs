"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3993],{5418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={title:"Version 0.72",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},l=void 0,o={permalink:"/blog/2021/12/10/version-0-72",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2021-12-10/version-0-72.md",source:"@site/blog/2021-12-10/version-0-72.md",title:"Version 0.72",description:"Es hat sich in den letzten Wochen viel getan, und dar\xfcber m\xf6chten wir heute etwas ausf\xfchrlicher berichten was es alles in Version 0.72 an Neuem zu entdecken gibt.",date:"2021-12-10T00:00:00.000Z",formattedDate:"10. Dezember 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.385,hasTruncateMarker:!1,authors:[{name:"Andreas Linde",title:"Core-Team, Allrounder",url:"https://github.com/DerAndereAndi",imageURL:"https://github.com/DerAndereAndi.png",key:"derandereandi"}],frontMatter:{title:"Version 0.72",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},prevItem:{title:"Version 0.73",permalink:"/blog/2021/12/12/version-0-73"},nextItem:{title:"Neue Dokumentation und Blog",permalink:"/blog/2021/12/09/blog-und-dokumentation"}},s={authorsImageUrls:[void 0]},d=[{value:"Einfachere Installation",id:"einfachere-installation",level:2},{value:"Einfachere Konfiguration",id:"einfachere-konfiguration",level:2},{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Version 0.72",id:"version-072",level:3},{value:"Version 0.71",id:"version-071",level:3}],u={toc:d};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Es hat sich in den letzten Wochen viel getan, und dar\xfcber m\xf6chten wir heute etwas ausf\xfchrlicher berichten was es alles in Version 0.72 an Neuem zu entdecken gibt."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"evcc configure example",src:t(2805).Z,width:"1024",height:"798"})),(0,a.kt)("h2",{id:"einfachere-installation"},"Einfachere Installation"),(0,a.kt)("p",null,"Der Zugang zu ",(0,a.kt)("strong",{parentName:"p"},"evcc")," erforderte bisher doch einige technische Kenntnisse im Umgang mit dem jeweiligen Betriebssystem. F\xfcr Linux (Debian, Ubuntu, Raspberry Pi OS) und macOS gibt es nun eine deutlich vereinfachte Installation. So unterst\xfctzt ",(0,a.kt)("strong",{parentName:"p"},"evcc")," nun die Installation \xfcber die Paketmanager ",(0,a.kt)("inlineCode",{parentName:"p"},"apt")," unter Linux und ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"homebrew"))," unter macOS."),(0,a.kt)("p",null,"Hierf\xfcr haben wir die Installationsanleitungen nochmals \xfcberarbeitet und damit die Installation weiter vereinfacht. Schaut doch mal in der ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/overview"},"dazugeh\xf6rigen Dokumentation")," vorbei."),(0,a.kt)("h2",{id:"einfachere-konfiguration"},"Einfachere Konfiguration"),(0,a.kt)("p",null,"Auch die Einrichtung von ",(0,a.kt)("strong",{parentName:"p"},"evcc")," war bisher noch sehr technisch gepr\xe4gt. Seien es die Formatierungsvorgaben von ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org"},"YAML"),', welches die Synthax der Konfigurations vorgibt, oder die Ausgestaltung und Anpassung der Konfiguration der eigenen Ger\xe4te in der Konfigurationsdatei. F\xfcr den ein oder anderen sind das doch recht hohe H\xfcrden. Aber das Projektk ist noch jung und das Team \xfcberschaubar, vor allem wenn man bedenkt dass dies f\xfcr die Entwickler "nur" ein Hobby ist.'),(0,a.kt)("p",null,"Um diese H\xfcrden etwas zu minimieren, f\xfchren wir mit dieser neuen Version 0.72 von ",(0,a.kt)("strong",{parentName:"p"},"evcc")," eine neue Funktionalit\xe4t ein: Die gef\xfchrte Konfiguration mit ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc configure"),"."),(0,a.kt)("p",null,"Mit diesem Kommando l\xe4sst sich interaktiv eine funktionierende Konfigurationsdatei f\xfcr die eigene Installation erstellen! Es gibt sicher hier und da noch einige Probleme und Fehler, aber wir hoffen es ist ein guter erster Schritt in die richtige Richtung."),(0,a.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/linux"},"Debian, Ubuntu, Raspberry Pi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/macos"},"macOS Homebrew")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/docker"},"Docker, Synology")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/manual"},"Manuell (inkl. Windows)"))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("h3",{id:"version-072"},"Version 0.72"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.72"},"Detaillierte Liste der \xc4nderungen"))),(0,a.kt)("h3",{id:"version-071"},"Version 0.71"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.71"},"Detaillierte Liste der \xc4nderungen"))))}c.isMDXComponent=!0},2805:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/configure-0884d1a4913c5c889bee2181b18a9aa3.gif"}}]);