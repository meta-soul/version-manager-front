<template>
  <div class="versionUpgrade">
    <div class="mainBox">
      <div class="versionStatus">
        <p>版本号：</p>
        <p>当前状态：</p>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="version" :label="$t('versionUpdate.version')" min-width="10%" />
        <el-table-column prop="date" :label="$t('versionUpdate.date')" min-width="15%" />
        <el-table-column prop="description" :label="$t('versionUpdate.description')" min-width="50%" />
        <el-table-column fixed="right" :label="$t('versionUpdate.operations')" min-width="20%">
          <template #default="scope">
            <el-button v-show='scope.row.operations' @click="versionUpdate(scope.row)" type="primary" size="small">{{
                scope.row.operations
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'VersionUpgrade',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      tableData: (state) => { return state.VersionUpgrade.tableData },
    }),
  },
  methods: {
    ...mapActions('VersionUpgrade', ['versionUpgrade', 'versionRollback',]),
    versionUpdate(row) {
      if (row.operations == '升级' || row.operations == 'upgrade') {
        this.versionUpgrade(row)
      } else if (row.operations == '回滚' || row.operations == 'rollback') {
        this.versionRollback(row)
      }
    }
  }
}
</script>

<style scoped>
.versionUpgrade {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
}

.versionUpgrade::before {
  content: "";
  width: 100%;
  min-height: 100%;
  opacity: 0.85;
  background: url(../assets/logo.png) rgba(0, 0, 0, 1) no-repeat center center;
  background-size: 60%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.mainBox {
  width: 60%;
  margin-top: 10%;
}


.versionStatus p {
  color: #fff;
  font-size: 13px;
}

.el-table /deep/ .el-table__cell {
  background-color: rgba(0, 0, 0, 0.5) !important
}

.el-table /deep/ th.el-table__cell {
  background-color: rgba(0, 0, 0, 0.7) !important
}

.el-table /deep/ .el-table-fixed-column--right {
  background-color: rgba(0, 0, 0, 0.5) !important
}

/* 表头字体颜色 */
.el-table /deep/ th.el-table__cell>.cell {
  color: rgb(64, 158, 255) !important
}

.el-table /deep/ .cell {
  color: white;
}

.el-table /deep/ tr:hover {
  background-color: rgba(0, 0, 0, 0.2)
}
</style>
