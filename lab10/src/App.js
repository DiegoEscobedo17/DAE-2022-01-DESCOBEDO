import {Component} from 'react'

import Productos from './components/Productos';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Title from './components/Title';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      productos:[],
      carro:[],
      esCarroVisible: false
    }
}
componentDidMount() {
  fetch('http://127.0.0.1:8000/productos')
    .then((response) => {
      return response.json()
    })
    .then((prod) => {
      this.setState({ productos: prod })
    })    
}
agregarAlCarro = (producto) => {
  const { carro } = this.state
  if(carro.find(x => x.nombre === producto.nombre)) {
    const newCarro = carro.map(x => x.nombre === producto.nombre
      ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
    return this.setState({carro: newCarro})
  }
  return this.setState({
    carro: this.state.carro.concat({
      ...producto,
      cantidad: 1,
    })
  })
}

mostrarCarro = () => {
  if(!this.state.carro.length){
    return
  }
  this.setState({esCarroVisible: !this.state.esCarroVisible})
}


render() {
  const {esCarroVisible} = this.state
  return (
    <div>
      <Navbar carro={this.state.carro} 
      esCarroVisible={esCarroVisible} 
      mostrarCarro={this.mostrarCarro}/>
      <Layout>
        <Title/>
        <Productos
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
        />
      </Layout>
    </div>
  )  
}

}

export default App;