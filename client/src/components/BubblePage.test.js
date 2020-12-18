import React from "react";
import { getAllByTestId, render, screen, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColorData as mockGetColorData } from './../api/getColorData';
jest.mock('./../api/getColorData');

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColorData.mockResolvedValueOnce(colorsMockData);

  render(<BubblePage/>);

  await wait(() => {
    const name = screen.getByText(/softpink/i);
    const circles = screen.getAllByTestId("circle");
    console.log(circles);
    expect(circles).toHaveLength(11);
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
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba"
    },
    id: 6
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99"
    },
    id: 7
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99"
    },
    id: 8
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];