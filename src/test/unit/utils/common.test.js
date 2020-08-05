import { sortByText, sortByNumber} from "../../../utils/common";

describe("SortByText function test", () => {
    const dummyData = [{name:"abc"}, {name:"cba"}, {name:"bca"}]
    test("Descending", () => {
        const expectedData = [{name:"cba"}, {name:"bca"}, {name:"abc"}]
        expect(sortByText(dummyData, "desc")).toEqual(expectedData);
    });

    test("Ascending", () => {
        const expectedData = [{name:"abc"}, {name:"bca"}, {name:"cba"}]
        expect(sortByText(dummyData, "asc")).toEqual(expectedData);
    });
});

describe("SortByNumber function test", () => {
    const dummyData = [{price:10}, {price:30}, {price:20}]
    test("High to low", () => {
        const expectedData = [{price:30}, {price:20}, {price:10}]
        expect(sortByNumber(dummyData, "htl")).toEqual(expectedData);
    });

    test("Low to high", () => {
        const expectedData = [{price:10}, {price:20}, {price:30}]
        expect(sortByNumber(dummyData, "lth")).toEqual(expectedData);
    });
});