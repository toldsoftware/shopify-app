// No Imports until webpack is setup
var className_productCardImageWrapper = 'product-card__image-wrapper';
var attribute_previewImageUrl = 'data-preview-image';
var attribute_previewData = 'data-preview-data';
function load() {
    console.log('shopify-script load START');
    var elements = document.getElementsByClassName(className_productCardImageWrapper);
    var productCards = Array.prototype.filter.call(elements, function (x) {
        return x.getAttribute(attribute_previewImageUrl) != null;
    });
    var products = productCards.map(function (x) { return ({
        element: x,
        imageUrl: x.getAttribute(attribute_previewImageUrl),
        previewData: x.getAttribute(attribute_previewData),
    }); });
    products.forEach(function (x) {
        x.element.innerHTML = "\n        <img src='" + x.imageUrl + "' class='product-card__image'>\n        <button onclick='javascript:glip_add_image()'>Add Your Image for a Preview</button>\n        ";
        if (x.previewData != null) {
            try {
                var d = JSON.parse(x.previewData);
            }
            catch (err) { }
        }
        var button = document.createElement('button');
        button.click = function () {
            console.log('clicked glip_add_image', x.imageUrl);
        };
        var container = x.element.parentElement.parentElement;
        container.insertBefore(button, x.element.parentElement);
    });
    console.log('shopify-script load END');
}
load();
//# sourceMappingURL=shopify-script.js.map