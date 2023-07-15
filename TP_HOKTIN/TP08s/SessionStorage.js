//sessionStorage.clear;
if(sessionStorage.getItem("ses")){

}else{
sessionStorage.setItem("ses", "[]");
}
var tempData = JSON.parse(sessionStorage.getItem("ses"));

var data = tempData;

const add1 = () => {

    let titleField = document.getElementById("title");
    let nameField = document.getElementById("name");
    let dateField = document.getElementById("date");
    let title = titleField.value.trim();
    let name = nameField.value.trim();
    let date = dateField.value.trim();
    if (title === "" || name === "" || date === "") {
        alert("Please input all fields!!");
    } else {
        data.push({ title: title, name: name, date: date });
        titleField.value = "";
        nameField.value = "";
        dateField.value = "";
        let dataCovert = JSON.stringify(data);
        sessionStorage.setItem("ses", dataCovert)
        displayElement1();
    }
};

const remove1 = (index) => {
    data.splice(index, 1);
    let dataCovert = JSON.stringify(data);
    sessionStorage.setItem("ses", dataCovert)
    displayElement1();
};

const displayElement1 = () => {
    let dataConvertBack = JSON.parse(sessionStorage.getItem("ses"))
    var elementContainer = document.getElementById("list_data");
    elementContainer.innerHTML = "";
    dataConvertBack.map(function (data, index) {
        elementContainer.innerHTML =
            elementContainer.innerHTML +
            `
         <div class="w-[100%] border-2 border-gray-300 rounded-2xl flex justify-between p-2 mt-2">
            <div class="">${data.title}</div>
            <div class="">${data.name}</div>
            <div class="">${data.date}</div>
            <button onclick="remove1(${index})" style="width: 80px; height: 25px; color: white; border-radius: 6px; display:flex;justify-content:center; align-items:center"> <img src="./recycle-bin.png" alt="" style="width:32px"></button>
        </div>
         `
    });
};
