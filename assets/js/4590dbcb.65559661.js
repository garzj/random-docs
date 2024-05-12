"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[9200],{5666:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),o=s(8453);const i={title:"Setting up Fedora Gnome on a Dell XPS 17"},r="Setting up Fedora on a Dell XPS 17",a={id:"os/linux/fedora/xps-17-fedora-setup",title:"Setting up Fedora Gnome on a Dell XPS 17",description:"Here are some of my steps setting up Fedora with Gnome on a Dell XPS 17 9730.",source:"@site/docs/os/linux/fedora/xps-17-fedora-setup.md",sourceDirName:"os/linux/fedora",slug:"/os/linux/fedora/xps-17-fedora-setup",permalink:"/os/linux/fedora/xps-17-fedora-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/os/linux/fedora/xps-17-fedora-setup.md",tags:[],version:"current",lastUpdatedBy:"garzj",frontMatter:{title:"Setting up Fedora Gnome on a Dell XPS 17"},sidebar:"autoSidebar",previous:{title:"Fedora",permalink:"/category/fedora"},next:{title:"Arch",permalink:"/category/arch"}},l={},d=[{value:"Basic installation",id:"basic-installation",level:2},{value:"RPM Fusion setup",id:"rpm-fusion-setup",level:2},{value:"Setup fingerprint",id:"setup-fingerprint",level:2},{value:"Enable wayland and fractional scaling",id:"enable-wayland-and-fractional-scaling",level:2},{value:"Nvidia setup",id:"nvidia-setup",level:2},{value:"Setup electron apps to use wayland",id:"setup-electron-apps-to-use-wayland",level:2},{value:"Gnome Extensions",id:"gnome-extensions",level:2},{value:"ZSH setup",id:"zsh-setup",level:2},{value:"Oh my zsh",id:"oh-my-zsh",level:3},{value:"Increase zsh history size",id:"increase-zsh-history-size",level:3},{value:"Neovim setup",id:"neovim-setup",level:2},{value:"Theme old GTK applications",id:"theme-old-gtk-applications",level:2},{value:"Apply better settings to GDM login screen",id:"apply-better-settings-to-gdm-login-screen",level:2},{value:"Change the bootsplash",id:"change-the-bootsplash",level:2},{value:"Setup hibernation",id:"setup-hibernation",level:2},{value:"Fix sound issues",id:"fix-sound-issues",level:2},{value:"Fix lag after bluetooth device idles",id:"fix-lag-after-bluetooth-device-idles",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"More setup",id:"more-setup",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setting-up-fedora-on-a-dell-xps-17",children:"Setting up Fedora on a Dell XPS 17"}),"\n",(0,t.jsx)(n.p,{children:"Here are some of my steps setting up Fedora with Gnome on a Dell XPS 17 9730."}),"\n",(0,t.jsxs)(n.p,{children:["I got one because the motherboard of my ",(0,t.jsx)(n.a,{href:"/os/linux/arch/xps-15-installing-manjaro",children:"XPS 15"})," died and they didn't have them in stock, so they sent me a new laptop. I'm now making the switch to Fedora (from Manjaro), because it's much more stable and dnf is just great (also, my fingerprint works out of the box now)."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-installation",children:"Basic installation"}),"\n",(0,t.jsxs)(n.p,{children:["I installed Fedora with Gnome using ",(0,t.jsx)(n.a,{href:"https://www.ventoy.net/en/index.html",children:"Ventoy"})," and the latest ISO from the ",(0,t.jsx)(n.a,{href:"https://fedoraproject.org/de/workstation/download/",children:"official site"})," or use the Fedora Media Writer."]}),"\n",(0,t.jsxs)(n.p,{children:["When installed, do ",(0,t.jsx)(n.code,{children:"sudo dnf update"}),", setup the fingerprint, connectivity, a wallpaper, dark theme and mouse settings."]}),"\n",(0,t.jsx)(n.h2,{id:"rpm-fusion-setup",children:"RPM Fusion setup"}),"\n",(0,t.jsx)(n.p,{children:"RPM Fusion provides software that the Fedora Project or Red Hat doesn't want to ship."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install RPM Fusion\nsudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm\n\n# Install appstream data for rpm fusion (so that packages show up in Gnome Software)\nsudo dnf install rpmfusion-nonfree-appstream-data rpmfusion-free-appstream-data\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-fingerprint",children:"Setup fingerprint"}),"\n",(0,t.jsxs)(n.p,{children:["My fingerprint worked out of the box, but while trying to setup the reader for two accounts at the same time, I broke it and had to reset the storage of the Goodix device. ",(0,t.jsx)(n.a,{href:"https://bbs.archlinux.org/viewtopic.php?id=285848",children:"This thread"})," (or rather ",(0,t.jsx)(n.a,{href:"https://community.frame.work/t/tracking-fingerprint-scanner-compatibility-with-linux-ubuntu-fedora-etc/1501/214",children:"the program from this answer"}),") solved the issue for me."]}),"\n",(0,t.jsx)(n.h2,{id:"enable-wayland-and-fractional-scaling",children:"Enable wayland and fractional scaling"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"echo $XDG_SESSION_TYPE"})," does not show ",(0,t.jsx)(n.code,{children:"wayland"}),", make sure to set ",(0,t.jsx)(n.code,{children:"WaylandEnable=true"})," in ",(0,t.jsx)(n.code,{children:"/etc/gdm/custom.conf"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Enable fractional scaling with ",(0,t.jsx)(n.code,{children:"gsettings set org.gnome.mutter experimental-features \"['scale-monitor-framebuffer']\""}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Log out and in again."}),"\n",(0,t.jsx)(n.h2,{id:"nvidia-setup",children:"Nvidia setup"}),"\n",(0,t.jsxs)(n.p,{children:["Find the compatible driver for the GPU model ",(0,t.jsx)(n.a,{href:"https://rpmfusion.org/Howto/NVIDIA",children:"here"})," and install them."]}),"\n",(0,t.jsxs)(n.p,{children:["Some information about Nvidia Optimus can be found ",(0,t.jsx)(n.a,{href:"https://rpmfusion.org/Howto/Optimus",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup-electron-apps-to-use-wayland",children:"Setup electron apps to use wayland"}),"\n",(0,t.jsxs)(n.p,{children:["The following flags will start an electron app on native Wayland (place them inside ",(0,t.jsx)(n.code,{children:"~/.config/electron-flags.conf"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"--enable-features=UseOzonePlatform\n--ozone-platform=wayland\n--force-dark-mode\n--enable-features=WebUIDarkMode\n--enable-features=VaapiVideoEncoder,VaapiVideoDecoder,CanvasOopRasterization\n--enable-zero-copy\n--enable-raw-draw\n--use-vulkan\n--enable-features=WaylandWindowDecorations\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This script will append these flags to any program launched with it (save this as a file ",(0,t.jsx)(n.code,{children:"~/.local/share/applications/launch-electron.sh"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\napp="$1"\nshift\nconfig="$HOME/.config"\nappcfg="$config/$(basename "$app")-flags.conf"\nelectroncfg="$config/electron-flags.conf"\nif [[ -f "$appcfg" ]]; then\n\tflags="$(cat $appcfg)"\nelif [[ -f "$electroncfg" ]]; then\n\tflags="$(cat $electroncfg)"\nfi\n"$app" $@ $flags\n'})}),"\n",(0,t.jsx)(n.p,{children:"Install a few electron apps:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo dnf install unityhub code discord\n\n# VSCode (https://code.visualstudio.com/docs/setup/linux)\nsudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\nsudo sh -c 'echo -e \"[code]\\nname=Visual Studio Code\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc\" > /etc/yum.repos.d/vscode.repo'\ndnf check-update\nsudo dnf install code\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now to launch any of these apps natively on Wayland, copy its desktop file (probably ",(0,t.jsx)(n.code,{children:"/usr/share/applications/$app.desktop"}),") into ",(0,t.jsx)(n.code,{children:"~/.local/share/applications"})," append ",(0,t.jsx)(n.code,{children:"/home/username/.local/share/applications/launch-electron.sh "})," after every ",(0,t.jsx)(n.code,{children:"Exec="})," in the file."]}),"\n",(0,t.jsxs)(n.p,{children:["Now starting an application from Gnome or with ",(0,t.jsx)(n.code,{children:"gtk-launch $app"})," will pass all flags from ",(0,t.jsx)(n.code,{children:"electron-flags.conf"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"gnome-extensions",children:"Gnome Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://flathub.org/apps/com.mattjakeman.ExtensionManager",children:"Extension Manager"})," to install:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://extensions.gnome.org/extension/779/clipboard-indicator/",children:"Clipboard Indicator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I couldn't get CopyQ to work on wayland (not as nice but it's fine for now)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://extensions.gnome.org/extension/3843/just-perfection/",children:"Just Perfection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Preset: Super Minimal"}),"\n",(0,t.jsx)(n.li,{children:"Panel in Overview: On"}),"\n",(0,t.jsx)(n.li,{children:"OSD: On"}),"\n",(0,t.jsx)(n.li,{children:"Workspace Popup: On"}),"\n",(0,t.jsx)(n.li,{children:"Workspace Switcher: On"}),"\n",(0,t.jsx)(n.li,{children:"Animation: Fastest"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://extensions.gnome.org/extension/1336/run-or-raise/",children:"run or raise"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Example config (the ",(0,t.jsx)(n.code,{children:"brave-..."})," are installed PWAs):","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Terminal\n<Super>t,gnome-terminal,gnome-terminal-server\n<Super><Shift>t,gnome-terminal\n# Files\n<Super>e,nautilus --new-window,org.gnome.Nautilus\n<Super><Shift>e,nautilus --new-window\n# Bitwarden\n<Super>x,gtk-launch com.bitwarden.desktop.desktop,Bitwarden\n# Code\n<Super>c,gtk-launch code,/Code|code-url-handler/\n<Super><Shift>c,gtk-launch code\n# Spotify\n<Super>m,gtk-launch brave-pjibgclleladliembfgfagdaldikeohf-Default,brave-pjibgclleladliembfgfagdaldikeohf-Default\n# Brave\n<Super>b,gtk-launch brave-browser,brave-browser\n<Super><Shift>b,gtk-launch brave-browser\n# WhatsApp\n<Super>w,gtk-launch brave-hnpfjngllnobngcgfapefoaidbinmjnm-Default,brave-hnpfjngllnobngcgfapefoaidbinmjnm-Default\n# Discord\n<Super>d,gtk-launch Discord,Discord\n# Unity\n<Super>u,gtk-launch unityhub,Unity\n# And more...\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"zsh-setup",children:"ZSH setup"}),"\n",(0,t.jsx)(n.h3,{id:"oh-my-zsh",children:"Oh my zsh"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Some nice plugins are ",(0,t.jsx)(n.code,{children:"git zsh-syntax-highlighting zsh-history-substring-search zsh-autosuggestions"})," and a nice theme is ",(0,t.jsx)(n.a,{href:"https://github.com/romkatv/powerlevel10k",children:"powerlevel10k"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"increase-zsh-history-size",children:"Increase zsh history size"}),"\n",(0,t.jsxs)(n.p,{children:["Append the following to the end of ",(0,t.jsx)(n.code,{children:"~/.zshrc"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"HISTSIZE=999999999\nSAVEHIST=$HISTSIZE\n"})}),"\n",(0,t.jsx)(n.p,{children:"More configuration..."}),"\n",(0,t.jsx)(n.h2,{id:"neovim-setup",children:"Neovim setup"}),"\n",(0,t.jsxs)(n.p,{children:["Setup ",(0,t.jsx)(n.a,{href:"https://github.com/wbthomason/packer.nvim",children:"packer"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --depth 1 https://github.com/wbthomason/packer.nvim ~/.local/share/nvim/site/pack/packer/start/packer.nvim\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Some nice plugins are ",(0,t.jsx)(n.code,{children:"wbthomason/packer.nvim"}),", ",(0,t.jsx)(n.code,{children:"kylechui/nvim-surround"}),", ",(0,t.jsx)(n.code,{children:"numToStr/Comment.nvim"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"More setup..."}),"\n",(0,t.jsx)(n.h2,{id:"theme-old-gtk-applications",children:"Theme old GTK applications"}),"\n",(0,t.jsxs)(n.p,{children:["To make most applications look more modern follow ",(0,t.jsx)(n.a,{href:"https://github.com/lassekongo83/adw-gtk3",children:"steps from here"})," for normal and flatpak apps."]}),"\n",(0,t.jsx)(n.h2,{id:"apply-better-settings-to-gdm-login-screen",children:"Apply better settings to GDM login screen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://github.com/gdm-settings/gdm-settings",children:"GDM Settings"})]}),"\n",(0,t.jsx)(n.li,{children:"Click three dots -> Load session settings"}),"\n",(0,t.jsx)(n.li,{children:'Login Screen -> Disable "Enable Logo"'}),"\n",(0,t.jsx)(n.li,{children:"Apply"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"change-the-bootsplash",children:"Change the bootsplash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# List themes\nplymouth-set-default-theme --list\n\n# Set theme (i. e. spinner), the -R rebuilds the initrd\nsudo plymouth-set-default-theme -R spinner\n\n# Remove the watermark from the splash\ncd /usr/share/plymouth/themes\nsudo cp -r spinner spinner_adfree\ncd spinner_adfree\nsudo rm watermark.png\nsudo mv spinner.plymouth spinner_adfree.plymouth\nsudo nvim spinner.plymouth # Change occurences of spinner to spinner_adfree\nsudo plymouth-set-default-theme -R spinner\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-hibernation",children:"Setup hibernation"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"systemctl hibernate"})," does not work because of insufficient swap space, try the following."]}),"\n",(0,t.jsxs)(n.p,{children:["Determine the amount of swap space you need, which would be the amount of RAM the PC has (",(0,t.jsx)(n.code,{children:"free -h"}),") plus the amount of reserved ZRAM (",(0,t.jsx)(n.code,{children:"swapon --show"}),") plus 2GiB extra. In my case this would be 42GiB, so ",(0,t.jsx)(n.code,{children:"43008"})," bytes in total."]}),"\n",(0,t.jsxs)(n.p,{children:["Use a tool like ",(0,t.jsx)(n.a,{href:"https://gparted.org/",children:"gparted"})," while live booting to shrink the root partition and create a partition using ",(0,t.jsx)(n.code,{children:"linux-swap"})," as filesystem."]}),"\n",(0,t.jsxs)(n.p,{children:["Boot back into Fedora. Now the system could automatically pick the partition up (verify with ",(0,t.jsx)(n.code,{children:"swapon --show"}),"). If it doesn't, use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo mkswap /dev/nvme0n1p4 # Use the correct device here\nsudo swapon /dev/nvme0n1p4 # Use the correct device here\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, to make sure, the swap is mounted on startup, add an entry to ",(0,t.jsx)(n.code,{children:"/etc/fstab"})," (find the UUID with ",(0,t.jsx)(n.code,{children:"lsblk -f"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"UUID=<swap-partition-uuid> none swap defaults 0 0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, add the ",(0,t.jsx)(n.code,{children:"resume"})," module to the initramfs by creating a file ",(0,t.jsx)(n.code,{children:"/etc/dracut.conf.d/resume.conf"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'add_dracutmodules+=" resume "\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"sudo dracut --regenerate-all --force"})," to rebuild the initramfs."]}),"\n",(0,t.jsxs)(n.p,{children:["Verify that the ",(0,t.jsx)(n.code,{children:"resume"})," module shows up when running ",(0,t.jsx)(n.code,{children:"sudo lsinitrd -m"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, add ",(0,t.jsx)(n.code,{children:"resume=UUID=<swap-partition-uuid>"})," to the ",(0,t.jsx)(n.code,{children:"GRUB_CMDLINE_LINUX"})," in ",(0,t.jsx)(n.code,{children:"/etc/default/grub"})," and run ",(0,t.jsx)(n.code,{children:"sudo grub2-mkconfig"})," to confirm the changes."]}),"\n",(0,t.jsxs)(n.p,{children:["Hibernation with ",(0,t.jsx)(n.code,{children:"systemctl hibernate"})," should now work."]}),"\n",(0,t.jsx)(n.h2,{id:"fix-sound-issues",children:"Fix sound issues"}),"\n",(0,t.jsxs)(n.p,{children:["I only had ",(0,t.jsx)(n.code,{children:"Dummy Output"})," as my speaker, but ",(0,t.jsx)(n.a,{href:"https://askubuntu.com/a/1387002/1037993",children:"this answer"})," finally solved the issue for me."]}),"\n",(0,t.jsx)(n.h2,{id:"fix-lag-after-bluetooth-device-idles",children:"Fix lag after bluetooth device idles"}),"\n",(0,t.jsx)(n.p,{children:"If the mouse cursor lags after the device has been idling for a few seconds, this kernel parameter will fix the issue:"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"btusb.enable_autosuspend=0"})," to the ",(0,t.jsx)(n.code,{children:"GRUB_CMDLINE_LINUX"})," in ",(0,t.jsx)(n.code,{children:"/etc/default/grub"}),", run ",(0,t.jsx)(n.code,{children:"sudo grub2-mkconfig"})," and reboot to apply the changes."]}),"\n",(0,t.jsx)(n.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/thiagoojack/packettracer-fedora",children:"https://github.com/thiagoojack/packettracer-fedora"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"more-setup",children:"More setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo dnf groupinstall "Development Tools" "Development Libraries" # C / C++\nsudo dnf install rust cargo # Rust\n\n# Node / npm\ncurl -fsSL https://fnm.vercel.app/install | bash\n# https://github.com/Schniz/fnm#shell-setup\nfnm install --lts\nnpm i -g yarn\n\n# Platform IO (https://docs.platformio.org/en/latest/core/installation/methods/installer-script.html#super-quick-macos-linux)\ncurl -fsSL -o get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py\npython3 get-platformio.py\n# Udev rules (https://docs.platformio.org/en/latest/core/installation/udev-rules.html)\ncurl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/develop/platformio/assets/system/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules\n\n# Package manager GUI\nsudo dnf install dnfdragora\n# I had to fix https://github.com/manatools/dnfdragora/issues/152\n\n# Docker\ncurl -fsSL https://get.docker.com -o install-docker.sh\ncat install-docker.sh # verify script\nsh install-docker.sh --dry-run # verify install commands\nsh install-docker.sh # installation\nsudo systemctl enable --now docker # start service\nsudo usermod -aG docker $USER # add user to docker group\n\nsudo dnf install steam\n'})}),"\n",(0,t.jsx)(n.p,{children:"..."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);