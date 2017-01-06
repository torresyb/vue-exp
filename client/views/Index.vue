<template>
  <div class="index">
  	<bi-link></bi-link>
  	<bi-usertype></bi-usertype>
	<index-table></index-table>
	<hr>
	<index-line></index-line>
	<index-funnel></index-funnel>
  <index-map></index-map>
  </div>
</template>

<script>
import BiLink from '../components/BiLink'
import BiUsertype from '../components/BiUsertype'
import IndexLine from '../components/index/IndexLine'
import IndexFunnel from '../components/index/IndexFunnel'
import IndexTable from '../components/index/IndexTable'
import IndexMap from '../components/index/IndexMap'
export default {
  components: {
    BiLink,
    BiUsertype,
    IndexLine,
    IndexFunnel,
    IndexTable,
    IndexMap
  }
}
</script>

<style scoped>
#bi-userType{
	height:50px;
	line-height:55px;
	background-color:#f7f7f7;
	margin: 0 -30px;
	padding-left:30px;
}
</style>
