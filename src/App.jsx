import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const [remainingTime, setRemainingTime] = useState(20)
  const [readingMoney, setMoney] = useState(0)

  const handleAddToBookmarks = (bookmark, time, money) => {
    const newBookmarks = [...bookmarks, bookmark]
    setBookmarks(newBookmarks)
    const newTime = readingTime + time;
    setReadingTime(newTime)
    setMoney(readingMoney + money)
    setRemainingTime(remainingTime - time);
  }
  // const handleCreditHour = time => {
  //   console.log(time);
  // }

  return (
    <div>
      <Header></Header>
      <main className='flex gap-3'>
        <Courses
          handleAddToBookmarks={handleAddToBookmarks}
        // handleCreditHour={handleCreditHour}
        ></Courses>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
          readingMoney={readingMoney}
          remainingTime = {remainingTime}
        ></Bookmarks>
      </main>
    </div>
  )
}

export default App
