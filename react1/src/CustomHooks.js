//H1
export const H1 = function ({ children }) {
  return (
    <div
      style={{
        color: "#5c72df",
        fontSize: "36px",
        textShadow: "1px 2px 4px #212121",
        fontWeight: "800",
        paddingLeft: "20px",
      }}
    >
      {children}
    </div>
  );
};
