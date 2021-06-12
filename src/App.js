import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';


class App extends React.Component {
  constructor (){
    super();
    this.state = {
       products : []
    };
  }
  increaseQty = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({
      //     products: products
      // });

      const docRef =  firebase
                        .firestore()
                        .collection('products')
                        .doc(products[index].id);

      docRef.update({
        qty: products[index].qty + 1
      })
      .then(()=>{
        console.log('Product Updated qty increased');
      })
      .catch((error)=>{
        console.log('Error :  '+error);
      })                  
  }

  decreaseQty = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0){
          return;
      }

      const docRef = firebase
                       .firestore()
                       .collection('products')
                       .doc(products[index].id);

      docRef.update({
        qty: products[index].qty - 1
      })
      .then(()=>{
        console.log('Product Updated qty decreased');
      })
      .catch((error)=>{
        console.log('Error :  '+error);
      });                 


      // products[index].qty -= 1;

      // this.setState({
      //     products: products
      // });
  }

  deleteProduct = (id) => {
     // const {products} = this.state;

      const docRef = firebase
                      .firestore()
                      .collection('products')
                      .doc(id);

      docRef.delete()
            .then(()=>{
              console.log('deleted successfully');
            }).catch((error)=>{
              console.log('Error : '+error);
            })                



      // const items = products.filter((item)=> item.id !== id);

      // this.setState({
      //     products: items
      // });
  }

  productCount = ()=>{
    const {products} = this.state;
    const count = products.length; 
    return count;
  }

  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        const products = snapshot.docs.map((doc)=>{
            const data =  doc.data();
            data['id'] = doc.id;
            return data;
        });
        
        this.setState({
          products
        });  
      });
  }

  addProduct = ()=>{
    firebase
       .firestore()
       .collection('products')
       .add({
         price: 59999,
         qty: 2,
         title: 'Laptop',
         img: '',
       })
       .then((docRef)=>{
          console.log('product added successfully : ' + docRef);
       })
       .catch((error)=>{
          console.log('Error:  '+ error);
       });
  }


  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.productCount()}  
        />
        <button onClick={this.addProduct} style={{padding:'10px', border:'2px bold red', margin:'20px'}}>Add a Product</button>
        <Cart   
        products = {products}        
        onIncreaseQty={this.increaseQty}
        onDecreaseQty={this.decreaseQty}
        onDeleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}


export default App;
