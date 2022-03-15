import React from 'react'
import Button from '../UiKit/Button'
import Input from '../UiKit/Input'
import P from '../UiKit/typography/P'
import H1 from '../UiKit/typography/H1'
import Ul from '../UiKit/Ul'
import Li from '../UiKit/Li'

const Header = () => {
  return (
    <header className='header'>
      <P
        className='header__logo'
        opacity={1}
        theme='red'
        register='down'
        font='regular'
        weight='regular'
      >
        netflixroulette
      </P>
      <H1>FIND YOUR MOVIE</H1>
      <div>
        <Input placeholder='What do you want to watch?'></Input>
        <Button className='header__search-btn' theme='danger' size='standard' color='white'>SEARCH</Button>
      </div>
      <nav>
        <Ul className='header__nav'>
          <Li>
            <P opacity={1} theme='white' register='up' font='regular' weight='regular'>
              search by
            </P>
          </Li>
          <Li>
            <Button className='header__filter-btn' theme='danger' size='small' color='white'>TITLE</Button>
          </Li>
          <Li>
            <Button className='header__filter-btn' theme='danger' size='small' color='white'>GENRE</Button>
          </Li>
        </Ul>
      </nav>
    </header>
  )
}

export default Header
