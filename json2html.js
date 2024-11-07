// json2html.js
export default function json2html(data) {
  // Create the opening <table> tag with the required data-user attribute
  let html = `<table data-user="madhurithakambala27@gmail.com">
                <thead>
                  <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                </thead>
                <tbody>`;
  
  // Iterate through the array of data to create each row
  data.forEach(item => {
    html += `<tr>`;
    html += `<td>${item.Name || ''}</td>`; // Add the Name column value
    html += `<td>${item.Age || ''}</td>`;  // Add the Age column value
    html += `<td>${item.Gender || ''}</td>`; // Add the Gender column value
    html += `</tr>`;
  });

  // Close the table
  html += `</tbody></table>`;

  return html;
}
