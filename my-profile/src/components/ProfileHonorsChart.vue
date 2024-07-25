<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Honors</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(honor, index) in honors" :key="index">
            <td>{{ honor.year }}</td>
            <td>
              <ul>
                <li v-for="(award, index) in honor.awards" :key="index">{{ award }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileHonorsTable',
    data() {
      return {
        honors: [
          {
            year: '2021-2022',
            awards: [
              'University Second-Class Scholarship'
            ]
          },
          {
            year: '2022-2023',
            awards: [
              'University Second-Class Scholarship',
              'University Outstanding Student Award',
              'University Excellent Youth League Cadre'
            ]
          },
          {
            year: '2023-2024',
            awards: [
              '"Qingchuang Beijing" 2024 "Challenge Cup" Capital University Student Entrepreneurship Competition Main Track Gold Award (National Finals Qualified)',
              '2024 "Internet+" University Student Innovation and Entrepreneurship Competition Beijing Gold Award',
              '2024 Computer Design Competition Beijing Second Prize',
              '2024 14th National College Student E-Commerce "Innovation, Creativity and Entrepreneurship" Challenge University First Prize'
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  
  ul {
    padding-left: 20px;
    margin: 0;
  }
  
  li {
    list-style-type: disc;
  }
  </style>
  