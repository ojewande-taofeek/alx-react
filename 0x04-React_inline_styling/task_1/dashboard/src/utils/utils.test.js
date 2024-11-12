import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("Tests the function in utils.js", ()=> {
    it("Returns current year", ()=> {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it("Returns 'Holberton School' form getFooterCopy() if true", ()=> {
        expect(getFooterCopy(true)).toBe('Holberton School');
    })

    it("Returns 'Holberton School main dashboard' from getFooterCopy() if false", ()=> {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    })

    it("Returns '<strong>Urgent requirement</strong> - complete by EOD' from getLatestNotification()", ()=> {
        const target = `<strong>Urgent requirement</strong> - complete by EOD`;
        expect(getLatestNotification()).toBe(target);
    })
})
