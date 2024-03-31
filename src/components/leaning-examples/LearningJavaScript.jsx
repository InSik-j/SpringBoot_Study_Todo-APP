const person = {
    name : 'Ranga',
    address : { // 객체 생성
        line1: 'Baker Street',
        line2: 'London',
        country:'UK'
    },
    profiles: ['twitter', 'linkedin', 'instargram'], // 배열 
    printProfile: () => {
        person.profiles.map(
            profile=> console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return(
        <div>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}