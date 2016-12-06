<template>
  	<div id="bi-userType">
  		用户来源类型：
  		<el-select v-model="usertype" placeholder="全部用户">
	    	<el-option
		      v-for="item in userType"
		      :label="item.label"
		      :value="item.value"
		      :disabled="item.disabled">
		    </el-option>
	  	</el-select>
	</div>
</template>
<script>
export default {
	data: function () {
	    return {
	    	userType:[{
	          value: '自主注册',
	          label: '自主注册'
	        }, {
	          value: '转介绍',
	          label: '转介绍',
	          disabled: true
	        }, {
	          value: '渠道注册',
	          label: '渠道注册'
	        }, {
	          value: '理财大使',
	          label: '理财大使'
	        }, {
	          value: '财盈',
	          label: '财盈'
	        }],
	        usertype: ''
	    }
	}
}
</script>
