function toggleFilters() {
    const panel = document.getElementById("filterPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function applyFilters() {
    const selectedSizes = Array.from(document.querySelectorAll(".size-filter:checked")).map(cb => cb.value);
    const minPrice = parseInt(document.getElementById("minPrice").value);
    const maxPrice = parseInt(document.getElementById("maxPrice").value);
    const sortOption = document.getElementById("sort").value;

    const filterTagsContainer = document.getElementById("filterTags");
    const appliedFiltersContainer = document.getElementById("appliedFilters");
    filterTagsContainer.innerHTML = "";

    let hasFilters = false;

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

    const products = Array.from(document.querySelectorAll(".image-items"));

    products.forEach(product => {
        const priceText = product.querySelector(".price-discounted").innerText.replace(/[^0-9]/g, '');
        const size = product.dataset.size || "";
        const price = parseInt(priceText);

        const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(size);
        const matchesPrice = price >= minPrice && price <= maxPrice;

        product.style.display = (matchesSize && matchesPrice) ? "block" : "none";
    });

    sortProducts(products, sortOption);
}

function sortProducts(products, sortOption) {
    const grid = document.querySelectorAll(".image-grid");
    grid.forEach(container => {
        const items = Array.from(container.querySelectorAll(".image-items"));
        let sortedItems = items.slice();

        sortedItems.sort((a, b) => {
            const aTitle = a.querySelector(".product-title").innerText;
            const bTitle = b.querySelector(".product-title").innerText;

            const aPrice = parseInt(a.querySelector(".price-discounted").innerText.replace(/[^0-9]/g, ""));
            const bPrice = parseInt(b.querySelector(".price-discounted").innerText.replace(/[^0-9]/g, ""));

            switch (sortOption) {
                case "az": return aTitle.localeCompare(bTitle);
                case "za": return bTitle.localeCompare(aTitle);
                case "low": return aPrice - bPrice;
                case "high": return bPrice - aPrice;
                // "best", "old", "new" = default order
                default: return 0;
            }
        });

        sortedItems.forEach(item => container.appendChild(item));
    });
}

function clearAll() {
    document.querySelectorAll(".size-filter").forEach(cb => cb.checked = false);
    document.getElementById("minPrice").value = 0;
    document.getElementById("maxPrice").value = 5000;
    document.getElementById("appliedFilters").style.display = "none";
    document.getElementById("filterTags").innerHTML = "";
    applyFilters();
}
