export const products = async () => {
    const request = await fetch("https://clean.maxone.uz/api/products_id");
    const data = await request.json();

    return data;
}

export const categories = async () => {
    const request = await fetch("https://clean.maxone.uz/api/categories/");
    const data = await request.json();

    return data;
}

export const subcategories = async () => {
    const request = await fetch("https://clean.maxone.uz/api/sub_categories/");
    const data = await request.json();

    return data;
}