<template>
<div>
  <header class="header">
    <h1>Sake App</h1>
    <p>さけのわAPIを使用したアプリ</p>
    <p>さけのわデータ（<a href="https://sakenowa.com">https://sakenowa.com</a>）を利用しています</p>
  </header>
    <ul>
      <li v-for="item in res">
        {{ item.id + ':' + item.name }}
      </li>
    </ul>
</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import axios from 'axios'
import areas from '../assets/api/areasApi.json';

axios.defaults.baseURL = 'http://localhost:9000/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default defineComponent({
  name: 'Index',
  data(){
    return {
      res:null
    }
  },
  mounted: function () {
    this.getAreas()
  },
  methods:{
    async getAreas(){
      this.res = await axios.get('https://muro.sakenowa.com/sakenowa-data/api/areas').catch((e) => {
        console.log(e);
      });
      this.res = this.res ? this.res : areas.areas;
      console.log(this.res) // mockData
    }
  }

})
</script>

<style lang="postcss" scoped>
$white_murky: #fafafa;

.header {
  background-color: $white_murky;
}
</style>
