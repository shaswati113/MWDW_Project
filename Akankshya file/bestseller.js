function toggleFilters() {
    const panel = document.getElementById("filterPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
}

  

  function applyFilters() {
    const showOutOfStock = document.getElementById("outOfStockFilter").checked;
    const selectedSizes = Array.from(document.querySelectorAll(".size-filter:checked")).map(cb => cb.value);
    const minPrice = parseInt(document.getElementById("minPrice").value);
    const maxPrice = parseInt(document.getElementById("maxPrice").value);
  
    const filterTagsContainer = document.getElementById("filterTags");
    const appliedFiltersContainer = document.getElementById("appliedFilters");
    filterTagsContainer.innerHTML = "";
  
    let hasFilters = false;
  
    if (showOutOfStock) {
      hasFilters = true;
      filterTagsContainer.innerHTML += `<span class="filter-tag">Out of Stock</span>`;
    }
  
    if (selectedSizes.length > 0) {
      hasFilters = true;
      selectedSizes.forEach(size => {
        filterTagsContainer.innerHTML += `<span class="filter-tag">Size: ${size}</span>`;
      });
    }
  
    if (minPrice > 0 || maxPrice < 5000) {
      hasFilters = true;
      filterTagsContainer.innerHTML += `<span class="filter-tag">Price: ₹${minPrice} - ₹${maxPrice}</span>`;
    }
  
    appliedFiltersContainer.style.display = hasFilters ? "block" : "none";
  
    document.querySelectorAll(".product").forEach(product => {
      const isOut = product.dataset.stock === "out";
      const size = product.dataset.size;
      const price = parseInt(product.dataset.price);
  
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(size);
      const matchesPrice = price >= minPrice && price <= maxPrice;
  
      product.style.display = matchesSize && matchesPrice ? "block" : "none";
  
      if (isOut && showOutOfStock) {
        product.classList.add("out-of-stock");
      } else {
        product.classList.remove("out-of-stock");
      }
    });
  }
  
  function clearAll() {
    document.getElementById("outOfStockFilter").checked = false;
    document.querySelectorAll(".size-filter").forEach(cb => cb.checked = false);
    document.getElementById("minPrice").value = 0;
    document.getElementById("maxPrice").value = 5000;
    document.getElementById("priceRange").value = 5000;
    document.getElementById("appliedFilters").style.display = "none";
    document.getElementById("filterTags").innerHTML = "";
    applyFilters();
  }
  
  function syncMaxPrice() {
    const sliderValue = document.getElementById("priceRange").value;
    document.getElementById("maxPrice").value = sliderValue;
    applyFilters();
  }

  //for showmore
  
  