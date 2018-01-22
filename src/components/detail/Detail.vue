<template>
  <div class="detail">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quibusdam, similique! Ad asperiores dolorum enim esse,
    excepturi explicabo ipsam maiores necessitatibus odit officiis possimus quia quis quod sit soluta vitae?
    <div style="text-align: center;"><img :src="msg.src" alt=""></div>
    <div style="text-align: center;">{{msg.label}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: this.$route.query
      }
    },
    mounted () {
      console.log(this.$route.query)
    },
    methods: {

    }
  }
</script>

