<script setup>
  import { ref, onMounted } from 'vue'

  var description = ref("<u>Who am I?</u><br/>I'm a scholar from Indonesia studying in Singapore. With over <b>4 years</b> of programming experience, I have <b>created games</b> on PC with GameMaker and <b>created projects</b> with Rust. I am also doing <b>competitive programming</b> mainly in C++. I may not be highly experienced, but I'm <b>keen on learning new things</b>.<br/>(I'm also learning to cook dishes at home)");
  var desc_render = ref("");
  let interval;

  onMounted(() => {
    interval = setInterval(() => {
      if (desc_render.value.length >= description.value.length) {
        clearInterval(interval);
        return;
      }
      
      desc_render.value = description.value.substring(0, desc_render.value.length + 1);
    }, 10);
  });
</script>

<template>
  <div id="body">
    <div id="textWrap">
      <p id="name"><b>Hi, my name is Felix.</b></p>
      <hr/>
      <p id="subtitle">A <b>game developer and programming enthusiast</b> from Medan, Indonesia.</p>
      <hr/>
      <br/>
      <p id="desc">
        <span v-html="desc_render"></span>
      </p>
    </div>
    <div id="imgWrap">
      <img id="profilePhoto" src="../assets/profile.png"/>
    </div>
  </div>
</template>

<style>
  #body {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
  }

  @media ( max-width: 600px ) {
    #body {
      flex-direction: column;
    }

    #imgWrap {
      order: 1;
    }

    #textWrap {
      order: 2;
    }
  }
  
  #imgWrap {
    text-align: center;
    animation: fadeIn 2.0s linear;
    width: 100%;
  }

  #textWrap {
    width: 100%;
    vertical-align: center;
  }

  #textWrap hr {
    color: lightgray;
    opacity: 0.8;
  }
  
  #profilePhoto {
    width: 60%;
    height: 60%;
    border-radius: 60%;
    margin-top: 5vh;
  }

  #name {
    font-family: Verdana;
    font-size: 2.5em;
    margin: 4vh 1em;
    text-align: center;
    user-select: none;
    animation: fadeIn 1.5s ease-out,
      offsetYIn 1.5s ease-out;
  }

  #subtitle {
    font-family: Verdana;
    font-size: 1.5em;
    margin: 4vh 1em;
    text-align: justify;
    user-select: none;
  }

  #desc {
    letter-spacing: 1px;
    font-family: Verdana;
    font-size: 0.9em;
    margin: 0 5vw;
    cursor: default;
    animation: fadeIn 1.5s ease;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    75% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @keyframes offsetYIn {
    0% { transform: translate(0, 20px); }
    100% { transform: translate(0); }
  }
</style>