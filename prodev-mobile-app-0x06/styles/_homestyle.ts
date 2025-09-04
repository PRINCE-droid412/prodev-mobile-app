import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  searchGroup: {
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    color: "#555",
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 30,
    padding: 10,
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 15,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  listingContainer: {
    marginTop: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { styles };
