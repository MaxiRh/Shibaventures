<script>

const pixelation = new URL('./images/Pixelation.png', import.meta.url).href;
const soonImage = new URL('./images/SoonCover.png', import.meta.url).href;

</script>


<body>
    <a class="buttons" href='https://opensea.io/collection/shibventures'>
      <button style="opacity: 1">
        <img src={pixelation} alt='Pixelation Collection' />
        Collection: Pixelation
      </button>
    </a>

  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      <img src={soonImage} alt='Strategic Movement(Soon)' />
      Collection: Strategic Movement
    </button>
  </div>

  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      <img src={soonImage} alt='To the Stars(Soon)' />
      Collection: To the Stars
    </button>
  </div>
  
  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      <img src={soonImage} alt='Shibaloons(Soon)' />
      Collection: Shibaloons
    </button>
  </div>
  
  <div class="spacer"/>

  <div class="buttons">
    <button style="opacity: 0.9">
      <img src={soonImage} alt='Load of Emotions(Soon)' />
      Collection: Emotions
    </button>
  </div>
  
  <div class="spacer"/>
  
  <div class="buttons">
    <button style="opacity: 0.9">
      <img src={soonImage} alt='Limited NFTs' />
      Limited NFTs
    </button>
  </div>
</body>

  <style>
    @media screen and (max-width:1000px) {
      button {
        font-size: 100%;
        padding: 2vw;
        padding-top: 3vw;
        padding-bottom: 3vw;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        min-width: 90%;
      }
    }

    @media screen and (max-width:500px) {
      body {
        min-width:450px;
      }
    }

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