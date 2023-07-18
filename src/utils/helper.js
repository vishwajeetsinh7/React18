export function filterSearch(list, searchText) {
  return list.filter((card) =>
    card.data.name.toLowerCase()?.includes(searchText?.toLowerCase())
  );
}
