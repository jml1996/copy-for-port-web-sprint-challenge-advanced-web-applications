import React from "react";
import { render, screen, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColorData as mockGetColorData } from './../api/getColorData';
// jest.mock('./../api/getColorData');

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // mockGetColorData.mockResolvedValueOnce(colorsMockData);
  mockGetColorData(colorsMockData);
  render(<BubblePage/>);

  await wait(() => {
    const name = screen.getByText(/aqua/i);
    expect(name).toBeInTheDocument();
  })

});


const colorsMockData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
]