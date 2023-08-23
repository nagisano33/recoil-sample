import { renderHook } from "@testing-library/react";
import { useUserFetcher } from "./useUserFetcher";

describe("useUserFetcher", () => {
  test("username: admin が返る", async () => {
    const { result: userFetcher } = renderHook(() => useUserFetcher());

    const result = await userFetcher.current.execute();

    expect(result.username).toBe("admin");
  });
});
