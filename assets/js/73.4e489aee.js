(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{521:function(s,t,a){"use strict";a.r(t);var e=a(8),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/osmosis-labs/osmosis/main/assets/banner.png",alt:"Banner"}})]),s._v(" "),a("h1",{attrs:{id:"digitalocean-rpc-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#digitalocean-rpc-setup"}},[s._v("#")]),s._v(" Digitalocean - rpc setup")]),s._v(" "),a("p",[s._v("This examples creates a single droplet in Digitalocean that:")]),s._v(" "),a("ul",[a("li",[s._v("runs the latest osmosisd binary")]),s._v(" "),a("li",[s._v("authomatically syncs the state from a pruned snapshot")])]),s._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),a("h3",{attrs:{id:"create-digitalocean-api-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-digitalocean-api-token"}},[s._v("#")]),s._v(" Create DigitalOcean API Token")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Get an API token from "),a("a",{attrs:{href:"https://cloud.digitalocean.com/account/api",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("Export the token to an environment variable. Do not share this token as it gives access to your console.")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('export DIGITALOCEAN_TOKEN="your_personal_access_token"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"create-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-infrastructure"}},[s._v("#")]),s._v(" Create infrastructure")]),s._v(" "),a("ol",[a("li",[s._v("Initialize terraform:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Create a plan:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" plan\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Inspect the plan and then deploy the infrastructure:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" apply\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("Get ssh instructions:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("terraform output --raw  ssh_help \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Expected output:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" key:\nterraform output --raw private_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" droplet.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" droplet.key\n\nConnect to the instancs:\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -i droplet.key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("Follow the instructions to ssh into the droplet:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("terraform output --raw private_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" droplet.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" droplet.key\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -i droplet.key "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <IP> will be the actual ip of the droplet")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("The nodes are configured to accept traffic to port "),a("code",[s._v("22")]),s._v(" from anywhere which is not\ngenerally recommended for production setup.")]),s._v(" "),a("p",[s._v("Please setup firewall rules according to your needs.")])]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("Wait for the node to be initialized. The droplets is initialized via the "),a("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis-installer",target:"_blank",rel:"noopener noreferrer"}},[s._v("osmosis-installer"),a("OutboundLink")],1),s._v(" which installs the necessary packages and statesync the node. You can follow the process with:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f /var/log/cloud-init-output.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("Play around with your osmosis node!")])])])}),[],!1,null,null,null);t.default=r.exports}}]);