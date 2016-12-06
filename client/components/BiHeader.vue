<template>
	<div id="bi_header" class="clearfix">
		<div id="bi_nav" class="fl">
			<a href="#" class="active">数据报表</a>
			<a href="#">实时数据</a>
			<a href="#">自助取数</a>
		</div>
		<div id="bi-user" class="fr">
			<img src="../assets/images/user.png" >
			欢迎你，常慧（chhchpt）<span>|</span><a href="javascript:;" id="bi_loginout">退出</a>
		</div>
	</div>
</template>

<style>
#bi_header{
	height:60px;
	line-height:60px;
	width:100%;
	background-color:#2e3141;
	position: fixed;
	top:0;
	left:0;
    z-index: 999;
}
#bi_nav{
	margin-left:193px;;
}
#bi_nav a{
	margin-left:80px;
	color:#73839b;
	font-size:16px;
}
#bi_nav a.active{
	color:#32c2dd;
}
#bi-user{
	margin-right:20px;
}
#bi-user,#bi-user a{
	color:#73839b;
}
#bi-user img{
	vertical-align:middle;
	margin-right:10px;
}
#bi-user span{
	margin:0 10px;
}
</style>