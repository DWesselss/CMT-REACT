import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import BookList from './components/BookList'

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <h1>Top 3 bestseller boeken</h1>
        <BookList />
      </main>
    </Layout>
  )
}

export default App
