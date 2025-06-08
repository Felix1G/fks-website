<script setup>
  import { ref } from 'vue'
  
  const headParagraph = ref("I am a secondary student interested in <b>game development</b>, <b>programming</b>, and <b>computer science</b>. I have been creating games and building projects since 2021. As a student who also competes nationally, I also have a lot of experience in <b>competitive programming</b>.");
  const bodyParagraph0 = ref("&nbspI had lived in Medan for the most of my life. Only recently, I studied in Singapore. After having studied there for more than a year, life has definitely changed a lot for me. However, one thing never changes - <b>my interest in programming and game development</b>. I pursued in the hobby since <b>January 2021</b>. In fact, one reason I started was to create a modified version of Minecraft. Since then, I created <b>many more games and side projects</b>.");
  const bodyParagraph1 = ref("Today, I am working on a PC game and a few side projects, so as studying for my O Levels this year. Indeed, I have a learnt a lot from my experiences in the past. I have also been able to learn a lot from <b>myself</b>, such as being discipline to complete the projects that I started.");
  const compParagraph = ref("I believe competitions test your abilities and skills, giving the opportunity to enhance them. I have won in competitions, such as the <b>Bronze award</b> for the <b>National Olympiads of Informatics (NOI) 2024</b> (top picture) and the <b>Silver Award</b> for <b>NOI 2025</b>, and the <b>Best Presentation award</b> as a team for the <b>National Robotics Competition (NRC) 2024</b> (bottom picture). These competitions have taught me the skills required and given me the drive to keep going.");
  const cookParagraph = ref("Outside my studies and programming, I also enjoy <b>cooking</b>. I have been cooking for more than a year, creating homemade dishes from recipes I find in social media or recipes I create myself. My favorite method of cooking is <b>stir frying</b> as it is very easy to make and equally tastes scrumptious. In fact, cooking is part of my routine in my dormitory.");
</script>

<template>
  <div id="bodyDiv">
    <div id="containerDiv">
      <div class="textBox">
        <p id="aboutText"><u>About me.</u></p>
        <p class="paraClass">
          <span v-html="headParagraph"></span>
        </p>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <p id="scrollText">SCROLL</p>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="textBox">
        <p class="paraClass">
          <span v-html="bodyParagraph0"></span>
          <br/><br/>
          <span v-html="bodyParagraph1"></span>
        </p>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <hr/>
      <br/><br/><br/><br/><br/><br/>
      <div id="competitionBox">
        <div id="competitionImg">
          <img src="../assets/noi.jpg" alt="NOI"/>
          <img src="../assets/noi25.jpg" alt="NRC"/>
          <img src="../assets/nrc.jpg" alt="NRC"/>
        </div>
        <div class="textBox">
          <p class="paraClass">
            <span v-html="compParagraph"></span>
          </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <hr/>
      <br/><br/><br/><br/><br/><br/>
      <div id="foodBox">
        <div class="textBox" id="foodText">
          <p class="paraClass">
            <span v-html="cookParagraph"></span>
          </p>
        </div>
        <div id="foodImg">
          <img src="../assets/food/food0.jpg" alt="Food"/>
        </div>
      </div>
      <div id="foodBoxTable">
        <table>
          <tr>
            <td><img src="../assets/food/food1.jpg" alt="Food"/></td>
            <td><img src="../assets/food/food2.jpg" alt="Food"/></td>
          </tr>
          <tr>
            <td><img src="../assets/food/food3.jpg" alt="Food"/></td>
            <td><img src="../assets/food/food4.jpg" alt="Food"/></td>
          </tr>
          <tr>
            <td><img src="../assets/food/food5.jpg" alt="Food"/></td>
            <td><img src="../assets/food/food6.jpg" alt="Food"/></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
  #bodyDiv {
    width: 90%;
    margin: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }

  .textBox {
    width: 85%;
  }

  #containerDiv {
    margin-top: 5%;
    width: 90%;
    position: relative;
  }

  #aboutText {
    font-family: Verdana;
    font-size: 36px;
    animation: fadeIn 1.5s ease-out,
      offsetLeftIn 1.5s ease-out;
  }

  .paraClass {
    margin-top: 5vh;
    font-family: Verdana;
    font-size: 18px;
    text-align: left;
    animation: fadeIn 1.5s ease-out,
      offsetYIn 1.5s ease-out;
  }

  #competitionBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #competitionImg {
    width: 50vh;
    margin-right: 10vh;
  }

  #competitionImg img {
    width: 40vh;
    height: 20vh;
    object-fit: cover;
    object-position: 0% 0%;
    display: block;
    margin: auto;
  }

  #foodBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #foodImg {
    margin-left: 10vw;
  }

  #foodImg img {
    width: 40vh;
    height: 40vh;
    display: block;
    margin: auto;
  }

  #foodBoxTable img {
    width: 25vw;
    height: 25vw;
    margin: 5vw;
  }

  #foodBoxTable table {
    margin-left: auto;
    margin-right: auto;
  }

  @media ( max-width: 600px ) {
    #competitionBox {
      flex-direction: column;
    }

    #competitionImg {
      margin-right: 0;
    }

    #foodBox {
      flex-direction: column;
    }

    #foodImg {
      margin-left: 0;
    }

    #foodBox {
      order: 1;
    }

    #foodText {
      order: 2;
    }
  }
</style>