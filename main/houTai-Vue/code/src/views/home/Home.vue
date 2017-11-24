<template>

  <div class="content">
    <!-- 上 -->
    <el-row :gutter="20">
      <!-- 左 -->
      <el-col :span="12" class="huoyue">
        <!-- 标题 -->
        <h2 class="tableTitle">活跃度</h2>
        <el-tabs v-model="activeName">
          <el-tab-pane label="日活跃" name="first">
            <!-- 折线图 -->
            <div id="huoYueDu" class="huoYueDu" style="width:100%; height:380px;"></div>
            <!-- 表格 -->
            <el-table
              :data="tableHuoyueData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="活跃人数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="环比增幅（％）">
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="周活跃" name="second">

          </el-tab-pane>
          <el-tab-pane label="月活跃" name="third">

          </el-tab-pane>
        </el-tabs>
      </el-col>

      <!-- 右 -->
      <el-col :span="12" class="xiazai">
        <h2 class="tableTitle">下载量</h2>
        <div id="xiaZaiLiang" class="xiaZaiLiang" style="width:100%; height:380px"></div>
      </el-col>
    </el-row>

    <!-- 下 -->
    <el-row>
      <el-col :span="24" class="dingdan">
        <h2 class="tableTitle">订单量</h2>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {
        activeName: 'first',
        huoYueDu: null,
        chartLine: null,
        chartPie: null,
        tableHuoyueData: [{
          date: '2017-11-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2017-11-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2017-11-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2017-11-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      huoYueDuData() {
        this.huoYueDu = echarts.init(document.getElementById('huoYueDu'));
        this.huoYueDu.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1日', '2日', '3日', '4日', '5日', '6日', '今天']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '周活跃',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        });
      },
      xiaZaiLiangData() {
        this.xiaZaiLiang = echarts.init(document.getElementById('xiaZaiLiang'));
        this.xiaZaiLiang.setOption({
          tooltip: {
            trigger: 'axis'
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
          ],
          yAxis: [
            {
              type: 'value',
            }
          ],
          series: [
            {
              name: '下载量',
              type: 'line',
              data: [100, 62, 52, 53, 37, 29, 12, 120, 62, 52, 53, 53]
            }
          ]
        });
      },
      // 调用以上方法
      drawCharts() {
        this.huoYueDuData();
        this.xiaZaiLiangData();
      }
    },
    mounted: function () {

      this.drawCharts();
    },
    updata: function () {
      this.drawCharts();
    }
  }
</script>

<style lang="scss" scoped>
  .tableTitle {
    font-weight: 600;
  }

  .huoYueDu {
    position: relative;
    top: -30px;
  }

  .xiaZaiLiang {
    position: relative;
    top: 25px;
  }

  .dingdan {

  }
</style>
