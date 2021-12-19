<template>
  <div class="container">
    <div class="checklist_templates">
      Checklist Template
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">File Name</th>
        <th scope="col" style="width: 300px; text-align: center">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>What is your name ?</td>
        <td>
          <div class="row">
            <div class="col-4" style="margin-left: auto; margin-right: auto">
              <button type="button" class="btn btn-block btn-danger"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>What is your name ?</td>
        <td>
          <div class="row">
            <div class="col-4" style="margin-left: auto; margin-right: auto">
              <button type="button" class="btn btn-block btn-danger"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>What is your name ?</td>
        <td>
          <div class="row">
            <div class="col-4" style="margin-left: auto; margin-right: auto">
              <button type="button" class="btn btn-block btn-danger"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="position-button">
      <button type="button" class="btn btn-success" style="margin-right: 10px">Import</button>
      <button type="button" class="btn btn-primary">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChecklistTemplate"
}
</script>

<style scoped>
.checklist_templates {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}

.position-button {
  position: absolute;
  right: 150px;
  margin-top: 100px;
}

.position-button .btn {
  width: 120px;
}
</style>
