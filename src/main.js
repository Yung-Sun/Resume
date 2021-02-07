var myChart = echarts.init(document.getElementById('skills'));
option = {
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '静态页面', max: 10},
            { name: '编程基础', max: 10},
            { name: '沟通交流', max: 10},
            { name: 'Vue全家桶', max: 10},
            { name: '项目开发', max: 10},
        ]
    },
    series: [{
        type: 'radar',
        data: [{value: [8, 7, 9, 7, 7]}]
    }]
};
myChart.setOption(option);