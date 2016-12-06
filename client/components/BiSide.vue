<template>
	<div id="bi_side">
		<img id="bi_logo" src="../assets/images/logo.png" alt="">
        <ul id="bi_side_nav">
            <li>
                <a href="javascrip:;" class="bi_icons_triangle activeShow"><i class="bi_icons bi_icons_user"></i>用户分析</a>
                <div class="bi_a_child">
                    <router-link to="/">引流效果</router-link>
                    <router-link to="/foo">客户对比分析</router-link>
                    <router-link to="/foo">留存分析</router-link>
                </div>
            </li>
            <li>
                <a href="javascrip:;" class="bi_icons_triangle activeShow"><i class="bi_icons bi_icons_deel"></i>交易分析</a>
                <div class="bi_a_child">
                    <router-link to="/foo">充值／提现</router-link>
                    <router-link to="/foo">投资/赎回分析</router-link>
                    <router-link to="/foo">在投分析</router-link>
                </div>
            </li>
            <li>
                <a href="javascrip:;" class="bi_icons_triangle activeShow"><i class="bi_icons bi_icons_sale"></i>营销效果分析</a>
                <div class="bi_a_child">
                    <router-link to="/foo">营销活动效果</router-link>
                    <router-link to="/foo">营销成本分析</router-link>
                </div>
            </li>
            <li>
                <a href="javascrip:;" class="bi_icons_triangle activeShow"><i class="bi_icons bi_icons_channel"></i>渠道分析</a>
                <div class="bi_a_child">
                    <router-link to="/foo">全部渠道</router-link>
                    <router-link to="/foo">某类渠道</router-link>
                    <router-link to="/foo">自定义渠道</router-link>
                </div>
            </li>
        </ul>
	</div>
</template>

<style>
#bi_side{
	width: 193px;
    background-color: #38414f;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 100%;
}
#bi_side_nav{
    margin-top:15px;
}
#bi_side a{
    display: block;
    color: #7fa0a9;
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 14px;
}
#bi_side li > a{
    margin:5px 0;
}
#bi_side .bi_a_child a{
    padding-left: 60px;
    white-space: nowrap;
}
#bi_side .bi_a_child{
    padding:0 5px;
}
#bi_side .bi_a_child a.active{
    background-color:#32c2dd;
    border-radius:20px;
    color:#fff;
}
#bi_logo{
    margin:10px 0 0 20px;
}
</style>