<template lang="pug">
  footer#footer
    p © {{ currentYear }} Szarka-Kovács Roland.  All rights reserved
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
