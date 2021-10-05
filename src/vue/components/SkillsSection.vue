<template lang="pug">
  section#skills-section
    .container
      .row.skills
        h1.headline.line {{ title }}
        p.text {{ text }}
      .row
        h2.s-headline Languages 
      .row
        .col-12.col-sm-6.col-lg-4(v-for="item in skills.languages")
          .aspect-wrapper
            .skill-card
              img(:src="item.image") 
              p {{item.name}}
      .row
        h2.s-headline Frameworks & Libraries
      .row
        .col-12.col-sm-6.col-lg-4(v-for="item in skills.frameworks")
          .aspect-wrapper
            .skill-card
              img(:src="item.image") 
              p {{item.name}}
      .row
        h2.s-headline Technologies
      .row
        .col-12.col-sm-6.col-lg-4(v-for="item in skills.technologies")
          .aspect-wrapper
            .skill-card
              img(:src="item.image") 
              p {{item.name}}
</template>

<script lang="ts">
import Vue from "vue"

export default {
  props: {
    title: String,
    text: String,
    skills: Object
  }
}
</script>
