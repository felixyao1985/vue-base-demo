<template>
  <section>
    <div >
      <div class="home_logo item_container_style">
        楼层ID
        {{floorId}}
        数据
        {{bedData}}
      </div>
    </div>

  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'bedinfo',
    data() {
      return {
        id: null,
        bedData:null
      }
    },
    props:['fatherComponent'],
    computed: mapState([
      'floorId'
    ]),
    methods: {
      ...mapActions([
        'getFloor'
      ])
    },
    created(){
      console.log('------created创建完毕状态------');
      this.bedData = this.floorId;
      console.log("bedData",this.bedData);
    },
    mounted(){
      console.log('------mounted 挂载结束状态------');
      console.log("bedData",this.bedData);
    },
    beforeUpdate: function () {
      console.log('beforeUpdate 更新前状态===============》');
      console.log(this.floorId);
      this.bedData = this.floorId;
      console.log("bedData",this.bedData);
    },
    updated: function () {
      console.log('updated 更新完成状态===============》');
      console.log(this.floorId);
      this.bedData = this.floorId;
      console.log("bedData",this.bedData);
    }
  }
</script>

<style lang="less">

</style>
