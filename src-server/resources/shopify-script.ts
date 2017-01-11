// No Imports until webpack is setup

const className_productCardImageWrapper = 'product-card__image-wrapper';
const attribute_productPreviewImageUrl = 'data-product-preview-image';
const attribute_productId = 'data-product-id';
const attribute_previewData = 'data-preview-data';


function load() {
    console.log('shopify-script load START');
    let elements = document.getElementsByClassName(className_productCardImageWrapper);
    let productCards: HTMLDivElement[] = Array.prototype.filter.call(elements, (x: HTMLDivElement) => {
        return x.getAttribute(attribute_productPreviewImageUrl) != null;
    });

    let products = productCards.map(x => ({
        element: x,
        previewImageUrl: x.getAttribute(attribute_productPreviewImageUrl) as string,
        productId: x.getAttribute(attribute_productId) as string,
        previewData: x.getAttribute(attribute_previewData) as string,
    }));

    products.forEach(x => {
        x.element.innerHTML = `
        <img src='${x.previewImageUrl}' class='product-card__image'>
        `;

        if (x.previewData != null) {
            try {
                let d = JSON.parse(x.previewData);
            } catch (err) { }
        }

        let button = document.createElement('button');
        button.addEventListener('click', () => {
            console.log('clicked "Add Your Image"');
        });
        button.innerHTML = `Add Your Image for a Preview`;

        let container = x.element.parentElement.parentElement;
        container.insertBefore(button, x.element.parentElement.nextSibling);
    });

    console.log('shopify-script load END');
}


load();