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

/* 移动端样式 */
@media (max-width: 768px) {
  table {
    font-size: 4vw; /* 调整字体大小 */
  }

  td {
    padding: 5vw; /* 增加内边距以提高可读性 */
    text-align: left; /* 居中对齐 */
  }

  th {
    text-align: center;
    background-color: #e2e2e2; /* 略微调整背景色以提高对比度 */
  }

  ul {
    padding-left: 15px; /* 调整内边距 */
  }

  li {
    list-style-type: circle; /* 更改列表样式 */
  }
}
</style>
