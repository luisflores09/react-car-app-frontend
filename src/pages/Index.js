import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = (props) => {
    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        manufacturer: '',
    });


    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCar(newForm);
        setNewForm({
            name: '',
            image: '',
            manufacturer: '',
        });
    };

    const loaded = () => {
        return props.car.map((car) => (
            <div key={car._id} className='car'>
                <Link to={`/cars/${car._id}`}>
                    <h1>{car.name}</h1>
                </Link>
                <img src={car.image} alt={car.name} />
                <h3>{car.title}</h3>
            </div>
        ));
    };


    const loading = () => {
        return <h1>Loading...</h1>;
    };


    return (
        <section>
            <form className='Form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.manufacturer}
          name="manufacturer"
          placeholder="manufacturer"
          onChange={handleChange}
        />
        <input type="submit" value="Create Car" />
      </form>
            {props.car ? loaded() : loading()}
        </section>
    );
}


export default Index;