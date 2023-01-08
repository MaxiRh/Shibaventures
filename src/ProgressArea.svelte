<script>
    import ProgressBar from './progressBar.svelte';

    let showProgressBars = false;

    function toggleProgressBars(){
        showProgressBars = !showProgressBars;
    }

    const backImage = new URL("./images/BackgroundThumbsUpShiba.png", import.meta.url).href

</script>
<div class="main-container">
    <div class="collection-progress" class:active ={showProgressBars}>
        <button class = "progressButton" on:click={toggleProgressBars}>
            {#if showProgressBars}
                <h2>Hide Collection Progress</h2>
            {:else}
                <h2>Show Collection Progress</h2>
            {/if}
        </button>
        {#if showProgressBars}
            <div class="spacer"/>
            <ProgressBar progress={50} description="Pixelation :" text="This collection is almost done." maxAmount={50} date="January 2023"/>
            <div class="spacer"/>
            <ProgressBar progress={9} description="Strategic Movement:" text="This collection just got started" maxAmount={36} date="Mid February 2023"/>
            <div class="spacer"/>
            <ProgressBar progress={0} description="To the Stars:" text="" date="Mid March 2023"/>
            <div class="spacer"/>
            <ProgressBar progress={0} description="Shibaloons:" text="" date="Mid April 2023"/>
            <div class="spacer"/>
            <ProgressBar progress={0} description="Emotions:" text="" date="June 2023"/>
            <div class="spacer"/>
            <ProgressBar progress={0} description="Limited Edition:" text="" date="continuously"/>
            <div class="spacer"/>
        {/if}
    </div>
    <div class="image-container">
        <img class="image" src={backImage} alt={''}/>
    </div>
</div>

<style>
    
    @media screen and (max-width: 1000px) {
        
        .collection-progress {
            margin-left: 0%;
            width: 100%;
            justify-content: left;
            border: 2px solid black;
            border-radius: 0px;
            z-index:1;
            min-width: 450px;
        }

        .collection-progress.active {
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            background-color: rgb(52, 52, 54, 0.7);
            color: white;
        }
    }

    @media screen and (max-width: 500px) {
        
        .collection-progress {
            margin-left: 0%;
            width: 100%;
            justify-content: left;
            border: 2px solid black;
            border-radius: 0px;
            z-index:1;
            min-width: 80%;
        }

        .collection-progress.active {
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            background-color: rgb(52, 52, 54, 0.7);
            color: white;
        }


    }

    .main-container {
        position:relative;
        display: flex;
        justify-content: space-evenly;
    }

    .image-container {
            z-index:0;
            position:absolute;
            top: 0;
            right: 0;
    }

    .image{
        max-width: 60%;
        max-height: 700px;
        object-fit: cover;
    }

    .progressButton {
        width: 100%;
        justify-content: left;
        height: 40px;
        min-height: 65px;
        position:relative;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        padding-bottom: 7%;
        background-color: #816439;
    }

    .collection-progress {
        margin-left: 5%;
        width: 50%;
        justify-content: left;
        border: 2px solid black;
        border-radius: 0px;
        z-index:1;
    }

    .collection-progress.active {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: rgb(52, 52, 54, 0.7);
        color: white;
    }

    .spacer {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    h2{
        color:white;
    }
    
    button:hover{
        filter: brightness(0.8);
    }
</style>