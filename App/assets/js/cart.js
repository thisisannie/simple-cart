window.addEventListener('DOMContentLoaded', (event) => {
    
    // Toggle cart view
    $('#cart-trigger').on('click mouseover', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#cart-content').removeClass('active');
        } else {
            $(this).addClass('active');
            $('#cart-content').addClass('active');
        }
    });

    // Select product item attribute
    $('.product-item__attribute-items__attribute-item').on('click', function() {
        if($(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        } else {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
        }
    });

    // Add to Cart
    $('#add-to-cart').on('click', function() {
        // if has size attrubute selection, add to cart
        // else display size selection reminder
    });
});