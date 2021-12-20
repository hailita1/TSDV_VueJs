<template>
  <div class="container">
    <div class="checklists">
      Checklist
    </div>
    <table class="table">
      <thead>
      <tr class="row">
        <th class="col-1" scope="col">#</th>
        <th class="col-6" scope="col">Content</th>
        <th class="col-2" style="text-align: center" scope="col">Result</th>
        <th class="col-3" scope="col" style="text-align: center">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr class="row" :key="checklist.id" v-for="(checklist, index) in listChecklist">
        <th class="col-1" scope="row">{{ index + 1 }}</th>
        <td class="col-6">{{ checklist.content }}</td>
        <td class="col-2">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              <div>
                <b-form-select
                    v-model="checklist.result"
                    :options="checklist.results"
                    class="mb-3"
                    value-field="id"
                    text-field="value"
                    @change=handleChange($event,checklist)
                ></b-form-select>
              </div>
            </div>
            <div class="col-3"></div>
          </div>
        </td>
        <td class="col-3">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-warning" @click="update(listChecklist)"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-edit"></i>
              </button>
            </div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button type="button" class="btn btn-block btn-danger"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-trash"></i>
              </button>
            </div>
            <div class="col-3"></div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listChecklist: [],
      listResult: [],
      errors: [],
      selected: ''
    }
  },
  // lấy dữ liệu khi component được tạo thành công
  created() {
    this.getAllChecklist();
    axios.get(`http://localhost:9000/api/result`)
        .then(response => {
          this.listResult = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  methods: {
    handleChange($event, checklist) {
      checklist.result = $event;
    },
    update(checklist) {
      console.log(checklist);
      axios.put(`http://localhost:9000/api/checklist`, checklist)
          .then(response => {
            if (response) {
              this.getAllChecklist();
              console.log("Update thành công")
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
    },
    getAllChecklist() {
      axios.get(`http://localhost:9000/api/checklist`)
          .then(response => {
            this.listChecklist = response.data;
            console.log(this.listChecklist)
          })
          .catch(e => {
            this.errors.push(e)
          })
    }
  }
}
</script>

<style scoped>
.checklists {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}
</style>
