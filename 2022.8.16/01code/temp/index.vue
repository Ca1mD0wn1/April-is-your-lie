<template>
  <div>
        <MySearch title="书籍" :disabled="false"></MySearch>
  </div>
</template>

<script>
import MySearch from "./MySearch.vue";
export default {
    components:{
        MySearch
    }

}
</script>

<style>

</style>