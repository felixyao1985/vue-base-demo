<template>
  <section>
    <div >
      <div class="home_logo item_container_style">
        市一福利院
        <select v-model="selfloorId" @change="onchangeFloor(selfloorId)">
          <option v-for="option in floorData" v-bind:value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>

  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'topbar',
    data() {
      return {
        selfloorId: null
      }
    },
    props:['fatherComponent'],
    computed:mapState([
        'floorData','floorId'
      ]),
    methods: {
      ...mapActions([
        'getFloor','setFloor'
      ]),
      onchangeFloor(id){
        this.setFloor(id);
      }
    },
    beforeCreate(){

    },
    created(){
      this.getFloor();
    },
    beforeMount: function() {
      //this.selfloorId = this.floorData[0].id;
    },
    mounted(){
      this.selfloorId = this.floorData[0].id;
      this.setFloor(this.selfloorId);
    },
    beforeUpdate: function () {

    },
    beforeUpdate: function () {

    },
    updated: function () {
      //this.selfloorId = this.floorData[0].id;
    },
    watch:{
      floorData: function(ov,nv){
        console.log('floorData更新');
        this.selfloorId = this.floorData[0].id;
        this.setFloor(this.selfloorId);

      }
    }
  }
</script>

<style lang="less">

</style>
