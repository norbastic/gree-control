import { addDeviceToDB } from "../actions/database";

beforeAll(() => {
});

test("returns true", async () => {
    expect(await addDeviceToDB()).toBe(true);    
})