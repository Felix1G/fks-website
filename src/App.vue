<script setup>
  import 'vite/modulepreload-polyfill'
  import { ref, provide, onMounted, onUnmounted, watch } from 'vue'
  import headerComp from './components/Header.vue'
  import homepageComp from './components/Homepage.vue'
  import creationSectionComp from './components/CreationSection.vue'
  import aboutComp from './components/About.vue'
  import uselessComp from './components/useless.vue'

  const page = ref(0); //default = 0

  provide('page', page);

  function gotoCreations() {
    page.value = 2;
  }

  watch(page, async (n, o) => {
    window.scrollTo(0, 0);
  });
</script>

<script>
  import profileImage from '@/assets/profile.png';
  import qrcodegenImage from '@/assets/qrcodegen.png';
  import raytracerImage from '@/assets/raytracer.png';

  export default {
    data() {
      return {
        profileImage,
        qrcodegenImage,
        raytracerImage
      };
    },
  };

  const creations = [
    {
      image: profileImage,
      title: "Felix's Website",
      desc: "The website you are at right now. Explore to find out more about the code behind this website!",
      link: "https://github.com/Felix1G/fks-website",
      highlight: false
    },
    {
      image: qrcodegenImage,
      title: "QR Code Generator",
      desc: "QR code generator for all languages, up to version 40 (the largest version for a QR code).",
      link: "https://github.com/Felix1G/qr-code-gen",
      highlight: true
    },
    {
      image: profileImage,
      title: "Felix's JSON Parser",
      desc: "A JSON parser that supports comments. It is a library written in Rust and can be used in any language that supports Rust. Explore to find out more!",
      link: "https://github.com/Felix1G/fks-json",
      highlight: true
    },
    {
      image: raytracerImage,
      title: "Felix's Raytracer Project",
      desc: "A project I created able to perform raytracing. However, it can only utilise the CPU. Nonetheless, it is able to support models, textures, reflections, and pointlights. Explore to find out more!",
      link: "https://github.com/Felix1G/fksraytracer",
      highlight: false
    },
    {
      image: profileImage,
      title: "Crypthantus OS",
      desc: "A small project to learn more about kernel programming. It is an x86 kernel written in Assembly and in C. Though, I do not plan to continue this project further, explore to find out what had already been done so far!",
      link: "https://github.com/Felix1G/CrypthantusOS",
      highlight: false
    },
    {
      image: profileImage,
      title: "Felix's Neural Network API",
      desc: "A simple library written in rust to create simple Feed Forward Networks and Convoluted Neural Networks. Explore to find out more! (To find out how they work, click on the 'Inner Workings' link inside the GitHub page.)",
      link: "https://github.com/Felix1G/fksainetwork",
      highlight: true
    }
  ];
</script>

<template>
  <div id="headerCompDiv">
    <headerComp/>
  </div>
  <div v-if="page == 0" class="contentCompDiv">
    <homepageComp/>
    <br/><br/><br/><br/><br/>
    <p id="scrollText">SCROLL</p>
    <br/><br/><br/><br/><br/>
    <div class="creationSection">
      <div class="creationSectionHeader">
        <h><u><b>Project Highlights</b></u></h>
        <p>Find out more about my other projects <a @click="gotoCreations()">here</a>.</p>
      </div>
      <li v-for="creation in creations">
        <div v-if="creation.highlight" class="creationSection">
          <creationSectionComp
            :image="creation.image"
            :title="creation.title"
            :description="creation.desc"
            :link="creation.link"/>
        </div>
        <hr v-if="creation.highlight"/>
      </li>
    </div>
  </div>
  <div v-if="page == 1" class="contentCompDiv">
    <aboutComp/>
  </div>
  <div v-if="page == 2" class="contentCompDiv">
    <div class="creationSection">
      <div class="creationSectionHeader" id="creationWrap">
        <h><u><b>Creations</b></u></h>
        <p>My projects are <b>open-source</b> and I publish them in <b>GitHub</b>. I mainly use <b>Rust</b>. However, I am also proficient in <b>C++, C, Kotlin, Java, and Javascript</b>. Explore what I have created.</p>
      </div>
      <li v-for="creation in creations">
        <div class="creationSection">
          <creationSectionComp
            :image="creation.image"
            :title="creation.title"
            :description="creation.desc"
            :link="creation.link"/>
        </div>
        <hr/>
      </li>
    </div>
  </div>
  <div v-if="page == 3" class="contentCompDiv">

  </div>
  <p id="copyrightText">
    © Felix Kanardy Sujono 2025
  </p>
</template>

<style>
  html {
    background-color: white;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #e6f7ec;
    display: block;
    margin: 10px;
    transition: 1.0s background-color ease-in;
  }
  
  #headerCompDiv {
    position: fixed;
    z-index: 999;
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
    margin: 80px 0;
  }

  .creationSectionHeader {
    text-align: left;
    margin: 0 5%;
    font-family: sans-serif;
  }

  .creationSectionHeader h {
    font-size: 2.5em;
    letter-spacing: 0.25vw;
  }

  .creationSectionHeader p, .creationSectionHeader a {
    font-size: 1.25em;
  }

  .creationSectionHeader a {
    cursor: pointer;
    text-decoration: underline;
  }

  #creationWrap {
    padding-top: 10vh;
  }

  #scrollText {
    text-align: center;
    color: lightgray;
    font-family: Verdana;
    font-size: 1em;
    letter-spacing: 3px;
  }

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>