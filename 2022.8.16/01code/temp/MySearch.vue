<template>
    <div>
        <h2>请输入{{title}}:</h2>        
        <Search action-text="dd" :disabled="disabled" ></Search>
    </div>
  
</template>

<script>
import {Search} from "vant"
export default {
    props:["title","action-text","disabled"]
    
}
</script>

<style>

</style>