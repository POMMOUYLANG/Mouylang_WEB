const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  };

  const add = () => {
    let titleField = document.getElementById("title");
    let nameField = document.getElementById("name");
    let dateField = document.getElementById("date");
    let title = titleField.value.trim();
    let name = nameField.value.trim();
    let date = dateField.value.trim();
    if (title === "" || name === "" || date === "") {
      alert("Please input all fields!!");
    } else {
      let cookieData = getCookie("TP08");
      let data = cookieData ? JSON.parse(cookieData) : [];
      data.push({ title: title, name: name, date: date });
      titleField.value = "";
      nameField.value = "";
      dateField.value = "";
      let dataConvert = JSON.stringify(data);
      setCookie("TP08", dataConvert, 365); 
      displayElements();
    }
  };

  const remove = (index) => {
    let cookieData = getCookie("TP08");
    let data = cookieData ? JSON.parse(cookieData) : [];
    data.splice(index, 1);
    let dataConvert = JSON.stringify(data);
    setCookie("TP08", dataConvert, 365); 
    displayElements();
  };

  const displayElements = () => {
    let cookieData = getCookie("TP08");
    let dataConvertBack = cookieData ? JSON.parse(cookieData) : [];
    var elementContainer = document.getElementById("list_data");
    elementContainer.innerHTML = "";
    dataConvertBack.forEach(function (data, index) {
      elementContainer.innerHTML +=
        `
        <div class="w-[100%] border-2 border-gray-300 rounded-2xl flex justify-between p-2 mt-2">
          <div class="">${data.title}</div>
          <div class="">${data.name}</div>
          <div class="">${data.date}</div>
          <button onclick="remove(${index})"
           style="width: 120px; height: 30px; color: white; border-radius: 6px; display:flex;justify-content:center; align-items:center; background-color: red">
            Set expired<img src="./recycle-bin.png" alt="" style="width:18px">
            </button>
        </div>
        `;
    });
  };
  displayElements();