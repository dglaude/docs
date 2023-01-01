"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6968],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(7462),r=t(7294),l=t(6010),i=t(2389),s=t(7392),o=t(7094),d=t(2466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:n,block:t,defaultValue:i,values:u,groupId:h,className:m}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,s.l)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const z=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==z&&!v.some((e=>e.value===z)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${z}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,o.U)(),[y,w]=(0,r.useState)(z),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=h){const e=f[h];null!=e&&e!==y&&v.some((n=>n.value===e))&&w(e)}const W=e=>{const n=e.currentTarget,t=N.indexOf(n),a=v[t].value;a!==y&&(O(n),w(a),null!=h&&b(h,String(a)))},B=e=>{let n=null;switch(e.key){case"Enter":W(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},v.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:e=>N.push(e),onKeyDown:B,onClick:W},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":y===n})}),t??n)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function h(e){const n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},5059:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(7462),r=(t(7294),t(3905));t(828);const l={toc:[]};function i(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Sponsor-Token erforderlich",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,r.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),".")))}i.isMDXComponent=!0},4529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=(t(828),t(5488),t(5162),t(5059));const i={sidebar_position:3},s="Fahrzeuge",o={unversionedId:"devices/vehicles",id:"devices/vehicles",title:"Fahrzeuge",description:"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren.",source:"@site/docs/devices/vehicles.mdx",sourceDirName:"devices",slug:"/devices/vehicles",permalink:"/docs/devices/vehicles",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/devices/vehicles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hausinstallation",permalink:"/docs/devices/meters"},next:{title:"\xdcbersicht",permalink:"/docs/reference/overview"}},d={},p=[{value:"Audi",id:"audi",level:2},{value:"Andere",id:"andere",level:3},{value:"e-tron",id:"e-tron",level:3},{value:"BMW",id:"bmw",level:2},{value:"Citro\xebn",id:"citro\xebn",level:2},{value:"Dacia",id:"dacia",level:2},{value:"DS",id:"ds",level:2},{value:"Fiat",id:"fiat",level:2},{value:"Ford",id:"ford",level:2},{value:"Hyundai Bluelink",id:"hyundai-bluelink",level:2},{value:"Jaguar",id:"jaguar",level:2},{value:"Kia Bluelink",id:"kia-bluelink",level:2},{value:"Land Rover",id:"land-rover",level:2},{value:"Mini",id:"mini",level:2},{value:"Nissan",id:"nissan",level:2},{value:"Leaf",id:"leaf",level:3},{value:"Leaf (pre 2019)",id:"leaf-pre-2019",level:3},{value:"Opel",id:"opel",level:2},{value:"Peugeot",id:"peugeot",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Renault",id:"renault",level:2},{value:"Seat",id:"seat",level:2},{value:"Andere",id:"andere-1",level:3},{value:"Cupra Born, My Cupra",id:"cupra-born-my-cupra",level:3},{value:"Skoda",id:"skoda",level:2},{value:"Andere",id:"andere-2",level:3},{value:"Enyaq",id:"enyaq",level:3},{value:"Smart EQ",id:"smart-eq",level:2},{value:"Tesla",id:"tesla",level:2},{value:"Volkswagen",id:"volkswagen",level:2},{value:"We Connect (legacy)",id:"we-connect-legacy",level:3},{value:"We Connect ID",id:"we-connect-id",level:3},{value:"Volvo",id:"volvo",level:2},{value:"Generische Unterst\xfctzung",id:"generische-unterst\xfctzung",level:2},{value:"manuell",id:"manuell",level:3},{value:"evNotify",id:"evnotify",level:3},{value:"Offline",id:"offline",level:3},{value:"Open Vehicle Monitoring System",id:"open-vehicle-monitoring-system",level:3},{value:"Tronity  \ud83d\udc9a",id:"tronity--",level:3},{value:"Scooter",id:"scooter",level:2},{value:"NIU E-Scooter",id:"niu-e-scooter",level:3},{value:"Seat M\xd3",id:"seat-m\xf3",level:3},{value:"Silence S01/S02",id:"silence-s01s02",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fahrzeuge"},"Fahrzeuge"),(0,r.kt)("p",null,"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren."),(0,r.kt)("p",null,"In der Konfigurationsdatei gibt es hierzu den folgenden Bereich:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: ev\n    type: ...\n")),(0,r.kt)("p",null,"Auf dieser Seite findest du die Konfigurationen f\xfcr alle von evcc unterst\xfctzten Fahrzeuge.\nNachdem du das Code-Beispiel f\xfcr dein Fahrzeug angepasst und in die ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," \xfcbernommen hast, kannst du die Verbindung mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," testen. Dabei werden alle konfigurierten Fahrzeuge getestet. Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc vehicle --name my_ev")," kann man mittels des vergebenen Namens selektiv testen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./evcc vehicle\n\nSoC:           57%\nCharge status: B\nCharged:       4.7kWh\nCapacity:      77kWh\nRange:         280km\nOdometer:      4131km\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Qualit\xe4t und Verf\xfcgbarkeit der Fahrzeugschnittstellen variiert von Hersteller zu Hersteller. Solltest du anhaltende Probleme mit dem aktualisieren deiner Fahrzeugdaten haben melde dich bitte in den ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"GitHub Discussions"),".")),(0,r.kt)("h2",{id:"audi"},"Audi"),(0,r.kt)("h3",{id:"andere"},"Andere"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: audi\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"e-tron"},"e-tron"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: etron\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"bmw"},"BMW"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: bmw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"citro\xebn"},"Citro\xebn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: citroen\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"dacia"},"Dacia"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: dacia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 27.4 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"ds"},"DS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ds\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"fiat"},"Fiat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional\n    pin: # Optional \n")),(0,r.kt)("h2",{id:"ford"},"Ford"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ford\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WF0FXX... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"hyundai-bluelink"},"Hyundai Bluelink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: hyundai\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch # Optional \n")),(0,r.kt)("h2",{id:"jaguar"},"Jaguar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"kia-bluelink"},"Kia Bluelink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: kia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch # Optional \n")),(0,r.kt)("h2",{id:"land-rover"},"Land Rover"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"mini"},"Mini"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mini\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"nissan"},"Nissan"),(0,r.kt)("h3",{id:"leaf"},"Leaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: nissan\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"leaf-pre-2019"},"Leaf (pre 2019)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: carwings\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"opel"},"Opel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: opel\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WP0... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"peugeot"},"Peugeot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: peugeot\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"porsche"},"Porsche"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: porsche\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"renault"},"Renault"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: renault\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WREN... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"seat"},"Seat"),(0,r.kt)("h3",{id:"andere-1"},"Andere"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"cupra-born-my-cupra"},"Cupra Born, My Cupra"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"skoda"},"Skoda"),(0,r.kt)("h3",{id:"andere-2"},"Andere"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: skoda\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"enyaq"},"Enyaq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: enyaq\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"smart-eq"},"Smart EQ"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: smart\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 17.6 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"tesla"},"Tesla"),(0,r.kt)("p",null,"Es wird ein ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," und ein ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh")," Token f\xfcr die Kommunikation mit der Tesla API erstellt werden."),(0,r.kt)("p",null,"Folgende Apps erm\xf6glichen das Erstellen von den beiden Tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/auth-app-for-tesla/id1552058613#?platform=iphone"},"Auth app for Tesla (iOS)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=net.leveugle.teslatokens"},"Tesla Tokens (Android)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/adriankumpf/tesla_auth"},"Tesla Auth (macOS, Linux)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tesla\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    accessToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    refreshToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"volkswagen"},"Volkswagen"),(0,r.kt)("h3",{id:"we-connect-legacy"},"We Connect (legacy)"),(0,r.kt)("p",null,"\xe4ltere Modelle wie e-Up, e-Golf, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: vw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"we-connect-id"},"We Connect ID"),(0,r.kt)("p",null,"ID.3, ID.4 (funktioniert auch f\xfcr e-Golf, e-Up)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: id\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"volvo"},"Volvo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h2",{id:"generische-unterst\xfctzung"},"Generische Unterst\xfctzung"),(0,r.kt)("h3",{id:"manuell"},"manuell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: custom\n    title: Mein Auto # display name for UI\n    capacity: 50 # byttery capacity (kWh)\n    soc: # battery soc (%)\n      source: # plugin type\n      # ...\n    status: # optional charge status (A..F)\n      source: # plugin type\n      # ...\n    range: # optional electric range (km)\n      source: # plugin type\n      # ...\n")),(0,r.kt)("h3",{id:"evnotify"},"evNotify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: evnotify\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    akey:\n    token:\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"offline"},"Offline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: offline\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"open-vehicle-monitoring-system"},"Open Vehicle Monitoring System"),(0,r.kt)("p",null,"Unterst\xfctzung f\xfcr alle Fahrzeuge via ODB2 Adapter im Fahrzeug. Mehr Infos bei ",(0,r.kt)("a",{parentName:"p",href:"http://api.openvehicles.com/"},"Open Vehicle Monitoring System"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ovms\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vehicleid:\n    capacity: 12 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"tronity--"},"Tronity  \ud83d\udc9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tronity\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)(l.ZP,{mdxType:"SponsorshipRequired"}),(0,r.kt)("h2",{id:"scooter"},"Scooter"),(0,r.kt)("h3",{id:"niu-e-scooter"},"NIU E-Scooter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: niu-e-scooter\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    serial:\n    capacity: 4 # Akku-Kapazit\xe4t in kWh # Optional\n    icon: scooter # Darstellung in der UI. M\xf6gliche Werte: bike, bus, car, heater, heatercooler, heatpump, moped, motorcycle, plug, scooter, tractor, van, waterheater # Optional \n")),(0,r.kt)("h3",{id:"seat-m\xf3"},"Seat M\xd3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: silence\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,r.kt)("h3",{id:"silence-s01s02"},"Silence S01/S02"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: silence\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")))}u.isMDXComponent=!0}}]);