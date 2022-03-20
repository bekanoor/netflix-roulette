const Main = (props: any) => {

  return (
    <main>
      {props.movies.map((item: any) => {
        const image = 'Avengers-War-of-Infinity'
        console.log(typeof image)
        return (
          <div className='film-card'>
            <div className='film-card__image-container'>
              <img className='film-card__image' src={item.cover} alt='image'></img>
            </div>
            <div className='film-card__title-container'>
              <p
              >
                {item.filmTitle}
              </p>
              <p className='film-card__release-date'>{item.releaseDate}</p>
            </div>
            <p
            >
              {/* {item.genre.length > 2 ? item.genre.join(', ') : item.genre.join(' & ')} */}
            </p>
          </div>
        )
      })}
    </main>
  )
}

export default Main
