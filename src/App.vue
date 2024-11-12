<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import headerComp from './components/Header.vue'
  import homepageComp from './components/Homepage.vue'
  import creationSectionComp from './components/CreationSection.vue'
  import uselessComp from './components/useless.vue'

  const words = window.location.href.split('/');
  const page = words[words.length - 1];
  const home = page != 'about' && page != 'creations' && page != 'writings';
  const about = page == 'about';
</script>

<template>
  <div id="headerCompDiv">
    <headerComp/>
  </div>
  <div v-if="home" class="contentCompDiv">
    <homepageComp/>
    <br/><br/><br/><br/><br/>
    <p id="scrollText">SCROLL</p>
    <br/><br/><br/><br/><br/>
    <div class="creationSection">
      <creationSectionComp
        image="/src/assets/profile.png"
        title="Felix's JSON Parser"
        description="A JSON parser that supports comments. It is a library written in Rust and can be used in any language that supports Rust. Explore to find out more!"
        link="https://github.com/Felix1G/fks-json"/>
    </div>
    <div class="creationSection">
      <creationSectionComp
        image="/src/assets/profile.png"
        title="Felix's Raytracer Project"
        description="A project I created able to perform raytracing. However, it can only utilise the CPU. Nonetheless, it is able to support models, textures, reflections, and pointlights. Explore to find out more!"
        link="https://github.com/Felix1G/fksraytracer"/>
    </div>
    <div class="creationSection">
      <creationSectionComp
        image="/src/assets/profile.png"
        title="Crypthantus OS"
        description="A small project to learn more about kernel programming. It is an x86 kernel written in Assembly and in C. Though, I do not plan to continue this project further, explore to find out what had already been done so far!"
        link="https://github.com/Felix1G/CrypthantusOS"/>
    </div>
    <div class="creationSection">
      <creationSectionComp
        image="/src/assets/profile.png"
        title="Felix's Neural Network API"
        description="A simple library written in rust to create simple Feed Forward Networks and Convoluted Neural Networks. Explore to find out more! (To find out how they work, click on the 'Inner Workings' link inside the GitHub page.)"
        link="https://github.com/Felix1G/fksainetwork"/>
    </div>
  </div>
  <div v-if="about" class="contentCompDiv">
    
  </div>
  <p id="copyrightText">
    © Felix Kanardy Sujono 2025
  </p>
</template>

<style>
  html {
    background-color: white;
  }
  
  body {
    background-color: #e6f7ec;
    display: block;
    margin: 10px;
    transition: 1.0s background-color ease-in;
  }
  
  #headerCompDiv {
    position: fixed;
  }

  .contentCompDiv {
    margin-top: 60px;
  }

  #copyrightText {
    text-align: center;
    color: grey;
    font-size: 0.5em;
    letter-spacing: 0.45em;
    padding: 50px 10px;
  }

  .creationSection {
    margin-top: 80px;
  }

  #scrollText {
    text-align: center;
    color: lightgray;
    font-family: Verdana;
    font-size: 1em;
    letter-spacing: 3px;
  }
</style>