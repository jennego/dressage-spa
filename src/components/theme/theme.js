const breakpoints = {
  xsmall: {
    value: 500,
  },
  small: {
    value: 568,
    edgeSize: {
      none: "0px",
      small: "6px",
      medium: "12px",
      large: "24px",
    },
  },
  medium: {
    value: 992,
    edgeSize: {
      none: "0px",
      small: "12px",
      medium: "24px",
      large: "48px",
    },
  },
  large: {
    value: 1024,
    edgeSize: {
      none: "0px",
      small: "12px",
      medium: "24px",
      large: "48px",
    },
  },
  xlarge: {
    value: 1366,
    edgeSize: {
      none: "0px",
      small: "12px",
      medium: "24px",
      large: "48px",
    },
  },
};

export const theme = {
  button: {
    padding: {
      horizontal: "13px",
    },
    size: {
      small: {
        border: {
          radius: "6px",
          size: "xsmall",
        },
        pad: {
          horizontal: "10px",
        },
      },
    },
  },
  global: {
    background: "background",
    font: {
      family: "Poppins",
      size: "20px",
      height: "normal",
      color: "font",
    },
    focus: {
      border: {
        color: "accent-1",
        width: "2px",
      },
    },
    tip: {
      content: {
        background: "black",
        text: "medium",
      },
    },
    hover: {
      background: {
        color: "hoverBackground",
        opacity: "strong",
      },
    },
    colors: {
      background: {
        light: "#d4d4d4",
        dark: "#000",
      },
      font: {
        light: "#000",
        dark: "#fff",
      },
      text: {
        light: "#000",
        dark: "#fff",
      },
      brand: {
        light: "#6939a8",
        dark: "#7b46c2",
      },
      focus: {
        light: "#7c38d6",
        dark: "#9857fa",
      },
      surface: {
        light: "light-1",
        dark: "dark-1",
      },
      slide: {
        light: "light-3",
        dark: "dark-1",
      },
      accentSubtle: {
        light: "light-2",
        dark: "dark-2",
      },
      hoverBackground: {
        light: "light-4",
        dark: "dark-2",
      },
    },
  },
};
