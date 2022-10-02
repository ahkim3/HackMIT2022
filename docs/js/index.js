document.addEventListener('DOMContentLoaded', function() {
    search = document.getElementById('search');

    search.addEventListener("click", () => {
        city = document.getElementById('location').value;
        price = document.getElementById("price").value;
        num_rooms = document.getElementById("num_rooms").value;
        
        localStorage.setItem("city",city);
        localStorage.setItem("price",price);
        localStorage.setItem("city",city);

    })
});