import AnimeList from "./components/AnimeList";

export default  async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime/?limit=4`)
  const anime = await response.json()

  return (
    <div>
      <h1>Anime Populer</h1>
      <div className="flex gap-4 overflow-hidden items-center w-full justify-between">
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="flex border border-black rounded-xl shadow=xl p-5">
          <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
        </div>
        )
      })}
      </div>
    </div>
  )
}
