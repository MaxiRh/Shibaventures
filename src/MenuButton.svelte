<script lang='ts'>

    let show1:Boolean = false;
    let show2:Boolean = false;
    let show3:Boolean = false;
    let show4:Boolean = false;

    // Declare the styles for the text paragraphs
    let paragraphStyles = {
        paragraph1: "display: none;",
        paragraph2: "display: none;",
        paragraph3: "display: none;",
        paragraph4: "display: none;"
    }
    let activeButton: Number = 0;

    function showParagraph(number: Number){
        paragraphStyles.paragraph1 = "display: none;";
        paragraphStyles.paragraph2 = "display: none;";
        paragraphStyles.paragraph3 = "display: none;";
        paragraphStyles.paragraph4 = "display: none;";
        show1 = false;
        show2 = false;
        show3 = false;
        show4 = false;

        // Show the text paragraph corresponding to the clicked button
        if(number == 1){
            paragraphStyles.paragraph1 = "display: block;";
            show1 = true;
        }
        else if(number == 2){
            paragraphStyles.paragraph2 = "display: block;";
            show2 = true;
        }
        else if(number == 3){
            paragraphStyles.paragraph3 = "display: block;";
            show3 = true;
        }
        else{
            paragraphStyles.paragraph4 = "display: block;";
            show4 = true;
        }
        handleButtonClick(number);
    }

    function handleButtonClick(number: Number) {
        if(activeButton === number){
            activeButton = 0;
            paragraphStyles.paragraph1 = "display: none;";
            paragraphStyles.paragraph2 = "display: none;";
            paragraphStyles.paragraph3 = "display: none;";
            paragraphStyles.paragraph4 = "display: none;";
            show1 = false;
            show2 = false;
            show3 = false;
            show4 = false;
        }else{
            activeButton = number;
        }

    }

    let paragraphs = [
        {title: "What"},
        {title: "Why"},
        {title: "The Goal"},
        {title: "About"}
    ]

    const blueLines = new URL("./images/BackGroundBlueLines2.png", import.meta.url).href

</script>
<body class="background-image" style="background-image: url({blueLines});">
<div class="menu-container">

    <div class="button-container" id="menubuttons">
        {#each paragraphs as paragraph, i}
            <button id={'button${i + 1}'} class={activeButton === i+1 ? "active-button" : "about-buttons"} on:click={() => showParagraph(i+1)}>
            <h3>{paragraph.title}</h3></button>
        {/each}
    </div>
    <div class="paragraph-container {activeButton != 0 ? 'display': ''}" id="menuparagraphs">
        {#if show1}
        <div class="list-div">
           <h3>What is this project about?</h3>
            <ul>
                <li>This project is a community effort to lower the supply of Shiba Inu Tokens by burning them. </li>
                <li>Our handcrafted, limited edition NFT art has a low supply, making it a unique and valuable investment.</li>
                <li>Over time, we plan to release multiple collections to increase the amount of burned SHIB tokens.</li>
                <li>Our goal is to build appreciation for NFT art and SHIB Tokens within the crypto world, especially within the Shib community.</li>
                <li>The burning of SHIB tokens will start at latest 1 week after collection launch. The proof will be posted on Twitter and below in the 'Burn proof' section.</li>
                <li>We have set multiple milestones to reach as we build this community and burn tokens, with the first goal being to burn 10,000,000,000 SHIB tokens.</li>
                <li>If you would like to contribute to this effort, you can use a small portion of the profits earned from selling your NFT to burn additional tokens.</li>
            </ul>
        </div>
        {/if}
        {#if show2}
        <div class="list-div">
                <h3>Why should you invest in this NFT collection?</h3>
                <ul>
                    <li>By lowering the supply through burning Shib Tokens, we are giving back to the community and increasing the scarcity and value of the collection.</li>
                    <li>These NFTs are extremely limited, with only a small number available.</li>
                    <li>Every piece in this collection is handcrafted by me, making it a truly unique and special investment.</li>
                    <li>I have plans to expand the collection with new styles in the future.</li>
                    <li>As the appreciation for this collection grows over time, the value of the NFTs will also increase.</li>
                    <li>In addition to being beautiful art, these NFTs also act as a store of value due to their scarcity and the proof of burned tokens.</li>
                </ul>
        </div>
        {/if}
        {#if show3}
        <div class="list-div">
            <h3>This community project aims to become a well-known and respected endeavor that benefits all Shib Token holders.</h3>
                <ul>
                    <li>Our goal is to lower the coin supply by at least 10,000,000,000 tokens through the release of multiple collections.</li>
                    <li>In the first 5 main collections, we plan to burn 30% of all profits.</li>
                    <li>The final big collection launch will have a higher burn rate of 50% of profits.</li>
                    <li>For subsequent projects that are not related to Shiba Inu, we will still use 10% of profits to burn Shib Tokens.</li>
                    <li>After the first 5 collections, we are planning to expand the Shiba Collection with additional seasons with unique themes, so you can expect higher burn rates in future seasons.</li>
                    <li>Ultimately, our goal is to release collections where we can burn up to 70% of the profits.</li>
                </ul>
        </div>
        {/if}
        {#if show4}
        <div class="list-div">
            <h3>About me</h3>
                <ul>
                    <li>I am a programmer and NFT artist who is dedicated to the Shiba Inu community.</li>
                    <li>Although I am not affiliated with the Shiba Inu project, I am a huge fan and am passionate about contributing to its success.</li>
                    <li>Everything you see on this website, from the code to the art, is handcrafted by me.</li>
                    <li>I am committed to increasing the value of Shib Tokens and spreading the word about Shiba Inu through this project.</li>
                    <li>Any help in the form of sharing tweets, writing or talking about this project, buying my NFT art, burning tokens, or donating a small amount to my ETH address is greatly appreciated. Thank you for your support!</li>
                </ul>
        </div>
        {/if}
    </div>
    <div class="image-container">
        <img class="image" src={""} alt={''}/>
    </div>
</div>
</body>




<style>

body{
    font-family: "heebo",Helvetica,Arial,sans-serif;
}
    /* Screen smaller than 1000px */
    @media screen and (max-width: 1000px){
        .menu-container {
            position:relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .paragraph-container {
            /* Hide the text paragraphs by default */
            display: none;
            margin-top: 1%;
            display: flex;
            text-align: left;
            width: 50%;
            min-height: 350px;
            z-index:1;
            margin-left: 5%;
        }

        .paragraph-container.display {
            border: 1px solid black;
            background-color: rgba(0,0,0,0.6);
            color: #fff;
            z-index: 1;
            border-radius: 25px;
            min-width: 90%;
        }

        .button-container {
            display: flex;
            flex-direction: row;
            width: 50%;
            z-index: 1;
            padding-top:0%;
            margin-left:10%;
        }

        .active-button {
            background-color: rgb(52, 52, 54);
            color:white;
            display: block;
            width: 10%;
            height: 75px;
            min-width: 100px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
            margin: 1%;
        }

        .about-buttons {
            /* Default styles for the buttons */
            display: block;
            width: 10%;
            height: 75px;
            min-width: 100px;
            border: 2px solid black;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
            margin: 1%;
            background-color: #aa8650;
            color: white;
        }

    }



    /* Screen bigger than 1001 px */
    @media screen and (min-width: 1001px){
        .menu-container {
            position:relative;
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
        }

        .button-container {
            display: absolute;
            flex-direction: column;
            width: 100%;
            position:absolute;
            z-index: 1;
        }

        .active-button {
            background-color: rgb(52, 52, 54);
            color:white;
            display: block;
            width: 10%;
            height: 75px;
            min-width: 75px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
            margin-left: 15%;
            margin-top: 1%;
        }

        .about-buttons {
            /* Default styles for the buttons */
            display: block;
            width: 10%;
            height: 75px;
            min-width: 75px;
            border: 2px solid black;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
            margin-left: 10%;
            margin-top: 1%;
            background-color: #aa8650;
            color: white;
        }

        .paragraph-container {
            /* Hide the text paragraphs by default */
            display: none;
            margin-top: 1%;
            display: flex;
            text-align: left;
            width: 50%;
            min-height: 350px;
            z-index:1;
        }

        .paragraph-container.display {
            border: 1px solid black;
            background-color: rgba(0,0,0,0.6);
            color: #fff;
            z-index: 1;
            border-radius: 25px;
            min-width: 400px;
        }
    }

    .background-image{
        background-repeat: no-repeat;
        background-position: center;
    }

    

    @media (max-width: 500px) {
        .paragraph-container {
            position: relative;
            width:100%;
            text-align:center;
        }

        .active-button {
            background-color: rgb(52, 52, 54);
            color:white;
            display: block;
            width: 10%;
            height: 50px;
            min-width: 70px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            margin: 1%;
        }

        .about-buttons {
            /* Default styles for the buttons */
            display: block;
            width: 10%;
            height: 50px;
            min-width: 70px;
            border: 2px solid black;
            border-radius: 15px;
            cursor: pointer;
            margin: 1%;
            background-color: #aa8650;
            color: white;
        }

        .background-image{
            background-repeat: no-repeat;
            background-position: center;
            min-width: 500px;
        }

        .paragraph-container.display {
            border: 1px solid black;
            background-color: rgba(0,0,0,0.6);
            color: #fff;
            z-index: 1;
            border-radius: 25px;
            max-width: 450px;
        }

    }

    .image-container {
        z-index:0;
        position:absolute;
        top: 0;
        right: 0;
        
    }

    .image{
        max-width: 100%;
        max-height: 350px;
        object-fit: cover;
    }

    h3 {
        align-items: flex-start;
    }

    .list-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5%;
    }

    button:hover{
        filter: brightness(0.8);
    }

  </style>