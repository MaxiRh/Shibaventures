<script lang ="ts">


import CollectionButton from '../CollectionButton.svelte';
import MenuButton from '../MenuButton.svelte';
import CollectionFields from '../CollectionFields.svelte';
import ProgressArea from '../ProgressArea.svelte';
import ContactArea from '../ContactArea.svelte';
import BurnBar from '../BurnBar.svelte';
import BurnProof from '../BurnProof.svelte';
import { onMount } from 'svelte';

export const prerender = true;

let heigth = 0;
let width = 0;

function handleResize() {
    width=window.innerWidth;
    heigth= window.innerHeight;
}


onMount(() => {
    heigth = window.innerHeight;
    width = window.innerWidth;

    window.addEventListener('resize', handleResize);
});

function getWidth(){
    return (width*0.8);
}

const imgUrl = new URL("../images/Shibaventures.png", import.meta.url).href
const redLines = new URL('../images/RedMirrorImage.png', import.meta.url).href
const roadmap = new URL('../images/Roadmap2023.png', import.meta.url).href

</script>


<body style="min-width: {width}">
<div class="header-image">
    <img class="header-image" src={imgUrl} alt="Shibaventures">

    <div class="header-text">
        {#if width > 1000}
            <h1>Welcome to our Shiba Inu-dedicated community project, where you can not only purchase unique NFTs, but also contribute to the burning of Shib Tokens.</h1>
            <h2>By participating in this project, you are not only adding to your art collection, but also increasing the value of your NFTs through the burning of tokens. Our NFTs are naturally more valuable because of this process. We hope you enjoy browsing our collection!</h2>
            <h2>Start of the Project: January 2023</h2>
        {:else}
            <h2>Welcome to our Shiba Inu-dedicated community project, where you can not only purchase unique NFTs, but also contribute to the burning of Shib Tokens.</h2>
            <h3>By participating in this project, you are not only adding to your art collection, but also increasing the value of your NFTs through the burning of tokens. Our NFTs are naturally more valuable because of this process. We hope you enjoy browsing our collection!</h3>
            <h3>Start of the Project: January 2023</h3>
        {/if}
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
    <div class="background-image">
        <div class="big-spacer"/>
        <div class="menu-area">
            <MenuButton/>
        </div>
    </div>

    <div class="big-spacer"/>
    <h1>Burn proof section </h1>
    <BurnProof/>

    <div class="big-spacer"/>
    
    <div class="background-image">

        <CollectionFields />

        <div class="big-spacer"/>
    </div>

    <div class="collection-area">


        <h1>The NFT Collections</h1>
        <div class="background-image" style="background-image: url({redLines});">
            <CollectionButton/>
        </div>
    </div>
</div>
<div class="big-spacer"/>

<ProgressArea/>
<div class="big-spacer"/>

<div class="roadmap-container">
    <h1>Roadmap 2023</h1>
    <div class="spacer"/>
    <img class="roadmap-image" src={roadmap} alt=""/>
</div>

<div class="big-spacer"/>
{#if width <1000}
    <ContactArea resize={true}/>
{:else}
    <ContactArea resize={false}/>
{/if}
</body>

<style>

    @media screen and (max-width: 1000px) {
        .roadmap-container{
            position: relative;
            justify-content: center;
            min-width:100%;
        }
    }

    @media screen and (max-width: 500px) {
        .background-image{
            min-width:500px;
        }

        .roadmap-image{
            min-width:450px;
        }
    }


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


    .big-spacer {

        margin-bottom: 300px;
    }

    .spacer {
        margin-bottom: 100px;
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
        min-width:450px;
    }

    body{
        background: linear-gradient(to bottom, #FBCE8C, #aa8650);
        height: 100%;
        width: 100%;
        margin: 0%;
        margin-right:0;
    }

    .roadmap-container{
        position: relative;
        justify-content: center;
        width:80%;
    }
    
    .roadmap-image{
        width: 100%;
        height: auto;
    }

    * {
        font-family: "heebo",Helvetica,Arial,sans-serif;
    }
</style>