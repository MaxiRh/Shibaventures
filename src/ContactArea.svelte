<script lang="ts">

    export let resize:boolean = false;

    const imageSelf = new URL("./images/MeMyselfandI.png", import.meta.url).href
    const imageTwitter = new URL("./images/twitter.png", import.meta.url).href

</script>

<div class="main-container" style="{resize ? 'flex-direction:column;' : 'flex-direction:row;'}">
    <div class="portrait-left">
        <img class="image-self" src={imageSelf} alt=""/>
    </div>
    <div class="contact-right">
        <h1>Contact</h1>
        <h3>Follow me on Twitter:</h3>
        <div class="twitter-surrounding">
            <a href="https://twitter.com/Maxi49009969">
                <img class="twitter-image" src={imageTwitter} alt="Twitter logo">
          </a>
        </div>
        <br/>
        <p>ETH Address: 0xbb94D89892f6243BD5A6d2aa44C3246BCD2686Ba</p>
    </div>
</div>

<style>

    @media screen and (max-width:500px) {
      .main-container{
        min-width: 500px;
        margin-left:5% auto;
      }
    }

    @media screen and (min-width:500px) {
      .main-container{
        margin:10px auto;
      }
    }

    .main-container {
        border-color: 2px solid black;
        width: 90%;
        background-color: rgba(0,0,0,0.6);
        position:relative;
        display: flex;
        justify-content: space-evenly;
        height: auto;
        border-radius: 10px;
    }

    .twitter-surrounding {
        width:64px;
        height: 64px;
        background-color: white;
        border-radius:5px;
        justify-content: center;
        display: flex;
    }

    .contact-right{
        
        padding-top: 10%;
        padding-left: 10%;
        padding-bottom: 10%;
        color: white;
    }

    .portrait-left{
        align-items: left;
        align-items: center;
    }

    .image-self {
        height:auto;
        min-height:200px;
        min-width: 200px;
        width: 30%;
        align-self: left;
        padding:10%;
        padding-top: 15%;
    }

    .twitter-image{
        width: 48px;
        height:auto;
        align-self: center;
        padding-top: 8px;
    }
</style>