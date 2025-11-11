import { describe, it, expect, vi } from "vitest";
import axios from "axios";

// 👇 Мокаем модуль axios
vi.mock("axios");
const mockedAxios = vi.mocked(axios);

interface User {
  id: number;
  name: string;
  email: string;
}

// 👉 функция, которую тестируем
async function fetchUser(id: number): Promise<User> {
  const response = await axios.get(`/users/${id}`);
  return response.data;
}

describe("Mocked API Tests", () => {
  it("returns user data on success", async () => {
    const mockUser = { id: 1, name: "Alice", email: "alice@example.com" };

    mockedAxios.get.mockResolvedValueOnce({ data: mockUser });

    const user = await fetchUser(1);
    expect(user).toEqual(mockUser);
  });

  it("throws an error on 404", async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 404, data: { message: "User not found" } },
    });

    try {
      await fetchUser(999);
      expect(false).toBe(true); // не должно дойти сюда
    } catch (err: any) {
      expect(err.response.status).toBe(404);
    }
  });

  it("handles unexpected errors gracefully", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    try {
      await fetchUser(2);
      expect(false).toBe(true);
    } catch (err: any) {
      expect(err.message).toBe("Network Error");
    }
  });
});
