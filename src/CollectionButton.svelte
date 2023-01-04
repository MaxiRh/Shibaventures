<script>

const pixelation = new URL('./images/Pixelation.png', import.meta.url).href;
const soonImage = new URL('./images/ShibaWebsiteSoonCover.png', import.meta.url).href;

let buttonSoonText = "Release soon";
</script>


  
  <div class="buttons">

    <button style="opacity: 1">
      {#if pixelation}
      <img src={pixelation} alt='Pixelation Collection' />
      {/if}
      Collection: Pixelation
    </button>
  </div>

  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      {#if soonImage}
      <img src={soonImage} alt={buttonSoonText} />
      {/if}
      Collection: Strategic Movement
    </button>
  </div>

  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      {#if soonImage}
      <img src={soonImage} alt={buttonSoonText} />
      {/if}
      Collection: To the Stars
    </button>
  </div>
  
  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      {#if soonImage}
      <img src={soonImage} alt={buttonSoonText} />
      {/if}
      Collection: Load of Emotions
    </button>
  </div>
  
  <div class="spacer"/>
  
  <div class="buttons">
    <button style="opacity: 0.9">
      {#if soonImage}
      <img src={soonImage} alt={buttonSoonText} />
      {/if}
      Limited NFTs
    </button>
  </div>

  <style>
    .buttons {
      display: flex;
      justify-content: center;
    }

    button {
      /* Default styles for all screen sizes */
      font-size: 100%;
      padding: 2vw;
      padding-top: 3vw;
      padding-bottom: 3vw;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      width: 55%;
    }

    button:hover {
      background-color: #ccc;
    }

    img {
      /* Default styles for all screen sizes */
      width: 100%;
      height: auto;
    }
    
    .spacer {
        margin-top: 40px;
        margin-bottom: 40px;
    }
  </style>