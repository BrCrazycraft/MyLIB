function updateNAV() {
    let ul = document.getElementById("LISTANAV");

    let item_list1 = document.createElement("li");

    let list1_a = document.createElement("a");
    list1_a.href = "";
    list1_a.textContent = "Element";

    item_list1.appendChild(list1_a);
    ul.appendChild(item_list1);
}