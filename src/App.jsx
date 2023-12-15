import './App.css'
import Header from './Header'
import MyCard from './MyCard'
import Footer from './Footer'


function App() {
  const perrosArray = [{img: "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg", nombre: "Corki", descripcion: "No dejes que te engañe, es una maquina de matar!", textButton: "Corgi", bgColor: 'btn btn-primary'}, 
                       {img: "https://cdn.pixabay.com/photo/2016/11/22/23/14/terrier-1851108_1280.jpg", nombre: "Stacy", descripcion: "5 kgs de puro terror, nunca le des la espalda", textButton: "Shih Tzu", bgColor: "btn btn-secondary"},
                       {img: "https://cdn.pixabay.com/photo/2020/12/03/05/23/lion-5799523_1280.jpg", nombre: "Erzebeth", descripcion: "El mejor compañero de vida! (y muerte)", textButton: "Un Leon!?", bgColor: "btn btn-success"},
                       {img: "https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_1280.jpg", nombre: "Drola", descripcion: "Sabe mas de 500 trucos! ninguno de ellos es algo util", textButton: "Shar Pei", bgColor: "btn btn-warning"}]

  return (
    <>
      <Header titulo="Adopta un cachorro"/>
      <div className='container-cards'>
      {
      perrosArray.map(animal =>{
        return <MyCard key={animal.nombre} img={animal.img} nombre={animal.nombre} descripcion={animal.descripcion} textButton={animal.textButton} bgColor={animal.bgColor}/>
      }) 
      }
      </div>

      <Footer />

    </>
  )
}

export default App
