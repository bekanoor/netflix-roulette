interface IProps {
  searchTypeOnChange: (value: string) => void
}

const SearchOption = (props: IProps) => {
  const switchColor = () => {
    const buttons = document.querySelectorAll('.option-list__button')
    const firstBtn = buttons[0]
    const secondBtn = buttons[1]

    const condition = firstBtn.classList.contains('option-list__button--active')

    if (condition) {
      firstBtn.classList.remove('option-list__button--active')
      secondBtn.classList.add('option-list__button--active')
    } else {
      secondBtn.classList.remove('option-list__button--active')
      firstBtn.classList.add('option-list__button--active')
    }
  }

  const handleChangeTitle = () => {
    switchColor()
    props.searchTypeOnChange('title')
  }

  const handleChangeGenre = () => {
    switchColor()
    props.searchTypeOnChange('genre')
  }

  return (
    <nav>
      <ul className='option-list'>
        <li className='option-list__item'>
          <p>search by</p>
        </li>
        <li className='option-list__item'>
          <button
            onClick={handleChangeTitle}
            className='option-list__button option-list__button--active'
          >
            title
          </button>
        </li>
        <li className='option-list__item'>
          <button onClick={handleChangeGenre} className='option-list__button'>
            genre
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { SearchOption }
