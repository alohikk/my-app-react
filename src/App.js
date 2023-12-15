import React, { useState, useEffect } from 'react';

export default function App() {
  return (
    <>
      <div class="header">
        <h1>Admin Panel</h1>
      </div>

      <div class="sidebar">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      <div class="content">
        <h2>Welcome to the Admin Panel</h2>
        <p>This is the main content area of the admin panel.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>USA</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>USA</td>
              <td>30</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>UK</td>
              <td>35</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>UK</td>
              <td>40</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div class="footer">
        <p>Admin Panel &copy; 2021</p>
      </div>
    </>
  )
}