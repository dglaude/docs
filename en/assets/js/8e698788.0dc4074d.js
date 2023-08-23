"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[7858],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),c=n(1980),s=n(7392),u=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,s]=k({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),v=(()=>{const e=c??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,r]),tabValues:r}}var v=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(f,(0,a.Z)({},e,t)),o.createElement(N,(0,a.Z)({},e,t)))}function b(e){const t=(0,v.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},3881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=(n(8209),n(4866)),i=n(5162);const l={sidebar_position:4},c="Docker / containerd",s={unversionedId:"installation/docker",id:"installation/docker",title:"Docker / containerd",description:"evcc can be installed as a Docker / Container image. This also works on some common NAS systems, such as Synology.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/docker.mdx",sourceDirName:"installation",slug:"/installation/docker",permalink:"/en/docs/installation/docker",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/docker.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"macOS",permalink:"/en/docs/installation/macos"},next:{title:"Manual (including Windows)",permalink:"/en/docs/installation/manual"}},u={},p=[{value:"With docker-compose",id:"with-docker-compose",level:3},{value:"Useful Commands",id:"useful-commands",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"NAS systems",id:"nas-systems",level:2},{value:"Synology NAS",id:"synology-nas",level:3},{value:"QNAP NAS",id:"qnap-nas",level:4}],m={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker--containerd"},"Docker / containerd"),(0,o.kt)("p",null,"evcc can be installed as a Docker / Container image. This also works on some common NAS systems, such as Synology."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Using Docker can require some more advanced system knowledge - beginners might want to stick to one of the other installation options."),(0,o.kt)("p",{parentName:"admonition"},"This guide refers specifically to Docker / Synology. Details may differ with other systems, such as cri and podman.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Some devices and communication options won't work without specialized docker configuration options, which may not be covered in this guide.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's a good idea to test your configuration and setup in a non-docker environment first, to rule out any issues not related to containerisation.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"At the moment, only the following CPU architectures are supported:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"AMD64"),(0,o.kt)("li",{parentName:"ul"},"ARMv6"),(0,o.kt)("li",{parentName:"ul"},"aarch64\n:::")),(0,o.kt)("h2",{parentName:"admonition",id:"configuration"},"Configuration"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's best to start with a known-working evcc setup using one of the other installation methods:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"linux"},"Debian, Ubuntu, Raspberry Pi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"macos"},"macOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"manual"},"Manual Installation (including Windows)"))),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Where possible, we recommend carrying out this initial setup on the same system that you plan to run containerised evcc on."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If necessary, copy your resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," to the system that you intend to run Containerised evcc on.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a directory to store evcc's SQLite database (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.evcc"),")."))),(0,o.kt)("h2",{parentName:"admonition",id:"installation"},"Installation"),(0,o.kt)("p",{parentName:"admonition"},"The Container can either be created manually via the command line, or using a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," file."),(0,o.kt)("h3",{parentName:"admonition",id:"command-line"},"Command Line"),(0,o.kt)("p",{parentName:"admonition"},"Start the container using one of the following commands:"),(0,o.kt)(r.Z,{groupId:"docker",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"default",label:"Standard",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n-d \\\n--name evcc \\\n-v $(pwd)/evcc.yaml:/etc/evcc.yaml \\\n-v $(pwd)/.evcc:/root/.evcc \\\n-p 7070:7070 \\\n-p 8887:8887 \\\n-p 7090:7090/udp \\\n-p 9522:9522/udp \\\nevcc/evcc:latest\n")),"  "),(0,o.kt)(i.Z,{value:"sma",label:"SMA devices and EEBus",mdxType:"TabItem"},"evcc requires a static Machine ID when using SMA Sunny Home Manager. If this applies to you, append the following to your command:",(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"--network host\n-v /etc/machine-id:/etc/machine-id \\\n")),(0,o.kt)("p",{parentName:"admonition"},"Alternatively, you can define a Machine ID under the ",(0,o.kt)("inlineCode",{parentName:"p"},"plant")," key in your ",(0,o.kt)("inlineCode",{parentName:"p"},"evcc.yaml"),"."),"  "))),(0,o.kt)("p",null,"The following image tags are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"evcc/evcc:latest")," for the current stable release. (recommended)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"evcc/evcc:nightly")," for the latest, potentially unstable build.\n:::")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Depending on your installation, you may need to prepend ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag will automatically destroy the evcc container once it has stopped. You'll then need to relaunch it again with the same command.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Never")," mount the host's ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc")," directory as a volume to the container, only specific configuration files!")),(0,o.kt)("h3",{id:"with-docker-compose"},"With ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.docker.com/compose"},"docker-compose")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"docker-compose")," has some useful advantages over using the command line, especially if you want to combine other applications (such as tr\xe6fik) with evcc."),(0,o.kt)("p",null,"Simply copy the following configuration into a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," in your working directory:"),(0,o.kt)(r.Z,{groupId:"docker",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"default",label:"Standard",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'version: "3"\nservices:\n  evcc:\n    command:\n      - evcc\n    container_name: evcc\n    image: evcc/evcc:latest\n    ports:\n      - 7070:7070/tcp\n      - 8887:8887/tcp\n      - 7090:7090/udp\n      - 9522:9522/udp\n    volumes:\n      - /etc/evcc.yaml:/etc/evcc.yaml\n      - /home/[user]/.evcc:/root/.evcc\n    restart: unless-stopped\n'))),(0,o.kt)(i.Z,{value:"sma",label:"SMA Ger\xe4te und EEBus",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   network_mode: host\n   volumes:\n      - /etc/machine-id:/etc/machine-id\n      - /var/lib/dbus/machine-id:/var/lib/dbus/machine-id\n")))),(0,o.kt)("p",null,"Now start the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")),(0,o.kt)("p",null,"This will remain in the background until you stop it."),(0,o.kt)("h2",{id:"useful-commands"},"Useful Commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Show all containers:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker ps -a\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Get the logs from the evcc container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker logs evcc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Validate the meter configuration:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec evcc evcc -l debug meter\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Validate the charger configuraiton:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec evcc evcc -l debug charger\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Validate the vehicle configuration:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec evcc evcc -l debug vehicle\n")))),(0,o.kt)("p",null,"You should be able to find the evcc interface at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7070"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," with the IP address or hostname of the system you're running evcc on, if appropriate.")),(0,o.kt)("h2",{id:"upgrades"},"Upgrades"),(0,o.kt)("p",null,"To update to the latest version of evcc, follow this guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open a Terminal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Get the latest release of evcc (changing the tag if appropriate):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull evcc/evcc:latest\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Stop and remove the evcc container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker stop evcc\ndocker rm evcc\n# or\ndocker-compose down\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Restart the container using the appropriate incantation above."))),(0,o.kt)("h2",{id:"nas-systems"},"NAS systems"),(0,o.kt)("h3",{id:"synology-nas"},"Synology NAS"),(0,o.kt)("p",null,"You can install evcc via Docker on Synology NAS systems using its graphical interface, without using the command line.\nYou'll be given the choice of two network modes: bridge, or host. Whether the Bridge mode can be used depends on what components you're using, and how they communicate with your equipment.\nIn case of doubt, use host mode. Further information can be found in this useful PDF:\n(DE) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/docs/files/10365841/Anleitung.EVCC.Synology.Docker.Elli.Charger.Connect-Pro.pdf"},"Anleitung.EVCC.Synology.Docker.Elli.Charger.Connect-Pro.pdf")),(0,o.kt)("p",null,"More information on Bridge Mode can be found here:\n(DE)",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/docs/files/10365845/EVCC_Synology_Docker-2.pdf"},"EVCC_Synology_Docker-2.pdf")," (erstellt von at4hawo1)"),(0,o.kt)("h4",{id:"qnap-nas"},"QNAP NAS"),(0,o.kt)("p",null,"Installing evcc on QNAP systems via Docker is very similar to the above Synology instructions.\nFurther QNAP specific instructions can be found here:\n(DE) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/docs/files/11241693/EVCC_auf_QNAP_Container_Station.pdf"},"EVCC_auf_QNAP_Container_Station.pdf")))}k.isMDXComponent=!0}}]);