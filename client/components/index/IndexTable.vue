<template>
	<!-- 用户来源类型 -->
	<div id="bi-index-tabel">
		<div class="bi-center bi-gt20">
			<el-date-picker
		      v-model="date"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions">
		    </el-date-picker>
		</div>
		<div class="bi-h2-title bi-center bi-gt10">
			<h2 class="bi-h2"><i class="bi_icons bi_icons_tg"></i>注册用户概况</h2>
		</div>
		<!-- 数据区块 -->
		<div class="bi-data">
			<el-row>
			  <el-col :span="8" class="bi-center">
			  	<p class="bi-p-title">日注册用户数</p>
			  	<h2>500</h2>
			  	<p class="bi-trend bi-gray">较前一日 <span class="bi-yellow">30.00%</span><i class="bi_icons bi-add"></i></p>
			  </el-col>
			  <el-col :span="8" class="bi-center">
			  	<p class="bi-p-title">日注册用户数</p>
			  	<h2>3,500</h2>
			  	<p class="bi-trend bi-gray">较上周 <span class="bi-yellow">30.00%</span><i class="bi_icons bi-low"></i></p>
			  </el-col>
			  <el-col :span="8" class="bi-center">
			  	<p class="bi-p-title">日注册用户数</p>
			  	<h2>15,000</h2>
			  	<p class="bi-trend bi-gray">较上月 <span class="bi-yellow">30.00%</span><i class="bi_icons bi-add"></i></p>
			  </el-col>
			</el-row>
			<el-row>
				<el-col :span="24" class="bi-div-block bi-center">
					<p class="bi-p-title bi-title-purple">总注册用户数</p>
					<h2>50,000</h2>
				</el-col>
			</el-row>
		</div>
		<!-- 数据区块 -->
  	</div>
</template>
<script>
export default {
  data: function () {
    return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e7;
          }
        },
        date:''
    }
  }
}
</script>
<style scoped>
.bi-data{
	margin-bottom:20px;
	margin-top:20px;
}
.bi-data p.bi-p-title{
	font-size: 14px;
}
.bi-data p.bi-p-title:before{
	content: '';
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #1fbeda;
    display: inline-block;
    margin-right: 10px;
}
.bi-data p.bi-title-purple{
	margin-top:10px;
}
.bi-data p.bi-title-purple:before{
	background-color:#b4a4db;
}
.bi-data h2{
	font-size:34px;
	color:#ffa10c;
	margin-top:15px;
	margin-bottom:10px;	
}
.bi-div-block{
	background-color:#f7f7f7;
	padding:15px 0;
	margin-top:15px;
}
.bi-div-block h2{
	margin:10px 0 0;
}
</style>
