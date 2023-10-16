export const questionCardStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    width: { md: "80%", xs: "100%" },
    boxShadow: "0 4px 20px 0 rgb(0 0 0 / 9%)",
  },
  cardContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textContent: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 600,
    margin: "0 0 8px",
    fontSize: { md: 30, xs: 20 },
  },
  text: {
    color: "#808080",
    margin: "0 0 8px",
    textAlign: "center",
    fontSize: { md: 16, xs: 14 },
  },
  questionContent: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardFooter: {
    width: "100%",
    padding: "15px 0",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTop: "1px solid #E3E3E3",
  },
};
