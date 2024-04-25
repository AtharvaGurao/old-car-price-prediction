// Fetch data from data.js file
fetch('{{ url_for("static", filename="data.js") }}')
    .then(response => response.json())
    .then(data => {
        // Now you have the data in the variable 'data'
        // You can use it to populate the dropdown menus
        const select1 = document.getElementById('select1');
        const select2 = document.getElementById('select2');
        
        // Populate the dropdown options
        data.products.forEach((product, index) => {
            const optionHTML = `<option value="${index}">${product.title}</option>`;
            select1.innerHTML += optionHTML;
            select2.innerHTML += optionHTML;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
