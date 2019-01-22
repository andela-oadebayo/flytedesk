<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink flex-wrap mr-6">
        <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-list">School List</span><br/>
        <span class="font-semibold text-l text-grey-dark tracking-tight">Manage and export data for the school below</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        </div>
        <div>
          <button class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
            Add new School 
          </button>
        </div>
      </div>
    </nav>

    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink flex-wrap mr-6">
        <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-filter">
          <i class="fa fa-filter"></i>
        </span>
        <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-filter">
          <input type="text">
        </span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        </div>
        <div class="fl-school-filter">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
            2 selected
          </a>
          <i href="#responsive-header" class="fa fa-trash block lg:inline-block mr-4"></i>
          <i href="#responsive-header" class="fa fa-share block lg:inline-block"></i>  
        </div>
      </div>
    </nav>
    <table class="table table-hover p-6">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  * {
    outline: none
  }
  html {
    background: #fafafa
  }
  html, body, #app, #app > div {
    height: 100%;
  }

  .fl-school-list {
    width: 100%
  }

  .fl-school-filter i {
    padding: 5px;
    border: 2px solid #8795a1;
    border-radius: 3px;
    font-size: 15px;
  }

  .fl-school-filter input {
    border: 2px solid #8795a1;
    height: 44px;
    padding: 15px;
    font-size: 13px;
    display: none;
  }

  i {
    cursor: pointer;
  }

.table {
  padding: 1.25rem
}
</style>
