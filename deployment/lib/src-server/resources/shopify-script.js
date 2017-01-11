// No Imports until webpack is setup
var className_productCard = 'product-card__image-wrapper';
var attribute_previewImageUrl = 'data-preview-image';
function load() {
    console.log('shopify-script load START');
    var elements = document.getElementsByClassName(className_productCard);
    var productCards = Array.prototype.filter.call(elements, function (x) {
        return x.getAttribute(attribute_previewImageUrl) != null;
    });
    var products = productCards.map(function (x) { return ({
        element: x,
        imageUrl: x.getAttribute(attribute_previewImageUrl)
    }); });
    window['glip_add_image'] = function () {
        console.log('clicked glip_add_image');
    };
    products.forEach(function (x) {
        x.element.innerHTML = "\n        <img src='" + x.imageUrl + "' class='product-card__image'>\n        <button click='javascript:glip_add_image()'>Add Your Image for a Preview</button>\n        ";
    });
    console.log('shopify-script load END');
}
load();
//# sourceMappingURL=shopify-script.js.map