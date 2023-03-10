import { useEffect, useRef } from "react";

export const SECTION_LIST_MOCK_DATA = [
    {
        title: "Appetizers",
        data: [
            {
                id: "1",
                title: "Pasta",
                price: "10",
            },
            {
                id: "3",
                title: "Pizza",
                price: "8",
            },
        ],
    },
    {
        title: "Salads",
        data: [
            {
                id: "2",
                title: "Caesar",
                price: "2",
            },
            {
                id: "4",
                title: "Greek",
                price: "3",
            },
        ],
    },
];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
    // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
    // The title of each section should be the category.
    // The data property should contain an array of menu items.
    // Each item has the following properties: "id", "title" and "price"
    const categoryData = data.reduce((acc, item) => {
        const { category, id, title, price } = item;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push({ id, title, price });
        return acc;
    }, {});
    return Object.keys(categoryData).map((category) => {
        return {
            title: category,
            data: categoryData[category],
        };
    });
}

export function useUpdateEffect(effect, dependencies = []) {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            return effect();
        }
    }, dependencies);
}
