<script>
  export let buttonText = "default";
  export let image = '';
  export let released = false;
</script>


  
  <div class="buttons">

    <button style="opacity: {released ? 1 : 0.9}">
      {#if image}
      <img src={image} alt={buttonText} />
      {/if}
      {buttonText}
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

  </style>