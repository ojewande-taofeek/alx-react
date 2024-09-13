import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe("Tests functions in the util.js", () => {
    it("should return the present year", () => {
        expect(getFullYear()).toBe(2024);
    });

    it("should return some strings for the footer", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });

    it("should return a markup", () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    })

});
