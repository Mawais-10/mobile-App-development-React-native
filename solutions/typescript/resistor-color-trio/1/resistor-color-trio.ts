const colorMap: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedResistorValue(colors: string[]): string {
  const [color1, color2, color3] = colors;

  const firstDigit = colorMap[color1];
  const secondDigit = colorMap[color2];
  const zeros = colorMap[color3];

  const mainNumber = Number(`${firstDigit}${secondDigit}`);
  const value = mainNumber * Math.pow(10, zeros);

  if (value >= 1000000000) {
    return `${value / 1000000000} gigaohms`;
  }

  if (value >= 1000000) {
    return `${value / 1000000} megaohms`;
  }

  if (value >= 1000) {
    return `${value / 1000} kiloohms`;
  }

  return `${value} ohms`;
}

