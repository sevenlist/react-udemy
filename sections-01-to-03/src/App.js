import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';
import shortid from 'shortid';

const App = () => {
    const [persons, setPersons] = useState([
        {id: shortid.generate(), name: 'Alice', age: 21},
        {id: shortid.generate(), name: 'Bob', age: 22}
    ]);

    const [newName, setNewName] = useState({
        name: ''
    })

    const displayPersons = () => {
        return persons.map(person =>
            <Person id={person.id} name={person.name} age={person.age} onClick={handleSwitchNames} />
        );
    };

    const handleChangeName = event => {
        setNewName({
            name: event.target.value
        })
    };

    const handleSwitchNames = personId => {
        /*
        const switchedPersons = {
            ...persons
        };

        const tempPerson = {
            ...persons[0]
        };

        switchedPersons[0].name = switchedPersons[1].name;
        switchedPersons[0].age = switchedPersons[1].age;
        switchedPersons[1].name = tempPerson.name;
        switchedPersons[1].age = tempPerson.age;

        setPersons(switchedPersons)
        */

        const changedPersons = [
            ...persons
        ];

        changedPersons.find(person => person.id === personId).name = newName.name;

        setPersons(changedPersons);
    };

    return (
        <div className="App">
            {displayPersons()}
            <label>Change name to:
                <input onChange={handleChangeName}></input>
            </label>
        </div>
    );
}

export default App;