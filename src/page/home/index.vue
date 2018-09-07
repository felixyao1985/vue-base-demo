<template>
  	<div class="home_container">
        <topbar father-component="home"></topbar>
        <bedinfo father-component="home"></bedinfo>
    </div>
</template>

<script>
import topbar from '../../components/topbar'
import bedinfo from '../../components/bedinfo'

export default {
	name: 'home',
  	components: {
      topbar,
      bedinfo
  	},
    created(){

    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
