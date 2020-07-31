const apiKey = 'AIzaSyCd8YkCPxXFmogUG2uwrIGtrTiPDzaL0OU'
const projectId = 'proyecto30julio-332cd'
const collection = 'recetas'

firebase.initializeApp({
  apiKey,
  projectId
});

var db = firebase.firestore();

db.collection(collection).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data())
  });
});

function addReceta(){
    let nameValue = document.getElementById('nombre').value
    let tiempoPreparacion = document.getElementById('tiempoPreparacion').value
   
  db.collection("recetas").add({
      nombre: nameValue,
      tiempoPreparacion: tiempoPreparacion,
      ingredientes: array
  })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
  
  var x = 0;
  var array = Array()
  function add_element_to_array(){
    array[x] = document.getElementById("text1").value;
    alert("Ingrediente: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
    display_array();
  }
  
  function display_array(){
    var e = "<hr/>";
    for (var y=0; y<array.length; y++)
    {
      e += "Ingrediente " + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

function addUser() {
    let nameValue = document.getElementById('nameInput').value
    let lastnameValue = document.getElementById('lastnameInput').value
    let ageValue = document.getElementById('ageInput').value
  
    db.collection("users").add({
      name: nameValue,
      lastname: lastnameValue,
      age: ageValue
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }