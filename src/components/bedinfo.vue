<template>
  <section>
    <div >
      <div class="home_logo item_container_style">
        楼层ID
        {{floorId}}
      </div>
      <section class="">
        <ul>
          <li v-for="(item, index) in bedData" :key="index" class="category_left_li"  @click="showCard(item.id, item.displayName)">
            <section>
              <span>{{item.displayName}}</span>
            </section>

          </li>
        </ul>
      </section>
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
        _floorId:0
      }
    },
    props:['fatherComponent'],
    computed: mapState([
      'floorId','bedData'
    ]),
    methods: {
      ...mapActions([
        'getBedData'
      ]),
      showCard(id,name){
        console.log(name)
      }
    },
    created(){
      console.log('------created创建完毕状态------');
      this._floorId = this.floorId;
      this.getBedData(this.floorId);
      //console.log("bedData",this.bedData);
    },
    mounted(){
      console.log('------mounted 挂载结束状态------');
      //console.log("bedData",this.bedData);
    },
    beforeUpdate: function () {
      console.log('beforeUpdate 更新前状态===============》');
      if(this._floorId != this.floorId){
        this._floorId = this.floorId;
        this.getBedData(this.floorId);
      }

      //console.log("bedData",this.bedData);
    },
    updated: function () {
      console.log('updated 更新完成状态===============》');
      //console.log("bedData",this.bedData);
    }
  }
</script>

<style lang="less">

</style>
