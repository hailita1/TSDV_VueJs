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
      <tr class="row">
        <th class="col-1" scope="row">1</th>
        <td class="col-6">What is your name ?</td>
        <td class="col-2">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6 ">
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option value="OK">OK</option>
                <option value="NG">NG</option>
                <option value="N/A">N/A</option>
              </select>
            </div>
            <div class="col-3"></div>
          </div>

        </td>
        <td class="col-3">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-warning"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-edit"></i>
              </button>
            </div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-primary"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-info"></i>
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
      <tr class="row">
        <th class="col-1" scope="row">2</th>
        <td class="col-6">What is your name ?</td>
        <td class="col-2">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6 ">
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option value="OK">OK</option>
                <option value="NG">NG</option>
                <option value="N/A">N/A</option>
              </select>
            </div>
            <div class="col-3"></div>
          </div>

        </td>
        <td class="col-3">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-warning"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-edit"></i>
              </button>
            </div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-primary"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-info"></i>
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
      <tr class="row">
        <th class="col-1" scope="row">3</th>
        <td class="col-6">What is your name ?</td>
        <td class="col-2">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6 ">
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option value="OK">OK</option>
                <option value="NG">NG</option>
                <option value="N/A">N/A</option>
              </select>
            </div>
            <div class="col-3"></div>
          </div>

        </td>
        <td class="col-3">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-warning"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-edit"></i>
              </button>
            </div>
            <div class="col-2" style="margin-left: auto; margin-right: auto">
              <button class="btn btn-block btn-primary"
                      style="color: white; width: 44px; height: 38px">
                <i class="fas fa-info"></i>
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
export default {
  name: "Checklist"
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
