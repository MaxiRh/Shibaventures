import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as null_to_empty, v as validate_component } from "../../chunks/index.js";
const CollectionButton_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".buttons.svelte-9svarx{display:flex;justify-content:center}button.svelte-9svarx{font-size:100%;padding:2vw;padding-top:3vw;padding-bottom:3vw;border:none;border-radius:5px;cursor:pointer;transition:0.3s;width:55%}button.svelte-9svarx:hover{background-color:#ccc}img.svelte-9svarx{width:100%;height:auto}.spacer.svelte-9svarx{margin-top:40px;margin-bottom:40px}",
  map: null
};
let buttonSoonText = "Release soon";
const CollectionButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pixelation = new URL("./images/Pixelation.png", import.meta.url).href;
  const soonImage = new URL("./images/ShibaWebsiteSoonCover.png", import.meta.url).href;
  $$result.css.add(css$8);
  return `<div class="${"buttons svelte-9svarx"}"><button style="${"opacity: 1"}" class="${"svelte-9svarx"}">${pixelation ? `<img${add_attribute("src", pixelation, 0)} alt="${"Pixelation Collection"}" class="${"svelte-9svarx"}">` : ``}
      Collection: Pixelation
    </button></div>

  <div class="${"spacer svelte-9svarx"}"></div>

  <div class="${"buttons svelte-9svarx"}"><button style="${"opacity: 0.9"}" class="${"svelte-9svarx"}">${soonImage ? `<img${add_attribute("src", soonImage, 0)}${add_attribute("alt", buttonSoonText, 0)} class="${"svelte-9svarx"}">` : ``}
      Collection: Strategic Movement
    </button></div>

  <div class="${"spacer svelte-9svarx"}"></div>

  <div class="${"buttons svelte-9svarx"}"><button style="${"opacity: 0.9"}" class="${"svelte-9svarx"}">${soonImage ? `<img${add_attribute("src", soonImage, 0)}${add_attribute("alt", buttonSoonText, 0)} class="${"svelte-9svarx"}">` : ``}
      Collection: To the Stars
    </button></div>
  
  <div class="${"spacer svelte-9svarx"}"></div>

  <div class="${"buttons svelte-9svarx"}"><button style="${"opacity: 0.9"}" class="${"svelte-9svarx"}">${soonImage ? `<img${add_attribute("src", soonImage, 0)}${add_attribute("alt", buttonSoonText, 0)} class="${"svelte-9svarx"}">` : ``}
      Collection: Load of Emotions
    </button></div>
  
  <div class="${"spacer svelte-9svarx"}"></div>
  
  <div class="${"buttons svelte-9svarx"}"><button style="${"opacity: 0.9"}" class="${"svelte-9svarx"}">${soonImage ? `<img${add_attribute("src", soonImage, 0)}${add_attribute("alt", buttonSoonText, 0)} class="${"svelte-9svarx"}">` : ``}
      Limited NFTs
    </button>
  </div>`;
});
const MenuButton_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: 'body.svelte-tslbex{font-family:"heebo",Helvetica,Arial,sans-serif}.menu-container.svelte-tslbex{position:relative;display:flex;justify-content:space-evenly}.button-container.svelte-tslbex{display:absolute;flex-direction:column;width:100%;position:absolute;z-index:1}.active-button.svelte-tslbex{background-color:rgb(52, 52, 54);color:white;display:block;width:10%;height:75px;border:none;border-radius:15px;cursor:pointer;transition:0.3s;margin-left:15%;margin-top:1%}.about-buttons.svelte-tslbex{display:block;width:10%;height:75px;border:2px solid black;border-radius:15px;cursor:pointer;transition:0.3s;margin-left:10%;margin-top:1%;background-color:#aa8650;color:white}.paragraph-container.svelte-tslbex{display:none;margin-top:1%;display:flex;text-align:left;width:50%;min-height:350px;z-index:1}.paragraph-container.display.svelte-tslbex{border:1px solid black;background-color:rgba(0,0,0,0.6);color:#fff;z-index:1;border-radius:25px}@media(max-width: 400px){.paragraph-container.svelte-tslbex{position:relative;width:100%;text-align:center}}.image-container.svelte-tslbex{z-index:0;position:absolute;top:0;right:0}.image.svelte-tslbex{max-width:100%;max-height:350px;object-fit:cover}h3.svelte-tslbex{align-items:flex-start}.list-div.svelte-tslbex{display:flex;flex-direction:column;align-items:flex-start;padding:5%}button.svelte-tslbex:hover{filter:brightness(0.8)}',
  map: null
};
const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeButton = 0;
  let paragraphs = [{ title: "What" }, { title: "Why" }, { title: "The Goal" }, { title: "About" }];
  $$result.css.add(css$7);
  return `<body class="${"svelte-tslbex"}"><div class="${"menu-container svelte-tslbex"}"><div class="${"button-container svelte-tslbex"}" id="${"menubuttons"}">${each(paragraphs, (paragraph, i) => {
    return `<button${add_attribute("id", "button${i + 1}", 0)} class="${escape(
      null_to_empty(activeButton === i + 1 ? "active-button" : "about-buttons"),
      true
    ) + " svelte-tslbex"}"><h3 class="${"svelte-tslbex"}">${escape(paragraph.title)}</h3></button>`;
  })}</div>
    <div class="${"paragraph-container " + escape("", true) + " svelte-tslbex"}" id="${"menuparagraphs"}">${``}
        ${``}
        ${``}
        ${``}</div>
    <div class="${"image-container svelte-tslbex"}"><img class="${"image svelte-tslbex"}"${add_attribute("src", "", 0)}${add_attribute("alt", "", 0)}></div></div>
</body>`;
});
const NavBar_svelte_svelte_type_style_lang = "";
const CollectionFields_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".container.svelte-1w1wyli{position:relative;display:flex;justify-content:center;padding-bottom:3%;padding-top:3%}.collection-topic.svelte-1w1wyli{width:18%;border:2px solid black;border-radius:25px;margin-right:1%;background-color:rgba(0,0,0,0.6);color:#fff}.header.svelte-1w1wyli{padding-top:25px;padding-bottom:5%;padding-left:5%;align-items:center}.collection-description.svelte-1w1wyli{width:40%;border:2px solid black;border-radius:25px;background-color:rgba(0,0,0,0.6);color:#fff}.description.svelte-1w1wyli{align-items:center;padding:5px}h1.svelte-1w1wyli{position:relative;display:flex;justify-content:center}",
  map: null
};
const CollectionFields = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<h1 class="${"svelte-1w1wyli"}">Important notes</h1>
<div class="${"container svelte-1w1wyli"}"><div class="${"collection-topic svelte-1w1wyli"}"><p class="${"header svelte-1w1wyli"}">Important reminder for owners of my NFTs:<br>
            Please read this carefully to stay safe and avoid scams.</p></div>
    <div class="${"collection-description svelte-1w1wyli"}"><p class="${"description svelte-1w1wyli"}"></p><ul><li>To ensure the safety and security of your NFTs, it is important to store them responsibly. One option is to use a hardware wallet.</li>
                <li>Never share your private keys with anyone, as this can lead to loss of access or scamming.</li>
                <li>Hold onto your NFTs for a longer period of time, as their value is likely to increase due to scarcity. Avoid the temptation to sell them for a quick profit.</li>
                <li>If you come across a collection that you think may be linked to this project, verify it on this website. All of the available collections are listed below.</li>
                <li>Please note that I am not a financial advisor and it is important to do your own research before buying NFTs and understanding the potential risks involved.</li></ul></div>
</div>`;
});
const progressBar_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".progress.svelte-jshblk{width:70%;height:10px;align-self:center;border-radius:10px;overflow:hidden}.progress-container.svelte-jshblk{display:flex;justify-content:center}.element-alignment.svelte-jshblk{position:relative}.percentage.svelte-jshblk{position:absolute;top:0;right:0;padding-right:10%;padding-top:8%;font-size:200%}h3.svelte-jshblk{text-align:left;margin-left:50px;font-size:150%}p.svelte-jshblk{text-align:left;margin-left:50px}",
  map: null
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress = 0 } = $$props;
  let { description = "" } = $$props;
  let { text = "" } = $$props;
  let { maxAmount = 100 } = $$props;
  let { date = "" } = $$props;
  function getPercentage2() {
    return Math.round(100 / maxAmount * progress);
  }
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.maxAmount === void 0 && $$bindings.maxAmount && maxAmount !== void 0)
    $$bindings.maxAmount(maxAmount);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css$5);
  return `<div class="${"description-container"}"><div class="${"element-alignment svelte-jshblk"}"><div class="${"describtion"}"><h3 class="${"svelte-jshblk"}">${escape(description)}</h3></div>
        <div class="${"percentage svelte-jshblk"}">${escape(getPercentage2())}%
        </div></div>
    <p class="${"svelte-jshblk"}">Due to: ${escape(date)}</p>
    ${progress === 0 ? `<p class="${"svelte-jshblk"}">Not started yet!</p>` : `${progress !== maxAmount ? `<p class="${"svelte-jshblk"}">${escape(text)}</p>` : `<p class="${"svelte-jshblk"}">The collection is finished and released.</p>`}`}</div>
<div class="${"progress-container svelte-jshblk"}"><progress class="${"progress svelte-jshblk"}"${add_attribute("value", progress, 0)}${add_attribute("max", maxAmount, 0)}></progress>
</div>`;
});
const ProgressArea_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".main-container.svelte-16wled0{position:relative;display:flex;justify-content:space-evenly}.image-container.svelte-16wled0{z-index:0;position:absolute;top:0;right:0}.image.svelte-16wled0{max-width:100%;max-height:700px;object-fit:cover}.progressButton.svelte-16wled0{width:100%;justify-content:left;height:40px;position:relative;display:flex;justify-content:space-evenly;text-align:center;padding-bottom:7%;background-color:#816439}.collection-progress.svelte-16wled0{margin-left:5%;width:50%;justify-content:left;border:2px solid black;border-radius:0px;z-index:1}.collection-progress.active.svelte-16wled0{border-bottom-left-radius:15px;border-bottom-right-radius:15px;background-color:rgb(52, 52, 54, 0.7);color:white}.spacer.svelte-16wled0{margin-top:40px;margin-bottom:40px}h2.svelte-16wled0{color:white}button.svelte-16wled0:hover{filter:brightness(0.8)}",
  map: null
};
const ProgressArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const backImage = new URL("./images/BackgroundThumbsUpShiba.png", import.meta.url).href;
  $$result.css.add(css$4);
  return `<div class="${"main-container svelte-16wled0"}"><div class="${["collection-progress svelte-16wled0", "active"].join(" ").trim()}"><button class="${"progressButton svelte-16wled0"}">${`<h2 class="${"svelte-16wled0"}">Hide Collection Progress</h2>`}</button>
        ${`<div class="${"spacer svelte-16wled0"}"></div>
            ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      progress: 38,
      description: "Pixelation Collection:",
      text: "This collection is almost done.",
      maxAmount: 42,
      date: "January 2023"
    },
    {},
    {}
  )}
            <div class="${"spacer svelte-16wled0"}"></div>
            ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      progress: 4,
      description: "Strategic Movement:",
      text: "This collection just got started",
      maxAmount: 36,
      date: "Mid February 2023"
    },
    {},
    {}
  )}
            <div class="${"spacer svelte-16wled0"}"></div>
            ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      progress: 0,
      description: "To the Stars:",
      text: "",
      date: "Mid March 2023"
    },
    {},
    {}
  )}
            <div class="${"spacer svelte-16wled0"}"></div>
            ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      progress: 0,
      description: "Handful of Emotions:",
      text: "",
      date: "May 2023"
    },
    {},
    {}
  )}
            <div class="${"spacer svelte-16wled0"}"></div>
            ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      progress: 0,
      description: "Limited Edition:",
      text: "",
      date: "continuously"
    },
    {},
    {}
  )}
            <div class="${"spacer svelte-16wled0"}"></div>`}</div>
    <div class="${"image-container svelte-16wled0"}"><img class="${"image svelte-16wled0"}"${add_attribute("src", backImage, 0)}${add_attribute("alt", "", 0)}></div>
</div>`;
});
const ContactArea_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".main-container.svelte-1dqzdnr{border-color:2px solid black;width:90%;background-color:rgba(0,0,0,0.6);position:relative;display:flex;justify-content:space-evenly;height:auto;margin:10px auto;border-radius:10px}.twitter-surrounding.svelte-1dqzdnr{width:64px;height:64px;background-color:white;border-radius:5px;justify-content:center;display:flex}.contact-right.svelte-1dqzdnr{padding-top:10%;padding-left:10%;padding-bottom:10%;color:white}.portrait-left.svelte-1dqzdnr{align-items:left;align-items:center}.image-self.svelte-1dqzdnr{height:350px;width:auto;align-self:left;padding:15%}.twitter-image.svelte-1dqzdnr{width:48px;height:auto;align-self:center;padding-top:8px}",
  map: null
};
const ContactArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { resize = false } = $$props;
  const imageSelf = new URL("./images/MeMyselfandI.png", import.meta.url).href;
  const imageTwitter = new URL("./images/twitter.png", import.meta.url).href;
  if ($$props.resize === void 0 && $$bindings.resize && resize !== void 0)
    $$bindings.resize(resize);
  $$result.css.add(css$3);
  return `<div class="${"main-container svelte-1dqzdnr"}"${add_attribute(
    "style",
    resize ? "flex-direction:column;" : "flex-direction:row;",
    0
  )}><div class="${"portrait-left svelte-1dqzdnr"}"><img class="${"image-self svelte-1dqzdnr"}"${add_attribute("src", imageSelf, 0)} alt="${""}"></div>
    <div class="${"contact-right svelte-1dqzdnr"}"><h1>Contact</h1>
        <h3>Follow me on Twitter:</h3>
        <div class="${"twitter-surrounding svelte-1dqzdnr"}"><a href="${"https://twitter.com/Maxi49009969"}"><img class="${"twitter-image svelte-1dqzdnr"}"${add_attribute("src", imageTwitter, 0)} alt="${"Twitter logo"}"></a></div>
        <br>
        ETH Address: 0xbb94D89892f6243BD5A6d2aa44C3246BCD2686Ba
    </div>
</div>`;
});
const BurnBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".outer-container.svelte-1e2ok03{flex-direction:column;display:flex}.container.svelte-1e2ok03{display:flex;align-items:center;flex-direction:row}.burn-image.svelte-1e2ok03{display:flex-end;align-items:right;margin-left:auto;background-size:contain;background-position:center;background-repeat:no-repeat;height:450px;width:450px;z-index:0}.burn-container.svelte-1e2ok03{display:flex-end;z-index:1}#progress-circle.svelte-1e2ok03{background:var(--background);border-radius:50%;width:300px;height:300px;transition:all 1000ms ease-in;will-change:transform;z-index:1}.text-container.svelte-1e2ok03{display:flex;justify-content:center;align-items:center}",
  map: null
};
let currentValue = 0;
let maxValue = 1e10;
function addPointstoNumbers(number) {
  return number.toLocaleString("de-DE");
}
function getPercentage() {
  return currentValue / maxValue;
}
const BurnBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssVarStyles;
  let { margin = 40 } = $$props;
  const backImage = new URL("./images/WebsiteITsFine.png", import.meta.url).href;
  let progress = getPercentage();
  const angle = 360 * progress;
  const background = `radial-gradient(#FBCE8C 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(yellow 0deg, orange 90deg, darkorange 180deg, red);`;
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  $$result.css.add(css$2);
  cssVarStyles = `--background:${background}`;
  return `<div class="${"outer-container svelte-1e2ok03"}"><div class="${"container svelte-1e2ok03"}"><div class="${"burn-container svelte-1e2ok03"}" style="${"margin-left:" + escape(margin, true) + "%"}"><div id="${"progress-circle"}"${add_attribute("style", cssVarStyles, 0)} class="${"svelte-1e2ok03"}">${escape(Math.round(progress * 100))}%</div></div>
        <div class="${"burn-image svelte-1e2ok03"}" style="${"background-image: url(" + escape(backImage, true) + ")"}"></div></div></div>
<div class="${"text-container svelte-1e2ok03"}"><h3>${escape(addPointstoNumbers(currentValue))} from ${escape(addPointstoNumbers(maxValue))} SHIB tokens burnt</h3>
</div>`;
});
const BurnProof_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".burn-proof-button.svelte-u0tsy4{background-color:#aa8650;color:white}.burn-container.svelte-u0tsy4{display:flex;justify-content:center}button.svelte-u0tsy4:hover{filter:brightness(0.8)}",
  map: null
};
const BurnProof = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"burn-container svelte-u0tsy4"}"><button class="${"burn-proof-button svelte-u0tsy4"}"><h2>No burn data available yet!</h2></button>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header-text.svelte-1vxq0gi{width:80%;margin:0 auto;text-align:center;color:white;border:2px solid black;background-color:rgba(0,0,0,0.6);border-radius:15px}.menu-area.svelte-1vxq0gi{margin-bottom:10px}.collection-area.svelte-1vxq0gi{margin-top:10px}.background-image.svelte-1vxq0gi{background-repeat:no-repeat;background-position:center}.background-image-redline.svelte-1vxq0gi{background-position:right;background-repeat:no-repeat;background-position:center}.spacer.svelte-1vxq0gi{margin-top:40px;margin-bottom:40px}.big-spacer.svelte-1vxq0gi{margin-bottom:300px}h1.svelte-1vxq0gi{text-align:center}h2.svelte-1vxq0gi{text-align:center}.header-image.svelte-1vxq0gi{align-items:center;justify-content:center;width:100%;height:auto}body.svelte-1vxq0gi{background:linear-gradient(to bottom, #FBCE8C, #aa8650)\n    }.svelte-1vxq0gi{font-family:"heebo",Helvetica,Arial,sans-serif}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  const imgUrl = new URL("../images/Shibaventures.png", import.meta.url).href;
  const blueLines = new URL("../images/BackgroundBlueLines2.png", import.meta.url).href;
  const greenLines = new URL("../images/BackgroundGreenLines.png", import.meta.url).href;
  const redLines = new URL("../images/RedMirrorImage.png", import.meta.url).href;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<body class="${"svelte-1vxq0gi"}"><div class="${"header-image svelte-1vxq0gi"}"><img class="${"header-image svelte-1vxq0gi"}"${add_attribute("src", imgUrl, 0)} alt="${"Shibaventures"}">

    <div class="${"header-text svelte-1vxq0gi"}">${`<h2 class="${"svelte-1vxq0gi"}">Welcome to our Shiba Inu-dedicated community project, where you can not only purchase unique NFTs, but also contribute to the burning of Shib Tokens.</h2>
            <h3 class="${"svelte-1vxq0gi"}">By participating in this project, you are not only adding to your art collection, but also increasing the value of your NFTs through the burning of tokens. Our NFTs are naturally more valuable because of this process. We hope you enjoy browsing our collection!</h3>
            <h3 class="${"svelte-1vxq0gi"}">Start of the Project: January 2023</h3>`}</div></div>
${`${validate_component(BurnBar, "BurnBar").$$render($$result, { margin: 15 }, {}, {})}
    <style class="${"svelte-1vxq0gi"}">.background-image{
            background-size: cover;
        }
    </style>`}





<div class="${"button-menu svelte-1vxq0gi"}"><div class="${"background-image svelte-1vxq0gi"}" style="${"background-image: url(" + escape(blueLines, true) + ")"}"><div class="${"big-spacer svelte-1vxq0gi"}"></div>
        <div class="${"menu-area svelte-1vxq0gi"}">${validate_component(MenuButton, "MenuButton").$$render($$result, {}, {}, {})}</div></div>
    <div class="${"spacer svelte-1vxq0gi"}"></div>
    <h1 class="${"svelte-1vxq0gi"}">Burn proof section </h1>
    ${validate_component(BurnProof, "BurnProof").$$render($$result, {}, {}, {})}

    <div class="${"big-spacer svelte-1vxq0gi"}"></div>
    
    <div class="${"background-image svelte-1vxq0gi"}" style="${"background-image: url(" + escape(greenLines, true) + ")"}">${validate_component(CollectionFields, "CollectionFields").$$render($$result, {}, {}, {})}

        <div class="${"big-spacer svelte-1vxq0gi"}"></div></div>

    <div class="${"collection-area svelte-1vxq0gi"}"><h1 class="${"svelte-1vxq0gi"}">The NFT Collections</h1>
        <div class="${"background-image-redline svelte-1vxq0gi"}" style="${"background-image: url(" + escape(redLines, true) + ")"}">${validate_component(CollectionButton, "CollectionButton").$$render($$result, {}, {}, {})}</div></div></div>
<div class="${"big-spacer svelte-1vxq0gi"}"></div>

${validate_component(ProgressArea, "ProgressArea").$$render($$result, {}, {}, {})}
<div class="${"big-spacer svelte-1vxq0gi"}"></div>

${`${validate_component(ContactArea, "ContactArea").$$render($$result, { resize: true }, {}, {})}`}
</body>`;
});
export {
  Page as default
};
