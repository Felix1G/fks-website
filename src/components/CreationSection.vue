<script setup>
  import { ref } from 'vue'
  
  let props = defineProps(['title', 'description', 'image', 'link']);

  function explore() {
    window.open(props.link, '_blank');
  }

  
</script>

<template>
  <div id="bodyWrap">
    <div id="imageDiv">
      <img :src="props.image" alt="image"/>
    </div>
    <div id="textDiv">
      <h1><u>{{props.title}}</u></h1>
      <p>{{props.description}}</p>
      <button @click="explore()">EXPLORE</button>
    </div>
  </div>
</template>

<style>
  body {
    display: absolute;
  }

  #bodyWrap {
    margin: 0 10%;
    padding: 0;
    display: flex;
    align-items: center;
  }

  @media ( max-width: 600px ) {
    #bodyWrap {
      flex-direction: column;
    }
  }
  
  #imageDiv {
    animation: fadeIn 1.5s ease-out, offsetYIn 1.5s ease-out;
    text-align: center;
    width: 60%;
  }

  #imageDiv img {
    width: 35vh;
    height: 35vh;
    border-radius: 50%;
    user-select: none;
  }

  #textDiv {
    text-align: center;
    cursor: default;
    animation: fadeIn 1.5s ease-out, offsetYIn 1.5s ease-out;
    width: 100%;
    margin: 0 5%;
  }

  #textDiv h1 {
    font-family: Verdana;
    font-size: 1.8em;
    text-align: left;
  }

  #textDiv p {
    font-family: Verdana;
    font-size: 0.9em;
    letter-spacing: 1.5px;
    text-align: left;
  }

  #textDiv button {
    margin-top: 25px;
    width: 50%;
    height: 10vh;
    border-radius: 5vh;
    font-family: Verdana;
    font-size: 4vh;
    cursor: pointer;
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