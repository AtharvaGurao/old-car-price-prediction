// Populate the dropdown options for both selects based on the product array
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
for (let i = 1; i < product.length; i++) {
    const optionHTML = `<option value="${i}">${product[i].title}</option>`;
    select1.innerHTML += optionHTML;
    select2.innerHTML += optionHTML;
}

// Combined function to handle selection changes for either dropdown
function handleSelectionChange(selectedValue, targetElements, otherValue) {
    // Destructure target elements
    const { imageId, priceId, nameId, companyId, yearId, fuelTypeId, selectElement } = targetElements;

    // If the selected value matches the other value, reset and return early
    if (selectedValue === otherValue) {
        selectElement.selectedIndex = 0;
        resetDetails(imageId, priceId, nameId, companyId, yearId, fuelTypeId);
        return;
    }

    // Update the target elements based on the selected product from the array
    const selectedProduct = product[selectedValue];
    document.getElementById(imageId).src = selectedProduct.image;
    document.getElementById(priceId).innerHTML = `₹${selectedProduct.price.toLocaleString()}`;
    document.getElementById(nameId).innerHTML = selectedProduct.title;
    document.getElementById(companyId).innerHTML = selectedProduct.brand;
    document.getElementById(yearId).innerHTML = selectedProduct.year || "N/A";
    document.getElementById(fuelTypeId).innerHTML = selectedProduct.fuelType || "N/A";
}

// Event listener functions for dropdown changes
select1.addEventListener("change", function() {
    const selectedValue = select1.value;
    const targetElements = {
        imageId: "img1",
        priceId: "price1",
        nameId: "name1",
        companyId: "company1",
        yearId: "year1",
        fuelTypeId: "fuel_type1",
        selectElement: select1
    };
    handleSelectionChange(selectedValue, targetElements, select2.value);
});

select2.addEventListener("change", function() {
    const selectedValue = select2.value;
    const targetElements = {
        imageId: "img2",
        priceId: "price2",
        nameId: "name2",
        companyId: "company2",
        yearId: "year2",
        fuelTypeId: "fuel_type2",
        selectElement: select2
    };
    handleSelectionChange(selectedValue, targetElements, select1.value);
});

// Helper function to reset the product details to default values
function resetDetails(imageId, priceId, nameId, companyId, yearId, fuelTypeId) {
    document.getElementById(imageId).src = product[0].image; // Reset to the default image
    document.getElementById(priceId).innerHTML = "N/A";
    document.getElementById(nameId).innerHTML = "N/A";
    document.getElementById(companyId).innerHTML = "N/A";
    document.getElementById(yearId).innerHTML = "N/A";
    document.getElementById(fuelTypeId).innerHTML = "N/A";
}
