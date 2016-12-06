<template>
	<!-- 用户转化漏斗 -->
	<div id="bi-index-funnel">
		<div class="bi-center bi-gt20">
			<el-date-picker
		      v-model="date"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions">
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
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e7;
          }
        },
        date:'',
		polar: {
			title: {
		  		text: ''
			},
			tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		        feature: {
		            dataView: {readOnly: false},
		            restore: {},
		            saveAsImage: {}
		        }
		    },
		    legend: {
		        data: ['展现','点击','访问','咨询','订单']
		    },
		    series: [
		        {
		            name: '预期',
		            type: 'funnel',
		            left: '10%',
		            width: '80%',
		            label: {
		                normal: {
		                    formatter: '{b}预期'
		                },
		                emphasis: {
		                    position:'inside',
		                    formatter: '{b}预期: {c}%'
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            itemStyle: {
		                normal: {
		                    opacity: 0.7
		                }
		            },
		            data: [
		                {value: 60, name: '访问'},
		                {value: 40, name: '咨询'},
		                {value: 20, name: '订单'},
		                {value: 80, name: '点击'},
		                {value: 100, name: '展现'}
		            ]
		        },
		        {
		            name: '实际',
		            type: 'funnel',
		            left: '10%',
		            width: '80%',
		            maxSize: '80%',
		            label: {
		                normal: {
		                    position: 'inside',
		                    formatter: '{c}%',
		                    textStyle: {
		                        color: '#fff'
		                    }
		                },
		                emphasis: {
		                    position:'inside',
		                    formatter: '{b}实际: {c}%'
		                }
		            },
		            itemStyle: {
		                normal: {
		                    opacity: 0.5,
		                    borderColor: '#fff',
		                    borderWidth: 2
		                }
		            },
		            data: [
		                {value: 30, name: '访问'},
		                {value: 10, name: '咨询'},
		                {value: 5, name: '订单'},
		                {value: 50, name: '点击'},
		                {value: 80, name: '展现'}
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