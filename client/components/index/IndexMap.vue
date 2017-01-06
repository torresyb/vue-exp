<template>
	<!-- 注册用户趋势图 -->
	<div id="bi-index-line">
		<div class="bi-center bi-gt20">
			<el-date-picker
		      v-model="date"
		      type="daterange"
		      align="right"
		      placeholder="选择日期范围"
		      :picker-options="pickerOptions"
		      style="width: 220px">
		    </el-date-picker>
		</div>
		<div class="bi-h2-title bi-right bi-gt10">
			<h2 class="bi-h2"><i class="bi_icons bi_icons_tg"></i>
		注册用户趋势图</h2>
			<button type="button" class="bi-button">导出数据</button>
		</div>
	  	<chart :options="polar" ref="chart" style="width:100%;height:600px"></chart>
  	</div>
</template>

<script>
export default {
  data: function () {
    return {
        pickerOptions: {
        	shortcuts: [{
	            text: '最近一周',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近一个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近三个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	              picker.$emit('pick', [start, end]);
	            }
	        }]
        },
        date:'',
		polar: {
			title: {
		        text: 'iphone销量',
		        subtext: '纯属虚构',
		        left: 'center'
		    },
		    tooltip: {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data:['iphone3','iphone4','iphone5']
		    },
		    visualMap: {
		        min: 0,
		        max: 2500,
		        left: 'left',
		        top: 'bottom',
		        text: ['高','低'],           // 文本，默认为数值文本
		        calculable: true
		    },
		    toolbox: {
		        show: true,
		        orient: 'vertical',
		        left: 'right',
		        top: 'center',
		        feature: {
		            dataView: {readOnly: false},
		            restore: {},
		            saveAsImage: {}
		        }
		    },
		    series: [
		        {
		            name: 'iphone3',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 111 },
		                {name: '上海',value: 111 },
		                {name: '重庆',value: 111 },
		                {name: '河北',value: 111 },
		                {name: '河南',value: 111 },
		                {name: '云南',value: 111 },
		                {name: '辽宁',value: 111 },
		                {name: '黑龙江',value: 111 },
		                {name: '湖南',value: 111 },
		                {name: '安徽',value: 111 },
		                {name: '山东',value: 111 },
		                {name: '新疆',value: 111 },
		                {name: '江苏',value: 111 },
		                {name: '浙江',value: 111 },
		                {name: '江西',value: 111 },
		                {name: '湖北',value: 111 },
		                {name: '广西',value: 111 },
		                {name: '甘肃',value: 111 },
		                {name: '山西',value: 111 },
		                {name: '内蒙古',value: 111 },
		                {name: '陕西',value: 111 },
		                {name: '吉林',value: 111 },
		                {name: '福建',value: 111 },
		                {name: '贵州',value: 111 },
		                {name: '广东',value: 111 },
		                {name: '青海',value: 111 },
		                {name: '西藏',value: 111 },
		                {name: '四川',value: 111 },
		                {name: '宁夏',value: 111 },
		                {name: '海南',value: 111 },
		                {name: '台湾',value: 111 },
		                {name: '香港',value: 111 },
		                {name: '澳门',value: 111 }
		            ]
		        },
		        {
		            name: 'iphone4',
		            type: 'map',
		            mapType: 'china',
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 111 },
		                {name: '上海',value: 1111 },
		                {name: '重庆',value: 111 },
		                {name: '河北',value: 111 },
		                {name: '安徽',value: 111 },
		                {name: '新疆',value: 111 },
		                {name: '浙江',value: 111 },
		                {name: '江西',value: 111 },
		                {name: '山西',value: 111 },
		                {name: '内蒙古',value: 111 },
		                {name: '吉林',value: 111 },
		                {name: '福建',value: 111 },
		                {name: '广东',value: 111 },
		                {name: '西藏',value: 111 },
		                {name: '四川',value: 111 },
		                {name: '宁夏',value: 111 },
		                {name: '香港',value: 111 },
		                {name: '澳门',value: 111 }
		            ]
		        },
		        {
		            name: 'iphone5',
		            type: 'map',
		            mapType: 'china',
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 111 },
		                {name: '上海',value: 111 },
		                {name: '广东',value: 111 },
		                {name: '台湾',value: 111 },
		                {name: '香港',value: 111 },
		                {name: '澳门',value: 111 }
		            ]
		        }
		    ]
		}
    }
  },
  methods: {
  	resizeEventHandler() {
  		this.$refs.chart.chart.resize();
  	}
  },
  mounted() {
  	if(window.addEventListener){
        window.addEventListener('resize', this.resizeEventHandler, false);
    }else{
        window.attachEvent('onresize',this.resizeEventHandler);
    }  
  }	
}
</script>
