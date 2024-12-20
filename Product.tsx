//import React from 'react'

export default function Products() {
  const data = [100, 200,300,400,500];
   
  return <div>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Company</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ramu</td>
      <td>ramu@gmail.com</td>
      <td>IBM</td>
      <td>45000</td>
    </tr>
    <tr>
      <td>Raju</td>
      <td>raju@gmail.com</td>
      <td>HP</td>
      <td>55000</td>
    </tr>
    <tr>
      <td>Ramya</td>
      <td>ramya@gmail.com</td>
      <td>TCS</td>
      <td>65000</td>
    </tr>
   </tbody>
  </table>
    </div>;
}