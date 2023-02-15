import * as hcl from "@cdktf/hcl2json";

describe("Terraform Snapshot", () => {
    it("Should have resources with required properties", async () => {
        const data = await hcl.convertFiles(".");
        expect(data).toMatchSnapshot();
    });
});
