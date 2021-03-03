<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>NODE_ENV: {{ node_env }}</p>
    <p>text: {{ txt }}</p>
  </div>
</template>

<script>
import str from '../txt/test.txt'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      node_env: process.env.NODE_ENV,
      txt: str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
