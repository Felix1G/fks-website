<script setup>
  import { ref, inject } from 'vue'

  let openMenuToggle = ref(false);
  let menuTextElem = ref(null);
  
  function openMenu() {
    openMenuToggle.value = !openMenuToggle.value;

    if (openMenuToggle.value) {
      menuTextElem.value.style.color = "#194f0d";
    } else
      menuTextElem.value.style.color = "black";
  }

  var page = inject('page');

  function toHomepage() {
    page.value = 0;
  }

  function menuSelect(code) {
    page.value = code;
    openMenuToggle.value = false;
  }
</script>

<template>
  <div id="container">
    
    <div id="logoContainer" @click="toHomepage" style="float: left;margin-left: 5%">
      <img @click="toHomepage()" src="../assets/logo.svg">
    </div>

    <div id="menuContentDiv">
      <div id="textContainer" ref="menuTextElem" @click="openMenu" style="float: right;margin-right: 5%">
        <p><b>MENU</b></p>
      </div>
      
      <ul v-if="openMenuToggle" id="menuContentWrap">
        <li><a @click="menuSelect(0)">Home</a></li>
        <li><a @click="menuSelect(1)">About</a></li>
        <li><a @click="menuSelect(2)">Creations</a></li>
        <li><a @click="menuSelect(3)">Writings</a></li>
      </ul>
    </div>
    
  </div>
</template>

<style>
  #container {
    display: inline;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-repeat: no-repeat;
    background-size: 100% 3px;
    background: linear-gradient(60deg, #39e382, #1cd2ff);
    border-bottom: #29b395 5px solid;
    animation: fadeIn 1.5s ease;
  }
  
  #container p {
    font-family: Tahoma;
    letter-spacing: 3px;
    transition: letter-spacing 0.3s ease;
    margin-top: 10px;
  }

  #container p:hover {
    letter-spacing: 6px;
  }

  #menuContentDiv {
    float: right;
    margin-right: 10%;
  }

  #textContainer {
    cursor: pointer;
    vertical-align: center;
    height: 0;
    user-select: none;
  }

  #logoContainer {
    margin-top: 5px;
  }

  #logoContainer img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.25s;
  }
  
  #logoContainer img:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  #menuContentDiv ul {
    list-style-type: none;
    padding: 0;
    margin-top: 54px;
    margin-right: 1vw;
    border: 1px #19c276 solid;
    border-radius: 10px;
  }

  #menuContentDiv ul a {
    display: block;
    width: 150px;
    padding: 1vh 1vw;
    text-align: right;
    font-family: verdana;
    cursor: pointer;
    background-color: #80ffd9;
    user-select: none;
  }

  #menuContentDiv ul a:hover {
    background-color: #aaffaa;
  }

  #menuContentWrap {
    position: relative;
    z-index: 999;
  }
</style>