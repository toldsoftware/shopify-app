// No Imports until webpack is setup
var className_productCardImageWrapper = 'product-card__image-wrapper';
var attribute_productPreviewImageUrl = 'data-product-preview-image';
var attribute_productId = 'data-product-id';
var attribute_previewData = 'data-preview-data';
function load() {
    console.log('shopify-script load START');
    var elements = document.getElementsByClassName(className_productCardImageWrapper);
    var productCards = Array.prototype.filter.call(elements, function (x) {
        return x.getAttribute(attribute_productPreviewImageUrl) != null;
    });
    var products = productCards.map(function (x) { return ({
        element: x,
        previewImageUrl: x.getAttribute(attribute_productPreviewImageUrl),
        productId: x.getAttribute(attribute_productId),
        previewData: x.getAttribute(attribute_previewData),
    }); });
    products.forEach(function (x) {
        x.element.innerHTML = "\n        <img src='" + x.previewImageUrl + "' class='product-card__image'>\n        ";
        if (x.previewData != null) {
            try {
                var d = JSON.parse(x.previewData);
            }
            catch (err) { }
        }
        var button = document.createElement('button');
        button.addEventListener('click', function () {
            console.log('clicked "Add Your Image"');
        });
        button.innerHTML = "Add Your Image for a Preview";
        var container = x.element.parentElement.parentElement;
        container.insertBefore(button, x.element.parentElement.nextSibling);
    });
    console.log('shopify-script load END');
}
load();
//# sourceMappingURL=shopify-script.js.map