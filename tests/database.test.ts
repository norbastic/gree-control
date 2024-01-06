import { addDeviceToDB } from "../actions/database";

test("returns true", async () => {
    expect(await addDeviceToDB()).toBe(true);    
})