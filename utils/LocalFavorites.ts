export const toggleFavorites = (pokemonId: number): Boolean => {
  if (typeof window === "undefined") return false;

  let isFavorite = false;

  let favoritePokemons: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  console.log("se esta recibiendo", pokemonId);

  if (favoritePokemons.includes(pokemonId)) {
    favoritePokemons = favoritePokemons.filter(
      (pokeId) => pokeId !== pokemonId
    );
  } else {
    favoritePokemons.push(pokemonId);
    isFavorite = true;
  }

  localStorage.setItem("favorites", JSON.stringify(favoritePokemons));

  return isFavorite;
};

export const isInFavorites = (id: number): Boolean => {
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

export const getFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};
