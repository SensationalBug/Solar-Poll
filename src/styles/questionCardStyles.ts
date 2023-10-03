export const questionCardStyles = {
  container: {
    height: "75vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    width: { sm: "80%", xs: "100%" },
    height: { md: "90%", xs: "100%" },
    boxShadow: "0 4px 20px 0 rgb(0 0 0 / 9%)",
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textContainer: {
    height: "15%",
    padding: "20px",
  },
  textContent: {
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
    fontSize: { md: 16, xs: 14 },
    textAlign: { md: "justify", xs: "center" },
  },
  questionContent: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardFooter: {
    width: "100%",
    padding: "20px 0",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTop: "1px solid #E3E3E3",
  },
};
