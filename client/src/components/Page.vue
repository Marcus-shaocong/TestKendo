<template>
<div id="page">
    <div class="bgimg">
        <div class="topleft">
            <p></p>
        </div>
        <div class="middle">
            <h1>COMING SOON</h1>
            <hr>
            <p id="demo">35 days</p>
        </div>
        <div class="bottomleft">
            <p>网站正在筹建中，敬请期待...</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    // Set the date we're counting down to
    let countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    let demoEl = document.getElementById("demo")
    if(demoEl)
    {
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
  }
}
</script>

<style  scoped>
/* Set height to 100% for body and html to enable the background image to cover the whole page: */
body, html {
    height: 100%
}

#page {
    /* Background image */
    background-image: url('../../assets/bg-1.jpg');
    /* Full-screen */
    height: 100%;
    /* Center the background image */
    background-position: center;
    /* Scale and zoom in the image */
    background-size: cover;
    /* Add position: relative to enable absolutely positioned elements inside the image (place text) */
    position: relative;
    /* Add a white text color to all elements inside the .bgimg container */
    color: white;
    /* Add a font */
    font-family: "Courier New", Courier, monospace;
    /* Set the font-size to 25 pixels */
    font-size: 25px;
}

/* Position text in the top-left corner */
.topleft {
    position: absolute;
    top: 0;
    left: 16px;
}

/* Position text in the bottom-left corner */
.bottomleft {
    position: absolute;
    bottom: 0;
    left: 16px;
}

.middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

/* Style the <hr> element */
hr {
    margin: auto;
    width: 40%;
}
</style>
