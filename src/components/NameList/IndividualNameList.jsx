import React from 'react'

export default function IndividualNameList({personDetail}) { //Use {} for parameter
    return (
        <div>
            <h2>Person userId is: {personDetail.userId},<br></br>
            Person id is: {personDetail.id} and<br></br>
            Person title is: {personDetail.title}
            </h2>
        </div>
    )
}
