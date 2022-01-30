<template>
  <div>
    <transition name="fade" mode="out-in">
      <!-- ... the buttons ... -->

      <div v-if="skill.key === 'html'" key="html">
        <p>
          My history with HTML goes way back. I started developing in this
          language in 2014, when I started a Web Design Course, and since then
          I've been improving my coding skills in it.
        </p>
        <p>
          Not much to say about HTML. It's a very straightforward language with
          simple elements.
        </p>
      </div>
      <div v-else-if="skill.key === 'css'" key="css">
        <p>I learned CSS alongside HTML and JS, so yeah, since 2014.</p>
        <p>
          With CSS I like to use
          <a href="https://getbootstrap.com/">Bootstrap's</a> idea of separating
          <a
            href="https://www.tutorialrepublic.com/css-reference/css3-properties.php"
            >properties</a
          >
          by classes.<br />
        </p>
        <p>
          Also, I believe that websites needs to be acessible everywhere from
          any device, and with CSS we can ensure that.
        </p>
        <p>
          I like to make interactive and fluid webpages to ensure that the user
          will enjoy every second spent on my website.
        </p>
        <p>This website's background was made using SVGs + CSS animations.</p>
      </div>
      <div v-else-if="skill.key === 'js'" key="js">
        <p>
          Like CSS and HTML, i started developing in JavaScript in 2014. <br />
          JavaScript it's by far my favourite language, it has changed a lot
          over the years and I really enjoy what this language is becoming.
        </p>
        <p>
          I've made scripts for work, college, and personal use. As i code i
          learn more about it.<br />
          It's hard to say in a few words, everything i know about JavaScript,
          but i like to consider myself as a Senior JavaScript developer.<br />
        </p>
        <p>
          I'm used to handle arrays in Js (map, filter, sort, find, etc.),
          making animations, API requets, form validation, error catching and
          object manipulation.<br />
        </p>
      </div>
      <div v-if="skill.key === 'cpp'" key="cpp">
        <p>
          My first experience with C++ was in 2016 when I started graduating.
          <br />
          I used it to make simple algorithms and some circuit board codes.
        </p>
        <p>
          One of my projects was making an RFID door control. We installed an
          RFID tag scanner in my university lab and used a tag as a key to
          control students' access.
        </p>
        <p>
          I can't say I like it, but it performs very well on low-memory
          devices.
        </p>
      </div>
      <div v-if="skill.key === 'ts'" key="ts">
        <p>
          I started programming in TypeScript in early 2020 Q2, so I'm not very
          experienced with it.
        </p>
        <p>
          For me, it's like JavaScript with extra steps. <br />
          I don't like it very much, but if it's going to be a standard, I need
          to learn it.
        </p>
        <p>Vue3 was made in Ts, that's why I started developing in Ts.</p>
      </div>
      <div v-if="skill.key === 'lua'" key="lua">
        <p>I started developing in Lua in 2020 Q1.</p>
        <p>
          I only used it for developing my Vue-Fivem Project. <br />
          To explain a little what Fivem is, it's a version of Grand Theft Auto
          5 with code. <br />
          You can configure everything in the game with Lua + HTML (Lua for
          scripts, HTML for UI).
        </p>
        <p>
          I'm very eager to finish this project and learning a lot along the
          way.
        </p>
      </div>
      <div v-if="skill.key === 'php'" key="php">
        <p>
          As a Front-end Developer, I don't use Php very often, but I know how
          it works. <br />
          I started programming in Php in 2014 and made a few projects with it.
        </p>
        <p>
          I think that Php is still only in use because it has spreaded
          worldwide, but to be honest, I prefer Node.js for Back-end NoSQL
          servers (easier and faster).
        </p>
      </div>
      <div v-if="skill.key === 'sql'" key="sql">
        <p>
          Like Php, I don't use SQL and NoSql very often, but almost every
          server needs to have a database.
        </p>
        <p>
          I started using SQL in 2014 alongside database managers. <br />
          I know the syntax, but personally, I prefer to use frameworks like
          Laravel to make changes in databases.
        </p>
        <p>
          For NoSql, I discovered it in 2020 Q4, and I loved it! <br />
          I used NoSql only once in a project, with MongoDB and a Node.js
          Back-end server.
        </p>
      </div>
      <div v-if="skill.key === 'node'" key="node">
        <p>
          In early 2020, I started working with Node.js in the Front-end
          development of a company.
        </p>
        <p>Who doesn't love package managers?</p>
        <p>
          Back then Node and Yarn were a new thing for me, but nowadays I lost
          count of how many times I typed <code>npm run serve</code>
        </p>
      </div>
      <div v-if="skill.key === 'vue'" key="vue">
        <p>Vue, my sweet Vue.</p>
        <p>
          I started working with Vue in early 2020, and I use it for every web
          project. <br />
          I have a lot of experience with Vue2 like making dynamic components,
          event handling, VueX, Vue Router, etc.
        </p>
        <p>
          For me, the best thing about Vue is that it makes it very easy to
          code-split, reusing components, and making reactive variables.
        </p>
        <p>
          Last year in the middle of Q2, I started working with Vue3 and I
          really like its new features and chages, especially the
          <a
            href="https://v3.vuejs.org/guide/migration/v-model.html#_2-x-syntax"
            >multiple v-model</a
          >
          feature.
        </p>
      </div>
      <div v-if="skill.key === 'nuxt'" key="nuxt">
        <p>
          I have been working with Nuxt since last year and I like to use it in
          every Vue project. <br />
          This project uses Nuxt for pages and component management, as well as
          making code simpler.
        </p>
        <p>
          I think that all tools that improve the quality of life for
          programmers are a must-have.
        </p>
        <p>
          I also like what Nuxt is becomming and already started usign Nuxt3,
          altough it's not recommended for production.
        </p>
      </div>
      <div v-if="skill.key === 'vuetify'" key="vuetify">
        <p>
          Vuetify, for me, is the best component library on the market. <br />

          I use it in almost every project and I'm very experienced with it.
        </p>
        <p>This project (as you might guess) uses Vuetify.</p>
      </div>
      <div v-if="skill.key === 'native'" key="native">
        <p>
          I only used NativeScript once, on an IOT project. <br />

          I worked with a VueNative framework to make an App to turn on/off the
          lights in my bedroom.
        </p>
        <p>I worked with Expo for developing and Google's Material Design.</p>
      </div>
      <div v-if="skill.key === 'bootstrap'" key="bootstrap">
        <p>
          I've been working with Bootstrap since early 2020. <br />
          I like Bootstrap's grid system and class organization. It is really
          easy to develop using this library.
        </p>
        <p>This project uses Bootstrap as a CSS helper.</p>
      </div>
      <div v-if="skill.key === 'sass'" key="sass">
        <p>
          I've started a UI framework using Sass/Scss for creating a CSS
          library, and I really like the power that it gives.
        </p>
        <p>
          I like to use
          <a
            href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/#what-is-itcss"
            >ITCSS</a
          >
          concept for organizing projects
        </p>
        <p>
          I love that when coding in Sass, you can do a lot of things with a few
          lines of code.
        </p>
      </div>
      <div v-if="skill.key === 'laravel'" key="laravel">
        <p>
          As a Front-end Developer, I'm not an expert on Laravel, but I
          understand its syntax.
        </p>
        <p>
          In the company that I currently work in, I code in Laravel mostly for
          bug correction and simple filters.
        </p>
      </div>
      <div v-if="skill.key === 'ps'" key="ps">
        <p>
          I've been working with PhotoShop since 2015. <br />

          Most of my work in PhotoShop is for picture editing and collage.
        </p>
        <p>In 2020, I started using it as a tool for developing web pages.</p>
      </div>
      <div v-if="skill.key === 'il'" key="il">
        <p>
          In the middle of 2017, I started working with Illustrator. <br />
          I've been using it for logo creation and designing icons.
        </p>
        <p>
          This website's planets were made using Illustrator. <br />
          Each one of the planets is a svg code based on
          <a
            target="_blank"
            href="https://www.vecteezy.com/vector-art/190741-ultra-violet-galactic-background-free-vector"
            >Star Vectors by Vecteezy</a
          >
        </p>
      </div>
      <div v-if="skill.key === 'pr'" key="pr">
        <p>
          I can't say I'm experienced with Adobe's Premiere, but I made two
          projects with it.
        </p>
        <p>
          I use it mostly for university presentations and cutting/clipping
          videos.
        </p>
      </div>
      <div v-if="skill.key === 'au'" key="au">
        <p>
          I started using Adobe's Audition for noise canceling in audio tracks.
          <br />
          I use it to make the audio sound better.
        </p>
        <p>
          I'm also not very experienced with it, but I understand how it works
          and what it can do.
        </p>
      </div>
      <div v-if="skill.key === 'pro'" key="pro">
        In 2014, I studied programming at
        <a target="_blank" href="https://sc.senai.br/">SENAI</a>, where I
        learned:

        <v-list
          :color="
            $vuetify.theme.dark ? 'rgba(10,10,20,0.8)' : 'rgba(150,150,150,0.9)'
          "
          dense
          elevation="5"
          class="my-2"
        >
          <v-list-item>• HTML</v-list-item>
          <v-list-item>• CSS</v-list-item>
          <v-list-item>• JavaScript</v-list-item>
          <v-list-item>• PHP</v-list-item>
          <v-list-item>• mySql</v-list-item>
          <v-list-item>• Gimp (Free Photoshop, basically)</v-list-item>
        </v-list>
        It was only a 1-year course, but it got me in love with coding.
      </div>
      <div v-if="skill.key === 'eng'" key="eng">
        In 2016, i started graduating in
        <b> Control and Automation Engineering</b> at
        <a target="_blank" href="https://ufsc.br/">UFSC.</a> <br />
        Its hard to say everything I'm learning in this university, but I
        separated a few topics that I have knowledge of:
        <v-list
          :color="
            $vuetify.theme.dark ? 'rgba(10,10,20,0.8)' : 'rgba(150,150,150,0.9)'
          "
          dense
          elevation="5"
          class="my-2"
        >
          <v-list-item>• Calculus </v-list-item>
          <v-list-item>• Physics</v-list-item>
          <v-list-item>• Algebra</v-list-item>
          <v-list-item>• Project Management</v-list-item>
          <v-list-item>• Circuits</v-list-item>
          <v-list-item>• C++</v-list-item>
          <v-list-item>• Java</v-list-item>
          <v-list-item>• Operating System Creation</v-list-item>
          <v-list-item>• Assembly</v-list-item>
          <v-list-item>• Arduino</v-list-item>
          <v-list-item>• NodeMCU</v-list-item>
          <v-list-item>• Process Automation</v-list-item>
        </v-list>
      </div>
      <div v-if="skill.key === 'git'" key="git">
        <p>
          I have been working with Git since 2015. <br />
          I use it in my everyday work (with AWS CodeCommit) and use it with
          GitHub in almost every project (university and personal projects).
        </p>
        <p>
          I understand commits, creating branches, stash, push/pulls, reverting
          things, etc. <br />
          It's an awesome tool to keep every part of the development organized.
          <br />
          You can view
          <a target="_blank" href="https://github.com/hzd-artur/my-profile">
            this project source code
          </a>
          on GitHub
        </p>
      </div>
      <div v-if="skill.key === 'aws'" key="aws">
        <p>
          I started working with AWS in early 2021. <br />
          On this platform, I worked with CodeCommit, CodeBuild, CodePipeline,
          S3 Buckets, and IAM Policies.
        </p>
        <p>
          Early this year, the company that I work for needed to start a new
          project with an automatic build (when pushing commits) and a
          subdomain. I was assigned to do this.
        </p>
      </div>
      <div v-if="skill.key === 'scrum'" key="scrum">
        <p>
          In the company that I work for, we use
          <a target="_blank" href="https://clickup.com/">ClickUp</a> for tasks
          management and Scrum.
        </p>
        <p>
          I've been using Scrum with Sprints since early 2020 and I can say I'm
          experienced with it.
        </p>
      </div>
      <div v-if="skill.key === 'doc'" key="doc">
        <p>
          Documentation is one of the most important parts of the coding
          process.
        </p>
        <p>
          I'm used to making MarkDown documentation for my components in the
          company that I work for.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SkillInfo',
  props: {
    skill: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
}
</script>
<style lang="sass">
.fade-enter-active,
.fade-leave-active
    transition: opacity .2s

.fade-enter,
.fade-leave-to
    opacity: 0
</style>
