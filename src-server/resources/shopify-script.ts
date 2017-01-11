// No Imports until webpack is setup

const className_productCard = 'product-card__image-wrapper';
const attribute_previewImageUrl = 'data-preview-image';

function load() {
    console.log('shopify-script load START');
    let elements = document.getElementsByClassName(className_productCard);
    let productCards: HTMLDivElement[] = Array.prototype.filter.call(elements, (x: HTMLDivElement) => {
        return x.getAttribute(attribute_previewImageUrl) != null;
    });

    let products = productCards.map(x => ({
        element: x,
        imageUrl: x.getAttribute(attribute_previewImageUrl) as string
    }));

    (window as any)['glip_add_image'] = () => {
        console.log('clicked glip_add_image');
    };

    products.forEach(x => {
        x.element.innerHTML = `
        <img src='${x.imageUrl}' class='product-card__image'>
        <button click='javascript:glip_add_image()'>Add Your Image for a Preview</button>
        `;
    });

    console.log('shopify-script load END');
}


load();