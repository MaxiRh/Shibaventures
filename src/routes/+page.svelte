<script src='https://unpkg.com/svelte@3/bundler/index.min.js' lang ="ts">


import CollectionButton from '../CollectionButton.svelte';
import MenuButton from '../MenuButton.svelte';
import NavBar from '../NavBar.svelte'
import CollectionFields from '../CollectionFields.svelte';
import ProgressArea from '../ProgressArea.svelte';
import ContactArea from '../ContactArea.svelte';
import BurnBar from '../BurnBar.svelte';
import BurnProof from '../BurnProof.svelte';
import { onMount } from 'svelte';

let heigth = 0;
let width = 0;
let released = true;

function handleResize() {
    width=window.innerWidth;
    heigth= window.innerHeight;
}


onMount(() => {
    heigth = window.innerHeight;
    width = window.innerWidth;

    window.addEventListener('resize', handleResize);
});

</script>


<body>
<div class="header-image">
    <img class="header-image" src="src/images/Shibaventures.png" alt="Shibaventures">

    <div class="header-text">
        <h1>Welcome to our Shiba Inu-dedicated community project, where you can not only purchase unique NFTs, but also contribute to the burning of Shib Tokens.</h1>
        <h2>By participating in this project, you are not only adding to your art collection, but also increasing the value of your NFTs through the burning of tokens. Our NFTs are naturally more valuable because of this process. We hope you enjoy browsing our collection!</h2>
        <h2>Start of the Project: January 2023</h2>
    </div>
</div>
{#if width > 1000}
    <BurnBar margin={40}/>
    <style>
        .background-image{
            background-size: contain;
        }
    </style>
{:else}
    <BurnBar margin={15}/>
    <style>
        .background-image{
            background-size: cover;
        }
    </style>
{/if}





<div class="button-menu">
    <div class="background-image" style="background-image: url('src/images/BackgroundBlueLines2.png')">
        <div class="big-spacer"/>
        <div class="menu-area">
            <MenuButton/>
        </div>
    </div>
    <div class="spacer"/>
    <h1>Burn proof section </h1>
    <BurnProof/>

    <div class="big-spacer"/>
    
    <div class="background-image" style="background-image: url('src/images/BackgroundGreenLines.png')">

        <CollectionFields />

        <div class="big-spacer"/>
    </div>

    <div class="collection-area">


        <h1>The NFT Collections</h1>
        <div class="background-image" style="background-image: url('src/images/RedMirrorImage.png'); background-position: right">
            <CollectionButton buttonText="Pixelation Collection" image="src/images/Pixelation.png" released={released}/>
        
        <div class="spacer"/>

        <CollectionButton buttonText="Collection: Strategic Movement" image="src/images/ShibaWebsiteSoonCover.png"/>

        <div class="spacer"/>

        <CollectionButton buttonText="Collection: To the Stars" image="src/images/ShibaWebsiteSoonCover.png"/>

        <div class="spacer"/>

        <CollectionButton buttonText="Collection: Handfull of emotions" image="src/images/ShibaWebsiteSoonCover.png"/>

        <div class="spacer"/>

        <CollectionButton buttonText="Limited Collection" image="src/images/ShibaWebsiteSoonCover.png"/>

        <div class="big-spacer"/>
    </div>
    </div>
</div>


<ProgressArea/>
<div class="big-spacer"/>

{#if width <1000}
    <ContactArea resize={true}/>
{:else}
    <ContactArea resize={false}/>
{/if}
</body>

<style>

    .header-text{
        width:80%;
        margin: 0 auto;
        text-align: center;
        color: white;
        border: 2px solid black;
        background-color: rgba(0,0,0,0.6);
        border-radius: 15px;
    }

    .menu-area {
        margin-bottom:10px;
    }

    .collection-area {
        margin-top: 10px;
    }

    .background-image{
        background-repeat: no-repeat;
        background-position: center;
    }

    .spacer {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .big-spacer {

        margin-bottom: 300px;
    }

    h1 {
        text-align: center;
    }

    h2 {
        text-align: center;
    }

    .header-image{
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
    }


    body{
        background: linear-gradient(to bottom, #FBCE8C, #aa8650)
    }

    * {
        font-family: "heebo",Helvetica,Arial,sans-serif;
    }
</style>