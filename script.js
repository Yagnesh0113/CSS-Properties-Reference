document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search');
    var propertyRows = document.querySelectorAll('#property-table tbody tr');

    searchInput.addEventListener('input', function() {
        var searchTerm = this.value.trim().toLowerCase();

        propertyRows.forEach(function(row) {
            var propertyName = row.querySelector('.property-name').textContent.trim().toLowerCase();

            if (propertyName.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});