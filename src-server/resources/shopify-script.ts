// No Imports until webpack is setup

const className_productCardImageWrapper = 'product-card__image-wrapper';
const attribute_previewImageUrl = 'data-preview-image';
const attribute_productId = 'data-product-id';
const attribute_previewData = 'data-preview-data';


function load() {
    console.log('shopify-script load START');
    let elements = document.getElementsByClassName(className_productCardImageWrapper);
    let productCards: HTMLDivElement[] = Array.prototype.filter.call(elements, (x: HTMLDivElement) => {
        return x.getAttribute(attribute_previewImageUrl) != null;
    });

    let products = productCards.map(x => ({
        element: x,
        imageUrl: x.getAttribute(attribute_previewImageUrl) as string,
        productId: x.getAttribute(attribute_productId) as string,
        previewData: x.getAttribute(attribute_previewData) as string,
    }));

    products.forEach(x => {
        x.element.innerHTML = `
        <img src='${x.imageUrl}' class='product-card__image'>
        <button onclick='javascript:glip_add_image()'>Add Your Image for a Preview</button>
        `;

        if (x.previewData != null) {
            try {
                let d = JSON.parse(x.previewData);
            } catch (err) { }
        }

        let button = document.createElement('button');
        button.click = () => {
            console.log('clicked glip_add_image', x.imageUrl);
        };

        let container = x.element.parentElement.parentElement;
        container.insertBefore(button, x.element.parentElement);
    });

    console.log('shopify-script load END');
}


load();