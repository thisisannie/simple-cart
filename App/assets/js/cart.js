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
        if($(this).data('selected') === 'true') {
            $(this).attr('data-selected', 'false').data('selected', 'false');
        } else {
            $('#select-size-warning').addClass('hidden');
            $(this).siblings().attr('data-selected', 'false').data('selected', 'false');
            $(this).attr('data-selected', 'true').data('selected', 'true');
        }
    });

    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
    };

    // Cart
    let cart = [];

    // Render Cart
    function renderCart () {
        if (cart.length !== 0){
            const groupedCart = groupBy(cart, 'id');
            let cartHtml = '';
            for(const itemID in groupedCart) {
                const itemCount = groupedCart[itemID].length;
                const firstItem = groupedCart[itemID][Object.keys(groupedCart[itemID])[0]];
                cartHtml += `
                    <div class="cart-item">
                        <div class="row">
                            <div class="col col-4">
                                <img src="` + firstItem.image + `" alt="` + firstItem.imageAlt + `" class="product-item__image">
                            </div>
                            <div class="col col-8">
                                <h3>` + firstItem.heading + `</h3>
                                <p>` + itemCount + `x <span class="cart-item__price">$` + firstItem.price + `</span></p>
                                <p>Size: ` + firstItem.size + `</p>
                            </div>
                        </div>
                    </div>`;
            }
            $('#cart-content').html(cartHtml);
        }
    }
    
    // Add to Cart
    $('#add-to-cart').on('click', function() {
        const selectedSize = $('.product-item__attribute-items').find('[data-selected="true"]')
        if($(selectedSize).length !== 0) {
            $('#select-size-warning').addClass('hidden');
            // create a cart item object
            const itemImage = $('.product-item__image').first().attr('src');
            const itemImageAlt = $('.product-item__image').first().attr('alt');
            const itemHeading = $('.product-item').find('[data-heading]').attr("data-heading");
            const itemSize = $(selectedSize).attr("data-size");
            const itemPrice = $('.product-item').find('[data-price]').attr("data-price");
            const itemID = itemHeading + " - " + itemSize;
            cart.push ({
                id : itemID,
                image : itemImage,
                imageAlt : itemImageAlt,
                heading : itemHeading,
                size : itemSize,
                price : itemPrice,
            });
            renderCart();
            $('.product-item__attribute-items__attribute-item').attr('data-selected', 'false').data('selected', 'false');
        } else {
            // else display size selection reminder
            $('#select-size-warning').removeClass('hidden');
        }
    });
});