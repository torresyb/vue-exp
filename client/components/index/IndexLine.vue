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
		  		text: ''
			},
			legend: {
		        data:[]
		    },
			tooltip: {
			  	show: true,
		        feature: {
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
		            dataView: {readOnly: false},
		            magicType: {type: ['line', 'bar']},
		            restore: {},
		            saveAsImage: {}
		        }
			},
			xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['周一','周二','周三','周四','周五','周六','周日']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value} °C'
		        }
		    },
			series: [
		        {
		            name:'最高气温',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint: {
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ]
		            },
		            markLine: {
		                data: [
		                    {type: 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'最低气温',
		            type:'line',
		            data:[1, -2, 2, 5, 3, 2, 0],
		            markPoint: {
		                data: [
		                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
		                ]
		            },
		            markLine: {
		                data: [
		                    {type: 'average', name: '平均值'},
		                    [{
		                        symbol: 'none',
		                        x: '90%',
		                        yAxis: 'max'
		                    }, {
		                        symbol: 'circle',
		                        label: {
		                            normal: {
		                                position: 'start',
		                                formatter: '最大值'
		                            }
		                        },
		                        type: 'max',
		                        name: '最高点'
		                    }]
		                ]
		            }
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
