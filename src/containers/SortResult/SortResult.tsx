import React from 'react'

interface IProps {
  movieLength?: number
  onClick: (value: string) => void
}

const SortResult = (props: IProps) => {
  const { movieLength, onClick } = props

  const switchColor = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const eventTarget = event.currentTarget as HTMLElement
    if (eventTarget.classList.contains('sort-result--active')) {
      return
    }

    const buttons = document.querySelectorAll('.sort-result__item')
    const firstBtn = buttons[0]
    const secondBtn = buttons[1]

    const condition = firstBtn.classList.contains('sort-result--active')

    if (condition) {
      firstBtn.classList.remove('sort-result--active')
      secondBtn.classList.add('sort-result--active')
    } else {
      secondBtn.classList.remove('sort-result--active')
      firstBtn.classList.add('sort-result--active')
    }
  }

  const handlerChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const eventTarget = event.target as HTMLElement
    switchColor(event)
    onClick(eventTarget.innerText)
  }

  return (
    <div className='sort-result' data-testid='sort-result-test'>
      <p className='sort-result__text'>{movieLength} movies found</p>
      <div>
        <ul className='sort-result__list'>
          <li className='sort-result__text'>Sort by</li>
          <li>
            <button onClick={handlerChange} className='sort-result__item'>
              release data
            </button>
          </li>
          <li>
            <button
              onClick={handlerChange}
              className='sort-result__item sort-result--active'
            >
              rating
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { SortResult }
