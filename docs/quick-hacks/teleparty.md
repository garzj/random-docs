# Teleparty

:::note
Before Teleparty began to obfuscate their extension code, it was a bit easier.

The following code works for version `3.9.1_0`, but could easily break on future releases.
:::

## View the files

Per default, Chrome on Windows places extension files into the following folder:  
`%localappdata%\Google\Chrome\User Data\Default\Extensions`

Teleparty's extension has the id `oocalimimngaihdkbihfgmpkcpnmlaoa`.

## Get into the scope of the content script

1. Open a video with Teleparty
2. In Chrome, press `Strg + Shift + J` to open your browser console
3. Select `Teleparty` instead of `top` in the dropdown

## Get access to all profile pics

<!-- prettier-ignore -->
```js
var chatApi = teleparty.pageControls.os;

func = chatApi.addIconSelector.toString();
var iconMap = {
  General: [ 'Alien.svg', 'Batman.svg', 'ChickenLeg.svg', 'Chocobar.svg', 'Cookie.svg', 'CptAmerica.svg', 'DeadPool.svg', 'Goofy.svg', 'Hamburger.svg', 'hotdog.svg', 'IceCream.svg', 'IronMan.svg', 'Mulan.svg', 'Pizza.svg', 'Poohbear.svg', 'Popcorn.svg', 'Sailor Cat.svg', 'Sailormoon.svg', 'Snow-White.svg', 'Wolverine.svg', ],
  Christmas: [ 'angel.svg', 'bell.svg', 'box.svg', 'cane.svg', 'flake.svg', 'gingerbread.svg', 'gingerbread_F.svg', 'gingerbread_M.svg', 'gloves_blue.svg', 'gloves_red.svg', 'hat.svg', 'ornament.svg', 'raindeer.svg', 'reef.svg', 'santa_F.svg', 'santa_M.svg', 'snowglobe.svg', 'snowman.svg', 'sock.svg', 'tree.svg', ],
  Halloween: [ 'bats.svg', 'candy_corn.svg', 'cat_black.svg', 'cat_white.svg', 'coffin.svg', 'eye_ball.svg', 'face_angry.svg', 'face_evil.svg', 'face_silly.svg', 'face_smile.svg', 'frankenstein.svg', 'ghost_F.svg', 'ghost_M.svg', 'gravestone.svg', 'lollipop.svg', 'moon.svg', 'mummy.svg', 'potion.svg', 'pumpkin.svg', 'pumpkin_witch.svg', 'skull_brain.svg', 'skull_candy.svg', 'skull_girl.svg', 'witch_hat.svg', ],
  Thanksgiving: [ 'acorn.svg', 'bread.svg', 'candles.svg', 'corn.svg', 'drinks.svg', 'maple_leaf.svg', 'plate_chicken.svg', 'pumpkin.svg', 'pumpkin_pie.svg', 'slice_pie.svg', 'sun_flower.svg', 'turkey_face.svg', ],
};
func = func.replaceAll('mt', 'iconMap');
func = func.replaceAll('Et[t]()', "t !== 'General'");
chatApi.addIconSelector = new Function(
  func.replace(/^[^{]*\{/, '').slice(0, -1)
);

chatApi.addIconSelector();
```