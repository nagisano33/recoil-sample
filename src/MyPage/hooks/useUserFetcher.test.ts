import axios from "axios";
import { renderHook } from "@testing-library/react";
import { useUserFetcher } from "./useUserFetcher";

describe("useUserFetcher", () => {

  test("axios#get を実行する", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: { username: "admin" } });
    const { result: userFetcher } = renderHook(() => useUserFetcher());

    const result = await userFetcher.current.execute();

    expect(result.username).toBe("admin");
  });
});
