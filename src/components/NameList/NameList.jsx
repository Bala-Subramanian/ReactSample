import React, { Component } from 'react'
import IndividualNameList from './IndividualNameList';
import Formcomponent from '../formcomponent/Formcomponent';
export class NameList extends Component {
    render() {
      //  const listofpostsurl = "https://jsonplaceholder.typicode.com/posts";
        const persons = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }
        ];

        const personList = persons.map(person => (<h2 key = {person.id}>Person userId is: {person.userId}, Person id is: {person.id} </h2>))
        const personDetailParam = persons.map(personDetail =>
            <IndividualNameList key={personDetail.id} personDetail ={personDetail}/>
        );
        return (
            <div>
                {/* {personList} */}
                {/* {personDetailParam} */}
                <Formcomponent />
            </div>
        )
    }
}

export default NameList