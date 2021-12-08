var request = new XMLHttpRequest();

request.open(
  "GET",
  " https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json "
);

request.send();
let data;
let pageSize = 5;
let currentPage = 0;
request.onload = function () {
  data = JSON.parse(request.response);
  console.log(data);
  var details = data.forEach((ele) => {
    //document.body.append(ele.id)
    var td = ele.id;
    var td1 = ele.name;
    var td2 = ele.email;
    //  document.body.append(ele.id)
  });

  let result = document.getElementById("results");
  var table = document.createElement("table");
  table.setAttribute("class", "table");

  let thead = document.createElement("thead");
  thead.setAttribute("class", "thead");

  let tr = document.createElement("tr");
  tr.setAttribute("class", "tr");

  let th1 = createthtd("th", "ID");
  let th2 = createthtd("th", "NAME");
  let th3 = createthtd("th", "EMAIL");
  tr.append(th1, th2, th3);
  thead.append(tr);
  let tbody = document.createElement("tbody");
  tbody.setAttribute("id", "tbody");
  //var tr=tbody.createElement('tr');
  table.append(thead, tbody);
  result.append(table);

  for (let i = 0; i < 5; i++) {
    insertRow(data[i], tbody);
  }
  function insertRow(data, element) {
    let row = element.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    cell0.innerHTML = data.id;
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.email;
    cell0.setAttribute("class", "cell0");
    cell1.setAttribute("class", "cell1");
    cell2.setAttribute("class", "cell2");
  }
  document.getElementById("next").addEventListener("click", () => {
    if (data.length / pageSize - 1 == currentPage) {
      return;
    }
    tbody.innerHTML = "";
    currentPage++;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });

  let button0 = document.getElementById("1").addEventListener("click", () => {
    tbody.innerHTML = "";

    currentPage = 0;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });
  let button1 = document.getElementById("2").addEventListener("click", () => {
    tbody.innerHTML = "";

    currentPage = 1;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });
  let button2 = document.getElementById("3").addEventListener("click", () => {
    tbody.innerHTML = "";

    currentPage = 2;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });
  let button3 = document.getElementById("4").addEventListener("click", () => {
    tbody.innerHTML = "";

    currentPage = 3;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });
  let button4 = document.getElementById("5").addEventListener("click", () => {
    tbody.innerHTML = "";

    currentPage = 4;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (currentPage == 0) {
      return;
    }
    tbody.innerHTML = "";
    currentPage--;
    for (let i = currentPage * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });
  let pageNumber = document.getElementById("pageNumber");
  pageNumber.addEventListener("input", () => {
    tbody.innerHTML = "";
    currentPage = pageNumber.value;
    for (let i = (currentPage - 1) * 5; i < currentPage * 5 + 5; i++) {
      insertRow(data[i], tbody);
    }
  });

  function createthtd(elementname, value) {
    var td = document.createElement(elementname);
    td.innerHTML = value;
    return td;
  }
};
