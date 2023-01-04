<script lang="ts">
    export let margin:Number = 40;
    
    let currentValue=0;
    let maxValue = 10000000000;//One-hundret Billion(Milliarden)

    const backImage = new URL('./images/WebsiteITsFine.png', import.meta.url).href

    function addPointstoNumbers(number:Number){
        return (number.toLocaleString('de-DE'));
    }

    function getPercentage(){
        return ((currentValue / maxValue));
    }
    let progress:number = getPercentage();
    const angle = 360 * progress;

    const	background = `radial-gradient(#FBCE8C 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(yellow 0deg, orange 90deg, darkorange 180deg, red);`;

    $: cssVarStyles = `--background:${background}`
</script>

<div class="outer-container">
    <div class="container">
        <div class="burn-container" style="margin-left:{margin}%">
            <div id="progress-circle" style="{cssVarStyles}">{Math.round(progress*100)}%</div>
        </div>
        <div class="burn-image" style="background-image: url({backImage})">
        </div>
    </div>
</div>
<div class="text-container">
    <h3>{addPointstoNumbers(currentValue)} from {addPointstoNumbers(maxValue)} SHIB tokens burnt</h3>
</div>


<style>

.outer-container {
    flex-direction: column;
    display:flex;
}

.container {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.burn-image{
    display: flex-end;
    align-items: right;
    margin-left: auto;
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 450px;
    width: 450px;
    z-index: 0;
}

.burn-container {
    display: flex-end;
    z-index: 1;
}

#progress-circle {
  background: var(--background);
  border-radius: 50%;
  width: 300px;
  height: 300px;
    transition: all 1000ms ease-in;
	will-change: transform;
    z-index: 1;
}

.text-container {
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>