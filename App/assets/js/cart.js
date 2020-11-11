window.addEventListener('DOMContentLoaded', (event) => {
    
    // Select attribute
    $('.product-item__attribute-items__attribute-item').on('click', function() {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });

    // Add to Cart
    $('#add-to-cart').on('click', function() {
        // if has size attrubute selection, add to cart
        // else display size selection reminder
    });
});