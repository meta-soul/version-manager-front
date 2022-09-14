<template>
  <div class="versionUpgrade">
    <div class="mainBox">
      <div class="versionStatus">
        <p>{{ $t("versionUpdate.currentVersion") + ":" }}</p>
        <p>{{ $t("versionUpdate.status") + ":" }}</p>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="version"
          :label="$t('versionUpdate.version')"
          min-width="10%"
        />
        <el-table-column
          prop="updateDate"
          :label="$t('versionUpdate.date')"
          min-width="25%"
        />
        <el-table-column
          prop="description"
          :label="$t('versionUpdate.description')"
          min-width="40%"
        />
        <el-table-column
          fixed="right"
          :label="$t('versionUpdate.operations')"
          min-width="20%"
        >
          <template #default="scope">
            <el-button
              v-if="curVersion > scope.row.version"
              @click="versionUpdate(scope.row, 'rollback')"
              type="primary"
              size="small"
              >{{ this.$t("versionUpdate.rollback") }}</el-button
            >
            <el-button
              v-show="curVersion < scope.row.version"
              @click="versionUpdate(scope.row, 'upgrade')"
              type="primary"
              size="small"
              >{{ this.$t("versionUpdate.upgrade") }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "VersionUpgrade",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tableData: (state) => {
        return state.VersionUpgrade.tableData;
      },
      curVersion: (state) => {
        return state.VersionUpgrade.curVersion;
      },
    }),
  },
  created() {
    this.getVersionsList();
    console.log("q234789");
  },
  methods: {
    ...mapActions("VersionUpgrade", [
      "versionUpgrade",
      "versionRollback",
      "getVersionsList",
    ]),
    versionUpdate(row, type) {
      if (type == "upgrade") {
        this.versionUpgrade(row);
      } else if (type == "rollback") {
        this.versionRollback(row);
      }
    },
  },
};
</script>

<style scoped>
.versionUpgrade {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(62, 62, 62);
}

.mainBox {
  width: 60%;
  margin-bottom: 5%;
  box-shadow: -6px 6px 20px 10px grey;
}

.versionStatus {
  padding-left: 10px;
}

.versionStatus p {
  color: #fff;
  font-size: 13px;
}

.el-table /deep/ .el-table__cell {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.el-table /deep/ th.el-table__cell {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.el-table /deep/ .el-table-fixed-column--right {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

/* 表头字体颜色 */
.el-table /deep/ th.el-table__cell > .cell {
  color: rgb(64, 158, 255) !important;
}

.el-table /deep/ .cell {
  color: white;
}

.el-table /deep/ tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
