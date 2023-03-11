import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Election() {
  return (
    <div>
    <div class="container" style="width: 650px;">
    <div class="">
      <div class="col-lg-12">
      <div id="heading-election">
      <h1 class="text-center">Election Results</h1>
      </div>
        
        <hr/>
        <br/>
        <div id="loader">
          <h3 class="text-center">Loading...</h3>
        </div>
        <div id="content" style="display: none;">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Votes</th>
              </tr>
            </thead>
            <tbody id="candidatesResults">
            </tbody>
          </table>
          <hr/>
          <p id="accountAddress" class="text-center"></p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Election
