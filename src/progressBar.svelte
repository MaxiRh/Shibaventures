<script lang="ts">
    export let progress:number = 0;
    export let description ="";
    export let text="";
    export let maxAmount = 100;

    function getPercentage() {
        return Math.round((100/maxAmount)*progress);
    }
</script>


<div class="description-container">
    <div class="element-alignment">
        <div class="describtion">
            <h3>{description}</h3>
        </div>
        <div class="percentage">
            {getPercentage()}%
        </div>
    </div>
    {#if progress === 0}
        <p>Not started yet!</p>
    {:else if progress !== maxAmount}
        <p>{text}</p>
    {:else}
        <p>The collection is finished and released.</p>
    {/if}
</div>
<div class="progress-container">
    <progress class="progress" value={progress} max={maxAmount}>
    </progress>
</div>


<style>
 .progress{
    width: 70%;
    height: 10px;
    align-self: center;
    border-radius: 10px;
    overflow: hidden;
 }

 .progress-container {
    display: flex;
    justify-content: center;
 }

 .element-alignment{
    position: relative;
 }

 .percentage{
    position: absolute;
    top: 0;
    right: 0;
    padding-right:10%;
    padding-top:8%;
    font-size:200%;
 }

 h3 {
    text-align: left;
    margin-left: 50px;
    font-size: 150%;
 }

 p {
    text-align: left;
    margin-left: 50px; 
 }

</style>